const test = require("node:test");
const assert = require("node:assert/strict");

const {
  deriveDirectEngine,
  classifyPageState,
  extractStayTotalFromText,
  buildPriceVerification,
  computeHotelCollections,
  finalizeDirectPriceOutcome
} = require("../scripts/lib/hotel-pricing");

test("deriveDirectEngine maps hotel hosts to deterministic adapters", () => {
  assert.equal(
    deriveDirectEngine("https://bookings.travelclick.com/104207#/total"),
    "travelclick"
  );
  assert.equal(
    deriveDirectEngine("https://be.synxis.com/?hotel=76786"),
    "synxis"
  );
  assert.equal(
    deriveDirectEngine("https://www.hilton.com/en/hotels/seadnhx-hampton-seattle-downtown/"),
    "hilton"
  );
  assert.equal(
    deriveDirectEngine("https://www.marriott.com/hotels/travel/pdxvt-hotel-vance-portland-a-tribute-portfolio-hotel/"),
    "marriott"
  );
});

test("classifyPageState marks Hilton anti-bot reference page as blocked-direct", () => {
  const state = classifyPageState({
    finalUrl: "https://www.hilton.com/en/hotels/seadnhx-hampton-seattle-downtown/",
    title: "Hilton Page Reference Code",
    bodyText: "SOMETHING WENT WRONG Reference No. 18.c7b58aca.1779594949.2ce1ea66"
  });

  assert.equal(state.status, "blocked-direct");
  assert.equal(state.blockedReason, "anti-bot");
});

test("classifyPageState marks Marriott missing property page as stale-direct-url", () => {
  const state = classifyPageState({
    finalUrl: "https://www.marriott.com/hotels/travel/pdxvt-hotel-vance-portland-a-tribute-portfolio-hotel/",
    title: "Sorry! - Page Not Found on Marriott.com (404 Error)",
    bodyText: "Sorry, we can't find the page you requested."
  });

  assert.equal(state.status, "stale-direct-url");
  assert.equal(state.blockedReason, "stale-direct-url");
});

test("extractStayTotalFromText prefers stay-level total over nightly rate", () => {
  const result = extractStayTotalFromText({
    bodyText: `
      Flexible Rate - Includes $20 Dining Credit
      Avg per night $206.67
      Subtotal $620.00
      Taxes $111.60
      Total $731.60
    `,
    nights: 3
  });

  assert.equal(result.total, 731.6);
  assert.equal(result.captureMethod, "direct-checkout");
  assert.equal(result.confidence, "high");
});

test("finalizeDirectPriceOutcome rejects listing-grade totals for checkout engines", () => {
  const outcome = finalizeDirectPriceOutcome({
    engine: "travelclick",
    extraction: {
      total: 251.24,
      captureMethod: "direct-listing",
      confidence: "medium"
    },
    finalUrl: "https://bookings.travelclick.com/104207",
    source: "playwright:travelclick"
  });

  assert.equal(outcome.found, false);
  assert.equal(outcome.status, "manual-review-needed");
  assert.equal(outcome.blockedReason, "ambiguous-total");
});

test("buildPriceVerification preserves last verified total when new scrape is low confidence", () => {
  const verification = buildPriceVerification({
    hotel: {
      name: "Paramount Hotel Seattle",
      trueTotalCost: 731.6,
      priceVerification: {
        status: "live-verified",
        confidence: "high",
        sourceTier: "direct-checkout"
      }
    },
    outcome: {
      found: false,
      status: "manual-review-needed",
      blockedReason: "ambiguous-total",
      note: "Page only exposed nightly rate text."
    },
    now: "2026-05-24T04:00:00.000Z"
  });

  assert.equal(verification.status, "manual-review-needed");
  assert.equal(verification.sourceTier, "last-verified");
  assert.equal(verification.confidence, "medium");
  assert.match(verification.evidenceNote, /nightly rate/i);
});

test("computeHotelCollections routes blocked and missing-price hotels into needsCheck", () => {
  const cityReport = computeHotelCollections({
    alertThreshold: 400,
    watchlist: [
      {
        id: "under-cap",
        name: "Qualifying Hotel",
        trueTotalCost: 355,
        refundable: true,
        reviewScore: 4.2,
        priceVerification: { status: "captured-direct-checkout" }
      },
      {
        id: "blocked",
        name: "Blocked Hotel",
        trueTotalCost: null,
        refundable: true,
        reviewScore: 4.3,
        priceVerification: { status: "blocked-direct" }
      },
      {
        id: "over-cap",
        name: "Over Cap Hotel",
        trueTotalCost: 520,
        refundable: true,
        reviewScore: 4.1,
        priceVerification: { status: "captured-fallback" }
      }
    ]
  });

  assert.deepEqual(cityReport.eligible.map((hotel) => hotel.id), ["under-cap"]);
  assert.deepEqual(cityReport.needsCheck.map((hotel) => hotel.id), ["blocked"]);
  assert.deepEqual(cityReport.excluded.map((hotel) => hotel.id), ["over-cap"]);
});
