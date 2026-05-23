const path = require("node:path");
const { buildReport, loadSource, validateReport } = require("./hotel-monitor-lib");

const rootDir = path.join(__dirname, "..");
const source = loadSource(rootDir);
const report = buildReport(source);
const failures = validateReport(report);

const transitLeaders = report.seattle.eligible
  .slice()
  .sort((left, right) => right.transitScore - left.transitScore)
  .slice(0, 3)
  .map((hotel) => `${hotel.name}:${hotel.transitScore}`);

const logicChecks = [];
if (report.seattle.ranked.some((hotel) => hotel.priceVerification?.status !== "live-verified" && hotel.recommendation === "REBOOK NOW")) {
  logicChecks.push("Unverified hotel should never receive REBOOK NOW.");
}
if (report.seattle.eligible.length && !report.seattle.ranked.some((hotel) => hotel.recommendation === "WATCH")) {
  logicChecks.push("Expected at least one WATCH candidate.");
}
if (report.seattle.eligible.length && !report.seattle.ranked.some((hotel) => hotel.alerts.some((alert) => alert.includes("Quote not live-verified yet")))) {
  logicChecks.push("Expected at least one unverified-quote alert.");
}
if (!report.seattle.eligible.length && !report.seattle.excluded.length) {
  logicChecks.push("Expected at least one Seattle watchlist record after scoring.");
}
if (!report.seattle.excluded.some((hotel) => hotel.qualityFailures.some((reason) => reason.includes("Condition too dated")))) {
  logicChecks.push("Expected at least one candidate excluded for dated-condition risk.");
}

const allFailures = failures.concat(logicChecks);

if (allFailures.length) {
  console.error(allFailures.join("\n"));
  process.exit(1);
}

console.log(JSON.stringify({
  status: "ok",
  eligibleHotels: report.seattle.eligible.length,
  excludedHotels: report.seattle.excluded.length,
  transitLeaders,
  benchmark: report.seattle.benchmark.name
}, null, 2));
