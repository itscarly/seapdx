# Project Context

## What this project is

`codexproject` is a static travel dashboard for a Seattle and Portland trip.

It is built to be:

- easy to open locally
- easy to verify
- easy to update when trip facts change
- readable in Obsidian for project memory and handoff

## Current product shape

- Main trip data: `data/trip-data.js`
- Seattle hotel monitor source: `data/hotel-monitor-source.json`
- Seattle hotel monitor report: `data/hotel-monitor-report.json`
- Manila airfare watch source: `data/airfare-watch.json`
- Manila airfare generated summary: `research/airfare/latest-summary.json`
- Main page: `dashboards/html/index.html`
- Hotel intelligence page: `dashboards/html/hotels.html`
- Airfare intelligence page: `dashboards/html/airfare.html`
- Main styles: `dashboards/css/styles.css`
- Main behavior: `dashboards/js/app.js`
- Hotel tracker behavior: `dashboards/js/hotels.js`
- Airfare tracker behavior: `dashboards/js/airfare.js`
- Local preview: `npm run serve`
- Fast verification: `npm run validate`
- Public share links:
  - GitHub Pages: `https://limcarl83-maker.github.io/my_projects/dashboards/html/index.html`
  - Netlify may still exist, but GitHub Pages is now the clean no-credit fallback

## Main working rules

- Treat the repo as a static site first.
- Treat `data/trip-data.js` as the source of truth for itinerary content.
- Treat the hotel tracker as a separate subsystem with its own source data and generated report.
- Treat the airfare tracker as a separate subsystem with its own watch data, scoring logic, generated report, and airline-direct verification rules.
- Treat the active itinerary as exact, not vague:
  - no active `or` blocks
  - one real stop per real event
  - explicit travel blocks between stops
  - explicit hotel departure and return blocks when they matter
- Treat meaningful note maintenance as part of done work.
- Prefer plain-language project notes that a non-technical reader can follow.

## Trip-specific defaults

- Seattle should stay Capitol Hill first unless a better verified route is chosen.
- Bainbridge should stay a breakfast-first island day unless the itinerary changes on purpose.
- Portland should stay anchored around Hotel Vance and close-in neighborhood routing.
- Prices, hours, and transportation assumptions should be rechecked as the trip gets closer.
- Portland hotel ranking is intentionally blocked until the total post-tax lodging cap is supplied.

## Related notes

- [[ARCHITECTURE]]
- [[DECISIONS]]
- [[TASKS]]
- [[CHANGELOG]]
- [[LEARNINGS]]
- [[KNOWN_ISSUES]]
- [[MAINTENANCE]]
