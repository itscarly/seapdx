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

**Critical:** `hotels.html` reads from `hotel-monitor-source.json`, NOT `hotel-monitor-report.json`. When editing hotel data, always sync both files.

## Current status (2026-05-24)

### Seattle hotels (Nov 1–4, 3 nights, budget cap $400)

**Benchmark (booked):** The Boylston Hotel Capitol Hill — $384.13 confirmed (RES [redacted]). Hold unless refundable sub-$400 appears.

**Watchlist (8 hotels, all over cap):**

| Hotel | Total | Cancel deadline |
| ----- | ----- | --------------- |
| Warwick Seattle Hotel | $451.94 | Oct 31, 11:59 PM |
| Staypineapple University Inn | $491.84 | Oct 31 (flash sale*) |
| Staypineapple Maxwell | $534.94 | Oct 31 (flash sale*) |
| Staypineapple Watertown | $543.91 | Oct 31 (flash sale*) |
| Staypineapple Hotel FIVE | $560.09 | Oct 31 (flash sale*) |
| citizenM Seattle South Lake Union | $580.56 | Oct 30, 11:59 PM |
| Mayflower Park Hotel | $591.47 | Oct 31, 4 PM |
| Hotel Sorrento | $645.46 | free cancel / pay later |

*Flash sale prices (~expires 2026-05-28) — re-check Staypineapple regular prices after sale ends.

### Portland hotels (Nov 4–9, 5 nights, alert threshold $620)

**Benchmark (booked):** Hotel Vance Tribute Portfolio — $628.46 confirmed (conf# [redacted]). Hold unless refundable challenger under $620 with 4.0+ stars, elevator, and transit.

**Watchlist (16 hotels, all priced except 3):**

| Hotel | Total | Breakfast | Cancel |
| ----- | ----- | --------- | ------ |
| Hyatt Centric Downtown Portland | $701.60 | — | Nov 3, 11:59 PM |
| Holiday Inn Express Portland-NW | $741.26 | ✓ | Nov 3, 6 PM |
| Embassy Suites Portland Downtown | $743.19 | ✓ | Nov 3, 11:59 PM |
| Hotel Lucia | $760.49 | — | 48-hr policy |
| Hyatt Regency Convention Center | $764.68 | — | Nov 2, 11:59 PM |
| Hyatt House Portland/Downtown | $783.85 | ✓ | Nov 3, 11:59 PM |
| The Benson Portland, Curio/Hilton | $794.87 | — | Nov 3, 11:59 PM |
| Hampton Inn & Suites Pearl District | $795.06 | ✓ | Nov 2, 11:59 PM |
| The Society Hotel (Suite) | $844.72 | — | cancel by 12pm day-of |
| The Porter Portland, Curio/Hilton | $848.42 | — | Nov 3, 11:59 PM |
| DoubleTree Portland | $913.72 | — | Nov 2, 11:59 PM |
| Sentinel Hotel | $1,003.40 | — | TBD |
| Hilton Portland Downtown | $1,025.58 | — | Nov 2, 11:59 PM |
| Kimpton Hotel Vintage | needs price | — | — |
| Hampton Inn Portland Downtown | needs price | ✓ | — |
| Hyatt Place Portland/Downtown | needs price | ✓ | — |

### PAL taxes

- SFO→MNL $370.50 | ORD→MNL $375.50 (verified 2026-05-24)
- Cadence: weekly Mon (now–Aug), Mon+Thu (Sep), Mon+Wed+Fri (Oct), stops Nov 1

## Commands

```sh
npm run monitor:pal-taxes   — cadence-gated PAL check
npm run monitor:hotels      — check hotel prices now
npm run build:hotels        — rebuild report from source
npm run serve               — local preview at localhost:4173
npm run validate            — run all tests + validators
```

## Hard rules

- **Never overwrite a stored hotel price with a scraped listing price** — only checkout-grade totals qualify
- **Never rebuild the airfare tracker as a cash-fare system** — it tracks PAL redemption taxes only
- **Always confirm hotel name from screenshot before writing a price to JSON** — never assume from order or context
- **When editing hotel data: sync BOTH `hotel-monitor-source.json` AND `hotel-monitor-report.json`** — dashboard reads source, not report
- Read existing calendar events before adding/modifying any
- `data/trip-data.js` is the only itinerary source of truth

## GitHub Secrets needed (not yet set)

`RESEND_API_KEY`, `ALERT_EMAIL_TO`, `ALERT_FROM` — required for email alerts on hotel/tax changes

## Notes to read for deeper context

- [[PROJECT_CONTEXT]] — full project shape and working rules
- [[TASKS]] — active work and what's pending
- [[KNOWN_ISSUES]] — open blockers
- [[CHANGELOG]] — recent changes
- [[LEARNINGS]] — reusable patterns to avoid past mistakes
