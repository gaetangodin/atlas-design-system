/**
 * Border-radius tokens — sourced from Xeekrs.
 *
 * Brand chain (from `Xeekrsmainapp/tailwind.config.ts`):
 *   sm   ·  6px  · inputs / nested chips
 *   md   ·  8px  · tags / chips
 *   lg   · 12px · default for components (Card, Input, Select, …)
 *   2xl  · 24px · modals + drawers
 *   5xl  · 40px · hub / caseload hero bands
 *   full · pill · buttons + badges (BRAND DEFAULT for CTAs)
 *
 * All values resolve through `--radius` so the consumer can shift the
 * whole chain at once.
 */

export const radius = {
  none: "0",
  sm: "calc(var(--radius, 12px) - 6px)", // 6px
  md: "calc(var(--radius, 12px) - 4px)", // 8px
  DEFAULT: "calc(var(--radius, 12px) - 2px)", // 10px
  lg: "var(--radius, 12px)", // 12px
  xl: "calc(var(--radius, 12px) + 4px)", // 16px
  "2xl": "1.5rem", // 24px — modals / drawers
  "5xl": "2.5rem", // 40px — hero bands
  full: "9999px", // pill — primary CTAs, badges, avatars
} as const;

export type RadiusKey = keyof typeof radius;
