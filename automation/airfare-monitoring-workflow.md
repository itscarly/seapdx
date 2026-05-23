# Enterprise Airfare Monitoring Workflow

## Goal

Track one-way economy fares from `SFO` or `ORD` to `MNL` for departures from March 7-13, 2027, then issue booking guidance only when the fare has been verified on the airline's own checkout flow.

## Scope Rules

- Passenger: one adult.
- Cabin: economy only.
- Origins: `SFO` and `ORD` only for this version.
- Booking rule: airline-direct only.
- Protected one-ticket itineraries are preferred.
- Basic Economy or similarly restrictive fare classes cannot receive `BOOK` or `STRONG BOOK`.
- Discovery sites such as Google Flights, Skyscanner, and KAYAK may surface leads, but they never count as booking proof.

## Recommendation States

- `STRONG BOOK`
- `BOOK`
- `STRONG WATCH`
- `WATCH`
- `WAIT FOR DROP`
- `LIKELY TO DROP`
- `HIGH RISK OF INCREASE`
- `LOW CONFIDENCE`

## Mandatory Verification Checks

Every shortlisted itinerary must verify:

- final payment-page total
- fare class
- baggage allowance
- carry-on policy
- seat-selection limits
- cancellation rules
- change penalties
- protected-routing status
- airport-transfer requirement
- transit-visa requirement
- self-transfer risk

## Evidence To Store

For every meaningful checked fare, store:

- `checkedAt`
- `verificationStatus`
- `directAirlineFare`
- `fareClass`
- `baggageIncluded`
- `carryOnPolicy`
- `seatRestrictionNotes`
- `changePenaltyNotes`
- `cancellationPolicyNotes`
- `protectedRouting`
- `airportTransferRequired`
- `transitVisaRisk`
- `selfTransferRisk`
- `verifiedTimestamp`
- `verificationEvidence.checkoutTimestamp`
- `verificationEvidence.pricingSnapshot`
- `verificationEvidence.fareRulesSummary`
- `verificationEvidence.routeValidationNotes`

## Monitoring Cadence

- Weekly through August 31, 2026.
- Twice weekly during September 2026.
- Three times weekly during October 2026.
- Escalate to daily checks when:
  - a verified fare lands within roughly `$25` of the route-specific historical low
  - volatility rises above `60%`
  - a flash sale appears
  - the system shifts to `HIGH RISK OF INCREASE`

## Operating Flow

1. Discover candidate fares across the March 7-13, 2027 departure window.
2. Reject obvious non-starters early: third-party-only booking paths, self-transfers, airport changes, unclear baggage pricing, or extreme timing structures.
3. Open the airline website for every finalist.
4. Verify final payment-page total and all fare-rule fields.
5. Confirm route integrity: protected ticket, visa exposure, airport-transfer requirement, and baggage-transfer simplicity.
6. Score itinerary quality and historical context in `data/airfare-watch.json`.
7. Run `npm run monitor:airfare`.
8. Run `npm run validate:airfare`.
9. Recommend `BOOK` or `STRONG BOOK` only when all direct-verification gates are satisfied.

## Quality Bias

- Prefer SFO-MNL nonstop first.
- Then prefer one-stop premium Asian carriers with protected routing.
- Then prefer short efficient layovers and stable operational carriers.
- Penalize overnight waits, weak reliability, airport changes, self-transfers, and visa-sensitive transits.

## Safety Rules

- Never recommend an unverified aggregator fare as bookable.
- Never hide self-transfer or visa risk.
- Never let a restricted fare family become a buy state.
- Keep discovery signals and verified fares visibly separate in both the dashboard and report.
