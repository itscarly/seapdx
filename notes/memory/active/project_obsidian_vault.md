---
name: project-obsidian-vault
description: "Obsidian vault location, graph config, and color scheme for codexproject"
metadata: 
  node_type: memory
  type: project
  originSessionId: 58216ac1-026f-4118-b7c0-81b81c566c78
---

The Obsidian vault for SeaPdx/codexproject is the **repo root** at `/Users/carly/Library/Mobile Documents/com~apple~CloudDocs/Documents/SeaPdx`, not the `notes/` subfolder. Obsidian config lives at `.obsidian/` in the repo root.

If a `notes/.obsidian/` folder exists, it is NOT the active vault config. Do not write graph/appearance settings there.

## Graph color scheme (active in `.obsidian/graph.json`)

| Color | Group | Files |
|-------|-------|-------|
| White | Hub | `Home` |
| Blue | Core project docs | `PROJECT_CONTEXT`, `ARCHITECTURE`, `Decisions` |
| Green | Status / tracking | `TASKS`, `CHANGELOG`, `KNOWN_ISSUES` |
| Orange | Learning / ops | `LEARNINGS`, `MAINTENANCE` |
| Purple | Log / history | `Project Log` |
| Lavender | Sessions | `Sessions/` folder |
| Teal | Memory layers | `memory/` folder |
| Gray | Legacy / reference | `Welcome`, `Workflows`, `Project Overview` |

Graph is centered on Markdown notes and project docs. Code, JSON, CSS, images, and scripts are linked from [[Project Files]] because Obsidian graph nodes are primarily Markdown files.

**Why:** Writing to `notes/.obsidian/graph.json` does nothing. Obsidian reads from the root `.obsidian/` folder because the vault is opened at the repo root.

**How to apply:** Always write graph, appearance, and snippet configs to `/Users/carly/Library/Mobile Documents/com~apple~CloudDocs/Documents/SeaPdx/.obsidian/`. Close Obsidian before writing when possible because Obsidian may overwrite config with its in-memory state on quit.

## Bidirectional working loop

- Obsidian and Codex share the same Markdown files in this repo.
- Session start: read [[Home]], [[TASKS]], [[KNOWN_ISSUES]], and [[SESSION_START]] when relevant.
- Architecture/source/data-flow questions: run `graphify query "<question>"` first, then read the relevant notes/files.
- Session close: update affected Markdown notes, [[Project Log]], tasks/blockers/decisions/handoff notes, then run `graphify update .`.
- This is file-based bidirectionality, not a live daemon: edits made in Obsidian are pulled by reading the files; edits made by Codex appear in Obsidian because they are the same files; Graphify sees both after update.
