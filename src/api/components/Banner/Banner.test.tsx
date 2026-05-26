import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Banner } from "./Banner";

describe("Banner", () => {
  it("renders content with role=status", () => {
    render(<Banner>Trial ends soon</Banner>);
    const el = screen.getByRole("status");
    expect(el).toHaveTextContent("Trial ends soon");
  });

  it("applies the tone class", () => {
    render(<Banner tone="warning">Heads up</Banner>);
    expect(screen.getByRole("status").className).toContain("bg-warning/10");
  });

  it("shows a dismiss button when onClose is passed", () => {
    const onClose = vi.fn();
    render(<Banner onClose={onClose}>Closable</Banner>);
    fireEvent.click(screen.getByLabelText("Dismiss"));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("omits the dismiss button without onClose", () => {
    render(<Banner>Plain</Banner>);
    expect(screen.queryByLabelText("Dismiss")).not.toBeInTheDocument();
  });
});
