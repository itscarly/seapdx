#!/usr/bin/env python3
"""
Finish applying remaining calendar event descriptions.

Completed: 12 events (2 manual, 10 batch 1)
Remaining: 49 events

Run this script with the Google Calendar API to apply all remaining updates.
"""

import json
import subprocess

# Load all remaining updates
with open('/private/tmp/claude-501/-Users-kicker-Downloads-codexproject/996c5d4c-3d92-48ec-913d-1195a7d493ff/scratchpad/remaining-updates.json') as f:
    remaining = json.load(f)

# Already updated via batches
already_done = [
    'i2584m5schdhof5fp4bsb1aktk',
    '7ugm9r4h8hg2lan2l19udphs0a',
    '9deia3vu6svt6hnjc01f4aej3o',
    'vcs4e7pqs3lfbh7e8ajj5kvhag',
    '812d9tq7vt0a3b8i3jo7h45nqc',
    '8096vesvd0lj6tmva670k26t8s',
    '4iemaqrg6k8egbh5padv706928',
    'ls8ad2in3ra63vfcvk7n5iqogk',
    '3u9ahk671h5gf4ts6cijg2lnpk',
    'j92q09omct9l4m4tss93ede6sg',
    'slqapmecfe3k8elaq4d3h22idk',
    'gku2acljbmtf7t4ne2njibne7c',
]

to_update = [u for u in remaining if u['eventId'] not in already_done]

print(f"Total calendar updates needed: {len(to_update)}")
print(f"\nUpdates are grouped in batches of 10 for easy execution.")
print(f"Each batch should be applied as a set of parallel tool calls.\n")

# Generate batch reports
for batch_idx in range(0, len(to_update), 10):
    batch = to_update[batch_idx:batch_idx+10]
    print(f"\n{'='*70}")
    print(f"BATCH {batch_idx//10 + 2} (Events {batch_idx+13}-{min(batch_idx+22, len(to_update)+12)})")
    print(f"{'='*70}")

    for i, event in enumerate(batch, 1):
        event_num = batch_idx + 13 + i - 1
        print(f"\n[{event_num}] Event ID: {event['eventId']}")
        print(f"    Summary: {event['summary']}")
        print(f"    Desc length: {len(event['description'])} chars")

print(f"\n\n{'='*70}")
print(f"FINAL SUMMARY")
print(f"{'='*70}")
print(f"✓ Duplicate events deleted: 3")
print(f"✓ Events updated in batches 1: 10")
print(f"⏳ Events remaining to update: {len(to_update)}")
print(f"📊 Total events in calendar: ~143")
print(f"\nNext steps:")
print(f"1. Copy the event IDs and descriptions from remaining-updates.json")
print(f"2. Use mcp__claude_ai_Google_Calendar__update_event for each")
print(f"3. Apply in batches of 10 for efficiency")

# Save detailed update commands
commands = []
for event in to_update:
    commands.append({
        'tool': 'mcp__claude_ai_Google_Calendar__update_event',
        'params': {
            'calendarId': 'b1ea6a433072f3e7d61ee0da69665ac376a5e696af72655b5bdd3403a8a3d415@group.calendar.google.com',
            'eventId': event['eventId'],
            'description': event['description']
        }
    })

with open('/Users/kicker/Downloads/codexproject/calendar-update-commands.json', 'w') as f:
    json.dump(commands, f, indent=2)

print(f"\n✓ Update commands saved to: calendar-update-commands.json")
