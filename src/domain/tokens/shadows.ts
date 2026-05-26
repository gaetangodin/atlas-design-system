/**
 * Shadow tokens — Xeekrs's flat-design defaults.
 *
 * Sourced from `Xeekrsmainapp/tailwind.config.ts` (HeroUI layout
 * shadows). Atlas defaults to flat-and-quiet — `sm` for cards, no
 * shadow on flat surfaces. Heavy elevation is reserved for true
 * overlays (modals, drawers).
 */

export const shadows = {
  none: "none",
  /** Card resting state. Two subtle layers tuned to the earth-ink ink color. */
  sm: "0 1px 2px 0 rgb(18 33 32 / 0.06), 0 1px 2px 0 rgb(18 33 32 / 0.04)",
  /** Hover-lift card, stickied bars. */
  md: "0 4px 10px -2px rgb(18 33 32 / 0.08), 0 2px 4px -1px rgb(18 33 32 / 0.05)",
  /** Modal, drawer, popover — when you need real elevation. */
  lg: "0 12px 30px -8px rgb(18 33 32 / 0.14), 0 6px 12px -4px rgb(18 33 32 / 0.08)",
  /** Reserved — used by the "branded modal" stack for max elevation. */
  xl: "0 24px 48px -12px rgb(18 33 32 / 0.20), 0 8px 16px -4px rgb(18 33 32 / 0.10)",
  inner: "inset 0 1px 2px 0 rgb(18 33 32 / 0.04)",
  /** Focus ring — paired with `ring-ring/50 ring-[3px]` on interactive elements. */
  focusRing: "0 0 0 3px rgb(var(--ring-rgb, 153 199 251) / 0.50)",
} as const;

export type ShadowKey = keyof typeof shadows;
