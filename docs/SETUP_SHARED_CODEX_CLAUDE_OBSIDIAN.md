# Shared Codex + Claude + Obsidian Setup

Use this guide on another Mac when you want `Codex`, `Claude Code`, and `Obsidian` to share:

- plan-first behavior
- caveman-style brevity
- lower token usage
- a standardized notes and memory system
- post-work cleanup by default
- stale-line and stale-instruction cleanup
- root-cause and prevention-note capture
- long-chat handoff rules
- no-screenshot-by-default behavior

## Goal

Make both coding agents behave consistently across projects while keeping project notes clean, current, and usable in Obsidian.

This setup does not force hidden app-level modes, but it creates the strongest instruction-level defaults you can control yourself.

## What this setup does

- makes Codex and Claude default to compressed, high-signal behavior
- biases both tools toward caveman-style brevity when clarity survives
- biases both tools toward plan-first behavior for non-trivial work
- tells both tools to run a cleanup pass after meaningful work
- tells both tools to update relevant notes, task files, handoff notes, and instruction files in the same session
- tells both tools to do a repo-wide stale-state pass when the change also affects hosting, workflow rules, or a project source-of-truth file
- tells both tools to remove or rewrite stale conflicting lines instead of leaving drift behind
- tells both tools to record root cause plus the prevention rule when a fix exposed confusion or a repeated mistake
- tells both tools to split long chats with a short handoff summary instead of dragging stale context forward
- tells both tools to avoid screenshots unless they are actually needed
- gives every project one shared notes system
- keeps project memory split into active, archive, and permanent layers
- makes Obsidian open into a clean project map instead of a noisy note pile

## Important limits

This setup does **not** truly force:

- formal built-in product `Plan mode` on every new chat
- automatic product-level activation of the `caveman` skill on every chat
- automatic product-level creation of a brand new chat
- absolute screenshot bans enforced by the app itself

What it *does* do is make both tools behave that way by default through the instruction files you control.

## Global paths to create

### Global Codex instructions

Create or update:

`/Users/YOURNAME/Projects/Codex/AGENTS.md`

Suggested contents:

```md
# AGENTS.md

## Token Discipline And Planning Default

- Default to compressed, high-signal communication.
- Prefer caveman-style brevity by default for internal reasoning, status updates, and short user-facing replies when clarity survives.
- Keep final user-facing messages readable and plain-language.
- Start non-trivial work with a short plan before implementation.
- For complex work, behave plan-first even if the app itself is not formally in Plan mode.

## Post-Work Cleanup Default

- After meaningful work, always run a short cleanup pass before calling the task done.
- Update the relevant `.md` files, task files, handoff notes, and instruction files touched by the change.
- Remove or rewrite stale lines when a newer verified state exists. Do not leave conflicting old instructions behind.
- Record root cause, what changed, and the prevention rule when a fix involved confusion, drift, or a repeated mistake.
- End each meaningful session with a short handoff note when the project has notes or task files.

## Long Chat And Screenshot Default

- If a chat becomes long, noisy, or token-heavy, stop and recommend starting a new chat instead of dragging stale context forward.
- Before switching chats, write a short handoff summary in the project notes when the project uses a `notes/` folder.
- Do not take screenshots by default.
- Prefer text inspection, file inspection, DOM inspection, logs, links, and concise user descriptions before using screenshots.
- Only use screenshots when the user explicitly wants them or when the issue is genuinely visual and cannot be understood well enough another way.

## Shared Notes Default

- Each project should use a `notes/` folder when ongoing documentation helps.
- Treat note maintenance as part of the definition of done.
- Prefer this active note structure:
  - `notes/Home.md`
  - `notes/PROJECT_CONTEXT.md`
  - `notes/ARCHITECTURE.md`
  - `notes/DECISIONS.md`
  - `notes/CHANGELOG.md`
  - `notes/TASKS.md`
  - `notes/LEARNINGS.md`
  - `notes/KNOWN_ISSUES.md`
  - `notes/MAINTENANCE.md`
  - `notes/Project Log.md`
  - `notes/memory/active/`
  - `notes/memory/archive/`
  - `notes/memory/permanent/`
- Reconcile notes instead of only appending to them.
- Keep a short next-session handoff note instead of relying on raw chat history.
```

### Global Claude instructions

Create or update:

`/Users/YOURNAME/.claude/CLAUDE.md`

Suggested contents:

```md
# CLAUDE.md

## Memory And Learning

- Do not use hidden background memory workflows.
- Only write long-term memory when the user explicitly asks for it.
- Project notes, task files, handoff files, and local instruction files are still part of normal maintenance and should be updated when relevant.

## Token Discipline Default

- Default to compressed, high-signal communication.
- Prefer caveman-style brevity by default for internal reasoning, progress updates, and short user-facing replies when clarity survives.
- Keep final user-facing responses readable and plain-language.
- Do not waste tokens on filler.

## Post-Work Cleanup Default

- After meaningful work, always run a short cleanup pass before calling the task done.
- Update the relevant `.md` files, task files, handoff notes, and instruction files touched by the change.
- Remove or rewrite stale lines when a newer verified state exists. Do not leave conflicting old instructions behind.
- Record root cause, what changed, and the prevention rule when a fix involved confusion, drift, or a repeated mistake.
- End each meaningful session with a short handoff note when the project has notes or task files.

## Plan Mode Default

- Enter plan mode for non-trivial work.
- If the app is not literally in Plan mode, still behave plan-first for non-trivial work.
- Re-plan if assumptions break.

## Long Chat And Screenshot Default

- If a chat becomes long, noisy, or token-heavy, stop and recommend starting a new chat instead of dragging stale context forward.
- Before switching chats, write a short handoff summary in the project notes when the project uses a `notes/` folder.
- Do not take screenshots by default.
- Prefer text inspection, file inspection, logs, links, and concise user descriptions before using screenshots.
- Only use screenshots when the user explicitly wants them or when the issue is genuinely visual and cannot be understood well enough another way.

## Shared Notes Default

- Prefer a `notes/` folder for project memory.
- Prefer this note structure:
  - `notes/Home.md`
  - `notes/PROJECT_CONTEXT.md`
  - `notes/ARCHITECTURE.md`
  - `notes/DECISIONS.md`
  - `notes/CHANGELOG.md`
  - `notes/TASKS.md`
  - `notes/LEARNINGS.md`
  - `notes/KNOWN_ISSUES.md`
  - `notes/MAINTENANCE.md`
  - `notes/Project Log.md`
  - `notes/memory/active/`
  - `notes/memory/archive/`
  - `notes/memory/permanent/`
- Reconcile notes instead of only appending.
- Keep a short next-session handoff note instead of relying on raw chat history.
```

## Recommended project structure

Use this in every real project:

```text
your-project/
  AGENTS.md
  CLAUDE.md
  hooks/
    post-task.md
  scripts/
    audit-notes.js
  notes/
    Home.md
    PROJECT_CONTEXT.md
    ARCHITECTURE.md
    DECISIONS.md
    CHANGELOG.md
    TASKS.md
    LEARNINGS.md
    KNOWN_ISSUES.md
    MAINTENANCE.md
    Project Log.md
    memory/
      active/
        README.md
      archive/
        README.md
      permanent/
        README.md
```

## What each file does

- `AGENTS.md`: Codex project rules
- `CLAUDE.md`: Claude Code project rules
- `hooks/post-task.md`: checklist to run after meaningful work
- `scripts/audit-notes.js`: checks that the note system exists
- `notes/Home.md`: Obsidian entry point
- `PROJECT_CONTEXT.md`: what the project is and current working rules
- `ARCHITECTURE.md`: how it is built
- `DECISIONS.md`: important durable choices
- `CHANGELOG.md`: meaningful project changes
- `TASKS.md`: cleaned current task state
- `LEARNINGS.md`: reusable patterns
- `KNOWN_ISSUES.md`: unresolved problems or risks
- `MAINTENANCE.md`: rules for keeping notes current
- `Project Log.md`: dated running history
- `memory/active`: currently true guidance
- `memory/archive`: old but useful context
- `memory/permanent`: long-term stable rules

## Required operating rules

Carry these rules into every real project:

- use caveman-style brevity when clarity survives
- plan first for non-trivial work
- after meaningful work, run a cleanup pass before saying done
- update relevant notes, task files, and instruction files in the same session
- if the change affects public hosting, workflow rules, or a source-of-truth file, do a wider stale-state pass across docs and task scratch files too
- remove or rewrite stale lines instead of leaving drift behind
- record root cause plus the prevention rule when a mistake or confusing state was discovered
- leave a short next-session handoff note

## Definition of done

For meaningful work, done means:

- main implementation changed
- fast verification passed
- relevant active notes updated
- stale conflicting lines removed
- task scratch files updated when still in use
- handoff note added

If one of those is missing, the session is not really done.

## Visual-description fallback

When typing is easier than attaching an image, use this simple prompt format:

```text
What I am looking at:
Where it is:
What looks wrong:
What I expected instead:
What part matters most:
```

For layout or UI bugs, use:

```text
Page or section:
Device size:
Problem:
Top / middle / bottom:
Left / center / right:
Too much space / too small / wrong color / wrong order / broken button:
Expected result:
```

## Project-level AGENTS.md

Use this pattern in each project root:

```md
# AGENTS.md

## Shared Notes System

- This project uses one shared note system for Codex, Claude, and Obsidian, stored in `notes/`.
- Treat note maintenance as part of the definition of done for meaningful completed work.
- Keep these notes current:
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

- Do not treat project memory as append-only.
- Rewrite stale guidance when needed.
- Deduplicate overlapping notes.
- Archive outdated but useful context under `notes/memory/archive/`.
- Keep durable long-term patterns under `notes/memory/permanent/`.

## Post-Work Cleanup Default

- After meaningful work, always run a short cleanup pass before calling the task done.
- Update the relevant `.md` files, task files, handoff notes, and instruction files touched by the change.
- Remove or rewrite stale lines when a newer verified state exists. Do not leave conflicting old instructions behind.
- Record root cause, what changed, and the prevention rule when a fix involved confusion, drift, or a repeated mistake.
- End each meaningful session with a short handoff note in the project notes or task files.

## Confidence Rules

- Do not rewrite architecture or decision notes unless the implementation or workflow change is verified.
- If confidence is low, leave a short follow-up note instead of inventing a clean story.

## Token Discipline And Plan-First Default

- Default to compressed, high-signal communication.
- Prefer caveman-style brevity by default for internal reasoning, status updates, and short user-facing replies when clarity survives.
- Keep final user-facing answers plain-language and readable.
- For non-trivial work, start with a short plan even if the app is not formally in Plan mode.
```

## Project-level CLAUDE.md

Use this pattern in each project root:

```md
# CLAUDE.md

## Shared Memory System

This project uses one shared note system for Claude Code, Codex, and Obsidian.

The notes live in `notes/`.

Treat note maintenance as part of the definition of done for meaningful completed work.

## Standard Active Notes

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

- update only the notes affected by the change
- rewrite stale guidance when needed
- deduplicate instead of stacking similar notes
- archive outdated context before deleting important history

## Post-Work Cleanup Default

- after meaningful work, always run a short cleanup pass before calling the task done
- update the relevant `.md` files, task files, handoff notes, and instruction files touched by the change
- remove or rewrite stale lines when a newer verified state exists
- record root cause, what changed, and the prevention rule when a fix involved confusion, drift, or a repeated mistake
- end each meaningful session with a short handoff note in the project notes or task files

## Memory Layers

- `notes/memory/active/`
- `notes/memory/archive/`
- `notes/memory/permanent/`

## Token Discipline And Plan-First Default

- Default to compressed, high-signal communication.
- Prefer caveman-style brevity by default for internal reasoning, status updates, and short user-facing replies when clarity survives.
- Keep final user-facing answers readable and plain-language.
- For non-trivial work, start with a short plan even if the app is not formally in Plan mode.
```

## Reusable post-task hook

Create:

`hooks/post-task.md`

Suggested contents:

```md
# Post-Task Maintenance Hook

Use this after every meaningful completed task.

## Required updates

- update `notes/Project Log.md`
- update only the relevant active notes
- rewrite stale guidance when needed
- remove conflicting old lines when a newer verified state exists
- record root cause plus the prevention rule if a fix exposed confusion, drift, or a repeated mistake
- leave a short next-session handoff note

## Active notes

- `notes/PROJECT_CONTEXT.md`
- `notes/ARCHITECTURE.md`
- `notes/DECISIONS.md`
- `notes/CHANGELOG.md`
- `notes/TASKS.md`
- `notes/LEARNINGS.md`
- `notes/KNOWN_ISSUES.md`
- `notes/MAINTENANCE.md`
```

## Reusable notes audit script

Create:

`scripts/audit-notes.js`

Suggested contents:

```js
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const required = [
  "notes/Home.md",
  "notes/PROJECT_CONTEXT.md",
  "notes/ARCHITECTURE.md",
  "notes/DECISIONS.md",
  "notes/CHANGELOG.md",
  "notes/TASKS.md",
  "notes/LEARNINGS.md",
  "notes/KNOWN_ISSUES.md",
  "notes/MAINTENANCE.md",
  "notes/Project Log.md",
  "hooks/post-task.md",
];

const missing = required.filter((rel) => !fs.existsSync(path.join(root, rel)));

if (missing.length) {
  console.error("Missing note-system paths:");
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log("Notes structure audit passed.");
```

## Recommended Home.md

Create:

`notes/Home.md`

Suggested contents:

```md
# Project Notes Home

## Start here

- [[PROJECT_CONTEXT]]
- [[ARCHITECTURE]]
- [[DECISIONS]]
- [[TASKS]]
- [[CHANGELOG]]
- [[LEARNINGS]]
- [[KNOWN_ISSUES]]
- [[MAINTENANCE]]
- [[Project Log]]

## Memory folders

- [[memory/active/README|Active memory]]
- [[memory/archive/README|Archived memory]]
- [[memory/permanent/README|Permanent memory]]
```

## Obsidian rule

On the other machine:

- open the project `notes/` folder in Obsidian
- start from `Home.md`
- treat the notes as the human-readable map
- let Codex and Claude update the notes as part of normal work

## Definition of done

A meaningful task is not done until all of these happened:

1. implementation changed or was verified
2. relevant notes, task files, or instruction files were updated
3. stale conflicting lines were removed or rewritten
4. root cause and prevention rule were written if a mistake or drift was found
5. a short next-session handoff note exists

## Rollout order on another machine

1. Create global Codex `AGENTS.md`
2. Create global Claude `CLAUDE.md`
3. Create or copy your starter project template
4. Add the standardized `notes/` structure
5. Add `hooks/post-task.md`
6. Add `scripts/audit-notes.js`
7. Open `notes/` in Obsidian
8. Use that starter for future projects
