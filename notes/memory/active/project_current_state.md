---
name: project-current-state
description: "Current verified state of SeaPdx as of 2026-10-03 — local validation reports $2,285.45 against the $3,050 cap; 121 calendar events are exported. See the top block; everything after the --- divider is historical."
metadata:
  node_type: memory
  type: project
  originSessionId: session-40-nov6-9-reconciliation
---

**Historical context through 2026-09-26:** the earlier notes below record prior itinerary, image, route-audit, and calendar work. The current budget figure is above; revalidate after future trip-data changes.

- **Budget revalidated 2026-10-03** — `npm run validate` passed at `$2,285.45` against the `$3,050` cap/ceiling (`$764.55` remaining). It regenerated the local calendar JSON/CSV exports with 121 events; live calendar state was not checked in this session.

- **Calendar reconciliation completed 2026-09-26** — `npm run validate` passed and regenerated 121 itinerary events. The live `Seattle & Portland 2026` calendar now matches all 121 export events on title, time, location, and description; 119 existing records were patched in place and two missing Day 8 records were added. Paid Philippine Airlines PR133 ORD→MNL (booking [redacted], ticket [redacted], Mar 1-3 2027, PHP 24,281, Business Class seat 02A) was added to the same target calendar. The personal calendar `[redacted]` was read for verification only and was not written.

- **Sleep-ceiling rule now in effect for all days** — Day 1 and Day 2 sleep blocks (previously single items starting 8:00 PM and 6:50 PM respectively, running straight through to next-day wake) split into "Evening wind-down" + "Sleep," with Sleep never starting before 10:00 PM. Day 3's sleep block (10:15 PM) was already compliant. Days 4-9 still need this applied when their rich-stop rebuild happens. See [[feedback_sleep_ceiling]].
- **Day 2 per-stop images**: 15 of 17 stops now have individually-sourced, subject-verified, recent (2022-2024 where available) photos from Wikimedia Commons or Pike Place Market's own vendor directory, replacing a single generic reused photo. Totem Smokehouse and the Pike Place Market "swings" (Park Promenade/Overlook Walk) have no freely-licensed photo available anywhere searched (Commons, official vendor page, Google Images) — both still use the generic `pike-place-market.jpg` fallback, disclosed rather than silently left. See [[feedback_per_stop_image_sourcing]].
- **Day 2/3 field-completeness audit clean** — every real stop (activity/meal/food/shopping/coffee type) now has `route`/`mapFrom`/`mapTo` and `detailText`; 11 stops that were missing map routes were fixed (Best Buy Northgate, Sky View Observatory, Sky View Cafe, Ferry to Bainbridge, Harbour Public House, Blackbird Coffee, Return ferry, Hart and the Hunter, Saint John's, Salt & Straw, Menya Musashi).
- **Projected total was $2,909.91 on 2026-08-15** against the unchanged $3,050 cap/ceiling ($140.09 remaining) — up from the session-46 figure below due to Day 2 rebuild costs (Totem Smokehouse souvenir budget raised to $60, H Mart cap raised to $30, new Day 2 stops added). Superseded by the 2026-10-03 validation above.
- Live "Seattle & Portland 2026" calendar fully resynced through Day 3 (Days 2 and 3 rebuilt with the rich-stop schema and rebalanced 50-event calendar sync; sleep-block split applied on the live calendar too).

---

**SUPERSEDED (2026-08-14, session 46): everything below this line predates the Palihotel swap and the Korean Air → Philippine Airlines swap.** Current verified state:
- **Seattle hotel is now Palihotel Seattle** (107 Pine St, 98101, 4 nights, $662.00) — the Boylston Hotel Capitol Hill claim below is stale; do not reintroduce Boylston.
- **Portland hotel is still Hotel Vance, a Tribute Portfolio Hotel** (conf [redacted]) — this one below is still correct.
- **Chicago layover hotel: Hotel Blake, an Ascend Collection Hotel** (6 nights, $787.38) — not mentioned below, added since.
- **Return-to-Manila airfare is now Philippine Airlines PR133 direct** (booking [redacted], ticket [redacted], paid and locked at PHP 24,281, 67,000 miles) — the Korean Air ORD→ICN→MNL two-leg entry below is stale; do not reintroduce Korean Air for this leg.
- **Confirmed USD airfare total is now $1,256.83** (Asiana/Korean Air $540.43 + AA $716.40). The paid PAL return is intentionally tracked in Philippine pesos as PHP 24,281 and is not converted into the USD all-in target.
- **Full visual overhaul shipped** (commit `2735eeb`) — DESIGN.md's flat "One Lift Rule" system below is also stale; DESIGN.md §4-5 (raised-card 3D elevation) is now authoritative. See `~/.claude/projects/-Users-carly/memory/codexproject_session_2026_08_14_overhaul.md`.
- Day 1 evening now includes a Target/H Mart/Truly Hard Seltzer run (walking distance from Palihotel); Day 3 includes a Palihotel happy hour stop. Payment-acceptance fields across the itinerary were verified via research subagent, not assumed.

Full detail in `notes/CHANGELOG.md` (2026-08-14 session 46 entry) — that is the source of truth.

---

Seattle hotel is finalized: **The Boylston Hotel Capitol Hill** (conf [redacted]) is the active booking. Portland hotel is finalized: **Hotel Vance, a Tribute Portfolio Hotel** (conf [redacted]) is the active booking.

**Why:** The Aug 2, 2026 comprehensive audit found the prior memory note had Portland's hotel roles backwards (it said Courtyard was active and Vance should be cancelled). Hotel Vance is confirmed correct across trip-data.js, the dashboard, and the hotel-monitor JSON files.

**How to apply:** Seattle base is Boylston (Capitol Hill). Portland base is Hotel Vance. Do not reintroduce Courtyard by Marriott Portland City Center anywhere in the itinerary, dashboard, or calendar exports — it was the stale booking, not the active one.

## Verified state as of 2026-08-07 (session 40)

- Nov 6-9 costs reconciled against real receipts from `Expenses - Sheet38.csv`. Projected total is now **$1,296.35**, $46.35 over the $1,250 cap but under the $1,300 ceiling — this is real spend (tattoo + Day 7 dinner/bar), not a planning error. `npm run validate` will fail on the cap check until the user either raises it or trims spend elsewhere; the category-total and day-total math checks pass cleanly.
- Correction (2026-08-07, same session): initial reconciliation double-counted Pretty Ugly Burger dinner ($125.50) and Novel Book Bar ($57.50) — the CSV's aggregate line ("$63", "$29") was the total, not an addition on top of the itemized cocktails/tip. Corrected to Pretty Ugly $63 and Novel Book Bar $29; live calendar event descriptions updated to match. When reading itemized CSV rows with a leading aggregate amount followed by itemized sub-charges that sum to roughly that amount, treat the aggregate as the total, not a separate line item.
- Day 8 was restructured: **Multnomah Falls / Vista House and the Columbia Gorge Express day trip were removed entirely** — do not reintroduce them. Day 8 is now a light rest day (brunch-time Cartopia food carts only, $50) because the user gets a tattoo on Day 7 and wants it to rest/wrap rather than doing a hiking day the next day.
- Day 7 was rebuilt around the tattoo: coffee → tattoo appointment (Shonen Tattoo, $177 incl. tip) → Portland Saturday Market (lunch + browse, $50) → Sephora Portland Downtown perfume browse (Bleu de Chanel, tracked as a personal purchase, NOT in the trip budget) → Pretty Ugly Burger dinner ($63) → Novel Book Bar ($29).
- Day 6 Cannon Beach POINT NorthWest bus times are now **confirmed**, not placeholder: depart PDX Union Station 8:28 AM → arrive Astoria 11:46 AM; return depart Astoria 5:55 PM → arrive PDX 9:00 PM. Fare $40 confirmed round trip. This resolves the "verify exact return time" watch item — source was the user's CSV/screenshot, not a live re-verification with the carrier.
- Nov 9 return flight times corrected to match the confirmed AA booking (previously stale in `trip-data.js`): PDX→DFW (AA 2496) now departs 2:34 PM / arrives 8:29 PM (was 1:47 PM/7:34 PM); DFW→CRP (AA 5273) now departs 10:30 PM / arrives 11:58 PM (was 9:10 PM/10:45 PM). Both flight events were added to the live Google Calendar for the first time this session — previously flights were never synced to the calendar at all.
- "Sea'd In Capitol Hill dinner" remains deleted from the itinerary entirely — do not reintroduce it.
- `npm run sync:calendar` only regenerates local `data/google-calendar-events-nov1-9-2026.json`/`.csv` — it never calls the Google Calendar API. If the live calendar and the local export ever drift again, the live calendar must be updated by hand via the Google Calendar MCP tools (delete stale events, recreate from the local export), scoped to `calendarId: b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com` with `notificationLevel: "NONE"` — never the personal calendar `[redacted]`.
- `data/trip-data.js` has a self-executing IIFE near the bottom of the file that recomputes `day.dayTotal` and `budget.projectedTotal` from the actual per-stop `cost` fields on every load, and auto-fills `Contingency` as the remainder against non-contingency category totals (clamped at 0). Hand-set `dayTotal`/`projectedTotal` values are cosmetic only — the real source of truth is always the sum of stop `cost` fields. Keep category amounts (excluding Contingency) at or below the real itinerary total or Contingency will silently clamp to $0.

## Added return-to-Manila airfare (2026-08-08; superseded 2026-09-26)

- The earlier Korean Air ORD→ICN→MNL item was replaced by Philippine Airlines PR133 direct.
- Current receipt truth: **PAL PR133 ORD→MNL, March 1-3, 2027**, booking [redacted], ticket [redacted], Business Class seat 02A, paid total **PHP 24,281**.

## Budget restructure as of 2026-08-07 (later same session)

- User found the old presentation confusing (planned local spend $1,296.35 shown separately from personal-item purchases $663, with two different cap numbers). Restructured into one combined number: `budget.projectedTotal` now = itinerary stop costs + `tripCosts.plannedPurchases` (Meta Ray-Ban $490 + Bleu de Chanel perfume $173), computed by the IIFE in `trip-data.js`. Do not add `getPlannedPersonalPurchaseTotal()` on top of `projectedTotal` anywhere in `app.js` — that would double-count; it stays a plain function only for itemizing the Shopping card breakdown.
- "Coffee beans" and "Souvenirs" categories were merged with personal purchases into one "Shopping" category (amount $860 = $60 coffee + $137 souvenirs/keepsakes + $663 personal purchases). Tattoo stayed its own separate category ($177) — it was not part of this merge.
- New cap = new absolute ceiling = **$2,500** (was $1,250 target / $1,300 ceiling), explicitly set equal by the user, covers everything except confirmed airfare/hotels. Projected total is now $1,959.35, $540.65 under the cap — no more over-cap flag needed, `overCeilingNote` was removed from `budget`.
- `scripts/audit-budget.js` was updated to compare `dayTotal + plannedPurchasesTotal` against `projectedTotal` (previously just `dayTotal`), and the now-defunct standalone "Coffee beans" $60-cap check was removed since coffee beans no longer have their own category.
- `dashboards/js/app.js`: `getPlannedAdditionalTotal()` simplified to just return `projectedTotal`; `renderTripCostSummary()`'s `allInTarget` no longer adds `plannedPersonal` separately; `buildTripCostBreakdown()` has one merged "Shopping" card (itemizes coffee+souvenirs as one line plus each planned purchase) instead of separate "Shopping and keepsakes" + "Personal item purchases" cards; hero/budget heading copy reworded to "Still to plan/spend" language instead of "Local trip-spend snapshot".

## Verified state as of 2026-08-02

### Confirmed accommodations — $917.42 total

- **Seattle — The Boylston Hotel Capitol Hill** — $504.46 (conf [redacted]), 3 nights, Nov 1-4
- **Portland — Hotel Vance, a Tribute Portfolio Hotel** — $412.96 (conf [redacted]), 5 nights, Nov 4-9

### Confirmed airfare — $1,256.83 total

- Asiana/Korean Air arrival (Manila → Seattle via Incheon), Nov 1, 2026 — $540.43, confirmation [redacted]. The confirmed reissue now uses OZ702 MNL-ICN plus Korean Air KE047 ICN-SEA; the old Sunday OZ272 schedule warning is resolved. Recheck [redacted] in Asiana Manage My Trip and confirm KE047 before departure because public schedule pages cannot verify private bookings.
- American Airlines (Portland → Corpus Christi Nov 9, plus Corpus Christi → Chicago Feb 27, 2027) — $716.40, confirmation [redacted].

### Budget snapshot (local Seattle + Portland spend, separate from confirmed airfare/hotels)

- Projected total: **$1,069** against a $1,250 target / $1,300 absolute ceiling ($181 remaining).
- Categories: Transportation $149, Food $572, Cocktails and social $121, Entrance fees $75, Coffee beans $60, Souvenirs $80, Contingency $12.
- Full comprehensive price audit completed 2026-08-02: corrected all Pike Place snacks, several meals, coffee-bean stops, and cocktail bars that had been underpriced (some by 4-8x) against real 2026 menu prices. See `notes/Project Log.md` for the itemized before/after list.
- Cannon Beach (Day 6) and Multnomah Falls (Day 8) day-trip bus fares are now explicitly broken out in the dashboard's Transportation category instead of being silently dropped or double-counted.

### Itinerary structure

- 9 days total: Days 1-4 Seattle, Days 5-9 Portland (Day 5 is the Amtrak transition day, Day 9 is the flight-home day).
- Day 6: Cannon Beach / Haystack Rock day trip via POINT NorthWest bus (Amtrak Thruway partner).
- Day 7: Coffee, tattoo appointment, Portland Saturday Market, Sephora, Pretty Ugly Burger dinner, Novel Book Bar.
- Day 8: Light rest day (tattoo aftercare) with brunch-time Cartopia food carts. Multnomah Falls / Vista House removed — see session 40 note above.
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
[[feedback_sleep_ceiling]]
[[feedback_per_stop_image_sourcing]]
[[user_profile]]
