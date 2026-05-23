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
- Why: airfare monitoring has its own watch schema, airline-direct verification rules, ranking logic, and generated report flow

### Hotel intelligence lives outside `data/trip-data.js`

- Status: active
- Why: hotel monitoring has a separate source dataset, generated report, and rebooking workflow that should not be tangled into itinerary data

### Airfare booking calls require airline-direct proof

- Status: active
- Why: discovery fares are useful leads, but they are not trustworthy enough for a real booking recommendation without checkout verification

### Documentation cleanup should be conservative

- Status: active
- Why: stale notes should be rewritten or archived carefully, not deleted blindly

### Shared agent memory should use active, archive, and permanent layers

- Status: active
- Why: prevents short-term task noise from polluting long-term project memory

## Archived decision handling

If a decision stops being true:

- move it to `notes/memory/archive/`
- keep a short replacement note in this file if the project still needs the history
