---
description: Run the full verification suite and report/fix failures
---
1. `npm run lint`, `npm test`, `npm run build`.
2. `npm run preview`, confirm the page loads and key interactions work (theme toggle, nav scroll).
3. For each failure: diagnose root cause, apply minimal fix, re-run. Never weaken tests or disable lint rules to force green.
4. Check animation health: no animations on width/height/top/left; every primitive respects usePrefersReducedMotion.
5. End with a table: check → pass/fail → what you fixed (if anything).