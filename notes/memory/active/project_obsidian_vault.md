---
name: project-obsidian-vault
description: "Obsidian vault location, graph config, and color scheme for codexproject"
metadata: 
  node_type: memory
  type: project
  originSessionId: 58216ac1-026f-4118-b7c0-81b81c566c78
---

The Obsidian vault for codexproject is the **repo root** at `/Users/kicker/Downloads/codexproject/`, not the `notes/` subfolder. Obsidian config lives at `.obsidian/` in the repo root.

The `notes/.obsidian/` folder also exists but is NOT the active vault config — do not write graph/appearance settings there.

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

Graph is filtered to `path:notes` so repo code files (JS, JSON, PNG) don't clutter the view.

**Why:** Writing to `notes/.obsidian/graph.json` does nothing — Obsidian reads from the root `.obsidian/` folder because the vault is opened at the repo root.

**How to apply:** Always write graph, appearance, and snippet configs to `/Users/kicker/Downloads/codexproject/.obsidian/`. Close Obsidian before writing — it overwrites the file with its in-memory state on quit.
