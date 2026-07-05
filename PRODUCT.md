# Product

## Name

Seattle + Portland travel dashboard

## Purpose

This project is a static, public-facing trip dashboard for a November 1-9, 2026 Seattle and Portland plan.

It combines:

- high-level trip status
- confirmed and planned budget totals
- day-by-day itinerary pacing
- booked flight timing
- planning guides
- route, walkability, and transit context
- a separate logistics-heavy support page

The goal is simple: someone should be able to open the homepage and understand the trip quickly without digging through spreadsheets, messages, or travel apps.

## Primary users

- the trip owner
- anyone the trip owner shares the dashboard with
- future editing sessions that need one clear source of truth

## Product principles

1. The homepage is a polished trip command center, not an editing workspace.
2. The dashboard should stay compact and scannable without hiding useful planning detail.
3. The budget model should keep confirmed costs, planned local spend, and planned purchases understandable at a glance.
4. The itinerary should be walk-first, route-aware, and easy to scan by day.
5. Utility-heavy detail belongs on the logistics page when it would otherwise crowd the main story.

## Current accepted direction

- Keep the current color direction.
- Favor conservative compaction over dramatic redesign.
- Improve alignment, layout rhythm, and scan speed before introducing new visual concepts.
- Preserve the open-detail itinerary behavior and the existing information architecture.

## Non-goals

- turning the homepage into a heavy admin tool
- hiding important planning data behind unnecessary interaction
- reintroducing retired airfare, hotel, or monitor workflows as primary product features
- letting local-only editor or plugin state become part of the public repo by accident

## Verification baseline

Accepted work should usually prove:

- `npm run validate` passes
- desktop layout uses width efficiently
- tablet/mobile remain readable and tappable
- lower sections do not appear blank because of reveal timing
- local repo state and pushed GitHub state match after release
