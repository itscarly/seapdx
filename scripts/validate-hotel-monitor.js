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

if (!Array.isArray(report.seattle.excluded) || report.seattle.excluded.length < 2) {
  failures.push("Seattle hotel tracker should surface excluded direct-site quotes.");
}

for (const hotel of report.seattle.excluded) {
  if (!hotel.directBookingUrl || !hotel.directBookingUrl.startsWith("https://")) {
    failures.push(`${hotel.id} is missing a direct HTTPS booking link.`);
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
