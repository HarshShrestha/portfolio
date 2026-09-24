# Architecture (Static SPA)

```
 src/data/profile.ts ──▶ sections/components ──▶ React SPA
        (hardcoded CV data)     (Framer Motion)
                                    │
                            Vite build ──▶ dist/ ──▶ Vercel / Netlify / GitHub Pages
```

## Data flow
- `profile.ts` exports typed constants: `profile`, `projects`, `skills`, `stats`, `nav`.
- Sections import directly. No context/state library needed.
- Single source of truth: docs/03 defines the file; the file must satisfy its data-integrity test (P3).

## Theming
- `<html>` gets class `dark` (default) or `light`; Tailwind `dark:` variants drive tokens.
- Persisted in `localStorage('theme')`; falls back to `prefers-color-scheme`.
- `useTheme` hook owns reading/writing; `ThemeToggle` animates the icon.

## Project detail modal
- Projects grid holds `selectedProject` state → `AnimatePresence` modal (docs/04: A16).
- Body scroll locked while open; closes on backdrop click + `Esc`.

## Key decisions
- **No runtime fetching** — content is baked at build time. The site cannot break because an API died.
- **CSS-art panels instead of screenshots** — no real project screenshots exist; gradient/mono
  art panels look intentional and load instantly.
- **Framer Motion only** for animation. GSAP is allowed ONLY if a specific effect is
  impossible with Framer Motion — ask first.
- **Fonts self-hosted** via @fontsource (no Google Fonts render-blocking request).
- Keep `react-router-dom` only for `/` + 404 so static hosts serve correctly.
