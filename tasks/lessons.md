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

## 2026-06-27 (Calendar rebuild session)

### Symptom

- Calendar had stale activities (Smith Tower, NEKO Cat removed in plan but still in calendar), missing activities (Best Buy Meta Glasses not on calendar), and wrong date placements (Day 6-7 activities placed on wrong dates).
- Multiple attempts to fix incrementally (delete duplicates, add descriptions, fix dates) resulted in more complexity and wasted tokens.
- User had to repeatedly ask for clarification when the plan was already stated ("go back to the plan").

### Root cause

1. **Trusted stale calendar over authoritative source:** Calendar was from old trip-data.js snapshot; current trip-data.js (finalized June 27) had removals and different structure, but I didn't catch this mismatch until user pointed out old activities still showing.
2. **Asked clarifying questions when user had already stated the answer:** User said "go back to the plan" and "compare to what we discussed" but I kept asking which version to use instead of just using trip-data.js.
3. **Patched incrementally instead of rebuilding:** When calendar had multiple errors (duplicates, wrong dates, missing descriptions), tried to fix one by one instead of recognizing the state was too broken to patch.
4. **Didn't verify date placement carefully enough:** Created events on Nov 6-7-8 but activities were from different day indices, causing "Day 6 activities on Day 5" type errors.

### Fix

1. **Identified trip-data.js as authoritative (finalized June 27):** Confirmed via Project Log that trip-data.js was the final version, not the calendar.
2. **Stopped asking which version to use:** When user says "go back to the plan," use trip-data.js. No ambiguity questions.
3. **Rebuilt calendar clean instead of patching:** Deleted all 100 events, started fresh, created 102 new events with correct dates, rich descriptions, no overlaps.
4. **Verified date placement before creating:** Mapped Day 1 = Nov 1, Day 5 = Nov 5 (Amtrak transition), Day 7 = Nov 7 (Powell's), Day 8 = Nov 8 (Saturday Market), etc.
5. **Added rich descriptions to every event:** Each event now includes Purpose | Cost | Links | What to order | Skip | Continuity from trip-data.js.

### Prevention rules

1. **When user says "go back to the plan," use trip-data.js without asking which version.** The plan is authoritative. Calendar is not.
2. **When calendar state is too broken (duplicates + wrong dates + missing data), delete and rebuild clean instead of patching incrementally.** Piecemeal fixes create more chaos.
3. **Verify date placement explicitly before creating calendar events.** Map day indices to dates (Day N = Nov N) and confirm no off-by-one errors.
4. **Don't ask clarifying questions the user has already answered.** If they say "we already discussed this," assume the answer is in trip-data.js or earlier notes. Search there first.
5. **Stop adding complexity with agents/updates when the root is simpler:** In this case, the fix was "delete everything, rebuild from authoritative source" not "fix duplicates, add descriptions, change dates."

## 2026-06-27

### Symptom

- The user said Portland shared-calendar work still looked unfinished because the visible event popups did not match the richer Seattle example.

### Root cause

- I treated title cleanup and partial description cleanup as "close enough" even though the acceptance bar was the live Google Calendar popup format itself.
- I also failed to re-check the all-day Portland headline rows for stale wording after fixing individual stops.

### Fix

- Rewrite the live shared-calendar event bodies in the richer format with `Purpose`, `Estimated cost`, links, `What to order` or `What to do`, `Skip`, and `Continuity`.
- Audit the all-day header rows and route/location labels in the same pass.

### Prevention rule

- For shared-calendar remediation, do not say a block is done until the live popup body matches the reference format the user showed.
- Verify both stop-level events and day-level headline rows before calling the calendar pass complete.
