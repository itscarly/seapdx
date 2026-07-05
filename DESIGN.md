---
name: Seattle + Portland Travel Dashboard
description: Compact editorial travel dashboard with strong hierarchy, disciplined card density, and polished planning detail.
---

# Design System: Seattle + Portland Travel Dashboard

## Overview

The accepted direction is a compact editorial dashboard for trip planning.

It should feel:

- polished enough to share publicly
- dense enough to scan quickly
- calm enough that planning details remain readable
- consistent across hero, summary, itinerary, guides, maps, flights, and logistics

The color direction is already approved. Future work should improve hierarchy, compaction, alignment, and scan speed before proposing a new visual theme.

## Core rules

### 1. Keep the hierarchy obvious

- Hero and executive summary are the primary read.
- Activity budget, guides, maps, transit, and logistics are secondary.
- Supporting modules should not carry the same visual mass as the hero.

### 2. Compact does not mean collapsed

- Remove wasted height before removing information.
- Prefer tighter padding, smaller labels, and better line lengths over hiding content.
- Dense layouts should still feel breathable.

### 3. Fix width allocation before shrinking type

- If text wraps while there is visible empty space, solve the layout first.
- Avoid narrow desktop copy caps that force subtitles into extra rows.
- Do not use giant type as a substitute for card balance.

### 4. Paired sections must align internally

- Two cards can share a shell style and still look broken if one internal grid wraps differently.
- Check the start line of the primary content block, not only the outer card border.

### 5. Dense itinerary UI needs visible semantics

- Route chips should communicate category as well as title.
- Labels such as `Transit`, `Walk`, `Coffee`, `Photo ops`, `Meal`, `Cocktails`, `Happy hour`, and `Buffer` improve scan speed and reduce guesswork.

## Visual system

### Typography

- System font stack only.
- Hero headline stays bold and premium, but not billboard-sized.
- Section headings should feel strong without wasting vertical space.
- Supporting copy should be slightly tightened, never faint.

### Color

- Preserve the light editorial background and the blue / teal / warm-orange accent family.
- Blue remains the primary action and emphasis color.
- Teal and warm orange are supporting colors for status, tags, and route accents.
- Do not redesign the palette unless the user explicitly asks for it.

### Cards

- Use one disciplined card family with subtle borders, soft shadows, and rounded corners.
- Primary cards can carry slightly more padding and emphasis.
- Secondary cards should be lighter, shorter, and less dominant.
- Do not stretch short support cards into tall empty rectangles unless that alignment is intentional.

### Controls

- Buttons, tabs, and chips should feel like dashboard controls, not oversized marketing CTAs.
- Keep them comfortably tappable on mobile.
- Reduce height and padding only to the point where density improves without harming clarity.

## Layout guidance by section

### Hero

- Use desktop width efficiently.
- Bullets should read like key planning facts, not tiny footnotes.
- The right rail should sit close enough to the main copy that the hero feels unified.

### Overview and executive summary

- Subtitles should stay on one line at desktop width when the row has room.
- Supporting cards should keep natural height.
- Large numeric values should feel important without causing awkward `PHP` wrapping.

### Itinerary

- Day headers should stay compact.
- Weather-plan lines may stay on one line at desktop width when space allows.
- Keep the open-detail pattern intact; do not collapse route content further.

### Flights

- Matching flight cards should read as a pair.
- Equalize them with internal layout structure, not oversized containers.

### Guides, maps, transit, logistics

- These modules matter, but they are visually secondary.
- Reduce their padding and heading mass before changing their information density.
- Reveal behavior must never leave them looking blank during fast navigation or screenshots.

## Do

- Prefer alignment, compaction, and hierarchy fixes before aesthetic reinvention.
- Keep real content visible on first load.
- Re-check desktop, tablet, and mobile after any density pass.
- Update this doc when the accepted design direction changes materially.

## Don’t

- Don’t reintroduce billboard-scale numbers just to make cards feel full.
- Don’t solve whitespace by hiding information the user still wants visible.
- Don’t let secondary modules inherit the same mass and padding as the primary story blocks.
- Don’t leave this file describing an older experimental direction after the UI has moved on.
- Don’t use generic SaaS dashboard patterns when the trip-specific layout can be clearer.
