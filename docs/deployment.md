# Deployment

This project is a static site. There is no build step, server runtime, or backend dependency required for the normal public dashboard.

## Canonical public host

GitHub Pages is the primary public host for this repo.

- Repository: [limcarl83-maker/my_projects](https://github.com/limcarl83-maker/my_projects)
- Live site: [limcarl83-maker.github.io/my_projects](https://limcarl83-maker.github.io/my_projects/)

## How publish works

1. Make and verify local changes from the project root.
2. Run `npm run validate`.
3. Commit the accepted state.
4. Push to `main`.
5. GitHub Actions validates and deploys the same static project root to GitHub Pages.

That keeps the public site tied to the exact repo state that was reviewed locally.

## Active workflows

- `.github/workflows/validate.yml`
  - Runs the JavaScript syntax check, budget audit, and calendar export sync
- `.github/workflows/deploy-pages.yml`
  - Publishes the static site to GitHub Pages after push
- `.github/workflows/git-integrity-check.yml`
  - Fails if macOS junk files or git corruption artifacts appear in the repo
- `.github/workflows/monthly-watch.yml`
  - Runs the monthly planning review and uploads the report artifacts

## Public path contract

The project root is the published artifact root.

Important paths:

- `/`
- `/dashboards/html/index.html`
- `/dashboards/html/logistics.html`
- `/data/trip-data.js`
- `/favicon.svg`

Do not move the dashboard into a different published subdirectory unless the redirect and all relative asset paths are updated together.

## Local-to-public rule

For accepted site work, local and public should stay identical:

- same root redirect behavior
- same dashboard files
- same trip data
- same validation result

If the public site must change, push the verified repo change in the same pass.

## Optional alternate host

`netlify.toml` remains in the repo as a lightweight static-host fallback, but it is not the canonical publish path right now. GitHub Pages should stay the first reference in repo docs, metadata, and maintenance notes unless the hosting decision changes.
