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

### Confirmed trip-cost data lives inside `data/trip-data.js`

- Status: active
- Why: the homepage now needs one canonical source for itinerary content, confirmed bookings, planned purchases, and executive spend totals.

### Old monitor workflows stay deleted unless the user asks for a new system

- Status: active
- Why: the user explicitly retired the airfare/hotel/itinerary monitor stack, so public pages, scheduled workflows, and active commands should not imply those systems still exist.

### Documentation cleanup should be conservative

- Status: active
- Why: stale notes should be rewritten or archived carefully, not deleted blindly

### Netlify is the active public host

- Status: active
- Why: the repo is static-only, Netlify already serves the live site, and GitHub Actions are better used here for validation and monitoring than for a second public deploy path

### The homepage is public-facing, not an editing workspace

- Status: active
- Why: the main trip page should read as a polished itinerary command center, so public-facing planning content stays on the homepage while editing and utility-heavy workflows stay elsewhere

### Logistics-heavy content lives in a separate hub page

- Status: active
- Why: flights, verification links, automation references, and future bookings are useful, but they add too much noise when they share equal weight with the public itinerary experience

### Shared agent memory should use active, archive, and permanent layers

- Status: active
- Why: prevents short-term task noise from polluting long-term project memory

## Archived decision handling

If a decision stops being true:

- move it to `notes/memory/archive/`
- keep a short replacement note in this file if the project still needs the history
