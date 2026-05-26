/**
 * Typography tokens — sourced from the Xeekrs design system.
 *
 * Atlas does not own font families; the consumer defines them via
 * `--font-family-heading`, `--font-family-body`, `--font-family-base`
 * in `globals.css`. Reference values: Raleway (heading), Open Sans
 * (body / base).
 *
 * The text scale and weight scale are fixed (Tailwind-aligned) and
 * surfaced as CSS variables (`--text-xs`, `--font-weight-medium`, ...)
 * so utilities like `text-base` and `font-medium` resolve correctly.
 */

/** CSS variable references for font families. */
export const fontFamilyVars = {
  heading: "var(--font-family-heading, 'Raleway', sans-serif)",
  body: "var(--font-family-body, 'Open Sans', sans-serif)",
  base: "var(--font-family-base, 'Open Sans', sans-serif)",
} as const;

export const fontSizes = {
  xs: { size: "var(--text-xs, 12px)", lineHeight: "16px" },
  sm: { size: "var(--text-sm, 14px)", lineHeight: "20px" },
  base: { size: "var(--text-base, 16px)", lineHeight: "24px" },
  lg: { size: "var(--text-lg, 18px)", lineHeight: "28px" },
  xl: { size: "var(--text-xl, 20px)", lineHeight: "28px" },
  "2xl": { size: "var(--text-2xl, 24px)", lineHeight: "32px" },
  "3xl": { size: "var(--text-3xl, 30px)", lineHeight: "36px" },
  "4xl": { size: "var(--text-4xl, 36px)", lineHeight: "40px" },
} as const;

export const fontWeights = {
  regular: "var(--font-weight-normal, 400)",
  medium: "var(--font-weight-medium, 500)",
  semibold: "var(--font-weight-semibold, 600)",
  bold: "var(--font-weight-bold, 700)",
} as const;

/**
 * Named text style tokens — what designers reach for in Figma.
 * Components compose these via Tailwind utility classes
 * (`text-base font-medium`), not by reading these directly.
 */
export const textStyles = {
  body: { fontSize: fontSizes.base.size, lineHeight: fontSizes.base.lineHeight, fontWeight: fontWeights.regular, fontFamily: fontFamilyVars.body },
  bodyMedium: { fontSize: fontSizes.base.size, lineHeight: fontSizes.base.lineHeight, fontWeight: fontWeights.medium, fontFamily: fontFamilyVars.body },
  bodySemibold: { fontSize: fontSizes.base.size, lineHeight: fontSizes.base.lineHeight, fontWeight: fontWeights.semibold, fontFamily: fontFamilyVars.body },
  caption: { fontSize: fontSizes.sm.size, lineHeight: fontSizes.sm.lineHeight, fontWeight: fontWeights.regular, fontFamily: fontFamilyVars.body },
  captionMedium: { fontSize: fontSizes.sm.size, lineHeight: fontSizes.sm.lineHeight, fontWeight: fontWeights.medium, fontFamily: fontFamilyVars.body },
  small: { fontSize: fontSizes.xs.size, lineHeight: "16px", fontWeight: fontWeights.regular, fontFamily: fontFamilyVars.body },
  h1: { fontSize: fontSizes["4xl"].size, lineHeight: "1.1", fontWeight: fontWeights.bold, fontFamily: fontFamilyVars.heading },
  h2: { fontSize: fontSizes["3xl"].size, lineHeight: "1.2", fontWeight: fontWeights.bold, fontFamily: fontFamilyVars.heading },
  h3: { fontSize: fontSizes["2xl"].size, lineHeight: "1.25", fontWeight: fontWeights.semibold, fontFamily: fontFamilyVars.heading },
  h4: { fontSize: fontSizes.xl.size, lineHeight: "1.3", fontWeight: fontWeights.semibold, fontFamily: fontFamilyVars.heading },
} as const;

export type TextStyle = keyof typeof textStyles;
