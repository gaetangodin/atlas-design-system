/**
 * TopBar — desktop application header.
 *
 * Simplified shell derived from Xeekrs (`Header.tsx`, 984 lines). The
 * Xeekrs file glues mega-search, account menu, route awareness, and
 * announcement-bar offsets together. Atlas exposes the **chrome only**
 * — apps pass content into slots:
 *
 *   - `brand`  (left)   — logo + workspace switcher
 *   - `center` (middle) — primary nav row, mega-search trigger
 *   - `right`  (right)  — account avatar, secondary actions
 *
 * Sticky positioning is opt-in via `sticky`. Sets `--app-header-height`
 * via a fixed h-14 (`56px`) — matches the Xeekrs CSS variable; consumer
 * apps can override at the document root.
 */

import { forwardRef, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface TopBarProps {
  brand?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
  /** Toggles `sticky top-0 z-50`. */
  sticky?: boolean;
  /** Hide the bottom border. */
  borderless?: boolean;
  className?: string;
  testId?: string;
  id?: string;
}

export const TopBar = forwardRef<HTMLElement, TopBarProps>(function TopBar(
  { brand, center, right, sticky = false, borderless = false, className, testId, id },
  ref,
) {
  return (
    <header
      ref={ref}
      id={id}
      data-testid={testId}
      className={cnHero(
        "h-14 w-full bg-background",
        !borderless && "border-b border-border",
        sticky && "sticky top-0 z-50",
        className,
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-screen-2xl items-center gap-4 px-4 md:px-6">
        {brand ? (
          <div className="flex min-w-0 shrink-0 items-center gap-3">{brand}</div>
        ) : null}
        {center ? (
          <div className="flex min-w-0 flex-1 items-center gap-2">{center}</div>
        ) : (
          <div className="flex-1" />
        )}
        {right ? (
          <div className="flex shrink-0 items-center gap-2">{right}</div>
        ) : null}
      </div>
    </header>
  );
});

TopBar.displayName = "TopBar";
