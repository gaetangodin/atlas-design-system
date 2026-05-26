import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ColorPicker } from "./ColorPicker";

describe("ColorPicker", () => {
  it("renders the default swatch palette", () => {
    render(<ColorPicker />);
    expect(screen.getByLabelText("Select #0c2120")).toBeInTheDocument();
  });

  it("fires onChange when a swatch is picked", () => {
    const onChange = vi.fn();
    render(<ColorPicker onChange={onChange} swatches={["#10b981"]} />);
    fireEvent.click(screen.getByLabelText("Select #10b981"));
    expect(onChange).toHaveBeenCalledWith("#10b981");
  });

  it("fires onChange from the custom hex input", () => {
    const onChange = vi.fn();
    render(<ColorPicker onChange={onChange} />);
    fireEvent.change(screen.getByPlaceholderText("#0c2120"), {
      target: { value: "#abcdef" },
    });
    expect(onChange).toHaveBeenCalledWith("#abcdef");
  });

  it("hides the hex input when customInput is false", () => {
    render(<ColorPicker customInput={false} />);
    expect(screen.queryByPlaceholderText("#0c2120")).not.toBeInTheDocument();
  });
});
