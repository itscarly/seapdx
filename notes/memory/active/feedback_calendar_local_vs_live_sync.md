---
name: feedback-calendar-local-vs-live-sync
description: "npm run sync:calendar only writes local export files, never the live Google Calendar API -- live calendar drift must be fixed by hand"
metadata:
  node_type: memory
  type: feedback
  originSessionId: session-39-calendar-resync
---

`npm run sync:calendar` (`scripts/sync-calendar-exports.js`) only regenerates local `data/google-calendar-events-nov1-9-2026.json` and `.csv`. It has no code path that calls the Google Calendar API. Assuming this script keeps the live "Seattle & Portland 2026" calendar in sync is wrong.

**Why:** Discovered 2026-08-06 (session 39) when the live calendar was found to be months out of date -- an entirely different Nov 6-9 itinerary version (Fuller's Coffee Shop, Portland Japanese Garden, Tasty n Alder, Momiji, a stale Courtyard by Marriott Portland booking record, etc.) despite `npm run sync:calendar` having been run repeatedly and reporting success. The script's "success" only ever meant the local export files were current.

**How to apply:** Whenever `trip-data.js` changes and the user wants the live calendar to reflect it, do not stop at `npm run sync:calendar`. Regenerate the local export first, then manually resync the live calendar via the Google Calendar MCP tools: `list_events` to find the stale date-range events, `delete_event` on each, then `create_event` for every event in the regenerated local export. Every call must be scoped to `calendarId: b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com` with `notificationLevel: "NONE"` -- never touch the personal calendar (`limcarl83@gmail.com`). The `create_event` tool's fields are `startTime`/`endTime` (ISO strings) plus a separate `timeZone` field, not nested `start`/`end` objects -- check the tool schema via ToolSearch before batch-calling it, since a wrong field name fails silently per-call rather than up front.

Also watch for `trip-data.js` itinerary items with a non-clock-time `time` field (e.g. `"TBD"`) or times that are internally inconsistent (a "boarding" event scheduled after its own "departure" event) -- these parse into invalid or overlapping calendar timestamps (`NaN`, end-before-start) without any error from `npm run validate`. Always use a real `H:MM AM/PM` value even for unconfirmed times, and put the uncertainty in the `notes` field instead.

[[project_current_state]]
