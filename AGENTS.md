# codexproject agent guidance

Use `notes/Home.md` as the project memory entry point. For meaningful verified work, update only the affected standardized note and `notes/Project Log.md`; reconcile stale guidance instead of appending duplicates.

At session start, use both project memory layers:
- Run `graphify query "<question>"` first for architecture, source-of-truth, data-flow, dependency, action, or project-content questions when `graphify-out/graph.json` exists.
- Read relevant Obsidian notes under `notes/`, starting from `notes/Home.md`, `notes/TASKS.md`, `notes/KNOWN_ISSUES.md`, and `notes/memory/active/SESSION_START.md` as needed.

At session close after meaningful work:
- Update affected Markdown notes, including tasks, blockers, decisions, handoff state, and `notes/Project Log.md`.
- Run `graphify update .` when the command is available so Graphify sees the same Markdown/code state as Obsidian.
- Keep `.obsidian/` local and untracked; Obsidian is the editor/view over the project files, not a separate source of truth.

Verify prerequisites before project commands. Use `npm run serve` for local serving and `npm run validate` after itinerary or dashboard JavaScript changes. Prefer text and logs over screenshots unless the issue is genuinely visual.

This file contains only Codex-specific defaults; Claude-specific workflow guidance remains in `CLAUDE.md`.
