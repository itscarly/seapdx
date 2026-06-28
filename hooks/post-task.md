# Post-Task Maintenance Hook

Use this after every meaningful completed task in this project.

## Required check

- What changed in the code, data, workflow, or automation?
- Which standardized notes are now stale?
- Does any old note need rewriting or archiving?

## Required updates

- Update `notes/Project Log.md`
- Run `node scripts/collect-obsidian-memory.js` to refresh source indexes and session-start digest.
- Update only the relevant active notes:
  - `notes/PROJECT_CONTEXT.md`
  - `notes/ARCHITECTURE.md`
  - `notes/Decisions.md`
  - `notes/CHANGELOG.md`
  - `notes/TASKS.md`
  - `notes/LEARNINGS.md`
  - `notes/KNOWN_ISSUES.md`
  - `notes/MAINTENANCE.md`
  - `notes/memory/active/SESSION_START.md` (via collector output)

## Safety rules

- archive before destructive cleanup
- do not rewrite architecture notes without verified evidence
- do not delete unresolved issues automatically
- do not append duplicate notes when a rewrite is cleaner

## Success condition

The active notes should describe the current verified state of the project without obvious duplicates or stale instructions.

## Current repo reminder

- The airfare tracker, hotel tracker, and repo monitor workflows are retired.
- The only remaining trip automation is the Kraken ticket watch.

## Freshness check

- Review `notes/queries/Stale Notes.md` and refresh any high-impact stale notes.
