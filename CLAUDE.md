# CLAUDE.md — Portfolio: Harsh Kumar Shrestha (STATIC)

Single-page animated portfolio. React 18 + Vite + TypeScript + Tailwind + Framer Motion.
**This site is and must remain 100% static.** No backend, no database, no runtime API calls,
no server code — ever. If a task seems to require one, stop and ask.
`docs/06_TASKS.md` is the single source of truth for scope and progress. Never build
anything not listed there. Do not change scope without asking.

## Stack

| Concern   | Choice                                                                         |
| --------- | ------------------------------------------------------------------------------ |
| Framework | React 18 + Vite + **TypeScript**                                               |
| Styling   | Tailwind (v4 CSS-first via `@theme`, or v3 config — pick one, stay consistent) |
| Animation | framer-motion (only animation library)                                         |
| Icons     | lucide-react                                                                   |
| Routing   | react-router-dom (`/` + `*` 404 only)                                          |
| Tests     | Vitest + React Testing Library                                                 |
| Deploy    | Vercel (primary) · Netlify / GitHub Pages (alternatives)                       |

Allowed dependencies = the list above. Anything else requires my explicit approval.

## Commands

```bash
npm run dev       # http://localhost:5173
npm test
npm run lint
npm run build     # must pass with zero errors
npm run preview   # serve the production build
```

## Project layout

```
portfolio/
├── public/                 # favicon.svg, resume.pdf (I add the PDF myself)
└── src/
    ├── data/profile.ts     # ALL site content, hardcoded (docs/03 is its spec)
    ├── components/
    │   ├── motion/         # Reveal, Stagger, Counter, Typewriter, TiltCard,
    │   │                   # MagneticButton, ScrollProgress, GradientOrbs, Marquee
    │   ├── ui/             # Button, Tag, SectionHeading, Card, ThemeToggle
    │   └── layout/         # Navbar, Footer, Background
    ├── sections/           # Hero, Stats, About, Skills, Projects, Education,
    │                       # Certifications, Contact
    ├── pages/              # Home.tsx, NotFound.tsx, DevShowcase.tsx (dev-only)
    ├── hooks/              # useTheme, usePrefersReducedMotion
    └── styles/index.css    # tokens (@theme) + global styles
```

## Conventions

- TypeScript everywhere; type the data file strictly (`Project`, `SkillCategory`, `Stat`).
- **Copy comes ONLY from `docs/03_CONTENT.md`.** Never invent metrics, taglines, or claims.
- All colors/fonts/spacing from tokens in `docs/05_DESIGN_SYSTEM.md`. No ad-hoc hex values.
- All animations go through `src/components/motion/*` primitives (spec: `docs/04_ANIMATION_SPEC.md`).
  Never sprinkle raw `animate={{...}}` configs in section components — compose the primitives.
- Every animation must respect `prefers-reduced-motion` (handled inside the primitives).
- Project cards use CSS-art gradient panels (docs/05) — **no fake screenshots, no stock images.**
- Commits: `P<phase>.<task>: <imperative summary>` — e.g. `P2.3: add TiltCard and MagneticButton`.

## Agent workflow (every session)

1. Read `docs/06_TASKS.md`. Work the **first unchecked task** of the earliest incomplete phase
   (or the task ID I give you).
2. Per task: **plan → implement → verify (lint/test/build) → update TASKS.md checkbox → commit.**
3. One task = one commit. Never tick a box without running its verification.
4. If blocked, or docs contradict each other: stop and report. Do not improvise.

## Guardrails

- No backend code, no fetch/axios, no env vars with secrets, no .env files.
- No new dependencies without stating why and asking first.
- Site must render correctly at 360px, 768px, and 1280px widths.
- `npm run build` must pass after every task.
