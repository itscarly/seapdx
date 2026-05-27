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
- Airfare watch source: `data/airfare-watch.json` (one-way economy cash-fare watch for SFO→MNL and ORD→MNL, Mar 7-13 2027)
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

- **Seattle — cancel 2 of 3 reservations**: Reside (104 Pine St, conf [redacted]) is the intended keep. Cancel Palihotel (conf [redacted]) by Oct 30 3pm and Boylston (conf [redacted]) by Oct 31 4pm.
- **Seattle watchlist**: 4 hotels tracked (transitScore > 90 only). Low-transit hotels removed session 16.
- **Portland**: Courtyard by Marriott Portland City Center booked $487.85 (conf# [redacted]). Cancel Hotel Vance (conf# [redacted]) before Nov 3, 11:59 PM.
- **Airfare watch**: the current exact in-window signal is Philippine Airlines nonstop SFO→MNL on `2027-03-10` at `$523` from Skyscanner. It remains discovery-only because no airline-direct checkout proof was captured in this run. ORD still needs an exact one-way in-window baseline from an allowed carrier.
- **Saved automations**: 9 active automations remain after cleanup. Kept set = Seattle hotels, Seattle/Portland price watches, Seattle/Portland flight-transit watches, and SFO/ORD→MNL airfare watches.

## Automation commands

| Command | What it does |
| --- | --- |
| `npm run scrape:hotels` | Runs the layered hotel monitor: direct adapters first, persistent browser profile for blocked chains, fallback attempt only after direct blockers, and blocker-state recording when no trustworthy total lands |
| `npm run monitor:airfare` | Rebuilds the current airfare intelligence report and summary from `data/airfare-watch.json` |
| `npm run build:hotels` | Rebuilds hotel-monitor-report.json from source |
| `npm run serve` | Local preview at `http://localhost:4173` |

## Main working rules

- Treat the repo as a static site first.
- Treat `data/trip-data.js` as the source of truth for itinerary content.
- Treat the airfare tracker as a cash-fare watch with strict airline-direct booking rules. Discovery sites are only signals; if airline checkout proof is missing, keep `directAirlineVerified` false and record the blocker or coverage gap explicitly.
- Treat the hotel tracker as a separate subsystem with its own source data, generated report, rebooking logic, and source-tier semantics.
- Preserve the last trustworthy hotel total when a new scrape is ambiguous, blocked, or stale.
- Treat meaningful note maintenance as part of done work.
- Prefer plain-language project notes that a non-technical reader can follow.

## Trip-specific defaults

- Seattle base is Reside at 104 Pine St (Pike Place Market block). All routing, calendar, and itinerary are set for this address.
- Bainbridge should stay a breakfast-first island day unless the itinerary changes on purpose.
- Portland should stay anchored around Courtyard by Marriott Portland City Center (550 SW Oak St) and close-in neighborhood routing.
- Prices, hours, and transportation assumptions should be rechecked as the trip gets closer.

## Related notes

- [[ARCHITECTURE]]
- [[DECISIONS]]
- [[TASKS]]
- [[CHANGELOG]]
- [[LEARNINGS]]
- [[KNOWN_ISSUES]]
- [[MAINTENANCE]]
