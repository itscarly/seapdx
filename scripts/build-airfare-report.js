const fs = require("node:fs");
const path = require("node:path");

const { enrichWatch, money, priceValue } = require("./lib/airfare-monitor");

const rootDir = path.join(__dirname, "..");
const watchPath = path.join(rootDir, "data", "airfare-watch.json");
const reportDir = path.join(rootDir, "research", "airfare");
const reportPath = path.join(reportDir, "latest-report.md");
const summaryPath = path.join(reportDir, "latest-summary.json");

function loadWatch() {
  return JSON.parse(fs.readFileSync(watchPath, "utf8"));
}

function priceChangeFor(item, observations) {
  const comparable = observations
    .filter((candidate) => (
      candidate !== item &&
      candidate.origin === item.origin &&
      candidate.departureDate === item.departureDate &&
      candidate.airline === item.airline &&
      Number.isFinite(priceValue(candidate)) &&
      new Date(candidate.checkedAt || candidate.verifiedTimestamp) < new Date(item.checkedAt || item.verifiedTimestamp)
    ))
    .sort((a, b) => new Date(b.checkedAt || b.verifiedTimestamp) - new Date(a.checkedAt || a.verifiedTimestamp));

  const previous = comparable[0];
  if (!previous || !Number.isFinite(priceValue(item))) {
    return { previous: null, change: null };
  }
  return {
    previous: priceValue(previous),
    change: priceValue(item) - priceValue(previous)
  };
}

function routeIntegrityNote(item) {
  const notes = [];
  if (item.protectedRouting === true) notes.push("protected ticket");
  if (item.protectedRouting === false) notes.push("routing protection missing");
  if (item.airportTransferRequired) notes.push("airport transfer required");
  if (item.selfTransferRisk === true || item.routeMetrics?.selfTransferRisk) notes.push("self-transfer risk");
  if (item.transitVisaRisk && item.transitVisaRisk !== "low") notes.push(`transit visa risk: ${item.transitVisaRisk}`);
  if (item.routeMetrics?.overnightLayover) notes.push("overnight layover");
  return notes.length ? notes.join(", ") : "clean protected routing";
}

function fareRuleSummary(item) {
  const parts = [];
  if (item.fareClass) parts.push(item.fareClass);
  if (item.baggageIncluded === true) parts.push("checked bag included");
  if (item.baggageIncluded === false) parts.push("checked bag not included");
  if (item.carryOnPolicy) parts.push(item.carryOnPolicy);
  if (item.seatRestrictionNotes) parts.push(item.seatRestrictionNotes);
  if (item.changePenaltyNotes) parts.push(`change: ${item.changePenaltyNotes}`);
  if (item.cancellationPolicyNotes) parts.push(`cancel: ${item.cancellationPolicyNotes}`);
  return parts.join("; ");
}

function buildExecutiveSummary(watch) {
  const summary = watch.summary;
  const lines = [
    "## Executive Fare Intelligence Summary",
    "",
    `- Current system recommendation: **${summary.systemRecommendation}**.`,
    `- Observation count: ${summary.observationCount}, with ${summary.directVerifiedCount} airline-direct verified and ${summary.discoveryOnlyCount} discovery-only signals.`,
    `- Market posture: ${summary.directVerifiedCount ? "verified options exist, so route quality and historical-low positioning can now drive timing decisions." : "discovery market only; no booking recommendation is allowed until an airline-direct checkout is captured."}`
  ];

  if (summary.topVerified[0]) {
    lines.push(`- Best verified opportunity: ${summary.topVerified[0].airline} ${summary.topVerified[0].routing} at ${money(priceValue(summary.topVerified[0]))}, route quality ${summary.topVerified[0].routeQualityScore}, buy confidence ${summary.topVerified[0].buyConfidence}.`);
  }

  if (summary.strongestSignals[0]) {
    lines.push(`- Strongest unverified discovery signal: ${summary.strongestSignals[0].airline} ${summary.strongestSignals[0].routing} at ${money(priceValue(summary.strongestSignals[0]))}; treat as a checkout lead, not a booking recommendation.`);
  }

  lines.push("");
  return lines;
}

function buildVerifiedRankings(watch) {
  const lines = [
    "## Verified Fare Rankings",
    "",
    "| Rank | Origin | Depart | Airline | Routing | Direct fare | Route quality | Buy confidence | Recommendation | Historical low delta | Route integrity | Fare rules |",
    "|---:|---|---|---|---|---:|---:|---:|---|---:|---|---|"
  ];

  const verified = watch.rankings.verified;
  if (!verified.length) {
    lines.push("| - | - | - | - | No verified fares yet | - | - | - | WATCH | - | Verify checkout first | Discovery signals only |");
  } else {
    verified.forEach((item, index) => {
      lines.push([
        `| ${index + 1}`,
        item.origin,
        item.departureDate,
        item.airline,
        item.routing,
        money(priceValue(item)),
        item.routeQualityScore.toFixed(2),
        item.buyConfidence.toFixed(2),
        item.recommendationState,
        item.historicalLowDelta == null ? "n/a" : money(item.historicalLowDelta),
        routeIntegrityNote(item),
        `${fareRuleSummary(item)} |`
      ].join(" | "));
    });
  }

  lines.push("", "## Discovery Signals Awaiting Airline Verification", "");

  const discovery = watch.rankings.discovery;
  if (!discovery.length) {
    lines.push("- None.");
  } else {
    discovery.forEach((item) => {
      lines.push(`- ${item.origin} ${item.departureDate} ${item.airline} ${item.routing}: ${money(priceValue(item))}, ${item.recommendationState}. Missing verification: final total ${typeof item.directAirlineFare === "number" ? "captured" : "not captured"}, baggage ${item.baggageIncluded === true ? "confirmed" : "not confirmed"}, protected routing ${item.protectedRouting === true ? "confirmed" : "not confirmed"}.`);
    });
  }

  lines.push("");
  return lines;
}

function buildHistoricalAnalysis(watch) {
  const lines = [
    "## Historical Fare Analysis",
    "",
    "| Origin | Depart | Routing | Current fare | Historical low | Rolling average | Volatility | Increase risk | Future drop probability | Outlook |",
    "|---|---|---|---:|---:|---:|---:|---:|---:|---|"
  ];

  watch.rankings.all.forEach((item) => {
    const outlook = item.increaseRiskScore >= 0.72
      ? "buy-window pressure building"
      : item.futureDropProbability >= 0.62
        ? "better drop odds than immediate buy odds"
        : "mixed";
    lines.push([
      `| ${item.origin}`,
      item.departureDate,
      item.routing,
      money(priceValue(item)),
      money(item.historicalLow),
      money(item.historicalAverage),
      `${Math.round((item.volatilityScore ?? 0) * 100)}%`,
      `${Math.round((item.increaseRiskScore ?? 0) * 100)}%`,
      `${Math.round((item.futureDropProbability ?? 0) * 100)}%`,
      `${outlook} |`
    ].join(" | "));
  });

  lines.push("", "- Route-specific historical-low logic is active, so near-low verified nonstop or premium protected itineraries can outrank modestly cheaper but weaker connections.", "");
  return lines;
}

function buildGuidance(watch) {
  const lines = [
    "## Strategic Booking Guidance",
    ""
  ];

  watch.rankings.all.forEach((item) => {
    const verifiedNote = item.directAirlineVerified ? "airline-direct verified" : "discovery only";
    lines.push(`- **${item.recommendationState}**: ${item.airline} ${item.origin}-${watch.trip.destination} on ${item.departureDate} at ${money(priceValue(item))}. ${verifiedNote}. Route quality ${item.routeQualityScore.toFixed(2)}, buy confidence ${item.buyConfidence.toFixed(2)}, volatility ${Math.round((item.volatilityScore ?? 0) * 100)}%, increase risk ${Math.round((item.increaseRiskScore ?? 0) * 100)}%.`);
  });

  lines.push("");
  return lines;
}

function buildOperations(watch) {
  const lines = [
    "## Monitoring Operations",
    "",
    "### Cadence",
    ""
  ];

  for (const entry of watch.cadence) {
    lines.push(`- ${entry.period}: ${entry.frequency}. ${entry.goal}`);
  }

  lines.push(
    "",
    "### Workflow",
    "",
    "1. Discover candidate fares on Google Flights, Skyscanner, or KAYAK.",
    "2. Shortlist only itineraries that fit the cabin, origin, and one-way scope.",
    "3. Open airline-direct checkout for each finalist.",
    "4. Verify final payment-page total, fare class, baggage, carry-on, seat rules, and change or cancel penalties.",
    "5. Confirm protected routing, transit visa requirements, airport transfers, and self-transfer risk.",
    "6. Record route-quality and historical-intelligence fields in `data/airfare-watch.json`.",
    "7. Rebuild the report and summary with `npm run monitor:airfare`.",
    "8. Recommend `BOOK` or `STRONG BOOK` only when direct checkout evidence is complete.",
    "",
    "### Escalation Triggers",
    "",
    "- Escalate to daily checks when a verified fare is at or within roughly `$25` of the route-specific historical low.",
    "- Escalate when volatility spikes above `60%`, a flash sale appears, or the recommendation shifts to `HIGH RISK OF INCREASE`.",
    "- Keep risky structures visible but clearly penalized: overnight airport waits, self-transfers, airport changes, and visa-sensitive transits.",
    ""
  );

  return lines;
}

function buildSummaryJson(watch) {
  return {
    watchName: watch.watchName,
    latestCheckedAt: watch.latestCheckedAt,
    observationCount: watch.summary.observationCount,
    directVerifiedCount: watch.summary.directVerifiedCount,
    discoveryOnlyCount: watch.summary.discoveryOnlyCount,
    systemRecommendation: watch.summary.systemRecommendation,
    topVerified: watch.summary.topVerified,
    strongestSignals: watch.summary.strongestSignals,
    rankedVerified: watch.rankings.verified,
    rankedDiscovery: watch.rankings.discovery,
    bestByOrigin: watch.summary.bestByOrigin,
    historicalLowComparison: watch.summary.historicalLowComparison
  };
}

function buildReport(watch) {
  const header = [
    "# Enterprise Airfare Intelligence Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    `Latest checked fare: ${watch.latestCheckedAt || "none"}`,
    `Route: ${watch.trip.origins.join(" or ")} to ${watch.trip.destination}`,
    `Departure window: ${watch.trip.departureWindow.start} to ${watch.trip.departureWindow.end}`,
    `Cabin/passengers: ${watch.trip.passengers} adult, ${watch.trip.cabin}`,
    `Baggage assumption: ${watch.trip.baggageAssumption}`,
    `Booking rule: ${watch.trip.bookingRule}`,
    ""
  ];

  return [
    ...header,
    ...buildExecutiveSummary(watch),
    ...buildVerifiedRankings(watch),
    ...buildHistoricalAnalysis(watch),
    ...buildGuidance(watch),
    ...buildOperations(watch)
  ].join("\n");
}

function main() {
  const watch = enrichWatch(loadWatch());
  const summary = buildSummaryJson(watch);

  fs.mkdirSync(reportDir, { recursive: true });
  fs.writeFileSync(reportPath, `${buildReport(watch)}\n`);
  fs.writeFileSync(summaryPath, `${JSON.stringify(summary, null, 2)}\n`);

  console.log(JSON.stringify({
    reportPath: path.relative(rootDir, reportPath),
    summaryPath: path.relative(rootDir, summaryPath),
    observations: summary.observationCount,
    directVerified: summary.directVerifiedCount,
    systemRecommendation: summary.systemRecommendation
  }, null, 2));
}

main();
