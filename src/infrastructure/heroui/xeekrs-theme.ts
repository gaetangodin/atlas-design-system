/**
 * Xeekrs HeroUI theme adapter.
 *
 * Mirrors the HeroUI plugin config in `Xeekrsmainapp/tailwind.config.ts`.
 * Atlas exposes this as `xeekrsPlugin` for fresh apps that want to drop
 * Atlas in and inherit Xeekrs's brand. **Apps that already register
 * `heroui({...})` themselves (like Xeekrsmainapp today) should NOT use
 * this — see `infrastructure/tailwind/preset-tokens-only.ts`.**
 *
 * Color values reach into CSS variables (`var(--primary)`, ...) so the
 * consumer's `globals.css` remains the single source of truth at runtime.
 */

import { heroui } from "@heroui/react";

export const xeekrsPlugin = heroui({
  defaultTheme: "light",
  themes: {
    light: {
      colors: {
        background: "var(--background, #f9f9f4)",
        foreground: "var(--foreground, #122120)",
        content1: "#FFFFFF",
        content2: "#EDEDE8",
        content3: "#E0E0DA",
        content4: "#C9C9C2",
        divider: "rgba(18, 33, 32, 0.12)",
        overlay: "rgba(18, 33, 32, 0.55)",
        focus: "var(--ring, #99c7fb)",
        primary: {
          DEFAULT: "var(--primary, #0c2120)",
          foreground: "var(--primary-foreground, #ffffff)",
        },
        secondary: {
          DEFAULT: "var(--secondary, #ffffff)",
          foreground: "var(--secondary-foreground, #0c2120)",
        },
        success: {
          DEFAULT: "var(--success, #10b981)",
          foreground: "var(--success-foreground, #ffffff)",
        },
        warning: {
          DEFAULT: "var(--warning, #f59e0b)",
          foreground: "var(--warning-foreground, #ffffff)",
        },
        danger: {
          DEFAULT: "var(--destructive, #f31260)",
          foreground: "var(--destructive-foreground, #ffffff)",
        },
        default: {
          DEFAULT: "var(--muted, #ededed)",
          foreground: "var(--muted-foreground, #78716c)",
        },
      },
      layout: {
        radius: {
          small: "calc(var(--radius, 12px) - 4px)", // 8px
          medium: "var(--radius, 12px)", // 12px
          large: "calc(var(--radius, 12px) + 4px)", // 16px
        },
        fontSize: {
          tiny: "var(--text-sm, 14px)",
          small: "var(--text-base, 16px)",
          medium: "var(--text-base, 16px)",
          large: "var(--text-lg, 18px)",
        },
        lineHeight: {
          tiny: "1.2",
          small: "1.4",
          medium: "1.5",
          large: "1.55",
        },
        boxShadow: {
          small: "0 1px 2px 0 rgb(18 33 32 / 0.06), 0 1px 2px 0 rgb(18 33 32 / 0.04)",
          medium: "0 4px 10px -2px rgb(18 33 32 / 0.08), 0 2px 4px -1px rgb(18 33 32 / 0.05)",
          large: "0 12px 30px -8px rgb(18 33 32 / 0.14), 0 6px 12px -4px rgb(18 33 32 / 0.08)",
        },
        disabledOpacity: "0.5",
        dividerWeight: "1px",
        hoverOpacity: "0.9",
      },
    },
  },
});

/** Legacy alias — kept while we transition away from "preline" naming. */
export const prelinePlugin = xeekrsPlugin;
