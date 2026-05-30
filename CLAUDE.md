# CLAUDE.md

This file provides project-specific guidance to Claude Code for `codexproject`.

## Session Start Protocol

At the start of every session, read `notes/memory/active/SESSION_START.md` first.

This single file gives full orientation — current status, key files, commands, hard rules — in minimal tokens. Only read deeper notes (`PROJECT_CONTEXT`, `TASKS`, etc.) when the task requires it.

After meaningful work, update `SESSION_START.md` to reflect the new current state so the next session starts clean.

## Shared Memory System

This project uses one shared note system for Claude Code, Codex, and Obsidian.

The notes live in `notes/`.

Treat note maintenance as part of the definition of done for meaningful completed work.

## Standard Active Notes

Keep these files as the main clean project memory:

- `notes/PROJECT_CONTEXT.md`
- `notes/ARCHITECTURE.md`
- `notes/DECISIONS.md`
- `notes/CHANGELOG.md`
- `notes/TASKS.md`
- `notes/LEARNINGS.md`
- `notes/KNOWN_ISSUES.md`
- `notes/MAINTENANCE.md`
- `notes/Project Log.md`

## Reconciliation Rule

Do not treat project memory as append-only.

After meaningful completed work:

- update only the notes affected by the change
- rewrite stale guidance when needed
- deduplicate instead of stacking similar notes
- archive outdated context before deleting important history

## Memory Layers

- `notes/memory/active/` for current live guidance
- `notes/memory/archive/` for superseded but useful history
- `notes/memory/permanent/` for stable long-term patterns

## Confidence Rules

- Do not rewrite architecture notes unless code or runtime structure was verified to change.
- Do not rewrite decisions unless the choice is real and durable.
- If confidence is low, leave a short follow-up note instead of inventing a clean story.

## Post-Task Maintenance

After meaningful completed work:

- update `notes/Project Log.md`
- update the relevant standardized notes
- check whether any active note is now stale or conflicting
- use `hooks/post-task.md` as the maintenance checklist

## Obsidian Use

Obsidian should open `notes/Home.md` and treat the standardized note set as the main project map.

Prefer plain-language notes written for a non-technical reader.

## Token Discipline And Plan-First Default

- Default to compressed, high-signal communication and avoid low-value filler.
- Prefer caveman-style brevity by default for internal reasoning, status updates, and short user-facing replies when clarity survives.
- Keep final user-facing answers plain-language and readable.
- For non-trivial work, start with a short plan even if the app is not formally in Plan mode.
- If scope expands or assumptions break, stop and re-plan instead of continuing with stale context.

## Post-Work Cleanup Default

- After meaningful work, always run a short cleanup pass before calling the task done.
- Update the relevant notes, task files, handoff text, and instruction files touched by the change.
- Remove or rewrite stale lines when a newer verified state exists. Do not leave conflicting instructions behind.
- Record root cause, what changed, and the prevention rule when a fix involved drift, confusion, or a repeated mistake.
- End each meaningful session with a short handoff note in `notes/Project Log.md` or another active note.

## Long Chat And Screenshot Default

- If a chat becomes long, noisy, or token-heavy, stop and recommend starting a new chat instead of dragging stale context forward.
- Before switching chats, write a short handoff summary in `notes/Project Log.md` or another relevant active note.
- Do not take screenshots by default.
- Prefer text inspection, file inspection, DOM inspection, logs, links, and concise user descriptions before using screenshots.
- Only use screenshots when the user explicitly wants them or when the issue is genuinely visual and cannot be understood well enough another way.
- If the user is struggling to describe something visual, ask for:
  - the page or file path
  - the exact text they see
  - what looks wrong
  - what they expected instead
  instead of jumping straight to screenshots.
