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

**The project Obsidian vault must be open and accessible during project sessions. For SeaPdx, the vault is `/Users/carly/Library/Mobile Documents/com~apple~CloudDocs/Documents/SeaPdx`.**

This is not optional. The memory sync system depends on it.

## Why

### SessionStart Hook (Session Opening)
- Claude/Codex: Read the project's Markdown entry points on session start when hooks/instructions are active.
- **If Obsidian is closed**: file reads still work, but human edits may not have been saved.

### Stop Hook (Session Closing)
- Codex: Writes closeout audit notes under `notes/session-audits/`, runs the project collector when present, and runs `graphify update .` when available.
- **If Obsidian is closed during sync**: Markdown still writes to disk; reopen Obsidian to refresh the UI.

### Cross-Tool Visibility
- Both Claude and Codex use the same Index
- Each tool's SessionStart hook reads the shared Index
- **If Obsidian is closed between tool switches**: Previous tool's memories won't sync before next tool starts

## Best Practice

### Before Every Session
```
1. Check: Obsidian is open
2. Check: project `notes/` is accessible
3. If not open: Open Obsidian first
```

### During Session
```
1. Keep Obsidian open (don't close it)
2. SessionStart hook prints project memory pointers when configured
3. You can edit memories in Obsidian while session runs
```

### When Closing Session
```
1. Close Claude or Codex
2. Stop hook runs: writes closeout audit and refreshes Graphify structural graph
3. Wait ~5 seconds for sync to complete
4. Then: Open the next tool OR stay with Obsidian to review
```

### When Switching Between Tools
```
1. Close first tool (e.g., Claude) → triggers Stop-hook → waits ~5s
2. Make sure closeout audit exists: `ls notes/session-audits/`
3. Then: Open second tool (e.g., Codex) → SessionStart-hook reads Index
```

## How to Remember

- **Checklist**: See [[Setup/Obsidian Vault Setup]]
- **Quick ref**: See [[project_obsidian_vault]]
- **Architecture**: See [[obsidian_claude_codex_bidirectional_sync]]

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
- `/Users/carly/.codex/hooks.json` — SessionStart and Stop hooks for Codex
- `/Users/carly/AGENTS.md` — Global project-memory instructions for projects under `/Users/carly`
- Project `AGENTS.md` — SeaPdx-specific Graphify + Obsidian rules
- [[Setup/Obsidian Vault Setup]] — vault open instructions

**How Claude/Codex know about this:**
- On every Codex SessionStart: hook prints available project memory pointers.
- Global instructions tell project sessions to read notes and use Graphify first where available.
- Memory entries document the requirement

## Related

- [[obsidian_claude_codex_bidirectional_sync]] — Full integration architecture
- [[Setup/Obsidian Vault Setup]] — Checklist
- [[project_obsidian_vault]] — Troubleshooting
- `~/.claude/CLAUDE.md` — Claude's copy of this requirement
- `~/.codex/AGENTS.md` — Codex's copy of this requirement
