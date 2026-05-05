const path = require("node:path");

global.window = {};
require(path.join(__dirname, "..", "data", "trip-data.js"));

const data = global.window.TRIP_DATA;
const categoryTotal = data.budget.categories.reduce((sum, item) => sum + item.amount, 0);
const dayTotal = data.itinerary.reduce((sum, day) => sum + day.dayTotal, 0);
const coffee = data.budget.categories.find((item) => item.name === "Coffee beans")?.amount ?? 0;
const mismatches = data.itinerary
  .map((day) => ({
    date: day.date,
    declared: day.dayTotal,
    actual: day.segments.flatMap((segment) => segment.items).reduce((sum, item) => sum + (item.cost || 0), 0)
  }))
  .filter((day) => day.declared !== day.actual);

const failures = [];

if (categoryTotal !== data.budget.projectedTotal) {
  failures.push(`Category total ${categoryTotal} does not match projected total ${data.budget.projectedTotal}.`);
}

if (dayTotal !== data.budget.projectedTotal) {
  failures.push(`Day total ${dayTotal} does not match projected total ${data.budget.projectedTotal}.`);
}

if (mismatches.length) {
  failures.push(`Day/item mismatches: ${JSON.stringify(mismatches)}`);
}

if (data.budget.projectedTotal > data.budget.cap) {
  failures.push(`Projected total ${data.budget.projectedTotal} exceeds target ${data.budget.cap}.`);
}

if (data.budget.absoluteCeiling && data.budget.projectedTotal > data.budget.absoluteCeiling) {
  failures.push(`Projected total ${data.budget.projectedTotal} exceeds ceiling ${data.budget.absoluteCeiling}.`);
}

if (coffee > 60) {
  failures.push(`Coffee bean budget ${coffee} exceeds $60 cap.`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(JSON.stringify({
  status: "ok",
  projected: data.budget.projectedTotal,
  target: data.budget.cap,
  ceiling: data.budget.absoluteCeiling,
  remaining: data.budget.cap - data.budget.projectedTotal,
  coffee
}, null, 2));
