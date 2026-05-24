# Tasks

## Purpose

This is the active task summary for humans and agents.

It should stay shorter and cleaner than raw implementation scratch notes.

## Current active work

- Keep the Seattle and Portland itinerary current as prices, hours, and transit assumptions change.
- **Seattle hotel monitor (automated)**: GitHub Actions checks Tue/Fri through Aug, weekly Sep, daily Oct+. Alert threshold $400. Boylston confirmed at $384.13 — hold unless a refundable direct quote under $400 appears.
- **Portland hotel monitor (automated)**: Same GitHub Actions workflow. Alert threshold $620. Hotel Vance confirmed at $628.46 (conf# [redacted]). 7 challenger hotels in watchlist — prices need manual first-capture via direct booking URLs, then the monitor tracks changes.
- **PAL Award Tax Monitor (automated)**: GitHub Actions runs weekly Mon through Aug, Mon/Wed/Fri Sep, daily Oct 2026 (final month), HARD STOP after Oct 31. Must book SFO or ORD→MNL by Oct 31, 2026. Current taxes: SFO→MNL $370.50, ORD→MNL $375.50.
- **Portland hotel prices need first capture**: Open each watchlist hotel's direct booking URL for Nov 4–9 2026, verify total price, update `trueTotalCost` and `reviewScore` in `data/hotel-monitor-source.json`. Once entered, the monitor will track changes automatically.
- Keep the local dashboard verified after meaningful data or UI edits.
- Keep the note system reconciled so active guidance stays current.

## GitHub Secrets needed for email alerts

Ensure these are set in the repo's GitHub Actions secrets for email notifications to fire:
- `RESEND_API_KEY` — Resend API key
- `ALERT_EMAIL_TO` — limcarl83@gmail.com
- `ALERT_FROM` — sender address

## Completed 2026-05-23 (session 2)

- Locked in Boylston confirmed reservation (RES ID [redacted], $384.13 total) as hotel benchmark.
- Added `monitoringCriteria` block with King Street Amtrak / Link Light Rail transit priority and switch triggers.
- Replaced cash-fare airfare tracker with PAL Award Tax Monitor (SFO→MNL 58k mi + $370.50; ORD→MNL 67k mi + $375.50).
- Rewrote airfare.html and airfare.js for the new award tax monitor UI with sparklines, color-coded change pills, and history table.
- Pushed all changes to GitHub — GitHub Pages now reflects current state.

## Completed 2026-05-23 (session 1)

- Applied dark premium UI theme to both tracker pages — navy-black background, gold/teal/blue accents, glassy cards.
- All hotel cards now show clickable direct booking links with cancellation deadline info.
- Validation passed: 5/5 airfare tests, hotel monitor ok, budget ok.
- The `docs/2026-05-23-airfare-ui-continuation.md` brief is now superseded — its goals are done.

## Task sync rule

After meaningful completed work:

- mark completed items clearly
- remove invalid tasks from the active list
- move stale task context to `notes/memory/archive/` when it still matters historically

For implementation scratch tracking, the repo may still use `tasks/todo.md`, but this file should reflect the cleaned current state.
