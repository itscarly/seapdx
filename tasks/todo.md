# Local + Public Access Plan

## Checklist

- [x] Add one clear local static-server workflow to project docs.
- [x] Document Netlify as the public Git-backed hosting path for the same codebase.
- [x] Add a simple local serve command without introducing a backend.
- [x] Verify local asset paths still work from the project root.
- [x] Run validation checks and record the result.

## Review

- Local static-server workflow documented in `README.md` and `docs/local-development.md`.
- Public hosting guidance tightened in `docs/deployment.md` around a single Git-backed Netlify path.
- `npm run serve` added for project-root static serving without adding a backend.
- `npm run validate` passed on May 6, 2026.
- Local browser verification passed at `http://127.0.0.1:4173/`, which resolved to `http://127.0.0.1:4173/dashboards/html/index.html`.
