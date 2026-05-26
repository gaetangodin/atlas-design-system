import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Timeline } from "./Timeline";

const events = [
  { id: "1", title: "Created", tone: "primary" as const },
  { id: "2", title: "Reviewed", description: "By the hiring team" },
  { id: "3", title: "Hired", tone: "success" as const },
];

describe("Timeline", () => {
  it("renders every event title", () => {
    render(<Timeline events={events} />);
    for (const e of events) {
      expect(screen.getByText(e.title)).toBeInTheDocument();
    }
  });

  it("renders event descriptions", () => {
    render(<Timeline events={events} />);
    expect(screen.getByText("By the hiring team")).toBeInTheDocument();
  });

  it("renders as a list", () => {
    render(<Timeline events={events} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});
