# Deployment (static)

Primary: **Vercel**. Alternatives: Netlify, GitHub Pages.

## Vercel (recommended)
1. Push repo to GitHub.
2. vercel.com → Import repo → framework auto-detects Vite. No env vars needed.
3. Deploy → verify: fonts load, animations run, `/resume.pdf` downloads, unknown URL shows 404.

## GitHub Pages (alternative)
- Requires `base: "/<repo-name>/"` in vite.config for project pages; use a 404.html copy of
  index.html for client routing. Prefer Vercel/Netlify unless you want Pages specifically.

## CI — `.github/workflows/ci.yml`
On push/PR: `npm ci`, `npm run lint`, `npm test`, `npm run build` (Node 20).

## Assets I must add manually
- `public/resume.pdf` (export from my CV) — referenced by the Download Résumé button.
- Real GitHub repo URLs for the three projects (P7.2).

## Post-deploy smoke
- Lighthouse on prod URL (mobile) meets PRD targets.
- Reduced-motion emulation (DevTools) disables animations.
- All anchors scroll correctly; modal works; copy-email works.