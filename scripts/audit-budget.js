const path = require("node:path");

global.window = {};
require(path.join(__dirname, "..", "data", "trip-data.js"));

const data = global.window.TRIP_DATA;
const categoryTotal = data.budget.categories.reduce((sum, item) => sum + item.amount, 0);
const plannedPurchasesTotal = (data.tripCosts?.plannedPurchases || []).reduce((sum, item) => sum + item.amount, 0);
const onlinePurchasesTotal = (data.tripCosts?.onlinePurchases || [])
  .reduce((sum, group) => sum + (group.items || []).reduce((groupSum, item) => groupSum + item.amount, 0), 0);
const chicagoPocketMoneyTotal = Number(data.tripCosts?.chicagoPocketMoney?.amount || 0);
const dayTotal = data.itinerary.reduce((sum, day) => sum + day.dayTotal, 0) + plannedPurchasesTotal + onlinePurchasesTotal + chicagoPocketMoneyTotal;
const mismatches = data.itinerary
  .map((day) => ({
    date: day.date,
    declared: day.dayTotal,
    actual: day.segments.flatMap((segment) => segment.items).reduce((sum, item) => sum + (item.cost || 0), 0)
  }))
  .filter((day) => day.declared !== day.actual);

const failures = [];

if (Math.abs(categoryTotal - data.budget.projectedTotal) > 0.01) {
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

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(JSON.stringify({
  status: "ok",
  projected: data.budget.projectedTotal,
  target: data.budget.cap,
  ceiling: data.budget.absoluteCeiling,
  remaining: data.budget.cap - data.budget.projectedTotal
}, null, 2));
