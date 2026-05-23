# Architecture

## System shape

This project is a static dashboard, not a backend app.

The main layers are:

- trip data in `data/trip-data.js`
- airfare watch source data in `data/airfare-watch.json`
- hotel monitor source data in `data/hotel-monitor-source.json`
- airfare generated report in `research/airfare/latest-summary.json` and `research/airfare/latest-report.md`
- hotel generated report in `data/hotel-monitor-report.json` and `research/hotels/latest-report.md`
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
- The airfare and hotel trackers are still static-first: repo data plus local report-generation scripts, then browser rendering from generated files.

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
