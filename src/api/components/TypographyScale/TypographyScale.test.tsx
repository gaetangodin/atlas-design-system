import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TypographyScale } from "./TypographyScale";

describe("TypographyScale", () => {
  it("renders all 8 text steps", () => {
    render(<TypographyScale />);
    ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl"]
      .forEach((label) => {
        expect(screen.getByText(label)).toBeInTheDocument();
      });
  });
  it("marketing variant renders too", () => {
    const { container } = render(<TypographyScale variant="marketing" />);
    expect(container.querySelector(".font-heading")).toBeTruthy();
  });
});
