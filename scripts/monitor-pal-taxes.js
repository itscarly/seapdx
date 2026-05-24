const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.join(__dirname, "..");
const watchPath = path.join(rootDir, "data", "airfare-watch.json");
const reportDir = path.join(rootDir, "research", "airfare");
const reportPath = path.join(reportDir, "latest-report.md");
const summaryPath = path.join(reportDir, "latest-summary.json");

// Date-gated cadence: returns true if today is a scheduled run day.
// Before Sep 1 2026 → Mondays only
// Sep 1 – Dec 31 2026 → Mon/Wed/Fri only
// Jan 1 2027+ → every day
function shouldRunToday() {
  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const dayOfWeek = now.getUTCDay(); // 0=Sun,1=Mon,2=Tue,3=Wed,4=Thu,5=Fri,6=Sat

  const sep2026 = new Date("2026-09-01T00:00:00Z");
  const jan2027 = new Date("2027-01-01T00:00:00Z");

  if (now >= jan2027) return { run: true, reason: "daily cadence (Jan 2027+)", today };
  if (now >= sep2026) {
    const run = [1, 3, 5].includes(dayOfWeek); // Mon/Wed/Fri
    return { run, reason: "3x/week cadence (Sep–Dec 2026)", today };
  }
  const run = dayOfWeek === 1; // Monday only
  return { run, reason: "weekly cadence (before Sep 2026)", today };
}

function loadWatch() {
  return JSON.parse(fs.readFileSync(watchPath, "utf8"));
}

function saveWatch(watch) {
  fs.writeFileSync(watchPath, `${JSON.stringify(watch, null, 2)}\n`);
}

// PAL.com does not expose award taxes via a simple static URL —
// the booking flow requires session state. This function fetches
// the PAL award search page and looks for tax/fee patterns in the
// raw HTML. It is a best-effort heuristic; manual override is always
// available by editing airfare-watch.json directly.
async function fetchPalTax(route) {
  const { origin, destination } = route;

  // PAL award calendar URL pattern for one-way SFO/ORD → MNL
  // Departure window: Mar 7–13, 2027
  const url = `https://www.philippineairlines.com/en/plan-and-book/book-a-flight/search?tripType=OW&origin=${origin}&destination=${destination}&departureDate=2027-03-07&passengers=1&cabin=Business&awardBooking=true`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; TravelMonitor/1.0; +personal-travel-planning)",
        "Accept": "text/html,application/xhtml+xml",
        "Accept-Language": "en-US,en;q=0.9"
      }
    });

    const html = await response.text();

    // Look for tax/fee dollar amounts near keywords
    // PAL typically shows taxes as "Taxes & Fees: $370.50" or similar
    const patterns = [
      /taxes?\s*[&+]\s*fees?\s*[:\-]?\s*\$?([\d,]+\.?\d*)/i,
      /surcharge[s]?\s*[:\-]?\s*\$?([\d,]+\.?\d*)/i,
      /government\s+tax\s*[:\-]?\s*\$?([\d,]+\.?\d*)/i,
      /total\s+tax\s*[:\-]?\s*\$?([\d,]+\.?\d*)/i,
      /fees?\s+and\s+taxes?\s*[:\-]?\s*\$?([\d,]+\.?\d*)/i
    ];

    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match) {
        const value = parseFloat(match[1].replace(",", ""));
        if (value > 50 && value < 2000) {
          return { found: true, tax: value, source: "page-scrape", url };
        }
      }
    }

    return {
      found: false,
      tax: null,
      source: "page-scrape",
      url,
      note: "Tax amount not found in page — PAL may require interactive session. Manual check needed."
    };
  } catch (err) {
    return {
      found: false,
      tax: null,
      source: "error",
      url,
      error: err.message,
      note: "Fetch failed — network error or timeout. Manual check needed."
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function sendEmailAlert(drops, watch) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ALERT_EMAIL_TO || process.env.FLIGHT_ALERT_EMAIL_TO;
  const from = process.env.ALERT_FROM || process.env.FLIGHT_ALERT_FROM || "alerts@updates.example.com";

  if (!apiKey || !to || !drops.length) return { attempted: false };

  const lines = [
    "PAL Award Tax Monitor — Price Drop Detected",
    "",
    ...drops.map(d => [
      `Route: ${d.route.label}`,
      `Previous tax: $${d.previous.toFixed(2)}`,
      `New tax: $${d.current.toFixed(2)}`,
      `Change: -$${(d.previous - d.current).toFixed(2)} (${(((d.previous - d.current) / d.previous) * 100).toFixed(1)}% drop)`,
      `Checked: ${d.checkedAt}`,
      ""
    ].join("\n")),
    "Review the latest report:",
    `${reportPath}`,
    "",
    "Action: Log into PAL.com to verify the new tax amount before any booking decisions."
  ];

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: Array.isArray(to) ? to : [to],
      subject: `PAL Award Tax DROPPED on ${drops.map(d => d.route.label).join(", ")} — Review Now`,
      text: lines.join("\n")
    })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend failed ${response.status}: ${body}`);
  }

  return { attempted: true };
}

function writeReport(watch, results, drops, increases, emailSummary) {
  fs.mkdirSync(reportDir, { recursive: true });

  const today = new Date().toISOString().slice(0, 10);
  const lines = [
    "# PAL Award Tax Monitor Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    `Routes monitored: ${results.length}`,
    `Tax drops detected: ${drops.length}`,
    `Tax increases detected: ${increases.length}`,
    `Email alert sent: ${emailSummary.attempted ? "yes" : "no"}`,
    "",
    "## Monitoring Cadence",
    "",
    "- Before Sep 1 2026: weekly (Mondays)",
    "- Sep 1 – Dec 31 2026: 3x/week (Mon/Wed/Fri)",
    "- Jan 1 2027+: daily",
    "",
    "## Route Status",
    ""
  ];

  for (const r of results) {
    lines.push(`### ${r.route.label}`);
    lines.push(`- Current tax: $${r.route.currentTax.toFixed(2)}`);
    lines.push(`- Last checked: ${r.route.alert.lastChecked}`);
    lines.push(`- Fetch result: ${r.result.found ? `$${r.result.tax.toFixed(2)} found on page` : (r.result.note || r.result.error || "not found")}`);
    if (r.change !== null) {
      const sign = r.change < 0 ? "DROP" : "INCREASE";
      lines.push(`- Change: ${sign} $${Math.abs(r.change).toFixed(2)}`);
    }
    lines.push(`- Tax history entries: ${r.route.taxHistory.length}`);
    lines.push("");
  }

  if (drops.length) {
    lines.push("## Tax Drops — Action Required", "");
    for (const d of drops) {
      lines.push(`- ${d.route.label}: $${d.previous.toFixed(2)} → $${d.current.toFixed(2)} (−$${(d.previous - d.current).toFixed(2)})`);
    }
    lines.push("");
  }

  lines.push(
    "## Notes",
    "",
    "- PAL award taxes are set by PAL and can change with fuel surcharges or government fee adjustments.",
    "- Tax drops save real cash per redemption — any drop is worth investigating before booking.",
    "- If fetch fails, check PAL.com manually: Business class award SFO→MNL and ORD→MNL, Mar 7–13 2027.",
    "- Update `currentTax` in `data/airfare-watch.json` after manual verification.",
    ""
  );

  fs.writeFileSync(reportPath, lines.join("\n"));
}

async function main() {
  const cadence = shouldRunToday();

  if (!cadence.run && !process.env.FORCE_RUN) {
    console.log(JSON.stringify({
      skipped: true,
      reason: `Not a scheduled run day — ${cadence.reason}`,
      today: cadence.today
    }, null, 2));
    process.exit(0);
  }

  const watch = loadWatch();
  const results = [];
  const drops = [];
  const increases = [];
  let watchUpdated = false;

  for (const route of watch.routes) {
    const result = await fetchPalTax(route);
    let change = null;

    if (result.found && result.tax !== null) {
      const previous = route.currentTax;
      change = result.tax - previous;

      if (Math.abs(change) >= 0.01) {
        const entry = {
          date: cadence.today,
          tax: result.tax,
          note: change < 0
            ? `Tax dropped from $${previous.toFixed(2)} — auto-detected`
            : `Tax increased from $${previous.toFixed(2)} — auto-detected`
        };
        route.taxHistory.push(entry);
        route.currentTax = result.tax;
        route.alert.lastChecked = cadence.today;
        watchUpdated = true;

        if (change < 0) drops.push({ route, previous, current: result.tax, change, checkedAt: cadence.today });
        else increases.push({ route, previous, current: result.tax, change, checkedAt: cadence.today });
      } else {
        // No meaningful change — just update lastChecked
        route.alert.lastChecked = cadence.today;
        watchUpdated = true;
      }
    } else {
      // Fetch failed or tax not found — update lastChecked anyway
      route.alert.lastChecked = cadence.today;
      watchUpdated = true;
    }

    results.push({ route, result, change });
  }

  if (watchUpdated) {
    watch.updatedAt = new Date().toISOString();
    saveWatch(watch);
  }

  let emailSummary = { attempted: false };
  if (drops.length) {
    try {
      emailSummary = await sendEmailAlert(drops, watch);
    } catch (err) {
      emailSummary = { attempted: true, error: err.message };
    }
  }

  writeReport(watch, results, drops, increases, emailSummary);

  const summary = {
    checkedAt: new Date().toISOString(),
    today: cadence.today,
    cadence: cadence.reason,
    routesChecked: results.length,
    drops: drops.length,
    increases: increases.length,
    changes: drops.length + increases.length,
    emailAttempted: emailSummary.attempted,
    emailError: emailSummary.error || null,
    routeSummaries: results.map(r => ({
      id: r.route.id,
      label: r.route.label,
      currentTax: r.route.currentTax,
      fetchFound: r.result.found,
      change: r.change,
      lastChecked: r.route.alert.lastChecked
    }))
  };

  fs.mkdirSync(reportDir, { recursive: true });
  fs.writeFileSync(summaryPath, `${JSON.stringify(summary, null, 2)}\n`);
  console.log(JSON.stringify(summary, null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
