/**
 * SearchToolbar — search input + filter chip row used above lists.
 *
 * Pattern abstracted from Xeekrs search surfaces. Atlas exposes the
 * chrome only — apps own the query state, results, and which filters
 * are active.
 *
 * Slots:
 *   - `searchInput`: typically an Atlas `Input` (with search icon).
 *   - `chips`: array of `<Badge>` / `<Chip>` / custom pill nodes.
 *   - `trailing`: right-aligned actions (sort, more filters trigger).
 *   - `secondary`: row beneath the input for active-filter summary.
 */

import { forwardRef, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface SearchToolbarProps {
  searchInput: ReactNode;
  /** Filter chips rendered to the right of the input. */
  chips?: ReactNode;
  /** Right-aligned trailing controls (sort, filter button). */
  trailing?: ReactNode;
  /** Second row beneath the input — typically active-filter pills. */
  secondary?: ReactNode;
  /** Make the toolbar `sticky top-0 z-30` with a card background. */
  sticky?: boolean;
  className?: string;
  testId?: string;
  id?: string;
}

export const SearchToolbar = forwardRef<HTMLDivElement, SearchToolbarProps>(
  function SearchToolbar(
    { searchInput, chips, trailing, secondary, sticky = false, className, testId, id },
    ref,
  ) {
    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero(
          "flex flex-col gap-2 border-b border-border bg-background px-4 py-3 md:px-6",
          sticky && "sticky top-0 z-30 backdrop-blur",
          className,
        )}
      >
        <div className="flex flex-wrap items-center gap-3">
          <div className="min-w-0 flex-1">{searchInput}</div>
          {chips ? (
            <div className="flex shrink-0 flex-wrap items-center gap-1.5">{chips}</div>
          ) : null}
          {trailing ? (
            <div className="flex shrink-0 items-center gap-1.5">{trailing}</div>
          ) : null}
        </div>
        {secondary ? (
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            {secondary}
          </div>
        ) : null}
      </div>
    );
  },
);

SearchToolbar.displayName = "SearchToolbar";
