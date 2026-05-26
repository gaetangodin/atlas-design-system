/**
 * MobileRoute — phone-narrow page-shell layout.
 *
 * Pattern: MobileTopBar at top + scrollable content + optional
 * BottomNav at the foot. Apps pass the bar contents + main content.
 */

import { forwardRef, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface MobileRouteProps {
  /** Top bar slot — typically a `<MobileTopBar />`. */
  topBar?: ReactNode;
  /** Bottom nav slot — typically a `<BottomNav />`. */
  bottomNav?: ReactNode;
  /** Scrollable main content. */
  children?: ReactNode;
  /** Pad the main content to account for safe-area-inset-bottom. */
  respectSafeArea?: boolean;
  className?: string;
  testId?: string;
  id?: string;
}

export const MobileRoute = forwardRef<HTMLDivElement, MobileRouteProps>(
  function MobileRoute(
    { topBar, bottomNav, children, respectSafeArea = true, className, testId, id },
    ref,
  ) {
    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero("flex min-h-screen flex-col bg-background", className)}
      >
        {topBar ? <div className="sticky top-0 z-40">{topBar}</div> : null}
        <main
          className="flex-1 overflow-y-auto"
          style={respectSafeArea ? { paddingBottom: "env(safe-area-inset-bottom, 0px)" } : undefined}
        >
          {children}
        </main>
        {bottomNav ? <div className="sticky bottom-0 z-40">{bottomNav}</div> : null}
      </div>
    );
  },
);

MobileRoute.displayName = "MobileRoute";
