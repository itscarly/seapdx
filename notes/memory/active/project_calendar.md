---
name: Trip calendar details
description: Key facts about the Seattle & Portland 2026 Google Calendar for this project
type: project
originSessionId: 663c82bc-36e3-4f32-b309-75d0f88249ba
---
Calendar name: Seattle & Portland 2026
Calendar ID: b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com
Timezone: America/Los_Angeles

**Why:** All trip events must go to this calendar, not the primary calendar. Events added to the wrong calendar must be deleted and recreated.

**How to apply:** Always pass this calendarId explicitly in every create_event and update_event call. Never default to the primary calendar.

## Calendar state as of 2026-08-02 (118 itinerary events synced via `npm run sync:calendar`)

- **Color coding:** Transit/walk blocks (blue), hotel blocks (gray), food (orange), coffee (blue), sightseeing (purple), nightlife (red), optional fillers (lavender)
- **Event descriptions:** Include route numbers, stop names, walk times, costs, and Google Maps links for transit readability

## Trip dates & bases (current, verified 2026-08-02)

- Trip: Nov 1–9, 2026
- Seattle base: **The Boylston Hotel Capitol Hill** (conf [redacted], Nov 1–4). Reside Seattle Downtown and Palihotel Seattle were earlier candidates, both cancelled -- do not reintroduce them.
- Portland base: **Hotel Vance, a Tribute Portfolio Hotel** (conf [redacted], Nov 4–9). Courtyard by Marriott Portland City Center (550 SW Oak St) was the stale/cancelled option -- do not reintroduce it.
- Portland breakfast stops now route through Analog Coffee, Stumptown Coffee Roasters, and Hotel Vance itself depending on the day -- see `data/trip-data.js` itinerary for the current per-day breakfast plan, since Fuller's Coffee Shop (which was walking distance from Courtyard) no longer fits the Hotel Vance base.

## H Mart shopping stops

Historical note only -- these were tied to the earlier Reside Seattle Downtown base (600 Pine St) and are not part of the current itinerary anchored on Boylston.
