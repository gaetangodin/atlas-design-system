import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrandLogo } from "./BrandLogo";

describe("BrandLogo", () => {
  it("renders default variant with alt text", () => {
    render(<BrandLogo />);
    expect(screen.getByAltText("Xeekrs")).toBeInTheDocument();
  });
  it("honors custom alt", () => {
    render(<BrandLogo alt="Custom" />);
    expect(screen.getByAltText("Custom")).toBeInTheDocument();
  });
  it("honors variant", () => {
    render(<BrandLogo variant="employnext" />);
    expect(screen.getByAltText("EmployNext")).toBeInTheDocument();
  });
});
