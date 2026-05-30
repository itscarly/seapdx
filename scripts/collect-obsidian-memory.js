#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const NOTES_DIR = path.join(ROOT, 'notes');
const SOURCES_DIR = path.join(NOTES_DIR, 'sources');
const SESSION_DIR = path.join(NOTES_DIR, 'session-start');
const ACTIVE_SESSION_START = path.join(NOTES_DIR, 'memory', 'active', 'SESSION_START.md');

function todayLocalDate() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function safeStat(p) {
  try {
    return fs.statSync(p);
  } catch {
    return null;
  }
}

function listFiles(dir, exts, maxDepth = 2, depth = 0) {
  const out = [];
  if (depth > maxDepth) return out;
  let entries = [];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...listFiles(full, exts, maxDepth, depth + 1));
      continue;
    }
    if (exts.some((ext) => entry.name.toLowerCase().endsWith(ext))) {
      out.push(full);
    }
  }
  return out;
}

function detectSecret(text) {
  const checks = [
    /api[_-]?key\s*[:=]\s*['\"]?[A-Za-z0-9_\-]{8,}/i,
    /sk-[A-Za-z0-9]{16,}/,
    /token\s*[:=]\s*['\"]?[A-Za-z0-9_\-]{12,}/i,
  ];
  return checks.some((rx) => rx.test(text));
}

function redactSecrets(text) {
  let t = text;
  t = t.replace(/(api[_-]?key\s*[:=]\s*)['\"]?[A-Za-z0-9_\-]{8,}['\"]?/gi, '$1[REDACTED_SECRET]');
  t = t.replace(/sk-[A-Za-z0-9]{16,}/g, '[REDACTED_SECRET]');
  t = t.replace(/(token\s*[:=]\s*)['\"]?[A-Za-z0-9_\-]{12,}['\"]?/gi, '$1[REDACTED_SECRET]');
  return t;
}

function writeIfChanged(file, content) {
  const prev = safeStat(file) ? fs.readFileSync(file, 'utf8') : null;
  if (prev === content) return false;
  fs.writeFileSync(file, content, 'utf8');
  return true;
}

function sourceTemplate(name, cfg, scan) {
  const linkList = cfg.paths.map((p) => `- \`${p}\``).join('\n');
  const changes = scan.topChanges.length ? scan.topChanges.map((x) => `- ${x}`).join('\n') : '- No new items found in this run.';
  const blockers = scan.blockers.length ? scan.blockers.map((b) => `- ${b}`).join('\n') : '- none';

  return `---
source: ${name}
last_verified: ${scan.generatedAt}
status: ${scan.status}
confidence: ${scan.confidence}
next_action: ${scan.nextAction}
---

# ${cfg.title}

## What this stores
${cfg.stores}

## Trust level
${cfg.trust}

## Refresh cadence
${cfg.cadence}

## Link paths
${linkList}

## Top-priority changes
${changes}

## Blockers
${blockers}
`;
}

function buildDigest(scans, generatedAt, dateKey) {
  const lines = scans.map((s) => `- **${s.title}**: status=${s.status}, confidence=${s.confidence}, files=${s.fileCount}, blockers=${s.blockers.length}`);
  const blockers = scans.flatMap((s) => s.blockers.map((b) => `- ${s.title}: ${b}`));

  return `---
source: obsidian-memory-collector
last_verified: ${generatedAt}
status: active
confidence: high
next_action: Read this note first in new sessions, then open linked source index notes.
---

# Session Start Digest (${dateKey})

## Summary
${lines.join('\n')}

## Open blockers
${blockers.length ? blockers.join('\n') : '- none'}

## Read order for new chat
1. [[memory/active/SESSION_START]]
2. [[session-start/${dateKey}]]
3. [[sources/codex-memories]]
4. [[sources/claude-home]]
5. [[sources/vscode-context]]
`;
}

function buildSessionPointer(generatedAt, dateKey) {
  return `---
name: session-start
source: obsidian-memory-collector
last_verified: ${generatedAt}
status: active
confidence: high
next_action: Open today's digest, then source index notes, then proceed with task work.
---

# Session Start

This file is the startup pointer for all new Claude/Codex sessions in this repo.

## Startup sequence
1. Read [[session-start/${dateKey}]]
2. Read relevant source index notes in [[sources/codex-memories]], [[sources/claude-home]], [[sources/vscode-context]]
3. Confirm open blockers before making edits

## Current digest
- [[session-start/${dateKey}]]
`;
}

function scanSource(cfg) {
  const blockers = [];
  const topChanges = [];
  let fileCount = 0;
  let latestMtimeMs = 0;

  for (const p of cfg.paths) {
    const st = safeStat(p);
    if (!st) {
      blockers.push(`Missing path: ${p}`);
      continue;
    }
    if (st.isFile()) {
      fileCount += 1;
      latestMtimeMs = Math.max(latestMtimeMs, st.mtimeMs || 0);
      const body = fs.readFileSync(p, 'utf8');
      if (detectSecret(body)) topChanges.push(`Secret-like token detected in ${p}; summarized as [REDACTED_SECRET].`);
      continue;
    }

    const files = listFiles(p, ['.md', '.json', '.jsonl', '.txt'], cfg.depth || 2);
    fileCount += files.length;
    for (const f of files) {
      const stf = safeStat(f);
      latestMtimeMs = Math.max(latestMtimeMs, stf?.mtimeMs || 0);
    }
    const recent = files
      .map((f) => ({ f, m: safeStat(f)?.mtimeMs || 0 }))
      .sort((a, b) => b.m - a.m)
      .slice(0, 3)
      .map((x) => `${x.f} (updated ${new Date(x.m).toISOString()})`);
    topChanges.push(...recent);

    for (const f of files.slice(0, 20)) {
      const body = fs.readFileSync(f, 'utf8');
      if (detectSecret(body)) {
        topChanges.push(`Potential secret pattern found in ${f}; masked as [REDACTED_SECRET].`);
        break;
      }
    }
  }

  const status = blockers.length ? 'needs-attention' : 'active';
  const confidence = blockers.length ? 'medium' : 'high';
  const nextAction = blockers.length ? 'Resolve missing paths, then rerun collector.' : 'Use this index for session startup context.';

  const generatedAt = latestMtimeMs ? new Date(latestMtimeMs).toISOString() : new Date(0).toISOString();
  return { generatedAt, latestMtimeMs, blockers, topChanges: topChanges.slice(0, 8), fileCount, status, confidence, nextAction };
}

function main() {
  fs.mkdirSync(SOURCES_DIR, { recursive: true });
  fs.mkdirSync(SESSION_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(ACTIVE_SESSION_START), { recursive: true });

  const configs = [
    {
      key: 'codex-memories',
      title: 'Codex Memories Source Index',
      stores: 'Codex memory registry, rollout summaries, and curated memory notes used for startup context and historical continuity.',
      trust: 'High for structural/project history. Time-sensitive facts still require live verification.',
      cadence: 'Session-start daily digest + rerun after meaningful project changes.',
      paths: ['/Users/kicker/.codex/memories'],
      depth: 2,
    },
    {
      key: 'claude-home',
      title: 'Claude Home Source Index',
      stores: 'Claude local plans/settings and reusable context files relevant to project continuity.',
      trust: 'Medium-high for workflow defaults and historical plans. Validate date-sensitive items before use.',
      cadence: 'Session-start daily digest + whenever plan files or shared instructions change.',
      paths: ['/Users/kicker/.claude/plans', '/Users/kicker/.claude/settings.json', '/Users/kicker/.claude/settings.local.json'],
      depth: 2,
    },
    {
      key: 'vscode-context',
      title: 'VS Code Context Source Index',
      stores: 'VS Code workspace storage pointers and workspace-scoped context artifacts for this machine.',
      trust: 'Medium. Useful for editor/session continuity but not authoritative for project logic.',
      cadence: 'Session-start daily digest + rerun when workspace setup changes.',
      paths: ['/Users/kicker/Library/Application Support/Code/User/workspaceStorage'],
      depth: 2,
    },
  ];

  const scans = [];
  for (const cfg of configs) {
    const scan = scanSource(cfg);
    const indexBody = sourceTemplate(cfg.key, cfg, scan);
    writeIfChanged(path.join(SOURCES_DIR, `${cfg.key}.md`), redactSecrets(indexBody));
    scans.push({ title: cfg.title, ...scan, key: cfg.key });
  }

  const generatedAt = scans.reduce((max, s) => Math.max(max, s.latestMtimeMs || 0), 0)
    ? new Date(scans.reduce((max, s) => Math.max(max, s.latestMtimeMs || 0), 0)).toISOString()
    : new Date(0).toISOString();
  const dateKey = todayLocalDate();
  const digestPath = path.join(SESSION_DIR, `${dateKey}.md`);
  const digest = buildDigest(scans, generatedAt, dateKey);
  const pointer = buildSessionPointer(generatedAt, dateKey);

  const changedDigest = writeIfChanged(digestPath, redactSecrets(digest));
  const changedPointer = writeIfChanged(ACTIVE_SESSION_START, redactSecrets(pointer));

  const summary = {
    generatedAt,
    digestPath,
    changedDigest,
    changedPointer,
    sources: scans.map((s) => ({ key: s.key, status: s.status, fileCount: s.fileCount, blockers: s.blockers.length })),
  };

  process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
}

main();
