# Learnings

## Reusable patterns

### New images always go in `dashboards/assets/images/`, referenced by filename only

- Every image in this project lives under `dashboards/assets/images/`, and `app.js`'s `IMAGE_BASE = "../assets/images/"` resolves relative to `dashboards/html/index.html`, not the repo root.
- A repo-root `assets/images/` folder will 404 on both local and the deployed site even though the file exists and `curl`s fine at the wrong path.
- Prevention: save new stop images directly into `dashboards/assets/images/`, store just the filename in `trip-data.js`, and let `app.js` prefix it with `IMAGE_BASE`.

### Crop and select images for what the stop actually is, not just for aspect ratio

- A default `object-fit: cover` crop on a tall/odd-aspect source photo can land on the least representative part of the image (an empty shelf rail instead of the food; a distant skyline instead of the park itself).
- Prevention: after adding any stop image, open the rendered card and ask "does this look like the thing described" -- not just "does it load." Re-crop the source or pick a different photo if not.

### After any `git add` meant to bundle several files, verify the commit actually contains them

- `git add -A -- <bad-pathspec> <real files>` fails fast on the bad pathspec and silently drops every argument listed after it -- the command errors, but doesn't tell you the trailing `add`s never happened.
- A commit can succeed and look normal while containing far less than intended.
- Prevention: run `git show --stat HEAD` right after committing multiple files together and confirm the expected files and line counts are actually there, before pushing.

### Safety/crime commentary must be sourced research, never invented text

- When a user asks for a safety read on a location/time, research it first (city police/crime-dashboard reporting, local news, official parks/safety initiatives) and cite what each claim is based on.
- If no solid source exists for a specific claim (e.g. a crime rate at a specific park at night), say so explicitly in the text rather than filling the gap with a plausible-sounding guess.
- This project renders sourced safety notes as a compact emoji+percentage badge (see `notes/MAINTENANCE.md` "Day rebuild playbook") plus the full cited writeup in `detailText`.

### A "the live site isn't updated" report is often cache, not a broken deploy

- Check `gh run list` for the Actions run status and `curl` the live URL directly for the actual served content before assuming a push failed to deploy.
- GitHub Pages' CDN also carries its own short cache window (`cache-control: max-age=600` observed), separate from the visitor's browser cache.
- Prevention: verify deploy + live content server-side first; only then attribute a stale-looking page to the visitor's browser cache (hard refresh / incognito).

### When a workflow is retired, remove its public pages, scripts, and active-note instructions together

- Deleting only the UI is not enough.
- In this repo, the old airfare/hotel tracker system left stale commands, workflows, notes, and validation hooks behind until they were removed as one cleanup pass.
- Prevention: when the user says a workflow is gone, sweep HTML, JS, package scripts, GitHub workflows, docs, and startup notes in the same session.

### Public deploys only change after a push

- The live site and any scheduled monitor outputs only reflect what is committed and pushed.
- Root cause of the 2026-05-23 deploy confusion: large local tracker changes sat uncommitted while the public copy still served the older files.
- Prevention: start UI or monitor follow-up sessions with `git status`. If the goal is to verify the public result, make sure the relevant files are actually committed and pushed first.

### For this repo, done means local and GitHub match

- The user wants the local site and the GitHub-served copy to stay identical after accepted changes.
- Prevention: after meaningful site/data/note updates, run validation, commit the accepted files, and push before calling the session complete.

### When the live site looks wrong, diff live vs local before assuming code is broken

- Use `curl -s <live-url> | diff - <local-file>` to instantly see what the live site is actually serving.
- This takes 5 seconds and immediately reveals whether the problem is a deployment gap (unpushed changes) vs a real code bug.

### Static-site verification beats guesswork

- When localhost looks broken in this project, verify the local server and direct URLs before assuming app code is broken.

### Notes should be reconciled, not only appended

- Session logs can grow forever, but active notes should be rewritten into a clean current state.

### Shared agent rules need one project source

- Codex and Claude stay aligned better when both point at the same project structure and maintenance workflow.

### Keep documentation tied to verified behavior

- Workflow and architecture notes should come from the actual repo state, not memory alone.

### Compressed output needs a readability boundary

- Token saving is useful, but user-facing answers should still stay readable for a non-technical person instead of turning every response into shorthand.

### Long chats should be split with handoff notes

- When a thread gets too long, the clean move is to write a short handoff summary and continue in a new chat instead of dragging stale context forward.

### Public itinerary pages work better when utility content is split out early

- The redesign was cleaner once the homepage stopped trying to carry public itinerary content, source references, automation links, future bookings, and monitoring detail at equal weight.
- For this project, separate the reader-facing trip story from the operational maintenance surface instead of solving crowding only with CSS compression.

### Budget guardrails need a final validator pass after any itinerary rewrite

- This project can look visually correct while the source data is still numerically stale.
- After itinerary or budget edits, run `npm run validate` before calling the work done so day totals, category totals, and rule-based caps stay aligned.

### Screenshots should be the exception, not the default

- For most work, text descriptions, file paths, logs, and direct page details are cheaper and clearer than screenshots.

### Calendar remediation is not done when only the titles look clean

- The 2026-06-27 Portland cleanup failed the user's acceptance check because some event titles were human-readable but the live Google Calendar popup bodies still used thin metadata or stale headline wording.
- When the user gives a screenshot of the desired event popup, match the popup structure itself:
  - `Purpose`
  - `Estimated cost`
  - direct links
  - `What to order` or `What to do`
  - `Skip`
  - `Continuity`
- Also verify the day-level header rows and any route/location labels, not only the stop titles.

### When the user says "all days," do not stop after fixing the example day

- The user's Day 2 examples were evidence of the pattern, not a narrow scope limit.
- For itinerary parity work, treat the cited examples as the first audit targets and then continue across the entire date range before calling the pass complete.
- Acceptance here depends on proving the weak-stop pattern was removed across Nov 1-9, not just on repairing the first screenshot or first meal.

### If a filter is empty, the UI is lying

- The homepage had a `Cocktails` itinerary filter even though there were no live `type: "cocktails"` stops left in the data.
- Prevention: when the dataset changes, re-check any exposed filters, tabs, or chips so the UI only offers categories that actually return content.

### When text wraps early beside empty space, the real bug is usually width allocation

- The homepage still looked wrong after a typography pass because the desktop subtitle copy was capped too narrowly and some card rows were still stretching to the tallest item.
- Prevention: if a screenshot shows both premature wrapping and wide unused horizontal space, widen or rebalance the layout first, then fine-tune type size.
- Also re-check CSS grid stretch behavior on mixed-height card rows so shorter cards do not look awkwardly underfilled.

### Dense itinerary chips need visible semantic labels, not just better spacing

- Compaction alone does not make a route easier to scan if every chip still looks like undifferentiated venue text.
- For this homepage, adding visible labels like `Coffee`, `Photo ops`, `Happy hour`, and `Buffer` improved comprehension more than another small spacing tweak would have.
- Prevention: after any density pass on route chips or timeline cards, ask whether the UI still requires too much inference and surface the category directly when it does.

### Side-by-side dashboard cards can still feel broken when only one internal grid wraps

- In the maps/transit atlas, the visual problem was not the outer card styling. It was the Portland summary grid wrapping one extra row while the Seattle one stayed shorter.
- That one wrapped row pushed the Portland map lower and made the whole pair feel misaligned.
- Prevention: for paired cards, verify the top edge of the primary content area, not just the outer card border. If one internal grid can wrap and the other cannot, lock the layout at the breakpoint where alignment matters.

### Release cleanup should reconcile active notes and local Git noise in the same pass

- A UI can be ready to ship while the repo still is not: contradictory active notes and unignored local tooling files create avoidable release ambiguity.
- In this project, the risky pattern was mixing newer monthly-watch guidance with an older Kraken-only automation line, while local `.claude`, `.obsidian`, and `.impeccable` state still appeared in `git status`.
- Prevention: before publishing, check `git status`, reconcile any conflicts across active notes, and decide explicitly whether each local-only file is a project artifact or should be ignored.

### Public repo cleanup needs a homepage pass, not only a code pass

- A repo can be operationally correct and still look unfinished if the About panel is empty, the README hides the live site, or tracked editor/vault state leaks into source control.
- In this project, the useful release checklist became: live URL near the top, quick-start commands near the top, canonical deploy path stated plainly, and no tracked `.obsidian` working-state files.
- Prevention: when the user asks for GitHub cleanup, audit the About metadata, the first screen of the README, and tracked local-state files together.

## How to use this note

Add only patterns that should help future sessions.

Do not dump one-off scratch observations here.

## Related notes

- [[PROJECT_CONTEXT]]
- [[KNOWN_ISSUES]]
- [[CHANGELOG]]
- [[Project Log]]

## 2026-05-28 — Memory hub implementation learnings

- For cross-tool memory continuity, reference-first indexing is safer than file copying; it avoids drift and accidental data loss.
- Idempotency for generated notes requires source-derived timestamps (for example latest source mtime), not run-time timestamps.
- A startup pointer note should be short and procedural; detailed context belongs in dated digests and source indexes.
- Secret-safe note generation should redact token-like strings before writing any summary output.

## 2026-05-28 — Freshness needs a visible queue

- Metadata fields only help when surfaced; a stale-notes dashboard makes aging context obvious before it causes drift.
