const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");

const {
  RECOMMENDATION_STATES,
  enrichWatch,
  isBookEligibleFareClass
} = require("./lib/airfare-monitor");

const watchPath = path.join(__dirname, "..", "data", "airfare-watch.json");

function loadWatch() {
  return JSON.parse(fs.readFileSync(watchPath, "utf8"));
}

function validateObservation(item) {
  assert.ok(item.origin === "SFO" || item.origin === "ORD", `Unexpected origin: ${item.origin}`);
  assert.equal(item.destination, "MNL", `Unexpected destination: ${item.destination}`);
  assert.ok(typeof item.discoveryFare === "number" || typeof item.listedFareUsd === "number", `Missing discovery fare for ${item.origin} ${item.departureDate}`);
  assert.ok(item.verificationStatus, `Missing verificationStatus for ${item.origin} ${item.departureDate}`);
  assert.ok(item.routeMetrics, `Missing routeMetrics for ${item.origin} ${item.departureDate}`);
  assert.ok(typeof item.historicalLow === "number", `Missing historicalLow for ${item.origin} ${item.departureDate}`);
  assert.ok(typeof item.historicalAverage === "number", `Missing historicalAverage for ${item.origin} ${item.departureDate}`);
}

function validateEnrichedObservation(item) {
  assert.ok(RECOMMENDATION_STATES.has(item.recommendationState), `Invalid recommendation state: ${item.recommendationState}`);
  assert.ok(item.routeQualityScore >= 0 && item.routeQualityScore <= 1, `Route quality out of range for ${item.origin} ${item.departureDate}`);
  assert.ok(item.buyConfidence >= 0 && item.buyConfidence <= 1, `Buy confidence out of range for ${item.origin} ${item.departureDate}`);

  if (!item.directAirlineVerified) {
    assert.notEqual(item.recommendationState, "BOOK", `Discovery-only fare cannot be BOOK: ${item.origin} ${item.departureDate}`);
    assert.notEqual(item.recommendationState, "STRONG BOOK", `Discovery-only fare cannot be STRONG BOOK: ${item.origin} ${item.departureDate}`);
  }

  if (!isBookEligibleFareClass(item.fareClass)) {
    assert.notEqual(item.recommendationState, "BOOK", `Restricted fare class cannot be BOOK: ${item.origin} ${item.departureDate}`);
    assert.notEqual(item.recommendationState, "STRONG BOOK", `Restricted fare class cannot be STRONG BOOK: ${item.origin} ${item.departureDate}`);
  }

  if (item.recommendationState === "BOOK" || item.recommendationState === "STRONG BOOK") {
    assert.equal(item.directAirlineVerified, true, `Book state requires direct verification: ${item.origin} ${item.departureDate}`);
    assert.equal(item.baggageIncluded, true, `Book state requires baggage inclusion: ${item.origin} ${item.departureDate}`);
    assert.equal(item.protectedRouting, true, `Book state requires protected routing: ${item.origin} ${item.departureDate}`);
    assert.ok(item.fareClass, `Book state requires fareClass: ${item.origin} ${item.departureDate}`);
    assert.ok(item.seatRestrictionNotes, `Book state requires seatRestrictionNotes: ${item.origin} ${item.departureDate}`);
    assert.ok(item.changePenaltyNotes, `Book state requires changePenaltyNotes: ${item.origin} ${item.departureDate}`);
    assert.ok(item.cancellationPolicyNotes, `Book state requires cancellationPolicyNotes: ${item.origin} ${item.departureDate}`);
    assert.ok(item.verifiedTimestamp, `Book state requires verifiedTimestamp: ${item.origin} ${item.departureDate}`);
  }

  if (item.routeMetrics?.overnightLayover && (item.recommendationState === "BOOK" || item.recommendationState === "STRONG BOOK")) {
    assert.ok(item.historicalLowDelta <= 20, `Overnight itinerary can only book with exceptional savings: ${item.origin} ${item.departureDate}`);
  }
}

function main() {
  const raw = loadWatch();
  raw.observations.forEach(validateObservation);
  const enriched = enrichWatch(raw);
  enriched.observations.forEach(validateEnrichedObservation);

  console.log(JSON.stringify({
    validatedObservations: enriched.observations.length,
    verifiedObservations: enriched.summary.directVerifiedCount,
    systemRecommendation: enriched.summary.systemRecommendation
  }, null, 2));
}

main();
