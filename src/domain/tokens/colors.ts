/**
 * Color tokens — sourced from the **Xeekrs** design system
 * (`Xeekrsmainapp/src/styles/globals.css` + `src/design-system/color-tokens.ts`).
 *
 * Atlas does NOT own these values; the consumer's `globals.css` is the
 * single source of truth. Here we expose:
 *   1. The token *names* (CSS variable names) that components reach for.
 *   2. Reference *fallback* hex values so tooling, Storybook, and
 *      contrast checks can resolve a real color even if globals.css
 *      isn't loaded.
 *
 * domain/ rule: no framework deps. These are plain strings.
 */

/**
 * Token references — what components actually use. Each entry is a
 * Tailwind utility token (e.g. "primary"), backed by a CSS variable
 * (e.g. `--primary` and the matching `--primary-rgb` triplet) defined
 * by the consumer's stylesheet.
 *
 * Reference fallback values mirror Xeekrs as of 2026-05.
 */
export const tokens = {
  // Surfaces & text
  background: { var: "--background", rgb: "--background-rgb", fallback: "rgb(249 249 244)" },
  foreground: { var: "--foreground", rgb: "--foreground-rgb", fallback: "rgb(18 33 32)" },
  card: { var: "--card", rgb: "--card-rgb", fallback: "rgb(255 255 255)" },
  cardForeground: { var: "--card-foreground", rgb: "--card-foreground-rgb", fallback: "rgb(68 64 60)" },
  popover: { var: "--popover", rgb: "--popover-rgb", fallback: "rgb(252 252 247)" },
  popoverForeground: { var: "--popover-foreground", rgb: "--popover-foreground-rgb", fallback: "rgb(68 64 60)" },

  // Brand & emphasis
  primary: { var: "--primary", rgb: "--primary-rgb", fallback: "rgb(12 33 32)" }, // dark earth ink
  primaryForeground: { var: "--primary-foreground", rgb: "--primary-foreground-rgb", fallback: "rgb(255 255 255)" },
  secondary: { var: "--secondary", rgb: "--secondary-rgb", fallback: "rgb(255 255 255)" },
  secondaryForeground: { var: "--secondary-foreground", rgb: "--secondary-foreground-rgb", fallback: "rgb(12 33 32)" },
  muted: { var: "--muted", rgb: "--muted-rgb", fallback: "rgb(237 237 232)" },
  mutedForeground: { var: "--muted-foreground", rgb: "--muted-foreground-rgb", fallback: "rgb(120 113 108)" },
  accent: { var: "--accent", rgb: "--accent-rgb", fallback: "rgb(76 111 220)" }, // lavender blue
  accentForeground: { var: "--accent-foreground", rgb: "--accent-foreground-rgb", fallback: "rgb(255 255 255)" },
  destructive: { var: "--destructive", rgb: "--destructive-rgb", fallback: "rgb(243 18 96)" }, // brand pink
  destructiveForeground: { var: "--destructive-foreground", rgb: "--destructive-foreground-rgb", fallback: "rgb(255 255 255)" },

  // Semantic status
  success: { var: "--success", rgb: "--success-rgb", fallback: "rgb(16 185 129)" },
  successForeground: { var: "--success-foreground", rgb: "--success-foreground-rgb", fallback: "rgb(255 255 255)" },
  successLight: { var: "--success-light", fallback: "rgb(16 185 129 / 0.1)" },
  error: { var: "--error", rgb: "--error-rgb", fallback: "rgb(239 68 68)" },
  errorForeground: { var: "--error-foreground", rgb: "--error-foreground-rgb", fallback: "rgb(255 255 255)" },
  errorLight: { var: "--error-light", fallback: "rgb(239 68 68 / 0.1)" },
  warning: { var: "--warning", rgb: "--warning-rgb", fallback: "rgb(245 158 11)" },
  warningForeground: { var: "--warning-foreground", rgb: "--warning-foreground-rgb", fallback: "rgb(255 255 255)" },
  warningLight: { var: "--warning-light", fallback: "rgb(245 158 11 / 0.1)" },
  info: { var: "--info", rgb: "--info-rgb", fallback: "rgb(59 130 246)" },
  infoForeground: { var: "--info-foreground", rgb: "--info-foreground-rgb", fallback: "rgb(255 255 255)" },
  infoLight: { var: "--info-light", fallback: "rgb(59 130 246 / 0.1)" },

  // Borders, inputs, focus
  border: { var: "--border", rgb: "--border-rgb", fallback: "rgb(237 237 232)" },
  input: { var: "--input", rgb: "--input-rgb", fallback: "rgb(255 255 255)" },
  inputBackground: { var: "--input-background", rgb: "--input-background-rgb", fallback: "rgb(255 255 255)" },
  ring: { var: "--ring", rgb: "--ring-rgb", fallback: "rgb(153 199 251)" },
} as const;

export type TokenKey = keyof typeof tokens;

/**
 * Helper — produce a `var(--token, fallback)` CSS color string.
 * Useful for places where we need a real color value, not a Tailwind
 * utility class (e.g. inline SVG stroke, CSS custom property values).
 */
export function colorVar(key: TokenKey): string {
  const t = tokens[key];
  return `var(${t.var}, ${t.fallback})`;
}

/**
 * Reference fallback hex map — for tooling that needs raw colors
 * (Storybook color swatches, contrast checks, generated docs).
 * Values are not authoritative at runtime; consumer's CSS wins.
 */
export const fallbackPalette = Object.fromEntries(
  Object.entries(tokens).map(([k, v]) => [k, v.fallback]),
) as Record<TokenKey, string>;
