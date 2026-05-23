# Maintenance Workflow

## Goal

This project uses a shared maintenance workflow for Codex, Claude, and Obsidian.

The goal is to keep active notes accurate without turning the notes folder into an append-only dump.

## After every meaningful completed step

1. Check what changed in the project.
2. Identify which active notes are affected.
3. Update only the relevant standardized notes.
4. Rewrite stale guidance instead of stacking duplicates.
5. Archive older context when it still matters historically.
6. Add reusable patterns to [[LEARNINGS]] only if they will help again.
7. Update [[Project Log]] with the dated session summary.
8. Re-check for conflicts between active notes.
9. Add a short next-session handoff note so the next run does not depend on raw chat history.

For the airfare subsystem specifically:

- run `npm run monitor:airfare` after changing airfare watch data or scoring logic
- run `npm run validate:airfare` before calling airfare changes done
- keep discovery-only fares visibly separate from verified fares in reports and UI

## Confidence rules

- Update architecture notes only when code or runtime structure is verified to have changed.
- Update decision notes only when the choice is real and durable.
- If confidence is low, add a short follow-up note instead of rewriting active guidance aggressively.

## Itinerary precision rules

- Do not leave generic `or` blocks in the active trip schedule. Put flexibility in optional blocks or excluded alternates instead.
- Use one exact active stop per event. Do not hide multiple real places inside one active itinerary item when they should be separate steps.
- Every active food or drink stop should carry a direct menu or official venue link.
- Every paid attraction should carry a direct ticket or admission link.
- Every day should show explicit hotel or accommodation departure/return behavior when it matters to the schedule.
- Calendar colors must stay consistent:
  - blue: walking, transit, ferry, train, station, airport transfer
  - gray: hotel, check-in, check-out, reset, wait buffer
  - orange: meals and snack food
  - teal: coffee, tea, ginger beer, dessert drinks
  - purple: sightseeing, museums, gardens, bookstores, markets
  - red: nightlife, cocktails, karaoke, live music
  - gold: shopping, souvenirs, errands
  - lavender: optional-only blocks

## Memory layers

- `notes/memory/active/`: current working memory and active guidance
- `notes/memory/archive/`: outdated but still useful historical context
- `notes/memory/permanent/`: stable long-term patterns or rules

## Obsidian rule

Obsidian should show the clean active notes first.

Archive material should stay available, but it should not crowd the top-level daily workflow.

When a thread gets too long or noisy, add a short handoff summary to the active notes before moving to a fresh chat.

Prefer text-first visual intake:

- file path or URL
- exact text on screen
- what looks wrong
- what was expected instead

Do not rely on screenshots unless the issue is genuinely visual and cannot be described clearly another way.

## Root cause and prevention rule

When a change fixes drift, confusion, stale instructions, or a repeated mistake:

- state the root cause clearly
- state what was changed
- add the prevention rule that should stop the same mistake next run
