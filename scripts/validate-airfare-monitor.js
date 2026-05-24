const fs = require("node:fs");
const path = require("node:path");

const watchPath = path.join(__dirname, "..", "data", "airfare-watch.json");
const watch = JSON.parse(fs.readFileSync(watchPath, "utf8"));
const failures = [];

if (!watch.routes || !Array.isArray(watch.routes)) {
  failures.push("airfare-watch.json missing routes array");
} else {
  for (const route of watch.routes) {
    if (!route.id) failures.push(`Route missing id`);
    if (route.origin !== "SFO" && route.origin !== "ORD") failures.push(`Unexpected origin: ${route.origin}`);
    if (route.destination !== "MNL") failures.push(`Unexpected destination: ${route.destination}`);
    if (typeof route.currentTax !== "number") failures.push(`${route.id} missing numeric currentTax`);
    if (!Array.isArray(route.taxHistory)) failures.push(`${route.id} missing taxHistory array`);
    if (route.taxHistory.length === 0) failures.push(`${route.id} taxHistory is empty — needs at least one baseline entry`);
    for (const entry of route.taxHistory) {
      if (!entry.date || !entry.tax) failures.push(`${route.id} has a taxHistory entry missing date or tax`);
    }
  }
}

if (!watch.monitoringStrategy) {
  failures.push("airfare-watch.json missing monitoringStrategy");
} else {
  if (!watch.monitoringStrategy.bookingDeadline) failures.push("monitoringStrategy missing bookingDeadline");
}

if (!watch.trip) failures.push("airfare-watch.json missing trip");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

const routes = watch.routes;
console.log(JSON.stringify({
  status: "ok",
  watchName: watch.watchName,
  routes: routes.map(r => ({
    id: r.id,
    currentTax: r.currentTax,
    historyEntries: r.taxHistory.length,
    lastChecked: r.alert?.lastChecked
  })),
  bookingDeadline: watch.monitoringStrategy.bookingDeadline
}, null, 2));
