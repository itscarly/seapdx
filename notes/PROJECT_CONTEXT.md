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
- Canonical public host: `https://itscarly.github.io/seapdx/`

## Homepage product direction

- `dashboards/html/index.html` is now the public-facing trip command center.
- The homepage prioritizes trip overview, day-by-day itinerary scanning, booked-flight visibility, guides, and route maps.
- Utility-heavy content such as full source lists, monitoring links, and future booked flights should live in `dashboards/html/logistics.html` instead of competing for space on the homepage.

## Current next priority

- **Homepage redesign**: complete. The main dashboard now uses the public-facing editorial layout and the logistics hub split.
- **Executive spend summary**: active and now part of the homepage. Confirmed airfare, confirmed hotels, planned local spend, and planned personal purchases should stay aligned with `data/trip-data.js`.
- **Calendar/site alignment**: active. The public homepage itinerary now follows the newer shared-calendar route, and richer stop-detail content plus calendar backlinks are part of the canonical source.
- **Booked cost truth (updated 2026-08-15, session 49 — see `notes/memory/active/project_current_state.md` for the authoritative current figure)**: Asiana `$540.43`, American Airlines YWFKME `$716.40`, Palihotel Seattle `$662.00` (was Boylston `$504.46` -- swapped 2026-08-14), Hotel Vance `$412.96`, Hotel Blake (Chicago layover) `$787.38`. Confirmed airfare total `$2,247.84` (Philippine Airlines PR133 direct replaced the two-leg Korean Air return, session 46). Local trip-spend projected total `$2,909.91` against a `$3,050` cap/ceiling.
- **Removed systems**: airfare tracker, hotel tracker, and repo monitor workflows are retired and should not be reintroduced into the public site or active repo workflow.
- **Remaining automation**: the monthly baseline watch for itinerary prices, menus, schedules, and transit fares remains in scope. Kraken hockey was fully removed from the plan on 2026-08-02 and is no longer part of the watch. Do not reintroduce the old airfare/hotel/itinerary monitor stack.

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

- Seattle itinerary and shared Google Calendar routing use **Palihotel Seattle (107 Pine St)** as the Nov 1-4 base -- The Boylston Hotel Capitol Hill was swapped out 2026-08-14 (session 46) and is stale; do not reintroduce it or Reside/104 Pine routing unless the user explicitly reverses the hotel decision again.
- Bainbridge should stay a breakfast-first island day unless the itinerary changes on purpose.
- Portland should stay anchored around Hotel Vance, a Tribute Portfolio Hotel, and close-in neighborhood routing. Courtyard by Marriott Portland City Center was the stale/cancelled option -- do not reintroduce it as the base.
- Sleep/lights-out on any itinerary day must never start before 10:00 PM (see `notes/memory/active/feedback_sleep_ceiling.md`).
- Every itinerary stop needs its own individually-sourced, recent, subject-verified image -- never one generic photo reused across many stops, and never a rehosted copyrighted Google Images result (see `notes/memory/active/feedback_per_stop_image_sourcing.md`).
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

## Historical budget snapshot (as of 2026-08-02 comprehensive price audit -- SUPERSEDED, see `notes/memory/active/project_current_state.md` for current figures)

- Local activity-budget projected total: `$1,069`
- Local activity-budget cap: `$1,250`
- Local activity-budget ceiling: `$1,300`
- Confirmed airfare total: `$1,256.83`
- Confirmed hotel total: `$917.42` (Boylston `$504.46` + Hotel Vance `$412.96`)
- Planned personal purchases total: `$663.00` (Meta Ray-Ban `$490` + BLEU DE CHANEL `$173`)
- All-in savings target: `$3,906.25` (confirmed `$2,174.25` + planned trip spend `$1,069` + planned purchases `$663`)
- Kraken hockey was fully removed from the plan on 2026-08-02 and is no longer part of the budget or the automation watch.
