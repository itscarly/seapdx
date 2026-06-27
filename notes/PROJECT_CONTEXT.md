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

- **Seattle hotel base**: The active itinerary and shared Google Calendar are routed from The Boylston Hotel Capitol Hill for Nov 1-5. Boylston extra Nov 4-5 night still needs direct hotel confirmation. Keep Reside/Palihotel only as stale prior-booking context until cancellation status is reconciled.
- **Seattle watchlist**: 4 hotels tracked (transitScore > 90 only). Low-transit hotels removed session 16.
- **Portland**: Courtyard by Marriott Portland City Center booked $487.85 (conf# [redacted]). Cancel Hotel Vance (conf# [redacted]) before Nov 3, 11:59 PM.
- **Shared calendar status**: Portland Day 6-9 in the shared group Google Calendar now uses the richer popup format with explicit purpose, costs, links, order/do guidance, skip notes, and continuity. Future calendar cleanup should start from Seattle or from newly changed stops, not by redoing those Portland blocks.
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

- Seattle itinerary and shared Google Calendar routing use The Boylston Hotel Capitol Hill as the Nov 1-5 base. Do not create new Reside/104 Pine routing unless the user explicitly reverses the hotel decision.
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

## Agent startup sequence

Use this order at the start of a new Claude/Codex session:
1. `notes/memory/active/SESSION_START.md`
2. latest note in `notes/session-start/`
3. relevant source index note(s) in `notes/sources/`

## 2026-05-30 itinerary overhaul
- Updated Seattle/Portland itinerary dates to Nov 1-9 with hour-by-hour activity, walk/transit, meals, and rest blocks.
- Seattle base set to The Boylston Hotel Capitol Hill; Portland starts Nov 5 after Amtrak Cascades 517 (12:10 PM to 3:35 PM).
- Added Google Calendar import file: data/google-calendar-import-nov1-9-2026.csv.
- Rebalanced budget/day totals to match new detailed schedule (projected total: $888).
