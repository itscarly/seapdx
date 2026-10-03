---
name: obsidian-claude-codex-integration
description: "Full bidirectional memory sync between Obsidian, Claude Code, and Codex"
metadata: 
  node_type: memory
  type: system
  created: 2026-07-18
  status: active
  originSessionId: 8042fb70-75fe-4ce3-b591-182b8fde5f2c
  modified: 2026-07-18T18:03:08.014Z
---

# Obsidian + Claude + Codex Bidirectional Sync

## What This Is

File-based memory integration where:
1. Project Markdown in `notes/` is the shared Obsidian/Codex project memory.
2. Codex SessionStart prints the project memory entry points when a project has notes or Graphify state.
3. Codex Stop writes a closeout audit note, runs the project collector when present, and runs `graphify update .`.
4. Edits in Obsidian flow back to Codex because Codex reads the same Markdown files.

## Setup Complete (2026-07-18)

Updated and re-verified on 2026-09-14 for Carly's current machine paths.

### Changes Made

**Codex** (`~/.codex/hooks.json`):
- SessionStart hook: `/Users/carly/.codex/bin/codex-session-start-context`
- Stop hook: `/Users/carly/.codex/bin/codex-session-closeout-sync`

**Obsidian Vault**:
- SeaPdx vault root: `/Users/carly/Library/Mobile Documents/com~apple~CloudDocs/Documents/SeaPdx`
- Entry note: [[Home]]
- Code/project index: [[Project Files]]

### Files Involved

| File | Purpose |
|------|---------|
| `/Users/carly/.codex/hooks.json` | SessionStart + Stop hooks for Codex |
| `/Users/carly/.codex/bin/codex-session-start-context` | Prints project memory pointers |
| `/Users/carly/.codex/bin/codex-session-closeout-sync` | Writes closeout audit and refreshes Graphify |
| [[Home]] | Project memory entry point |
| [[Project Files]] | Project code/doc index for Obsidian graph |

## How It Works

### Session End (Automatic)

Codex Stop hook:
- writes `notes/session-audits/<date>-codex-closeout.md`
- runs `node scripts/collect-obsidian-memory.js` when available
- runs `graphify update .` when available

### Session Start (Automatic)

Codex SessionStart hook:
- detects the nearest project with `notes/Home.md`, `.obsidian/`, or `graphify-out/graph.json`
- prints the project root, note entry points, and Graphify graph status
- reminds the session to use `graphify query "<question>"` before broad reads for architecture/data-flow/project-content

### Index Maintenance (Manual, One-Time)

When project state changes:
1. Update the affected standardized note.
2. Update [[Project Log]] for meaningful completed work.
3. Run `graphify update .`.

The active notes keep memories organized by date, project, and type.

## Key Design Decisions (Ponytail: kept lazy)

- **No daemon**: Sync happens at session end/start, not live
- **No MCP**: Uses only hooks + shell commands, no new dependencies
- **Manual notes**: Keeps project memory clean and readable (prevents duplication)
- **Obsidian native**: No plugins required; uses only folder structure and wikilinks
- **Shared files**: Direct edits in Obsidian appear in Codex because both use the same Markdown files

## Usage Pattern

1. **Work in Codex**: project memory lives in repo Markdown
2. **Session ends**: Stop hook writes a closeout audit and refreshes Graphify
3. **Edit in Obsidian**: You can refine, link, organize memories in the vault
4. **Next session starts**: SessionStart hook prints the project memory pointers
5. **Work continues**: You now see your Obsidian edits in the next session

## Troubleshooting

See [[Setup/Obsidian Vault Setup]] and [[project_obsidian_vault]] for current paths and troubleshooting.

## Why This Works

**Before**: Memories were fragmented across 4 disconnected silos:
- `~/.claude/projects/*/memory/`
- `~/.codex/memories/`
- project `notes/memory/`
- project `notes/session-audits/`

**Now**: SeaPdx uses one project vault, with context flowing through shared Markdown files and Graphify refreshes.

## Next Steps

- Test hooks after edits: run `/Users/carly/.codex/bin/codex-session-start-context` and `/Users/carly/.codex/bin/codex-session-closeout-sync`
- Archive old memories to `notes/memory/archive/` when they are no longer active
- Use wikilinks to connect related memories across projects

## Related

- [[Project Files]] — project graph hub
- [[Setup/Obsidian Vault Setup]] — vault setup
- `/Users/carly/.codex/hooks.json` — Codex SessionStart and Stop hooks
