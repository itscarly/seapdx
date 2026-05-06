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

What to expect:

- `/` serves the root entry page
- the root entry redirects to `dashboards/html/index.html`
- CSS, JavaScript, and `data/trip-data.js` load through the same relative paths used in production

## Using `localserv`

If you prefer `localserv` or another static host, point it at the project root, not the `dashboards/` folder.

That keeps these paths working unchanged:

- `/index.html`
- `/dashboards/html/index.html`
- `/data/trip-data.js`

## Important Constraint

Do not add a backend requirement for normal use. Public hosting and local serving should continue to work from the same static files.
