import { describe, it, expect } from "vitest";
import { spacing, spacingKeyForPx } from "./spacing";

describe("spacing tokens", () => {
  it("scale exposes 4px-base steps", () => {
    expect(spacing[1]).toBe("var(--spacing-1, 0.25rem)");
    expect(spacing[2]).toBe("var(--spacing-2, 0.5rem)");
    expect(spacing[4]).toBe("var(--spacing-4, 1rem)");
  });

  it("spacingKeyForPx maps Figma px values back to scale keys", () => {
    expect(spacingKeyForPx(20)).toBe(5);
    expect(spacingKeyForPx(48)).toBe(12);
    expect(spacingKeyForPx(16)).toBe(4);
  });

  it("returns undefined for off-scale values", () => {
    expect(spacingKeyForPx(13)).toBeUndefined();
  });
});
