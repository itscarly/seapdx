# Hotel Monitor Report

Generated: 2026-06-02T12:36:31.965Z

## Seattle

- Trip: 2026-11-01 – 2026-11-04 (3 nights, 2 guests)
- Benchmark: $469.81
- Alert threshold: $400.00
- Hotels watched: 4
- Alerts triggered: 1

### Qualifying Hotels (under threshold)

**The Boylston Hotel Capitol Hill** — $384.13
- Savings vs benchmark: $85.68
- Review: 4.4★
- Elevator: unknown
- Breakfast: not included
- Transit: Capitol Hill Link Light Rail station 5-min walk
- Booking: [private reservation link removed]

### Full Watchlist

- ✓ QUALIFIES The Boylston Hotel Capitol Hill: $384.13 | refundable: yes | stars: 4.4 | URL: reachable
- ✗ Warwick Seattle Hotel: $451.94 | refundable: yes | stars: 4.2 | URL: unreachable
- ✗ Staypineapple, Hotel FIVE: $560.09 | refundable: yes | stars: 4.3 | URL: reachable
- ✗ Mayflower Park Hotel: $591.47 | refundable: yes | stars: 4.2 | URL: unreachable

## Portland

- Trip: 2026-11-04 – 2026-11-09 (5 nights, 2 guests)
- Benchmark: $487.85
- Alert threshold: $620.00
- Hotels watched: 0
- Alerts triggered: 0

No hotels currently under the alert threshold.

### Full Watchlist


## Notes

- Hotel prices are refreshed through the layered monitor in `npm run scrape:hotels`, which records direct captures, blockers, and fallback attempts in `data/hotel-monitor-source.json`.
- This report monitor does not scrape prices itself; it summarizes current source data and URL reachability.
- Re-run `npm run scrape:hotels` and `npm run build:hotels` before using this report for rebooking decisions.
- Treat fallback prices and blocker states as prompts for follow-up verification before any booking change.
