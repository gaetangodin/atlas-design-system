import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrandBoard } from "./BrandBoard";

describe("BrandBoard", () => {
  it("renders the brand statement", () => {
    render(<BrandBoard />);
    expect(screen.getByText(/Clear, generous/i)).toBeInTheDocument();
  });
});
