const fs = require("node:fs");
const path = require("node:path");
const { buildReport, formatMoney, loadSource, validateReport } = require("./hotel-monitor-lib");

const rootDir = path.join(__dirname, "..");
const source = loadSource(rootDir);
const report = buildReport(source);
const failures = validateReport(report);

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

const reportPath = path.join(rootDir, "data", "hotel-monitor-report.json");
const markdownPath = path.join(rootDir, "research", "hotels", "latest-report.md");

fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);

const lines = [
  "# Seattle Hotel Intelligence Report",
  "",
  `Generated from manual planning snapshot: ${report.meta.snapshotDate}`,
  "",
  `- Benchmark booking: ${report.seattle.benchmark.name}`,
  `- Benchmark total: ${formatMoney(report.seattle.benchmark.trueTotalCost)}`,
  `- Seattle cap: ${formatMoney(report.seattle.trip.budgetCap)}`,
  `- Active automation cadence: ${report.seattle.automation.activeSchedule}`,
  `- Upcoming automation cadence: ${report.seattle.automation.upcomingSchedule}`,
  `- Last automated check: ${report.seattle.automation.lastAutomatedCheckAt || "pending first run"}`,
  `- Disclaimer: ${report.meta.disclaimer}`,
  "",
  "## Seattle watchlist",
  ""
];

for (const hotel of report.seattle.eligible) {
  lines.push(`### ${hotel.name}`);
  lines.push(`- Recommendation: ${hotel.recommendation}`);
  lines.push(`- Verification status: ${hotel.priceVerification.status}`);
  lines.push(`- True total: ${formatMoney(hotel.trueTotalCost)}`);
  lines.push(`- Value-adjusted total: ${formatMoney(hotel.valueAdjustedTotal)}`);
  lines.push(`- Savings vs Boylston: ${formatMoney(hotel.savingsVsCurrent)}`);
  lines.push(`- Transit score: ${hotel.transitScore}`);
  lines.push(`- Review score: ${hotel.quality.reviewScore}`);
  lines.push(`- Direct booking: ${hotel.directBookingUrl}`);
  lines.push(`- Verification note: ${hotel.priceVerification.evidenceNote}`);
  lines.push(`- Notes: ${hotel.notes}`);
  if (hotel.alerts.length) {
    lines.push(`- Alerts: ${hotel.alerts.join(" | ")}`);
  }
  lines.push("");
}

lines.push("## Excluded candidates", "");
for (const hotel of report.seattle.excluded) {
  lines.push(`- ${hotel.name}: ${hotel.qualityFailures.join("; ")}`);
}

lines.push("", "## Portland status", "");
lines.push("- Portland framework scaffolded only.");
lines.push("- Exact ranking remains blocked until the total post-tax lodging cap is supplied.");

fs.writeFileSync(markdownPath, `${lines.join("\n")}\n`);

console.log(JSON.stringify({
  status: "ok",
  reportPath: path.relative(rootDir, reportPath),
  markdownPath: path.relative(rootDir, markdownPath),
  eligibleHotels: report.seattle.eligible.length,
  excludedHotels: report.seattle.excluded.length
}, null, 2));
