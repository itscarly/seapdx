# Architecture

## System shape

This project is a static dashboard, not a backend app.

The main layers are:

- trip data in `data/trip-data.js`
- airfare watch data in `data/airfare-watch.json` (trip config, decision rules, and per-itinerary observations)
- hotel watchlist + metadata in `data/hotel-monitor-source.json` (all hotels, prices, amenities)
- hotel monitor report in `data/hotel-monitor-report.json` (generated from source — run `npm run build:hotels`)
- HTML structure in `dashboards/html/index.html`
- airfare monitor HTML in `dashboards/html/airfare.html` (reads `airfare-watch.json` plus `research/airfare/latest-summary.json`)
- hotel monitor HTML in `dashboards/html/hotels.html` (reads hotel-monitor-source.json directly, renders as table)
- presentation in `dashboards/css/styles.css`
- interactivity in `dashboards/js/app.js`
- monitor scripts in `scripts/` (`build-airfare-report.js`, `lib/airfare-monitor.js`, and the Playwright-based hotel monitor)
- Playwright + Chromium installed as local dependency (`npm install playwright`, `npx playwright install chromium`)

## Runtime model

- Local preview uses a static server from the project root.
- Public hosting uses the same static files and currently runs through Netlify.
- Notes live in `notes/` and are meant for Obsidian plus agent maintenance.
- The airfare dashboard reads `data/airfare-watch.json` for source observations and `research/airfare/latest-summary.json` for rankings. Run `npm run monitor:airfare` after airfare-watch edits so the summary JSON and markdown report stay aligned.
- The hotel dashboard reads directly from `data/hotel-monitor-source.json`. Hotel prices are scraped via Playwright (`npm run scrape:hotels`). Run `npm run build:hotels` after scraping to regenerate the report JSON.
- Both dashboards render entirely client-side from JSON — no build step needed to view them, just open the HTML files or run `npm run serve`.

## Documentation safety rule

Do not rewrite architecture notes unless one of these is true:

- verified code structure changed
- verified deployment workflow changed
- verified runtime behavior changed

If confidence is low, add a short follow-up note instead of rewriting the active architecture summary.

## Maintenance boundaries

- [[PROJECT_CONTEXT]] explains what the project is.
- [[ARCHITECTURE]] explains how it is built.
- [[Decisions]] explains why choices were made.
- [[CHANGELOG]] tracks meaningful project changes.
- [[LEARNINGS]] stores reusable patterns.
- [[KNOWN_ISSUES]] stores unresolved risks or bugs.
- [[Project Log]] is the running dated session history.
