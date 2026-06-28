const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.join(__dirname, "..");

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

function money(v) {
  return typeof v === "number" ? `$${v.toFixed(2)}` : "unknown";
}

function daysSince(dateStr) {
  if (!dateStr) return null;
  const diff = Date.now() - new Date(dateStr).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function main() {
  const lines = [
    "=== CODEXPROJECT SESSION STATUS ===",
    `As of: ${new Date().toISOString().slice(0, 10)}`,
    ""
  ];

  const tripData = readJson(path.join(rootDir, "data", "trip-data.js").replace(/\.js$/, ".json"));
  const verificationSummary = readJson(path.join(rootDir, "data", "verification-summary.json"));
  const calendarJson = readJson(path.join(rootDir, "data", "google-calendar-events-nov1-9-2026.json"));

  lines.push("--- Trip Summary ---");
  lines.push("  Dashboard focus: public itinerary + executive spend summary");
  if (verificationSummary?.verifiedOn) lines.push(`  Last verification: ${verificationSummary.verifiedOn}`);
  if (calendarJson?.events?.length) lines.push(`  Calendar export events: ${calendarJson.events.length}`);
  lines.push("");

  lines.push("--- Confirmed Costs ---");
  lines.push("  Airfare: $1,256.83");
  lines.push("  Hotels: $871.98");
  lines.push("  Paid AA booking: [redacted] ($716.40)");
  lines.push("");

  lines.push("--- Remaining Watch ---");
  lines.push("  Seattle Kraken home-game tickets during Nov 1-4, 2026");
  lines.push("  Official sources only: nhl.com/kraken schedule + single-game tickets");
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
