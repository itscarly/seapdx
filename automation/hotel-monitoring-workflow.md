# Hotel Monitoring Workflow

Automated direct-site workflow for the Seattle hotel intelligence tracker.

## Scope

- Current target: Seattle hotel stay from Nov 1-4, 2026
- Benchmark booking: Boylston Hotel
- Rule: refundable bookings only
- Rule: compare true total stay cost, not nightly headline rate alone

## Active cadence

- Current band: Monday, Wednesday, Friday at `10:00 AM` America/New_York
- Future band: daily at `10:00 AM` America/New_York from Sep 17 through Oct 31, 2026
- Scope: Seattle stay only, `Nov 1-4, 2026`, `2` guests, refundable direct-site quotes only

## Run mode

Use it when:

- a new direct, OTA, AAA, member, or corporate-eligible quote appears
- cancellation windows move closer
- convention or event demand seems to tighten inventory
- a breakfast-included or upgraded-room option appears near the Boylston price

## Automated check steps

1. Open each hotel's direct booking path and search the exact stay window:
   - check-in `2026-11-01`
   - check-out `2026-11-04`
   - `2` guests
   - refundable rate only
2. Record only the direct-site total stay quote.
3. Update `data/hotel-monitor-source.json`.
2. Update the Seattle watchlist fields that changed:
   - exact quote scope for the hotel check:
     - check-in `2026-11-01`
     - check-out `2026-11-04`
     - `3` nights
     - `2` guests
   - nightly rates
   - taxes
   - mandatory fees
   - cancellation deadline
   - breakfast or perk flags
   - review or quality notes
   - transit or market-signal notes if they materially changed
3. Update `meta.automation.lastAutomatedCheckAt` and `meta.automation.lastAutomatedSummary`.
4. Run `npm run build:hotels`.
5. Run `npm run validate:hotels`.
6. Open `dashboards/html/hotels.html` through the local static server and confirm:
   - benchmark totals still render
   - ranked alternatives populate
   - excluded hotels still show their rejection reasons
   - Portland section still stays scaffold-only until its cap is supplied
7. If the report meaningfully changed, update `notes/Project Log.md`.

## Monitoring cadence standard

- More than 180 days out: weekly
- Inside 120 days: 2-3 times weekly
- Inside 45 days: daily
- Increase frequency around flash sales, convention compression, and cancellation-window churn

## Alert triggers

- savings of at least `$40`
- same-price option with stronger transit score
- breakfast becomes included
- better room type appears
- materially better transit or luggage convenience
- cancellation deadline is approaching
- OTA or member price materially undercuts the current held booking

## Safety rules

- Never replace a held refundable booking with a non-refundable rate.
- Never recommend a hotel solely on nightly rate if the total stay cost is worse.
- Never use a quote unless it was checked against the exact stay window `Nov 1-4, 2026` for `2` guests.
- Reject outdated, weak-sounding, or low-cleanliness options even when they look cheap.
- Treat this tracker as advisory until the live quote is rechecked during booking.
