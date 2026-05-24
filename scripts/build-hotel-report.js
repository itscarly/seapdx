const fs = require("node:fs");
const path = require("node:path");
const { computeHotelCollections, getDisplayPrice } = require("./lib/hotel-pricing");

const rootDir = path.join(__dirname, "..");
const sourcePath = path.join(rootDir, "data", "hotel-monitor-source.json");
const reportPath = path.join(rootDir, "data", "hotel-monitor-report.json");
const markdownDir = path.join(rootDir, "research", "hotels");
const markdownPath = path.join(markdownDir, "latest-report.md");

function formatMoney(value) {
  return typeof value === "number" ? `$${value.toFixed(2)}` : "—";
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

  const { eligible, excluded, needsCheck } = computeHotelCollections({
    alertThreshold: threshold,
    watchlist
  });

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
  const pricedNeedsCheck = needsCheck.filter((hotel) => getDisplayPrice(hotel) != null);
  markdownLines.push(`- Hotels in watchlist: ${watchlist.length} (${eligible.length} eligible, ${pricedNeedsCheck.length} with last verified prices pending recheck, ${needsCheck.length - pricedNeedsCheck.length} still missing prices)`);
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
      const reason = h.priceVerification?.blockedReason || h.priceVerification?.status || "needs price";
      const visiblePrice = getDisplayPrice(h);
      markdownLines.push(`- ${h.name} (${h.brand || "independent"}) | ${visiblePrice != null ? `last verified ${formatMoney(visiblePrice)} | ` : ""}stars: ${h.reviewScore || "?"} | ${h.transitNote || ""} | status: ${reason}`);
      markdownLines.push(`  Booking URL: ${h.directBookingUrl}`);
    }
    markdownLines.push("");
  }

  const pricedExcluded = excluded.filter((hotel) => getDisplayPrice(hotel) != null);
  if (pricedExcluded.length) {
    markdownLines.push("### Over Threshold (priced, not qualifying)");
    markdownLines.push("");
    for (const h of pricedExcluded) {
      const price = getDisplayPrice(h);
      const gap = price - threshold;
      markdownLines.push(`- ✗ ${h.name}: ${formatMoney(price)} (+${formatMoney(gap)} over threshold) | refundable: ${h.refundable ? "yes" : "unknown"} | cancel by: ${h.cancellationDeadline || "unknown"}`);
    }
    markdownLines.push("");
  }
}

markdownLines.push("## Notes");
markdownLines.push("");
markdownLines.push("- All prices must be verified live at the direct booking URL before rebooking.");
markdownLines.push("- Hotels listed as 'needs price check' are blocked, stale, ambiguous, or still missing a trustworthy stay total.");
markdownLines.push("- The layered monitor preserves the last trustworthy price and records blocker state instead of overwriting with a low-confidence scrape.");
markdownLines.push("- Run `npm run scrape:hotels` and then `npm run build:hotels` to refresh this report.");
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
      overThreshold: v.excluded.filter((hotel) => getDisplayPrice(hotel) != null).length
    }])
  ),
  totalWatchlist,
  totalEligible,
  totalNeedsCheck
}, null, 2));
