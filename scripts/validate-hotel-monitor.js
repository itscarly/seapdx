const fs = require("node:fs");
const path = require("node:path");

const reportPath = path.join(__dirname, "..", "data", "hotel-monitor-report.json");
const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
const failures = [];

if (report.seattle.trip.checkIn !== "2026-11-01" || report.seattle.trip.checkOut !== "2026-11-04") {
  failures.push("Seattle hotel tracker does not enforce the correct Nov 1-4, 2026 stay window.");
}

if (report.seattle.trip.guests !== 2) {
  failures.push("Seattle hotel tracker does not enforce 2 guests.");
}

if (report.meta.automation.lastAutomatedCheckAt !== "2026-05-23T20:58:33.329Z") {
  failures.push("Seattle hotel tracker is not carrying the latest automated check timestamp.");
}

if (!report.meta.automation.lastAutomatedSummary || !report.meta.automation.lastAutomatedSummary.includes("No Seattle hotel qualifies")) {
  failures.push("Seattle hotel tracker summary is not explicit about the cap result.");
}

if (report.seattle.benchmark.priceVerification.status !== "blocked") {
  failures.push("Boylston benchmark status should reflect the blocked direct quote path from this run.");
}

if (!Array.isArray(report.seattle.excluded) || report.seattle.excluded.length < 3) {
  failures.push("Seattle hotel tracker should surface the three direct-site quotes captured in this run.");
}

for (const hotel of report.seattle.excluded) {
  if (!hotel.directBookingUrl || !hotel.directBookingUrl.startsWith("https://")) {
    failures.push(`${hotel.id} is missing a direct HTTPS booking link.`);
  }
  if (typeof hotel.trueTotalCost !== "number") {
    failures.push(`${hotel.id} is missing a numeric total stay quote.`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(JSON.stringify({
  status: "ok",
  eligibleHotels: report.seattle.eligible.length,
  excludedHotels: report.seattle.excluded.length,
  benchmark: report.seattle.benchmark.name
}, null, 2));
