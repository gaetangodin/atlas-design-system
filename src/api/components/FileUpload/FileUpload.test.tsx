import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { FileUpload } from "./FileUpload";

describe("FileUpload", () => {
  it("renders the default label and description", () => {
    render(<FileUpload />);
    expect(screen.getByText("Drop files or browse")).toBeInTheDocument();
    expect(screen.getByText("PNG, JPG, PDF up to 10MB")).toBeInTheDocument();
  });

  it("is a keyboard-focusable button by default", () => {
    render(<FileUpload />);
    const zone = screen.getByRole("button");
    expect(zone).toHaveAttribute("tabIndex", "0");
  });

  it("is not focusable when disabled", () => {
    render(<FileUpload isDisabled />);
    expect(screen.getByRole("button")).toHaveAttribute("tabIndex", "-1");
  });

  it("fires onFiles when files are selected via the input", () => {
    const onFiles = vi.fn();
    const { container } = render(<FileUpload onFiles={onFiles} multiple />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["x"], "cv.pdf", { type: "application/pdf" });
    fireEvent.change(input, { target: { files: [file] } });
    expect(onFiles).toHaveBeenCalledOnce();
    expect(onFiles.mock.calls[0]![0]![0].name).toBe("cv.pdf");
  });

  it("highlights on drag over", () => {
    render(<FileUpload />);
    const zone = screen.getByRole("button");
    fireEvent.dragOver(zone);
    expect(zone.className).toContain("border-primary");
  });
});
