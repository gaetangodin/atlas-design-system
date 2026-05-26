import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { PageBack } from "./PageBack";

describe("PageBack", () => {
  it("renders as button by default", () => {
    render(<PageBack>Back</PageBack>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("renders as anchor when href is provided", () => {
    render(<PageBack href="/dashboard">Back</PageBack>);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/dashboard");
  });
  it("fires onClick", () => {
    const fn = vi.fn();
    render(<PageBack onClick={fn}>Back</PageBack>);
    fireEvent.click(screen.getByRole("button"));
    expect(fn).toHaveBeenCalledOnce();
  });
});
