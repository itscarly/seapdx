# Changelog

## Purpose

This is the concise project change record.

Use it for:

- meaningful shipped changes
- workflow changes
- automation changes
- structure changes that future sessions need to know

For detailed session-by-session history, use [[Project Log]].

## 2026-05-16

- Added a standardized project memory structure for Codex, Claude, and Obsidian.
- Introduced shared maintenance rules, memory folders, and post-task workflow guidance.
- Reworked the notes home so the vault points at standardized active notes instead of only the earlier lightweight pages.

## 2026-05-23 (session 2)

- Locked in the Boylston Hotel Capitol Hill confirmed reservation (RES ID [redacted], $384.13 total, Nov 1-4 2026) as the hotel benchmark in `data/hotel-monitor-report.json`. Status changed from "blocked" to "confirmed-reservation". Monitor now hunting for a refundable sub-$400 option with better King Street Amtrak / Link Light Rail proximity.
- Added `monitoringCriteria` block to the hotel report with explicit switch triggers and transit priority requirements.
- Replaced the cash-fare airfare tracker with a PAL Award Tax Monitor. New `data/airfare-watch.json` tracks Philippine Airlines Business Class award redemption taxes: SFO→MNL (58,000 mi + $370.50 tax) and ORD→MNL (67,000 mi + $375.50 tax). Departure dates Mar 3-7, 2027.
- Rewrote `dashboards/html/airfare.html` and `dashboards/js/airfare.js` as the PAL Award Tax Monitor — route cards with sparkline trend bars, tax change color-coding (green = dropped, amber = stable, red = rose), tax history table, and monitoring strategy panel.
- Pushed all local changes to GitHub so GitHub Pages reflects the current state.

## 2026-05-23 (session 1)

- Restored the deleted Manila airfare tracker files and rewired the dashboard, scripts, report outputs, and notes around the full airfare-plus-hotel monitoring state.
- Kept the newer Seattle hotel tracker restore, then reconciled the automation section so both trackers and the existing flight monitor are present again.
- Polished the hotel and airfare tracker UI so both now match the main dashboard's spacing, card rhythm, and color-coding more closely, while also replacing the airfare tables with responsive fare cards.
- Applied a dark premium theme to both tracker pages: deep navy-black background, gold/teal/blue accent palette, glassy dark cards, status-coded pills, and executive-style visual hierarchy.
- Ensured all hotel cards (Paramount, Hotel Max, The State Hotel, Boylston) show a clickable booking or availability link.
- Confirmed the local server launchd agent is active and the site runs automatically on port 4173.
