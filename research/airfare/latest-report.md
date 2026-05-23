# Enterprise Airfare Intelligence Report

Generated: 2026-05-23T21:03:54.841Z
Latest checked fare: 2026-05-23T00:22:00.000Z
Route: SFO or ORD to MNL
Departure window: 2027-03-07 to 2027-03-13
Cabin/passengers: 1 adult, economy
Baggage assumption: one carry-on plus one checked bag
Booking rule: Book direct with the airline only. Discovery sites can surface opportunities, but BOOK states require airline-direct checkout proof for price, baggage, protected routing, and fare rules.

## Executive Fare Intelligence Summary

- Current system recommendation: **BOOK**.
- Observation count: 5, with 4 airline-direct verified and 1 discovery-only signals.
- Market posture: verified options exist, so route quality and historical-low positioning can now drive timing decisions.
- Best verified opportunity: Philippine Airlines SFO-MNL nonstop at $563, route quality 0.847, buy confidence 0.96.
- Strongest unverified discovery signal: United SFO-MNL nonstop at $524; treat as a checkout lead, not a booking recommendation.

## Verified Fare Rankings

| Rank | Origin | Depart | Airline | Routing | Direct fare | Route quality | Buy confidence | Recommendation | Historical low delta | Route integrity | Fare rules |
|---:|---|---|---|---|---:|---:|---:|---|---:|---|---|
| 1 | SFO | 2027-03-08 | Philippine Airlines | SFO-MNL nonstop | $563 | 0.85 | 0.96 | BOOK | $11 | protected ticket | Economy; checked bag included; 1 cabin bag plus personal item; Standard economy seat selection later in checkout; some extra-legroom seats cost more.; change: $200 change fee plus any fare difference; cancel: Reusable travel credit after fee |
| 2 | ORD | 2027-03-10 | Korean Air | ORD-ICN-MNL | $547 | 0.72 | 0.84 | STRONG WATCH | $14 | protected ticket | Economy; checked bag included; 1 carry-on plus personal item; Standard economy advance seat selection allowed with some seat fees.; change: $180 change fee plus any fare difference; cancel: Reusable credit after fee |
| 3 | ORD | 2027-03-11 | United | ORD-SFO-MNL Basic Economy | $519 | 0.68 | 0.81 | WATCH | $19 | protected ticket | Basic Economy; checked bag included; 1 carry-on plus personal item; No free advance seat selection and stricter change limits than standard economy.; change: Changes not allowed after purchase; cancel: Restricted credit only |
| 4 | ORD | 2027-03-12 | Cathay Pacific | ORD-HKG-MNL overnight | $506 | 0.17 | 0.58 | LIKELY TO DROP | $21 | protected ticket, overnight layover | Economy; checked bag included; 1 carry-on plus personal item; Standard economy seat rules with some paid seat zones.; change: $220 change fee plus any fare difference; cancel: Credit after fee |

## Discovery Signals Awaiting Airline Verification

- SFO 2027-03-09 United SFO-MNL nonstop: $524, STRONG WATCH. Missing verification: final total not captured, baggage not confirmed, protected routing not confirmed.

## Historical Fare Analysis

| Origin | Depart | Routing | Current fare | Historical low | Rolling average | Volatility | Increase risk | Future drop probability | Outlook |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
| SFO | 2027-03-08 | SFO-MNL nonstop | $563 | $552 | $674 | 34% | 79% | 21% | buy-window pressure building |
| ORD | 2027-03-10 | ORD-ICN-MNL | $547 | $533 | $648 | 31% | 67% | 27% | mixed |
| SFO | 2027-03-09 | SFO-MNL nonstop | $524 | $509 | $661 | 38% | 36% | 47% | mixed |
| ORD | 2027-03-11 | ORD-SFO-MNL Basic Economy | $519 | $500 | $621 | 43% | 59% | 33% | mixed |
| ORD | 2027-03-12 | ORD-HKG-MNL overnight | $506 | $485 | $608 | 58% | 41% | 64% | better drop odds than immediate buy odds |

- Route-specific historical-low logic is active, so near-low verified nonstop or premium protected itineraries can outrank modestly cheaper but weaker connections.

## Strategic Booking Guidance

- **BOOK**: Philippine Airlines SFO-MNL on 2027-03-08 at $563. airline-direct verified. Route quality 0.85, buy confidence 0.96, volatility 34%, increase risk 79%.
- **STRONG WATCH**: Korean Air ORD-MNL on 2027-03-10 at $547. airline-direct verified. Route quality 0.72, buy confidence 0.84, volatility 31%, increase risk 67%.
- **STRONG WATCH**: United SFO-MNL on 2027-03-09 at $524. discovery only. Route quality 0.85, buy confidence 0.56, volatility 38%, increase risk 36%.
- **WATCH**: United ORD-MNL on 2027-03-11 at $519. airline-direct verified. Route quality 0.68, buy confidence 0.81, volatility 43%, increase risk 59%.
- **LIKELY TO DROP**: Cathay Pacific ORD-MNL on 2027-03-12 at $506. airline-direct verified. Route quality 0.17, buy confidence 0.58, volatility 58%, increase risk 41%.

## Monitoring Operations

### Cadence

- 2026-05-23 to 2026-08-31: weekly. Build route-specific historical ranges and catch early direct-airline sales.
- 2026-09-01 to 2026-09-30: twice weekly. Move from discovery tracking into real buy-window analysis.
- 2026-10-01 to 2026-10-31: three times weekly, then daily when historical-low pricing or high-volatility risk appears. Lock a protected airline-direct fare before the strongest buy window closes.

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

