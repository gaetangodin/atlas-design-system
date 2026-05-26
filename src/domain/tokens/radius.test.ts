import { describe, it, expect } from "vitest";
import { radius } from "./radius";

describe("radius tokens", () => {
  it("md / lg resolve through the --radius variable chain", () => {
    expect(radius.md).toContain("var(--radius");
    expect(radius.lg).toBe("var(--radius, 12px)");
  });

  it("full is a pill", () => {
    expect(radius.full).toBe("9999px");
  });

  it("2xl is the 24px modal corner", () => {
    expect(radius["2xl"]).toBe("1.5rem");
  });

  it("none is zero", () => {
    expect(radius.none).toBe("0");
  });
});
