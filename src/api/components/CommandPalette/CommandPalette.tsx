/**
 * CommandPalette — ⌘K-style command palette.
 *
 * Built on top of Atlas's `Modal` for consistency with the rest of the
 * system. Slot-based: the consumer supplies the filtered command list
 * and owns input state.
 */

import { type ReactNode, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Modal, ModalContent } from "../Modal";
import { cnHero } from "../../../shared/cn-hero";

export interface CommandItem {
  id: string;
  label: ReactNode;
  /** Optional descriptor / right-aligned hint. */
  description?: ReactNode;
  /** Optional left-aligned icon. */
  icon?: ReactNode;
  /** Optional keyboard shortcut (rendered as Kbd). */
  shortcut?: string;
  onSelect?: () => void;
  /** Optional grouping key — Atlas does not group itself; pass pre-grouped lists. */
  group?: string;
}

export interface CommandPaletteProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  /** Placeholder text in the search input. */
  placeholder?: string;
  /** Current query — controlled. */
  query: string;
  onQueryChange: (q: string) => void;
  /** Pre-filtered, ordered command list. */
  items: CommandItem[];
  /** Optional empty state. */
  emptyState?: ReactNode;
  className?: string;
}
export function CommandPalette({
  isOpen, onOpenChange, placeholder = "Type a command…", query, onQueryChange, items, emptyState, className,
}: CommandPaletteProps) {
  const [active, setActive] = useState(0);
  // Reset active index when items change.
  useEffect(() => setActive(0), [items.length]);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" size="lg">
      <ModalContent
        className={cnHero("overflow-hidden", className)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setActive((i) => Math.min(items.length - 1, i + 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive((i) => Math.max(0, i - 1));
          } else if (e.key === "Enter") {
            const it = items[active];
            if (it) {
              it.onSelect?.();
              onOpenChange(false);
            }
          }
        }}
      >
        <div className="flex items-center gap-2 border-b border-border px-3 py-2">
          <Search className="size-4 text-muted-foreground" aria-hidden />
          <input
            autoFocus
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>
        <ul className="max-h-80 overflow-y-auto py-1">
          {items.length === 0 ? (
            <li className="px-3 py-6 text-center text-xs text-muted-foreground">
              {emptyState ?? "No results"}
            </li>
          ) : (
            items.map((it, idx) => {
              const isActive = idx === active;
              return (
                <li key={it.id}>
                  <button
                    type="button"
                    onClick={() => {
                      it.onSelect?.();
                      onOpenChange(false);
                    }}
                    onMouseEnter={() => setActive(idx)}
                    className={cnHero(
                      "flex w-full items-center gap-2 px-3 py-2 text-left text-sm",
                      isActive ? "bg-spotlight/30 text-foreground" : "text-foreground hover:bg-muted/40",
                    )}
                  >
                    {it.icon ? <span className="text-muted-foreground">{it.icon}</span> : null}
                    <span className="min-w-0 flex-1">
                      <span className="block truncate">{it.label}</span>
                      {it.description ? <span className="block truncate text-xs text-muted-foreground">{it.description}</span> : null}
                    </span>
                    {it.shortcut ? (
                      <kbd className="rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                        {it.shortcut}
                      </kbd>
                    ) : null}
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </ModalContent>
    </Modal>
  );
}
