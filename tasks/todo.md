# Local + Public Access Plan

## 2026-05-09 Food Rework

- [x] Replace at least two higher-cost default meals with cheaper Seattle and Portland stops.
- [x] Add Glo's, Tacos Chukis, Sushi% AYCE, Tasty Corner PDX, Hana Sushi, Nate's Oatmeal Cookies, and Hello From Portland where they fit the route.
- [x] Correct Great American Diner as West Seattle and keep Sumo as alternates instead of default downtown anchors.
- [x] Recalculate day totals, trip budget, and default tip guidance.
- [x] Update project notes with the food-route changes and the Crofflecrew assumption.
- [x] Add PHP equivalents using the live USD to PHP rate plus a 1.85% foreign transaction fee, and make the itinerary start collapsed.
- [x] Update sushi stops to AYCE-oriented plans, expand cocktail stops to two drinks plus one lighter food order, add Bainbridge food/souvenir details, and tighten coffee bean prices to current bag numbers.
- [x] Redesign the visual layout so it feels more modern and young, uses screen width better, and still works locally and on Netlify.

## Checklist

- [x] Add one clear local static-server workflow to project docs.
- [x] Document Netlify as the public Git-backed hosting path for the same codebase.
- [x] Add a simple local serve command without introducing a backend.
- [x] Verify local asset paths still work from the project root.
- [x] Run validation checks and record the result.
- [x] Confirm the public Netlify site is live.
- [x] Add a shared favicon so the live site stops requesting a missing `/favicon.ico`.
- [x] Reconcile automation notes with the live GitHub + Netlify setup.

## Review

- Food plan now defaults to cheaper Seattle and Portland meals instead of relying on Spinasse and Gado Gado as budget-path anchors.
- `data/trip-data.js` now uses a `15%` sit-down tip default, keeps `18%` for bars, and explicitly treats counter service as `0-10%`.
- Seattle additions landed as `Glo's Capitol Hill breakfast`, `Tacos Chukis - Capitol Hill`, and `Sushi% AYCE Seattle`, with `Sumo Sushi & Grill AYCE Seattle` kept as an alternate because dinner pricing and routing are weaker.
- Portland additions landed as `Tasty Corner PDX lunch`, `Hana Sushi and Izakaya - 506 SW 6th Ave`, `Belmont / Mississippi browse + Nate's Oatmeal Cookies`, and `Powell's City of Books + Hello From Portland`.
- `Great American Diner & Bar` is now explicitly treated as a West Seattle detour instead of a central-route stop.
- All displayed dollar amounts now render with PHP equivalents based on the May 9, 2026 rate plus the requested foreign transaction fee buffer.
- The day cards now load collapsed by default instead of opening the first two days automatically.
- Cocktail stops now assume a fuller real visit pattern: two drinks plus one lighter food order, with current menu-backed price estimates.
- The default cocktail route was then narrowed to the strongest three stops so the stricter drink-and-food assumption still validates at `$799`.
- Bainbridge now includes a specific lunch/drink/souvenir block instead of only a vague Winslow wandering placeholder.
- The active sushi path now leans harder into AYCE-only logic, with Hana demoted because it did not surface as AYCE in the current menus.

- Local static-server workflow documented in `README.md` and `docs/local-development.md`.
- Public hosting guidance tightened in `docs/deployment.md` around a single Git-backed Netlify path.
- `npm run serve` added for project-root static serving without adding a backend.
- `npm run validate` passed on May 6, 2026.
- Local browser verification passed at `http://127.0.0.1:4173/`, which resolved to `http://127.0.0.1:4173/dashboards/html/index.html`.
- Public Netlify deployment verified at `https://69fb91822a460f21b189142d--cheerful-cupcake-75ba93.netlify.app/`.
- Shared favicon added at `/favicon.svg` and linked from both HTML entry points.
- Automation docs updated to reflect the live Netlify auto-deploy path and the existing GitHub monitor auto-commit/push behavior.
- Portland hotel base later changed from Hotel Rose to Hotel Vance, with Portland hotel-dependent route text and meetup guidance re-centered on the new base.
- Dashboard later upgraded to a white-first UI with clearer timing, hotel anchors, SVG icons, richer skipped-place reasons, and interactive alternates that can be added into the itinerary without changing the default plan.
- Dashboard now includes a real browser-saved itinerary editor for adding custom places, replacing stops, removing stops, resetting edits, and promoting skipped places into real itinerary stops without adding a backend.
- Dashboard now lets users export browser-saved itinerary edits as JSON and copy a plain-language change summary for permanent repo updates in a later chat.
- Obsidian notes workflow added: `notes/Project Log.md` must be updated alongside meaningful project changes, and new notes should be created when new features or decisions need their own documentation.
- The current visual pass swaps in a younger editorial font pairing, expands the desktop canvas, and turns expanded day sections into multi-column panels so the dashboard reads shorter and denser.
