# Publishing the Dashboard

The dashboard is a static site: HTML, CSS, JavaScript, and data files. It can be shared publicly once hosted.

## Recommended Option: Netlify

Best for fast sharing without a build step.

1. Create or log in to Netlify.
2. Use Netlify Drop or connect a Git repository.
3. Publish the project folder or connect the repository.
4. Set the publish directory to the project root if using the current file paths.
5. Share the generated `netlify.app` URL.

Why this fits:

- Static files work well.
- No server is required.
- Git-connected deploys can update automatically whenever the itinerary data changes.
- Netlify supports drag-and-drop for quick manual publishing and Git for continuous deployment.

Official docs: https://docs.netlify.com/site-deploys/create-deploys/

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

## Good Option: Vercel

Best if you later turn the static dashboard into a React app or want preview deployments from Git.

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the project as a static site or no-build project.
4. Share the generated Vercel URL.

Official docs: https://vercel.com/docs

## Current Workspace Note

This folder is not currently a git repository and has no configured remote. To make the site accessible to other people, the next practical step is to choose a host and publish the project.

## Recommended Publishing Path

For this project:

1. Create a GitHub repository.
2. Push this project to GitHub.
3. Connect the repository to Netlify.
4. Set Netlify to redeploy on every push.
5. Add scheduled monitoring via GitHub Actions later.

This gives both public access and a clean path for automatic itinerary updates.
