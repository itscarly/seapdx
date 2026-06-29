# Architecture

## System shape

This project is a static dashboard, not a backend app.

The main layers are:

- trip data in `data/trip-data.js`
- HTML structure in `dashboards/html/index.html`
- logistics hub HTML in `dashboards/html/logistics.html`
- presentation in `dashboards/css/styles.css`
- interactivity in `dashboards/js/app.js`
- validation and export scripts in `scripts/` (`audit-budget.js`, `sync-calendar-exports.js`, `session-status.js`)
- Playwright + Chromium installed as local dependency (`npm install playwright`, `npx playwright install chromium`)

## Runtime model

- Local preview uses a static server from the project root.
- Public hosting uses the same static files and currently runs through the GitHub-backed deploy flow in this repo.
- Notes live in `notes/` and are meant for Obsidian plus agent maintenance.
- The homepage and logistics hub now share `dashboards/js/app.js`, using `data-page` mode switches in the HTML body to keep the public itinerary surface and the utility hub on one client-side code path.
- The homepage renders both an executive all-in trip-cost summary and a lower-level local activity-budget summary from the same trip-data source.
- Calendar export artifacts are derived from `data/trip-data.js` via `npm run sync:calendar`.
- Both public pages render entirely client-side from the trip-data source — no build step needed to view them, just open the HTML files or run `npm run serve`.

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
