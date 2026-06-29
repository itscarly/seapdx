# Publishing the Dashboard

The dashboard is a static site: HTML, CSS, JavaScript, and data files. The same codebase should be used for both local serving and public hosting. There is no separate site build and no required backend.

## Local and Public Model

- Local use: serve the project root with a static server or `localserv`.
- Public use: deploy the same project root through the current GitHub-backed static publish flow.
- Shared contract: `/` must resolve to the dashboard entry, and relative asset paths must stay unchanged.

For the local workflow, see `docs/local-development.md`.

## Recommended Option: GitHub-backed static publish

Best for keeping local accepted edits aligned with the public site because the same pushed repo state becomes the shared reference point.

1. Put this folder in a Git repository.
2. Push it to GitHub.
3. Push accepted site changes to `main`.
4. Let the current static publish workflow deploy the same project root.
5. Keep the root redirect/static path assumptions unchanged.
6. Share the resulting public GitHub-backed URL.

Why this fits:

- Static files work well.
- No server is required.
- Git-connected deploys update automatically whenever the itinerary data changes.
- The local and public versions run from the same static file layout.
- The important rule is that the public copy should come from the same pushed repo state you validated locally.

## Optional alternate host: Vercel

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
3. Keep the static publish workflow healthy.
4. Keep validation in GitHub Actions before or alongside publish.
5. Treat a push as part of completion whenever a local site change is accepted.

This gives both public access and a clean path for keeping local and public copies identical.
