# Publishing the Dashboard

The dashboard is a static site: HTML, CSS, JavaScript, and data files. The same codebase should be used for both local serving and public hosting. There is no separate site build and no required backend.

## Local and Public Model

- Local use: serve the project root with a static server or `localserv`.
- Public use: deploy the same project root to Netlify.
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
3. Connect the repository to Netlify.
4. Set Netlify to redeploy on every push.
5. Keep scheduled monitoring in GitHub Actions for validation and data-watch jobs.

This gives both public access and a clean path for automatic itinerary updates.
