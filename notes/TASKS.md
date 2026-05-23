# Tasks

## Purpose

This is the active task summary for humans and agents.

It should stay shorter and cleaner than raw implementation scratch notes.

## Current active work

- Keep the Seattle and Portland itinerary current as prices, hours, and transit assumptions change.
- **Hotel monitor**: Keep watching for a refundable sub-$400 option near King Street Amtrak or Link Light Rail. Boylston is confirmed at $384.13 — hold unless a materially better option appears.
- **PAL Award Tax Monitor**: Check PAL.com weekly for tax changes on SFO→MNL (currently $370.50) and ORD→MNL (currently $375.50). When tax changes, add a new entry to `taxHistory` in `data/airfare-watch.json` and update `currentTax` and `lastChecked`.
- Keep the local dashboard verified after meaningful data or UI edits.
- Keep the note system reconciled so active guidance stays current.

## Completed 2026-05-23 (session 2)

- Locked in Boylston confirmed reservation (RES ID [redacted], $384.13 total) as hotel benchmark.
- Added `monitoringCriteria` block with King Street Amtrak / Link Light Rail transit priority and switch triggers.
- Replaced cash-fare airfare tracker with PAL Award Tax Monitor (SFO→MNL 58k mi + $370.50; ORD→MNL 67k mi + $375.50).
- Rewrote airfare.html and airfare.js for the new award tax monitor UI with sparklines, color-coded change pills, and history table.
- Pushed all changes to GitHub — GitHub Pages now reflects current state.

## Completed 2026-05-23 (session 1)

- Applied dark premium UI theme to both tracker pages — navy-black background, gold/teal/blue accents, glassy cards.
- All hotel cards now show clickable direct booking links with cancellation deadline info.
- Confirmed local server launchd agent is active at [localhost:4173](http://localhost:4173/).
- Validation passed: 5/5 airfare tests, hotel monitor ok, budget ok.
- The `docs/2026-05-23-airfare-ui-continuation.md` brief is now superseded — its goals are done.

## Task sync rule

After meaningful completed work:

- mark completed items clearly
- remove invalid tasks from the active list
- move stale task context to `notes/memory/archive/` when it still matters historically

For implementation scratch tracking, the repo may still use `tasks/todo.md`, but this file should reflect the cleaned current state.
