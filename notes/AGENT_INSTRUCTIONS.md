# Agent Instructions — Seattle + Portland Itinerary Project

## Required Behavior

### 1. Verify Before Claiming Completion

- **Never claim a task is complete without testing it.**
- Run `npm run audit:budget` — must show `"status": "ok"` with `$888`
- Run `npm run validate` — all checks must pass
- If verification fails, fix the issue. Do not move forward with a failing state.

### 2. Reconcile Before Updating

- **Do not edit multiple artifacts in parallel.**
- Edit source of truth first: `data/trip-data.js`
- Verify the change via budget/validation
- Regenerate downstream files (calendar JSON/CSV)
- Verify all files match

### 3. Use trip-data.js as Single Source of Truth

- **Never assume a calendar file is more accurate than trip-data.js.**
- Conflicts between trip-data.js and calendar files → trust trip-data.js
- Rebuild calendar exports from trip-data.js when conflicts arise

### 4. Regenerate Downstream Artifacts

- Changes to trip-data.js require regeneration of:
  - `data/google-calendar-events-nov1-9-2026.json` (if costs/titles/times changed)
  - `data/google-calendar-import-nov1-9-2026.csv` (if dates/times changed)
  - Calendar events in the shared Google Calendar (via MCP, if available)
- Do not manually maintain parallel versions

### 5. Do Not Maintain Parallel Itineraries

- **Delete or merge stale data.**
- If an old version exists alongside the new one, reconcile or remove the old one.
- Precedent: H Mart routing (from session 17) was correctly removed during the 2026-05-30 remediation

### 6. Prefer Execution Over Repeated Analysis

- **Do not audit and report without fixing.**
- When you identify a discrepancy, fix it immediately
- When you identify a missing field, populate it
- Only defer action if it's genuinely out of scope (e.g., requires user hotel confirmation)

## Completion Definition

A task is NOT complete until ALL of the following are true:

1. **Source updated:** `data/trip-data.js` reflects the change
2. **Budget validated:** `npm run audit:budget` passes with $888
3. **Calendar files updated:** JSON/CSV exports match the source
4. **Calendar synced:** Shared Google Calendar updated (if write access exists)
5. **Local site verified:** Dashboard reflects the change when running locally
6. **Git site verified:** Production site (Netlify) reflects the change
7. **Documentation updated:** CHANGELOG, TASKS, PROJECT_CONTEXT reflect the change
8. **Memory updated:** SESSION_START and relevant project memory files are current

**Example:** "Add a karaoke stop to Day 3"
- Add the stop to trip-data.js with time, cost, neighborhood, type
- Run `npm run audit:budget` → must pass
- Update calendar JSON + CSV with matching event
- Update Google Calendar (if possible)
- Verify the stop appears on the local dashboard
- Verify it appears on the Netlify site
- Document in CHANGELOG and TASKS
- Update SESSION_START with final state

If ANY step fails, fix it before considering the task done.

## Common Pitfalls

### ❌ Don't Do This

1. **Claim completion after editing trip-data.js without running validation**
   - "I updated the itinerary" ≠ done
   - Done = validation passes + calendar synced + site updated

2. **Assume the calendar is correct if it conflicts with trip-data.js**
   - "The calendar says $30 but trip-data.js says $18"
   - Decision: trip-data.js is authoritative → calendar is wrong → fix calendar

3. **Leave stale documentation after code changes**
   - "I added the karaoke stop" but didn't update CHANGELOG
   - Next session sees the code but no context → confusion

4. **Manually edit calendar files expecting changes to propagate backward**
   - Edit calendar JSON directly
   - Expect trip-data.js to auto-update
   - This will never happen. Always edit the source.

5. **Split work across sessions without handoff notes**
   - Fix part of the itinerary in session 1
   - Assume session 2 will continue correctly
   - Session 2 agent reads SESSION_START which is stale → wasted time

### ✅ Do This

1. **Edit trip-data.js, run validation, regenerate exports, verify end-to-end**
2. **When you find a conflict between files, consult [[PROJECT_MEMORY]] to determine source of truth**
3. **Update documentation the same session you update code**
4. **Before handing off, update `notes/memory/active/SESSION_START.md` with the new state**
5. **If scope expands, re-plan instead of continuing with stale assumptions**

## Scope Rules

- **In scope:** Itinerary changes, budget updates, venue name fixes, calendar sync, doc updates
- **Out of scope:** Flight rebooking decisions (requires user input), hotel confirmation (requires user contact), future-trip itineraries beyond Nov 1-9, 2026

## Questions to Ask Yourself Before Calling a Task Done

1. Does `npm run audit:budget` pass?
2. Does `npm run validate` pass?
3. Did I update the calendar export files?
4. Did I update the shared Google Calendar?
5. Does the local site (http://localhost:4173) reflect the change?
6. Does the production site (Netlify) reflect the change?
7. Did I update CHANGELOG and/or TASKS?
8. Did I update SESSION_START with the final state?

If you can't confidently answer "yes" to all 8, the task is not complete.

## What Success Looks Like

- One source of truth (trip-data.js)
- One itinerary (no conflicting versions)
- One budget ($888)
- One synchronized calendar
- One set of generated outputs
- Full validation passing
- Clear project memory for future sessions
