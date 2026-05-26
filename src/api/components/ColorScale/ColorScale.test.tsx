import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ColorScale } from "./ColorScale";

describe("ColorScale", () => {
  it("renders 10 ramp steps", () => {
    const { container } = render(<ColorScale ramp="lavender" />);
    expect(container.querySelectorAll('[title*="lavender-"]').length).toBe(10);
  });
  it("renders the resolved label", () => {
    render(<ColorScale ramp="emerald" />);
    expect(screen.getByText("Emerald")).toBeInTheDocument();
  });
});
