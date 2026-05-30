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
- Why: airfare monitoring needs its own JSON, report output, and source-verification workflow. `data/airfare-watch.json` now holds airline-direct booking rules, discovery signals, and report-ready observations without mixing that work into the Seattle/Portland itinerary file.

### Hotel intelligence lives outside `data/trip-data.js`

- Status: active
- Why: hotel monitoring has its own report JSON, confirmed reservation details, watchlist, and rebooking logic that should not be tangled into itinerary data.

### Airfare recommendations require airline-direct verification

- Status: active
- Why: Google Flights, Skyscanner, and KAYAK are useful for discovery, but they are not booking proof. The repo should only make a `BOOK` call after an airline-owned checkout confirms the actual total, baggage treatment, and protected routing.

### Discovery-only fares stay visible, but they are never purchase advice

- Status: active
- Why: the watch still needs market context even when checkout access is blocked. Keep those signals in the data, but mark them honestly and do not treat them as bookable.

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
