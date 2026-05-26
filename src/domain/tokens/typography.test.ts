import { describe, it, expect } from "vitest";
import { fontFamilyVars, fontSizes, fontWeights, textStyles } from "./typography";

describe("typography tokens", () => {
  it("font families reference Xeekrs CSS vars with fallbacks", () => {
    expect(fontFamilyVars.heading).toContain("--font-family-heading");
    expect(fontFamilyVars.heading).toContain("Raleway");
    expect(fontFamilyVars.body).toContain("Open Sans");
  });

  it("base font size references --text-base", () => {
    expect(fontSizes.base.size).toContain("--text-base");
  });

  it("weight scale references CSS vars", () => {
    expect(fontWeights.medium).toContain("--font-weight-medium");
  });

  it("heading text styles use the heading family", () => {
    expect(textStyles.h1.fontFamily).toBe(fontFamilyVars.heading);
    expect(textStyles.body.fontFamily).toBe(fontFamilyVars.body);
  });
});
