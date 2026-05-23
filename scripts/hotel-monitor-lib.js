const fs = require("node:fs");
const path = require("node:path");

const REQUIRED_ZONE_BONUS = new Set([
  "Westlake",
  "University Street",
  "Symphony",
  "Capitol Hill",
  "Pioneer Square",
  "International District / Chinatown"
]);

function loadSource(rootDir) {
  const sourcePath = path.join(rootDir, "data", "hotel-monitor-source.json");
  return JSON.parse(fs.readFileSync(sourcePath, "utf8"));
}

function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

function roundMoney(value) {
  return Number(value.toFixed(2));
}

function daysUntil(deadline, nowIso) {
  const now = new Date(nowIso);
  const then = new Date(deadline);
  return Math.round((then.getTime() - now.getTime()) / (24 * 60 * 60 * 1000));
}

function normalizeCondition(condition) {
  return {
    modern: 5,
    renovated: 4,
    mixed: 3,
    dated: 1
  }[condition] ?? 2;
}

function qualityCheck(hotel, budgetCap, benchmarkId) {
  const failures = [];
  const room = hotel.room || {};
  const quality = hotel.quality || {};
  const pricing = hotel.pricing || {};
  const beds = room.beds || "";
  const bedPass = room.roomEquivalencyAccepted === true;
  const totalCost = trueTotalCost(hotel);

  if (!pricing.refundable) failures.push("Not refundable");
  if (!pricing.cancellationDeadline) failures.push("Missing cancellation deadline");
  if (!hotel.directBookingUrl) failures.push("Missing direct hotel booking link");
  const quotedStay = hotel.priceVerification?.quotedStay;
  if (!quotedStay?.checkIn || !quotedStay?.checkOut || quotedStay?.nights !== 3 || quotedStay?.guests !== 2) {
    failures.push("Quoted stay must match Nov 1-4, 2026 for 2 guests");
  }
  if (!room.privateBath) failures.push("Private bath required");
  if (!bedPass && hotel.id !== benchmarkId) failures.push("Room standard below 1 King or 2 Queen equivalent");
  if ((quality.reviewScore ?? 0) < 4) failures.push("Review score below 4.0");
  if (!quality.safeWalkable) failures.push("Area failed safe walkable screen");
  if ((quality.cleanliness ?? 0) < 4) failures.push("Recurring cleanliness risk");
  if ((quality.serviceConsistency ?? 0) < 3) failures.push("Service consistency too weak");
  if ((quality.soundproofing ?? 0) < 3) failures.push("Soundproofing risk too high");
  if (normalizeCondition(quality.condition) < 3) failures.push("Condition too dated");
  if ((quality.luggageFriendly ?? 0) < 3) failures.push("Luggage convenience too weak");
  if (totalCost > budgetCap && hotel.id !== benchmarkId) failures.push(`Total cost ${formatMoney(totalCost)} exceeds cap ${formatMoney(budgetCap)}`);
  if ((quality.flags || []).some((flag) => /maintenance|unsafe|dirty|unclean|bedbug/i.test(flag))) failures.push("Quality flags contain maintenance or safety concern");

  return {
    passed: failures.length === 0,
    failures,
    bedSummary: beds || "Unknown",
    totalCost
  };
}

function trueTotalCost(hotel) {
  const pricing = hotel.pricing || {};
  const nightlyRates = pricing.nightlyRates || [];
  const mandatoryFees = pricing.mandatoryFees || [];
  return roundMoney(sum(nightlyRates) + (pricing.taxes || 0) + sum(mandatoryFees.map((fee) => fee.amount || 0)));
}

function transitScore(hotel) {
  const transit = hotel.transit || {};
  const zoneBonus = REQUIRED_ZONE_BONUS.has(hotel.zone) ? 6 : 0;
  const score = (
    Math.max(0, 20 - (transit.linkWalkMinutes || 20)) * 1.2 +
    Math.max(0, 50 - (transit.airportMinutes || 50)) * 0.8 +
    Math.max(0, 30 - (transit.kingStreetMinutes || 30)) * 0.9 +
    Math.max(0, 4 - (transit.transferCount || 4)) * 6 +
    (transit.luggageEase || 0) * 5 +
    Math.max(0, 6 - (transit.hillDifficulty || 6)) * 4 +
    (transit.lateNightConvenience || 0) * 4 +
    (transit.arrivalSafety || 0) * 4 +
    zoneBonus
  );

  const reasons = [
    `${transit.linkWalkMinutes} min walk to Link`,
    `${transit.airportMinutes} min airport trip`,
    `${transit.kingStreetMinutes} min King Street access`,
    `${transit.transferCount} transfers`,
    `luggage ease ${transit.luggageEase}/5`,
    `hill difficulty ${transit.hillDifficulty}/5`,
    `late-night ${transit.lateNightConvenience}/5`,
    `arrival safety ${transit.arrivalSafety}/5`
  ];

  if (zoneBonus) reasons.push(`priority zone bonus for ${hotel.zone}`);

  return {
    score: Math.round(score),
    reasons
  };
}

function benefitValue(hotel) {
  const pricing = hotel.pricing || {};
  const quality = hotel.quality || {};
  let total = 0;
  const reasons = [];

  if (pricing.breakfastIncluded) {
    total += 36;
    reasons.push("Breakfast inclusion value");
  }
  if (pricing.loungeAccess) {
    total += 45;
    reasons.push("Lounge access value");
  }
  if (pricing.lateCheckoutPossible) {
    total += 18;
    reasons.push("Late checkout flexibility");
  }
  if (pricing.corporateEligible) {
    total += 12;
    reasons.push("Corporate-eligible opportunity");
  }
  if (pricing.memberRateVisible) {
    total += 8;
    reasons.push("Member-rate opportunity");
  }
  if (normalizeCondition(quality.condition) >= 4) {
    total += 15;
    reasons.push("Newer room condition");
  }
  if ((quality.serviceConsistency || 0) >= 4) {
    total += 8;
    reasons.push("More consistent service pattern");
  }

  return {
    total,
    reasons
  };
}

function recommendationStatus(hotel, benchmark, nowIso) {
  if (hotel.isCurrentReservation) return "HOLD CURRENT";
  if (!hotel.qualityPass) return "WATCH";
  if (hotel.priceVerification?.status !== "live-verified") return "WATCH";

  const savings = benchmark.trueTotalCost - hotel.trueTotalCost;
  const adjustedGap = benchmark.valueAdjustedTotal - hotel.valueAdjustedTotal;
  const daysToCancel = daysUntil(hotel.pricing.cancellationDeadline, nowIso);
  const benchmarkTransit = benchmark.transitScore;
  const transitEdge = hotel.transitScore - benchmarkTransit;
  const priceSignal = hotel.marketSignals?.expectedPriceMovement || "stable";

  if ((savings >= 40 || adjustedGap >= 40 || (savings >= -10 && transitEdge >= 10 && hotel.valueBenefit >= 36)) && priceSignal !== "likely-drop") {
    return "REBOOK NOW";
  }
  if (priceSignal === "likely-drop" && daysToCancel > 45) {
    return "WAIT FOR DROP";
  }
  if (savings >= 0 || transitEdge >= 6 || hotel.valueBenefit >= 30) {
    return "WATCH";
  }
  return "HOLD CURRENT";
}

function alertTriggers(hotel, benchmark, nowIso) {
  if (hotel.isCurrentReservation || !hotel.qualityPass) return [];
  const alerts = [];
  const savings = benchmark.trueTotalCost - hotel.trueTotalCost;
  const deadlineDays = daysUntil(hotel.pricing.cancellationDeadline, nowIso);

  if (hotel.priceVerification?.status !== "live-verified") {
    alerts.push("Quote not live-verified yet");
    return alerts;
  }

  if (savings >= 40) alerts.push(`Savings trigger: ${formatMoney(savings)} better than Boylston`);
  if (Math.abs(savings) <= 10 && hotel.transitScore > benchmark.transitScore) alerts.push("Same-price superior transit trigger");
  if (hotel.pricing.breakfastIncluded && !benchmark.pricing.breakfastIncluded) alerts.push("Breakfast inclusion trigger");
  if (hotel.room.beds !== benchmark.room.beds && /King|2 Queen/i.test(hotel.room.beds || "")) alerts.push("Upgraded room trigger");
  if (hotel.transitScore >= benchmark.transitScore + 8) alerts.push("Transit score improvement trigger");
  if (deadlineDays <= 14) alerts.push("Cancellation risk approaching");
  if ((hotel.marketSignals?.inventoryPressure || "") === "tightening") alerts.push("Inventory tightening trigger");
  if ((hotel.marketSignals?.expectedPriceMovement || "") === "likely-drop") alerts.push("Likely price-drop trigger");

  return alerts;
}

function formatMoney(value) {
  return `$${roundMoney(value).toFixed(2)}`;
}

function buildHotelRecord(hotel, benchmark, context) {
  const totalCost = trueTotalCost(hotel);
  const transit = transitScore(hotel);
  const benefits = benefitValue(hotel);
  const quality = qualityCheck(hotel, context.budgetCap, context.benchmarkId);
  const valueAdjustedTotal = roundMoney(totalCost - benefits.total);

  const record = {
    ...hotel,
    trueTotalCost: totalCost,
    transitScore: transit.score,
    transitReasons: transit.reasons,
    qualityPass: quality.passed,
    qualityFailures: quality.failures,
    valueBenefit: benefits.total,
    valueBenefitReasons: benefits.reasons,
    valueAdjustedTotal,
    savingsVsCurrent: benchmark ? roundMoney(benchmark.trueTotalCost - totalCost) : 0,
    priceVerification: hotel.priceVerification || {
      status: "manual-estimate",
      verifiedAt: null,
      quotedStay: null,
      evidenceNote: "No verification note supplied."
    }
  };

  record.recommendation = recommendationStatus(record, benchmark || record, context.nowIso);
  record.alerts = alertTriggers(record, benchmark || record, context.nowIso);
  return record;
}

function deriveCategories(validHotels) {
  const categories = [];
  if (!validHotels.length) return categories;

  const addCategory = (label, pick, reason) => {
    if (!pick) return;
    categories.push({
      label,
      hotelId: pick.id,
      hotelName: pick.name,
      reason
    });
  };

  addCategory("Best Overall Value", [...validHotels].sort((a, b) => a.valueAdjustedTotal - b.valueAdjustedTotal)[0], "Lowest value-adjusted total among eligible Seattle options.");
  addCategory("Best Transit Access", [...validHotels].sort((a, b) => b.transitScore - a.transitScore)[0], "Strongest airport + King Street access with the least transit friction.");
  addCategory("Best Chain Hotel", [...validHotels].filter((hotel) => hotel.brandType === "chain").sort((a, b) => a.valueAdjustedTotal - b.valueAdjustedTotal)[0], "Best chain-led mix of price, transit, and perks.");
  addCategory("Best Boutique Hotel", [...validHotels].filter((hotel) => hotel.brandType === "boutique").sort((a, b) => a.valueAdjustedTotal - b.valueAdjustedTotal)[0], "Best boutique-led mix of modern feel and value.");
  addCategory("Best Elite Benefit Opportunity", [...validHotels].filter((hotel) => hotel.pricing.corporateEligible || hotel.pricing.memberRateVisible).sort((a, b) => b.valueBenefit - a.valueBenefit)[0], "Most room to improve value with member or elite-style benefits.");
  addCategory("Best Flexible Cancellation Policy", [...validHotels].sort((a, b) => new Date(b.pricing.cancellationDeadline) - new Date(a.pricing.cancellationDeadline))[0], "Latest practical free-cancel timing in the watch set.");
  addCategory("Best Premium Experience Under Budget", [...validHotels].sort((a, b) => (b.transitScore + b.valueBenefit) - (a.transitScore + a.valueBenefit))[0], "Best under-cap mix of feel, access, and soft-value features.");
  addCategory("Best Wait for Price Drop Candidate", [...validHotels].filter((hotel) => hotel.marketSignals?.expectedPriceMovement === "likely-drop").sort((a, b) => a.trueTotalCost - b.trueTotalCost)[0], "Most credible under-watch candidate for a later dip.");

  return categories;
}

function monitoringCadence() {
  return [
    {
      window: ">180 days out",
      cadence: "Weekly",
      rationale: "Enough distance for broad market reads without overreacting to noise."
    },
    {
      window: "120-180 days out",
      cadence: "2-3x weekly",
      rationale: "Start watching convention compression, direct-vs-OTA drift, and member-rate drops."
    },
    {
      window: "0-45 days out",
      cadence: "Daily",
      rationale: "This is the high-yield window for cancellation churn, flash sales, and rebook timing."
    }
  ];
}

function buildReport(source) {
  const nowIso = `${source.meta.snapshotDate}T12:00:00-07:00`;
  const benchmarkSource = source.seattle.currentReservation;
  const benchmark = buildHotelRecord(
    { ...benchmarkSource, isCurrentReservation: true },
    null,
    {
      budgetCap: source.seattle.trip.budgetCap,
      nowIso,
      benchmarkId: benchmarkSource.id
    }
  );

  const hotels = source.seattle.watchlist.map((hotel) => buildHotelRecord(hotel, benchmark, {
    budgetCap: source.seattle.trip.budgetCap,
    nowIso,
    benchmarkId: benchmarkSource.id
  }));

  const ranked = [...hotels].sort((a, b) => {
    if (a.qualityPass !== b.qualityPass) return a.qualityPass ? -1 : 1;
    if (a.recommendation !== b.recommendation) {
      const order = ["REBOOK NOW", "WATCH", "WAIT FOR DROP", "HOLD CURRENT"];
      return order.indexOf(a.recommendation) - order.indexOf(b.recommendation);
    }
    return a.valueAdjustedTotal - b.valueAdjustedTotal;
  });

  const eligible = ranked.filter((hotel) => hotel.qualityPass);
  const excluded = ranked.filter((hotel) => !hotel.qualityPass);
  const categories = deriveCategories(eligible);

  return {
    meta: source.meta,
    seattle: {
      trip: source.seattle.trip,
      automation: source.meta.automation,
      benchmark,
      ranked,
      eligible,
      excluded,
      unverified: eligible.filter((hotel) => hotel.priceVerification?.status !== "live-verified"),
      verifiedEligible: eligible.filter((hotel) => hotel.priceVerification?.status === "live-verified"),
      categories,
      monitoringCadence: monitoringCadence(),
      transitSummary: {
        benchmark: {
          hotelId: benchmark.id,
          score: benchmark.transitScore,
          reasons: benchmark.transitReasons
        },
        leaders: [...eligible].sort((a, b) => b.transitScore - a.transitScore).slice(0, 3).map((hotel) => ({
          hotelId: hotel.id,
          hotelName: hotel.name,
          score: hotel.transitScore,
          reasons: hotel.transitReasons
        }))
      },
      recommendationMatrix: ranked.map((hotel) => ({
        hotelId: hotel.id,
        hotelName: hotel.name,
        recommendation: hotel.recommendation,
        rationale: buildRationale(hotel, benchmark)
      })),
      marketStrategy: {
        currentRead: "Automated direct-site watch mode. Use the scored watch list to decide whether to hold Boylston, wait for a softening, or rebook when a clearly better refundable option lands inside the cap.",
        triggers: [
          "Savings of $40 or more versus Boylston",
          "Same-price move with better transit score",
          "Breakfast or elite-style perk inclusion",
          "Improved room standard or premium-condition bump",
          "Cancellation window approaching",
          "Inventory tightening or OTA undercut signals"
        ]
      }
    },
    portland: source.portland
  };
}

function buildRationale(hotel, benchmark) {
  const chunks = [];
  const delta = benchmark.trueTotalCost - hotel.trueTotalCost;

  if (hotel.qualityPass) {
    if (delta > 0) chunks.push(`${formatMoney(delta)} cheaper than Boylston`);
    if (delta < 0) chunks.push(`${formatMoney(Math.abs(delta))} above Boylston`);
    if (hotel.transitScore > benchmark.transitScore) chunks.push(`better transit score by ${hotel.transitScore - benchmark.transitScore}`);
    if (hotel.valueBenefit > 0) chunks.push(`${formatMoney(hotel.valueBenefit)} in soft-value benefits`);
    if (hotel.marketSignals?.expectedPriceMovement === "likely-drop") chunks.push("market signals suggest a later drop");
  } else {
    chunks.push(`excluded because ${hotel.qualityFailures.join(", ").toLowerCase()}`);
  }

  return chunks.join("; ");
}

function validateReport(report) {
  const failures = [];
  const { benchmark, ranked, eligible, excluded, categories } = report.seattle;

  if (!benchmark.qualityPass) {
    failures.push("Current benchmark booking should remain quality-pass eligible.");
  }
  if (!ranked.length) {
    failures.push("Seattle ranked hotel list is empty.");
  }
  for (const hotel of ranked) {
    if (!hotel.pricing.cancellationDeadline) failures.push(`${hotel.id} missing cancellation deadline.`);
    if (typeof hotel.trueTotalCost !== "number") failures.push(`${hotel.id} missing true total cost.`);
    if (typeof hotel.transitScore !== "number") failures.push(`${hotel.id} missing transit score.`);
    const stay = hotel.priceVerification?.quotedStay;
    if (!stay || stay.checkIn !== "2026-11-01" || stay.checkOut !== "2026-11-04" || stay.nights !== 3 || stay.guests !== 2) {
      failures.push(`${hotel.id} does not carry the required Nov 1-4, 2026 / 2 guests quote scope.`);
    }
    if (!["HOLD CURRENT", "WATCH", "REBOOK NOW", "WAIT FOR DROP"].includes(hotel.recommendation)) {
      failures.push(`${hotel.id} has invalid recommendation ${hotel.recommendation}.`);
    }
  }
  if (!excluded.length) {
    failures.push("Seattle report should keep at least one excluded hotel to prove filtering.");
  }
  if (!ranked.every((hotel) => hotel.directBookingUrl && /^https:\/\/[^ ]+/.test(hotel.directBookingUrl))) {
    failures.push("Every ranked hotel must have a direct HTTPS booking link.");
  }
  if (eligible.some((hotel) => hotel.trueTotalCost > report.seattle.trip.budgetCap)) {
    failures.push("An eligible hotel exceeded the Seattle budget cap.");
  }

  return failures;
}

module.exports = {
  buildReport,
  formatMoney,
  loadSource,
  validateReport
};
