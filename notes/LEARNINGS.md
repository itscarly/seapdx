# Learnings

## Reusable patterns

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
