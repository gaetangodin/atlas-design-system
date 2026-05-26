import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TreeView, type TreeNode } from "./TreeView";

const nodes: TreeNode[] = [
  {
    id: "root",
    label: "Root",
    children: [
      { id: "child-1", label: "Child 1", isLeaf: true },
      { id: "child-2", label: "Child 2", isLeaf: true },
    ],
  },
];

describe("TreeView", () => {
  it("hides children until the parent is expanded", () => {
    render(<TreeView nodes={nodes} />);
    expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  });

  it("expands on click and shows children", () => {
    render(<TreeView nodes={nodes} />);
    fireEvent.click(screen.getByText("Root"));
    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("renders defaultExpanded nodes open", () => {
    render(<TreeView nodes={nodes} defaultExpanded={["root"]} />);
    expect(screen.getByText("Child 1")).toBeInTheDocument();
  });

  it("fires onSelect with the node id", () => {
    const onSelect = vi.fn();
    render(<TreeView nodes={nodes} defaultExpanded={["root"]} onSelect={onSelect} />);
    fireEvent.click(screen.getByText("Child 1"));
    expect(onSelect).toHaveBeenCalledWith("child-1");
  });

  it("uses role=tree / treeitem", () => {
    render(<TreeView nodes={nodes} />);
    expect(screen.getByRole("tree")).toBeInTheDocument();
    expect(screen.getAllByRole("treeitem").length).toBeGreaterThan(0);
  });
});
