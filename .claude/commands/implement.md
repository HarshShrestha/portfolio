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
