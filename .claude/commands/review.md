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
