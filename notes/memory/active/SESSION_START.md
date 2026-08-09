---
name: session-start
source: manual
last_verified: 2026-08-09T07:00:00.000Z
status: active
confidence: high
next_action: Read notes/Project Log.md (top entry) and notes/memory/active/project_current_state.md, then proceed with task work.
---

# Session Start

This file is the startup pointer for all new Claude/Codex sessions in this repo.

## Current state, 2026-08-09 (session 43)

Read `notes/Project Log.md` (session 43, at the top) and `notes/memory/active/project_current_state.md` first. Session 43 ran `/impeccable audit` + `polish` on the dashboard: added flight-leg "Departs"/"Arrives" labels, tokenized 3 off-token flight colors, removed the sitewide decorative grid-line background, and replaced the itinerary chip cards' colored left-border ("side-tab" pattern) with the existing category-colored timeline-ring marker. The day-by-day itinerary timeline's own left border was reviewed and kept (genuine rail+dot marker, not decorative) — that call is persisted in `.impeccable/config.json`. **Open for a future session:** ~30 remaining hardcoded-color (`design-system-color`) findings scattered across `dashboards/css/styles.css`, outside the flights/itinerary components touched this session — recommended as its own token-introduction pass. Session 42's dev-server fix and model-routing hard rule remain in effect (see below). Trip-content facts below are unchanged from session 41 (2026-08-08).

Key facts: Seattle base is The Boylston Hotel Capitol Hill; Portland base is Hotel Vance, a Tribute Portfolio Hotel (never Courtyard). "Sea'd In Capitol Hill dinner" has been deleted from the itinerary entirely.

**Budget:** restructured 2026-08-07/08. "Still to plan/spend" (local trip spend + Shopping + Tattoo, all one number) is **$1,959.35** against a **$2,500 cap / $2,500 ceiling** (raised from $1,250/$1,300, cap=ceiling per explicit user choice). "Coffee beans" and "Souvenirs" categories were merged with planned personal purchases into one "Shopping" category. Do not reintroduce separate "Personal item purchases" tracking — it's folded into `budget.projectedTotal` via the IIFE at the bottom of `trip-data.js`, which now also sums `tripCosts.plannedPurchases`.

**Airfare:** confirmed airfare total is **$1,915.23** (Asiana $540.43 + AA [redacted] $716.40 + Korean Air ORD-ICN-MNL $658.40, Mar 5-6 2027). The Korean Air booking's confirmation number is still "TBD" — update `trip-data.js` and the two live-calendar event descriptions once the user provides it.

**Live calendar:** ("Seattle & Portland 2026") fully resynced and matches `trip-data.js` for all of Nov 1-9, 2026 — but `npm run sync:calendar` only regenerates local export files, it never touches the live calendar API; any future drift must be fixed by hand via the Google Calendar MCP tools. The calendar also now holds later-dated connecting flights tied to this trip's airfare: Feb 27, 2027 (AA 3774, AA 3114) and Mar 5-6, 2027 (KE038, KE623) — see `notes/memory/active/project_calendar.md` for the full list. Add any new future flight leg from `trip-data.js`'s `flights.journeys` to both places.

## Startup sequence
1. Read `notes/Project Log.md` (top entry) and `notes/memory/active/project_current_state.md` for current state
2. Read relevant source index notes in [[sources/codex-memories]], [[sources/claude-home]], [[sources/vscode-context]] if deeper history is needed
3. Confirm open blockers in `notes/KNOWN_ISSUES.md` before making edits
