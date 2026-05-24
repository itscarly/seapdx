# Architecture

## System shape

This project is a static dashboard, not a backend app.

The main layers are:

- trip data in `data/trip-data.js`
- PAL award tax watch data in `data/airfare-watch.json` (routes, current taxes, full tax history)
- hotel watchlist + metadata in `data/hotel-monitor-source.json` (all hotels, prices, amenities)
- hotel monitor report in `data/hotel-monitor-report.json` (generated from source — run `npm run build:hotels`)
- HTML structure in `dashboards/html/index.html`
- airfare monitor HTML in `dashboards/html/airfare.html` (reads airfare-watch.json directly, renders as table)
- hotel monitor HTML in `dashboards/html/hotels.html` (reads hotel-monitor-source.json directly, renders as table)
- presentation in `dashboards/css/styles.css`
- interactivity in `dashboards/js/app.js`
- scraper scripts in `scripts/` (Playwright-based: scrape-hotel-prices.js, monitor-pal-taxes.js)
- Playwright + Chromium installed as local dependency (`npm install playwright`, `npx playwright install chromium`)

## Runtime model

- Local preview uses a static server from the project root.
- Public hosting uses the same static files and currently has GitHub Pages as the clean fallback path.
- Notes live in `notes/` and are meant for Obsidian plus agent maintenance.
- The airfare dashboard reads directly from `data/airfare-watch.json` — no generation step. PAL taxes are scraped via Playwright (`npm run scrape:pal` or `npm run monitor:pal-taxes` on cadence).
- The hotel dashboard reads directly from `data/hotel-monitor-source.json`. Hotel prices are scraped via Playwright (`npm run scrape:hotels`). Run `npm run build:hotels` after scraping to regenerate the report JSON.
- Both dashboards render entirely client-side from JSON — no build step needed to view them, just open the HTML files or run `npm run serve`.

## Documentation safety rule

Do not rewrite architecture notes unless one of these is true:

- verified code structure changed
- verified deployment workflow changed
- verified runtime behavior changed

If confidence is low, add a short follow-up note instead of rewriting the active architecture summary.

## Maintenance boundaries

- `PROJECT_CONTEXT.md` explains what the project is.
- `ARCHITECTURE.md` explains how it is built.
- `DECISIONS.md` explains why choices were made.
- `CHANGELOG.md` tracks meaningful project changes.
- `LEARNINGS.md` stores reusable patterns.
- `KNOWN_ISSUES.md` stores unresolved risks or bugs.
