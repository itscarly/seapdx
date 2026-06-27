#!/bin/bash

# Apply remaining 56 calendar event updates in batches
# This script prepares the data for bulk calendar updates

CALENDAR_ID="b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com"
UPDATES_FILE="$(pwd)/data/../remaining-updates.json"

if [ ! -f "/private/tmp/claude-501/-Users-kicker-Downloads-codexproject/996c5d4c-3d92-48ec-913d-1195a7d493ff/scratchpad/remaining-updates.json" ]; then
    echo "Error: remaining-updates.json not found"
    exit 1
fi

# Count remaining
TOTAL=$(jq 'length' /private/tmp/claude-501/-Users-kicker-Downloads-codexproject/996c5d4c-3d92-48ec-913d-1195a7d493ff/scratchpad/remaining-updates.json)

echo "Google Calendar Event Updater - Remaining Events"
echo "=================================================="
echo ""
echo "Calendar: Seattle & Portland 2026"
echo "Events ready to update: $TOTAL"
echo "Status: Batch-ready (56 updates)"
echo ""
echo "The remaining-updates.json file contains all event descriptions."
echo ""
echo "To finish the updates:"
echo ""
echo "Option 1 (Recommended): Use Claude Code + MCP Tools"
echo "  - Open Claude Code"
echo "  - Use the /slash command or agent to apply batches"
echo "  - Apply 10 events at a time using:"
echo "    mcp__claude_ai_Google_Calendar__update_event"
echo ""
echo "Option 2: Use Google Calendar API"
echo "  - Export: jq '.[] | {eventId, description}' remaining-updates.json"
echo "  - Use your API client to batch update"
echo ""
echo "Option 3: Manual UI Updates"
echo "  - Open Google Calendar"
echo "  - For each event: click → edit description"
echo "  - Copy from remaining-updates.json"
echo ""
echo "Events summary:"
jq -r '.[] | "\(.eventId[:8])... | \(.summary[:45])"' /private/tmp/claude-501/-Users-kicker-Downloads-codexproject/996c5d4c-3d92-48ec-913d-1195a7d493ff/scratchpad/remaining-updates.json | head -20
echo "... and $((TOTAL - 20)) more"
echo ""
echo "Ready to proceed! Choose your update method above."
