# Tasks

## Purpose

This is the active task summary for humans and agents.

It should stay shorter and cleaner than raw implementation scratch notes.

## Current active work

### Stable current state

- Main homepage redesign is complete.
- Executive all-in spend summary is live and should stay aligned with:
  - confirmed airfare `$1,256.83`
  - confirmed hotels `$871.98`
  - planned personal purchases for Ray-Ban Meta glasses and Valentino perfume
  - local activity-budget totals derived from the itinerary
- Shared-calendar-to-site alignment is in a good state for the current public route.
- The old airfare, hotel, and itinerary monitor stack is retired.
- The only remaining automation is the Kraken ticket watch.

### Next review window

- Recheck the itinerary, live calendar, hours, and Kraken availability in the next couple of weeks.
- If another sync pass happens, prioritize exact event-level Google Calendar links in stop data so homepage `View in Google Calendar` can jump to the specific event instead of the day view fallback.
- Confirm any older hotel bookings that still need manual cancellation or closure outside the repo.

## Task sync rule

After meaningful completed work: mark completed items, remove invalid tasks, move stale context to `notes/memory/archive/`.

## Related notes

- [[PROJECT_CONTEXT]]
- [[CHANGELOG]]
- [[KNOWN_ISSUES]]
- [[Project Log]]

## Ongoing follow-up

- Run `node scripts/collect-obsidian-memory.js` after meaningful sessions.
- Keep source-index trust and cadence text current if external tool layouts change.
