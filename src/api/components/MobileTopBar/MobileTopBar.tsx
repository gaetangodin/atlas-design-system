/**
 * MobileTopBar — phone-narrow application header.
 *
 * Simplified shell derived from Xeekrs (`MobileTopBar.tsx`, 343 lines).
 * The Xeekrs version wires up the mobile drawer menu, search overlay,
 * notification badge, and route awareness. Atlas exposes the **chrome
 * only** — apps own the menu drawer state.
 *
 * Slots:
 *   - `brand` (center title or logo)
 *   - `leading` (left action, typically a hamburger)
 *   - `trailing` (right actions, typically search + notifications)
 *
 * Sticks to the top with `position: fixed` + safe-area padding when
 * `sticky` is true. Reads `--app-header-height` (56px default) so
 * other fixed bars (SubNav) tuck beneath cleanly.
 */

import { forwardRef, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface MobileTopBarProps {
  brand?: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
  /** `position: fixed` + safe-area padding. */
  sticky?: boolean;
  /** Add a subtle backdrop blur (use when scroll content sits beneath). */
  blur?: boolean;
  className?: string;
  testId?: string;
  id?: string;
}

export const MobileTopBar = forwardRef<HTMLElement, MobileTopBarProps>(function MobileTopBar(
  { brand, leading, trailing, sticky = true, blur = true, className, testId, id },
  ref,
) {
  return (
    <header
      ref={ref}
      id={id}
      data-testid={testId}
      style={
        sticky
          ? { paddingTop: "env(safe-area-inset-top, 0px)" }
          : undefined
      }
      className={cnHero(
        "flex h-14 w-full items-center justify-between gap-3 border-b border-border px-3",
        blur ? "bg-background/95 backdrop-blur" : "bg-background",
        sticky && "fixed left-0 right-0 top-0 z-50 lg:hidden",
        className,
      )}
    >
      <div className="flex w-10 shrink-0 items-center">{leading}</div>
      <div className="flex min-w-0 flex-1 items-center justify-center">{brand}</div>
      <div className="flex shrink-0 items-center gap-1.5">{trailing}</div>
    </header>
  );
});

MobileTopBar.displayName = "MobileTopBar";
