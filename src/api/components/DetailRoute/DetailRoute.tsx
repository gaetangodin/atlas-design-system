/**
 * DetailRoute — single-record page-shell layout.
 *
 * Pattern: optional hero band → toolbar with back-nav + actions →
 * stacked sections. Used for record-detail pages (employer profile,
 * candidate profile, announcement detail, posting detail).
 */

import { forwardRef, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface DetailRouteProps {
  /** Hero band rendered above the toolbar (CoverImageHero, etc.). */
  hero?: ReactNode;
  /** Toolbar — `PageBack` left + actions right. */
  toolbar?: ReactNode;
  /** Stacked content sections. */
  children?: ReactNode;
  /** Right-rail content (related items, sidebar). */
  rightRail?: ReactNode;
  /** Footer slot — meta / activity log. */
  footer?: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
}

export const DetailRoute = forwardRef<HTMLDivElement, DetailRouteProps>(
  function DetailRoute(
    { hero, toolbar, children, rightRail, footer, className, testId, id },
    ref,
  ) {
    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero("flex min-h-full flex-col", className)}
      >
        {hero ? <div className="p-4 md:p-6">{hero}</div> : null}
        {toolbar ? <div>{toolbar}</div> : null}
        <div className="flex min-h-0 flex-1 gap-6 px-4 py-5 md:px-6">
          <main className="min-w-0 flex-1 space-y-6">{children}</main>
          {rightRail ? (
            <aside className="hidden w-72 shrink-0 space-y-4 lg:block">
              {rightRail}
            </aside>
          ) : null}
        </div>
        {footer ? (
          <div className="border-t border-border bg-card px-4 py-4 text-sm text-muted-foreground md:px-6">
            {footer}
          </div>
        ) : null}
      </div>
    );
  },
);

DetailRoute.displayName = "DetailRoute";
