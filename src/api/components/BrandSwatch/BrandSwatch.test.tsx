import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrandSwatch } from "./BrandSwatch";

describe("BrandSwatch", () => {
  it("renders name + value", () => {
    render(<BrandSwatch name="Lavender 500" value="#A3B5ED" />);
    expect(screen.getByText("Lavender 500")).toBeInTheDocument();
    expect(screen.getByText("#A3B5ED")).toBeInTheDocument();
  });
  it("renders utility + role + description when provided", () => {
    render(
      <BrandSwatch
        name="Emerald 500"
        value="#00685D"
        role="Success"
        utility="bg-emerald-500"
        description="Used on confirmations."
      />,
    );
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("bg-emerald-500")).toBeInTheDocument();
    expect(screen.getByText("Used on confirmations.")).toBeInTheDocument();
  });
});
