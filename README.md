# Seattle + Portland Travel Planner

Static interactive itinerary dashboard for a November 1-9, 2026 Seattle and Portland trip. The current local trip-spend target is `$1,250`, the current local projection is `$1,236.50`, and the all-in savings target is derived from confirmed bookings + planned trip spend + planned purchases.

## Open the Dashboard

Open `dashboards/html/index.html` in a browser.

For normal local testing, run a static server from the project root:

```sh
npm run serve
```

Then open `http://localhost:4173/`.

This project is intentionally static-only, so the same files work:

- locally through a static server or `localserv`
- publicly through GitHub Pages and other static hosts

## Project Shape

- `data/trip-data.js` stores the itinerary, budget, source links, exclusions, and reference notes.
- `dashboards/html/index.html` is the static dashboard shell.
- `dashboards/css/styles.css` contains the responsive visual design.
- `dashboards/js/app.js` renders tabs, cards, budget summaries, filters, and route links.
- `notes/` is the shared handoff and memory layer for Codex, Claude Code, and Obsidian.
- `docs/rules/` holds the project operating rules, budget constraints, route rules, and QA guidance.
- `tasks/todo.md` is the active work log.

## Verification Note

The dashboard uses sources checked on May 5, 2026. Since the trip is in November 2026, restaurant hours, happy hours, ferry tariffs, sports schedules, and menu prices should be rechecked 30-45 days before travel and again the week of the trip.

## Publishing

See `docs/deployment.md` for public hosting options. This repo currently uses GitHub-backed publishing plus validation workflows, so local accepted site changes should be committed and pushed in the same pass to keep the public copy identical.

## Local Workflow

See `docs/local-development.md` for the preferred local static-server workflow and path expectations.

## Repository Hygiene

- Treat iCloud or local files as the source of truth for large binaries, installers, and temporary exports.
- Keep temporary screenshots, review renders, and visual comparison files out of the repo unless they are still needed for active work.
- Keep `.obsidian` working-state files local. The repo should store project notes, not personal window state or plugin cache.

## Automation

The active trip automation is the monthly baseline watch for itinerary prices, menus, and schedules. The old airfare, hotel, and itinerary monitor workflows are retired.
