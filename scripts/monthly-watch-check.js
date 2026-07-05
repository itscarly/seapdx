const fs = require("node:fs");
const path = require("node:path");

const baselinePath = path.join(__dirname, "..", "data", "monthly-watch-baseline.json");

async function fetchText(url) {
  const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`Fetch failed ${res.status} for ${url}`);
  return res.text();
}

function checkMarkers(text, markers) {
  return markers.filter((marker) => !text.includes(marker));
}

async function main() {
  const baseline = JSON.parse(fs.readFileSync(baselinePath, "utf8"));
  const results = [];

  for (const [key, entry] of Object.entries(baseline)) {
    const text = await fetchText(entry.url);
    const missing = checkMarkers(text, entry.markers || []);
    results.push({ key, url: entry.url, missing, changed: missing.length > 0 });
  }

  const changed = results.filter((item) => item.changed);
  console.log(JSON.stringify({ checkedAt: new Date().toISOString(), results, changed }, null, 2));

  if (changed.length > 0) {
    process.exitCode = 2;
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
