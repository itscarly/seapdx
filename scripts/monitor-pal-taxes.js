const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const rootDir = path.join(__dirname, "..");
const watchPath = path.join(rootDir, "data", "airfare-watch.json");
const reportDir = path.join(rootDir, "research", "airfare");
const reportPath = path.join(reportDir, "latest-report.md");
const summaryPath = path.join(reportDir, "latest-summary.json");

// Booking deadline: Oct 31, 2026.
// Cadence:
//   Now → Aug 31 2026  : weekly (Mon only)
//   Sep 1–30 2026      : 2x/week (Mon + Thu)
//   Oct 1–31 2026      : 3x/week (Mon + Wed + Fri)
//   Nov 1 2026+        : deadline passed, script exits
const BOOKING_DEADLINE = new Date("2026-11-01T00:00:00Z");

function shouldRunToday() {
  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const dayOfWeek = now.getUTCDay(); // 0=Sun,1=Mon,2=Tue,3=Wed,4=Thu,5=Fri,6=Sat

  if (now >= BOOKING_DEADLINE) {
    return { run: false, deadline: true, reason: "Booking deadline passed (Oct 31 2026). PAL tax monitoring stopped.", today };
  }

  const sep2026 = new Date("2026-09-01T00:00:00Z");
  const oct2026 = new Date("2026-10-01T00:00:00Z");

  if (now >= oct2026) {
    const run = [1, 3, 5].includes(dayOfWeek); // Mon/Wed/Fri
    return { run, reason: "3x/week cadence (Oct 2026 — final month)", today };
  }
  if (now >= sep2026) {
    const run = [1, 4].includes(dayOfWeek); // Mon + Thu
    return { run, reason: "2x/week cadence (Sep 2026)", today };
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

// Navigate PAL.com award booking flow using Playwright Chromium.
// Selects the route, enters dates, and extracts the taxes & fees total
// from the flight results or checkout summary page.
async function fetchPalTaxPlaywright(route) {
  const { origin, destination } = route;
  // Award search URL — departure window Mar 7, 2027
  const url = `https://www.philippineairlines.com/en/plan-and-book/book-a-flight/search?tripType=OW&origin=${origin}&destination=${destination}&departureDate=2027-03-07&passengers=1&cabin=Business&awardBooking=true`;

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      locale: "en-US",
      viewport: { width: 1280, height: 800 }
    });
    const page = await context.newPage();

    await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });

    // Wait up to 20s for flight results or price elements to appear
    const priceSelectors = [
      "[class*='tax']", "[class*='fee']", "[class*='price']",
      "[data-testid*='tax']", "[data-testid*='fee']",
      "text=/taxes/i", "text=/fees/i"
    ];

    let pageText = "";
    try {
      await page.waitForSelector(priceSelectors.join(", "), { timeout: 20000 });
    } catch {
      // Page may have loaded but selectors not matched — still try text extraction
    }

    pageText = await page.evaluate(() => document.body.innerText);

    // Patterns to find tax dollar amounts in the rendered page text
    const patterns = [
      /taxes?\s*[&+]\s*fees?\s*[:\-]?\s*USD?\s*\$?([\d,]+\.?\d*)/i,
      /taxes?\s*[&+]\s*fees?\s*[:\-]?\s*\$?([\d,]+\.?\d*)/i,
      /surcharge[s]?\s*[:\-]?\s*USD?\s*\$?([\d,]+\.?\d*)/i,
      /government\s+tax[es]*\s*[:\-]?\s*USD?\s*\$?([\d,]+\.?\d*)/i,
      /fees?\s+and\s+taxes?\s*[:\-]?\s*USD?\s*\$?([\d,]+\.?\d*)/i,
      /total\s+tax[es]*\s*[:\-]?\s*USD?\s*\$?([\d,]+\.?\d*)/i,
      /\$\s*([\d]+\.[\d]{2})\s*(?:taxes|fees)/i
    ];

    for (const pattern of patterns) {
      const match = pageText.match(pattern);
      if (match) {
        const value = parseFloat(match[1].replace(/,/g, ""));
        if (value > 50 && value < 2000) {
          return { found: true, tax: value, source: "playwright", url };
        }
      }
    }

    // Try extracting all dollar amounts in likely tax range as fallback
    const allAmounts = [...pageText.matchAll(/\$([\d,]+\.\d{2})/g)]
      .map(m => parseFloat(m[1].replace(/,/g, "")))
      .filter(v => v > 200 && v < 800);

    if (allAmounts.length === 1) {
      return { found: true, tax: allAmounts[0], source: "playwright-fallback", url, note: "Single amount in tax range extracted" };
    }

    return {
      found: false, tax: null, source: "playwright", url,
      note: "Tax not found in rendered page. PAL flow may require additional interaction. Manual check needed.",
      pageTextSnippet: pageText.slice(0, 500)
    };
  } catch (err) {
    return { found: false, tax: null, source: "playwright-error", url, error: err.message };
  } finally {
    if (browser) await browser.close();
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
    "Action: Log into PAL.com to verify before any booking decisions."
  ];

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from, to: Array.isArray(to) ? to : [to],
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
    "- Now → Aug 31 2026: weekly (Mondays)",
    "- Sep 1–30 2026: 2x/week (Mon + Thu)",
    "- Oct 1–31 2026: 3x/week (Mon + Wed + Fri) — final month",
    "- Nov 1 2026+: monitoring stopped (booking deadline passed)",
    "",
    "## Route Status",
    ""
  ];

  for (const r of results) {
    const hist = r.route.taxHistory;
    const prev = hist.length >= 2 ? hist[hist.length - 2].tax : null;
    lines.push(`### ${r.route.label}`);
    lines.push(`- Current tax: $${r.route.currentTax.toFixed(2)}`);
    if (prev !== null) lines.push(`- Previous tax: $${prev.toFixed(2)}`);
    lines.push(`- Last checked: ${r.route.alert.lastChecked}`);
    lines.push(`- Playwright result: ${r.result.found ? `$${r.result.tax.toFixed(2)} extracted (${r.result.source})` : (r.result.note || r.result.error || "not found")}`);
    if (r.change !== null) {
      const sign = r.change < 0 ? "DROP ↓" : "INCREASE ↑";
      lines.push(`- Change: ${sign} $${Math.abs(r.change).toFixed(2)}`);
    }
    lines.push(`- History entries: ${hist.length}`);
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
    "- Taxes scraped via Playwright headless Chromium from PAL.com award booking flow.",
    "- If scrape fails, manually check PAL.com: Business class award SFO→MNL and ORD→MNL, Mar 7 2027.",
    "- Update `currentTax` in `data/airfare-watch.json` after manual verification.",
    ""
  );

  fs.writeFileSync(reportPath, lines.join("\n"));
}

async function main() {
  const cadence = shouldRunToday();

  if (cadence.deadline) {
    console.log(JSON.stringify({ skipped: true, deadline: true, reason: cadence.reason, today: cadence.today }, null, 2));
    process.exit(0);
  }

  if (!cadence.run && !process.env.FORCE_RUN) {
    console.log(JSON.stringify({ skipped: true, reason: `Not a scheduled run day — ${cadence.reason}`, today: cadence.today }, null, 2));
    process.exit(0);
  }

  console.log(`[PAL Monitor] Running — ${cadence.reason} — ${cadence.today}`);

  const watch = loadWatch();
  const results = [];
  const drops = [];
  const increases = [];
  let watchUpdated = false;

  for (const route of watch.routes) {
    console.log(`[PAL Monitor] Checking ${route.label} via Playwright...`);
    const result = await fetchPalTaxPlaywright(route);
    let change = null;

    if (result.found && result.tax !== null) {
      const previous = route.currentTax;
      change = result.tax - previous;

      if (Math.abs(change) >= 0.01) {
        route.taxHistory.push({
          date: cadence.today,
          tax: result.tax,
          note: change < 0
            ? `Tax dropped from $${previous.toFixed(2)} — auto-detected via Playwright`
            : `Tax increased from $${previous.toFixed(2)} — auto-detected via Playwright`
        });
        route.currentTax = result.tax;
        if (change < 0) drops.push({ route, previous, current: result.tax, change, checkedAt: cadence.today });
        else increases.push({ route, previous, current: result.tax, change, checkedAt: cadence.today });
      } else {
        route.taxHistory.push({ date: cadence.today, tax: result.tax, note: "No change — confirmed via Playwright" });
      }
    } else {
      // Scrape failed — add a note entry so history is complete
      route.taxHistory.push({ date: cadence.today, tax: route.currentTax, note: `Playwright scrape failed: ${result.note || result.error || "unknown"}` });
    }

    route.alert.lastChecked = cadence.today;
    watchUpdated = true;
    results.push({ route, result, change });
    console.log(`[PAL Monitor] ${route.label}: ${result.found ? `$${result.tax}` : "scrape failed"}`);
  }

  if (watchUpdated) {
    watch.updatedAt = new Date().toISOString();
    saveWatch(watch);
  }

  let emailSummary = { attempted: false };
  if (drops.length) {
    try { emailSummary = await sendEmailAlert(drops, watch); }
    catch (err) { emailSummary = { attempted: true, error: err.message }; }
  }

  writeReport(watch, results, drops, increases, emailSummary);

  const summary = {
    checkedAt: new Date().toISOString(),
    today: cadence.today,
    cadence: cadence.reason,
    routesChecked: results.length,
    drops: drops.length,
    increases: increases.length,
    emailAttempted: emailSummary.attempted,
    emailError: emailSummary.error || null,
    routeSummaries: results.map(r => ({
      id: r.route.id,
      label: r.route.label,
      currentTax: r.route.currentTax,
      fetchFound: r.result.found,
      fetchSource: r.result.source,
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
