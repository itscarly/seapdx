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
- `npm run sync:calendar` only rebuilds JSON/CSV export artifacts; live Google Calendar changes require Google Calendar MCP edits against the `Seattle & Portland 2026` calendar.
- Both public pages render entirely client-side from the trip-data source — no build step needed to view them, just open the HTML files or run `npm run serve`.

## Current Handoff Map

As of Sep 13, 2026, the restored local checkout and public repo both use the corrected GitHub identity:

- local project: `/Users/carly/Library/Mobile Documents/com~apple~CloudDocs/Documents/SeaPdx`
- repository: `https://github.com/itscarly/seapdx`
- public site: `https://itscarly.github.io/seapdx/dashboards/html/index.html#itinerary`
- local preview command: `npm run serve`
- local preview URL: `http://127.0.0.1:4173/dashboards/html/index.html`

Recent Sep 13 changes all route through `data/trip-data.js`:

- confirmed cost edits: ACME Chicago replaced Hotel Blake, shopping/tattoo/Best Buy removals, Amazon cart block added, Chicago contingency reduced
- public URL migration: old `/seadpdx/` links corrected to `/seapdx/`
- flight retime: EMR56H now models OZ702 MNL->ICN plus Korean Air KE047 ICN->SEA, with Day 1 Seattle timing shifted from 1:55 PM to 2:10 PM arrival
- live calendar patched in place for the affected flight, layover, and Day 1 arrival/evening events

Next-session default flow:

1. Run `graphify query "<question>"` first for architecture, source-of-truth, data-flow, or project-content questions.
2. Edit `data/trip-data.js` for itinerary/cost changes.
3. Run `npm run validate` to syntax-check, audit budget, stamp last-updated, and regenerate calendar exports.
4. If live calendar changes are needed, patch `Seattle & Portland 2026` with the Google Calendar tool after checking the generated export.
5. Run `graphify update .` after code/data/doc edits.
6. Commit, push, check GitHub Actions, then verify the live GitHub Pages URL.

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
