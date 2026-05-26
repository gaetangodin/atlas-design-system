/**
 * BoardRoute — list / index page-shell layout.
 *
 * The "board" pattern: header + SubNav-style toolbar + (optional)
 * filter rail + main content. Apps fill the slots with real data.
 *
 * Not a router. Atlas doesn't own routing — this is the layout
 * vocabulary apps wrap their routed pages in.
 */

import { forwardRef, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface BoardRouteProps {
  /** Page title — rendered in the header strip. */
  title?: ReactNode;
  /** Optional subtitle / kicker. */
  subtitle?: ReactNode;
  /** Toolbar row (search, filters, sort, view-mode toggle). */
  toolbar?: ReactNode;
  /** Right-aligned page actions (e.g. "New posting"). */
  actions?: ReactNode;
  /** Optional left-rail content (filter sidebar). */
  filterRail?: ReactNode;
  /** Main content (list, grid, table). */
  children?: ReactNode;
  /** Empty-state slot — rendered above children when truthy. */
  emptyState?: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
}

export const BoardRoute = forwardRef<HTMLDivElement, BoardRouteProps>(
  function BoardRoute(
    { title, subtitle, toolbar, actions, filterRail, children, emptyState, className, testId, id },
    ref,
  ) {
    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero("flex min-h-full flex-col", className)}
      >
        {title || actions ? (
          <header className="flex flex-wrap items-end justify-between gap-3 border-b border-border bg-card px-4 py-4 md:px-6">
            <div className="min-w-0">
              {title ? (
                <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {title}
                </h1>
              ) : null}
              {subtitle ? (
                <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
              ) : null}
            </div>
            {actions ? (
              <div className="flex shrink-0 items-center gap-2">{actions}</div>
            ) : null}
          </header>
        ) : null}

        {toolbar ? <div className="bg-background">{toolbar}</div> : null}

        <div className={cnHero("flex min-h-0 flex-1", filterRail && "gap-0")}>
          {filterRail ? (
            <aside className="hidden w-64 shrink-0 border-r border-border bg-card md:block">
              {filterRail}
            </aside>
          ) : null}
          <main className="flex-1 px-4 py-5 md:px-6">
            {emptyState ?? children}
          </main>
        </div>
      </div>
    );
  },
);

BoardRoute.displayName = "BoardRoute";
