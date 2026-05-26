/**
 * SubNav — secondary navigation strip below the main header.
 *
 * Pattern abstracted from Xeekrs (`HelpDeskSubNavBar.tsx`,
 * `AnnouncementsSubNavBar.tsx`, recruitment sub-nav). The strip holds
 * left content (typically a `PageBack`) and optional right content
 * (action buttons). It's intentionally agnostic about positioning:
 *
 *   - `position="static"` (default) — renders inline; the app decides
 *     where it sits.
 *   - `position="fixed"` — sticks to the top of the viewport. Reads
 *     `--app-header-height` so it tucks under your main header; reads
 *     `--announcement-alert-bars-height` if you stack an announcement
 *     bar above. Both fall back to 0.
 *
 * For sidebar-aware horizontal offsets, pass an extra className: the
 * sidebar geometry is app-shell concern, not Atlas's.
 */

import { forwardRef, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export type SubNavPosition = "static" | "fixed";

export interface SubNavProps {
  /** Left-aligned content. Usually a `PageBack` element. */
  left?: ReactNode;
  /** Right-aligned content (action buttons, status pills). */
  right?: ReactNode;
  /** Anything else (rendered between left and right slots). */
  children?: ReactNode;
  position?: SubNavPosition;
  className?: string;
  testId?: string;
  id?: string;
}

const FIXED_TOP =
  "calc(var(--announcement-alert-bars-height, 0px) + var(--app-header-height, 56px) + env(safe-area-inset-top, 0px))";

export const SubNav = forwardRef<HTMLDivElement, SubNavProps>(function SubNav(
  { left, right, children, position = "static", className, testId, id },
  ref,
) {
  const isFixed = position === "fixed";

  return (
    <div
      ref={ref}
      id={id}
      data-testid={testId}
      style={isFixed ? { top: FIXED_TOP } : undefined}
      className={cnHero(
        "border-b border-border bg-background",
        isFixed && "fixed left-0 right-0 z-40",
        className,
      )}
    >
      <div className="flex min-h-14 flex-wrap items-center gap-x-3 gap-y-2 px-4 py-2 md:px-6">
        {left ? (
          <div className="relative z-[1] flex min-w-0 shrink-0 items-center">
            {left}
          </div>
        ) : null}
        {children}
        {right ? (
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-2 sm:ml-auto sm:flex-nowrap">
            {right}
          </div>
        ) : null}
      </div>
    </div>
  );
});

SubNav.displayName = "SubNav";
