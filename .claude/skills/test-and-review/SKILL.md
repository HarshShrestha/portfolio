---
name: test-and-review
description: End-to-end testing and review of the portfolio with subagents. Runs lint/test/build gates, audits static purity, content fidelity, animation rules, design tokens and accessibility via parallel reviewer subagents, dispatches validated fixes, and re-verifies until clean. Use when the user asks to "test and review", "verify the project", "certify error-free", or wants a final quality pass before shipping.
---

# Mission

Certify the project as error-free via a gated pipeline. "Error-free" is defined
mechanically — never by vibe:

**CERTIFIED — SHIP-READY** requires ALL of:
1. Gates (lint, test, build) green on two consecutive runs (pre-fix and post-fix).
2. Zero open blocker or major findings.
3. Residuals are minors or user-waived items only.
4. Runtime smoke checks pass.
Anything less → verdict is **NOT CERTIFIED** with a residual table. Never inflate the verdict.

# Hard rules

- NEVER commit, push, merge, or run /project:ship-feature. Leave all changes uncommitted.
- NEVER edit anything in docs/ — docs are the source of truth. A doc/code mismatch is
  a finding for the USER to adjudicate, not something to paper over.
- NEVER weaken tests, delete tests, disable lint rules, or add dependencies to go green.
- NEVER invent content. Content fixes copy strings verbatim from docs/03_CONTENT.md.
- MAX 3 full rounds. If a blocker survives 3 fix attempts, STOP and escalate with your diagnosis.
- Requires a CLEAN working tree at start (commit or stash first). Verify with `git status --porcelain`.

# Input

Optional argument: `full` (default — certify entire src/), `diff` (only files changed
vs main), or a path. Scope is passed to every subagent prompt.

# Pipeline (use TodoWrite to track stages)

## Stage 0 — Inventory
Read CLAUDE.md, docs/06_TASKS.md (current phase), docs/03_CONTENT.md,
docs/04_ANIMATION_SPEC.md, docs/05_DESIGN_SYSTEM.md. Confirm clean tree and
node_modules present (`npm ci` if missing). Report scope and phase, then proceed.

## Stage 1 — Mechanical gates
Dispatch the `verify-runner` subagent with the scope. It returns a pass/fail table.
If ANY gate fails → skip to Stage 4 with gate failures as blocker findings, then
return to Stage 2 after green. (Reviewers still run in Stage 2 regardless — their
findings are static and independent.)

## Stage 2 — Parallel audits
In ONE message, dispatch BOTH reviewers in parallel (independent read-only contexts):
- `guardrails-auditor` — scope + "compare against docs/03_CONTENT.md; CLAUDE.md allowlist"
- `frontend-reviewer` — scope + "rules in docs/04_ANIMATION_SPEC.md and docs/05_DESIGN_SYSTEM.md"
Each must return ONLY a findings table (schema below). Findings without a quoted
code snippet and a cited doc rule are invalid — discard them.

## Stage 3 — Triage (you, the orchestrator)
For every finding: Read the cited file:line yourself. Confirm or discard.
- Discard: hallucinated, already-correct code, style nitpicks with no doc basis, duplicates.
- Blocker = static purity violation, failing gate, content mismatch vs docs/03, a11y blocker.
- Major = animation-rule violation, token violation, missing reduced-motion fallback.
- Minor = hygiene items.
- Needs-user = fix requires a new dependency or a docs/ change → never auto-fix; queue for me.

## Stage 4 — Fix loop
Dispatch `fixer` with the validated blocker+major findings ONLY (numbered, with your
confirmed fix approach). Then dispatch `verify-runner` again.
- Gates green → round complete. Open minors stay queued.
- Gates red → send failures back to `fixer` (max 3 repair attempts, then escalate).
- Repeat rounds 2–3: re-audit ONLY files the fixer touched (both reviewers, narrow scope)
  plus full gates. Stop early the moment a round produces zero new blocker/major findings.

## Stage 5 — Runtime smoke (you)
`npm run build && (npm run preview &)`, then verify:
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:4173/` → 200
- `/resume.pdf` → 200 if the file exists in public/
- `curl -s http://localhost:4173/ | grep -i "harsh kumar shrestha"` → present
- `public/robots.txt` served → 200
Kill the preview server. Interactive checks (modal, copy-email, theme toggle,
reduced-motion emulation) CANNOT be automated here — list them under "Manual remaining".

## Stage 6 — Certification report (final message to me)
1. Verdict line: **CERTIFIED — SHIP-READY** or **NOT CERTIFIED**.
2. Gates table (two runs). 3. Findings ledger: fixed / discarded-as-false / escalated / minor-residual.
4. Residuals with file:line. 5. Manual checklist for me.
6. Append one dated line to docs/verification-log.md:
   `YYYY-MM-DD | scope | rounds | gates P/F | blockers fixed | majors fixed | minors open | verdict`
   (This is the ONLY file the skill may create, and only appending.)

# Finding schema (enforce in every subagent report)

| id | file:line | severity | rule violated (doc + section) | evidence (quoted code) | suggested fix |

# Escalation

Stop and ask me immediately if: a blocker survives 3 rounds · a fix needs a dependency
or docs/ edit · gates cannot go green · working tree was dirty at start.