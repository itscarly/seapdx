# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Seattle + Portland Travel Planner** is a static travel-planning dashboard for November 1-9, 2026. The codebase is intentionally static-first: one shared HTML/CSS/JS/data foundation powers local preview, GitHub Pages, and simple static hosts. No backend required for normal use.

**Live site:** https://itscarly.github.io/seadpdx/

## Key Development Commands

See `package.json` scripts for the full list.

**Before pushing:** Run `npm run validate` to catch syntax errors, budget mismatches, and calendar export regressions.

## Codebase Structure

### Data Layer
- **`data/trip-data.js`** — The canonical source of truth for itinerary, budget, costs, and trip metadata. Global `window.TRIP_DATA` object. Includes:
  - Meta (title, dates, base hotels, verification status, assumptions)
  - Budget (category breakdown with amounts)
  - Trip costs (confirmed airfare, hotels; planned purchases; online purchases)
  - Itinerary (9 days, each with segments—each segment has items with costs)
  - Verification summary (checks on flights, transit, activities)
  - References (maps, visuals, guides, transit routes)

### Dashboard Layer
- **`dashboards/html/index.html`** — Main public trip command center. Renders hero, executive summary, budget cards, itinerary, guides, maps, and flight details.
- **`dashboards/html/logistics.html`** — Secondary page: flight details and utilities.
- **`dashboards/css/styles.css`** — Shared visual system, layout, typography, responsive rules. System fonts only. Editorial, compact, calm design.
- **`dashboards/js/app.js`** — Rendering logic: loads trip-data.js, renders sections, handles filters/panels/map blocks/itinerary expand behavior, FX rate fetching, local storage for customizations.

### Automation & Scripts
- **`scripts/audit-budget.js`** — Validates day totals match segment item sums. Catches cost mismatches.
- **`scripts/sync-calendar-exports.js`** — Syncs Google Calendar exports into verification summary format.
- **`scripts/monthly-review-report.js`** — Generates checklist of venues to reverify (hours, prices, schedules).
- **`scripts/monthly-watch-check.js`** — Monitors baseline.json itinerary against live URLs for material changes.
- **`scripts/session-status.js`** — Prints spend status, notes health, and outstanding items.
- **`scripts/stamp-last-updated.js`** — Timestamps trip-data.js verifiedOn field.

### Project Documentation
- **`notes/Home.md`** — Obsidian entry point (maps to GitHub Pages root).
- **`notes/Project Log.md`** — Chronological session log.
- **`notes/ARCHITECTURE.md`** — Design patterns and module boundaries.
- **`notes/PROJECT_CONTEXT.md`** — Trip scope, dates, travelers, constraints.
- **`notes/CHANGELOG.md`** — Major feature/cost/itinerary changes.
- **`docs/local-development.md`** — Full local workflow (includes localhost setup).
- **`docs/deployment.md`** — GitHub Pages CI/CD, release process.
- **`DESIGN.md`** — Design system rules: hierarchy, compaction, typography, color, cards, layout by section.

## Data Integrity Rules

1. **`trip-data.js` is the source of truth** — All itinerary, budget, and cost updates start here. Never edit the dashboard or notes to override it.
2. **Day totals must match segment sums** — `npm run audit:budget` enforces this. Run before committing cost changes.
3. **Commit data and notes together** — When changing costs or itinerary, update trip-data.js in the same commit as the explanatory note in `Project Log.md` or `CHANGELOG.md`.
4. **Keep `verifiedOn` current** — Timestamp should reflect the last time trip-data.js was verified against live sources (flights, hotels, restaurant hours, etc.). Use `npm run stamp:updated`.

## Design System Reference

See `DESIGN.md` for visual principles. Key guidelines:
- **Hierarchy:** Hero and executive summary first; itinerary, guides, maps secondary.
- **Compaction:** Remove wasted height; prefer tighter padding and smaller labels over hiding content.
- **Typography:** System fonts, bold hero headlines, strong section headings, slightly tightened supporting copy.
- **Color:** Light editorial background; blue (primary action), teal, warm orange (supporting). Do not redesign palette without explicit request.
- **Cards:** One disciplined family with subtle borders, soft shadows, rounded corners. Primary cards slightly more padding; secondary cards lighter and shorter.

## Verification & QA

- **30-45 days before trip:** Recheck restaurant hours, happy hours, ferry fares, sports schedules, menu prices against live sources.
- **Final trip week:** Reverify critical itinerary items (flight times, hotel confirmations, transit schedules).
- Use `npm run review:monthly` to generate the full verification checklist.

## Notes & Memory

Start with `notes/Home.md` for Obsidian context, then read deeper notes only when needed. Key files:
- `PROJECT_CONTEXT.md` — Trip scope and travelers.
- `ARCHITECTURE.md` — Code structure and patterns.
- `MAINTENANCE.md` — Operational checklist.
- `KNOWN_ISSUES.md` — Outstanding bugs or tech debt.

Global memory (Claude, Codex, Obsidian shared) is in `notes/memory/`. Session-specific state is in `notes/memory/active/SESSION_START.md`.

For meaningful verified work: update only affected standardized notes and `Project Log.md`. Reconcile stale guidance; archive superseded history; do not create duplicate handoffs or boilerplate notes.

## Project Constraints

- **Static-first:** No backend for normal operation.
- **GitHub Pages host:** Default public deploy.
- **Node.js ≥20** required.
- **Playwright** for E2E testing if automation tests are added.
- **Trip dates:** November 1-9, 2026 (Seattle + Bainbridge + Portland).
- **Budget ceiling:** $3,050 (still-to-spend). Confirmed airfare and hotels excluded from cap.

## Model Routing

Follows the global hard rule in `~/.claude/rules/ecc/common/performance.md`: planning starts on Sonnet 5, execution runs on Haiku 4.5 (or lower), Opus/Fable only on explicit user request. No project-level override.

See `~/.claude/projects/-Users-kicker/memory/codexproject_model_routing.md` for prior examples.

## Persistent Dev Server (LOCKED RULE)

**Status:** Active, running 24/7 at `http://127.0.0.1:4173/`  
**Auto-restart:** Every 5 seconds if process dies  
**Boot:** Starts automatically on system restart via LaunchAgent  
**Deploy:** `git push origin main` → GitHub Pages (CI auto-deploys)  

Daemon script: `/Users/kicker/Projects/codexproject/dev-server-daemon.sh`  
LaunchAgent: `/Users/kicker/Library/LaunchAgents/com.kicker.codexproject-dev-server.plist`

See `~/.claude/projects/-Users-kicker/memory/codexproject_dev_server_setup.md` for full details.

## Global Defaults

Safety, memory, and tool defaults come from `~/.claude/CLAUDE.md`. Development style follows ECC coding conventions (immutability, error handling, input validation, DRY).

**Obsidian sync:** Bidirectional (SessionStart pulls, Stop pushes) — memories auto-sync via `~/.codex/scripts/obsidian-memory-sync.sh`
