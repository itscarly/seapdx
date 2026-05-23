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
- PAL award tax watch source: `data/airfare-watch.json` (tracks Mabuhay Miles redemption taxes for SFO→MNL and ORD→MNL, Business Class, Mar 3-7 2027)
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

## Current next priority

- Boylston Hotel is confirmed at $384.13 (RES ID [redacted]). Hotel monitor watches for a refundable sub-$400 alternative near King Street Amtrak or Link Light Rail.
- Airfare tracker is now a PAL Award Tax Monitor for Mabuhay Miles redemptions (SFO→MNL: 58k mi + $370.50 tax; ORD→MNL: 67k mi + $375.50 tax). Update `data/airfare-watch.json` whenever PAL.com shows a different tax amount for the Mar 3-7, 2027 departure window.
- Both trackers use a dark premium UI and are visually aligned with the main dashboard.
- The local server auto-starts via launchd — no manual start needed.
- Next ongoing work: periodic PAL tax checks (weekly), hotel monitor checks per the existing cadence (Mon/Wed/Fri through Sep 16, then daily), and itinerary rechecks as the trip approaches.

## Main working rules

- Treat the repo as a static site first.
- Treat `data/trip-data.js` as the source of truth for itinerary content.
- Treat the airfare tracker as a PAL Award Tax Monitor — update `data/airfare-watch.json` with new tax snapshots whenever PAL.com shows a change. No generated report or verification rules needed; the dashboard reads directly from the watch JSON.
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
