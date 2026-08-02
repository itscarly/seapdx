const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.join(__dirname, "..");

function money(v) {
  return typeof v === "number" ? `$${v.toFixed(2)}` : "unknown";
}

function loadTripData() {
  global.window = {};
  try {
    require(path.join(rootDir, "data", "trip-data.js"));
    return global.window.TRIP_DATA || null;
  } catch {
    return null;
  }
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

function main() {
  const lines = [
    "=== CODEXPROJECT SESSION STATUS ===",
    `As of: ${new Date().toISOString().slice(0, 10)}`,
    ""
  ];

  const data = loadTripData();
  const calendarJson = readJson(path.join(rootDir, "data", "google-calendar-events-nov1-9-2026.json"));
  const airfare = data?.tripCosts?.confirmed?.airfare;
  const hotels = data?.tripCosts?.confirmed?.accommodations;
  const aaBooking = airfare?.items?.find((item) => item.confirmation === "[redacted]");

  lines.push("--- Trip Summary ---");
  lines.push("  Dashboard focus: public itinerary + executive spend summary");
  if (data?.meta?.verifiedOn) lines.push(`  Last verified: ${data.meta.verifiedOn}`);
  if (Array.isArray(calendarJson)) lines.push(`  Calendar export events: ${calendarJson.length}`);
  lines.push("");

  lines.push("--- Confirmed Costs ---");
  lines.push(`  Airfare: ${money(airfare?.total)}`);
  lines.push(`  Hotels: ${money(hotels?.total)} (${(hotels?.items || []).map((h) => `${h.city}: ${money(h.amount)}`).join(", ")})`);
  if (aaBooking) lines.push(`  Paid AA booking: ${aaBooking.confirmation} (${money(aaBooking.amount)})`);
  lines.push("");

  lines.push("--- Budget Snapshot ---");
  if (data?.budget) {
    lines.push(`  Projected local spend: ${money(data.budget.projectedTotal)} / cap ${money(data.budget.cap)} / ceiling ${money(data.budget.absoluteCeiling)}`);
  }
  lines.push("");

  lines.push("--- Open Watch Items ---");
  lines.push("  Verify POINT NorthWest exact return time from Cannon Beach (Day 6) before booking.");
  lines.push("  Verify Columbia Gorge Express November schedule/fare for Multnomah Falls (Day 8) before booking.");
  lines.push("  Verify \"Sea'd In Capitol Hill\" (Day 4 dinner) actually exists -- could not confirm via research.");
  lines.push("  Reconfirm the Nov 1 Asiana OZ271/272 arrival date directly with Asiana (published schedule notice lists Mon/Tue/Wed/Fri/Sat, not Sunday).");
  lines.push("");

  lines.push("--- Quick Commands ---");
  lines.push("  npm run validate           — syntax, budget, and calendar export checks");
  lines.push("  npm run sync:calendar      — rebuild calendar JSON + CSV artifacts");
  lines.push("  npm run serve              — local preview at http://127.0.0.1:4173/");
  lines.push("");
  lines.push("=== END STATUS ===");

  // Print to stdout so hook captures it in session context
  console.log(lines.join("\n"));
}

main();
