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

  // PAL Award Tax Monitor
  const airfareSummary = readJson(path.join(rootDir, "research", "airfare", "latest-summary.json"));
  const airfareWatch = readJson(path.join(rootDir, "data", "airfare-watch.json"));

  lines.push("--- PAL Award Tax Monitor ---");
  if (airfareWatch && airfareWatch.routes) {
    for (const route of airfareWatch.routes) {
      const age = daysSince(route.alert.lastChecked);
      const ageNote = age === null ? "never checked" : age === 0 ? "checked today" : `last checked ${age}d ago`;
      lines.push(`  ${route.label}: ${money(route.currentTax)} (${ageNote})`);
    }
    if (airfareSummary) {
      if (airfareSummary.drops > 0) lines.push(`  ⚠ TAX DROP DETECTED on last run — check research/airfare/latest-report.md`);
      if (airfareSummary.increases > 0) lines.push(`  ↑ Tax increase detected on last run`);
    }
  } else {
    lines.push("  No PAL tax data found — run: npm run monitor:pal-taxes");
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
  lines.push("  npm run monitor:pal-taxes   — check PAL taxes now");
  lines.push("  npm run monitor:hotels      — check hotel prices now");
  lines.push("  npm run build:hotels        — rebuild hotel report from source");
  lines.push("  npm run monitor:itinerary   — check itinerary source URLs");
  lines.push("");
  lines.push("=== END STATUS ===");

  // Print to stdout so hook captures it in session context
  console.log(lines.join("\n"));
}

main();
