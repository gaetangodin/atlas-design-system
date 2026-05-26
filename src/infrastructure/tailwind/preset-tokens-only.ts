/**
 * Atlas Tailwind preset (tokens only — no HeroUI plugin).
 *
 * For apps that already register `heroui({...})` themselves (like
 * `Xeekrsmainapp`). Use this preset to inherit Atlas's color/radius/
 * spacing extensions without double-registering HeroUI.
 *
 * Adoption snippet (Xeekrsmainapp/tailwind.config.ts):
 *   import { atlasPresetTokensOnly } from "@atlas/design-system/tailwind";
 *   export default {
 *     presets: [atlasPresetTokensOnly],
 *     plugins: [animate, heroui({ ... existing Xeekrs config ... })],
 *     content: [...],
 *   };
 */

import type { Config } from "tailwindcss";
import { spacing, radius, shadows, fontFamilyVars, durations, easings } from "../../domain/tokens";

/** Color utilities use `rgb(var(--X-rgb) / <alpha-value>)` pattern so
 * Tailwind alpha modifiers work — matches Xeekrs's globals.css contract. */
function rgbVar(name: string): string {
  return `rgb(var(--${name}-rgb) / <alpha-value>)`;
}

export const atlasPresetTokensOnly: Partial<Config> = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: rgbVar("background"),
        foreground: rgbVar("foreground"),
        card: {
          DEFAULT: rgbVar("card"),
          foreground: rgbVar("card-foreground"),
        },
        popover: {
          DEFAULT: rgbVar("popover"),
          foreground: rgbVar("popover-foreground"),
        },
        primary: {
          DEFAULT: rgbVar("primary"),
          foreground: rgbVar("primary-foreground"),
        },
        secondary: {
          DEFAULT: rgbVar("secondary"),
          foreground: rgbVar("secondary-foreground"),
        },
        muted: {
          DEFAULT: rgbVar("muted"),
          foreground: rgbVar("muted-foreground"),
        },
        accent: {
          DEFAULT: rgbVar("accent"),
          foreground: rgbVar("accent-foreground"),
        },
        destructive: {
          DEFAULT: rgbVar("destructive"),
          foreground: rgbVar("destructive-foreground"),
        },
        success: {
          DEFAULT: rgbVar("success"),
          foreground: rgbVar("success-foreground"),
        },
        error: {
          DEFAULT: rgbVar("error"),
          foreground: rgbVar("error-foreground"),
        },
        warning: {
          DEFAULT: rgbVar("warning"),
          foreground: rgbVar("warning-foreground"),
        },
        info: {
          DEFAULT: rgbVar("info"),
          foreground: rgbVar("info-foreground"),
        },
        border: rgbVar("border"),
        input: {
          DEFAULT: rgbVar("input"),
          background: rgbVar("input-background"),
        },
        ring: rgbVar("ring"),
      },
      spacing,
      borderRadius: {
        none: radius.none,
        sm: radius.sm,
        DEFAULT: radius.DEFAULT,
        md: radius.md,
        lg: radius.lg,
        xl: radius.xl,
        "2xl": radius["2xl"],
        "5xl": radius["5xl"],
        full: radius.full,
      },
      boxShadow: {
        sm: shadows.sm,
        DEFAULT: shadows.sm,
        md: shadows.md,
        lg: shadows.lg,
        xl: shadows.xl,
        inner: shadows.inner,
        none: shadows.none,
      },
      fontFamily: {
        heading: [fontFamilyVars.heading],
        body: [fontFamilyVars.body],
        sans: [fontFamilyVars.base],
      },
      transitionDuration: {
        fast: durations.fast,
        DEFAULT: durations.base,
        medium: durations.medium,
        slow: durations.slow,
      },
      transitionTimingFunction: {
        in: easings.in,
        out: easings.out,
        "in-out": easings.inOut,
        spring: easings.spring,
      },
    },
  },
  plugins: [],
};
