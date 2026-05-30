# Enterprise Airfare Intelligence Report

Generated: 2026-05-26T19:40:28.904Z
Latest checked fare: 2026-05-26T19:32:42.000Z
Route: SFO or ORD to MNL
Departure window: 2027-03-07 to 2027-03-13
Cabin/passengers: 1 adult, economy
Baggage assumption: Do not recommend purchase unless the airline website makes the checked-bag rules or costs explicit.
Booking rule: Use Google Flights, Skyscanner, or KAYAK only as discovery signals. Recommend purchase only after airline-direct checkout verifies price, baggage, and protected routing.

## Executive Fare Intelligence Summary

- Current system recommendation: **STRONG WATCH**.
- Observation count: 1, with 0 airline-direct verified and 1 discovery-only signals.
- Market posture: discovery market only; no booking recommendation is allowed until an airline-direct checkout is captured.
- Strongest unverified discovery signal: Philippine Airlines Nonstop at $523; treat as a checkout lead, not a booking recommendation.

## Verified Fare Rankings

| Rank | Origin | Depart | Airline | Routing | Direct fare | Route quality | Buy confidence | Recommendation | Historical low delta | Route integrity | Fare rules |
|---:|---|---|---|---|---:|---:|---:|---|---:|---|---|
| - | - | - | - | No verified fares yet | - | - | - | WATCH | - | Verify checkout first | Discovery signals only |

## Discovery Signals Awaiting Airline Verification

- SFO 2027-03-10 Philippine Airlines Nonstop: $523, STRONG WATCH. Missing verification: final total not captured, baggage not confirmed, protected routing confirmed.

## Historical Fare Analysis

| Origin | Depart | Routing | Current fare | Historical low | Rolling average | Volatility | Increase risk | Future drop probability | Outlook |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
| SFO | 2027-03-10 | Nonstop | $523 | $523 | $560 | 48% | 41% | 44% | mixed |

- Route-specific historical-low logic is active, so near-low verified nonstop or premium protected itineraries can outrank modestly cheaper but weaker connections.

## Strategic Booking Guidance

- **STRONG WATCH**: Philippine Airlines SFO-MNL on 2027-03-10 at $523. discovery only. Route quality 0.82, buy confidence 0.65, volatility 48%, increase risk 41%.

## Monitoring Operations

### Cadence

- Now through 2026-08-31: weekly. Build a clean one-way baseline and surface repeatable airline-direct finalists.
- 2026-09-01 through 2026-09-30: twice weekly (Mon/Thu). September is the serious buy/watch window. Re-check both origins often enough to catch real airline-direct buy signals.
- 2026-10-01 through 2027-03-06: three times weekly or daily if a checkout-grade fare appears. Convert discovery signals into airline-direct checkout evidence before the travel window opens.

### Workflow

1. Discover candidate fares on Google Flights, Skyscanner, or KAYAK.
2. Shortlist only itineraries that fit the cabin, origin, and one-way scope.
3. Open airline-direct checkout for each finalist.
4. Verify final payment-page total, fare class, baggage, carry-on, seat rules, and change or cancel penalties.
5. Confirm protected routing, transit visa requirements, airport transfers, and self-transfer risk.
6. Record route-quality and historical-intelligence fields in `data/airfare-watch.json`.
7. Rebuild the report and summary with `npm run monitor:airfare`.
8. Recommend `BOOK` or `STRONG BOOK` only when direct checkout evidence is complete.

### Escalation Triggers

- Escalate to daily checks when a verified fare is at or within roughly `$25` of the route-specific historical low.
- Escalate when volatility spikes above `60%`, a flash sale appears, or the recommendation shifts to `HIGH RISK OF INCREASE`.
- Keep risky structures visible but clearly penalized: overnight airport waits, self-transfers, airport changes, and visa-sensitive transits.

