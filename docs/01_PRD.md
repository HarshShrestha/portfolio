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
| Route | Purpose |
|---|---|
| `/`   | Single scroll page: Hero → Stats → About → Skills → Projects → Education → Certifications → Contact/Footer |
| `*`   | 404 |

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
