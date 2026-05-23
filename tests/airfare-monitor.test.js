const test = require("node:test");
const assert = require("node:assert/strict");

const {
  enrichWatch
} = require("../scripts/lib/airfare-monitor");

function makeBaseWatch(observations) {
  return {
    watchName: "Test airfare watch",
    updatedAt: "2026-05-23T00:00:00.000Z",
    trip: {
      passengers: 1,
      cabin: "economy",
      tripType: "one-way",
      destination: "MNL",
      departureWindow: {
        start: "2027-03-07",
        end: "2027-03-13"
      },
      origins: ["SFO", "ORD"],
      baggageAssumption: "one carry-on plus one checked bag",
      bookingRule: "Book direct with the airline only."
    },
    cadence: [],
    acceptableAirlines: ["United", "Korean Air"],
    buyRules: {
      instantBookStrategy: "route-specific historical low"
    },
    observations
  };
}

test("discovery-only fares cannot become book states", () => {
  const watch = makeBaseWatch([
    {
      checkedAt: "2026-05-23T00:00:00.000Z",
      origin: "SFO",
      departureDate: "2027-03-09",
      airline: "United",
      routing: "SFO-MNL nonstop",
      discoveryFare: 524,
      directAirlineFare: 524,
      verificationStatus: "aggregator-signal",
      directAirlineVerified: false,
      historicalLow: 500,
      historicalAverage: 620,
      futureDropProbability: 0.48,
      increaseRiskScore: 0.33,
      volatilityScore: 0.3,
      urgencyLevel: "medium",
      routeMetrics: {
        totalDurationMinutes: 840,
        stops: 0,
        layoverMinutes: [],
        overnightLayover: false,
        airportChange: false,
        terminalChange: false,
        selfTransferRisk: false,
        transitVisaRisk: "low",
        airlineQualityScore: 0.82,
        operationalReliabilityScore: 0.88,
        baggageTransferSimplicityScore: 1,
        connectionStressScore: 0.08
      }
    }
  ]);

  const enriched = enrichWatch(watch);
  assert.equal(enriched.observations[0].recommendationState, "STRONG WATCH");
});

test("basic economy verified fares are excluded from book recommendations", () => {
  const watch = makeBaseWatch([
    {
      checkedAt: "2026-05-23T00:00:00.000Z",
      origin: "SFO",
      departureDate: "2027-03-09",
      airline: "United",
      routing: "SFO-MNL nonstop",
      discoveryFare: 524,
      directAirlineFare: 531,
      verificationStatus: "airline-direct-verified",
      directAirlineVerified: true,
      fareClass: "Basic Economy",
      baggageIncluded: true,
      protectedRouting: true,
      carryOnPolicy: "1 carry-on",
      seatRestrictionNotes: "No free advance seat selection",
      changePenaltyNotes: "Changes not allowed",
      cancellationPolicyNotes: "Restricted credit only",
      verifiedTimestamp: "2026-05-23T00:10:00.000Z",
      historicalLow: 530,
      historicalAverage: 650,
      futureDropProbability: 0.18,
      increaseRiskScore: 0.71,
      volatilityScore: 0.42,
      urgencyLevel: "high",
      routeMetrics: {
        totalDurationMinutes: 840,
        stops: 0,
        layoverMinutes: [],
        overnightLayover: false,
        airportChange: false,
        terminalChange: false,
        selfTransferRisk: false,
        transitVisaRisk: "low",
        airlineQualityScore: 0.82,
        operationalReliabilityScore: 0.88,
        baggageTransferSimplicityScore: 1,
        connectionStressScore: 0.08
      }
    }
  ]);

  const enriched = enrichWatch(watch);
  assert.notEqual(enriched.observations[0].recommendationState, "BOOK");
  assert.notEqual(enriched.observations[0].recommendationState, "STRONG BOOK");
});

test("quality-first ranking prefers verified nonstop near historical low over slightly cheaper one-stop", () => {
  const watch = makeBaseWatch([
    {
      checkedAt: "2026-05-23T00:00:00.000Z",
      origin: "SFO",
      departureDate: "2027-03-09",
      airline: "United",
      routing: "SFO-MNL nonstop",
      discoveryFare: 539,
      directAirlineFare: 544,
      verificationStatus: "airline-direct-verified",
      directAirlineVerified: true,
      fareClass: "Economy",
      baggageIncluded: true,
      protectedRouting: true,
      carryOnPolicy: "1 carry-on",
      seatRestrictionNotes: "Standard economy restrictions",
      changePenaltyNotes: "$200 fee",
      cancellationPolicyNotes: "Credit after fee",
      verifiedTimestamp: "2026-05-23T00:10:00.000Z",
      historicalLow: 538,
      historicalAverage: 670,
      futureDropProbability: 0.16,
      increaseRiskScore: 0.84,
      volatilityScore: 0.4,
      urgencyLevel: "high",
      routeMetrics: {
        totalDurationMinutes: 840,
        stops: 0,
        layoverMinutes: [],
        overnightLayover: false,
        airportChange: false,
        terminalChange: false,
        selfTransferRisk: false,
        transitVisaRisk: "low",
        airlineQualityScore: 0.82,
        operationalReliabilityScore: 0.88,
        baggageTransferSimplicityScore: 1,
        connectionStressScore: 0.08
      }
    },
    {
      checkedAt: "2026-05-23T00:00:00.000Z",
      origin: "ORD",
      departureDate: "2027-03-10",
      airline: "Korean Air",
      routing: "ORD-ICN-MNL",
      discoveryFare: 518,
      directAirlineFare: 522,
      verificationStatus: "airline-direct-verified",
      directAirlineVerified: true,
      fareClass: "Economy",
      baggageIncluded: true,
      protectedRouting: true,
      carryOnPolicy: "1 carry-on",
      seatRestrictionNotes: "Standard economy restrictions",
      changePenaltyNotes: "$180 fee",
      cancellationPolicyNotes: "Credit after fee",
      verifiedTimestamp: "2026-05-23T00:15:00.000Z",
      historicalLow: 509,
      historicalAverage: 645,
      futureDropProbability: 0.29,
      increaseRiskScore: 0.62,
      volatilityScore: 0.33,
      urgencyLevel: "medium",
      routeMetrics: {
        totalDurationMinutes: 1095,
        stops: 1,
        layoverMinutes: [100],
        overnightLayover: false,
        airportChange: false,
        terminalChange: false,
        selfTransferRisk: false,
        transitVisaRisk: "low",
        airlineQualityScore: 0.9,
        operationalReliabilityScore: 0.91,
        baggageTransferSimplicityScore: 0.96,
        connectionStressScore: 0.26
      }
    }
  ]);

  const enriched = enrichWatch(watch);
  assert.equal(enriched.rankings.verified[0].routing, "SFO-MNL nonstop");
});

test("verified self-transfer itineraries stay out of buy states", () => {
  const watch = makeBaseWatch([
    {
      checkedAt: "2026-05-23T00:00:00.000Z",
      origin: "ORD",
      departureDate: "2027-03-11",
      airline: "Korean Air",
      routing: "ORD-ICN-MNL self-transfer",
      discoveryFare: 499,
      directAirlineFare: 505,
      verificationStatus: "airline-direct-verified",
      directAirlineVerified: true,
      fareClass: "Economy",
      baggageIncluded: true,
      protectedRouting: false,
      carryOnPolicy: "1 carry-on",
      seatRestrictionNotes: "Standard economy restrictions",
      changePenaltyNotes: "$220 fee",
      cancellationPolicyNotes: "Credit after fee",
      verifiedTimestamp: "2026-05-23T00:15:00.000Z",
      historicalLow: 500,
      historicalAverage: 660,
      futureDropProbability: 0.22,
      increaseRiskScore: 0.78,
      volatilityScore: 0.37,
      urgencyLevel: "high",
      routeMetrics: {
        totalDurationMinutes: 1210,
        stops: 1,
        layoverMinutes: [90],
        overnightLayover: false,
        airportChange: true,
        terminalChange: true,
        selfTransferRisk: true,
        transitVisaRisk: "medium",
        airlineQualityScore: 0.78,
        operationalReliabilityScore: 0.8,
        baggageTransferSimplicityScore: 0.25,
        connectionStressScore: 0.72
      }
    }
  ]);

  const enriched = enrichWatch(watch);
  assert.equal(enriched.observations[0].recommendationState, "HIGH RISK OF INCREASE");
});

test("overnight layovers require exceptional savings to avoid a drop recommendation", () => {
  const watch = makeBaseWatch([
    {
      checkedAt: "2026-05-23T00:00:00.000Z",
      origin: "ORD",
      departureDate: "2027-03-12",
      airline: "Korean Air",
      routing: "ORD-ICN-MNL overnight",
      discoveryFare: 540,
      directAirlineFare: 548,
      verificationStatus: "airline-direct-verified",
      directAirlineVerified: true,
      fareClass: "Economy",
      baggageIncluded: true,
      protectedRouting: true,
      carryOnPolicy: "1 carry-on",
      seatRestrictionNotes: "Standard economy restrictions",
      changePenaltyNotes: "$180 fee",
      cancellationPolicyNotes: "Credit after fee",
      verifiedTimestamp: "2026-05-23T00:15:00.000Z",
      historicalLow: 520,
      historicalAverage: 610,
      futureDropProbability: 0.6,
      increaseRiskScore: 0.44,
      volatilityScore: 0.55,
      urgencyLevel: "medium",
      routeMetrics: {
        totalDurationMinutes: 1480,
        stops: 1,
        layoverMinutes: [520],
        overnightLayover: true,
        airportChange: false,
        terminalChange: false,
        selfTransferRisk: false,
        transitVisaRisk: "low",
        airlineQualityScore: 0.83,
        operationalReliabilityScore: 0.87,
        baggageTransferSimplicityScore: 0.9,
        connectionStressScore: 0.52
      }
    }
  ]);

  const enriched = enrichWatch(watch);
  assert.equal(enriched.observations[0].recommendationState, "LIKELY TO DROP");
});
