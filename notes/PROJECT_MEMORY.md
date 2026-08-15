# Project Memory — Seattle + Portland Itinerary

## Source of Truth

**`data/trip-data.js`** is the authoritative single source for the Nov 1-9, 2026 itinerary and the current trip-cost model.

- All downstream artifacts (calendar files, generated site, docs) derive from this file.
- Budget math is verified via `npm run audit:budget`.
- Named venues, times, costs, neighborhoods, and activity types all live here.
- Do not maintain parallel itinerary versions in other files.

## Data Flow

```
data/trip-data.js (source of truth)
  ↓
dashboards/html/index.html loads trip-data.js directly
  ↓
dashboards/js/app.js renders to DOM
  ↓
User sees interactive itinerary (local or the current GitHub-backed public copy)

Google Calendar export files (derived):
  - data/google-calendar-events-nov1-9-2026.json (for MCP import)
  - data/google-calendar-import-nov1-9-2026.csv (Google Calendar CSV format)
  
Calendar files must match trip-data.js exactly:
  - Same event names, times, costs, locations
  - Same 113 exported events in the current synced itinerary
  - Same stable tags (SEAPDX-2026-day-X-XX) for idempotent sync
```

## Key Reconciliation Rules

1. **When adding/changing an itinerary item:**
   - Edit `data/trip-data.js` first
   - Regenerate calendar export files from the updated source
   - Do not edit calendar files directly and expect them to sync backward

2. **When verifying completeness:**
   - Check trip-data.js for the full live Nov 1-9 route
   - Verify each day block still includes the real wake, meals, transit, activities, rest, and return structure
   - Run `npm run validate` (all checks pass)

3. **Calendar event structure (required fields):**
   - tag: `SEAPDX-2026-day-X-XX` (stable, for idempotent updates)
   - title: descriptive text
   - start: ISO 8601 timestamp
   - end: ISO 8601 timestamp (overnight sleeps must end next calendar day)
   - location: city/neighborhood or venue name
   - description: trip context + cost + block type
   - cost: USD amount
   - duration: human-readable (min/hr)
   - block type: meal, transit, activity, walk, rest

## Known Data Gaps / Conventions

- **Zero-cost activities:** Are typed `"walk"` for outdoor exploration blocks, not `"activity"` (e.g., "Fremont walking loop", "Neighborhood orientation walk")
- **Overnight sleep blocks:** Must have end dates on the next calendar day (e.g., start 2026-11-01 21:25, end 2026-11-02 07:55), not same-day end times. Sleep must never start before 10:00 PM on any day -- split the evening into a wind-down block plus a separate "Sleep" block starting no earlier than 10:00 PM (see `notes/memory/active/feedback_sleep_ceiling.md`).
- **Palihotel Seattle base (updated 2026-08-14, session 46):** All Nov 1-4 events route through Palihotel Seattle (107 Pine St), not Boylston, Reside, or other Seattle hotels -- Boylston was the active booking through session 45 but is now stale.
- **Hotel Vance Portland base:** All Nov 5-9 events route through Hotel Vance, a Tribute Portfolio Hotel. Courtyard by Marriott Portland City Center was the stale/cancelled option -- do not reintroduce it.
- **Calendar links:** If a stop does not yet store an exact event URL, the homepage uses a day-level Google Calendar fallback link.

## Budget -- HISTORICAL SNAPSHOT (as of 2026-08-02 comprehensive price audit, SUPERSEDED)

See `notes/memory/active/project_current_state.md` for the current figures (as of 2026-08-15, session 49: projected total $2,909.91 against a $3,050 cap/ceiling, confirmed airfare $2,247.84, confirmed hotels Palihotel Seattle $662.00 + Hotel Vance $412.96 + Hotel Blake $787.38). Everything below this line predates the Palihotel swap, the Philippine Airlines swap, and the $2,500 -> $3,050 cap increase.

- **Projected local activity spend:** $1,069 USD
- **Budget cap:** $1,250 USD
- **Absolute ceiling:** $1,300 USD
- **Remaining headroom:** $181 USD
- **Coffee bean max:** $60 USD (two bags total: one Seattle, one Portland)

**Confirmed airfare total:** $1,256.83.
**Confirmed hotel total:** $917.42 (Boylston $504.46 + Hotel Vance $412.96).
**Planned personal purchases:** Meta Ray-Ban glasses `$490`, BLEU DE CHANEL `$173`.
**Kraken hockey removed:** fully removed from the plan on 2026-08-02; no longer a budget line or a watch item.
**Transportation breakout:** Seattle local transit, Bainbridge ferry, Amtrak plus business-class bid, Cannon Beach round-trip bus, Multnomah Falls round-trip bus, and Portland local transit are now shown as separate lines in the board. The Transportation category total was corrected from a stale $95 to the real itemized $149.
**Activity budget stays separate** from the all-in trip-cost summary.

## Validation Commands

```bash
npm run audit:budget          # Verify budget math
npm run validate              # Syntax, budget, and calendar export checks
npm run serve                 # Local preview on http://localhost:4173
npm run sync:calendar         # Rebuild calendar exports from trip-data.js
```

## Key Files

| File | Purpose |
|------|---------|
| `data/trip-data.js` | Authoritative itinerary, budget, flights, guides |
| `data/google-calendar-events-nov1-9-2026.json` | MCP calendar import format |
| `data/google-calendar-import-nov1-9-2026.csv` | Google Calendar CSV import format |
| `dashboards/html/index.html` | Main itinerary UI shell |
| `dashboards/js/app.js` | Renders trip-data.js to DOM |
| `scripts/audit-budget.js` | Budget validation |
| `netlify.toml` | Static routing config kept from earlier hosting setup |

## Deployment

- **Local:** `npm run serve` → http://localhost:4173
- **Production:** GitHub Pages updates from pushed repo state
- **No build step required** — all files are static

## Important Decisions

- **Google Calendar:** Uses group calendar `b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com`, never the primary calendar
- **Data structure:** Flat list of days, each with ordered stop items; no nested sections in the source
- **Mobile-first design:** Dashboard is responsive; no app download needed
- **Verification-first:** All itinerary changes must be validated before claiming done
- **Automation scope:** the monthly baseline watch remains active for itinerary prices, menus, schedules, and day-trip transit fares (Kraken removed 2026-08-02)
