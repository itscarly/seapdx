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
