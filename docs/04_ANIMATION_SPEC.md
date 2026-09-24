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

| ID | Primitive / effect | Behavior | Trigger | Timing |
|----|--------------------|----------|---------|--------|
| A1 | Preloader | Full-screen: name slides up + fades, thin progress bar fills | on load, once | ≤ 1.2s total; skipped if reduced-motion |
| A2 | Stagger (hero entrance) | children fade+rise 24px in sequence | mount | 80ms stagger, 500ms each |
| A3 | Typewriter | cycles `profile.roles` | loop | 60ms/char, hold 2s, delete 30ms/char |
| A4 | GradientOrbs | 2–3 blurred radial blobs slow-drift behind content | always | 20–30s loops; `aria-hidden` |
| A5 | ScrollProgress | 2px accent bar, scaleX along viewport top | scroll | spring-smoothed |
| A6 | Reveal | fade + translateY(24px→0) | inView once | 500ms ease-out |
| A7 | Stagger | orchestrates Reveal children | parent inView | 70ms stagger |
| A8 | Counter | counts 0→value, supports decimals & suffix | inView once | 1.2s easeOut |
| A9 | TiltCard | 3D rotate ±6° following cursor + glare highlight | mousemove | spring; resets on leave |
| A10 | MagneticButton | translates up to 8px toward cursor | mousemove | spring; resets on leave |
| A11 | Marquee | infinite horizontal loop, two rows opposite directions | always | pause on hover |
| A12 | NavUnderline | underline scaleX 0→1 on hover/active section | hover + scroll-spy | 200ms |
| A13 | Timeline | vertical line scaleY grows; cards Reveal as it passes | inView | 700ms line, staggered cards |
| A14 | CopyEmail | button → clipboard; icon morphs to check; toast pops | click | 300ms spring; auto-dismiss 2s |
| A15 | ThemeToggle | sun/moon rotate + crossfade | click | 300ms |
| A16 | Modal | backdrop fade + panel scale 0.96→1 | open/close | 250ms; body scroll-lock; Esc closes |
| A17 | ParallaxHero | hero content opacity 1→0, y 0→40 as user scrolls past | useScroll | linked to scroll |
| A18 | ScrollCue | chevron bounces in hero | loop | 1.5s; hidden when scrolled |

## Micro-interactions (CSS is fine for these)
- Buttons: hover sheen sweep + subtle scale 1.02; Tag pills: hover border-accent glow.
- Cards: hover lift translateY(-2px) + border-color accent.
- Link arrows: translateX on hover.