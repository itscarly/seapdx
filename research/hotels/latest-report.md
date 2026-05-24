# Hotel Monitor Report

Generated: 2026-05-24T01:35:33.400Z

## Seattle

- Trip: 2026-11-01 – 2026-11-04 (3 nights, 2 guests)
- Benchmark: unavailable
- Alert threshold: $400.00
- Hotels watched: 3
- Alerts triggered: 0

No hotels currently under the alert threshold.

### Full Watchlist

- ✗ Hotel Max: $777.68 | refundable: yes | stars: ? | URL: reachable
- ✗ Paramount Hotel Seattle: $731.60 | refundable: yes | stars: ? | URL: reachable
- ✗ The State Hotel: $909.46 | refundable: yes | stars: ? | URL: reachable

## Portland

- Trip: 2026-11-04 – 2026-11-09 (5 nights, 2 guests)
- Benchmark: $628.46
- Alert threshold: $620.00
- Hotels watched: 7
- Alerts triggered: 0

No hotels currently under the alert threshold.

### Full Watchlist

- ✗ The Nines Portland: unavailable | refundable: unknown | stars: 4.5 | URL: unreachable
- ✗ Hotel deLuxe: unavailable | refundable: unknown | stars: 4.3 | URL: unreachable
- ✗ The Benson Hotel: unavailable | refundable: unknown | stars: 4.2 | URL: reachable
- ✗ Kimpton Hotel Vintage Portland: unavailable | refundable: unknown | stars: 4.4 | URL: reachable
- ✗ Graduate Portland: unavailable | refundable: unknown | stars: 4.1 | URL: reachable
- ✗ The Society Hotel: unavailable | refundable: unknown | stars: 4.2 | URL: reachable
- ✗ Sentinel Hotel: unavailable | refundable: unknown | stars: 4.3 | URL: reachable

## Notes

- Hotel prices are manually updated in `data/hotel-monitor-source.json` after each direct-booking check.
- This monitor cannot scrape live prices from JS-rendered booking engines.
- To update a price: open the direct booking URL, verify the total, update `trueTotalCost` in the source file.
- Re-run `npm run monitor:hotels` after manual price updates to refresh the report.
