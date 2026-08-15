# Memory Index

- [Calendar modification workflow](feedback_calendar_workflow.md) — Read existing events first, adjust conflicts, THEN add new events. Never skip this order.
- [Do the prerequisite work first](feedback_do_the_prerequisite.md) — If adding requires adjusting an existing event first, do the adjustment first.
- [Think and plan, don't ask](feedback_think_dont_ask.md) — Fill gaps with concrete plans; never punt the thinking back to the user.
- [Trip calendar details](project_calendar.md) — Calendar ID, timezone, color coding, hotel bases for the Seattle & Portland 2026 trip.
- [Airfare = PAL award taxes, not cash fares](feedback_airfare_award_vs_cash.md) — Tracker monitors redemption taxes: SFO $370.50 / ORD $375.50. Never rebuild as a cash-fare system.
- [User profile and preferences](user_profile.md) — Working style: expects Claude to do the thinking, won't tolerate repeated errors or wrong-order work.
- [Project current state](project_current_state.md) — Seattle: Palihotel Seattle $662 (was Boylston, swapped 2026-08-14). Portland: Hotel Vance $412.96 (conf [redacted]). Chicago layover: Hotel Blake $787.38. Confirmed airfare $2,247.84 incl. Philippine Airlines PR133 direct Manila return (was Korean Air). Full visual overhaul shipped — DESIGN.md's raised-card system is authoritative.
- [Confirm hotel before writing price](feedback_confirm_hotel_before_price.md) — Always read hotel name from screenshot before updating JSON. Never assume from order or context.
- [Obsidian vault location and graph config](project_obsidian_vault.md) — Vault is the repo root, not notes/. Write all Obsidian config to root .obsidian/. Close Obsidian before writing or it overwrites the file.
- [Sync both hotel JSON files](feedback_sync_both_hotel_files.md) — hotels.html reads hotel-monitor-source.json; hotel-monitor-report.json is the full report. Always update both when editing hotel data.
- [Fill all hotel display fields on add](feedback_complete_hotel_entries.md) — Never leave reviewScore, transitScore, safetyNote etc. null. Look up from address if not in confirmation. User had to ask 3x to fix Courtyard gaps.
- [Check renderer before adding JSON keys](feedback_check_renderer_before_json.md) — Verify hotels.html reads a key before storing data under it. Update renderer in the same commit as the data change.
- [Calendar local export vs. live API](feedback_calendar_local_vs_live_sync.md) — npm run sync:calendar only writes local export files, never the live Google Calendar API. Live drift must be fixed by hand via MCP tools.
- [Verification preference](feedback_verification_preference.md) — User prefers efficient reference to recent audits over re-verification; trusts thorough prior work.
- [Obsidian/Claude/Codex bidirectional sync](obsidian_claude_codex_bidirectional_sync.md) — Full bidirectional memory sync setup between Obsidian, Claude Code, and Codex.
- [Obsidian connectivity requirement](obsidian_connectivity_requirement.md) — Obsidian vault must be open during all Claude/Codex sessions for bidirectional sync to work.
- [Sleep-ceiling rule](feedback_sleep_ceiling.md) — Sleep blocks must never start before 10:00 PM and never as early as ~6:50-8:00 PM on any itinerary day.
- [Per-stop image sourcing](feedback_per_stop_image_sourcing.md) — Every stop needs its own individually-sourced, recent, subject-verified image; never reuse one generic photo across many stops, and never rehost copyrighted Google Images results.
