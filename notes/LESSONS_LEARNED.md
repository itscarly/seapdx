# Lessons Learned — Codex Remediation Session

## What Codex Got Right

1. **Boylston as Seattle base** — Correctly identified and prioritized; removed competing Reside/Palihotel routing ✓
2. **Courtyard as Portland base** — Locked in early; marked Hotel Vance for cancellation ✓
3. **Budget math** — All 9 day totals correct, sum matches $888, within cap ✓
4. **Named venues in trip-data.js** — Added specific restaurants and attractions (Rock Box, Lan Su, Eem, Grassa, Powell's, MadeHere, Big Legrowlski) ✓
5. **Amtrak reservation** — Captured reservation number 29CB3A-17MAY26 correctly ✓
6. **9-day structure** — Created 9 complete day objects with morning/afternoon/evening segments ✓

## What Codex Missed or Left Incomplete

1. **Calendar export overnight date bug** — 8 overnight sleep blocks had same-day end times (wrong). Google Calendar import would fail. Codex did not verify this structural issue.

2. **Duplicate event names** — Day 5 had two items both named "Analog Coffee + QFC train snacks" (meal vs. walk, different activities). Not caught or fixed.

3. **Wrong activity name on Day 9** — Reused Seattle café name for Portland departure breakfast. Semantically wrong; not fixed.

4. **Activity type mismatches** — 4 free outdoor walks (Fremont loop, Ballard explore, Winslow, Capitol Hill orientation) were typed `activity` instead of `walk`. Icon/categorization would be wrong in the UI.

5. **Geographic mismatch Day 8** — Powell's + MadeHere Pearl reset placed in Mississippi afternoon block (wrong neighborhood). Not caught.

6. **Transit direction confusion Day 8** — "North Portland → Cubo de Cuba" contradicted the neighborhood field "Alberta → Mississippi" (opposite direction). Not clarified.

7. **Generic Portland titles in calendar** — Many dinner/lunch blocks use "Dinner" or "Lunch near downtown" in calendar JSON/CSV, but trip-data.js has specific venues (Fuller's, Luc Lac, Grassa). No alignment.

8. **Blank projected total in 3 docs** — Budget was "rebalanced" but the $888 value was never written into TASKS, CHANGELOG, PROJECT_CONTEXT. Left incomplete.

9. **Duplicate source URL** — "Coava locations" appeared twice in sources array. Not cleaned up.

10. **No end-to-end verification** — Codex claimed "92% complete" and "validation passed" without actually verifying that the calendar export files could be imported into Google Calendar (the overnight date bug would cause import failure).

## Root Causes of Drift

### 1. **Multiple Artifact Maintenance Without Synchronization**

The project has 4 representations of the itinerary:
- trip-data.js (source)
- google-calendar-events-nov1-9-2026.json (export)
- google-calendar-import-nov1-9-2026.csv (export)
- Live Google Calendar (via MCP)

When trip-data.js changed, the calendar exports were not regenerated. Result: trip-data.js had "Last Capitol Hill walk" but the calendar JSON still said "Analog Coffee + QFC train snacks". Each file drifted independently.

**Prevention:** Whenever trip-data.js changes, immediately regenerate calendar exports. Treat them as derived artifacts, not independent sources.

### 2. **Incomplete Verification Before Declaring Done**

Codex ran `npm run validate` which only checks syntax and budget math — it does NOT import the calendar files or verify they would work with Google Calendar. The overnight date bug only surfaced when someone actually tried to import.

**Prevention:** Validation must include structural checks (overnight blocks must end next day), not just arithmetic.

### 3. **No End-to-End Testing**

Codex never asked: "Will a user be able to import this CSV into Google Calendar?" If it had tried, the date bug would have been caught immediately (Google Calendar would reject malformed events).

**Prevention:** For any calendar-related change, actually test the import.

### 4. **Inherited Stale Naming From Earlier Sessions**

"Analog Coffee + QFC train snacks" was named in session 5 (for the Seattle departure day) and reused verbatim on Day 9 (a Portland breakfast). Neither Codex nor the earlier agent questioned why a Seattle café name appeared for Portland. The name was just copy-pasted.

**Prevention:** Treat copy-paste as a red flag. Verify the context matches.

### 5. **Activity Type Mismatches Not Caught**

The UI icon for a free outdoor "Fremont walking loop" should say "walk," not "activity." This is a semantic error that affects the user's mental model of the day. Codex didn't check the `type` field consistency.

**Prevention:** Validate that `type` field matches the activity: free outdoor = `walk`, paid entry = `activity`, meals = `meal`, transit = `transit`, hotel/rest = `rest`.

### 6. **No Spatial Consistency Check**

Day 8: "Powell's + MadeHere Pearl reset" is in the Mississippi afternoon block, but Powell's and MadeHere are in the Pearl District (downtown), not Mississippi. This is a geographic error.

**Prevention:** Before committing, verify that activity names match their neighborhood fields. If they don't, either rename the activity or correct the neighborhood.

## Prevention Rules for Future Sessions

### Rule 1: Single Source of Truth

`data/trip-data.js` is authoritative. Calendar files are derived. When conflict arises, trust trip-data.js.

### Rule 2: Regenerate Downstream on Every Source Change

If you edit trip-data.js, you MUST regenerate:
- google-calendar-events-nov1-9-2026.json
- google-calendar-import-nov1-9-2026.csv
- Live Google Calendar (if MCP available)

Do not assume old exports are still valid.

### Rule 3: Validate the Full Pipeline

Running `npm run validate` is necessary but not sufficient. Also:
- Check overnight block dates manually (end must be next day)
- Verify activity names match neighborhoods
- Ensure no duplicate names within a day
- Confirm all types are semantically correct (walk vs. activity vs. meal)

### Rule 4: Test Imports

For any calendar change, actually test importing the CSV into Google Calendar. Don't just assume it will work.

### Rule 5: Semantic Consistency

Before declaring complete:
- Does the activity name match the location/neighborhood?
- Does the type field match the activity? (free outdoor walk = "walk", not "activity")
- Are there any suspicious name duplicates?
- Are there any Seattle-specific names appearing for Portland days?

### Rule 6: Document Changes Same Session

Do not leave blanks in the changelog. Fill in "projected total: $888" the same moment you update the budget. Do not defer documentation.

### Rule 7: Reconcile Before Declaring Complete

Take 2 minutes to compare:
- trip-data.js vs. calendar JSON
- Calendar JSON vs. CSV
- CSV vs. Google Calendar

If anything doesn't match, fix it before moving on.

## Recommendations for Future Work

1. **Create a calendar sync script** — Instead of manually editing JSON + CSV, write a JS script that reads trip-data.js and generates both calendar files. Eliminates copy-paste errors.

2. **Add CSV import validation to npm run validate** — Read the CSV, check for malformed dates, verify overnight blocks, report errors.

3. **Add semantic checks to budget audit** — Verify that activity types match their semantic meaning (free walk should be "walk", paid entry should be "activity", etc.)

4. **Update SESSION_START after every session** — Make this part of the definition of done. Future agents read SESSION_START first; if it's stale, they waste time.

5. **Link [[PROJECT_MEMORY]] and [[AGENT_INSTRUCTIONS]] in all notes** — Make clear what the source of truth is and what the verification process must be.

## Summary

**What Codex demonstrated:** Large-scale itinerary work is possible; Codex can add 90 events and sync budgets effectively.

**What Codex overlooked:** Derivative artifacts (calendar files) can drift from the source if not regenerated; structural validation (date fields) is separate from arithmetic validation (budget math); end-to-end testing catches errors that static checks miss.

**The fix:** Treat calendar files as code-generated, not hand-maintained. Regenerate them every time the source changes. Add structural validation. Test imports before declaring done.

**For future agents:** Use [[PROJECT_MEMORY]] and [[AGENT_INSTRUCTIONS]] as your guide. The completion checklist is in AGENT_INSTRUCTIONS. If you complete fewer than all 8 items, the task is not done yet.
