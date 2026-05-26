/**
 * Brand color ramps ported from Xeekrs.
 *
 * Each ramp is a 10-step OKLCH-perceptual scale generated from a brand
 * anchor color. The Atlas semantic tokens in `colors.ts` (primary,
 * success, warning, …) continue to alias each ramp's DEFAULT step — so
 * `bg-primary` keeps working unchanged. The ramps below add the
 * underlying scale so apps can reach for `bg-lavender-200` or
 * `text-earth-700` when a semantic name doesn't fit.
 *
 * **Why ramps live in `domain/`:** they are framework-agnostic data,
 * the lowest layer in the system. The Tailwind preset
 * (`infrastructure/tailwind/preset.ts`) consumes them and emits named
 * utilities — `bg-lavender-500`, not `bg-[var(--lavender-500)]`.
 */

export type RampStep =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type ColorRamp = Record<RampStep, string> & {
  DEFAULT: string;
  foreground: string;
};

/* ------------------------------------------------------------------ */
/* Stone — neutral paper / borders (Atlas default ramp).                */
/* ------------------------------------------------------------------ */
export const stone: ColorRamp = {
  50: "#FCFCF6",
  100: "#F8F8F2",
  200: "#E3E3DD",
  300: "#CACAC0",
  400: "#ACACA1",
  500: "#87877A",
  600: "#636354",
  700: "#444333",
  800: "#282716",
  900: "#111001",
  DEFAULT: "#F8F8F2",
  foreground: "#0C2120",
};

/* ------------------------------------------------------------------ */
/* Lavender — primary CTAs (publish, send, primary submit).             */
/* ------------------------------------------------------------------ */
export const lavender: ColorRamp = {
  50: "#E8F6FF",
  100: "#DBEBFF",
  200: "#C6D9FF",
  300: "#AEC0F9",
  400: "#8FA1D8",
  500: "#A3B5ED",
  600: "#7484B9",
  700: "#485688",
  800: "#202B59",
  900: "#04052A",
  DEFAULT: "#A3B5ED",
  foreground: "#0C2120",
};

/* ------------------------------------------------------------------ */
/* Earth — secondary / guiding actions + dark fills.                    */
/* DEFAULT step is the deep ink used as Atlas's `primary` foreground.   */
/* ------------------------------------------------------------------ */
export const earth: ColorRamp = {
  50: "#E9FBFA",
  100: "#DDF2F0",
  200: "#D0DEDD",
  300: "#B7C6C5",
  400: "#97A7A6",
  500: "#708180",
  600: "#4D5F5E",
  700: "#2D403F",
  800: "#0F2322",
  900: "#0C2120",
  DEFAULT: "#0C2120",
  foreground: "#FFFFFF",
};

/* ------------------------------------------------------------------ */
/* Emerald — success / abundance / new beginnings.                      */
/* ------------------------------------------------------------------ */
export const emerald: ColorRamp = {
  50: "#CCFFFA",
  100: "#BAFCF0",
  200: "#9BEDDF",
  300: "#83D4C7",
  400: "#62B4A7",
  500: "#00685D",
  600: "#005247",
  700: "#003C33",
  800: "#00271F",
  900: "#00130E",
  DEFAULT: "#00685D",
  foreground: "#FFFFFF",
};

/* ------------------------------------------------------------------ */
/* Canary — warning / spark / suggestion.                               */
/* ------------------------------------------------------------------ */
export const canary: ColorRamp = {
  50: "#F3FFAB",
  100: "#E8F892",
  200: "#D6E765",
  300: "#BECE49",
  400: "#9FAE1D",
  500: "#EDFF7D",
  600: "#ACBC33",
  700: "#707C00",
  800: "#3A4200",
  900: "#0C0D00",
  DEFAULT: "#EDFF7D",
  foreground: "#0C2120",
};

/* ------------------------------------------------------------------ */
/* Pink — destructive / urgent.                                         */
/* ------------------------------------------------------------------ */
export const pink: ColorRamp = {
  50: "#FFE7EE",
  100: "#FBC4D6",
  200: "#F7869F",
  300: "#F3506F",
  400: "#F32560",
  500: "#F31260",
  600: "#C3004B",
  700: "#920138",
  800: "#620125",
  900: "#310013",
  DEFAULT: "#F31260",
  foreground: "#FFFFFF",
};

/* ------------------------------------------------------------------ */
/* Orange — energy / intensity accents (incentive escalations,          */
/* expiry countdowns). Tailwind core orange tuning.                     */
/* ------------------------------------------------------------------ */
export const orange: ColorRamp = {
  50: "#FFF7ED",
  100: "#FFEDD5",
  200: "#FED7AA",
  300: "#FDBA74",
  400: "#FB923C",
  500: "#F97316",
  600: "#EA580C",
  700: "#C2410C",
  800: "#9A3412",
  900: "#7C2D12",
  DEFAULT: "#F97316",
  foreground: "#FFFFFF",
};

/* ------------------------------------------------------------------ */
/* Charts — 5 distinct hues for data viz.                               */
/* ------------------------------------------------------------------ */
export const chart = {
  1: "rgb(20, 184, 166)", // teal
  2: "rgb(59, 130, 246)", // blue
  3: "rgb(168, 85, 247)", // purple
  4: "rgb(239, 68, 68)", // red
  5: "rgb(249, 115, 22)", // orange
} as const;

/* ------------------------------------------------------------------ */
/* Skill — match diamond / skill-gap visuals.                           */
/* ------------------------------------------------------------------ */
export const skill = {
  DEFAULT: "rgb(55, 48, 163)",
  light: "rgba(55, 48, 163, 0.1)",
} as const;

/* ------------------------------------------------------------------ */
/* Sidebar — shell-specific tokens.                                     */
/* `--sidebar` is intentionally transparent.                            */
/* ------------------------------------------------------------------ */
export const sidebar = {
  DEFAULT: "rgba(0, 0, 0, 0)",
  foreground: "rgb(63, 63, 70)",
  primary: "rgb(12, 33, 32)",
  primaryForeground: "rgb(255, 255, 255)",
  accent: "rgb(237, 237, 232)",
  accentForeground: "rgb(18, 33, 32)",
  border: "rgb(237, 237, 232)",
  ring: "rgb(153, 199, 251)",
} as const;

/* ------------------------------------------------------------------ */
/* browseHumanServices — recruitment chrome purple accent (replaces     */
/* generic violet on branded surfaces).                                 */
/* ------------------------------------------------------------------ */
export const browseHumanServices = {
  DEFAULT: "#5F4F86",
  foreground: "#FFFFFF",
  muted: "#B0A4D4",
  soft: "#EDE9F5",
} as const;

/* ------------------------------------------------------------------ */
/* Registry — all ramps in one map, for tooling / token-doc components. */
/* ------------------------------------------------------------------ */
export const colorRamps = {
  stone,
  lavender,
  earth,
  emerald,
  canary,
  pink,
  orange,
} as const;

export type ColorRampName = keyof typeof colorRamps;
