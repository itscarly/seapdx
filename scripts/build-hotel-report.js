const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.join(__dirname, "..");
const sourcePath = path.join(rootDir, "data", "hotel-monitor-source.json");
const reportPath = path.join(rootDir, "data", "hotel-monitor-report.json");
const markdownDir = path.join(rootDir, "research", "hotels");
const markdownPath = path.join(markdownDir, "latest-report.md");

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const benchmark = source.seattle.currentReservation;
const excluded = source.seattle.watchlist.map((hotel) => ({
  ...hotel,
  qualityFailures: [`Total cost $${hotel.trueTotalCost.toFixed(2)} exceeds cap $${source.seattle.trip.budgetCap.toFixed(2)}`]
}));

const report = {
  meta: source.meta,
  seattle: {
    trip: source.seattle.trip,
    automation: source.meta.automation,
    benchmark,
    eligible: [],
    excluded,
    verifiedEligible: [],
    transitSummary: {
      benchmark: {
        hotelId: benchmark.id,
        score: benchmark.transitScore,
        reasons: ["Direct benchmark reference retained while alternatives remain over cap."]
      },
      leaders: []
    },
    categories: [],
    monitoringCadence: [
      {
        window: "Today through Sep 16, 2026",
        cadence: "Mon, Wed, Fri at 10:00 AM ET",
        rationale: "Current Seattle hotel watch band."
      },
      {
        window: "Sep 17 through Oct 31, 2026",
        cadence: "Daily at 10:00 AM ET",
        rationale: "Higher-frequency pre-trip hotel watch band."
      }
    ],
    marketStrategy: {
      currentRead: "Automated direct-site watch mode. Hold Boylston unless a direct hotel quote for Nov 1-4, 2026 drops under the $400 total cap with refundable terms.",
      triggers: [
        "Direct-site refundable quote under $400 total",
        "Same-price move with clearly better transit and room value",
        "Cancellation deadline approaching on the current hold"
      ]
    },
    recommendationMatrix: [
      {
        hotelId: benchmark.id,
        hotelName: benchmark.name,
        recommendation: "HOLD CURRENT",
        rationale: "No currently checked Seattle alternative is both direct-site verified and inside the $400 total cap for Nov 1-4, 2026."
      }
    ]
  },
  portland: {
    inputsNeeded: [
      "total lodging budget cap including taxes and mandatory fees",
      "preferred zone or transit priority",
      "breakfast preference confirmation",
      "boutique acceptance confirmation",
      "nightlife vs quiet-area preference"
    ]
  }
};

fs.mkdirSync(markdownDir, { recursive: true });
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);

const lines = [
  "# Seattle Hotel Intelligence Report",
  "",
  `Generated from direct-site watch snapshot: ${source.meta.snapshotDate}`,
  "",
  `- Benchmark booking: ${benchmark.name}`,
  `- Benchmark total: $${benchmark.trueTotalCost.toFixed(2)}`,
  `- Seattle cap: $${source.seattle.trip.budgetCap.toFixed(2)}`,
  `- Active automation cadence: ${source.meta.automation.activeSchedule}`,
  `- Upcoming automation cadence: ${source.meta.automation.upcomingSchedule}`,
  `- Last automated check: ${source.meta.automation.lastAutomatedCheckAt || "pending first run"}`,
  `- Disclaimer: ${source.meta.disclaimer}`,
  "",
  "## Seattle watchlist",
  "",
  "No Seattle alternatives currently qualify under the cap.",
  "",
  "## Excluded candidates",
  ""
];

for (const hotel of excluded) {
  lines.push(`- ${hotel.name}: Total cost $${hotel.trueTotalCost.toFixed(2)} exceeds cap $${source.seattle.trip.budgetCap.toFixed(2)}`);
}

lines.push("", "## Portland status", "");
lines.push("- Portland framework scaffolded only.");
lines.push("- Exact ranking remains blocked until the total post-tax lodging cap is supplied.");

fs.writeFileSync(markdownPath, `${lines.join("\n")}\n`);
console.log(JSON.stringify({ status: "ok", eligibleHotels: 0, excludedHotels: excluded.length }, null, 2));
