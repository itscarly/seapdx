#!/bin/bash
# Apply final Seattle-Portland itinerary updates (June 27, 2026)
# All changes from user decisions documented in HANDOFF_SESSION_2026_06_27.md

cd "$(dirname "$0")" || exit 1

echo "Applying itinerary updates to trip-data.js..."

# Backup original
cp data/trip-data.js data/trip-data.js.backup

# Update budget (lines 47-59)
sed -i '' 's/"projectedTotal": 904,/"projectedTotal": 952,/' data/trip-data.js
sed -i '' 's/"projectedTotal": 879.75,/"projectedTotal": 952,/' data/trip-data.js

# Day 2: Update evening (Biang Biang -> FOB Sushi, add Columbia sunset)
# This requires larger structural change - use Python for precision
python3 << 'PYTHON'
import json
import re

with open('data/trip-data.js', 'r') as f:
    content = f.read()

# Extract JavaScript object
match = re.search(r'window\.TRIP_DATA = ({.*});', content, re.DOTALL)
if not match:
    print("ERROR: Could not parse TRIP_DATA")
    exit(1)

data_str = match.group(1)

# Parse the JavaScript object to Python dict
# (This is simplified - real JSON parsing would be better)
print("Python approach: This requires full JSON re-parsing which is complex.")
print("Recommend: Apply changes via Edit tool or manual JSON modification.")

PYTHON

echo ""
echo "Note: Full automated application requires JSON re-parsing."
echo "Recommend applying changes via Claude Code Edit tool with structured replacements."
echo ""
echo "Changes needed (documented in HANDOFF_SESSION_2026_06_27.md):"
echo "  Days 1-5 (Seattle): FOB Sushi, Columbia sunset, Sea'd In, remove NEKO/Smith Tower"
echo "  Days 6-9 (Portland): Luc Lac HH, Powell's + Tope + Momiji, Saturday Market + Pretty Ugly + Novel"
echo "  Budget: Update projectedTotal to 952"
echo "  Guides: Add Meta Glasses, Courtyard, 4 coffee bags, souvenirs section"
