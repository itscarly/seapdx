---
name: Seattle + Portland Travel Dashboard
description: Compact editorial travel dashboard with restrained color, disciplined card density, and calm scan speed.
colors:
  ink: "#1f1b16"
  muted: "#655d53"
  bg: "#f6f3ec"
  bg-2: "#efe8dc"
  panel: "rgba(255, 252, 247, 0.92)"
  panel-strong: "rgba(255, 252, 247, 0.98)"
  line: "rgba(49, 42, 35, 0.1)"
  accent: "#2f6fe4"
  accent-dark: "#0284c7"
  accent-2: "#1f7a67"
  accent-3: "#bd6b2f"
  accent-4: "#d7a35a"
  panel-tint: "#f8faf6"
  panel-tint-2: "#f7f8f4"
  panel-faint: "#f5f5f5"
  panel-overlay: "rgba(247, 248, 244, 0.8)"
  panel-overlay-strong: "rgba(245, 248, 243, 0.9)"
  panel-overlay-soft: "rgba(247, 249, 245, 0.92)"
  accent-2-tint: "rgba(31, 122, 103, 0.06)"
  accent-2-tint-strong: "rgba(31, 122, 103, 0.12)"
typography:
  scale:
    step-01: "0.65rem"
    step-02: "0.7rem"
    step-03: "0.72rem"
    step-04: "0.76rem"
    step-05: "0.8rem"
    step-06: "0.85rem"
    step-07: "0.9rem"
    step-08: "0.95rem"
    step-09: "1rem"
    step-10: "1.05rem"
    step-11: "1.1rem"
    step-12: "1.15rem"
    step-13: "1.2rem"
    step-14: "1.25rem"
    step-15: "1.4rem"
    step-16: "1.6rem"
    step-17: "1.8rem"
    step-18: "2rem"
    step-19: "2.2rem"
    step-20: "2.4rem"
    step-21: "2.6rem"
    step-22: "2.8rem"
    step-23: "3rem"
    step-24: "3.6rem"
    step-25: "4.8rem"
    step-26: "5rem"
  display:
    fontFamily: "'Bricolage Grotesque', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Bricolage Grotesque', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.2rem, 2.2vw, 2.2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.01em"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 800
    letterSpacing: "0.18em"
rounded:
  xxs: "4px"
  xs: "6px"
  icon: "8px"
  badge: "10px"
  sm: "12px"
  chip: "14px"
  avatar: "16px"
  md: "18px"
  tag: "20px"
  lg: "24px"
  panel-soft: "26px"
  panel-deep: "28px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "14px"
  lg: "20px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#fff"
    rounded: "{rounded.pill}"
    padding: "0 14px"
  button-secondary:
    backgroundColor: "rgba(255, 252, 247, 0.92)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
  card-primary:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "20px"
---

# Design System: Seattle + Portland Travel Dashboard

## 1. Overview

**Creative North Star: "The Trip Notebook"**

This is a public-facing command center for a single trip, not a product. It should read like a well-kept travel notebook that got typeset: warm paper background, one confident blue for action and emphasis, teal and ochre held in reserve for status and route accents. Density is a feature, not a compromise — the dashboard exists so someone can scan confirmed spend, itinerary pacing, and flight timing in one pass without digging through spreadsheets or messages.

The system explicitly rejects the SaaS-dashboard reflex: no navy-and-electric-blue enterprise chrome, no hero-metric-plus-gradient-bar template, no glassy dark mode. It also rejects treating a personal trip plan as a marketing surface — no big claim-driven headlines, no CTAs selling anything.

**Key Characteristics:**
- Warm off-white paper background (`#f6f3ec`), never cool gray
- One primary accent blue (`#2f6fe4`) carries emphasis; teal and ochre are secondary, used sparingly for status and route tags
- Pill-shaped controls (`999px` radius) throughout — buttons, chips, tabs, meters
- Compact type scale; hero headline capped at `clamp(2rem, 4vw, 3.6rem)`, well under the 6rem/96px ceiling
- Cards are soft, bordered, and shadow-light — never nested, never nested "for structure"

## 2. Colors

The palette is warm-neutral paper with a single committed accent blue; teal and ochre are supporting, not equal partners.

### Primary
- **Trip Blue** (`#2f6fe4`): the only color used for primary actions, active states, and the one accent that should draw the eye — active chips/tabs, primary buttons, the meter fill's leading edge, link-buttons.

### Secondary
- **Ledger Teal** (`#1f7a67`): status/confirmation accents — "confirmed" spend states, secondary gradient stop in meters and gauges.
- **Ochre Warm** (`#bd6b2f`) with **Ochre Light** (`#d7a35a`): route/category tags, the trailing gradient stop in budget gauges, warm highlight accents.

### Neutral
- **Paper** (`#f6f3ec`): page background.
- **Paper Deep** (`#efe8dc`): secondary background band (alternating sections).
- **Card White** (`rgba(255, 252, 247, 0.92)`): card/panel surface, translucent over the paper background.
- **Ink** (`#1f1b16`): primary text color.
- **Muted Ink** (`#655d53`): secondary/supporting text — captions, meta labels, hints.
- **Hairline** (`rgba(49, 42, 35, 0.1)`): borders and dividers.

### Micro tints
Small surfaces (verified pills, discovery cards, alternate-section washes) use tighter tints derived from the core palette rather than new colors: `panel-tint`/`panel-tint-2`/`panel-faint` (near-white panel variants), `panel-overlay*` (translucent panel washes at 0.8-0.92 opacity), and `accent-2-tint`/`accent-2-tint-strong` (Ledger Teal at 6%/12% opacity, always derived from `--accent-2-rgb` — never hardcode a literal teal, see Don'ts).

### Named Rules
**The One Accent Rule.** Trip Blue is the only color allowed on a primary call-to-action or an active-state fill. Teal and ochre never compete with it for the same role in the same view — they mark status and category, not action.

## 3. Typography

**Display/Headline Font:** Bricolage Grotesque, with `-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif` fallback
**Body/Label Font:** System stack — `-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif`

**Character:** One geometric-editorial display face (Bricolage Grotesque) for h1/h2 only, paired with the plain system stack everywhere else. The pairing keeps hero moments distinct without introducing a second personality into dense UI.

### Hierarchy
- **Display** (700, `clamp(2rem, 4vw, 3.6rem)`, 1.1 line-height, -0.025em tracking): the single `<h1>` per page — trip title only.
- **Headline** (700, `clamp(1.2rem, 2.2vw, 2.2rem)`, 1.15 line-height, -0.025em tracking): section `<h2>` headings (Trip cost, Day-by-day route, Flights, Guides, Maps).
- **Title** (700, 0.9rem, 1.15 line-height): card-level `<h3>` (day headers, flight-card titles).
- **Body** (600, 0.85rem, 1.4 line-height, 0.01em tracking): buttons, chips, tab labels, and general UI copy — deliberately compact, capped near 65ch in prose blocks.
- **Label** (800, 0.76rem, 0.18em tracking, uppercase): eyebrows and section kickers — used once per section, never stacked.

### Type scale
Beyond the five named roles above, dozens of smaller controls (badges, meter hints, secondary card metadata, per-breakpoint hero variants) need finer steps than Display/Headline/Title/Body/Label alone provide. `typography.scale` in the frontmatter is the full allowed set — 26 steps from `0.65rem` to `5rem`, snapped from what was previously ~40 uncoordinated one-off values scattered across the stylesheet. Any new font-size must land on one of these steps; if a design genuinely needs a size between two steps, add it to the scale deliberately rather than writing a new magic number inline.

### Named Rules
**The System-Fonts-Only Rule.** Every element renders in Bricolage Grotesque or the system stack. Never introduce a third family (no Sora, no Manrope) without loading it — an unloaded `font-family` silently falls back to the browser default and breaks visual consistency across budget totals, flight numbers, and map popups.

## 4. Elevation

The system is mostly flat with one soft ambient shadow used consistently for lift, not a graded elevation scale. Depth comes from layering translucent panels over the paper background and from a single soft shadow, not from stacked shadow tiers.

### Shadow Vocabulary
- **Ambient card** (`box-shadow: 0 24px 60px rgba(46, 34, 22, 0.08)`): default resting shadow for cards and panels.
- **Ambient soft** (`box-shadow: 0 12px 28px rgba(46, 34, 22, 0.06)`): lighter variant for secondary/nested-feeling elements (buttons, chips at rest).
- **Hover lift** (`box-shadow: 0 8px 16px rgba(20, 24, 20, 0.08)`, with `transform: translateY(-2px)`): the only elevation change in the system — hover/focus on buttons, chips, tabs.

### Named Rules
**The One Lift Rule.** Elevation only changes on hover/focus (translateY(-2px) + slightly firmer shadow). Nothing elevates at rest beyond the ambient card shadow; there is no elevated/pressed/floating tier vocabulary to manage.

## 5. Components

### Buttons
- **Shape:** fully pill-shaped (`border-radius: 999px`), `min-height: 40px`, `padding: 0 14px`.
- **Primary:** `linear-gradient(135deg, #2f6fe4, #0284c7)` background, white text, border-color matches the gradient's dark stop.
- **Secondary/default:** `rgba(255, 252, 247, 0.92)` background, ink text, hairline border, ambient-soft shadow at rest.
- **Hover/Focus:** lifts 2px, shadow firms to hover-lift, `outline: 2px solid var(--accent)` with 2px offset for focus-visible.

### Chips / Tabs
- **Style:** same pill shape and sizing as buttons; unselected state matches the secondary button; `.active`/`.chip.active` state matches the primary button gradient.
- **State:** exactly two states — active and inactive. No intermediate "selected but not primary" treatment.

### Cards / Containers
- **Corner Style:** 24px radius (`--radius-xl`) for primary cards (hero trip-card), 18px (`--radius-lg`) for standard section cards.
- **Background:** translucent card white over paper, occasionally with a subtle diagonal accent wash (`linear-gradient(135deg, rgba(47,111,228,0.04), transparent 45%)`) on the hero card only — never on secondary cards.
- **Shadow Strategy:** ambient card shadow at rest; no hover elevation on static content cards (hover lift is reserved for interactive controls).
- **Border:** 1px hairline border in most cases; the hero trip-card omits a border and relies on the shadow + tint wash instead.
- **Internal Padding:** 20px standard.

### Inputs / Fields (range sliders)
- **Style:** transparent track laid over a separate gradient fill bar (`.meter`, `.budget-gauge-fill`) — the native `<input type="range">` supplies only the draggable thumb and hit target; the visible bar is a sibling element kept in exact sync via one shared percentage formula.
- **Thumb:** 12×20px rounded rect, accent-colored fill, panel-colored border, soft shadow — consistent between the hero meter slider and the per-category budget gauges.
- **Focus:** thumb keeps the same soft shadow; cursor switches `grab` → `grabbing` on drag.

### Navigation
- **Style:** flat text links in the topbar, no background at rest; underline/color shift on hover. Mobile collapses to the same links stacked, no hamburger — the nav is short enough to stay flat at all widths.

### Meter / Gauge (signature component)
The trip-target meter and per-category budget gauges are the dashboard's one distinctive visual device: a pill-shaped track (`height: 12px`, `border-radius: 999px`, `rgba(22,23,20,0.08)` background) with a gradient fill spanning accent → accent-2 → accent-4, overlaid by a transparent range input whose thumb sits exactly at the fill's trailing edge. Fill width and thumb position must derive from the same percentage calculation — never two separate formulas — or the thumb visibly drifts from the bar it controls.

## 6. Do's and Don'ts

### Do:
- **Do** use Trip Blue (`#2f6fe4`) as the only primary-action and active-state color; per the **One Accent Rule**.
- **Do** keep every meter/gauge fill and its draggable thumb driven by one shared percentage formula so they never visually desync.
- **Do** cap hero `<h1>` at `clamp(2rem, 4vw, 3.6rem)` — well under the 6rem ceiling; this is a trip notebook, not a landing page.
- **Do** use the pill radius (`999px`) for every interactive control — buttons, chips, tabs, meters — for a single consistent control language.
- **Do** keep secondary modules (guides, maps, transit, logistics) visually lighter than the hero and trip-cost summary — per the project's own documented hierarchy rule.

### Don't:
- **Don't** introduce a font family that isn't loaded. `"Sora"` and `"Manrope"` were previously referenced without ever being loaded via `<link>` or `@font-face`, silently falling back to `sans-serif` and breaking consistency against the Bricolage Grotesque / system-stack pairing used everywhere else — removed for this reason; never reintroduce an unloaded family.
- **Don't** derive a slider's range (`max`) from a live, override-affected total. Pin ranges to a pristine baseline snapshot — deriving from a mutable aggregate the control itself contributes to creates a runaway feedback loop across renders.
- **Don't** use a cream/sand/beige body background as a lazy default — this project's paper tone (`#f6f3ec`) is a deliberate brand choice tied to the "Trip Notebook" north star, not a generic AI warm-neutral; don't drift it toward a different warm-neutral without an explicit request.
- **Don't** write back to `trip-data.js` from dashboard JS or slider interactions. Interactive previews (the hero meter slider, budget-category overrides) are ephemeral and reset on reload; `trip-data.js` stays the single source of truth per the project's Data Integrity Rules.
- **Don't** stack more than one elevation tier. Per the **One Lift Rule**, only hover/focus gets an elevation change — don't add a permanently "raised" card variant.
- **Don't** use `border-left`/`border-right` colored stripes as a card accent, gradient text, or glassmorphism-as-default — standard cross-project bans, and none currently appear in this codebase; keep it that way.
- **Don't** hardcode a literal `rgba(r, g, b, alpha)` tuple for Ledger Teal or any token color. `--accent-2` was corrected once (`.trip-home` overrides the base `:root` value); three declarations still had the old literal `rgba(15, 118, 110, ...)` baked in and silently stayed stale after that override. Always reference `rgba(var(--accent-2-rgb), alpha)` so a token update propagates everywhere.
