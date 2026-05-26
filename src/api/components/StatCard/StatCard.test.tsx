import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatCard } from "./StatCard";

describe("StatCard", () => {
  it("renders label and value", () => {
    render(<StatCard label="Active" value="128" />);
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("128")).toBeInTheDocument();
  });

  it("renders a delta chip with the positive tone class", () => {
    render(<StatCard label="Rate" value="68%" delta="+12%" deltaTone="positive" />);
    const chip = screen.getByText("+12%");
    expect(chip.className).toContain("text-success");
  });

  it("renders a caption", () => {
    render(<StatCard label="X" value="1" caption="vs. last month" />);
    expect(screen.getByText("vs. last month")).toBeInTheDocument();
  });
});
