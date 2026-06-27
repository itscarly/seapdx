# Active Tasks

## Latest verified state

- [x] June 27, 2026: Seattle + Portland itinerary rebuild completed and finalized.
- [x] June 27, 2026: Dashboard cache-bust updated and deployed.
- [x] June 27, 2026: Project log updated with the final session handoff.
- [x] June 27, 2026: Git cleanup and prevention rules are in place.
- [x] June 27, 2026: Old itinerary-rebuild TODO from Claude is superseded by the final June 27 handoff.

## Ongoing monitoring (next session picks these up)

### Airfare Watch — weekly check

- [ ] Check Google Flights, Skyscanner, and KAYAK for one-way economy SFO→MNL and ORD→MNL departures in the 2027-03-07 through 2027-03-13 window.
- [ ] Verify any serious finalist on the airline's own booking flow before recommending a purchase. Keep `directAirlineVerified` false unless checkout confirms the fare, baggage treatment, and protected routing.
- [ ] Update `data/airfare-watch.json`, run `npm run monitor:airfare`, and record any coverage gaps or airline-site blockers explicitly.

### Hotel Monitor — per cadence (Tue/Fri before Sep 1, Mon Sep, daily Oct+)

- [ ] Run `npm run scrape:hotels` for the layered direct-first pass, then `npm run build:hotels`.
- [ ] Seattle cap $400 — if any watchlist hotel qualifies refundable under cap, update `data/hotel-monitor-source.json` and consider switching from Boylston ($384.13, RES [redacted]).
- [ ] ⚠️ **Portland — cancel Hotel Vance (conf# [redacted]) before Nov 3, 11:59 PM.** Courtyard by Marriott Portland City Center already booked ($487.85, conf# [redacted]) — $140.61 cheaper. No further Portland watchlist monitoring needed.
- [ ] ⚠️ **Staypineapple flash sale expires ~2026-05-28** — re-check Seattle watchlist (Maxwell, FIVE, Watertown, University Inn) for regular November prices after sale ends.
- [ ] Replace stale direct URLs or chain blockers when a brand site returns `stale-direct-url`, Cloudflare, or anti-bot reference pages.
- [ ] Commit and push after any real hotel-source update.

### Itinerary upkeep

- [ ] Recheck November-specific business hours for key stops as the trip approaches.
- [ ] Update `data/trip-data.js` if any price, hours, or transit assumption changes materially.

## Completed (archived for reference)

- 2026-06-27: Final Seattle + Portland itinerary rebuild completed, deployed, and handed off. The earlier Claude planning drafts about further itinerary edits are now stale.
- 2026-05-24: Removed 3 redundant saved automations (`seattle-portland-trip-review`, `seattle-portland-thread-summary-weekly`, `update-agents-md`). Kept 9 active watches with clearer scopes.
- 2026-05-24: Deleted stale GitHub Pages deploy files and legacy flight-monitoring notes. Cleaned local review PNGs, browser-capture logs, macOS metadata files, and untitled scratch canvas files.
- 2026-05-24: Removed the orphaned legacy flight-status polling track (`monitor:flights`, `scripts/monitor-flights.js`, `data/flight-monitor-snapshot.json`, `research/flights/*`).
- 2026-05-24: Unified light/white theme across all 3 HTML pages. Removed moodboard. Added collapsible sections (flights, budget, verification). Cleaned stale automation cards. Added missing hotel address/brand data. Deleted 14 stale PNGs and TASKS-legacy.md.
- 2026-05-24: Layered hotel monitor shipped. Per-chain adapters, blocker classification, persistent browser profile support, fallback scaffolding, dashboard status updates, and hotel regression tests are now in repo.
- 2026-05-23: PAL Award Tax Monitor launched. SFO→MNL (58k mi + $370.50), ORD→MNL (67k mi + $375.50).
- 2026-05-23: Boylston Hotel confirmed as Seattle benchmark (RES ID [redacted], $384.13 total, Nov 1-4 2026).
- 2026-05-23: Hotel Vance confirmed as Portland benchmark ($628.46, conf# [redacted], Nov 4-9 2026).
- 2026-05-23: Both trackers rebuilt with Playwright automation and pushed to the repo; public hosting remains Netlify.
- 2026-05-23: All notes reconciled, stale lines removed, handoff written.
