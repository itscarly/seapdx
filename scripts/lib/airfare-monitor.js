const RECOMMENDATION_STATES = new Set([
  "STRONG BOOK",
  "BOOK",
  "STRONG WATCH",
  "WATCH",
  "WAIT FOR DROP",
  "LIKELY TO DROP",
  "HIGH RISK OF INCREASE",
  "LOW CONFIDENCE"
]);

const BOOK_ELIGIBLE_CLASSES = new Set([
  "economy",
  "standard economy",
  "main cabin",
  "economy standard"
]);

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function normalizeFareClass(value) {
  return String(value || "").trim().toLowerCase();
}

function money(value) {
  if (typeof value !== "number") return "not verified";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function isBookEligibleFareClass(value) {
  return BOOK_ELIGIBLE_CLASSES.has(normalizeFareClass(value));
}

function priceValue(item) {
  if (typeof item.directAirlineFare === "number") return item.directAirlineFare;
  if (typeof item.estimatedTrueTotalUsd === "number") return item.estimatedTrueTotalUsd;
  if (typeof item.discoveryFare === "number") return item.discoveryFare;
  if (typeof item.listedFareUsd === "number") return item.listedFareUsd;
  return Number.POSITIVE_INFINITY;
}

function verificationCompleteness(item) {
  const checks = [
    item.directAirlineVerified === true,
    typeof item.directAirlineFare === "number",
    item.baggageIncluded === true,
    item.protectedRouting === true,
    Boolean(item.fareClass),
    Boolean(item.carryOnPolicy),
    Boolean(item.seatRestrictionNotes),
    Boolean(item.changePenaltyNotes),
    Boolean(item.cancellationPolicyNotes),
    Boolean(item.verifiedTimestamp)
  ];
  const passed = checks.filter(Boolean).length;
  return passed / checks.length;
}

function routeQualityScore(item) {
  const metrics = item.routeMetrics || {};
  const duration = typeof metrics.totalDurationMinutes === "number" ? metrics.totalDurationMinutes : 1600;
  const durationScore = clamp(1 - ((duration - 780) / 700));
  const stopsScore = clamp(1 - ((metrics.stops || 0) * 0.22));
  const layovers = Array.isArray(metrics.layoverMinutes) ? metrics.layoverMinutes : [];
  const layoverPenalty = layovers.reduce((sum, minutes) => {
    if (minutes < 75) return sum + 0.18;
    if (minutes > 240) return sum + 0.12;
    return sum;
  }, 0);
  const overnightPenalty = metrics.overnightLayover ? 0.28 : 0;
  const terminalPenalty = metrics.terminalChange ? 0.08 : 0;
  const airportPenalty = metrics.airportChange ? 0.2 : 0;
  const selfTransferPenalty = metrics.selfTransferRisk ? 0.32 : 0;
  const visaPenalty = metrics.transitVisaRisk === "high" ? 0.18 : metrics.transitVisaRisk === "medium" ? 0.08 : 0;
  const quality = typeof metrics.airlineQualityScore === "number" ? metrics.airlineQualityScore : 0.72;
  const reliability = typeof metrics.operationalReliabilityScore === "number" ? metrics.operationalReliabilityScore : 0.72;
  const baggageEase = typeof metrics.baggageTransferSimplicityScore === "number" ? metrics.baggageTransferSimplicityScore : 0.7;
  const connectionEase = 1 - clamp(metrics.connectionStressScore ?? 0.45);

  const raw = (
    (durationScore * 0.2) +
    (stopsScore * 0.16) +
    (quality * 0.12) +
    (reliability * 0.14) +
    (baggageEase * 0.1) +
    (connectionEase * 0.12) +
    ((metrics.stops === 0 ? 1 : 0.78) * 0.08)
  ) - layoverPenalty - overnightPenalty - terminalPenalty - airportPenalty - selfTransferPenalty - visaPenalty;

  return clamp(raw);
}

function historicalLowDelta(item) {
  if (typeof item.historicalLow !== "number") return null;
  const current = priceValue(item);
  if (!Number.isFinite(current)) return null;
  return current - item.historicalLow;
}

function computeBuyConfidence(item, qualityScore, verificationScore) {
  const current = priceValue(item);
  const historicalLow = typeof item.historicalLow === "number" ? item.historicalLow : null;
  const average = typeof item.historicalAverage === "number" ? item.historicalAverage : null;
  const volatility = clamp(item.volatilityScore ?? 0.5);
  const increaseRisk = clamp(item.increaseRiskScore ?? 0.5);
  const futureDropProbability = clamp(item.futureDropProbability ?? 0.5);
  const lowProximity = historicalLow === null || !Number.isFinite(current)
    ? 0.35
    : clamp(1 - ((current - historicalLow) / 120));
  const averageValue = average === null || !Number.isFinite(current)
    ? 0.4
    : clamp((average - current) / 180 + 0.5);
  const urgencyBoost = item.urgencyLevel === "high" ? 0.1 : item.urgencyLevel === "medium" ? 0.04 : 0;

  return clamp(
    (verificationScore * 0.28) +
    (qualityScore * 0.24) +
    (lowProximity * 0.22) +
    (averageValue * 0.12) +
    (increaseRisk * 0.12) -
    (futureDropProbability * 0.1) -
    (volatility * 0.05) +
    urgencyBoost
  );
}

function recommendationState(item, qualityScore, verificationScore, buyConfidence) {
  const current = priceValue(item);
  const lowDelta = historicalLowDelta(item);
  const futureDropProbability = clamp(item.futureDropProbability ?? 0.5);
  const increaseRisk = clamp(item.increaseRiskScore ?? 0.5);
  const volatility = clamp(item.volatilityScore ?? 0.5);
  const basicEconomy = !isBookEligibleFareClass(item.fareClass);
  const overnight = Boolean(item.routeMetrics?.overnightLayover);
  const selfTransfer = Boolean(item.routeMetrics?.selfTransferRisk) || item.selfTransferRisk === true;
  const visaHighRisk = item.routeMetrics?.transitVisaRisk === "high" || item.transitVisaRisk === "high";
  const majorSavings = lowDelta !== null && lowDelta <= 20 && typeof item.historicalAverage === "number" && current <= item.historicalAverage - 90;
  const hasProtectedBookProof = (
    verificationScore === 1 &&
    item.directAirlineVerified === true &&
    item.baggageIncluded === true &&
    item.protectedRouting === true
  );

  if (!RECOMMENDATION_STATES.has(item.recommendationState || "")) {
    // no-op: allows computed state to replace stale freeform strings
  }

  if (!hasProtectedBookProof) {
    if ((selfTransfer || visaHighRisk) && increaseRisk >= 0.7) return "HIGH RISK OF INCREASE";
    if (qualityScore >= 0.78 && futureDropProbability < 0.55) return "STRONG WATCH";
    if (futureDropProbability >= 0.62) return "WAIT FOR DROP";
    if (increaseRisk >= 0.72 && qualityScore >= 0.7) return "HIGH RISK OF INCREASE";
    return buyConfidence >= 0.62 ? "STRONG WATCH" : "WATCH";
  }

  if (basicEconomy) {
    return increaseRisk >= 0.68 ? "HIGH RISK OF INCREASE" : "WATCH";
  }

  if (selfTransfer || visaHighRisk) {
    return "LOW CONFIDENCE";
  }

  if (overnight && !majorSavings) {
    return futureDropProbability >= 0.55 ? "LIKELY TO DROP" : "WATCH";
  }

  if (buyConfidence < 0.55) {
    return volatility >= 0.6 ? "LOW CONFIDENCE" : "WATCH";
  }

  if (lowDelta !== null && lowDelta <= 10 && qualityScore >= 0.82 && increaseRisk >= 0.72) {
    return "STRONG BOOK";
  }

  if (lowDelta !== null && lowDelta <= 25 && qualityScore >= 0.72) {
    return "BOOK";
  }

  if (futureDropProbability >= 0.62) return "LIKELY TO DROP";
  if (increaseRisk >= 0.72) return "HIGH RISK OF INCREASE";
  return buyConfidence >= 0.66 ? "STRONG WATCH" : "WATCH";
}

function rankScore(item) {
  return (item.routeQualityScore * 0.52) + (item.buyConfidence * 0.33) - (priceValue(item) / 4000);
}

function sortByRank(items) {
  return [...items].sort((a, b) => {
    const rankGap = rankScore(b) - rankScore(a);
    if (Math.abs(rankGap) > 0.0001) return rankGap;
    return priceValue(a) - priceValue(b);
  });
}

function enrichObservation(item) {
  const qualityScore = routeQualityScore(item);
  const verificationScore = verificationCompleteness(item);
  const buyConfidence = computeBuyConfidence(item, qualityScore, verificationScore);
  const computed = {
    ...item,
    routeQualityScore: Number(qualityScore.toFixed(3)),
    buyConfidence: Number(buyConfidence.toFixed(3)),
    verificationCompleteness: Number(verificationScore.toFixed(3)),
    recommendationState: recommendationState(item, qualityScore, verificationScore, buyConfidence),
    historicalLowDelta: historicalLowDelta(item),
    displayFare: priceValue(item)
  };
  return computed;
}

function buildSummary(observations) {
  const verified = observations.filter((item) => item.directAirlineVerified);
  const signals = observations.filter((item) => !item.directAirlineVerified);
  const bestVerified = sortByRank(verified)[0] || null;
  const bestSignal = sortByRank(signals)[0] || null;
  const bestByOrigin = Object.fromEntries(
    ["SFO", "ORD"].map((origin) => [origin, sortByRank(observations.filter((item) => item.origin === origin))[0] || null])
  );

  const systemRecommendation = bestVerified?.recommendationState || bestSignal?.recommendationState || "WATCH";

  return {
    observationCount: observations.length,
    directVerifiedCount: verified.length,
    discoveryOnlyCount: signals.length,
    lowestVerified: [...verified].sort((a, b) => priceValue(a) - priceValue(b))[0] || null,
    lowestSignal: [...signals].sort((a, b) => priceValue(a) - priceValue(b))[0] || null,
    topVerified: sortByRank(verified).slice(0, 3),
    strongestSignals: sortByRank(signals).slice(0, 3),
    bestByOrigin,
    systemRecommendation,
    historicalLowComparison: observations.map((item) => ({
      origin: item.origin,
      departureDate: item.departureDate,
      routing: item.routing,
      directAirlineVerified: item.directAirlineVerified,
      currentFare: priceValue(item),
      historicalLow: item.historicalLow ?? null,
      deltaFromHistoricalLow: item.historicalLowDelta
    }))
  };
}

function enrichWatch(watch) {
  const observations = (watch.observations || []).map(enrichObservation);
  const latestCheckedAt = observations
    .map((item) => item.checkedAt || item.verifiedTimestamp)
    .filter(Boolean)
    .sort()
    .at(-1) || null;
  return {
    ...watch,
    observations,
    latestCheckedAt,
    rankings: {
      verified: sortByRank(observations.filter((item) => item.directAirlineVerified)),
      discovery: sortByRank(observations.filter((item) => !item.directAirlineVerified)),
      all: sortByRank(observations)
    },
    summary: buildSummary(observations)
  };
}

module.exports = {
  RECOMMENDATION_STATES,
  enrichWatch,
  isBookEligibleFareClass,
  money,
  priceValue,
  routeQualityScore,
  verificationCompleteness
};
