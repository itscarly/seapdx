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

Complete automatic memory integration where:
1. **Claude memories** (from `~/.claude/projects/*/memory/`) sync to Obsidian at session end
2. **Codex memories** (from `~/.codex/memories/`) sync to Obsidian at session end
3. **Obsidian Index** is loaded into both tools' context at session start
4. **Edits in Obsidian** flow back to Claude/Codex on the next session start

## Setup Complete (2026-07-18)

### Changes Made

**Claude Code** (`~/.claude/settings.json`):
- Added SessionStart hook: reads `~/Notes/Obsidian Vault/memory/Index.md` on session start
- Stop hook already existed: now syncs Claude memories to vault active/ folder

**Codex** (`~/.codex/hooks.json`):
- Added SessionStart hook: reads Obsidian Index on session start
- Added Stop hook: syncs Codex memories to vault active/ folder

**Obsidian Vault**:
- Created `memory/Index.md`: unified, manually-maintained index of all memories
- Created `memory/SETUP_GUIDE.md`: comprehensive setup and troubleshooting guide
- Updated `Memory Map.md`: now accurately describes the sync mechanism
- Fixed dead skill path in `~/.claude/skills-repo/skills/personal/obsidian-vault/SKILL.md`

### Files Involved

| File | Purpose |
|------|---------|
| `~/.claude/settings.json` | SessionStart + Stop hooks for Claude |
| `~/.codex/hooks.json` | SessionStart + Stop hooks for Codex |
| `~/Notes/Obsidian Vault/memory/Index.md` | Master index of all sessions and memories |
| `~/Notes/Obsidian Vault/memory/SETUP_GUIDE.md` | Full documentation and troubleshooting |
| `~/Notes/Obsidian Vault/Memory Map.md` | Corrected to describe real sync mechanism |

## How It Works

### Session End (Automatic)

Both tools run Stop-hooks:
- Claude copies `~/.claude/projects/*/memory/*.md` → `~/Notes/Obsidian Vault/memory/active/`
- Codex copies `~/.codex/memories/*.md` → `~/Notes/Obsidian Vault/memory/active/`
- Both also copy to `<project>/notes/memory/active/` if in a project with notes folder

### Session Start (Automatic)

Both tools run SessionStart hooks:
- Read top 100 lines of `~/Notes/Obsidian Vault/memory/Index.md`
- Inject into session context with `[Memory Index]` prefix
- This exposes Obsidian edits to the tools

### Index Maintenance (Manual, One-Time)

When a new memory appears in `active/`:
1. Open `memory/Index.md` in Obsidian
2. Add `[[active/filename]]` to the right section
3. Save

The Index keeps memories organized by date, project, and type.

## Key Design Decisions (Ponytail: kept lazy)

- **No daemon**: Sync happens at session end/start, not live
- **No MCP**: Uses only hooks + shell commands, no new dependencies
- **Manual index**: Keeps the index clean and readable (prevents duplication)
- **Obsidian native**: No plugins required; uses only folder structure and wikilinks
- **One-way raw copies**: Memory files sync bidirectionally through the Index; direct edits in Obsidian appear in next session

## Usage Pattern

1. **Work in Claude or Codex**: Your session's memories are stored locally
2. **Session ends**: Stop-hook copies them to Obsidian
3. **Edit in Obsidian**: You can refine, link, organize memories in the vault
4. **Next session starts**: SessionStart hook reads the Index, your edits are in context
5. **Work continues**: You now see your Obsidian edits in the next session

## Troubleshooting

See `~/Notes/Obsidian Vault/memory/SETUP_GUIDE.md` for:
- Common issues and fixes
- Why Obsidian and Claude have different versions (expected)
- How to force immediate sync (manual script option)
- Health check command

## Why This Works

**Before**: Memories were fragmented across 4 disconnected silos:
- `~/.claude/projects/*/memory/`
- `~/.codex/memories/`
- `~/Notes/Obsidian Vault/memory/`
- `~/Downloads/codexproject/notes/memory/`

**Now**: Everything syncs to one unified Obsidian vault, with context flowing back to both tools via Index on session start.

## Next Steps

- Test it: close Claude/Codex and verify memories appear in `~/Notes/Obsidian Vault/memory/active/`
- Update `Index.md` as new memories arrive
- Archive old memories to `memory/archive/` after a week or month
- Use wikilinks to connect related memories across projects

## Related

- [[Memory Map]] — updated description of how memory layers connect
- `~/Notes/Obsidian Vault/memory/SETUP_GUIDE.md` — full documentation
- `~/.claude/settings.json` — SessionStart and Stop hooks
- `~/.codex/hooks.json` — SessionStart and Stop hooks
