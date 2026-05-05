const fs = require("node:fs");
const path = require("node:path");

global.window = {};
require(path.join(__dirname, "..", "data", "trip-data.js"));

const data = global.window.TRIP_DATA;
const snapshotPath = path.join(__dirname, "..", "data", "monitor-snapshot.json");
const reportDir = path.join(__dirname, "..", "research", "pricing");
const reportPath = path.join(reportDir, "latest-report.md");
const maxUrls = Number.parseInt(process.env.MONITOR_MAX_URLS || "80", 10);

function collectTargets() {
  const targets = [];

  for (const day of data.itinerary) {
    for (const segment of day.segments) {
      for (const item of segment.items) {
        for (const field of ["website", "menu"]) {
          if (item[field]) {
            targets.push({
              kind: field,
              label: `${day.date} - ${item.name}`,
              url: item[field],
              budgetCost: item.cost ?? null,
              category: item.type
            });
          }
        }
      }
    }
  }

  for (const source of data.sources || []) {
    targets.push({
      kind: "source",
      label: source.label,
      url: source.url,
      budgetCost: null,
      category: "source"
    });
  }

  return Array.from(
    new Map(
      targets
        .filter((target) => target.url && target.url.startsWith("http"))
        .map((target) => [target.url, target])
    ).values()
  ).slice(0, maxUrls);
}

function normalizeText(text) {
  return text
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractSignals(text) {
  const prices = Array.from(new Set((text.match(/\$\s?\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g) || [])
    .map((price) => price.replace(/\s+/g, ""))))
    .slice(0, 40);
  const hours = Array.from(new Set((text.match(/\b(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)[^.;]{0,80}?(?:AM|PM|am|pm)\b/g) || [])
    .map((hour) => hour.trim())))
    .slice(0, 25);
  const reservationMentions = /reservation|reserve|book|opentable|resy|tock/i.test(text);
  const happyHourMentions = /happy hour/i.test(text);

  return { prices, hours, reservationMentions, happyHourMentions };
}

async function checkTarget(target) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(target.url, {
      signal: controller.signal,
      headers: {
        "user-agent": "SeattlePortlandItineraryMonitor/1.0 (+manual travel planning)"
      }
    });
    const raw = await response.text();
    const text = normalizeText(raw).slice(0, 250000);
    return {
      ...target,
      ok: response.ok,
      status: response.status,
      checkedAt: new Date().toISOString(),
      finalUrl: response.url,
      ...extractSignals(text)
    };
  } catch (error) {
    return {
      ...target,
      ok: false,
      status: "ERROR",
      checkedAt: new Date().toISOString(),
      error: error.message,
      prices: [],
      hours: [],
      reservationMentions: false,
      happyHourMentions: false
    };
  } finally {
    clearTimeout(timeout);
  }
}

function loadPreviousSnapshot() {
  if (!fs.existsSync(snapshotPath)) return { targets: {} };
  return JSON.parse(fs.readFileSync(snapshotPath, "utf8"));
}

function diff(previous, current) {
  const oldTargets = previous.targets || {};
  const changes = [];

  for (const target of current) {
    const before = oldTargets[target.url];
    if (!before) {
      changes.push({ type: "new-target", target });
      continue;
    }
    if (String(before.status) !== String(target.status)) {
      changes.push({ type: "status-change", target, before: before.status, after: target.status });
    }
    if (JSON.stringify(before.prices || []) !== JSON.stringify(target.prices || [])) {
      changes.push({ type: "price-signal-change", target, before: before.prices || [], after: target.prices || [] });
    }
    if (JSON.stringify(before.hours || []) !== JSON.stringify(target.hours || [])) {
      changes.push({ type: "hour-signal-change", target, before: before.hours || [], after: target.hours || [] });
    }
    if (Boolean(before.happyHourMentions) !== Boolean(target.happyHourMentions)) {
      changes.push({ type: "happy-hour-mention-change", target, before: before.happyHourMentions, after: target.happyHourMentions });
    }
    if (Boolean(before.reservationMentions) !== Boolean(target.reservationMentions)) {
      changes.push({ type: "reservation-mention-change", target, before: before.reservationMentions, after: target.reservationMentions });
    }
  }

  return changes;
}

function writeReport(results, changes) {
  fs.mkdirSync(reportDir, { recursive: true });
  const lines = [
    "# Itinerary Monitor Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    `Targets checked: ${results.length}`,
    `Changes detected: ${changes.length}`,
    "",
    "## Changes",
    ""
  ];

  if (!changes.length) {
    lines.push("No changes detected compared with the previous snapshot.");
  } else {
    for (const change of changes) {
      lines.push(`### ${change.type}: ${change.target.label}`);
      lines.push("");
      lines.push(`- URL: ${change.target.url}`);
      lines.push(`- Category: ${change.target.category}`);
      lines.push(`- Budgeted stop cost: ${change.target.budgetCost ?? "n/a"}`);
      if ("before" in change) lines.push(`- Before: ${JSON.stringify(change.before)}`);
      if ("after" in change) lines.push(`- After: ${JSON.stringify(change.after)}`);
      lines.push("");
    }
  }

  lines.push("## Current Source Signals", "");
  for (const result of results) {
    lines.push(`### ${result.label}`);
    lines.push(`- URL: ${result.url}`);
    lines.push(`- HTTP status: ${result.status}`);
    lines.push(`- Price signals: ${(result.prices || []).join(", ") || "none found"}`);
    lines.push(`- Hour signals: ${(result.hours || []).slice(0, 5).join(" | ") || "none found"}`);
    lines.push(`- Reservation mention: ${result.reservationMentions ? "yes" : "no"}`);
    lines.push(`- Happy hour mention: ${result.happyHourMentions ? "yes" : "no"}`);
    lines.push("");
  }

  fs.writeFileSync(reportPath, `${lines.join("\n")}\n`);
}

async function main() {
  const targets = collectTargets();
  const previous = loadPreviousSnapshot();
  const results = [];

  for (const target of targets) {
    results.push(await checkTarget(target));
  }

  const changes = diff(previous, results);
  const snapshot = {
    generatedAt: new Date().toISOString(),
    targets: Object.fromEntries(results.map((result) => [result.url, result]))
  };

  fs.mkdirSync(path.dirname(snapshotPath), { recursive: true });
  fs.writeFileSync(snapshotPath, `${JSON.stringify(snapshot, null, 2)}\n`);
  writeReport(results, changes);

  const summary = {
    checked: results.length,
    changes: changes.length,
    reportPath: path.relative(path.join(__dirname, ".."), reportPath)
  };
  fs.writeFileSync(path.join(reportDir, "latest-summary.json"), `${JSON.stringify(summary, null, 2)}\n`);
  console.log(JSON.stringify(summary, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
