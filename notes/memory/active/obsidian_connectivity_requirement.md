---
name: obsidian-connectivity-requirement
description: Obsidian vault must be open during all Claude and Codex sessions for bidirectional sync
metadata: 
  node_type: memory
  type: requirement
  created: 2026-07-18
  status: active
  applies_to: all sessions
  originSessionId: 8042fb70-75fe-4ce3-b591-182b8fde5f2c
  modified: 2026-07-18T18:07:18.362Z
---

# Obsidian Connectivity — REQUIRED

## Rule

**Obsidian at `~/Notes/Obsidian Vault/` must be open and accessible during ALL Claude Code and Codex sessions.**

This is not optional. The memory sync system depends on it.

## Why

### SessionStart Hook (Session Opening)
- Claude: Reads `~/Notes/Obsidian Vault/memory/Index.md` on session start
- Codex: Reads same Index on session start
- **If Obsidian is closed**: File may be locked or stale; hook still runs but context may be incomplete

### Stop Hook (Session Closing)
- Claude: Copies `~/.claude/projects/*/memory/*.md` → `~/Notes/Obsidian Vault/memory/active/`
- Codex: Copies `~/.codex/memories/*.md` → `~/Notes/Obsidian Vault/memory/active/`
- **If Obsidian is closed during sync**: File writes may race with Obsidian's load-on-open; newer sessions might not see memories

### Cross-Tool Visibility
- Both Claude and Codex use the same Index
- Each tool's SessionStart hook reads the shared Index
- **If Obsidian is closed between tool switches**: Previous tool's memories won't sync before next tool starts

## Best Practice

### Before Every Session
```
1. Check: Obsidian is open
2. Check: ~/Notes/Obsidian Vault/memory/ is accessible
3. If not open: Open Obsidian first
```

### During Session
```
1. Keep Obsidian open (don't close it)
2. SessionStart-hook will have read Index into context
3. You can edit memories in Obsidian while session runs
```

### When Closing Session
```
1. Close Claude or Codex
2. Stop-hook runs: syncs memories to vault
3. Wait ~5 seconds for sync to complete
4. Then: Open the next tool OR stay with Obsidian to review
```

### When Switching Between Tools
```
1. Close first tool (e.g., Claude) → triggers Stop-hook → waits ~5s
2. Make sure memories synced: ls ~/Notes/Obsidian Vault/memory/active/
3. Then: Open second tool (e.g., Codex) → SessionStart-hook reads Index
```

## How to Remember

- **Checklist**: See `~/Notes/Obsidian Vault/OBSIDIAN_REQUIRED.md` (print or bookmark)
- **Quick ref**: See `~/Notes/Obsidian Vault/memory/SETUP_GUIDE.md` (troubleshooting section)
- **Architecture**: See `~/Notes/Obsidian Vault/Systems/Claude_Codex_Obsidian_Integration.md`

## If You Forget

### Closed Obsidian Mid-Session
- Open it now. SessionStart-hook will read from the next session onwards.
- Memories still sync on close; you won't lose work.

### Closed Obsidian Between Tools
- Memories still synced to both tools' folders, but cross-tool visibility is delayed.
- Open Obsidian, next tool session will see the Index.

### Obsidian Locked During Sync
- Close Obsidian completely and reopen.
- Check `memory/active/` to verify sync completed.

## Implementation

**Where this is enforced:**
- `~/.claude/settings.json` — SessionStart hook assumes vault is readable
- `~/.codex/hooks.json` — SessionStart hook assumes vault is readable
- `~/.claude/CLAUDE.md` — Global instructions, "Obsidian Vault Integration (REQUIRED)"
- `~/.codex/AGENTS.md` — Global instructions, "Obsidian Vault Integration (REQUIRED)"
- `~/Notes/Obsidian Vault/OBSIDIAN_REQUIRED.md` — Prominent reminder at vault root

**How Claude/Codex know about this:**
- On every SessionStart: Hook tries to read Index (if Obsidian closed, may be stale)
- Global instructions tell every session: assume Index is available
- Memory entries document the requirement

## Related

- [[obsidian_claude_codex_bidirectional_sync]] — Full integration architecture
- `~/Notes/Obsidian Vault/OBSIDIAN_REQUIRED.md` — Checklist
- `~/Notes/Obsidian Vault/memory/SETUP_GUIDE.md` — Troubleshooting
- `~/.claude/CLAUDE.md` — Claude's copy of this requirement
- `~/.codex/AGENTS.md` — Codex's copy of this requirement
