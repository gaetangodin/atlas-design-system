import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Stack, HStack, VStack } from "./Stack";

describe("Stack", () => {
  it("renders children", () => {
    render(<Stack><span>child</span></Stack>);
    expect(screen.getByText("child")).toBeInTheDocument();
  });

  it("applies a column direction and gap class by default", () => {
    const { container } = render(<Stack>x</Stack>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("flex-col");
    expect(el.className).toContain("gap-3");
  });

  it("HStack is a row and centers items by default", () => {
    const { container } = render(<HStack>x</HStack>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("flex-row");
    expect(el.className).toContain("items-center");
  });

  it("VStack is a column", () => {
    const { container } = render(<VStack>x</VStack>);
    expect((container.firstChild as HTMLElement).className).toContain("flex-col");
  });

  it("maps justify + align props to Tailwind classes", () => {
    const { container } = render(<Stack justify="between" align="end">x</Stack>);
    const cls = (container.firstChild as HTMLElement).className;
    expect(cls).toContain("justify-between");
    expect(cls).toContain("items-end");
  });
});
