const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.join(__dirname, "..");

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

function money(v) {
  return typeof v === "number" ? `$${v.toFixed(2)}` : "unknown";
}

function daysSince(dateStr) {
  if (!dateStr) return null;
  const diff = Date.now() - new Date(dateStr).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function main() {
  const lines = [
    "=== CODEXPROJECT SESSION STATUS ===",
    `As of: ${new Date().toISOString().slice(0, 10)}`,
    ""
  ];

  // Airfare Watch
  const airfareSummary = readJson(path.join(rootDir, "research", "airfare", "latest-summary.json"));
  const airfareWatch = readJson(path.join(rootDir, "data", "airfare-watch.json"));

  lines.push("--- Airfare Watch ---");
  if (airfareWatch && Array.isArray(airfareWatch.observations)) {
    const best = airfareSummary?.topVerified?.[0] || airfareSummary?.strongestSignals?.[0] || null;
    const latest = airfareWatch.latestRun || null;
    lines.push(`  Trip: ${airfareWatch.trip?.origins?.join("/") || "SFO/ORD"} to ${airfareWatch.trip?.destination || "MNL"} (${airfareWatch.trip?.departureWindow?.start || "?"} to ${airfareWatch.trip?.departureWindow?.end || "?"})`);
    lines.push(`  Observations: ${airfareWatch.observations.length}, verified ${airfareSummary?.directVerifiedCount ?? "?"}, discovery ${airfareSummary?.discoveryOnlyCount ?? "?"}`);
    if (best) {
      const fare = typeof best.directAirlineFare === "number" ? best.directAirlineFare : best.discoveryFare;
      lines.push(`  Best current path: ${best.airline} ${best.routing} ${money(fare)} (${best.directAirlineVerified ? "verified" : "signal"})`);
    }
    if (latest) {
      lines.push(`  Latest run: ${latest.phase} — ${latest.recommendation}`);
    }
    if (airfareSummary) {
      lines.push(`  System recommendation: ${airfareSummary.systemRecommendation}`);
    }
  } else {
    lines.push("  No airfare watch data found — run: npm run monitor:airfare");
  }
  lines.push("");

  // Hotel Monitor
  const hotelSummary = readJson(path.join(rootDir, "research", "hotels", "latest-summary.json"));
  const hotelSource = readJson(path.join(rootDir, "data", "hotel-monitor-source.json"));

  lines.push("--- Hotel Monitor ---");
  if (hotelSource) {
    // Seattle
    const sea = hotelSource.seattle;
    if (sea) {
      const benchmarkNote = sea.currentReservation
        ? `benchmark: ${sea.currentReservation.name} ${money(sea.currentReservation.trueTotalCost)}`
        : "no benchmark set";
      lines.push(`  Seattle (Nov 1–4): ${benchmarkNote}, cap $${sea.trip.budgetCap}`);
    }
    // Portland
    const pdx = hotelSource.portland;
    if (pdx && pdx.currentReservation) {
      lines.push(`  Portland (Nov 4–9): benchmark: ${pdx.currentReservation.name} ${money(pdx.currentReservation.trueTotalCost)}, alert threshold $${pdx.alertThreshold}`);
    }
    if (hotelSummary) {
      if (hotelSummary.totalAlerts > 0) lines.push(`  ⚠ HOTEL ALERT: ${hotelSummary.totalAlerts} hotel(s) under threshold — check research/hotels/latest-report.md`);
      else lines.push(`  No hotels under threshold on last run (${hotelSummary.today || "date unknown"})`);
    }
  } else {
    lines.push("  No hotel source data found");
  }
  lines.push("");

  // Quick action reminders
  lines.push("--- Quick Commands ---");
  lines.push("  npm run monitor:airfare     — rebuild airfare report from source data");
  lines.push("  npm run monitor:hotels      — check hotel prices now");
  lines.push("  npm run build:hotels        — rebuild hotel report from source");
  lines.push("  npm run monitor:itinerary   — check itinerary source URLs");
  lines.push("");
  lines.push("=== END STATUS ===");

  // Print to stdout so hook captures it in session context
  console.log(lines.join("\n"));
}

main();
