---
name: session-start
description: Single-file session orientation — read this first, nothing else needed to get started
updated: 2026-05-24
---

# Session Start — codexproject

## What this project is

Static travel dashboard for a Seattle + Portland trip (Nov 1–9, 2026). PAL Business Class award flights Manila (Mar 2027). Three subsystems: itinerary dashboard, hotel monitor, PAL tax monitor.

## Vault location

Obsidian vault = repo root `/Users/kicker/Downloads/codexproject/`. Write Obsidian config to `.obsidian/` (not `notes/.obsidian/`). Close Obsidian before writing config files.

## Key files

| File | Purpose |
|------|---------|
| `data/trip-data.js` | Source of truth for itinerary |
| `data/airfare-watch.json` | PAL award tax history (SFO + ORD routes) |
| `data/hotel-monitor-source.json` | **Dashboard data source** — hotel watchlist + prices (hotels.html reads this) |
| `data/hotel-monitor-report.json` | Full report with metadata — keep in sync with source |
| `dashboards/html/index.html` | Main dashboard |
| `dashboards/html/airfare.html` | PAL tax monitor page |
| `dashboards/html/hotels.html` | Hotel monitor page |

**Critical:** `hotels.html` reads from `hotel-monitor-source.json`. When editing hotel data, always sync BOTH files. The dashboard reads `currentReservation` and `watchlist` from each city object.

---

## Current status (as of 2026-05-24, end of session)

### ⚠️ One action still required

**Cancel Hotel Vance (conf# [redacted], $628.46) before Nov 3, 11:59 PM Portland local time.**
Courtyard is already booked and cheaper. This is the only open task.

---

### Seattle hotels (Nov 1–4, 3 nights, budget cap $400)

**Booked:** The Boylston Hotel Capitol Hill — $384.13 (RES# [redacted]). Hold unless refundable sub-$400 appears.

**Watchlist (8 hotels, all over cap):**

| Hotel | Total | Cancel deadline | Note |
| ----- | ----- | --------------- | ---- |
| Warwick Seattle Hotel | $451.94 | Oct 31, 11:59 PM | |
| Staypineapple University Inn | $491.84 | Oct 31 | ⚠️ flash sale — recheck after May 28 |
| Staypineapple Maxwell | $534.94 | Oct 31 | ⚠️ flash sale — recheck after May 28 |
| Staypineapple Watertown | $543.91 | Oct 31 | ⚠️ flash sale — recheck after May 28 |
| Staypineapple Hotel FIVE | $560.09 | Oct 31 | ⚠️ flash sale — recheck after May 28 |
| citizenM Seattle South Lake Union | $580.56 | Oct 30, 11:59 PM | |
| Mayflower Park Hotel | $591.47 | Oct 31, 4 PM | |
| Hotel Sorrento | $645.46 | free cancel / pay later | |

---

### Portland hotels (Nov 4–9, 5 nights)

**ACTIVE BOOKING:** Courtyard by Marriott Portland City Center — $487.85 (conf# [redacted])
- Address: 550 SW Oak Street, Portland, OR 97204
- Portland base for all itinerary, dashboard, and calendar events

**Breakfast:** Fuller's Coffee Shop, 136 NW 9th Ave — ~8-10 min walk from Courtyard, opens 7 AM Mon–Sat

**Cancel:** Hotel Vance (conf# [redacted]) — deadline Nov 3, 11:59 PM

**Watchlist:** Empty — monitoring complete, no Portland alternatives tracked

---

### PAL taxes

- SFO→MNL $370.50 | ORD→MNL $375.50 (verified 2026-05-24)
- Cadence: weekly Mon (now–Aug), Mon+Thu (Sep), Mon+Wed+Fri (Oct), stops Nov 1

---

## What was completed this session

1. **Replaced Hotel Vance with Courtyard Portland** across all files:
   - `data/trip-data.js` — all activity names, routes, hotel context strings
   - `dashboards/js/app.js` — map coordinates, stop labels
   - `dashboards/js/hotels.js` — strategy notes
   - `data/hotel-monitor-source.json` — Courtyard promoted to `currentReservation`, Vance to `cancelReservation`
   - `data/hotel-monitor-report.json` — benchmark updated to Courtyard
   - Notes updated: `PROJECT_CONTEXT.md`, `SESSION_START.md`

2. **Swapped Day 5 Portland breakfast**: Stumptown Downtown → Fuller's Coffee Shop

3. **Updated Google Calendar**: 22 Portland events updated (Days 4–9) — hotel name, locations, route links, and breakfast event

4. **Committed and pushed** to GitHub (commit `b778dd5`)

---

## Commands

```sh
npm run monitor:pal-taxes   — cadence-gated PAL check
npm run monitor:hotels      — check hotel prices now
npm run build:hotels        — rebuild report from source
npm run serve               — local preview at localhost:4173
npm run validate            — run all tests + validators
```

## Hard rules

- **Never add a hotel entry with null display fields** — fill reviewScore, transitScore, transitNote, safetyNote, safetySource, reviewUrl from the address if not in the booking confirmation
- **Never overwrite a stored hotel price with a scraped listing price** — only checkout-grade totals qualify
- **Never rebuild the airfare tracker as a cash-fare system** — it tracks PAL redemption taxes only
- **Always confirm hotel name from screenshot before writing a price** — never assume from order or context
- **When editing hotel data: sync BOTH JSON files** — dashboard reads source, not report
- **Check the dashboard JS before structuring new JSON keys** — data under unknown keys is invisible to the renderer
- Read existing calendar events before adding/modifying any
- `data/trip-data.js` is the only itinerary source of truth

## GitHub Secrets needed (not yet set)

`RESEND_API_KEY`, `ALERT_EMAIL_TO`, `ALERT_FROM` — required for email alerts on hotel/tax changes

## Notes for deeper context

- [[PROJECT_CONTEXT]] — full project shape and working rules
- [[TASKS]] — active work and what's pending
- [[KNOWN_ISSUES]] — open blockers
- [[CHANGELOG]] — recent changes
- [[LEARNINGS]] — reusable patterns to avoid past mistakes
