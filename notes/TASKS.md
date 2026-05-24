# Tasks

## Purpose

This is the active task summary for humans and agents.

It should stay shorter and cleaner than raw implementation scratch notes.

## Current active work

- **Seattle hotel watchlist rebuilt 2026-05-24**: Criteria — transit ≥85, guest rating ≥4.0, safe neighborhood, elevator confirmed. 14 hotels tracked. Boylston confirmed $384.13 (RES [redacted]) — hold unless refundable direct quote under $400 appears.
- **Still need prices**: Arctic Club Hotel, Hotel Andra Seattle, The Alexis Royal Sonesta. User to provide checkout screenshots.
- **Flash sale warning**: 4 Staypineapple prices captured during Memorial Day 25% off sale (~ends 2026-05-28). Re-check regular prices after sale ends: Maxwell $534.94, Hotel FIVE $560.09, Watertown $543.91, University Inn $491.84.
- **Portland**: Alert threshold $620. Hotel Vance confirmed $628.46 (conf# [redacted]) — hold unless challenger under $620. Portland watchlist needs a full price-check pass.
- **PAL Award Tax Monitor**: SFO→MNL $370.50, ORD→MNL $375.50. Cadence: weekly Mon (now–Aug), 2×/week Mon+Thu (Sep), 3×/week Mon+Wed+Fri (Oct), stops Nov 1.

## GitHub Secrets needed for email alerts

- `RESEND_API_KEY`, `ALERT_EMAIL_TO`, `ALERT_FROM`

## Completed 2026-05-24 (session 4 — hotel watchlist rebuild)

- Replaced all Seattle hotel booking URLs with correct user-provided links.
- Rebuilt Seattle watchlist: dropped all hotels below transit 85 or wrong city; removed non-existent properties (Hilton Seattle, Canopy Capitol Hill).
- Added boutique/independent hotels matching Boylston/Staypineapple profile: Staypineapple (4 properties), Hotel Sorrento, Mayflower Park, Arctic Club, Hotel Andra, Alexis Royal Sonesta, Warwick Seattle.
- Manually entered prices for 11 hotels from user checkout screenshots.
- Removed big convention chains (Hyatt Regency, Westin, Sheraton, W, Renaissance) and non-qualifying hotels (Kimpton Palladian, Silver Cloud, Moore Hotel, Loews 1000, Thompson, Inn at the Market, Kimpton Monaco) per user direction.

## Completed 2026-05-24 (earlier sessions)

- Rebuilt hotel scraping as layered direct-first monitor. Fixed dashboard to show `last verified` totals for blocked hotels.
- Unified white/light theme across all 3 HTML pages.
- Removed moodboard section, stale automation cards, stale PNGs.

## Task sync rule

After meaningful completed work: mark completed items, remove invalid tasks, move stale context to `notes/memory/archive/`.
