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

- **Seattle watchlist**: 14 hotels, criteria transit ≥85 / rating ≥4.0 / safe / elevator. Boylston confirmed $384.13 (RES [redacted]) — hold unless refundable sub-$400 appears. Three hotels still need prices: Arctic Club, Hotel Andra, Alexis Royal Sonesta.
- **Staypineapple flash sale**: 4 Staypineapple prices were captured at 25% off (Memorial Day sale ~ends 2026-05-28). Re-check after sale expires.
- **Portland**: Hotel Vance benchmark $628.46 (conf# [redacted]). Portland watchlist needs a price-check pass.
- **PAL taxes**: SFO→MNL $370.50, ORD→MNL $375.50. Automated Playwright scraper still hits interaction gates on PAL.com — monitor continues on schedule.

## Automation commands

| Command | What it does |
| --- | --- |
| `npm run scrape:hotels` | Runs the layered hotel monitor: direct adapters first, persistent browser profile for blocked chains, fallback attempt only after direct blockers, and blocker-state recording when no trustworthy total lands |
| `npm run scrape:pal` | Playwright scrapes PAL.com for current award taxes (force-runs regardless of cadence) |
| `npm run monitor:pal-taxes` | PAL tax check — cadence-gated (only runs on scheduled days) |
| `npm run build:hotels` | Rebuilds hotel-monitor-report.json from source |
| `npm run scrape:all` | scrape:hotels + build:hotels + scrape:pal in sequence |
| `npm run serve` | Local preview at `http://localhost:4173` |

## Main working rules

- Treat the repo as a static site first.
- Treat `data/trip-data.js` as the source of truth for itinerary content.
- Treat the airfare tracker as a PAL Award Tax Monitor — update `data/airfare-watch.json` with new tax snapshots whenever PAL.com shows a change. If PAL only loads the generic home flow, record the blocker instead of inventing a tax update.
- Treat the hotel tracker as a separate subsystem with its own source data, generated report, rebooking logic, and source-tier semantics.
- Preserve the last trustworthy hotel total when a new scrape is ambiguous, blocked, or stale.
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
