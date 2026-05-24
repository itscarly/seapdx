// Playwright-based hotel price scraper.
// Navigates each hotel's direct booking URL, waits for the price to render,
// and extracts the total cost inclusive of taxes for the configured stay dates.
// Updates trueTotalCost and priceVerification in data/hotel-monitor-source.json.
// Run: npm run scrape:hotels

const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const rootDir = path.join(__dirname, "..");
const sourcePath = path.join(rootDir, "data", "hotel-monitor-source.json");

// Per-brand price extraction strategies.
// Each entry has selectors to try and a fallback regex on page text.
const BRAND_STRATEGIES = {
  // Hilton direct (hilton.com)
  "hilton.com": {
    selectors: ["[data-testid='total-price']", ".total-price", "[class*='totalPrice']", "[class*='total-cost']", ".price-summary .total"],
    waitFor: "[data-testid='total-price'], .price-summary, [class*='totalPrice']",
    patterns: [/total\s*(?:for\s+\d+\s+nights?)?\s*[:\-]?\s*\$?([\d,]+\.?\d*)/i, /\$\s*([\d,]+\.?\d*)\s*(?:total|inc\.?\s*tax)/i]
  },
  // Hyatt direct (hyatt.com)
  "hyatt.com": {
    selectors: ["[data-automation-id='total-price']", ".total-price", "[class*='totalPrice']", ".booking-summary-total", "[class*='grand-total']"],
    waitFor: "[data-automation-id='total-price'], .booking-summary-total, [class*='totalPrice']",
    patterns: [/total\s*(?:inc\.?\s*taxes?)?\s*[:\-]?\s*\$?([\d,]+\.?\d*)/i, /\$\s*([\d,]+\.?\d*)\s*(?:total|per\s+stay)/i]
  },
  // Marriott direct (marriott.com)
  "marriott.com": {
    selectors: ["[id*='totalPrice']", "[class*='totalPrice']", ".t-price-total", "[data-testid='price-total']", ".rate-total"],
    waitFor: "[class*='totalPrice'], .t-price-total, [data-testid='price-total']",
    patterns: [/total\s*(?:cost|price|incl\.?\s*taxes?)?\s*[:\-]?\s*\$?([\d,]+\.?\d*)/i, /\$\s*([\d,]+\.?\d*)\s*(?:total|including)/i]
  },
  // IHG / Kimpton (ihg.com)
  "ihg.com": {
    selectors: ["[class*='total-price']", "[class*='totalPrice']", ".price-total", "[data-testid='total']", ".booking-total"],
    waitFor: "[class*='total-price'], .price-total, .booking-total",
    patterns: [/total\s*[:\-]?\s*USD?\s*\$?([\d,]+\.?\d*)/i, /\$\s*([\d,]+\.?\d*)\s*(?:total|per\s+stay)/i]
  },
  // SynXis engine (synxis.com — used by Hotel Max, State Hotel)
  "synxis.com": {
    selectors: ["[class*='totalPrice']", "[class*='total-price']", ".price-total", "[id*='totalAmount']"],
    waitFor: "[class*='total'], .price-summary",
    patterns: [/total\s*[:\-]?\s*\$?([\d,]+\.?\d*)/i, /\$\s*([\d,]+\.?\d*)\s*(?:total|taxes?)/i]
  },
  // TravelClick engine (bookings.travelclick.com — used by Paramount)
  "travelclick.com": {
    selectors: ["[class*='total']", ".price-total", "[id*='total']"],
    waitFor: "[class*='total'], .price-summary",
    patterns: [/total\s*[:\-]?\s*\$?([\d,]+\.?\d*)/i, /\$\s*([\d,]+\.?\d*)\s*(?:total|taxes?)/i]
  },
  // Sonder (sonder.com — used by Boylston)
  "sonder.com": {
    selectors: ["[class*='total']", "[data-testid*='total']", ".price-breakdown-total"],
    waitFor: "[class*='total'], [data-testid*='total']",
    patterns: [/total\s*[:\-]?\s*\$?([\d,]+\.?\d*)/i, /\$\s*([\d,]+\.?\d*)\s*(?:total|incl)/i]
  }
};

function getBrandStrategy(url) {
  for (const domain of Object.keys(BRAND_STRATEGIES)) {
    if (url.includes(domain)) return { domain, ...BRAND_STRATEGIES[domain] };
  }
  // Generic fallback
  return {
    domain: "generic",
    selectors: ["[class*='total']", "[class*='price']"],
    waitFor: "body",
    patterns: [/total\s*[:\-]?\s*\$?([\d,]+\.?\d*)/i, /\$\s*([\d,]+\.?\d*)/]
  };
}

function extractPriceFromText(text, patterns, nights) {
  // Try each pattern
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      const value = parseFloat(match[1].replace(/,/g, ""));
      if (value > 50 && value < 5000) return value;
    }
  }

  // Fallback: collect all dollar amounts and pick the most likely "total"
  const amounts = [...text.matchAll(/\$\s*([\d,]+\.\d{2})/g)]
    .map(m => parseFloat(m[1].replace(/,/g, "")))
    .filter(v => v > 100 && v < 5000)
    .sort((a, b) => a - b);

  if (amounts.length > 0) {
    // Prefer amounts that look like multi-night totals (> nights * 80)
    const plausible = amounts.filter(v => v > nights * 80);
    if (plausible.length > 0) return plausible[0]; // lowest plausible total
  }

  return null;
}

async function scrapeHotelPrice(hotel, nights, browser) {
  const url = hotel.directBookingUrl;
  if (!url) return { found: false, note: "No directBookingUrl" };

  const strategy = getBrandStrategy(url);
  let context;
  try {
    context = await browser.newContext({
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      locale: "en-US",
      viewport: { width: 1280, height: 900 }
    });
    const page = await context.newPage();

    // Block images/fonts to speed up loading
    await page.route("**/*.{png,jpg,jpeg,gif,webp,svg,woff,woff2,ttf}", r => r.abort());

    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 40000 });

    // Wait for price selectors or a reasonable timeout
    try {
      await page.waitForSelector(strategy.waitFor, { timeout: 15000 });
    } catch {
      // Continue anyway — try text extraction
    }

    // Extra wait for JS price rendering
    await page.waitForTimeout(3000);

    const pageText = await page.evaluate(() => document.body.innerText);
    const price = extractPriceFromText(pageText, strategy.patterns, nights);

    if (price !== null) {
      return { found: true, price, source: `playwright:${strategy.domain}`, url };
    }

    return {
      found: false, source: `playwright:${strategy.domain}`, url,
      note: "Price not found in rendered page. Site may require interactive session.",
      pageSnippet: pageText.slice(0, 400)
    };
  } catch (err) {
    return { found: false, source: "playwright-error", url, error: err.message };
  } finally {
    if (context) await context.close();
  }
}

async function main() {
  const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
  const today = new Date().toISOString().slice(0, 10);
  const now = new Date().toISOString();

  console.log("[Hotel Scraper] Starting Playwright headless Chromium...");
  const browser = await chromium.launch({ headless: true });

  let updated = 0;
  let failed = 0;

  for (const city of ["seattle", "portland"]) {
    const cityData = source[city];
    if (!cityData) continue;

    const nights = cityData.trip.nights;
    const hotels = [
      ...(cityData.currentReservation ? [cityData.currentReservation] : []),
      ...(cityData.watchlist || [])
    ];

    console.log(`\n[Hotel Scraper] === ${city.toUpperCase()} — ${nights} nights ===`);

    for (const hotel of hotels) {
      process.stdout.write(`  ${hotel.name}... `);
      const result = await scrapeHotelPrice(hotel, nights, browser);

      if (result.found) {
        hotel.trueTotalCost = result.price;
        hotel.priceVerification = {
          status: "playwright-scraped",
          evidenceNote: `Playwright headless scrape on ${today}. Total: $${result.price.toFixed(2)} (${result.source}).`,
          lastScrapedAt: now,
          source: result.source
        };
        console.log(`$${result.price.toFixed(2)} ✓`);
        updated++;
      } else {
        // Keep existing price if we had one, update status
        hotel.priceVerification = {
          ...hotel.priceVerification,
          status: hotel.trueTotalCost ? "stale-price" : "scrape-failed",
          lastAttemptedAt: now,
          lastScrapeNote: result.note || result.error || "scrape failed",
          source: result.source
        };
        console.log(`failed — ${result.note || result.error || "unknown"}`);
        failed++;
      }
    }
  }

  source.meta.snapshotDate = today;
  source.meta.automation.lastAutomatedCheckAt = now;
  source.meta.automation.lastAutomatedSummary = `Playwright scrape ${today}: ${updated} prices updated, ${failed} failed.`;

  fs.writeFileSync(sourcePath, `${JSON.stringify(source, null, 2)}\n`);

  await browser.close();

  console.log(`\n[Hotel Scraper] Done. Updated: ${updated}, Failed: ${failed}`);
  console.log("[Hotel Scraper] Run 'npm run build:hotels' to rebuild the HTML dashboard.");
}

main().catch(err => {
  console.error("[Hotel Scraper] Fatal:", err);
  process.exit(1);
});
