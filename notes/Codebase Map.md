---
title: Codebase Map
tags:
  - project/codebase
  - obsidian
---

# Codebase Map

This is the working map for the `SeaPdx` static trip dashboard.

## Start points

- [[Home]]
- [[PROJECT_CONTEXT]]
- [[ARCHITECTURE]]
- [[Project Files]]
- [[TASKS]]
- [[Project Log]]

## Runtime files

| Path | Purpose |
| --- | --- |
| `data/trip-data.js` | Source of truth for itinerary, costs, flights, hotels, stop metadata, and calendar export content. |
| `dashboards/html/index.html` | Public trip dashboard. |
| `dashboards/html/logistics.html` | Utility/logistics hub. |
| `dashboards/css/styles.css` | Shared visual system and dashboard layout. |
| `dashboards/js/app.js` | Client-side rendering, filters, budget UI, routes, and dashboard behavior. |
| `dashboards/assets/images/` | Subject-verified stop and place images used by the dashboard. |

## Project commands

| Command | Use |
| --- | --- |
| `npm run serve` | Preview the static site at `http://127.0.0.1:4173/dashboards/html/index.html`. |
| `npm run validate` | Run the standard verification chain after itinerary or dashboard JavaScript changes. |
| `npm run sync:calendar` | Regenerate local Google Calendar JSON/CSV export files. |
| `npm run session-status` | Print the current handoff/status summary. |

## Notes structure

| Folder | Use |
| --- | --- |
| `notes/` | Obsidian-facing project memory and handoff notes. |
| `notes/memory/active/` | Active facts, feedback, and current-state notes. |
| `notes/session-start/` | Session digest notes for startup context. |
| `notes/queries/` | Saved Obsidian queries. |
| `notes/templates/` | Reusable note templates. |
| `docs/rules/` | Project rules split into focused reference files. |

## Update rule

For meaningful verified work, update only the affected standardized note plus [[Project Log]]. Keep duplicate or stale guidance reconciled instead of adding another competing note.
