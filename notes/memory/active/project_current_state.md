---
name: project-current-state
description: "Current verified state of codexproject as of 2026-08-06 — Boylston is active Seattle base, Hotel Vance is active Portland base, confirmed accommodations total $917.42, live Google Calendar fully resynced for all of Nov 1-9"
metadata:
  node_type: memory
  type: project
  originSessionId: session-39-calendar-resync
---

Seattle hotel is finalized: **The Boylston Hotel Capitol Hill** (conf [redacted]) is the active booking. Portland hotel is finalized: **Hotel Vance, a Tribute Portfolio Hotel** (conf [redacted]) is the active booking.

**Why:** The Aug 2, 2026 comprehensive audit found the prior memory note had Portland's hotel roles backwards (it said Courtyard was active and Vance should be cancelled). Hotel Vance is confirmed correct across trip-data.js, the dashboard, and the hotel-monitor JSON files.

**How to apply:** Seattle base is Boylston (Capitol Hill). Portland base is Hotel Vance. Do not reintroduce Courtyard by Marriott Portland City Center anywhere in the itinerary, dashboard, or calendar exports — it was the stale booking, not the active one.

## Verified state as of 2026-08-06 (session 39)

- Local Nov 1-5 costs reconciled against real receipts; projected local spend is now **$1,049.35** (was $1,069) against the $1,250 cap / $1,300 ceiling.
- "Sea'd In Capitol Hill dinner" was **deleted from the itinerary entirely**, not just flagged as unconfirmed — do not reintroduce it.
- `npm run sync:calendar` only regenerates local `data/google-calendar-events-nov1-9-2026.json`/`.csv` — it never calls the Google Calendar API. If the live calendar and the local export ever drift again, the live calendar must be updated by hand via the Google Calendar MCP tools (delete stale events, recreate from the local export), scoped to `calendarId: b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com` with `notificationLevel: "NONE"` — never the personal calendar `limcarl83@gmail.com`.
- The live Google Calendar was fully resynced for all of Nov 1-9 (117 events) as of this session and matches `trip-data.js` exactly. A prior Nov 6-9 calendar version referencing Fuller's Coffee Shop, Portland Japanese Garden, Tasty n Alder, Powell's, Heart Coffee Roasters, Momiji, Tope, MadeHere PDX, and Courtyard by Marriott Portland (booking confirmation [redacted], now cancelled) was fully replaced.
- `data/trip-data.js`'s Cannon Beach return-bus item previously had `time: "TBD"`, which is unparseable by the calendar sync script and produces invalid timestamps. It now has a concrete placeholder time (4:35 PM depart) with a "VERIFY BEFORE BOOKING" note preserved. Any future itinerary edit that sets a `time` field to a non-clock-time placeholder (e.g. "TBD", a text range) will silently corrupt the calendar export — always use a real `H:MM AM/PM` value even for unconfirmed times, and flag uncertainty in `notes` instead.

## Verified state as of 2026-08-02

### Confirmed accommodations — $917.42 total

- **Seattle — The Boylston Hotel Capitol Hill** — $504.46 (conf [redacted]), 3 nights, Nov 1-4
- **Portland — Hotel Vance, a Tribute Portfolio Hotel** — $412.96 (conf [redacted]), 5 nights, Nov 4-9

### Confirmed airfare — $1,256.83 total

- Asiana arrival (Manila → Seattle via Incheon), Nov 1, 2026 — $540.43, confirmation [redacted]. Note: Asiana's current published route schedule lists Seattle-Incheon OZ271/272 as Mon/Tue/Wed/Fri/Sat, not Sunday — reconfirm the Nov 1 date directly with Asiana before travel.
- American Airlines (Portland → Corpus Christi Nov 9, plus Corpus Christi → Chicago Feb 27, 2027) — $716.40, confirmation [redacted].

### Budget snapshot (local Seattle + Portland spend, separate from confirmed airfare/hotels)

- Projected total: **$1,069** against a $1,250 target / $1,300 absolute ceiling ($181 remaining).
- Categories: Transportation $149, Food $572, Cocktails and social $121, Entrance fees $75, Coffee beans $60, Souvenirs $80, Contingency $12.
- Full comprehensive price audit completed 2026-08-02: corrected all Pike Place snacks, several meals, coffee-bean stops, and cocktail bars that had been underpriced (some by 4-8x) against real 2026 menu prices. See `notes/Project Log.md` for the itemized before/after list.
- Cannon Beach (Day 6) and Multnomah Falls (Day 8) day-trip bus fares are now explicitly broken out in the dashboard's Transportation category instead of being silently dropped or double-counted.

### Itinerary structure

- 9 days total: Days 1-4 Seattle, Days 5-9 Portland (Day 5 is the Amtrak transition day, Day 9 is the flight-home day).
- Day 6: Cannon Beach / Haystack Rock day trip via POINT NorthWest bus (Amtrak Thruway partner).
- Day 8: Multnomah Falls / Vista House day trip via Columbia Gorge Express, plus Cartopia food carts in the evening.
- Kraken hockey tickets were fully removed from the plan (Aug 2, 2026) — no longer a live watch item. If `scripts/session-status.js` or any other file still references a Kraken watch, that is stale and should be removed.

### PAL Award Tax Monitor

- SFO→MNL: $370.50 | ORD→MNL: $375.50 (verified 2026-05-24, not re-verified since)

### Homepage structure (session 38, 2026-08-02)

- The "Trip overview" section is gone. Executive Summary and Activity Budget are merged into one "Trip cost" section, rendered as a single 4-column card grid (`.budget-panel--unified` in `dashboards/css/styles.css`). Do not reintroduce a separate high-signal-numbers summary block — it was deleted because it duplicated the hero card's all-in target.
- Six sections default-collapsed behind a visible `<details>` toggle: Trip cost, Day-by-day route, Booked flights, Planning guides, Maps and transit, Utility pages. Anchor links auto-expand their target via `initCollapsibleAnchors()` in `app.js`.
- Guides tabs are now: Reservations, Day trip guides, Happy hour, Coffee + tea, Photo ops, Rainy day + packing. "Social + Dating" was removed entirely. Do not reintroduce it unless the user explicitly asks.
- Reservations tab content is thin by design, not a bug: only Poquitos Capitol Hill is an actual bookable reservation; the other three entries are logistics notes.

[[feedback_confirm_hotel_before_price]]
[[feedback_airfare_award_vs_cash]]
[[feedback_sync_both_hotel_files]]
[[feedback_calendar_local_vs_live_sync]]
[[user_profile]]
