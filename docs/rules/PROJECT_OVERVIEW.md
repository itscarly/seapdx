# Project Overview

Interactive Seattle and Portland itinerary planner for November 1-9, 2026.

## Goal

Produce a realistic, walking-first itinerary with a $2,254.04 target for food/drink, transportation, activities, and shopping. Hotels and paid airfare are tracked separately.

## Current Deliverable

The current v1 deliverable is a static responsive HTML dashboard:

`dashboards/html/index.html`

It now runs in both places from the same codebase:

- locally through a static server from the project root
- publicly on GitHub Pages from the same repository

## Data Source

Structured itinerary data lives in:

`data/trip-data.js`

## Current Strategy

- Curate the best-fit stops from the larger candidate pool.
- Include Bainbridge Island and exclude Depoe Bay by default.
- Prioritize public transit and walking.
- Keep cocktail and social stops tied to happy hour, public meetups, or clearly capped one-drink experiences.
- Keep coffee beans inside the $60 two-bag cap.
- Keep the deployment model static-only, with no required backend.
