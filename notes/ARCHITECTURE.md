# Architecture

## System shape

This project is a static dashboard, not a backend app.

The main layers are:

- trip data in `data/trip-data.js`
- PAL award tax watch data in `data/airfare-watch.json` (routes, current taxes, tax history — no generated report needed)
- hotel monitor report in `data/hotel-monitor-report.json` (confirmed booking + watchlist + market strategy)
- HTML structure in `dashboards/html/index.html`
- airfare monitor HTML in `dashboards/html/airfare.html`
- hotel monitor HTML in `dashboards/html/hotels.html`
- presentation in `dashboards/css/styles.css`
- interactivity in `dashboards/js/app.js`
- airfare monitor interactivity in `dashboards/js/airfare.js`
- hotel monitor interactivity in `dashboards/js/hotels.js`
- small support scripts in `scripts/`

## Runtime model

- Local preview uses a static server from the project root.
- Public hosting uses the same static files and currently has GitHub Pages as the clean fallback path.
- Notes live in `notes/` and are meant for Obsidian plus agent maintenance.
- The airfare tracker reads directly from `data/airfare-watch.json` — no generation step. Update the JSON with new tax snapshots, commit, push.
- The hotel tracker reads from `data/hotel-monitor-report.json` — update the JSON when hotel prices change or the benchmark shifts.

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
