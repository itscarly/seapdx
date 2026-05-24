const fs = require("node:fs");
const path = require("node:path");

const reportPath = path.join(__dirname, "..", "data", "hotel-monitor-report.json");
const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
const failures = [];

const seattle = report.cities?.seattle;
const portland = report.cities?.portland;

if (!seattle) {
  failures.push("report.cities.seattle is missing.");
} else {
  if (seattle.trip.checkIn !== "2026-11-01" || seattle.trip.checkOut !== "2026-11-04") {
    failures.push("Seattle trip window should be Nov 1–4, 2026.");
  }
  if (!Array.isArray(seattle.excluded) && !Array.isArray(seattle.eligible) && !Array.isArray(seattle.needsCheck)) {
    failures.push("Seattle report is missing hotel arrays.");
  }
  const allSeattle = [...(seattle.eligible || []), ...(seattle.excluded || []), ...(seattle.needsCheck || [])];
  for (const hotel of allSeattle) {
    if (!hotel.directBookingUrl || !hotel.directBookingUrl.startsWith("https://")) {
      failures.push(`Seattle ${hotel.id} is missing a direct HTTPS booking link.`);
    }
  }
}

if (!portland) {
  failures.push("report.cities.portland is missing.");
} else {
  if (portland.trip.checkIn !== "2026-11-04" || portland.trip.checkOut !== "2026-11-09") {
    failures.push("Portland trip window should be Nov 4–9, 2026.");
  }
  if (!Array.isArray(portland.excluded) && !Array.isArray(portland.eligible) && !Array.isArray(portland.needsCheck)) {
    failures.push("Portland report is missing hotel arrays.");
  }
}

if (!report.generatedAt) {
  failures.push("Report is missing generatedAt timestamp.");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

const seattleTotal = (seattle.eligible?.length || 0) + (seattle.excluded?.length || 0) + (seattle.needsCheck?.length || 0);
const portlandTotal = (portland.eligible?.length || 0) + (portland.excluded?.length || 0) + (portland.needsCheck?.length || 0);

console.log(JSON.stringify({
  status: "ok",
  generatedAt: report.generatedAt,
  seattle: {
    eligible: seattle.eligible?.length || 0,
    excluded: seattle.excluded?.length || 0,
    needsCheck: seattle.needsCheck?.length || 0,
    total: seattleTotal,
    benchmark: seattle.benchmark?.name
  },
  portland: {
    eligible: portland.eligible?.length || 0,
    excluded: portland.excluded?.length || 0,
    needsCheck: portland.needsCheck?.length || 0,
    total: portlandTotal,
    benchmark: portland.benchmark?.name
  }
}, null, 2));
