import { describe, it, expect } from "vitest";
import { cx } from "./cx";

describe("cx", () => {
  it("joins strings, drops falsy", () => {
    expect(cx("a", null, "b", false, undefined, "c")).toBe("a b c");
  });

  it("flattens arrays", () => {
    expect(cx(["a", ["b", "c"]], "d")).toBe("a b c d");
  });

  it("applies object conditionals", () => {
    expect(cx({ active: true, disabled: false })).toBe("active");
  });
});
