# Memory Index

- [Calendar modification workflow](feedback_calendar_workflow.md) — Read existing events first, adjust conflicts, THEN add new events. Never skip this order.
- [Do the prerequisite work first](feedback_do_the_prerequisite.md) — If adding requires adjusting an existing event first, do the adjustment first.
- [Think and plan, don't ask](feedback_think_dont_ask.md) — Fill gaps with concrete plans; never punt the thinking back to the user.
- [Trip calendar details](project_calendar.md) — Calendar ID, timezone, color coding, hotel bases for the Seattle & Portland 2026 trip.
- [Airfare = PAL award taxes, not cash fares](feedback_airfare_award_vs_cash.md) — Tracker monitors redemption taxes: SFO $370.50 / ORD $375.50. Never rebuild as a cash-fare system.
- [User profile and preferences](user_profile.md) — Working style: expects Claude to do the thinking, won't tolerate repeated errors or wrong-order work.
- [Project current state](project_current_state.md) — Seattle: Palihotel Seattle $662 (was Boylston, swapped 2026-08-14). Portland: Hotel Vance $412.96 (conf [redacted]). Chicago layover: Hotel Blake $787.38. Confirmed airfare $2,247.84 incl. Philippine Airlines PR133 direct Manila return (was Korean Air). Full visual overhaul shipped — DESIGN.md's raised-card system is authoritative.
- [Feedback: propose before executing consequential changes](feedback_propose_before_executing.md) — Never unilaterally pick a removal/drop option to resolve a conflict; propose the fix and confirm first, even after a prior "pick option N."
- [Confirm hotel before writing price](feedback_confirm_hotel_before_price.md) — Always read hotel name from screenshot before updating JSON. Never assume from order or context.
- [Obsidian vault location and graph config](project_obsidian_vault.md) — Vault is the repo root, not notes/. Write all Obsidian config to root .obsidian/. Close Obsidian before writing or it overwrites the file.
- [Sync both hotel JSON files](feedback_sync_both_hotel_files.md) — hotels.html reads hotel-monitor-source.json; hotel-monitor-report.json is the full report. Always update both when editing hotel data.
- [Fill all hotel display fields on add](feedback_complete_hotel_entries.md) — Never leave reviewScore, transitScore, safetyNote etc. null. Look up from address if not in confirmation. User had to ask 3x to fix Courtyard gaps.
- [Check renderer before adding JSON keys](feedback_check_renderer_before_json.md) — Verify hotels.html reads a key before storing data under it. Update renderer in the same commit as the data change.
