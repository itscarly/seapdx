# Tasks

## Purpose

This is the active task summary for humans and agents.

It should stay shorter and cleaner than raw implementation scratch notes.

## Current active work

### ⚠️ Cancel 2 of 3 Seattle reservations before Oct 30–31

User intends to keep **Reside Seattle Downtown** (104 Pine St, conf [redacted], $469.81).

Must cancel before deadlines:
- Palihotel Seattle (conf [redacted]) — **Oct 30, 3:00 PM** (1-night penalty if missed)
- Boylston Hotel Capitol Hill (conf [redacted]) — **Oct 31, 4:00 PM**

### ⚠️ Cancel Hotel Vance (Portland) before Nov 3, 11:59 PM

Hotel Vance conf# [redacted], $628.46. Courtyard (conf# [redacted], $487.85) is the active Portland base.

### Seattle watchlist (4 hotels, transitScore > 90 only)

All hotels with transitScore ≤ 90 removed (session 16). Current watchlist: Boylston (99), Warwick (98), Hotel FIVE (100), Mayflower Park (100).

### PAL taxes

SFO→MNL $370.50 | ORD→MNL $375.50. Monitoring cadence active through Oct.

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
- Airfare tracker later moved back to a cash-fare watch with airline-direct verification rules.

## Task sync rule

After meaningful completed work: mark completed items, remove invalid tasks, move stale context to `notes/memory/archive/`.

## Related notes

- [[PROJECT_CONTEXT]]
- [[CHANGELOG]]
- [[KNOWN_ISSUES]]
- [[Project Log]]
