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
- Main page: `dashboards/html/index.html`
- Logistics hub page: `dashboards/html/logistics.html`
- Main styles: `dashboards/css/styles.css`
- Main behavior: `dashboards/js/app.js`
- Calendar export script: `scripts/sync-calendar-exports.js`
- Budget validation script: `scripts/audit-budget.js`
- Local preview: `npm run serve`
- Fast verification: `npm run validate`

## Homepage product direction

- `dashboards/html/index.html` is now the public-facing trip command center.
- The homepage prioritizes trip overview, day-by-day itinerary scanning, booked-flight visibility, guides, and route maps.
- Utility-heavy content such as full source lists, monitoring links, and future booked flights should live in `dashboards/html/logistics.html` instead of competing for space on the homepage.

## Current next priority

- **Homepage redesign**: complete. The main dashboard now uses the public-facing editorial layout and the logistics hub split.
- **Executive spend summary**: active and now part of the homepage. Confirmed airfare, confirmed hotels, planned local spend, and planned personal purchases should stay aligned with `data/trip-data.js`.
- **Calendar/site alignment**: active. The public homepage itinerary now follows the newer shared-calendar route, and richer stop-detail content plus calendar backlinks are part of the canonical source.
- **Booked cost truth**: use Asiana `$540.43`, American Airlines [redacted] `$716.40`, Boylston `$504.46`, and Courtyard Portland `$391.00`.
- **Removed systems**: airfare tracker, hotel tracker, and repo monitor workflows are retired and should not be reintroduced into the public site or active repo workflow.
- **Remaining automation**: only the Kraken ticket watch should remain in scope. Current cadence is the saved Codex automation `seattle-kraken-ticket-watch`.

## Main commands

| Command | What it does |
| --- | --- |
| `npm run sync:calendar` | Rebuilds the Google Calendar JSON and CSV exports from `data/trip-data.js` |
| `npm run audit:budget` | Verifies itinerary day totals and budget math |
| `npm run validate` | Runs syntax checks, budget audit, and calendar export regeneration |
| `npm run serve` | Local preview at `http://localhost:4173` |

## Main working rules

- Treat the repo as a static site first.
- Treat `data/trip-data.js` as the source of truth for itinerary content.
- Use the live shared calendar as the discovery input only when it is clearly newer than the site, then normalize the confirmed result back into `data/trip-data.js`.
- Keep executive trip-cost totals and local activity-budget totals conceptually separate.
- Do not restore deleted airfare/hotel monitor workflows, tracker pages, or tracker docs unless the user explicitly asks for a new system.
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

## Current validated budget snapshot

- Local activity-budget projected total: `$1,236.50`
- Local activity-budget cap: `$1,250`
- Local activity-budget ceiling: `$1,300`
- Confirmed airfare total: `$1,256.83`
- Confirmed hotel total: `$895.46`
- Planned personal purchases total: `$582.00`
- All-in savings target: `$3,970.79`
- Kraken remains a `$120` estimate inside planned trip spend until the official 2026-27 single-game release is live.
