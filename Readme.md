# Step-by-Step: From `git init` to Running Project

**Mental model first:** *You* only create folders and markdown files. Claude Code creates all the actual code (package.json, React app, Express app) during Phase 1. Don't scaffold anything manually — that's the agent's job.

---

## Step 0 — Install prerequisites (one-time)

Check each of these before going further:

```bash
node -v    # must be v20 or higher
npm -v
git --version
```

| Tool | Why | Get it from |
|---|---|---|
| Node.js 20+ | Runtime for everything | nodejs.org (LTS) |
| Git for Windows | **Required by Claude Code on Windows** (it uses its bash) | git-scm.com — skip if Mac/Linux |
| VS Code | Editing the .md files | code.visualstudio.com |
| MongoDB | Needed from Phase 2 (can install later) | see Step 6 |
| Claude Code | The agent | command below |

Install Claude Code:

```bash
npm install -g @anthropic-ai/claude-code
claude --version
```

The first time you run `claude`, it opens a browser to log in — you need a **Claude Pro/Max subscription** or an **Anthropic Console account** (API billing).

> **Windows tip:** run everything from PowerShell (or Git Bash). Don't use plain `cmd`.

---

## Step 1 — Create the folder skeleton

You're inside `portfolio/` (where you ran `git init`). Run:

```bash
mkdir docs
mkdir .claude\commands     # PowerShell — use: mkdir -p .claude/commands in Git Bash
```

---

## Step 2 — Create the 11 markdown files

Open the folder in VS Code (`code .`), create each file, and **paste the exact content** from my previous message. Copy them precisely — these docs are the spec; don't "improve" them while pasting.

| File to create | Content comes from |
|---|---|
| `CLAUDE.md` | Section 1 |
| `docs/01_PRD.md` | Section 2 |
| `docs/02_ARCHITECTURE.md` | Section 3 |
| `docs/03_DATA_MODELS.md` | Section 4 |
| `docs/04_API_SPEC.md` | Section 5 |
| `docs/05_DESIGN_SYSTEM.md` | Section 6 |
| `docs/06_TASKS.md` | Section 7 |
| `docs/07_DEPLOYMENT.md` | Section 8 |
| `.claude/commands/implement.md` | Section 9 |
| `.claude/commands/verify.md` | Section 10 |
| `.claude/commands/review.md` | Section 11 |

Also create a root `.gitignore` now (needed before your first commit):

```gitignore
node_modules/
.env
.env.local
dist/
build/
coverage/
.DS_Store
*.log
```

Your tree should look like:

```
portfolio/
├── .claude/
│   └── commands/
│       ├── implement.md
│       ├── verify.md
│       └── review.md
├── .gitignore
├── CLAUDE.md
└── docs/
    ├── 01_PRD.md
    ├── 02_ARCHITECTURE.md
    ├── 03_DATA_MODELS.md
    ├── 04_API_SPEC.md
    ├── 05_DESIGN_SYSTEM.md
    ├── 06_TASKS.md
    └── 07_DEPLOYMENT.md
```

---

## Step 3 — Commit the spec

```bash
git add -A
git commit -m "chore: project spec and agent docs"
```

---

## Step 4 — Session 1: Launch Claude Code (Phase 1)

From the **project root** (not a subfolder — it must find `CLAUDE.md`):

```bash
claude
```

- First run: complete login, then answer **"Yes, proceed"** when asked to trust this folder.
- Skip `/init` if it suggests it — you already have a `CLAUDE.md`; `/init` would generate its own and overwrite yours.

Now paste this kickoff prompt:

```
Read CLAUDE.md and docs/06_TASKS.md carefully. Execute Phase 1 (P1.1 → P1.5)
one task at a time, following the loop in CLAUDE.md: plan → implement →
verify → tick the box in TASKS.md → commit.

For each task, show me your plan first and wait for my approval before
writing code. Start with P1.1.
```

### What happens next (so nothing surprises you)

1. Claude reads your docs and proposes a plan for P1.1 (files, dependencies).
2. You approve → it starts writing files and running commands.
3. It will ask **permission before each bash command** (like `npm install`). Approve safe, repeated ones (`npm test`, `npm run lint`) with the *"don't ask again"* option.
4. It ticks the box in `docs/06_TASKS.md` and commits (`P1.1: ...`).
5. Repeat until P1.5 is done.

**Key controls:** press `Esc` to interrupt it anytime · `Shift+Tab` cycles to **plan mode** (it plans, writes zero code until you approve) · `/clear` resets the conversation.

---

## Step 5 — Verify Phase 1 is actually done

Don't trust checkboxes — verify yourself:

```bash
git log --oneline        # expect: P1.5, P1.4, P1.3, P1.2, P1.1 commits

# Terminal 1 — server
cd server && npm run dev     # then open http://localhost:5000/api/health → {"status":"ok"}

# Terminal 2 — client
cd client && npm run dev     # open http://localhost:5173 → Vite + React page
```

Also confirm `docs/06_TASKS.md` has all five P1 boxes checked. If anything fails, go back into Claude and say exactly which command failed and paste the error — that's all it needs.

---

## Step 6 — Set up MongoDB (needed for Session 2)

Pick one — both take ~10 minutes:

- **Option A — Local (recommended for dev):** Install *MongoDB Community Server* (installs as a service on Windows, runs automatically) + *MongoDB Compass* (GUI). Default URI: `mongodb://127.0.0.1:27017/portfolio`
- **Option B — Atlas (zero install):** mongodb.com → free M0 cluster → get connection string. Use this URI for dev and prod.

When Claude finishes P1, it will have created `server/.env.example`. Copy it to `server/.env` and fill in your `MONGODB_URI`.

**Session 2 kickoff prompt:**

```
Read CLAUDE.md and docs/06_TASKS.md. Continue with Phase 2 (P2.1 → P2.8),
one task at a time using the standard loop. MongoDB is running locally and
server/.env is configured. Show me your plan before each task. After P2.8,
show me the curl outputs proving every endpoint works.
```

---

## Step 7 — Repeat the pattern (Phases 3–8)

Each session = same ritual. Between sessions, **always `/clear` first** so context stays clean:

```
Read CLAUDE.md and docs/06_TASKS.md. Continue with Phase <N> tasks,
one task at a time using the standard loop. Show me your plan before
each task. When the phase is complete, run /project:verify and report
a pass/fail table.
```

Note: your custom commands live in `.claude/commands/`, so they're invoked as **`/project:implement`**, **`/project:verify`**, **`/project:review`**.

Phase checkpoints where *you* must look at a browser: after P4, P5, P6, P7. Phase 8 needs accounts on MongoDB Atlas, Render, and Vercel.

---

## Step 8 — The golden rules (read before every session)

1. **Read every plan before approving.** You are the quality gate. 30 seconds of reading saves an hour of undoing.
2. **Watch for scope creep.** If it wants to add Zustand, Framer Motion, or "while I'm here, let me also refactor…" — deny it. The stack table in `CLAUDE.md` is the law.
3. **One phase per session, `/clear` between tasks** if responses start getting sloppy.
4. **If it drifts,** interrupt (`Esc`) and say: *"Stop. Re-read docs/06_TASKS.md. Only work on task P<X.Y>. Revert any out-of-scope changes."*
5. **Never let it tick a checkbox without running the verification** — that's the whole system.
6. **Commit after every phase** (Claude commits per task, but a `git push` at phase end = your backup).

---

**Time expectation:** ~30–45 min for your setup (Steps 0–3), then roughly 30–60 min per phase session. The whole project is realistically 3–5 focused evenings.

Start with Steps 0–3 now, and tell me when you're done or if any command fails — then we'll kick off Session 1 together.