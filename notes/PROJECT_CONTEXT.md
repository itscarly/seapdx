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
- Manila airfare watch source: `data/airfare-watch.json`
- Manila airfare generated summary: `research/airfare/latest-summary.json`
- Seattle hotel monitor source: `data/hotel-monitor-source.json`
- Seattle hotel monitor report: `data/hotel-monitor-report.json`
- Main page: `dashboards/html/index.html`
- Airfare intelligence page: `dashboards/html/airfare.html`
- Hotel intelligence page: `dashboards/html/hotels.html`
- Main styles: `dashboards/css/styles.css`
- Main behavior: `dashboards/js/app.js`
- Airfare tracker behavior: `dashboards/js/airfare.js`
- Hotel tracker behavior: `dashboards/js/hotels.js`
- Local preview: `npm run serve`
- Fast verification: `npm run validate`

## Main working rules

- Treat the repo as a static site first.
- Treat `data/trip-data.js` as the source of truth for itinerary content.
- Treat the airfare tracker as a separate subsystem with its own watch data, generated report, and airline-direct verification rules.
- Treat the hotel tracker as a separate subsystem with its own source data, generated report, and rebooking logic.
- Treat meaningful note maintenance as part of done work.
- Prefer plain-language project notes that a non-technical reader can follow.

## Trip-specific defaults

- Seattle should stay Capitol Hill first unless a better verified route is chosen.
- Bainbridge should stay a breakfast-first island day unless the itinerary changes on purpose.
- Portland should stay anchored around Hotel Vance and close-in neighborhood routing.
- Prices, hours, and transportation assumptions should be rechecked as the trip gets closer.

## Related notes

- [[ARCHITECTURE]]
- [[DECISIONS]]
- [[TASKS]]
- [[CHANGELOG]]
- [[LEARNINGS]]
- [[KNOWN_ISSUES]]
- [[MAINTENANCE]]
