const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.join(__dirname, "..");
const sourcePath = path.join(rootDir, "data", "hotel-monitor-source.json");
const reportDir = path.join(rootDir, "research", "hotels");
const reportPath = path.join(reportDir, "latest-report.md");
const summaryPath = path.join(reportDir, "latest-summary.json");

// Date-gated cadence — same logic as PAL monitor but keyed to Nov 2026 travel.
// Before Sep 1 2026  → Tue/Fri only
// Sep 1–30 2026      → Mon only
// Oct 1 2026+        → every day
function shouldRunToday() {
  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const dayOfWeek = now.getUTCDay(); // 0=Sun,1=Mon,2=Tue,3=Wed,4=Thu,5=Fri,6=Sat

  const sep2026 = new Date("2026-09-01T00:00:00Z");
  const oct2026 = new Date("2026-10-01T00:00:00Z");

  if (now >= oct2026) return { run: true, reason: "daily cadence (Oct 2026+)", today };
  if (now >= sep2026) {
    const run = dayOfWeek === 1; // Monday only
    return { run, reason: "weekly cadence (Sep 2026)", today };
  }
  const run = [2, 5].includes(dayOfWeek); // Tue/Fri
  return { run, reason: "2x/week cadence (before Sep 2026)", today };
}

function loadSource() {
  return JSON.parse(fs.readFileSync(sourcePath, "utf8"));
}

function formatMoney(v) {
  return typeof v === "number" ? `$${v.toFixed(2)}` : "unavailable";
}

// Attempt a HEAD fetch to verify the direct booking URL is still reachable.
// We can't scrape live prices from hotel booking engines (Cloudflare blocks, JS-rendered).
// The monitor records last-known prices and flags for manual re-verification.
// When a new price IS manually entered into the source file, this script detects
// the change vs the previous run and fires alerts.
async function checkHotelUrl(url) {
  if (!url) return { reachable: false, status: null, note: "no URL" };
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const res = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      headers: { "User-Agent": "Mozilla/5.0 (compatible; TravelMonitor/1.0)" },
      redirect: "follow"
    });
    return { reachable: res.ok || res.status < 400, status: res.status };
  } catch (err) {
    return { reachable: false, status: null, error: err.message };
  } finally {
    clearTimeout(timeout);
  }
}

async function sendEmailAlert(alerts, city) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ALERT_EMAIL_TO;
  const from = process.env.ALERT_FROM || "alerts@updates.example.com";
  if (!apiKey || !to || !alerts.length) return { attempted: false };

  const lines = [
    `Hotel Monitor Alert — ${city}`,
    "",
    ...alerts.map(a => [
      `Hotel: ${a.name}`,
      `Total for stay: ${formatMoney(a.trueTotalCost)}`,
      `Threshold: ${formatMoney(a.threshold)}`,
      `Savings vs benchmark: ${formatMoney(a.benchmarkCost - a.trueTotalCost)}`,
      `Review score: ${a.reviewScore ? `${a.reviewScore}★` : "not recorded"}`,
      `Elevator: ${a.hasElevator ? "confirmed" : "unknown — verify"}`,
      `Transit: ${a.transitNote || "check hotel page"}`,
      `Free breakfast: ${a.freeBreakfast ? "yes" : "not included"}`,
      `Cancellable: ${a.refundable ? "yes (refundable)" : "check policy"}`,
      `Direct booking: ${a.directBookingUrl}`,
      ""
    ].join("\n")),
    "Action: Verify live price at the direct booking URL above before rebooking.",
    "If price is confirmed, cancel existing reservation and rebook."
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
      subject: `${city} hotel under threshold — Review now`,
      text: lines.join("\n")
    })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend failed ${response.status}: ${body}`);
  }

  return { attempted: true };
}

function qualifiesForAlert(hotel, benchmarkCost, alertThreshold) {
  if (!hotel.trueTotalCost) return false;
  if (!hotel.refundable) return false;
  if (hotel.trueTotalCost >= alertThreshold) return false;
  if (hotel.reviewScore && hotel.reviewScore < 4.0) return false;
  return true;
}

async function processCity(cityKey, cityData, source) {
  const { trip, currentReservation, watchlist, alertThreshold } = cityData;
  const benchmarkCost = currentReservation.trueTotalCost;
  const threshold = alertThreshold || benchmarkCost;

  const alerts = [];
  const checked = [];

  for (const hotel of (watchlist || [])) {
    const urlCheck = await checkHotelUrl(hotel.directBookingUrl);
    const qualifies = qualifiesForAlert(hotel, benchmarkCost, threshold);

    if (qualifies) {
      alerts.push({
        name: hotel.name,
        trueTotalCost: hotel.trueTotalCost,
        threshold,
        benchmarkCost,
        reviewScore: hotel.reviewScore,
        hasElevator: hotel.hasElevator,
        transitNote: hotel.transitNote,
        freeBreakfast: hotel.freeBreakfast,
        refundable: hotel.refundable,
        directBookingUrl: hotel.directBookingUrl
      });
    }

    checked.push({
      id: hotel.id,
      name: hotel.name,
      trueTotalCost: hotel.trueTotalCost,
      refundable: hotel.refundable,
      reviewScore: hotel.reviewScore,
      qualifies,
      urlReachable: urlCheck.reachable,
      urlStatus: urlCheck.status
    });
  }

  return { cityKey, trip, benchmarkCost, threshold, alerts, checked };
}

function writeReport(results, today) {
  fs.mkdirSync(reportDir, { recursive: true });

  const lines = [
    "# Hotel Monitor Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    ""
  ];

  for (const r of results) {
    lines.push(`## ${r.cityKey.charAt(0).toUpperCase() + r.cityKey.slice(1)}`);
    lines.push("");
    lines.push(`- Trip: ${r.trip.checkIn} – ${r.trip.checkOut} (${r.trip.nights} nights, ${r.trip.guests} guests)`);
    lines.push(`- Benchmark: ${formatMoney(r.benchmarkCost)}`);
    lines.push(`- Alert threshold: ${formatMoney(r.threshold)}`);
    lines.push(`- Hotels watched: ${r.checked.length}`);
    lines.push(`- Alerts triggered: ${r.alerts.length}`);
    lines.push("");

    if (r.alerts.length) {
      lines.push("### Qualifying Hotels (under threshold)", "");
      for (const a of r.alerts) {
        lines.push(`**${a.name}** — ${formatMoney(a.trueTotalCost)}`);
        lines.push(`- Savings vs benchmark: ${formatMoney(a.benchmarkCost - a.trueTotalCost)}`);
        lines.push(`- Review: ${a.reviewScore ? `${a.reviewScore}★` : "not recorded"}`);
        lines.push(`- Elevator: ${a.hasElevator ? "confirmed" : "unknown"}`);
        lines.push(`- Breakfast: ${a.freeBreakfast ? "included" : "not included"}`);
        lines.push(`- Transit: ${a.transitNote || "verify"}`);
        lines.push(`- Booking: ${a.directBookingUrl}`);
        lines.push("");
      }
    } else {
      lines.push("No hotels currently under the alert threshold.", "");
    }

    lines.push("### Full Watchlist", "");
    for (const h of r.checked) {
      const flag = h.qualifies ? "✓ QUALIFIES" : "✗";
      lines.push(`- ${flag} ${h.name}: ${formatMoney(h.trueTotalCost)} | refundable: ${h.refundable ? "yes" : "unknown"} | stars: ${h.reviewScore || "?"} | URL: ${h.urlReachable ? "reachable" : "unreachable"}`);
    }
    lines.push("");
  }

  lines.push(
    "## Notes",
    "",
    "- Hotel prices are manually updated in `data/hotel-monitor-source.json` after each direct-booking check.",
    "- This monitor cannot scrape live prices from JS-rendered booking engines.",
    "- To update a price: open the direct booking URL, verify the total, update `trueTotalCost` in the source file.",
    "- Re-run `npm run monitor:hotels` after manual price updates to refresh the report.",
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

  const source = loadSource();
  const cityKeys = Object.keys(source).filter(k => k !== "meta");
  const results = [];

  for (const cityKey of cityKeys) {
    const cityData = source[cityKey];
    if (!cityData.trip || !cityData.watchlist) continue;
    const result = await processCity(cityKey, cityData, source);
    results.push(result);
  }

  // Send email alerts by city
  const allAlerts = results.flatMap(r => r.alerts.map(a => ({ ...a, city: r.cityKey })));
  let emailSummary = { attempted: false };

  if (allAlerts.length) {
    try {
      // Group by city for cleaner emails
      for (const r of results) {
        if (r.alerts.length) {
          emailSummary = await sendEmailAlert(r.alerts, r.cityKey.charAt(0).toUpperCase() + r.cityKey.slice(1));
        }
      }
    } catch (err) {
      emailSummary = { attempted: true, error: err.message };
    }
  }

  writeReport(results, cadence.today);

  const summary = {
    checkedAt: new Date().toISOString(),
    today: cadence.today,
    cadence: cadence.reason,
    cities: results.map(r => ({
      city: r.cityKey,
      hotelsChecked: r.checked.length,
      alerts: r.alerts.length,
      benchmarkCost: r.benchmarkCost,
      threshold: r.threshold
    })),
    totalAlerts: allAlerts.length,
    emailAttempted: emailSummary.attempted,
    emailError: emailSummary.error || null
  };

  fs.mkdirSync(reportDir, { recursive: true });
  fs.writeFileSync(summaryPath, `${JSON.stringify(summary, null, 2)}\n`);
  console.log(JSON.stringify(summary, null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
