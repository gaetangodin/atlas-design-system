import { describe, it, expect } from "vitest";
import { resolveButtonClassNames } from "./resolve-button-class-names";

describe("resolveButtonClassNames (Xeekrs flavor)", () => {
  it("primary solid uses bg-primary + text-primary-foreground", () => {
    const out = resolveButtonClassNames({
      variant: "solid",
      color: "primary",
      size: "md",
      radius: undefined,
      isDisabled: false,
      isLoading: false,
      isIconOnly: false,
      fullWidth: false,
    });
    expect(out).toContain("bg-primary");
    expect(out).toContain("text-primary-foreground");
    expect(out).toContain("rounded-full"); // brand default
    expect(out).toContain("h-9");
  });

  it("flat danger uses bg-destructive/10", () => {
    const out = resolveButtonClassNames({
      variant: "flat",
      color: "danger",
      size: "md",
      radius: undefined,
      isDisabled: false,
      isLoading: false,
      isIconOnly: false,
      fullWidth: false,
    });
    expect(out).toContain("bg-destructive/10");
    expect(out).toContain("text-destructive");
  });

  it("bordered ignores color and uses neutral surface", () => {
    const out = resolveButtonClassNames({
      variant: "bordered",
      color: "primary",
      size: "md",
      radius: undefined,
      isDisabled: false,
      isLoading: false,
      isIconOnly: false,
      fullWidth: false,
    });
    expect(out).toContain("border-border");
    expect(out).toContain("bg-background");
    expect(out).not.toContain("bg-primary");
  });

  it("explicit radius overrides the pill default", () => {
    const out = resolveButtonClassNames({
      variant: "solid",
      color: "primary",
      size: "md",
      radius: "lg",
      isDisabled: false,
      isLoading: false,
      isIconOnly: false,
      fullWidth: false,
    });
    expect(out).toContain("rounded-lg");
    expect(out).not.toContain("rounded-full");
  });

  it("fullWidth adds w-full", () => {
    const out = resolveButtonClassNames({
      variant: "solid",
      color: "primary",
      size: "md",
      radius: undefined,
      isDisabled: false,
      isLoading: false,
      isIconOnly: false,
      fullWidth: true,
    });
    expect(out).toContain("w-full");
  });

  it("isIconOnly uses square sizing", () => {
    const out = resolveButtonClassNames({
      variant: "solid",
      color: "primary",
      size: "md",
      radius: undefined,
      isDisabled: false,
      isLoading: false,
      isIconOnly: true,
      fullWidth: false,
    });
    expect(out).toContain("size-9");
    expect(out).not.toContain("h-9");
  });
});
