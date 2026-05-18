const fs = require("node:fs");
const path = require("node:path");

const tripDataPath = path.join(__dirname, "..", "data", "trip-data.js");
const validStatuses = new Set(["no-material-updates", "material-update", "monitor-only"]);

function parseArgs(argv) {
  const args = {};

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const value = argv[index + 1];
    if (!value || value.startsWith("--")) {
      throw new Error(`Missing value for --${key}`);
    }
    args[key] = value;
    index += 1;
  }

  return args;
}

function escapeForJs(value) {
  return JSON.stringify(value);
}

function renderVerificationSummaryBlock(summary) {
  const watches = (summary.watches || []).map((watch) => [
    "      {",
    `        id: ${escapeForJs(watch.id)},`,
    `        label: ${escapeForJs(watch.label)},`,
    `        checkedOn: ${escapeForJs(watch.checkedOn)},`,
    `        status: ${escapeForJs(watch.status)},`,
    `        note: ${escapeForJs(watch.note)}`,
    "      }"
  ].join("\n")).join(",\n");

  return [
    "  verificationSummary: {",
    `    overallLabel: ${escapeForJs(summary.overallLabel || "Last verified")},`,
    "    watches: [",
    watches,
    "    ]",
    "  },"
  ].join("\n");
}

function loadTripDataObject() {
  global.window = {};
  delete require.cache[require.resolve(tripDataPath)];
  require(tripDataPath);
  return global.window.TRIP_DATA;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const required = ["watch-id", "checked-on", "status", "note"];

  for (const key of required) {
    if (!args[key]) {
      throw new Error(`Missing required flag --${key}`);
    }
  }

  if (!validStatuses.has(args.status)) {
    throw new Error(`Invalid status "${args.status}". Expected one of: ${Array.from(validStatuses).join(", ")}`);
  }

  const data = loadTripDataObject();
  const summary = data.verificationSummary || { overallLabel: "Last verified", watches: [] };
  const watches = Array.isArray(summary.watches) ? [...summary.watches] : [];
  const existingIndex = watches.findIndex((watch) => watch.id === args["watch-id"]);
  const existing = existingIndex >= 0 ? watches[existingIndex] : null;
  const updatedWatch = {
    id: args["watch-id"],
    label: args.label || existing?.label || args["watch-id"],
    checkedOn: args["checked-on"],
    status: args.status,
    note: args.note
  };

  if (existingIndex >= 0) {
    watches[existingIndex] = updatedWatch;
  } else {
    watches.push(updatedWatch);
  }

  const nextSummary = {
    overallLabel: args["overall-label"] || summary.overallLabel || "Last verified",
    watches
  };

  let fileText = fs.readFileSync(tripDataPath, "utf8");
  const overallDate = args["verified-on"] || args["checked-on"];
  fileText = fileText.replace(/verifiedOn: ".*?"/, `verifiedOn: ${escapeForJs(overallDate)}`);

  const summaryPattern = /  verificationSummary: \{[\s\S]*?^  \},\n  budget:/m;
  if (!summaryPattern.test(fileText)) {
    throw new Error("Could not find verificationSummary block in data/trip-data.js");
  }

  const nextBlock = `${renderVerificationSummaryBlock(nextSummary)}\n  budget:`;
  fileText = fileText.replace(summaryPattern, nextBlock);
  fs.writeFileSync(tripDataPath, fileText);

  console.log(JSON.stringify({
    updated: updatedWatch.id,
    verifiedOn: overallDate,
    checkedOn: updatedWatch.checkedOn,
    status: updatedWatch.status
  }, null, 2));
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
