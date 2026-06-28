# Tasks

## Purpose

This is the active task summary for humans and agents.

It should stay shorter and cleaner than raw implementation scratch notes.

## Completed 2026-05-30 — shared calendar remediation

- Applied shared-calendar remediation for Nov 1-9 using only the group calendar.
- Removed known duplicate Portland route/return events.
- Replaced vague optional placeholders with fixed recommended stops.
- Synced active guidance away from Reside/104 Pine routing and back to Boylston-based Seattle routing.

## Current active work

### Executive spend and itinerary alignment

- Main homepage redesign is complete.
- Executive all-in spend summary is now part of the homepage and should stay aligned with:
  - confirmed airfare `$1,256.83`
  - confirmed hotels `$871.98`
  - planned personal purchases for Ray-Ban Meta glasses and Valentino perfume
  - local activity-budget totals derived from the itinerary

### Google Calendar detail audit and enrichment

- Shared-calendar-to-site alignment remains active for the public homepage.
- `data/trip-data.js` carries the newer live route changes plus richer stop-detail content for the inline detail panel.
- Calendar export drift is controlled by `scripts/sync-calendar-exports.js`, which rebuilds the JSON and CSV artifacts from the normalized source.

Follow-up:
- If another sync pass happens, prioritize exact event-level Google Calendar links in stop data so homepage "View in Google Calendar" can jump to the specific event instead of the day view fallback.

### Flight and booking truth

- Use Boylston for Seattle and Courtyard Portland for Portland in the executive cost summary.
- Use American Airlines confirmation `[redacted]` at `$716.40` as the paid source of truth for both the Nov 9 return and the Feb 27 later Chicago leg.

### Remaining automation

- Keep only the Kraken ticket watch in scope.
- Do not restore airfare, hotel, or itinerary monitor workflows.

## GitHub Secrets needed for email alerts

`RESEND_API_KEY`, `ALERT_EMAIL_TO`, `ALERT_FROM`

## Completed 2026-05-24 (session 14 — hotel watchlist overhaul)

- Rebuilt Seattle watchlist: removed 7 hotels (over budget or user-dropped), added citizenM ($580.56). 8 hotels remain.
- Rebuilt Portland watchlist: removed 5 hotels, added 8 new with full prices, updated 5 existing with prices. 16 hotels tracked, all priced.
- Synced `hotel-monitor-source.json` (dashboard data source) to match report — was 14/13 hotels, now 8/16.

## Completed 2026-05-24 (earlier sessions)

- Replaced all Seattle hotel booking URLs with correct direct booking links.
- Rebuilt layered hotel price scraper and dashboard. Unified white/light theme across all 3 HTML pages.
- Removed stale GitHub Pages deploy path, flight polling files, moodboard section, stale PNGs.
- Airfare tracker later moved back to a cash-fare watch with airline-direct verification rules.

## Task sync rule

After meaningful completed work: mark completed items, remove invalid tasks, move stale context to `notes/memory/archive/`.

## Related notes

- [[PROJECT_CONTEXT]]
- [[CHANGELOG]]
- [[KNOWN_ISSUES]]
- [[Project Log]]

## Completed: Unified Obsidian memory hub rollout (2026-05-28)

- Implemented reference-first memory collector and source indexes.
- Implemented daily session-start digest generation.
- Wired startup contract into AGENTS + project context + post-task checklist.
- Updated Home dashboard to surface digest, blockers, permanent rules, and recent decisions.

## Ongoing follow-up

- Run `node scripts/collect-obsidian-memory.js` after meaningful sessions.
- Keep source-index trust/cadence text current if external tool layouts change.

## Completed: freshness guardrail added (2026-05-28)

- Added stale-note dashboard query and maintenance hook so old context is visible and reviewable each session.

## 2026-05-30 itinerary overhaul
- Updated Seattle/Portland itinerary dates to Nov 1-9 with hour-by-hour activity, walk/transit, meals, and rest blocks.
- Seattle base set to The Boylston Hotel Capitol Hill; Portland starts Nov 5 after Amtrak Cascades 517 (12:10 PM to 3:35 PM).
- Added Google Calendar import file: data/google-calendar-import-nov1-9-2026.csv.
- Rebalanced budget/day totals to match new detailed schedule (projected total: $888).
