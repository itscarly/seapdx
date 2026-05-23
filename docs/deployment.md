# Publishing the Dashboard

The dashboard is a static site: HTML, CSS, JavaScript, and data files. The same codebase should be used for both local serving and public hosting. There is no separate site build and no required backend.

## Local and Public Model

- Local use: serve the project root with a static server or `localserv`.
- Public use: deploy the same project root to Netlify.
- Backup public use: deploy the same project root to GitHub Pages.
- Shared contract: `/` must resolve to the dashboard entry, and relative asset paths must stay unchanged.

For the local workflow, see `docs/local-development.md`.

## Recommended Option: Netlify

Best for fast sharing without a build step and for keeping local edits aligned with the public site.

1. Put this folder in a Git repository.
2. Push it to GitHub.
3. Create or log in to Netlify.
4. Connect the GitHub repository to Netlify.
5. Set the publish directory to the project root.
6. Keep `netlify.toml` as the source of the root routing behavior.
7. Share the generated `netlify.app` URL.

Why this fits:

- Static files work well.
- No server is required.
- Git-connected deploys update automatically whenever the itinerary data changes.
- The local and public versions run from the same static file layout.
- Netlify still supports drag-and-drop as a fallback if needed.

Official docs: https://docs.netlify.com/site-deploys/create-deploys/

## Manual Fallback: Netlify Drop

If you need a one-off publish before the Git setup is ready:

1. Create or log in to Netlify.
2. Use Netlify Drop.
3. Upload the project root folder.
4. Confirm that the deployed root opens the dashboard correctly.

This is a fallback, not the preferred long-term workflow.

## Good Option: GitHub Pages

Best if the project will live in a public GitHub repository.

1. Put this folder in a GitHub repository.
2. Configure GitHub Pages for the repository.
3. Publish from the selected branch or a GitHub Actions workflow.
4. Share the GitHub Pages URL.

Why this fits:

- Free for public repositories.
- Works with a static site.
- GitHub Actions can run scheduled checks and publish changes.

Official docs: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

### GitHub Pages fallback in this repo

This repo now includes a direct GitHub Pages workflow:

- Workflow file: `.github/workflows/deploy-pages.yml`
- Trigger: pushes to `main` or manual run
- Publish style: upload the static project root as an artifact after validation

Expected public URL:

- `https://limcarl83-maker.github.io/my_projects/`

Why this workflow exists:

- Netlify can be blocked by account-credit limits.
- This project does not need a backend or build system to publish.
- The workflow excludes local-only clutter like logs, screenshots, editor state, and app-specific folders before publishing.

## Good Option: Vercel

Best if you later turn the static dashboard into a React app or want preview deployments from Git.

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the project as a static site or no-build project.
4. Share the generated Vercel URL.

Official docs: https://vercel.com/docs

## Recommended Publishing Path

For this project:

1. Create a GitHub repository.
2. Push this project to GitHub.
3. Keep GitHub Pages enabled from `main` or the repo workflow so there is always one no-credit public fallback.
4. Use Netlify only when its account state is healthy and you still want its alternate host path.
5. Add scheduled monitoring via GitHub Actions later.

This gives one stable public fallback plus an optional second host path.
