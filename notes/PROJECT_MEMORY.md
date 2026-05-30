# Project Memory — Seattle + Portland Itinerary

## Source of Truth

**`data/trip-data.js`** is the authoritative single source for the Nov 1-9, 2026 itinerary.

- All downstream artifacts (calendar files, generated site, docs) derive from this file.
- Budget math is verified via `npm run audit:budget` (always passes $888).
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
  - Same 90 events (10 per day × 9 days)
  - Same stable tags (SEAPDX-2026-day-X-XX) for idempotent sync
```

## Key Reconciliation Rules

1. **When adding/changing an itinerary item:**
   - Edit `data/trip-data.js` first
   - Regenerate calendar export files from the updated source
   - Do not edit calendar files directly and expect them to sync backward

2. **When verifying completeness:**
   - Check trip-data.js for all 90 activities (10 per day)
   - Verify each day block includes: wake, meals, transit, activities, rest, return
   - Run `npm run audit:budget` (must show $888)
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

- **Generic meal titles in calendar:** Some meals are typed "Dinner" or "Breakfast" in the calendar JSON/CSV but have specific restaurant names in trip-data.js (e.g., "Dinner" → "Dinner in Pearl District")
- **Zero-cost activities:** Are typed `"walk"` for outdoor exploration blocks, not `"activity"` (e.g., "Fremont walking loop", "Neighborhood orientation walk")
- **Overnight sleep blocks:** Must have end dates on the next calendar day (e.g., start 2026-11-01 21:25, end 2026-11-02 07:55), not same-day end times
- **Boylston Seattle base:** All Nov 1-5 events route through Boylston Hotel Capitol Hill, not Reside or other Seattle hotels
- **Courtyard Portland base:** All Nov 5-9 events route through Courtyard by Marriott Portland City Center, 550 SW Oak Street

## Budget

- **Projected total:** $888 USD
- **Budget cap:** $1,200 USD
- **Absolute ceiling:** $1,300 USD
- **Remaining headroom:** $312 USD
- **Coffee bean max:** $60 USD (two bags total: one Seattle, one Portland)

### Budget breakdown:
- Transportation: $95
- Food: $390
- Cocktails & social: $120
- Entrance fees: $60
- Coffee beans: $60
- Souvenirs: $95
- Contingency: $68

**Flights excluded from activity budget** (tracked separately). Airfare total: $1,286.84.

## Validation Commands

```bash
npm run audit:budget          # Verify budget math
npm run validate              # Full validation: syntax, budget, hotel tests, airfare tests
npm run serve                 # Local preview on http://localhost:4173
npm run monitor:airfare       # Check PAL airfare watch
npm run monitor:hotels        # Check hotel price watch
npm run monitor:itinerary     # Verify itinerary freshness
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
- **Production:** Netlify auto-deploys from GitHub on push to main
- **No build step required** — all files are static

## Important Decisions

- **Google Calendar:** Uses group calendar `b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com`, never the primary calendar
- **Data structure:** Flat list of days, each with ordered stop items; no nested sections in the source
- **Mobile-first design:** Dashboard is responsive; no app download needed
- **Verification-first:** All itinerary changes must be validated before claiming done
