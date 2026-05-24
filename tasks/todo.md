# Active Tasks

## Ongoing monitoring (next session picks these up)

### PAL Award Tax Monitor — weekly check

- [ ] Open PAL.com, clear the cookie gate, and get all the way to a Business Class award result for Mar 3-7, 2027 on SFO→MNL and ORD→MNL.
- [ ] If either tax changed vs. current values ($370.50 SFO / $375.50 ORD), add a new `taxHistory` entry in `data/airfare-watch.json`, update `currentTax` and `lastChecked`.
- [ ] Commit and push.

### Hotel Monitor — per cadence (Tue/Fri before Sep 1, Mon Sep, daily Oct+)

- [ ] Run `npm run scrape:hotels` or `npm run monitor:hotels` for direct-site checks (Nov 1-4 Seattle, Nov 4-9 Portland).
- [ ] Seattle cap $400 — if any watchlist hotel qualifies refundable under cap, update `data/hotel-monitor-source.json` and consider switching from Boylston ($384.13, RES [redacted]).
- [ ] Portland cap $620 — Hotel Vance current benchmark ($628.46, conf# [redacted]). Watch for challenger under $620.
- [ ] Replace stale direct URLs or manual blockers when a brand site returns a 404 page, Cloudflare gate, or checkout flow without a visible total.
- [ ] Update `lastAutomatedCheckAt` and `lastAutomatedSummary` in the JSON, commit and push.

### Itinerary upkeep

- [ ] Recheck November-specific business hours for key stops as the trip approaches.
- [ ] Update `data/trip-data.js` if any price, hours, or transit assumption changes materially.

## Completed (archived for reference)

- 2026-05-24: Unified light/white theme across all 3 HTML pages. Removed moodboard. Added collapsible sections (flights, budget, verification). Cleaned stale automation cards. Added missing hotel address/brand data. Deleted 14 stale PNGs and TASKS-legacy.md.
- 2026-05-23: PAL Award Tax Monitor launched. SFO→MNL (58k mi + $370.50), ORD→MNL (67k mi + $375.50).
- 2026-05-23: Boylston Hotel confirmed as Seattle benchmark (RES ID [redacted], $384.13 total, Nov 1-4 2026).
- 2026-05-23: Hotel Vance confirmed as Portland benchmark ($628.46, conf# [redacted], Nov 4-9 2026).
- 2026-05-23: Both trackers rebuilt with Playwright automation and pushed to GitHub Pages.
- 2026-05-23: All notes reconciled, stale lines removed, handoff written.
