/**
 * MegaSearch — large multi-column directory search panel.
 *
 * Simplified shell derived from Xeekrs (`HeaderBrowseMegaSearch.tsx`,
 * 1558 lines). The Xeekrs file owns a full state machine — search
 * query, results, hub-section grouping, keyboard nav. Atlas exposes
 * the **panel layout** only:
 *
 *   - top row: search input slot + close button
 *   - body: a CSS grid with N columns; each column is a slot the app
 *           fills in.
 *
 * The app owns query state and renders the results — Atlas doesn't ship
 * a search engine. The visual chrome (sticky search row, multi-column
 * grid, drop shadow, padding) is the value here.
 */

import { forwardRef, type ReactNode } from "react";
import { X } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

export interface MegaSearchProps {
  /** The search input (caller provides — typically an Atlas Input). */
  searchInput: ReactNode;
  /** Columns rendered in the panel body. */
  columns: ReactNode[];
  /** Optional close button handler. Renders an `X` button in the top-right. */
  onClose?: () => void;
  /** Bottom row — e.g. "Press Enter to search" hint, results count. */
  footer?: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
}

export const MegaSearch = forwardRef<HTMLDivElement, MegaSearchProps>(function MegaSearch(
  { searchInput, columns, onClose, footer, className, testId, id },
  ref,
) {
  const cols = Math.min(Math.max(columns.length, 1), 4);
  const gridClass =
    cols === 1
      ? "grid-cols-1"
      : cols === 2
        ? "grid-cols-1 md:grid-cols-2"
        : cols === 3
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";

  return (
    <div
      ref={ref}
      id={id}
      data-testid={testId}
      className={cnHero(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-lg",
        className,
      )}
      role="dialog"
      aria-label="Search"
    >
      <div className="flex items-center gap-3 border-b border-border bg-background px-4 py-3">
        <div className="min-w-0 flex-1">{searchInput}</div>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="size-4" />
          </button>
        ) : null}
      </div>

      <div className={cnHero("grid gap-6 p-4 md:p-6", gridClass)}>
        {columns.map((col, idx) => (
          <div key={idx} className="min-w-0">
            {col}
          </div>
        ))}
      </div>

      {footer ? (
        <div className="border-t border-border bg-background/70 px-4 py-2 text-xs text-muted-foreground">
          {footer}
        </div>
      ) : null}
    </div>
  );
});

MegaSearch.displayName = "MegaSearch";
