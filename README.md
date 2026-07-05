# Seattle + Portland Travel Planner

Static travel-planning dashboard for a November 1-9, 2026 Seattle and Portland trip. The project is intentionally static-first: one shared HTML/CSS/JS/data codebase powers local preview, GitHub Pages, and other simple static hosts.

## Live site

- GitHub Pages: [limcarl83-maker.github.io/my_projects](https://limcarl83-maker.github.io/my_projects/)
- Dashboard entry: [dashboards/html/index.html](https://limcarl83-maker.github.io/my_projects/dashboards/html/index.html)
- Logistics hub: [dashboards/html/logistics.html](https://limcarl83-maker.github.io/my_projects/dashboards/html/logistics.html)

## Current trip snapshot

- Local trip-spend target: `$1,250`
- Current local projection: `$1,241.50`
- Local ceiling: `$1,300`
- Confirmed airfare: `$1,256.83`
- Confirmed hotels: `$895.46`
- Planned personal purchases: `$582`
- All-in savings target: derived from confirmed bookings + planned trip spend + planned purchases

## What is in this repo

- `data/trip-data.js`: itinerary source of truth, budget numbers, venue links, route context, and guide content
- `dashboards/html/index.html`: main public trip command center
- `dashboards/html/logistics.html`: flight-detail and utility page
- `dashboards/css/styles.css`: shared visual system and responsive layout rules
- `dashboards/js/app.js`: dashboard rendering, filters, panels, cards, map blocks, and itinerary behavior
- `scripts/`: validation, budget audit, calendar export sync, monthly watch, and note-maintenance helpers
- `notes/`: shared project notes for Codex, Claude, and Obsidian, stored as plain markdown files

## Local development

From the project root:

```sh
npm run serve
```

Then open [http://localhost:4173/](http://localhost:4173/).

Useful companion commands:

```sh
npm run validate
npm run sync:calendar
npm run review:monthly
```

See [docs/local-development.md](/Users/kicker/Downloads/codexproject/docs/local-development.md) for the full local workflow.

## Publishing

GitHub Pages is the canonical public host for this repo. The `main` branch triggers:

- `validate.yml`: syntax + budget + calendar export regression check
- `deploy-pages.yml`: GitHub Pages deploy
- `git-integrity-check.yml`: system-file and git-health audit
- `monthly-watch.yml`: monthly review artifact generation

See [docs/deployment.md](/Users/kicker/Downloads/codexproject/docs/deployment.md) for the release and hosting notes.

## Operational rules

- Keep the project static-first. Do not add a backend requirement for normal use.
- Treat `data/trip-data.js` as the canonical itinerary and cost source.
- Commit accepted UI/data changes together with the note updates that explain them.
- Keep local editor state, screenshots, cache files, and macOS metadata out of the repo.
- Use `npm run validate` before pushing user-accepted changes.

## Verification note

The dashboard uses planning sources checked earlier in the year. Because the trip is in November 2026, restaurant hours, happy hours, ferry fares, sports schedules, and menu prices should be rechecked 30-45 days before travel and again during the final trip week.

## Automation

The active automation is the monthly baseline watch for itinerary prices, menus, schedules, and Kraken availability. The old airfare, hotel, and itinerary monitor stack is retired.
