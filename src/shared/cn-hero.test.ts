import { describe, it, expect } from "vitest";
import { cnHero } from "./cn-hero";

describe("cnHero", () => {
  it("joins truthy class values", () => {
    expect(cnHero("a", "b", false, null, undefined, "c")).toBe("a b c");
  });

  it("later stock Tailwind radius wins over HeroUI radius", () => {
    // HeroUI's rounded-large should be discarded when rounded-lg follows.
    const out = cnHero("rounded-large", "rounded-lg");
    expect(out).toContain("rounded-lg");
    expect(out).not.toContain("rounded-large");
  });

  it("dedupes conflicting stock Tailwind utilities", () => {
    expect(cnHero("p-2", "p-4")).toBe("p-4");
  });

  it("supports conditional object syntax", () => {
    expect(cnHero({ "is-on": true, "is-off": false })).toBe("is-on");
  });
});
