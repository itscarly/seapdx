<claude-mem-context>
# Memory Context

# [codexproject] recent context, 2026-05-16 5:54pm EDT

Legend: 🎯session 🔴bugfix 🟣feature 🔄refactor ✅change 🔵discovery ⚖️decision
Format: ID TIME TYPE TITLE
Fetch details: get_observations([IDs]) | Search: mem-search skill

Stats: 42 obs (14,215t read) | 494,910t work | 97% savings

### May 5, 2026
26 5:34p 🟣 Seattle + Portland Travel Itinerary — Full Planning Spec Defined
27 5:35p 🟣 Seattle + Portland Interactive Travel Itinerary — Full Project Specification
28 5:36p 🟣 Seattle + Portland Interactive Travel Itinerary — Full Project Spec Defined
29 5:37p 🟣 Seattle + Portland Interactive Travel Itinerary — Full Project Spec
30 5:38p 🟣 Travel Itinerary Project Directory Structure Scaffolded
33 5:52p ✅ Seattle/Portland Travel Budget Updated to $800 with Food Planning
34 5:53p 🔵 Seattle/Portland Trip Budget Preferences Confirmed via User Q&A
35 5:56p 🔵 Solo Traveler Social/Dating Preferences Captured for Seattle/Portland Trip
36 5:59p 🟣 Trip Dashboard data/trip-data.js Fully Updated for $800 Budget, Tips, Food Splurges, and Social Content
43 6:00p 🔴 Syntax Error Fixed in data/trip-data.js at Line 484
44 " 🟣 socialDating Guide Section and App Sources Added to data/trip-data.js
45 6:01p 🔴 Budget Totals Validated and Day 1 dayTotal Corrected to $56
46 " 🟣 Dashboard UI Updated for Budget Labels, Tip Fields, and Social/Dating Tab
49 " ✅ All Project Docs Updated to Reflect $800 Budget, $60 Coffee Cap, Tip Model, and Social Guide
51 6:02p 🟣 Full Budget Upgrade Complete — Final Validation Passed Across All Files
54 " 🔴 Duplicate taxTipIncluded Fields Removed from Two Itinerary Items
### May 6, 2026
55 2:58p 🔵 codexproject: Pure Static Site, No Server Required
56 " ⚖️ Codexproject Public Hosting: Netlify + Git-based Deploy
57 3:00p 🟣 codexproject: Railway deployment prep — HOST binding + Node engine pinned
58 3:01p 🟣 codexproject: Static-site local+public hosting setup — npm run serve, Netlify docs, local-development guide
59 " 🔵 codexproject: Local serve verification — all assets load correctly from project root
60 3:03p 🔵 codexproject: git add blocked — cannot create .git/index.lock (Operation not permitted)
63 3:04p ✅ codexproject: Committed local+public hosting docs — commit 7fc5454
64 3:05p ✅ codexproject: Pushed to GitHub — github.com/limcarl83-maker/my_projects main branch
65 3:09p 🟣 codexproject: Dashboard live on Netlify — deploy preview URL confirmed working
66 " 🔵 codexproject: Root index.html uses meta-refresh redirect to dashboards/html/index.html
67 " 🟣 codexproject: SVG favicon added — fixes browser console 404 on favicon.ico
68 3:10p ✅ codexproject: Favicon commit 1d2973e pushed to GitHub — Netlify auto-redeploy triggered
69 3:11p 🔵 codexproject: Three GitHub Actions workflows already exist — validate, monitor, deploy-pages
70 3:12p ✅ codexproject: deploy-pages.yml deleted; automation docs updated to reflect live Netlify+GitHub state
### May 9, 2026
86 4:32p 🟣 Seattle/Portland Trip: New Venues + Budget Concerns Raised
### May 15, 2026
98 12:59p 🔵 codexproject localhost:4173 confirmed working — server just wasn't running
99 1:00p 🟣 codexproject localhost auto-restart system added via macOS LaunchAgent
100 " ✅ docs/local-development.md, notes/Project Log.md, and tasks/todo.md updated for localhost auto-restart
102 1:01p 🟣 ensure-localhost.sh verified working — auto-restarted server twice in live test
103 1:02p 🔵 LaunchAgent fails to open ensure-localhost.sh — path resolution bug from launchd context
104 " 🔴 LaunchAgent script launch failure fixed — macOS xattr provenance blocked zsh execution
107 1:03p 🔵 LaunchAgent xattr fix ineffective — zsh still can't open script from launchd context
109 " 🔴 LaunchAgent script moved from Downloads to ~/Library/Application Support to fix launchd access restriction
110 1:04p 🔴 Application Support path fix confirmed working — ensure-localhost.sh restarts server from new location
111 1:06p 🔴 LaunchAgent fully working — foreground python3 direct invocation resolves npm exec failure
### May 16, 2026
112 4:01p ⚖️ Seattle + Portland Itinerary Planning Preferences Captured

Access 495k tokens of past work via get_observations([IDs]) or mem-search skill.
</claude-mem-context>

# Obsidian Notes Workflow

- This project uses one shared note system for Codex, Claude, and Obsidian, stored in `notes/`.
- Treat note maintenance as part of the definition of done for meaningful completed work.
- Keep the standardized active notes current:
  - `notes/PROJECT_CONTEXT.md`
  - `notes/ARCHITECTURE.md`
  - `notes/DECISIONS.md`
  - `notes/CHANGELOG.md`
  - `notes/TASKS.md`
  - `notes/LEARNINGS.md`
  - `notes/KNOWN_ISSUES.md`
  - `notes/MAINTENANCE.md`
  - `notes/Project Log.md`
- Always update `notes/Project Log.md` with a dated summary of what changed, what files were affected, and any follow-up items.
- Reconcile instead of only appending:
  - rewrite stale guidance when a newer verified state exists
  - deduplicate overlapping notes
  - archive outdated but important context under `notes/memory/archive/`
  - keep durable long-term patterns under `notes/memory/permanent/`
- Do not rewrite architecture or decision notes unless the implementation or workflow change is verified.
- If confidence is low, leave a short follow-up note instead of inventing a clean story.
- Use `hooks/post-task.md` as the post-task maintenance checklist.
- Prefer plain-language notes written for a non-technical reader.

# Repo Workflows and Commands

- Treat this repo as a static site first: prefer `npm run serve` for local verification and keep the project root as the served folder so `/`, `/dashboards/html/index.html`, and `/data/trip-data.js` all resolve the same way locally and on Netlify.
- Before project commands, verify prerequisites with `which node`, `which npm`, `which python3`, and `which uv`. This repo's `npm` scripts require Node `>=20`, while local serving uses `python3 -m http.server 4173` through `npm run serve`.
- After editing itinerary data or dashboard JavaScript, run `npm run validate`. It checks `data/trip-data.js`, `dashboards/js/app.js`, and the budget audit script, and it is the fastest regression check in this repo.
- When localhost reliability matters on this Mac, install the self-healing preview with `./scripts/install-localhost-launchagent.sh`. For checks and recovery, use `./scripts/ensure-localhost.sh` and `tail -n 20 logs/localhost-health.log`.
- For public verification, prefer the GitHub Pages dashboard URL `https://limcarl83-maker.github.io/my_projects/dashboards/html/index.html`. Netlify can still be checked as a secondary host, but treat GitHub Pages as the stable no-credit fallback.
- The itinerary editor is browser-saved. When changing editor behavior, verify `window.localStorage` persistence and the export actions labeled `Download my edits` and `Copy update summary`, not just the static page render.

# Token Discipline And Plan-First Default

- Default to compressed, high-signal communication and avoid low-value filler.
- Prefer caveman-style brevity by default for internal reasoning, status updates, and short user-facing replies when clarity survives.
- Keep final user-facing answers plain-language and readable.
- For non-trivial work, start with a short plan even if the app is not formally in Plan mode.
- If scope expands or assumptions break, stop and re-plan instead of continuing with stale context.

# Post-Work Cleanup Default

- After meaningful work, always run a short cleanup pass before calling the task done.
- Update the relevant notes, task files, handoff text, and instruction files touched by the change.
- Remove or rewrite stale lines when a newer verified state exists. Do not leave conflicting instructions behind.
- Record root cause, what changed, and the prevention rule when a fix involved drift, confusion, or a repeated mistake.
- End each meaningful session with a short handoff note in `notes/Project Log.md` or another active note.
- If the change affects hosting, workflow rules, or a source-of-truth file, do a wider stale-state pass across docs and scratch task files before stopping.

# Long Chat And Screenshot Default

- If a chat becomes long, noisy, or token-heavy, stop and recommend starting a new chat instead of dragging stale context forward.
- Before switching chats, write a short handoff summary in `notes/Project Log.md` or another relevant active note.
- Do not take screenshots by default.
- Prefer text inspection, file inspection, DOM inspection, logs, links, and concise user descriptions before using screenshots.
- Only use screenshots when the user explicitly wants them or when the issue is genuinely visual and cannot be understood well enough another way.
- If the user is struggling to describe something visual, ask for:
  - the page or file path
  - the exact text they see
  - what looks wrong
  - what they expected instead
  instead of jumping straight to screenshots.
