# TASKS.md — execution engine (static build)

## Protocol

Work the first unchecked task of the earliest incomplete phase (unless given an ID).
Per task: plan → implement → verify → tick box → commit (`P<phase>.<task>: <summary>`).
**DoD (every task):** lint clean · tests pass · `npm run build` passes · box ticked · committed.

## Phase 1 — Scaffold

- [x] P1.1 Vite + React + TS at repo root; Tailwind wired; react-router-dom (`/` + `*`); favicon.svg
- [x] P1.2 ESLint + Prettier; scripts `dev/test/lint/build/preview`; zero violations
- [x] P1.3 Vitest + RTL; one smoke test (App renders heading); build passes
- [x] P1.4 Verify: `npm run dev` boots; page renders; `npm test` green

## Phase 2 — Design system + animation toolkit

- [x] P2.1 Tokens in styles/index.css per docs/05 (dark + light); fonts via @fontsource
- [x] P2.2 useTheme + usePrefersReducedMotion hooks; ThemeToggle (A15) persisted
- [x] P2.3 Motion primitives: Reveal, Stagger, GradientOrbs, ScrollProgress (A2, A4–A7)
- [x] P2.4 Motion primitives: Typewriter, Counter, TiltCard, MagneticButton, Marquee (A3, A8–A11)
- [x] P2.5 UI primitives: Button, Tag, SectionHeading, Card (micro-interactions per docs/05)
- [x] P2.6 Dev-only `/dev` showcase page rendering every primitive (clearly labeled, linked in footer during dev)
- [x] P2.7 Verify: showcase page demonstrates all animations; reduced-motion toggle disables them

## Phase 3 — Content layer

- [x] P3.1 `src/data/profile.ts` with types, EXACTLY per docs/03
- [x] P3.2 Data-integrity test: every project ≥3 highlights + ≥3 tech + unique slug; stats have labels; no TODO left in final data test (TODOs allowed until P7)
- [x] P3.3 Verify: test green; content diffed against docs/03 line by line

## Phase 4 — Shell: Background, Navbar, Hero, Footer

- [x] P4.1 Layout Background: orbs + grid + noise (aria-hidden, fixed, behind content)
- [x] P4.2 Navbar: sticky glass, anchors, scroll-spy + NavUnderline (A12), ScrollProgress (A5), ThemeToggle
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
