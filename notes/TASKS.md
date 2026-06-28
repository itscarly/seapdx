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

### Homepage redesign follow-up

- Main homepage redesign is now complete.
- Next cleanup item is data integrity, not layout:
  - reconcile `data/trip-data.js` day totals with `budget.projectedTotal`
  - reconcile the coffee-bean category amount with the stated $60 cap
  - rerun `npm run validate` once those budget decisions are made

### Google Calendar detail audit and enrichment

- Review the shared Nov 1-9 Google Calendar activity by activity.
- Remove duplicates and keep one canonical copy of each stop.
- Enrich each stop with menu links, cost, card/cash notes, what to order, what to skip, walk time, and continuity notes.
- Keep the shared calendar as the live source of truth and avoid creating a parallel planning version.

Status update:
- Portland Day 6-9 live shared-calendar enrichment is now complete in the group calendar, including richer popup descriptions and removal of remaining `SEAPDX-...` Portland titles.
- If more calendar work resumes, start by auditing Seattle for the same popup-quality standard instead of reopening the already-cleaned Portland blocks.

### ⚠️ Confirm Boylston extra night and reconcile Seattle hotel bookings

Active itinerary and shared Google Calendar now use **The Boylston Hotel Capitol Hill** as the Seattle base for Nov 1-5. The added Nov 4-5 night is still the only hotel-confirmation blocker.

Follow-up:
- Confirm Boylston added Nov 4-5 night.
- Reconcile or cancel any Seattle bookings not being kept once Boylston is confirmed.

### ⚠️ Cancel Hotel Vance (Portland) before Nov 3, 11:59 PM

Hotel Vance conf# [redacted], $628.46. Courtyard (conf# [redacted], $487.85) is the active Portland base.

### Seattle watchlist (4 hotels, transitScore > 90 only)

All hotels with transitScore ≤ 90 removed (session 16). Current watchlist: Boylston (99), Warwick (98), Hotel FIVE (100), Mayflower Park (100).

### PAL taxes

SFO→MNL $370.50 | ORD→MNL $375.50. Monitoring cadence active through Oct.

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
