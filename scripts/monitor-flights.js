const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

global.window = {};
require(path.join(__dirname, "..", "data", "trip-data.js"));

const data = global.window.TRIP_DATA;
const reportDir = path.join(__dirname, "..", "research", "flights");
const reportPath = path.join(reportDir, "latest-report.md");
const summaryPath = path.join(reportDir, "latest-summary.json");
const snapshotPath = path.join(__dirname, "..", "data", "flight-monitor-snapshot.json");

function normalizeText(text) {
  return text
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function digest(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

function collectTargets() {
  return (data.flights?.journeys || []).flatMap((journey) => {
    const targets = [];
    if (journey.statusSource) {
      targets.push({
        id: `${journey.id}-status`,
        journeyId: journey.id,
        label: `${journey.title} status`,
        url: journey.statusSource,
        type: "status"
      });
    }
    if (journey.airportSource) {
      targets.push({
        id: `${journey.id}-airport`,
        journeyId: journey.id,
        label: `${journey.title} airport board`,
        url: journey.airportSource,
        type: "airport"
      });
    }
    return targets;
  });
}

function extractSignals(text) {
  const keywords = [
    "delay",
    "delayed",
    "canceled",
    "cancelled",
    "gate",
    "terminal",
    "boarding",
    "departed",
    "arrived",
    "on time"
  ];
  const hits = keywords.filter((keyword) => new RegExp(`\\b${keyword.replace(" ", "\\s+")}\\b`, "i").test(text));
  return Array.from(new Set(hits));
}

async function checkTarget(target) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(target.url, {
      signal: controller.signal,
      headers: {
        "user-agent": "SeattlePortlandFlightMonitor/1.0 (+manual travel planning)"
      }
    });
    const raw = await response.text();
    const text = normalizeText(raw).slice(0, 150000);
    return {
      ...target,
      ok: response.ok,
      status: response.status,
      checkedAt: new Date().toISOString(),
      finalUrl: response.url,
      digest: digest(text),
      signals: extractSignals(text),
      excerpt: text.slice(0, 600)
    };
  } catch (error) {
    return {
      ...target,
      ok: false,
      status: "ERROR",
      checkedAt: new Date().toISOString(),
      error: error.message,
      digest: "",
      signals: [],
      excerpt: ""
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
    const before = oldTargets[target.id];
    if (!before) {
      changes.push({ type: "new-target", target });
      continue;
    }
    if (String(before.status) !== String(target.status)) {
      changes.push({ type: "status-change", target, before: before.status, after: target.status });
    }
    if (before.digest !== target.digest) {
      changes.push({ type: "page-change", target, before: before.digest, after: target.digest });
    }
    if (JSON.stringify(before.signals || []) !== JSON.stringify(target.signals || [])) {
      changes.push({ type: "signal-change", target, before: before.signals || [], after: target.signals || [] });
    }
  }

  return changes;
}

function buildEmailBody(changes) {
  return [
    "Flight monitor detected one or more changes.",
    "",
    ...changes.flatMap((change) => [
      `${change.type}: ${change.target.label}`,
      `URL: ${change.target.url}`,
      change.before !== undefined ? `Before: ${JSON.stringify(change.before)}` : "",
      change.after !== undefined ? `After: ${JSON.stringify(change.after)}` : "",
      ""
    ]).filter(Boolean)
  ].join("\n");
}

async function sendEmailIfConfigured(changes) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.FLIGHT_ALERT_EMAIL_TO;
  const from = process.env.FLIGHT_ALERT_FROM || "flight-watch@updates.example.com";
  if (!apiKey || !to || !changes.length) {
    return { attempted: false };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: Array.isArray(to) ? to : [to],
      subject: `Flight monitor detected ${changes.length} change${changes.length === 1 ? "" : "s"}`,
      text: buildEmailBody(changes)
    })
  });

  if (!response.ok) {
    throw new Error(`Resend email failed with ${response.status}`);
  }

  return { attempted: true };
}

function writeReport(results, changes, emailSummary) {
  fs.mkdirSync(reportDir, { recursive: true });
  const lines = [
    "# Flight Monitor Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    `Targets checked: ${results.length}`,
    `Changes detected: ${changes.length}`,
    `Email attempted: ${emailSummary.attempted ? "yes" : "no"}`,
    "",
    "## Notes",
    "",
    "- This monitor is near-real-time polling, not airline push infrastructure.",
    "- It checks official airline and airport pages every 15 minutes when the GitHub workflow runs.",
    "- Email alerts require `RESEND_API_KEY` and `FLIGHT_ALERT_EMAIL_TO` repository secrets.",
    "",
    "## Changes",
    ""
  ];

  if (!changes.length) {
    lines.push("No changes detected compared with the previous snapshot.", "");
  } else {
    for (const change of changes) {
      lines.push(`### ${change.type}: ${change.target.label}`);
      lines.push(`- URL: ${change.target.url}`);
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
    lines.push(`- Signals: ${(result.signals || []).join(", ") || "none found"}`);
    lines.push(`- Excerpt: ${result.excerpt || "none"}`);
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
  let emailSummary = { attempted: false };
  try {
    emailSummary = await sendEmailIfConfigured(changes);
  } catch (error) {
    emailSummary = { attempted: true, error: error.message };
  }

  const snapshot = {
    generatedAt: new Date().toISOString(),
    targets: Object.fromEntries(results.map((result) => [result.id, result]))
  };

  fs.mkdirSync(path.dirname(snapshotPath), { recursive: true });
  fs.writeFileSync(snapshotPath, `${JSON.stringify(snapshot, null, 2)}\n`);
  writeReport(results, changes, emailSummary);

  const summary = {
    checked: results.length,
    changes: changes.length,
    cadenceMinutes: data.flightMonitor?.cadenceMinutes || 15,
    emailAttempted: emailSummary.attempted,
    emailError: emailSummary.error || null,
    reportPath: path.relative(path.join(__dirname, ".."), reportPath)
  };
  fs.writeFileSync(summaryPath, `${JSON.stringify(summary, null, 2)}\n`);
  console.log(JSON.stringify(summary, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
