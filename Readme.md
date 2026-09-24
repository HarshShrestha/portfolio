Got it — this actually makes the project **much simpler and faster**: no Express, no MongoDB, no admin panel, no auth. It becomes a pure React + Vite + Tailwind SPA with all CV content hardcoded, and the freed-up effort goes into a proper animation layer (Framer Motion).

## What changed vs. the MERN plan

|                | Old (MERN)         | New (Static)                                    |
| -------------- | ------------------ | ----------------------------------------------- |
| Backend / DB   | Express + MongoDB  | ❌ none — hard rule                             |
| Content source | API + seed script  | `src/data/profile.ts` (hardcoded from your CV)  |
| Contact form   | POST /api/messages | Email copy-to-clipboard + socials (static-safe) |
| Admin panel    | JWT dashboard      | ❌ dropped                                      |
| Animations     | Minimal            | **Core feature** — dedicated spec doc           |
| Sessions       | 8                  | 8 (but each much shorter — ~2–3 evenings total) |
| Docs           | 7 files            | 7 files (delete `04_API_SPEC`, rename/add two)  |

**The plan:** you still only create/replace markdown files — Claude Code writes all code. Same ritual as before: one phase per session, plan → approve → implement → verify → tick → commit.

| Session | Phase                                            | You'll see                                |
| ------- | ------------------------------------------------ | ----------------------------------------- |
| 1       | P1 Scaffold                                      | App boots with Tailwind                   |
| 2       | P2 Design system + **animation toolkit**         | `/dev` showcase page with every animation |
| 3       | P3 Content layer                                 | Typed CV data + integrity tests           |
| 4       | P4 Navbar + Hero + Footer                        | Animated hero live                        |
| 5       | P5 About, Skills, Stats, Education, Certs        | Scrolling sections with reveals           |
| 6       | P6 Projects (tilt cards + modal) + Contact       | Full site                                 |
| 7       | P7 Polish: SEO, a11y, reduced-motion, Lighthouse | Final quality pass                        |
| 8       | P8 Deploy                                        | Live URL on Vercel                        |

---

# The files

Do this migration in your repo:

```bash
git rm docs/04_API_SPEC.md
git mv docs/03_DATA_MODELS.md docs/03_CONTENT.md   # then replace contents below
# replace contents of: CLAUDE.md, docs/01_PRD.md, docs/02_ARCHITECTURE.md,
#                      docs/05_DESIGN_SYSTEM.md, docs/06_TASKS.md, docs/07_DEPLOYMENT.md
# create:             docs/04_ANIMATION_SPEC.md  + update .claude/commands/*
git add -A && git commit -m "chore: pivot spec to static animated portfolio"
```

## 1. `CLAUDE.md`

````md
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
````

## 2. `docs/01_PRD.md`

```md
# PRD — Personal Portfolio (Harsh Kumar Shrestha) — Static

## Goal

A fast, dark-first, heavily animated developer portfolio that presents Harsh's CV content
and gets recruiters to the projects and contact info fast. Pure static SPA — deployable
anywhere, zero backend.

## Audience

- Recruiters & hiring managers (primary): scan projects in < 60s, find links/contact instantly.
- Fellow developers (secondary): judge craft by the site itself.

## Success criteria

- Lighthouse (mobile): Performance ≥ 85, Accessibility / Best Practices / SEO ≥ 95.
- Fully responsive 360px → 1440px.
- Rich animation layer per docs/04, fully disabled under `prefers-reduced-motion`.
- Site works offline after first load (no runtime network deps besides nothing).
- Content matches the CV exactly — every number traceable to docs/03.

## Routes

| Route | Purpose                                                                                                    |
| ----- | ---------------------------------------------------------------------------------------------------------- |
| `/`   | Single scroll page: Hero → Stats → About → Skills → Projects → Education → Certifications → Contact/Footer |
| `*`   | 404                                                                                                        |

Project details open in an animated modal (no separate routes needed).

## Functional requirements

1. All content hardcoded in `src/data/profile.ts` from docs/03.
2. Dark theme default with animated light/dark toggle, persisted in localStorage.
3. Contact section: click-to-copy email with animated confirmation + social links + Download Résumé (`/resume.pdf`).
4. Sticky navbar with scroll progress bar, anchor links, active-section highlighting.
5. Dev-only `/dev` showcase route during development (P2), removed in P7.

## MoSCoW

- **Must:** all 8 sections, animation toolkit, theme toggle, modal project details, 404, responsive, reduced-motion support.
- **Should:** Lighthouse targets, SEO meta/OG tags, GitHub Actions CI, scroll-spy nav.
- **Won't (v1):** backend/CMS, contact-form submission backend (may add Web3Forms later), blog, i18n, analytics, real screenshots.
```

## 3. `docs/02_ARCHITECTURE.md`

````md
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
````

## 4. `docs/03_CONTENT.md`

````md
# Content — single source of truth (from Harsh's CV)

`src/data/profile.ts` must contain EXACTLY this data. No invented claims. Links marked
TODO: replace with real repo URLs before deploy (P7 task).

```ts
export type Project = {
  slug: string;
  title: string;
  tagline: string;
  techStack: string[];
  highlights: string[];
  accent: 'emerald' | 'violet' | 'amber';
  github?: string;
  live?: string;
  order: number;
};

export const profile = {
  name: 'Harsh Kumar Shrestha',
  role: 'Full-Stack Developer',
  // typewriter rotation — derived from CV summary/skills, allowed verbatim:
  roles: ['Full-Stack Developer', 'Agentic AI Builder', 'Mathematics & Computing'],
  location: 'Ranchi, Jharkhand, India',
  email: 'harsh.work4365@gmail.com',
  phone: '+91 8092614546',
  socials: {
    github: 'https://github.com/HarshShrestha',
    linkedin: 'https://linkedin.com/in/harsh-kumar-shrestha',
    leetcode: 'https://leetcode.com/harshshrestha',
  },
  summary:
    'Driven Full-Stack Developer skilled in Python, Node.js, and React.js. Experienced in ' +
    'building scalable microservices, gRPC APIs, and integrating Agentic AI solutions. ' +
    'Proficient in PostgreSQL, Redis, Docker, and system design, with a strong focus on ' +
    'writing clean, testable code.',
  education: {
    school: 'Birla Institute of Technology, Mesra',
    degree: 'Integrated M.Sc. — Mathematics & Computing',
    grade: 'GPA 9.10 / 10.00',
    period: 'August 2023 — Expected May 2028',
    location: 'Ranchi, Jharkhand',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'System Design',
      'Web Technologies',
    ],
  },
  certifications: [
    { title: 'Linux & SQL', issuer: 'Google' },
    { title: 'Data Analysis with Python', issuer: 'Online Certification' },
  ],
};

export const stats = [
  { value: 70, suffix: '%', label: 'user queries automated with LLMs' },
  { value: 10000, suffix: '+', label: 'concurrent users supported' },
  { value: 5000, suffix: '+', label: 'daily transactions processed' },
  { value: 9.1, decimals: 1, suffix: '', label: 'GPA at BIT Mesra' },
];

export const projects: Project[] = [
  {
    slug: 'agentic-ai-support',
    order: 1,
    accent: 'emerald',
    title: 'Agentic AI Customer Support Platform',
    tagline: 'LLM-powered support platform automating 70% of user queries.',
    techStack: ['React.js', 'Node.js', 'Python', 'LLMs', 'Redis', 'PostgreSQL', 'gRPC'],
    highlights: [
      'Built a full-stack Agentic AI platform using React.js and Node.js, automating 70% of user queries via LLMs.',
      'Engineered Python backend microservices to process LLM prompts, reducing response latency by 50ms using Redis caching.',
      'Developed RESTful and gRPC APIs for frontend-backend communication, ensuring 99.9% uptime and persistent data in PostgreSQL.',
    ],
    github: 'https://github.com/HarshShrestha', // TODO: real repo
  },
  {
    slug: 'realtime-collab-tool',
    order: 2,
    accent: 'violet',
    title: 'Real-Time Event-Driven Collaboration Tool',
    tagline: 'Event-driven collaboration tool supporting 10,000 concurrent users.',
    techStack: ['Node.js', 'React.js', 'WebSockets', 'Redis', 'Docker', 'gRPC'],
    highlights: [
      'Built an event-driven collaboration tool supporting 10,000 concurrent users using Node.js, React.js, and WebSockets.',
      'Designed microservices architecture with gRPC APIs, improving inter-service communication speed by 40% compared to REST.',
      'Integrated Redis for session management and PostgreSQL for data storage, ensuring scalable and testable code.',
    ],
    github: 'https://github.com/HarshShrestha', // TODO: real repo
  },
  {
    slug: 'cloud-ecommerce-backend',
    order: 3,
    accent: 'amber',
    title: 'Cloud-Native E-Commerce Backend',
    tagline: 'Scalable e-commerce backend processing 5,000+ daily transactions.',
    techStack: ['Python', 'PostgreSQL', 'Docker', 'CI/CD', 'Redis'],
    highlights: [
      'Developed a scalable Python backend processing 5,000+ daily transactions, utilizing PostgreSQL for data persistence.',
      'Containerized backend services using Docker and automated deployments via CI/CD pipelines, reducing release time by 30%.',
      'Optimized database load by 40% by implementing Redis caching and enterprise security protocols.',
    ],
    github: 'https://github.com/HarshShrestha', // TODO: real repo
  },
];

export const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript/TypeScript', 'Java', 'C++', 'SQL'] },
  { category: 'Frontend', items: ['React.js', 'HTML/CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'gRPC'] },
  { category: 'Architecture', items: ['Event-Driven Systems', 'Microservices', 'System Design'] },
  { category: 'Databases & Caching', items: ['PostgreSQL', 'MongoDB', 'Redis', 'WebSockets'] },
  { category: 'AI & DevOps', items: ['Agentic AI', 'LLMs', 'Docker', 'CI/CD'] },
  { category: 'CS Fundamentals', items: ['Data Structures & Algorithms', 'OOP', 'Unit Testing'] },
];
```
````

## 5. `docs/04_ANIMATION_SPEC.md`

```md
# Animation Spec — the core feature

All effects are implemented ONCE as primitives in `src/components/motion/` and composed
by sections. IDs below are referenced by TASKS.

## Global motion rules

- Animate **transform and opacity only**. No width/height/top/left animations (layout thrash).
- Reveals: 400–600ms, ease-out. Interactions: springs (stiffness ~300, damping ~25).
- Every primitive wraps logic in `usePrefersReducedMotion` → reduced-motion fallback is
  opacity-only (or none). Never rely on CSS `@media` alone for JS-driven effects.
- Use `whileInView` with `viewport={{ once: true, margin: "-80px" }}` for scroll reveals.
- Lazy-mount heavy below-fold sections; keep hero lightweight.

## Inventory

| ID  | Primitive / effect      | Behavior                                                     | Trigger            | Timing                                  |
| --- | ----------------------- | ------------------------------------------------------------ | ------------------ | --------------------------------------- |
| A1  | Preloader               | Full-screen: name slides up + fades, thin progress bar fills | on load, once      | ≤ 1.2s total; skipped if reduced-motion |
| A2  | Stagger (hero entrance) | children fade+rise 24px in sequence                          | mount              | 80ms stagger, 500ms each                |
| A3  | Typewriter              | cycles `profile.roles`                                       | loop               | 60ms/char, hold 2s, delete 30ms/char    |
| A4  | GradientOrbs            | 2–3 blurred radial blobs slow-drift behind content           | always             | 20–30s loops; `aria-hidden`             |
| A5  | ScrollProgress          | 2px accent bar, scaleX along viewport top                    | scroll             | spring-smoothed                         |
| A6  | Reveal                  | fade + translateY(24px→0)                                    | inView once        | 500ms ease-out                          |
| A7  | Stagger                 | orchestrates Reveal children                                 | parent inView      | 70ms stagger                            |
| A8  | Counter                 | counts 0→value, supports decimals & suffix                   | inView once        | 1.2s easeOut                            |
| A9  | TiltCard                | 3D rotate ±6° following cursor + glare highlight             | mousemove          | spring; resets on leave                 |
| A10 | MagneticButton          | translates up to 8px toward cursor                           | mousemove          | spring; resets on leave                 |
| A11 | Marquee                 | infinite horizontal loop, two rows opposite directions       | always             | pause on hover                          |
| A12 | NavUnderline            | underline scaleX 0→1 on hover/active section                 | hover + scroll-spy | 200ms                                   |
| A13 | Timeline                | vertical line scaleY grows; cards Reveal as it passes        | inView             | 700ms line, staggered cards             |
| A14 | CopyEmail               | button → clipboard; icon morphs to check; toast pops         | click              | 300ms spring; auto-dismiss 2s           |
| A15 | ThemeToggle             | sun/moon rotate + crossfade                                  | click              | 300ms                                   |
| A16 | Modal                   | backdrop fade + panel scale 0.96→1                           | open/close         | 250ms; body scroll-lock; Esc closes     |
| A17 | ParallaxHero            | hero content opacity 1→0, y 0→40 as user scrolls past        | useScroll          | linked to scroll                        |
| A18 | ScrollCue               | chevron bounces in hero                                      | loop               | 1.5s; hidden when scrolled              |

## Micro-interactions (CSS is fine for these)

- Buttons: hover sheen sweep + subtle scale 1.02; Tag pills: hover border-accent glow.
- Cards: hover lift translateY(-2px) + border-color accent.
- Link arrows: translateX on hover.
```

## 6. `docs/05_DESIGN_SYSTEM.md`

```md
# Design System — "Neon Terminal"

Dark-first developer aesthetic: near-black canvas, drifting aurora blobs, glassy surfaces,
mono accents, emerald→cyan gradient energy. Animated but restrained — motion serves
hierarchy, never decorates for its own sake.

## Tokens

Dark (default) Light

- bg: #07090D - bg: #FAFBFC
- surface: #0D1219 (glass: 70% opacity + backdrop-blur) - surface: #FFFFFF
- border: #1C2530 - border: #E2E8F0
- text: #E6EDF3 - text: #0F172A
- muted: #8B98A5 - muted: #64748B
- accent: #34D399 (emerald) - accent: #059669
- accent-2:#22D3EE (cyan) - accent-2:#0891B2
- accent-3:#A78BFA (violet, aurora/projects) - accent-3:#7C3AED

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
```

## 7. `docs/06_TASKS.md`

```md
# TASKS.md — execution engine (static build)

## Protocol

Work the first unchecked task of the earliest incomplete phase (unless given an ID).
Per task: plan → implement → verify → tick box → commit (`P<phase>.<task>: <summary>`).
**DoD (every task):** lint clean · tests pass · `npm run build` passes · box ticked · committed.

## Phase 1 — Scaffold

- [ ] P1.1 Vite + React + TS at repo root; Tailwind wired; react-router-dom (`/` + `*`); favicon.svg
- [ ] P1.2 ESLint + Prettier; scripts `dev/test/lint/build/preview`; zero violations
- [ ] P1.3 Vitest + RTL; one smoke test (App renders heading); build passes
- [ ] P1.4 Verify: `npm run dev` boots; page renders; `npm test` green

## Phase 2 — Design system + animation toolkit

- [ ] P2.1 Tokens in styles/index.css per docs/05 (dark + light); fonts via @fontsource
- [ ] P2.2 useTheme + usePrefersReducedMotion hooks; ThemeToggle (A15) persisted
- [ ] P2.3 Motion primitives: Reveal, Stagger, GradientOrbs, ScrollProgress (A2, A4–A7)
- [ ] P2.4 Motion primitives: Typewriter, Counter, TiltCard, MagneticButton, Marquee (A3, A8–A11)
- [ ] P2.5 UI primitives: Button, Tag, SectionHeading, Card (micro-interactions per docs/05)
- [ ] P2.6 Dev-only `/dev` showcase page rendering every primitive (clearly labeled, linked in footer during dev)
- [ ] P2.7 Verify: showcase page demonstrates all animations; reduced-motion toggle disables them

## Phase 3 — Content layer

- [ ] P3.1 `src/data/profile.ts` with types, EXACTLY per docs/03
- [ ] P3.2 Data-integrity test: every project ≥3 highlights + ≥3 tech + unique slug; stats have labels; no TODO left in final data test (TODOs allowed until P7)
- [ ] P3.3 Verify: test green; content diffed against docs/03 line by line

## Phase 4 — Shell: Background, Navbar, Hero, Footer

- [ ] P4.1 Layout Background: orbs + grid + noise (aria-hidden, fixed, behind content)
- [ ] P4.2 Navbar: sticky glass, anchors, scroll-spy + NavUnderline (A12), ScrollProgress (A5), ThemeToggle
- [ ] P4.3 Hero: staggered entrance (A2), gradient name, Typewriter roles (A3), CTAs (MagneticButton), ParallaxHero (A17), ScrollCue (A18)
- [ ] P4.4 Stats strip: glass band, 4 Counters (A8)
- [ ] P4.5 Footer: email, socials, "Built with React + Tailwind", /dev link (dev only)
- [ ] P4.6 Verify: 360/768/1280 screenshots-checked; reduced-motion pass

## Phase 5 — Content sections

- [ ] P5.1 About: summary + quick facts (location, email, phone)
- [ ] P5.2 Education: Timeline (A13) with coursework pills
- [ ] P5.3 Skills: Marquee rows (A11) + category grid
- [ ] P5.4 Certifications strip
- [ ] P5.5 Verify: all reveals fire once; no layout shift on load

## Phase 6 — Projects + Contact

- [ ] P6.1 Projects grid: TiltCards (A9) with CSS-art headers per accent + Stagger entrance
- [ ] P6.2 Project modal (A16): full highlights, tech tags, links; Esc/backdrop close; scroll-lock
- [ ] P6.3 Contact: CopyEmail (A14), phone, socials (magnetic), Download Résumé button → /resume.pdf
- [ ] P6.4 Verify: keyboard opens/closes modal; copy works; focus states visible

## Phase 7 — Polish & hardening

- [ ] P7.1 Remove `/dev` route + DevShowcase; footer dev link removed
- [ ] P7.2 Replace TODO project repo links (I provide URLs); remove TODO allowance from P3.2 test
- [ ] P7.3 SEO: index.html title/description, OG/Twitter tags, theme-color, robots.txt; 404 page styled
- [ ] P7.4 A11y audit: contrast, focus rings, aria-labels, tab order, reduced-motion full-site pass
- [ ] P7.5 Lighthouse mobile: Perf ≥ 85, A11y/BP/SEO ≥ 95; fix all findings
- [ ] P7.6 Full manual pass; record results here

## Phase 8 — Deploy (docs/07)

- [ ] P8.1 GitHub Actions CI: lint + test + build on every push/PR
- [ ] P8.2 Deploy to Vercel; verify prod URL, fonts, animations, 404
- [ ] P8.3 (Optional) custom domain + real screenshots if I supply any
```

## 8. `docs/07_DEPLOYMENT.md`

```md
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
```

## 9. `.claude/commands/implement.md`

```md
---
description: Implement the next unchecked task (or a given task ID) through the full loop
argument-hint: [task-id e.g. P2.4]
---

Target: $ARGUMENTS — if empty, pick the first unchecked task in the earliest incomplete phase of docs/06_TASKS.md.

1. Read CLAUDE.md, docs/06_TASKS.md, and every doc the task references (docs/03 for content, docs/04 for animations, docs/05 for design).
2. Present a short implementation plan (files to create/modify, which motion primitives, verification steps) and WAIT for my approval before writing code.
3. Implement the task. Stay within its scope — no extra features, no drive-by refactors, no new dependencies.
4. Verify: `npm run lint`, `npm test`, `npm run build`. Fix failures before continuing.
5. Tick the task's checkbox in docs/06_TASKS.md.
6. Commit: `P<phase>.<task>: <imperative summary>` (only files related to this task).
7. If anything blocks you or a doc conflicts with reality, stop and report — do not improvise.
```

## 10. `.claude/commands/verify.md`

```md
---
description: Run the full verification suite and report/fix failures
---

1. `npm run lint`, `npm test`, `npm run build`.
2. `npm run preview`, confirm the page loads and key interactions work (theme toggle, nav scroll).
3. For each failure: diagnose root cause, apply minimal fix, re-run. Never weaken tests or disable lint rules to force green.
4. Check animation health: no animations on width/height/top/left; every primitive respects usePrefersReducedMotion.
5. End with a table: check → pass/fail → what you fixed (if anything).
```

## 11. `.claude/commands/review.md`

```md
---
description: Review current diff (or last commit) against project conventions
---

Review the current uncommitted diff (or last commit if clean) as a strict senior reviewer. Check:

1. **Correctness** — logic errors, missing cleanup (event listeners, rAF, springs), memory leaks in motion primitives.
2. **Static purity** — NO fetch/API/env/backend code anywhere. Violations are blockers.
3. **Content fidelity** — every string traceable to docs/03_CONTENT.md; no invented metrics or copy.
4. **Animation rules** — docs/04 inventory respected; transform/opacity only; reduced-motion fallbacks; primitives reused, no inline one-off animate configs in sections.
5. **Design tokens** — no ad-hoc hex values; docs/05 tokens only. No fake screenshots/stock images.
6. **A11y** — landmarks, labels, focus rings, keyboard operability, aria-hidden decorative layers.

Output a findings table: file:line → severity (blocker/major/minor) → issue → suggested fix.
Do not fix anything yet — wait for my approval, then fix only approved items.
```

---

# Then run it

**Session 1 prompt:**

```
Read CLAUDE.md and docs/06_TASKS.md. Execute Phase 1 (P1.1 → P1.4) one task
at a time, following the loop in CLAUDE.md. Show me your plan before each
task and wait for approval. Start with P1.1.
```

**Session 2 is the fun one** — when it finishes P2, open `/dev` and watch every animation before letting it build real sections. If any effect feels cheap, say so _there_, while it's still just primitives.

Three things only you do along the way: drop `resume.pdf` into `public/` (before P6.3), give real GitHub repo URLs (before P7.2), and eyeball the site at 360px width after every UI phase.

Want me to also spec the exact hero copy layout (what line goes where, sizes, order) so the hero — the 5-second impression — lands exactly right?
