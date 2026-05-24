# Tasks

## Purpose

This is the active task summary for humans and agents.

It should stay shorter and cleaner than raw implementation scratch notes.

## Current active work

- **Seattle (8 hotels tracked)**: Boylston confirmed $384.13 (RES [redacted]) — hold unless refundable sub-$400 appears. citizenM added ($580.56). Warwick best alternative ($451.94).
- **Flash sale warning**: 4 Staypineapple prices are Memorial Day 25% off (~expires 2026-05-28). Re-check after sale: Maxwell $534.94, Hotel FIVE $560.09, Watertown $543.91, University Inn $491.84.
- **Portland (16 hotels tracked, all priced)**: Hotel Vance benchmark $628.46 (conf# [redacted]) — hold unless challenger under $620. Lowest tracked: Hyatt Centric $701.60. No hotel currently under threshold.
- **PAL Award Tax Monitor**: SFO→MNL $370.50, ORD→MNL $375.50. Cadence: weekly Mon (now–Aug), Mon+Thu (Sep), Mon+Wed+Fri (Oct), stops Nov 1.

## GitHub Secrets needed for email alerts

`RESEND_API_KEY`, `ALERT_EMAIL_TO`, `ALERT_FROM`

## Completed 2026-05-24 (session 14 — hotel watchlist overhaul)

- Rebuilt Seattle watchlist: removed 7 hotels (over budget or user-dropped), added citizenM ($580.56). 8 hotels remain.
- Rebuilt Portland watchlist: removed 5 hotels, added 8 new with full prices, updated 5 existing with prices. 16 hotels tracked, all priced.
- Synced `hotel-monitor-source.json` (dashboard data source) to match report — was 14/13 hotels, now 8/16.

## Completed 2026-05-24 (earlier sessions)

- Replaced all Seattle hotel booking URLs with correct direct booking links.
- Rebuilt layered hotel price scraper and dashboard. Unified white/light theme across all 3 HTML pages.
- Removed stale GitHub Pages deploy path, flight polling files, moodboard section, stale PNGs.
- PAL tracker rebuilt from cash-fare to award-tax monitor.

## Task sync rule

After meaningful completed work: mark completed items, remove invalid tasks, move stale context to `notes/memory/archive/`.

## Related notes

- [[PROJECT_CONTEXT]]
- [[CHANGELOG]]
- [[KNOWN_ISSUES]]
- [[Project Log]]
