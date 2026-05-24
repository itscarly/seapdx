const { URL } = require("node:url");

const DIRECT_ENGINES = [
  { match: "bookings.travelclick.com", engine: "travelclick" },
  { match: "be.synxis.com", engine: "synxis" },
  { match: "hilton.com", engine: "hilton" },
  { match: "hyatt.com", engine: "hyatt" },
  { match: "ihg.com", engine: "ihg" },
  { match: "marriott.com", engine: "marriott" },
  { match: "sonder.com", engine: "sonder" }
];

const NEEDS_CHECK_STATUSES = new Set([
  "blocked-direct",
  "session-refresh-needed",
  "manual-review-needed",
  "stale-direct-url"
]);
const CHECKOUT_ENGINES = new Set(["travelclick", "synxis", "sonder"]);

function deriveDirectEngine(rawUrl) {
  if (!rawUrl) return "independent";
  let host = "";
  try {
    host = new URL(rawUrl).hostname.toLowerCase();
  } catch {
    return "independent";
  }

  const match = DIRECT_ENGINES.find((entry) => host.includes(entry.match));
  return match ? match.engine : "independent";
}

function classifyPageState({ finalUrl = "", title = "", bodyText = "" }) {
  const haystack = `${title}\n${bodyText}`.toLowerCase();
  const url = finalUrl.toLowerCase();

  if (
    haystack.includes("reference no.") ||
    haystack.includes("page reference code") ||
    haystack.includes("access denied") ||
    haystack.includes("you don't have permission") ||
    haystack.includes("error:e6020")
  ) {
    return {
      status: "blocked-direct",
      blockedReason: "anti-bot"
    };
  }

  if (
    haystack.includes("page not found") ||
    haystack.includes("we can't find the page you requested") ||
    haystack.includes("(404 error)") ||
    url.includes("/404")
  ) {
    return {
      status: "stale-direct-url",
      blockedReason: "stale-direct-url"
    };
  }

  return {
    status: "ok",
    blockedReason: null
  };
}

function extractCurrencyValues(text) {
  return [...String(text).matchAll(/\$\s*([\d,]+(?:\.\d{2})?)/g)].map((match) =>
    Number.parseFloat(match[1].replaceAll(",", ""))
  );
}

function extractLabeledAmount(text, labels) {
  for (const label of labels) {
    const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
    const regex = new RegExp(`(?:^|\\b)${escaped}\\b\\s*[:\\-]?\\s*\\$\\s*([\\d,]+(?:\\.\\d{2})?)`, "i");
    const match = text.match(regex);
    if (match) return Number.parseFloat(match[1].replaceAll(",", ""));
  }
  return null;
}

function extractStayTotalFromText({ bodyText = "", nights = 1 }) {
  const text = String(bodyText).replace(/\s+/g, " ").trim();
  const subtotal = extractLabeledAmount(text, ["subtotal", "room subtotal", "stay subtotal"]);
  const taxes = extractLabeledAmount(text, ["taxes", "tax", "fees and taxes", "taxes and fees"]);
  const total = extractLabeledAmount(text, ["grand total", "total stay", "total", "estimated total"]);
  const nightly = extractLabeledAmount(text, [
    "avg per night",
    "average per night",
    "per night",
    "nightly rate"
  ]);

  if (total != null && subtotal != null && taxes != null) {
    const summed = Number.parseFloat((subtotal + taxes).toFixed(2));
    if (Math.abs(summed - total) <= 1.5) {
      return {
        total,
        subtotal,
        taxes,
        captureMethod: "direct-checkout",
        confidence: "high"
      };
    }
  }

  if (subtotal != null && taxes != null) {
    const summed = Number.parseFloat((subtotal + taxes).toFixed(2));
    if (total == null) {
      return {
        total: summed,
        subtotal,
        taxes,
        captureMethod: "direct-checkout",
        confidence: "high"
      };
    }
  }

  if (total != null) {
    if (nightly != null && total <= nightly * 1.35) {
      return null;
    }
    if (nightly != null && total > nightly * Math.max(nights - 0.25, 1.5)) {
      return {
        total,
        subtotal,
        taxes,
        captureMethod: subtotal != null || taxes != null ? "direct-checkout" : "direct-listing",
        confidence: subtotal != null || taxes != null ? "high" : "medium"
      };
    }

    const amounts = extractCurrencyValues(text).filter((value) => value > 0);
    const highest = amounts.length ? Math.max(...amounts) : null;
    if (highest != null && Math.abs(total - highest) <= 0.01 && total > 80 * nights) {
      return {
        total,
        subtotal,
        taxes,
        captureMethod: "direct-listing",
        confidence: "medium"
      };
    }
  }

  const allAmounts = extractCurrencyValues(text)
    .filter((value) => value >= 80 * nights)
    .sort((left, right) => right - left);
  if (allAmounts.length) {
    return {
      total: allAmounts[0],
      subtotal,
      taxes,
      captureMethod: "direct-listing",
      confidence: "low"
    };
  }

  return null;
}

function computeSourceTierFromStatus(status, existingTier) {
  if (!status) return existingTier || "last-verified";
  if (status === "live-verified") return "direct-checkout";
  if (status === "captured-direct-api") return "direct-api";
  if (status === "captured-direct-checkout") return "direct-checkout";
  if (status === "captured-direct-listing") return "direct-listing";
  if (status === "captured-fallback") return "fallback-provider";
  return existingTier || "last-verified";
}

function finalizeDirectPriceOutcome({ engine, extraction, finalUrl, source }) {
  if (!extraction) {
    return {
      found: false,
      status: "manual-review-needed",
      blockedReason: "ambiguous-total",
      source,
      rawEvidenceRef: finalUrl,
      note: `${engine} direct flow did not expose a trustworthy stay total.`
    };
  }

  if (CHECKOUT_ENGINES.has(engine) && extraction.captureMethod !== "direct-checkout") {
    return {
      found: false,
      status: "manual-review-needed",
      blockedReason: "ambiguous-total",
      source,
      rawEvidenceRef: finalUrl,
      note: `${engine} direct flow only exposed listing-grade pricing.`
    };
  }

  return {
    found: true,
    total: extraction.total,
    subtotal: extraction.subtotal,
    taxes: extraction.taxes,
    captureMethod: extraction.captureMethod,
    sourceTier: extraction.captureMethod,
    confidence: extraction.confidence,
    status: extraction.captureMethod === "direct-checkout"
      ? "captured-direct-checkout"
      : "captured-direct-listing",
    source,
    rawEvidenceRef: finalUrl,
    note: `${engine} direct capture from ${finalUrl}.`
  };
}

function buildPriceVerification({ hotel, outcome, now }) {
  const previous = hotel.priceVerification || {};
  const status = outcome.status || (outcome.found ? "captured-direct-listing" : "manual-review-needed");
  const sourceTier = outcome.sourceTier
    || (outcome.found ? computeSourceTierFromStatus(status, previous.sourceTier) : "last-verified");
  const confidence = outcome.confidence || (outcome.found ? "medium" : hotel.trueTotalCost != null ? "medium" : "low");
  const evidenceParts = [];

  if (outcome.note) evidenceParts.push(outcome.note);
  if (outcome.total != null) evidenceParts.push(`Captured total $${outcome.total.toFixed(2)}.`);
  if (outcome.subtotal != null) evidenceParts.push(`Subtotal $${outcome.subtotal.toFixed(2)}.`);
  if (outcome.taxes != null) evidenceParts.push(`Taxes $${outcome.taxes.toFixed(2)}.`);

  const verification = {
    ...previous,
    status,
    captureMethod: outcome.captureMethod || previous.captureMethod || null,
    sourceTier,
    blockedReason: outcome.blockedReason || null,
    observedAt: now,
    confidence,
    rawEvidenceRef: outcome.rawEvidenceRef || previous.rawEvidenceRef || null,
    evidenceNote: evidenceParts.join(" ").trim() || previous.evidenceNote || "",
    source: outcome.source || previous.source || null
  };

  if (outcome.found) {
    verification.lastScrapedAt = now;
    delete verification.lastAttemptedAt;
    delete verification.lastScrapeNote;
  } else {
    verification.lastAttemptedAt = now;
    verification.lastScrapeNote = outcome.note || outcome.blockedReason || "capture failed";
  }

  return verification;
}

function qualifiesHotel(hotel, alertThreshold) {
  if (typeof hotel.trueTotalCost !== "number") return false;
  if (hotel.trueTotalCost >= alertThreshold) return false;
  if (hotel.refundable === false) return false;
  if (typeof hotel.reviewScore === "number" && hotel.reviewScore < 4.0) return false;
  return true;
}

function needsPriceReview(hotel) {
  if (hotel.trueTotalCost == null) return true;
  const status = hotel.priceVerification?.status;
  return NEEDS_CHECK_STATUSES.has(status);
}

function computeHotelCollections({ alertThreshold, watchlist = [] }) {
  const eligible = watchlist
    .filter((hotel) => qualifiesHotel(hotel, alertThreshold))
    .sort((left, right) => left.trueTotalCost - right.trueTotalCost);

  const needsCheck = watchlist.filter((hotel) => needsPriceReview(hotel));

  const excluded = watchlist
    .filter((hotel) => !eligible.includes(hotel) && !needsCheck.includes(hotel))
    .sort((left, right) => {
      const leftValue = typeof left.trueTotalCost === "number" ? left.trueTotalCost : Number.POSITIVE_INFINITY;
      const rightValue = typeof right.trueTotalCost === "number" ? right.trueTotalCost : Number.POSITIVE_INFINITY;
      return leftValue - rightValue;
    });

  return { eligible, needsCheck, excluded };
}

function buildFallbackUrl(hotel, trip) {
  const query = encodeURIComponent(
    `${hotel.name} ${trip.checkIn} ${trip.checkOut} ${trip.guests || 2} guests hotel`
  );
  return `https://www.google.com/search?q=${query}`;
}

module.exports = {
  buildFallbackUrl,
  buildPriceVerification,
  classifyPageState,
  computeHotelCollections,
  deriveDirectEngine,
  finalizeDirectPriceOutcome,
  extractStayTotalFromText,
  qualifiesHotel
};
