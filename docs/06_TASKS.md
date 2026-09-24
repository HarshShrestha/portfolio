# TASKS.md — execution engine

## Protocol
Work the first unchecked task of the earliest incomplete phase (unless given an ID).
Per task: plan → implement → verify → tick box → commit (`P<phase>.<task>: <summary>`).
**Definition of Done (every task):** lint clean · tests pass · build passes · box ticked · committed.

- [x] P1.1 Root: `package.json` with scripts `dev`/`test`/`lint` (npm --prefix both apps), `.gitignore`
- [ ] P1.2 `server/`: Express + helmet + cors + morgan, `GET /api/health`, env config, `.env.example`
- [ ] P1.3 `client/`: Vite + React + Tailwind + react-router, `/api` proxy to :5000, `.env.example`
- [ ] P1.4 ESLint + Prettier in both apps; zero violations
- [ ] P1.5 Verify both apps boot; health check returns ok

## Phase 2 — Data layer & public API
- [ ] P2.1 Mongoose connection with clear fatal-error logging
- [ ] P2.2 Models: Profile, Project, Skill, Message, Admin (per docs/03)
- [ ] P2.3 `scripts/seed.js`: idempotent upserts of ALL seed content; bootstraps admin from env
- [ ] P2.4 Routes+controllers: GET /profile, /projects, /projects/:slug, /skills
- [ ] P2.5 POST /messages: Zod validation, rate limit, generic 201 response
- [ ] P2.6 ApiError class, async wrapper, central error middleware, 404 handler
- [ ] P2.7 Supertest suite (mongodb-memory-server): happy path + validation + 404
- [ ] P2.8 Verify: seed local Mongo, curl every endpoint

## Phase 3 — Admin API
- [ ] P3.1 POST /admin/login: bcrypt verify → signed JWT (12h); generic 401 on failure
- [ ] P3.2 requireAuth middleware; all /admin routes except login protected
- [ ] P3.3 Project CRUD (create/read-all/update/delete)
- [ ] P3.4 Messages: list (+?unread), PATCH read, DELETE
- [ ] P3.5 Tests: auth success, auth failures (no token / bad token), CRUD round-trip

## Phase 4 — Frontend foundation
- [ ] P4.1 Tailwind tokens per docs/05; dark default + toggle persisted in localStorage
- [ ] P4.2 @fontsource fonts (Space Grotesk, Inter, JetBrains Mono); favicon
- [ ] P4.3 Layout: Navbar (sticky, anchors) + Footer (email, socials)
- [ ] P4.4 Primitives: Button, SectionHeading, Tag, Card, Skeleton, ErrorState
- [ ] P4.5 `services/api.js` + `useApi` hook + fallback to `data/content.json` (from docs/03 seed)
- [ ] P4.6 Verify: navigable shell, theme persists, fallback works with server off

## Phase 5 — Pages
- [ ] P5.1 Hero: name, role, headline, CTAs (View projects / Contact), mono accent detail
- [ ] P5.2 About: summary + education card (GPA, coursework)
- [ ] P5.3 Skills: grouped grid
- [ ] P5.4 Projects: 3 featured cards → `/projects/:slug` detail (tagline, highlights, stack, links)
- [ ] P5.5 Certifications strip
- [ ] P5.6 Contact: form → POST /api/messages, inline success/error; socials row
- [ ] P5.7 404 page
- [ ] P5.8 Verify: matches docs/05; responsive 360/768/1280

## Phase 6 — Integration & polish
- [ ] P6.1 Loading/empty/error states on every data section
- [ ] P6.2 SEO: per-page titles/descriptions, OG tags, canonical, robots.txt
- [ ] P6.3 A11y pass: contrast, focus rings, aria labels, keyboard nav, reduced motion
- [ ] P6.4 Lighthouse mobile ≥ 90 across the board; fix findings
- [ ] P6.5 Full manual pass; log results in this file

## Phase 7 — Admin panel
- [ ] P7.1 `/admin` login page; store token; handle 401 (redirect to login)
- [ ] P7.2 Dashboard: project CRUD forms + message inbox (unread badge, mark read, delete)
- [ ] P7.3 Route guard + optimistic UI confirmations
- [ ] P7.4 Verify: full CRUD against local DB

## Phase 8 — Deploy (per docs/07)
- [ ] P8.1 Server Dockerfile + .dockerignore; docker-compose (api + mongo) for local
- [ ] P8.2 Atlas cluster + production seed; Render service with env vars
- [ ] P8.3 Vercel client deploy; set VITE_API_BASE_URL; update CLIENT_ORIGIN CORS
- [ ] P8.4 GitHub Actions CI: lint + test both apps on every PR
- [ ] P8.5 Post-deploy smoke: health, contact form E2E, admin login
- [ ] P8.6 (Optional) custom domain 