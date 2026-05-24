# Decisions

## Active decisions

### Notes live in `notes/`

- Status: active
- Why: keeps Obsidian focused while letting Codex and Claude work in the repo normally

### Notes are updated after meaningful completed work

- Status: active
- Why: prevents project context from drifting between sessions

### `data/trip-data.js` is the itinerary source of truth

- Status: active
- Why: the site, budget, trip assumptions, and route logic all depend on one central data file

### Airfare intelligence lives outside `data/trip-data.js`

- Status: active
- Why: the airfare tracker is now a PAL Award Tax Monitor (Mabuhay Miles redemptions). It has its own watch schema in `data/airfare-watch.json` with per-route tax history. No generated report or airline-direct verification rules — the dashboard reads the JSON directly.

### Hotel intelligence lives outside `data/trip-data.js`

- Status: active
- Why: hotel monitoring has its own report JSON, confirmed reservation details, watchlist, and rebooking logic that should not be tangled into itinerary data.

### PAL award taxes are the airfare metric, not cash fares

- Status: active
- Why: user is redeeming Mabuhay Miles for Business Class flights, not buying cash fares. The relevant number is the government/carrier tax paid in cash. Any tax drop on either route = better value per mile.

### Documentation cleanup should be conservative

- Status: active
- Why: stale notes should be rewritten or archived carefully, not deleted blindly

### Netlify is the active public host

- Status: active
- Why: the repo is static-only, Netlify already serves the live site, and GitHub Actions are better used here for validation and monitoring than for a second public deploy path

### Shared agent memory should use active, archive, and permanent layers

- Status: active
- Why: prevents short-term task noise from polluting long-term project memory

## Archived decision handling

If a decision stops being true:

- move it to `notes/memory/archive/`
- keep a short replacement note in this file if the project still needs the history
