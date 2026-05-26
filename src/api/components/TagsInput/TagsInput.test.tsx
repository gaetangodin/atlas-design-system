import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TagsInput } from "./TagsInput";

function getInput() {
  return screen.getByRole("textbox");
}

describe("TagsInput", () => {
  it("adds a tag on Enter", () => {
    const onChange = vi.fn();
    render(<TagsInput onChange={onChange} />);
    const input = getInput();
    fireEvent.change(input, { target: { value: "React" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(onChange).toHaveBeenCalledWith(["React"]);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("adds a tag on comma", () => {
    render(<TagsInput defaultValue={["A"]} />);
    const input = getInput();
    fireEvent.change(input, { target: { value: "B" } });
    fireEvent.keyDown(input, { key: "," });
    expect(screen.getByText("B")).toBeInTheDocument();
  });

  it("dedupes existing tags", () => {
    const onChange = vi.fn();
    render(<TagsInput defaultValue={["React"]} onChange={onChange} />);
    const input = getInput();
    fireEvent.change(input, { target: { value: "React" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(onChange).not.toHaveBeenCalled();
  });

  it("respects maxTags", () => {
    const onChange = vi.fn();
    render(<TagsInput defaultValue={["A", "B"]} maxTags={2} onChange={onChange} />);
    const input = getInput();
    fireEvent.change(input, { target: { value: "C" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(onChange).not.toHaveBeenCalled();
  });

  it("removes the last tag on Backspace when input is empty", () => {
    const onChange = vi.fn();
    render(<TagsInput defaultValue={["A", "B"]} onChange={onChange} />);
    fireEvent.keyDown(getInput(), { key: "Backspace" });
    expect(onChange).toHaveBeenCalledWith(["A"]);
  });
});
