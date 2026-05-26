import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Toggle } from "./Toggle";

describe("Toggle", () => {
  it("renders unpressed by default", () => {
    render(<Toggle>Bold</Toggle>);
    expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "false");
  });

  it("toggles aria-pressed on click (uncontrolled)", () => {
    render(<Toggle>Bold</Toggle>);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(btn).toHaveAttribute("aria-pressed", "true");
    fireEvent.click(btn);
    expect(btn).toHaveAttribute("aria-pressed", "false");
  });

  it("fires onChange with the next state", () => {
    const onChange = vi.fn();
    render(<Toggle onChange={onChange}>Bold</Toggle>);
    fireEvent.click(screen.getByRole("button"));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("honors controlled `pressed`", () => {
    render(<Toggle pressed>Bold</Toggle>);
    expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");
  });

  it("does not toggle when disabled", () => {
    const onChange = vi.fn();
    render(<Toggle isDisabled onChange={onChange}>Bold</Toggle>);
    fireEvent.click(screen.getByRole("button"));
    expect(onChange).not.toHaveBeenCalled();
  });
});
