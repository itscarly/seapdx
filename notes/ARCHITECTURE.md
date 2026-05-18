# Architecture

## System shape

This project is a static dashboard, not a backend app.

The main layers are:

- trip data in `data/trip-data.js`
- HTML structure in `dashboards/html/index.html`
- presentation in `dashboards/css/styles.css`
- interactivity in `dashboards/js/app.js`
- small support scripts in `scripts/`

## Runtime model

- Local preview uses a static server from the project root.
- Public hosting is Netlify-style static hosting.
- Notes live in `notes/` and are meant for Obsidian plus agent maintenance.

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
