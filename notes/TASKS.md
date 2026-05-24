# Tasks

## Purpose

This is the active task summary for humans and agents.

It should stay shorter and cleaner than raw implementation scratch notes.

## Current active work

- Keep the Seattle and Portland itinerary current as prices, hours, and transit assumptions change.
- **Hotel prices**: Run `npm run scrape:hotels` to auto-scrape all direct hotel sites via Playwright. Where scraping fails (Cloudflare-blocked), manually update `trueTotalCost` in `data/hotel-monitor-source.json`.
- **Seattle**: Alert threshold $400. Boylston confirmed $384.13 (RES [redacted]) — hold unless a refundable direct quote under $400 appears.
- **Portland**: Alert threshold $620. Hotel Vance confirmed $628.46 (conf# [redacted]) — hold unless challenger comes in under $620.
- **PAL Award Tax Monitor**: Now scraped via Playwright. Cadence: weekly Mon (now–Aug), 2×/week Mon+Thu (Sep), 3×/week Mon+Wed+Fri (Oct), stops Nov 1. Current taxes: SFO→MNL $370.50, ORD→MNL $375.50.
- Keep note system reconciled after meaningful work.

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
