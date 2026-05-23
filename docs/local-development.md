# Local Development

This project is a pure static site. The same files are used for both local development and public hosting.

## Quick Open

For a quick look, open the root `index.html` file in a browser. It redirects to the dashboard entry at `dashboards/html/index.html`.

This is useful for a fast visual check, but a local static server is the normal workflow because it matches public hosting behavior more closely.

## Recommended Local Run

From the project root, start a static server:

```sh
npm run serve
```

Then open:

- `http://localhost:4173/`
- `http://localhost:4173/dashboards/html/hotels.html` for the Seattle hotel tracker

What to expect:

- `/` serves the root entry page
- the root entry redirects to `dashboards/html/index.html`
- CSS, JavaScript, and `data/trip-data.js` load through the same relative paths used in production
- the hotel tracker reads its generated report from `data/hotel-monitor-report.json`

## Hotel Tracker Refresh

The Seattle hotel page is a generated static view backed by `data/hotel-monitor-source.json`.

When hotel pricing or cancellation terms change:

```sh
npm run build:hotels
npm run validate:hotels
```

That refreshes:

- `data/hotel-monitor-report.json`
- `research/hotels/latest-report.md`

## Keep Localhost Online Automatically

This project includes a local health check for this Mac. It checks `http://127.0.0.1:4173/` and starts the same static preview used by `npm run serve` if the local preview is down.

To turn it on:

```sh
/Users/kicker/Downloads/codexproject/scripts/install-localhost-launchagent.sh
```

After that, macOS checks the local preview at login and about every two minutes.
The installer copies a small helper to `~/Library/Application Support/codexproject-localhost/` because macOS background jobs should not run directly from `Downloads`.

Useful checks:

```sh
/Users/kicker/Downloads/codexproject/scripts/ensure-localhost.sh
open http://localhost:4173/
tail -n 20 /Users/kicker/Downloads/codexproject/logs/localhost-health.log
```

To turn it off:

```sh
launchctl bootout "gui/$(id -u)" "$HOME/Library/LaunchAgents/com.kicker.codexproject.localhost.plist"
```

Then remove the copied LaunchAgent file if you no longer want it:

```sh
rm "$HOME/Library/LaunchAgents/com.kicker.codexproject.localhost.plist"
rm -rf "$HOME/Library/Application Support/codexproject-localhost"
```

## Using `localserv`

If you prefer `localserv` or another static host, point it at the project root, not the `dashboards/` folder.

That keeps these paths working unchanged:

- `/index.html`
- `/dashboards/html/index.html`
- `/data/trip-data.js`

## Important Constraint

Do not add a backend requirement for normal use. Public hosting and local serving should continue to work from the same static files.
