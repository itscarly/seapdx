# Lessons

## 2026-05-17

### Symptom

- The user still had to ask whether note and workflow updates really happened after changes.

### Root cause

- The implementation work landed faster than the active notes and workflow docs were being reconciled.
- Some files still described an older Netlify-first or generic-itinerary state even after the project had moved to GitHub Pages fallback and exact calendar blocks.

### Fix

- Update active notes, scratch task files, deployment docs, and project rules in the same pass as the implementation change.
- Remove stale host assumptions and vague itinerary language instead of leaving them beside the new state.

### Prevention rule

- After meaningful changes, do one repo-wide stale-state pass:
  - source data
  - active notes
  - deployment docs
  - task scratch files
  - handoff log
- Do not stop at `Project Log` only when the change also affects public hosting, operating rules, or source-of-truth structure.

## 2026-05-24

### Symptom

- A hotel watch run overwrote the held reservation benchmark with a newly observed public quote.

### Root cause

- The refresh treated `currentReservation` like a comparison target instead of a locked booked benchmark.
- I updated Boylston's live quote into `trueTotalCost` without respecting that the user wanted comparisons against the booked price.

### Fix

- Restore Boylston's benchmark to the booked total and keep newer public quotes in `priceVerification` and notes only.

### Prevention rule

- When `currentReservation` is an already booked hotel, keep `trueTotalCost` anchored to the booked benchmark unless the user explicitly asks to replace it.
- Use watchlist hotels for market comparisons; store rechecked public quotes for the held hotel as reference, not as the benchmark.
