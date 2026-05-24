# Changelog

## Purpose

This is the concise project change record.

Use it for:

- meaningful shipped changes
- workflow changes
- automation changes
- structure changes that future sessions need to know

For detailed session-by-session history, use [[Project Log]].

## 2026-05-24 (session 4 — hotel watchlist rebuild)

- Replaced all Seattle hotel booking URLs with correct direct booking links provided by user.
- Removed non-existent hotels: Hilton Seattle, Canopy by Hilton Capitol Hill.
- Rebuilt watchlist filter: transit ≥85, rating ≥4.0, safe neighborhood, elevator required. Dropped 11 failing hotels.
- Added boutique/independent hotels: Staypineapple Maxwell, Hotel FIVE, Watertown, University Inn; Hotel Sorrento; Mayflower Park; Arctic Club; Hotel Andra; Alexis Royal Sonesta; Warwick Seattle.
- Removed big convention chains (Hyatt Regency, Westin, Sheraton, W, Renaissance) per user preference for smaller/boutique properties.
- Manually entered prices for 11 hotels from user-provided checkout screenshots. 3 still need prices (Arctic Club, Hotel Andra, Alexis Royal Sonesta).
- Corrected price attribution errors mid-session (Mayflower Park and Warwick prices were initially misassigned to Kimpton Palladian and Alexis). Prevention rule: always confirm hotel name before writing price — never assume from screenshot order.

## 2026-05-24

- Fixed the hotel dashboards and generated hotel report so `last verified` prices stay visible for blocked/review hotels instead of collapsing into price-less `needs check` summaries. Review-state cards, table rows, hero stats, and markdown output now surface stored totals when they exist.
- Replaced the one-pass hotel scraper with a layered direct-first monitor. Direct engines are now routed per chain, blocked pages are classified explicitly, fallback capture is isolated, and the source file preserves the last trustworthy total instead of overwriting it with low-confidence listing prices.
- Added hotel monitor regression tests for: nightly-vs-stay extraction, anti-bot classification, stale direct URL detection, checkout-engine rejection of listing-grade totals, and collection routing into eligible / blocked-review / excluded buckets.
- Updated hotel dashboard surfaces and report generation to show richer monitor states such as `blocked-direct`, `stale-direct-url`, `manual-review-needed`, source tier, and confidence-aware preservation behavior.
- Refreshed hotel and PAL monitoring data from live sources. Paramount Hotel Seattle was corrected to a verified $731.60 total after the scraper misread a room rate as the stay total.
- Recorded current live blockers instead of leaving stale "needs-check" state: Boylston remains Cloudflare-blocked, Hilton Seattle's tracked direct URL is returning a Hilton 404, Hotel Vance kept its confirmed $628.46 benchmark while live Marriott checkout still failed to expose a fresh total, and PAL's award-tax flow stayed behind cookie/interaction gates.
- Rebuilt hotel report data and reconciled notes/tasks to remove outdated "first manual capture" carry-forward language.
- Converted all three HTML pages (main dashboard, airfare tracker, hotels tracker) from dark GitHub-style theme to a unified white/light professional theme. All pages share the same color palette, typography, and nav style.
- Removed the location moodboard section from the main dashboard (`#visuals` section); guarded `renderVisualStrip` in `app.js` with a null check so removing the element no longer crashes page render.
- Added collapsible `<details>` blocks to: Booked Flights, Additional Booked Flights, Budget Breakdown, and Verification Resources / Last Verified. All start collapsed by default.
- Removed 2 stale automation cards (15-min flight monitor with dead `.md` link; Latest Report with dead `.md` link). Automation section now shows 4 clean active cards.
- Fixed external link `rel` attributes (`noopener noreferrer`), added `type="button"` to filter chips, added `role="tab"` + `aria-selected` to planning guide tabs.
- Added `address` and `brand` fields to 4 Seattle hotel watchlist entries that were missing them (Boylston, Hotel Max, Paramount, State Hotel) in `data/hotel-monitor-source.json`.
- Removed 14 stale screenshot PNGs from `docs/review-assets/` and `docs/archive/TASKS-legacy.md`.

## 2026-05-23

- Locked in the Boylston Hotel Capitol Hill confirmed reservation (RES ID [redacted], $384.13 total, Nov 1-4 2026) as the Seattle hotel benchmark. Monitor hunting for refundable sub-$400 option with better transit proximity.
- Added `monitoringCriteria` block to the hotel report with explicit switch triggers and transit priority requirements.
- Replaced the cash-fare airfare tracker with a PAL Award Tax Monitor. `data/airfare-watch.json` tracks Philippine Airlines Business Class award taxes: SFO→MNL (58,000 mi + $370.50) and ORD→MNL (67,000 mi + $375.50). Departure Mar 3-7, 2027.
- Rewrote `dashboards/html/airfare.html` as the PAL Award Tax Monitor with sparklines, color-coded change pills, and history table.
- Added Playwright automation for hotel price scraping and PAL tax scraping. Full table dashboards rebuilt.
- Pushed all changes to GitHub.

## 2026-05-16

- Added a standardized project memory structure for Codex, Claude, and Obsidian.
- Introduced shared maintenance rules, memory folders, and post-task workflow guidance.
- Reworked the notes home so the vault points at standardized active notes instead of only the earlier lightweight pages.
