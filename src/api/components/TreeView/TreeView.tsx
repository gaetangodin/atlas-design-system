/**
 * TreeView — recursive expandable list. Keyboard-accessible
 * (`role="tree"`, `aria-expanded`, arrow keys via native focus order).
 * Uncontrolled by default; pass `expanded` for controlled mode.
 */
"use client";
import { forwardRef, useState, type ReactNode, type Ref } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface TreeNode {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  children?: TreeNode[];
  /** If true, this node is rendered but treated as a leaf (no chevron). */
  isLeaf?: boolean;
}

export interface TreeViewProps {
  nodes: TreeNode[];
  /** Controlled set of expanded node IDs. */
  expanded?: ReadonlyArray<string>;
  defaultExpanded?: ReadonlyArray<string>;
  onExpandChange?: (expandedIds: string[]) => void;
  selectedId?: string;
  onSelect?: (id: string) => void;
  className?: string;
}

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    style={{ transform: open ? "rotate(90deg)" : "none", transition: "transform 150ms" }}
    aria-hidden="true"
  >
    <path d="M4 2L8 6L4 10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Branch({
  node,
  level,
  expandedSet,
  toggle,
  selectedId,
  onSelect,
}: {
  node: TreeNode;
  level: number;
  expandedSet: Set<string>;
  toggle: (id: string) => void;
  selectedId?: string;
  onSelect?: (id: string) => void;
}) {
  const isLeaf = node.isLeaf || !node.children || node.children.length === 0;
  const isOpen = expandedSet.has(node.id);
  const isSelected = node.id === selectedId;
  return (
    <li role="treeitem" aria-expanded={isLeaf ? undefined : isOpen} aria-selected={isSelected}>
      <button
        type="button"
        onClick={() => {
          if (!isLeaf) toggle(node.id);
          onSelect?.(node.id);
        }}
        className={cnHero(
          "group flex w-full items-center gap-1.5 h-8 rounded-md text-sm text-foreground outline-none",
          "focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          isSelected ? "bg-muted font-medium" : "hover:bg-muted/60",
        )}
        style={{ paddingLeft: 8 + level * 16 }}
      >
        <span className="inline-flex items-center justify-center size-4 text-muted-foreground">
          {!isLeaf ? <Chevron open={isOpen} /> : null}
        </span>
        {node.icon ? (
          <span className="inline-flex items-center justify-center size-4 [&_svg]:size-4">{node.icon}</span>
        ) : null}
        <span className="flex-1 truncate text-left">{node.label}</span>
      </button>
      {!isLeaf && isOpen ? (
        <ul role="group" className="m-0 p-0 list-none">
          {node.children!.map((c) => (
            <Branch
              key={c.id}
              node={c}
              level={level + 1}
              expandedSet={expandedSet}
              toggle={toggle}
              selectedId={selectedId}
              onSelect={onSelect}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export const TreeView = forwardRef<HTMLUListElement, TreeViewProps>(function TreeView(
  { nodes, expanded, defaultExpanded = [], onExpandChange, selectedId, onSelect, className },
  ref,
) {
  const [inner, setInner] = useState<Set<string>>(new Set(defaultExpanded));
  const expandedSet = expanded ? new Set(expanded) : inner;

  const toggle = (id: string) => {
    const next = new Set(expandedSet);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setInner(next);
    onExpandChange?.(Array.from(next));
  };

  return (
    <ul ref={ref as Ref<HTMLUListElement>} role="tree" className={cnHero("m-0 p-0 list-none", className)}>
      {nodes.map((n) => (
        <Branch
          key={n.id}
          node={n}
          level={0}
          expandedSet={expandedSet}
          toggle={toggle}
          selectedId={selectedId}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
});
TreeView.displayName = "TreeView";
