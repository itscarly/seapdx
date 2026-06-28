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
User sees interactive itinerary (local or Netlify)

Google Calendar export files (derived):
  - data/google-calendar-events-nov1-9-2026.json (for MCP import)
  - data/google-calendar-import-nov1-9-2026.csv (Google Calendar CSV format)
  
Calendar files must match trip-data.js exactly:
  - Same event names, times, costs, locations
  - Same 102 exported events in the current synced itinerary
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
- **Overnight sleep blocks:** Must have end dates on the next calendar day (e.g., start 2026-11-01 21:25, end 2026-11-02 07:55), not same-day end times
- **Boylston Seattle base:** All Nov 1-5 events route through Boylston Hotel Capitol Hill, not Reside or other Seattle hotels
- **Courtyard Portland base:** All Nov 5-9 events route through Courtyard by Marriott Portland City Center, 550 SW Oak Street
- **Calendar links:** If a stop does not yet store an exact event URL, the homepage uses a day-level Google Calendar fallback link.

## Budget

- **Projected local activity spend:** $1,072 USD
- **Budget cap:** $1,200 USD
- **Absolute ceiling:** $1,300 USD
- **Remaining headroom:** $128 USD
- **Coffee bean max:** $60 USD (two bags total: one Seattle, one Portland)

**Confirmed airfare total:** $1,256.83.
**Confirmed hotel total:** $871.98.
**Planned personal purchases:** Meta Ray-Ban glasses `$409`, BLEU DE CHANEL `$173`.
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
| `netlify.toml` | Deploys to Netlify |

## Deployment

- **Local:** `npm run serve` → http://localhost:4173
- **Production:** Netlify auto-deploys from GitHub on push to `main`
- **No build step required** — all files are static

## Important Decisions

- **Google Calendar:** Uses group calendar `b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com`, never the primary calendar
- **Data structure:** Flat list of days, each with ordered stop items; no nested sections in the source
- **Mobile-first design:** Dashboard is responsive; no app download needed
- **Verification-first:** All itinerary changes must be validated before claiming done
- **Automation scope:** only the Kraken ticket watch remains active
