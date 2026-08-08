const fs = require("node:fs");
const path = require("node:path");

const tripDataPath = path.join(__dirname, "..", "data", "trip-data.js");

function formatToday() {
  const now = new Date();
  return now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function main() {
  const today = formatToday();
  let fileText = fs.readFileSync(tripDataPath, "utf8");
  const next = fileText.replace(/verifiedOn: ".*?"/, `verifiedOn: ${JSON.stringify(today)}`);

  if (next === fileText) {
    console.log(`Last updated already set to ${today}.`);
    return;
  }

  fs.writeFileSync(tripDataPath, next);
  console.log(`Last updated stamped: ${today}`);
}

main();
