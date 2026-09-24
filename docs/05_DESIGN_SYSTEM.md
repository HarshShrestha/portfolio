# Design System — "Neon Terminal"

Dark-first developer aesthetic: near-black canvas, drifting aurora blobs, glassy surfaces,
mono accents, emerald→cyan gradient energy. Animated but restrained — motion serves
hierarchy, never decorates for its own sake.

## Tokens

Dark (default)                          Light
- bg:      #07090D                      - bg:      #FAFBFC
- surface: #0D1219 (glass: 70% opacity + backdrop-blur)  - surface: #FFFFFF
- border:  #1C2530                      - border:  #E2E8F0
- text:    #E6EDF3                      - text:    #0F172A
- muted:   #8B98A5                      - muted:   #64748B
- accent:  #34D399 (emerald)            - accent:  #059669
- accent-2:#22D3EE (cyan)               - accent-2:#0891B2
- accent-3:#A78BFA (violet, aurora/projects)  - accent-3:#7C3AED

Gradients: `accent → accent-2` for name/CTA highlights; per-project accent from data
(emerald / violet / amber #FBBF24) colors that project's CSS-art panel.

Fonts (@fontsource, self-hosted): **Space Grotesk** headings · **Inter** body ·
**JetBrains Mono** eyebrows, tags, typewriter, counters.
Scale: 14/16/20/24/32; hero name clamp(2.75rem → 4.5rem). Radius: 12px cards, full pills.

## Signature pieces
- **Background:** fixed `GradientOrbs` (A4) + faint mono grid overlay (2% opacity) + noise texture.
- **Project card:** TiltCard shell → CSS-art header (per-accent gradient mesh + oversized mono
  slug text + circuit-line pattern), body with title/tagline/tags/links.
- **Stats strip:** glass band under hero, four Counter items, mono labels.
- **Skills:** two Marquee rows (opposite directions) of mono pills; below, category grid cards.
- **Education:** vertical Timeline (A13) with glowing nodes.
- **SectionHeading:** mono eyebrow `// 01 — about` + gradient underline accent.

## Accessibility
- WCAG AA contrast in both themes; visible focus rings (`:focus-visible`) always.
- All decorative animation layers `aria-hidden`; reduced-motion fallbacks per docs/04.
- Full keyboard operability: nav, cards (Enter opens modal), modal (Esc/tab-trap), theme toggle.