const fs = require("node:fs");
const path = require("node:path");

const watchPath = path.join(__dirname, "..", "data", "airfare-watch.json");
const watch = JSON.parse(fs.readFileSync(watchPath, "utf8"));
const failures = [];

function isIsoDate(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value);
}

if (!watch.watchName) failures.push("airfare-watch.json missing watchName");
if (!watch.trip) {
  failures.push("airfare-watch.json missing trip");
} else {
  if (watch.trip.tripType !== "one-way") failures.push("trip.tripType must be one-way");
  if (watch.trip.cabin !== "economy") failures.push("trip.cabin must be economy");
  if (watch.trip.destination !== "MNL") failures.push("trip.destination must be MNL");
  if (!Array.isArray(watch.trip.origins) || watch.trip.origins.join(",") !== "SFO,ORD") {
    failures.push("trip.origins must be [SFO, ORD]");
  }
  if (!watch.trip.departureWindow || !isIsoDate(watch.trip.departureWindow.start) || !isIsoDate(watch.trip.departureWindow.end)) {
    failures.push("trip.departureWindow must include ISO start and end dates");
  }
}

if (!Array.isArray(watch.cadence) || watch.cadence.length < 3) {
  failures.push("airfare-watch.json missing cadence plan");
} else {
  const september = watch.cadence.find((entry) => String(entry.period || "").includes("2026-09-01"));
  if (!september) {
    failures.push("cadence is missing the September 2026 entry");
  } else if (!String(september.frequency).toLowerCase().includes("twice weekly")) {
    failures.push("September cadence must be twice weekly");
  }
}

if (!Array.isArray(watch.acceptableAirlines) || watch.acceptableAirlines.length === 0) {
  failures.push("acceptableAirlines must be a non-empty array");
}

if (!watch.latestRun) {
  failures.push("latestRun is missing");
} else {
  if (!watch.latestRun.recommendation) failures.push("latestRun.recommendation is missing");
  if (!watch.latestRun.summary) failures.push("latestRun.summary is missing");
}

if (!Array.isArray(watch.observations) || watch.observations.length === 0) {
  failures.push("observations must contain at least one airfare observation");
} else {
  for (const observation of watch.observations) {
    if (!observation.origin || (observation.origin !== "SFO" && observation.origin !== "ORD")) {
      failures.push(`Invalid observation origin: ${observation.origin}`);
    }
    if (observation.destination !== "MNL") failures.push(`Invalid observation destination: ${observation.destination}`);
    if (!isIsoDate(observation.departureDate)) failures.push(`Observation missing ISO departureDate: ${observation.departureDate}`);
    if (!observation.airline) failures.push("Observation missing airline");
    if (typeof observation.listedFareUsd !== "number") failures.push(`Observation missing listedFareUsd: ${observation.airline} ${observation.origin}`);
    if (typeof observation.directAirlineVerified !== "boolean") failures.push(`Observation missing boolean directAirlineVerified: ${observation.airline} ${observation.origin}`);
    if (!observation.verificationStatus) failures.push(`Observation missing verificationStatus: ${observation.airline} ${observation.origin}`);
  }
}

if (!watch.routeSignals || !watch.routeSignals.sfo || !watch.routeSignals.ord) {
  failures.push("routeSignals must include both sfo and ord entries");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

const verified = watch.observations.filter((item) => item.directAirlineVerified);
console.log(JSON.stringify({
  status: "ok",
  watchName: watch.watchName,
  recommendation: watch.latestRun.recommendation,
  observationCount: watch.observations.length,
  directVerifiedCount: verified.length,
  septemberCadence: watch.cadence.find((entry) => String(entry.period || "").includes("2026-09-01"))?.frequency || null
}, null, 2));
