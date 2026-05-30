# Seattle + Portland Travel Planner

Static interactive itinerary dashboard for a November 1-9, 2026 Seattle and Portland trip. The current target budget is $800 excluding airfare and hotels, with $900 treated as the absolute ceiling for optional splurges.

## Open the Dashboard

Open `dashboards/html/index.html` in a browser.

For normal local testing, run a static server from the project root:

```sh
npm run serve
```

Then open `http://localhost:4173/`.

This project is intentionally static-only, so the same files work:

- locally through a static server or `localserv`
- publicly through a host such as Netlify

## Project Shape

- `data/trip-data.js` stores the itinerary, budget, source links, exclusions, and reference notes.
- `dashboards/html/index.html` is the static dashboard shell.
- `dashboards/css/styles.css` contains the responsive visual design.
- `dashboards/js/app.js` renders tabs, cards, budget summaries, filters, and route links.
- `itinerary/final/` and `research/` are reserved for future deeper research snapshots and exports.
- `docs/rules/` holds the project operating rules, budget constraints, route rules, and QA guidance.
- `tasks/todo.md` is the active work log; `docs/archive/TASKS-legacy.md` is retained only as historical context.

## Verification Note

The dashboard uses sources checked on May 5, 2026. Since the trip is in November 2026, restaurant hours, happy hours, ferry tariffs, sports schedules, and menu prices should be rechecked 30-45 days before travel and again the week of the trip.

## Publishing

See `docs/deployment.md` for public hosting options. Netlify is the recommended path for quickly sharing this static dashboard, especially if connected to a GitHub repository for automatic redeploys.

## Local Workflow

See `docs/local-development.md` for the preferred local static-server workflow and path expectations.

## Repository Hygiene

- Treat iCloud or local files as the source of truth for large binaries, installers, and temporary exports.
- Keep temporary screenshots, review renders, and visual comparison files out of the repo unless they are still needed for active work.
- Avoid committing `.obsidian/workspace.json`; it stores local window state rather than shared project content.

## Automation

See `automation/price-monitoring-workflow.md` for the recurring update workflow covering menu prices, reservations, happy hours, backups, transit fares, routes, and dashboard updates.
