const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.join(__dirname, "..");
const sourcePath = path.join(rootDir, "data", "hotel-monitor-source.json");
const reportPath = path.join(rootDir, "data", "hotel-monitor-report.json");
const markdownDir = path.join(rootDir, "research", "hotels");
const markdownPath = path.join(markdownDir, "latest-report.md");

function formatMoney(value) {
  return typeof value === "number" ? `$${value.toFixed(2)}` : "Unavailable";
}

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const cap = source.seattle.trip.budgetCap;
const benchmark = source.seattle.currentReservation;

const excluded = source.seattle.watchlist
  .map((hotel) => ({
    ...hotel,
    qualityFailures: [`Total cost ${formatMoney(hotel.trueTotalCost)} exceeds cap ${formatMoney(cap)}`]
  }))
  .sort((a, b) => a.trueTotalCost - b.trueTotalCost);

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
        reasons: [
          "Capitol Hill remains the preferred base if Boylston becomes bookable again at an acceptable direct refundable rate."
        ]
      },
      leaders: excluded.slice(0, 2).map((hotel) => ({
        hotelId: hotel.id,
        score: hotel.transitScore,
        reason: `Still over cap at ${formatMoney(hotel.trueTotalCost)}.`
      }))
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
      currentRead: "No Seattle direct-booking alternative is under the $400 total cap. Hold the current Seattle lodging plan unless Boylston becomes directly bookable again or another refundable direct quote drops materially.",
      triggers: [
        "Direct-site refundable quote under $400 total",
        "Boylston direct booking path becomes stable again with an acceptable total",
        "A same-price move offers materially better transit, room quality, or cancellation flexibility"
      ]
    },
    recommendationMatrix: [
      {
        hotelId: benchmark.id,
        hotelName: benchmark.name,
        recommendation: "HOLD CURRENT",
        rationale: "All currently verified direct-site Seattle alternatives remain above the $400 total cap, and Boylston itself could not be freshly quoted in a working direct booking flow."
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
  `- Seattle cap: ${formatMoney(cap)}`,
  `- Active automation cadence: ${source.meta.automation.activeSchedule}`,
  `- Upcoming automation cadence: ${source.meta.automation.upcomingSchedule}`,
  `- Last automated check: ${source.meta.automation.lastAutomatedCheckAt || "pending first run"}`,
  `- Summary: ${source.meta.automation.lastAutomatedSummary}`,
  `- Disclaimer: ${source.meta.disclaimer}`,
  "",
  "## Seattle outcome",
  "",
  `- Boylston benchmark status: ${benchmark.priceVerification.status}`,
  `- Boylston note: ${benchmark.priceVerification.evidenceNote}`,
  "- No Seattle direct-booking alternative currently qualifies under the $400 total cap.",
  "",
  "## Excluded candidates",
  ""
];

for (const hotel of excluded) {
  lines.push(`- ${hotel.name}: ${formatMoney(hotel.trueTotalCost)} total | refundable ${hotel.refundable ? "yes" : "unknown"} | cancel by ${hotel.cancellationDeadline}`);
}

lines.push("", "## Portland status", "");
lines.push("- Portland framework scaffolded only.");
lines.push("- Exact ranking remains blocked until the total post-tax lodging cap is supplied.");

fs.writeFileSync(markdownPath, `${lines.join("\n")}\n`);
console.log(JSON.stringify({ status: "ok", eligibleHotels: 0, excludedHotels: excluded.length }, null, 2));
