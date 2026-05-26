import { describe, it, expect } from "vitest";
import { tokens, colorVar, fallbackPalette } from "./colors";

describe("color tokens (Xeekrs CSS-var contract)", () => {
  it("primary token references --primary CSS variable", () => {
    expect(tokens.primary.var).toBe("--primary");
    expect(tokens.primary.rgb).toBe("--primary-rgb");
  });

  it("primary fallback matches Xeekrs's earth-ink (#0c2120 / rgb(12 33 32))", () => {
    expect(tokens.primary.fallback).toBe("rgb(12 33 32)");
  });

  it("accent fallback matches Xeekrs's lavender blue (rgb(76 111 220))", () => {
    expect(tokens.accent.fallback).toBe("rgb(76 111 220)");
  });

  it("destructive fallback matches Xeekrs's brand pink (rgb(243 18 96))", () => {
    expect(tokens.destructive.fallback).toBe("rgb(243 18 96)");
  });

  it("colorVar produces a var(--name, fallback) string", () => {
    expect(colorVar("primary")).toBe("var(--primary, rgb(12 33 32))");
    expect(colorVar("background")).toBe("var(--background, rgb(249 249 244))");
  });

  it("fallbackPalette includes every token", () => {
    const keys = Object.keys(tokens);
    for (const k of keys) {
      expect(fallbackPalette).toHaveProperty(k);
    }
  });
});
