const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");
const {
  buildFallbackUrl,
  buildPriceVerification,
  classifyPageState,
  deriveDirectEngine,
  finalizeDirectPriceOutcome,
  extractStayTotalFromText
} = require("./lib/hotel-pricing");

const rootDir = path.join(__dirname, "..");
const sourcePath = path.join(rootDir, "data", "hotel-monitor-source.json");
const persistentProfileDir = path.join(rootDir, ".cache", "hotel-monitor-profile");

const HOTEL_MONITOR_HEADLESS = process.env.HOTEL_MONITOR_HEADLESS !== "false";
const HOTEL_MONITOR_DRY_RUN = process.env.HOTEL_MONITOR_DRY_RUN === "1";
const MATERIAL_VARIANCE_ABSOLUTE = 75;
const MATERIAL_VARIANCE_PERCENT = 0.15;

const DIRECT_ADAPTERS = new Set(["travelclick", "synxis", "independent", "sonder"]);
const SESSION_ADAPTERS = new Set(["hilton", "hyatt", "ihg", "marriott"]);

function normalizeHotelMetadata(hotel) {
  const engine = deriveDirectEngine(hotel.directBookingUrl);
  hotel.priceVerification = {
    ...(hotel.priceVerification || {}),
    directEngine: hotel.priceVerification?.directEngine || engine
  };
  if (hotel.fallbackAllowed === undefined) hotel.fallbackAllowed = true;
  return engine;
}

function looksMateriallyDifferent(previousTotal, nextTotal) {
  if (typeof previousTotal !== "number" || typeof nextTotal !== "number") return false;
  const absoluteGap = Math.abs(previousTotal - nextTotal);
  return absoluteGap >= MATERIAL_VARIANCE_ABSOLUTE || absoluteGap / previousTotal >= MATERIAL_VARIANCE_PERCENT;
}

function shouldPersistOutcome(hotel, outcome) {
  if (!outcome.found || typeof outcome.total !== "number") return false;
  if (outcome.sourceTier === "fallback-provider" && hotel.trueTotalCost != null) {
    return !looksMateriallyDifferent(hotel.trueTotalCost, outcome.total);
  }
  return true;
}

async function capturePage(page, url) {
  const responseLog = [];
  page.on("response", (response) => {
    if (responseLog.length >= 20) return;
    const request = response.request();
    if (!["xhr", "fetch", "document"].includes(request.resourceType())) return;
    responseLog.push({
      status: response.status(),
      url: response.url()
    });
  });

  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForTimeout(4000);

  const title = await page.title().catch(() => "");
  const bodyText = await page.locator("body").innerText().catch(() => "");
  return {
    finalUrl: page.url(),
    title,
    bodyText,
    responseLog
  };
}

function buildStatusFromCapture(result, fallback = {}) {
  const priceResult = extractStayTotalFromText({
    bodyText: result.bodyText,
    nights: fallback.nights || 1
  });
  return finalizeDirectPriceOutcome({
    engine: fallback.engine,
    extraction: priceResult,
    finalUrl: result.responseLog[0]?.url || result.finalUrl,
    source: fallback.source
  });
}

async function attemptDirectCapture(hotel, trip, contexts) {
  const engine = hotel.priceVerification?.directEngine || deriveDirectEngine(hotel.directBookingUrl);
  const context = SESSION_ADAPTERS.has(engine) ? contexts.persistent : contexts.ephemeral;
  const page = await context.newPage();
  try {
    const capture = await capturePage(page, hotel.directBookingUrl);
    const state = classifyPageState(capture);
    if (state.status !== "ok") {
      return {
        found: false,
        status: state.status,
        blockedReason: state.blockedReason,
        source: `playwright:${engine}`,
        rawEvidenceRef: capture.finalUrl,
        note: `${engine} direct flow returned ${state.blockedReason}.`
      };
    }

    return buildStatusFromCapture(capture, {
      engine,
      nights: trip.nights,
      source: `playwright:${engine}`,
      label: `${engine} direct`
    });
  } catch (error) {
    return {
      found: false,
      status: engine === "hilton" || engine === "hyatt" || engine === "ihg"
        ? "session-refresh-needed"
        : "manual-review-needed",
      blockedReason: "navigation-failed",
      source: `playwright:${engine}`,
      note: error.message
    };
  } finally {
    await page.close().catch(() => {});
  }
}

async function attemptFallbackCapture(hotel, trip, context) {
  if (hotel.fallbackAllowed === false) {
    return {
      found: false,
      status: "manual-review-needed",
      blockedReason: "fallback-disabled",
      note: "Fallback provider disabled for this hotel."
    };
  }

  const fallbackUrl = buildFallbackUrl(hotel, trip);
  const page = await context.newPage();
  try {
    const capture = await capturePage(page, fallbackUrl);
    const extracted = extractStayTotalFromText({
      bodyText: capture.bodyText,
      nights: trip.nights
    });
    if (!extracted) {
      return {
        found: false,
        status: "manual-review-needed",
        blockedReason: "fallback-no-total",
        source: "playwright:fallback-provider",
        rawEvidenceRef: fallbackUrl,
        note: "Fallback provider did not expose a trustworthy stay total."
      };
    }

    return {
      found: true,
      total: extracted.total,
      subtotal: extracted.subtotal,
      taxes: extracted.taxes,
      captureMethod: "fallback-provider",
      sourceTier: "fallback-provider",
      confidence: extracted.confidence === "high" ? "medium" : extracted.confidence,
      status: "captured-fallback",
      source: "playwright:fallback-provider",
      rawEvidenceRef: fallbackUrl,
      note: `Fallback provider capture for ${hotel.name}.`
    };
  } catch (error) {
    return {
      found: false,
      status: "manual-review-needed",
      blockedReason: "fallback-failed",
      source: "playwright:fallback-provider",
      rawEvidenceRef: fallbackUrl,
      note: error.message
    };
  } finally {
    await page.close().catch(() => {});
  }
}

function applyOutcome(hotel, outcome, now) {
  const previousTotal = hotel.trueTotalCost;
  const verification = buildPriceVerification({ hotel, outcome, now });
  verification.directEngine = hotel.priceVerification?.directEngine || deriveDirectEngine(hotel.directBookingUrl);

  if (shouldPersistOutcome(hotel, outcome)) {
    hotel.trueTotalCost = outcome.total;
  } else if (outcome.found && typeof previousTotal === "number") {
    verification.status = outcome.status;
    verification.sourceTier = "last-verified";
    verification.confidence = "medium";
    verification.evidenceNote = `${verification.evidenceNote} Preserved prior verified total $${previousTotal.toFixed(2)} because fallback variance was material.`;
  }

  hotel.priceVerification = verification;
}

async function main() {
  const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
  const today = new Date().toISOString().slice(0, 10);
  const now = new Date().toISOString();

  fs.mkdirSync(persistentProfileDir, { recursive: true });

  console.log(`[Hotel Scraper] Starting layered monitor (${HOTEL_MONITOR_HEADLESS ? "headless" : "headed"})...`);
  const ephemeralBrowser = await chromium.launch({ headless: HOTEL_MONITOR_HEADLESS });
  const ephemeral = await ephemeralBrowser.newContext({
    locale: "en-US",
    viewport: { width: 1440, height: 960 },
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
  });
  const persistent = await chromium.launchPersistentContext(persistentProfileDir, {
    headless: HOTEL_MONITOR_HEADLESS,
    viewport: { width: 1440, height: 960 },
    locale: "en-US",
    channel: process.env.HOTEL_MONITOR_CHANNEL || undefined
  });

  let directCaptures = 0;
  let fallbackCaptures = 0;
  let blocked = 0;
  let reviews = 0;

  try {
    for (const cityKey of ["seattle", "portland"]) {
      const city = source[cityKey];
      if (!city) continue;

      const hotels = [
        ...(city.currentReservation ? [city.currentReservation] : []),
        ...(city.watchlist || [])
      ];

      console.log(`\n[Hotel Scraper] === ${cityKey.toUpperCase()} — ${city.trip.nights} nights ===`);

      for (const hotel of hotels) {
        const engine = normalizeHotelMetadata(hotel);
        process.stdout.write(`  ${hotel.name} [${engine}]... `);

        const directOutcome = await attemptDirectCapture(hotel, city.trip, { ephemeral, persistent });
        let finalOutcome = directOutcome;

        if (!directOutcome.found && ["blocked-direct", "stale-direct-url", "session-refresh-needed"].includes(directOutcome.status)) {
          const fallbackOutcome = await attemptFallbackCapture(hotel, city.trip, ephemeral);
          if (fallbackOutcome.found || fallbackOutcome.blockedReason !== "fallback-no-total") {
            finalOutcome = fallbackOutcome.found ? fallbackOutcome : directOutcome;
            if (fallbackOutcome.found && typeof hotel.trueTotalCost === "number" && looksMateriallyDifferent(hotel.trueTotalCost, fallbackOutcome.total)) {
              finalOutcome = {
                ...fallbackOutcome,
                note: `${fallbackOutcome.note} Material variance against last verified direct total.`
              };
            }
          }
        }

        applyOutcome(hotel, finalOutcome, now);

        if (finalOutcome.found && finalOutcome.sourceTier === "fallback-provider") {
          console.log(`fallback $${finalOutcome.total.toFixed(2)} ✓`);
          fallbackCaptures++;
        } else if (finalOutcome.found) {
          console.log(`direct $${finalOutcome.total.toFixed(2)} ✓`);
          directCaptures++;
        } else if (finalOutcome.status === "manual-review-needed") {
          console.log(`review — ${finalOutcome.blockedReason || finalOutcome.note}`);
          reviews++;
        } else {
          console.log(`${finalOutcome.status} — ${finalOutcome.blockedReason || finalOutcome.note}`);
          blocked++;
        }
      }
    }

    source.meta.snapshotDate = today;
    source.meta.automation.lastAutomatedCheckAt = now;
    source.meta.automation.lastAutomatedSummary = `Layered monitor ${today}: ${directCaptures} direct captures, ${fallbackCaptures} fallback captures, ${blocked} blocked, ${reviews} manual-review.`;

    if (!HOTEL_MONITOR_DRY_RUN) {
      fs.writeFileSync(sourcePath, `${JSON.stringify(source, null, 2)}\n`);
    }

    console.log(`\n[Hotel Scraper] Done. Direct: ${directCaptures}, fallback: ${fallbackCaptures}, blocked: ${blocked}, review: ${reviews}`);
    if (HOTEL_MONITOR_DRY_RUN) {
      console.log("[Hotel Scraper] Dry run only — source file not written.");
    } else {
      console.log("[Hotel Scraper] Run 'npm run build:hotels' to rebuild the hotel report.");
    }
  } finally {
    await ephemeral.close().catch(() => {});
    await ephemeralBrowser.close().catch(() => {});
    await persistent.close().catch(() => {});
  }
}

main().catch((error) => {
  console.error("[Hotel Scraper] Fatal:", error);
  process.exit(1);
});
