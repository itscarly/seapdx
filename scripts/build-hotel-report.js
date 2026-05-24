const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.join(__dirname, "..");
const sourcePath = path.join(rootDir, "data", "hotel-monitor-source.json");
const reportPath = path.join(rootDir, "data", "hotel-monitor-report.json");
const markdownDir = path.join(rootDir, "research", "hotels");
const markdownPath = path.join(markdownDir, "latest-report.md");

function formatMoney(value) {
  return typeof value === "number" ? `$${value.toFixed(2)}` : "—";
}

function qualifies(hotel, alertThreshold) {
  if (typeof hotel.trueTotalCost !== "number") return false;
  if (hotel.trueTotalCost >= alertThreshold) return false;
  if (hotel.refundable === false) return false;
  if (typeof hotel.reviewScore === "number" && hotel.reviewScore < 4.0) return false;
  return true;
}

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const cityKeys = ["seattle", "portland"];
const cityReports = {};
const markdownLines = [
  "# Hotel Intelligence Report — Seattle & Portland",
  "",
  `Generated from direct-site watch snapshot: ${source.meta.snapshotDate}`,
  `Last automated check: ${source.meta.automation.lastAutomatedCheckAt || "pending first run"}`,
  `Summary: ${source.meta.automation.lastAutomatedSummary}`,
  `Disclaimer: ${source.meta.disclaimer}`,
  ""
];

for (const cityKey of cityKeys) {
  const city = source[cityKey];
  if (!city || !city.trip) continue;

  const threshold = city.alertThreshold || city.trip.budgetCap;
  const benchmark = city.currentReservation;
  const watchlist = city.watchlist || [];

  const eligible = watchlist.filter(h => qualifies(h, threshold)).sort((a, b) => a.trueTotalCost - b.trueTotalCost);
  const excluded = watchlist.filter(h => !qualifies(h, threshold)).sort((a, b) => {
    const av = typeof a.trueTotalCost === "number" ? a.trueTotalCost : 99999;
    const bv = typeof b.trueTotalCost === "number" ? b.trueTotalCost : 99999;
    return av - bv;
  });

  const needsCheck = watchlist.filter(h => h.trueTotalCost === null || h.trueTotalCost === undefined);

  cityReports[cityKey] = {
    trip: city.trip,
    alertThreshold: threshold,
    benchmark,
    eligible,
    excluded,
    needsCheck,
    watchlistTotal: watchlist.length,
    monitoringCadence: city.monitoringCadence || [],
    marketStrategy: city.marketStrategy || null,
    recommendationMatrix: city.recommendationMatrix || []
  };

  const cityLabel = cityKey.charAt(0).toUpperCase() + cityKey.slice(1);
  const dateRange = city.trip.dateRange || `${city.trip.checkIn} – ${city.trip.checkOut}`;

  markdownLines.push(`## ${cityLabel} (${dateRange})`);
  markdownLines.push("");
  markdownLines.push(`- Alert threshold: ${formatMoney(threshold)}`);
  markdownLines.push(`- Benchmark: ${benchmark ? `${benchmark.name} ${benchmark.trueTotalCost != null ? formatMoney(benchmark.trueTotalCost) : `confirmed $${benchmark.confirmedTotalPaid || "—"}`}` : "none set"}`);
  markdownLines.push(`- Hotels in watchlist: ${watchlist.length} (${eligible.length} eligible, ${excluded.filter(h => h.trueTotalCost !== null).length} over threshold, ${needsCheck.length} needs price check)`);
  markdownLines.push("");

  if (eligible.length) {
    markdownLines.push("### Eligible (under threshold)");
    markdownLines.push("");
    for (const h of eligible) {
      markdownLines.push(`- ✓ **${h.name}** (${h.brand || "independent"}): ${formatMoney(h.trueTotalCost)} | refundable: ${h.refundable ? "yes" : "unknown"} | stars: ${h.reviewScore || "?"} | elevator: ${h.hasElevator ? "yes" : "?"} | breakfast: ${h.freeBreakfast ? "included" : "no"} | ${h.transitNote}`);
      markdownLines.push(`  Booking: ${h.directBookingUrl}`);
    }
    markdownLines.push("");
  } else {
    markdownLines.push("### No hotels currently under threshold");
    markdownLines.push("");
  }

  if (needsCheck.length) {
    markdownLines.push(`### Needs Price Check (${needsCheck.length} hotels)`);
    markdownLines.push("");
    for (const h of needsCheck) {
      markdownLines.push(`- ${h.name} (${h.brand || "independent"}) | stars: ${h.reviewScore || "?"} | ${h.transitNote || ""}`);
      markdownLines.push(`  Booking URL: ${h.directBookingUrl}`);
    }
    markdownLines.push("");
  }

  const pricedExcluded = excluded.filter(h => typeof h.trueTotalCost === "number");
  if (pricedExcluded.length) {
    markdownLines.push("### Over Threshold (priced, not qualifying)");
    markdownLines.push("");
    for (const h of pricedExcluded) {
      const gap = h.trueTotalCost - threshold;
      markdownLines.push(`- ✗ ${h.name}: ${formatMoney(h.trueTotalCost)} (+${formatMoney(gap)} over threshold) | refundable: ${h.refundable ? "yes" : "unknown"} | cancel by: ${h.cancellationDeadline || "unknown"}`);
    }
    markdownLines.push("");
  }
}

markdownLines.push("## Notes");
markdownLines.push("");
markdownLines.push("- All prices must be verified live at the direct booking URL before rebooking.");
markdownLines.push("- Hotels listed as 'needs price check' have no recorded price — open the booking URL, verify the total, and update `trueTotalCost` in `data/hotel-monitor-source.json`.");
markdownLines.push("- Run `npm run build:hotels` after any manual price update to refresh this report.");
markdownLines.push("");

const report = {
  meta: source.meta,
  generatedAt: new Date().toISOString(),
  cities: cityReports
};

fs.mkdirSync(markdownDir, { recursive: true });
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
fs.writeFileSync(markdownPath, `${markdownLines.join("\n")}\n`);

const totalEligible = Object.values(cityReports).reduce((s, c) => s + c.eligible.length, 0);
const totalNeedsCheck = Object.values(cityReports).reduce((s, c) => s + c.needsCheck.length, 0);
const totalWatchlist = Object.values(cityReports).reduce((s, c) => s + c.watchlistTotal, 0);

console.log(JSON.stringify({
  status: "ok",
  cities: Object.fromEntries(
    Object.entries(cityReports).map(([k, v]) => [k, {
      watchlistTotal: v.watchlistTotal,
      eligible: v.eligible.length,
      needsCheck: v.needsCheck.length,
      overThreshold: v.excluded.filter(h => h.trueTotalCost !== null).length
    }])
  ),
  totalWatchlist,
  totalEligible,
  totalNeedsCheck
}, null, 2));
