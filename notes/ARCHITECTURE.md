# Architecture

## System shape

This project is a static dashboard, not a backend app.

The main layers are:

- trip data in `data/trip-data.js`
- hotel monitor source data in `data/hotel-monitor-source.json`
- hotel monitor generated report in `data/hotel-monitor-report.json`
- airfare watch source data in `data/airfare-watch.json`
- airfare scoring logic in `scripts/lib/airfare-monitor.js`
- airfare generated report in `research/airfare/latest-summary.json` plus `research/airfare/latest-report.md`
- HTML structure in `dashboards/html/index.html`
- hotel monitor HTML structure in `dashboards/html/hotels.html`
- airfare monitor HTML structure in `dashboards/html/airfare.html`
- presentation in `dashboards/css/styles.css`
- interactivity in `dashboards/js/app.js`
- hotel monitor interactivity in `dashboards/js/hotels.js`
- airfare monitor interactivity in `dashboards/js/airfare.js`
- small support scripts in `scripts/`

## Runtime model

- Local preview uses a static server from the project root.
- Public hosting is static-first and currently works through GitHub Pages.
- Netlify remains a secondary host path, but it can drift or block when account credits are exhausted.
- Notes live in `notes/` and are meant for Obsidian plus agent maintenance.
- The hotel tracker is still static-first: a manual refresh script builds the report JSON and markdown, then the hotel page renders that generated output.
- The airfare tracker is also static-first: watch data stays in repo, a local script computes scores and report artifacts, then the airfare page renders the generated intelligence output with no backend.

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
