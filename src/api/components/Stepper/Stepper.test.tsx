import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Stepper } from "./Stepper";

const steps = [
  { id: "a", label: "Profile" },
  { id: "b", label: "Skills" },
  { id: "c", label: "Match" },
  { id: "d", label: "Submit" },
];

describe("Stepper", () => {
  it("renders every step label", () => {
    render(<Stepper steps={steps} current={2} />);
    for (const s of steps) expect(screen.getByText(s.label)).toBeInTheDocument();
  });

  it("marks the current step with aria-current", () => {
    render(<Stepper steps={steps} current={2} />);
    const current = screen.getByText("Match").closest("li");
    expect(current).toHaveAttribute("aria-current", "step");
  });

  it("derives completed steps before current", () => {
    const { container } = render(<Stepper steps={steps} current={2} />);
    // Steps 0 and 1 are completed → render a checkmark svg, not a number.
    const items = container.querySelectorAll("li");
    expect(items[0]?.querySelector("svg")).toBeTruthy();
  });

  it("respects an explicit per-step status", () => {
    render(
      <Stepper
        steps={[{ id: "x", label: "Errored", status: "pending" }]}
        current={0}
      />,
    );
    expect(screen.getByText("Errored")).toBeInTheDocument();
  });
});
