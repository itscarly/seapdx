---
name: session-start
description: Single-file session orientation — read this first, nothing else needed to get started
updated: 2026-05-27
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

**Critical:** `hotels.html` reads from `hotel-monitor-source.json`. When editing hotel data, always sync BOTH files. The dashboard reads `currentReservation`, `secondReservation`, and `watchlist` from each city object.

---

## Current status (as of 2026-05-27, end of session 16)

### ⚠️ Actions required

**Seattle — 3 active reservations. Cancel 2 before Oct 30–31:**
- Reside Seattle Downtown (104 Pine St) — conf [redacted], $469.81, cancel by **Oct 30, 4:00 PM**
- Palihotel Seattle (107 Pine St) — conf [redacted], $536.59, cancel by **Oct 30, 3:00 PM**
- Boylston Hotel Capitol Hill — conf [redacted], $384.13, cancel by **Oct 31, 4:00 PM**

**User intends to keep Reside.** Cancel Palihotel and Boylston before their deadlines.

**Portland — cancel Hotel Vance (conf# [redacted], $628.46) before Nov 3, 11:59 PM Portland local time.**
Courtyard is already booked and cheaper.

---

### Seattle hotels (Nov 1–4, 3 nights)

**PRIMARY:** Reside Seattle Downtown, a Wyndham Residence — $469.81, conf [redacted]
- 104 Pine St, Seattle WA 98101 (half a block from Pike Place Market)
- Cancel by: Oct 30, 4:00 PM local

**BACKUP (2):** Palihotel Seattle — $536.59 (pay at property), conf [redacted]
- 107 Pine St (next door to Reside)
- Cancel by: Oct 30, 3:00 PM local
- Member Deal 15%, 1 Queen Bed, refundable

**BACKUP (3):** The Boylston Hotel Capitol Hill — $384.13, conf [redacted]
- 2518 Eastlake Ave E (Capitol Hill)
- Cancel by: Oct 31, 4:00 PM local

**Watchlist (4 hotels, all transitScore > 90):**

| Hotel | Total | TransitScore | Cancel deadline |
| ----- | ----- | ------------ | --------------- |
| Warwick Seattle Hotel (Deluxe Room) | $451.94 | 98 | Oct 31, 11:59 PM |
| Staypineapple Hotel FIVE | $560.09 | 100 | Oct 31 |
| Mayflower Park Hotel | $591.47 | 100 | Oct 31, 4 PM |
| The Boylston Hotel Capitol Hill | $384.13 | 99 | Oct 31, 4 PM |

Note: Boylston is both an active backup reservation AND in the watchlist.

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

### Seattle itinerary base

All Day 1–4 Seattle itinerary, calendar events, and routing are set for **Reside at 104 Pine St / Pike Place Market area** (not Capitol Hill). Google Calendar was updated 2026-05-27: 12 events updated for Day 1 + Day 4.

Day 1 routing: SEA → Link Light Rail → Westlake Station → walk to 104 Pine St
Day 1 evening: Pike Place stroll, Walgreens 2nd & Pike, Elm Coffee, Alibi Room (Post Alley), Il Bistro (Post Alley)
Day 3: Morning Pike Place coffee added before Bainbridge ferry
Day 4: Checkout Reside → Elm Coffee / Pike Place → King Street Station

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
