const test = require("node:test");
const assert = require("node:assert/strict");

const {
  deriveDirectEngine,
  classifyPageState,
  extractStayTotalFromText,
  buildPriceVerification,
  computeHotelCollections,
  finalizeDirectPriceOutcome,
  getDisplayPrice,
  discoverBookingUrlFromHtml
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
  assert.equal(
    deriveDirectEngine("https://secure.markspencer.com/irmng/index.html?propertycode=ms"),
    "irmng"
  );
  assert.equal(
    deriveDirectEngine("https://app.mews.com/distributor/c820c34b-f7f6-42ee-932c-b3b4012b5b37"),
    "mews"
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

test("extractStayTotalFromText handles IRMng room tax total copy", () => {
  const result = extractStayTotalFromText({
    bodyText: `
      Best Rate
      Nightly Rate $191.00
      Reserve
      Amount
      Room $955.00
      Tax $152.80
      Total for Stay $1,107.80
    `,
    nights: 5
  });

  assert.equal(result.total, 1107.8);
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

test("computeHotelCollections keeps priced review hotels visible in needsCheck order", () => {
  const cityReport = computeHotelCollections({
    alertThreshold: 400,
    watchlist: [
      {
        id: "manual-under-cap",
        name: "Manual Review Hotel",
        trueTotalCost: 355,
        refundable: true,
        reviewScore: 4.2,
        priceVerification: { status: "manual-review-needed" }
      },
      {
        id: "manual-over-cap",
        name: "Blocked Hotel",
        trueTotalCost: 520,
        refundable: true,
        reviewScore: 4.3,
        priceVerification: { status: "blocked-direct" }
      },
      {
        id: "benchmark-only",
        name: "Current Reservation",
        confirmedTotalPaid: 384.13,
        refundable: true,
        reviewScore: 4.4,
        priceVerification: { status: "manual-review-needed" }
      }
    ]
  });

  assert.deepEqual(cityReport.eligible.map((hotel) => hotel.id), []);
  assert.deepEqual(cityReport.needsCheck.map((hotel) => hotel.id), [
    "manual-under-cap",
    "benchmark-only",
    "manual-over-cap"
  ]);
  assert.equal(getDisplayPrice(cityReport.needsCheck[1]), 384.13);
});

test("discoverBookingUrlFromHtml upgrades brochure pages to booking engines", () => {
  const markSpencer = discoverBookingUrlFromHtml({
    hotel: { name: "The Mark Spencer Hotel", directBookingUrl: "https://www.markspencer.com/" },
    trip: { checkIn: "2026-11-04", checkOut: "2026-11-09", guests: 2 },
    html: `
      <script>
        nurl = "https://secure.markspencer.com/irmng/index.html?propertycode=ms&arrival="+checkInn+"&departure="+checkOutt+"&people1="+adultss+"&people2="+childrenn;
      </script>
    `
  });

  assert.equal(
    markSpencer.url,
    "https://secure.markspencer.com/irmng/index.html?propertycode=ms&arrival=2026-11-04&departure=2026-11-09&people1=2&people2=0"
  );
  assert.equal(markSpencer.engine, "irmng");

  const lucia = discoverBookingUrlFromHtml({
    hotel: { name: "Hotel Lucia", directBookingUrl: "https://www.hotellucia.com/" },
    trip: { checkIn: "2026-11-04", checkOut: "2026-11-09", guests: 2 },
    html: `<a href="https://be.synxis.com/?chain=22402&hotel=49677&src=24C">Book</a>`
  });

  assert.equal(lucia.engine, "synxis");
  assert.match(lucia.url, /arrive=2026-11-04/);
  assert.match(lucia.url, /depart=2026-11-09/);

  const vintage = discoverBookingUrlFromHtml({
    hotel: { name: "Kimpton Hotel Vintage Portland", directBookingUrl: "https://www.hotelvintageportland.com/" },
    trip: { checkIn: "2026-11-04", checkOut: "2026-11-09", guests: 2 },
    html: `<a href="https://www.ihg.com/kimptonhotels/redirect?path=rates&amp;hotelCode=PDXVP&amp;brandCode=KI&amp;regionCode=1&amp;localeCode=en">Book</a>`
  });

  assert.equal(vintage.engine, "ihg");
  assert.match(vintage.url, /hotelCode=PDXVP/);
});
