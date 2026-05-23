# Active Tasks

## Ongoing monitoring (next session picks these up)

### PAL Award Tax Monitor — weekly check

- [ ] Open PAL.com, check Business Class award for Mar 3-7, 2027 on SFO→MNL and ORD→MNL.
- [ ] If either tax changed vs. current values ($370.50 SFO / $375.50 ORD), add a new `taxHistory` entry in `data/airfare-watch.json`, update `currentTax` and `lastChecked`.
- [ ] Commit and push.

### Seattle Hotel Monitor — per cadence (Mon/Wed/Fri through Sep 16, then daily)

- [ ] Run direct-site checks for Nov 1-4, 2026, 2 guests on the watchlist hotels.
- [ ] If any qualify under $400 total, refundable, near King Street Amtrak or Link Light Rail, move them from `excluded` to `eligible` in `data/hotel-monitor-report.json`.
- [ ] Update `lastAutomatedCheckAt` and `lastAutomatedSummary` in the report JSON.
- [ ] Commit and push.

### Itinerary upkeep

- [ ] Recheck November-specific business hours for key stops as the trip approaches.
- [ ] Update `data/trip-data.js` if any price, hours, or transit assumption changes materially.

## Completed (archived for reference)

- 2026-05-23: PAL Award Tax Monitor launched. SFO→MNL (58k mi + $370.50), ORD→MNL (67k mi + $375.50).
- 2026-05-23: Boylston Hotel confirmed as benchmark (RES ID [redacted], $384.13 total, Nov 1-4 2026).
- 2026-05-23: Both trackers rebuilt with dark premium UI and pushed to GitHub Pages.
- 2026-05-23: All notes reconciled, stale lines removed, handoff written.
