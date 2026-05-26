/**
 * DashboardShell — sidebar + topbar + main grid for app-layout pages.
 * Composes around Atlas's `Sidebar`. The consumer passes the rendered
 * sidebar (or any sidebar component) — Atlas only handles the chrome.
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface DashboardShellProps {
  sidebar: ReactNode;
  topbar?: ReactNode;
  children: ReactNode;
  /** Right-rail panel (e.g. activity feed). */
  rightRail?: ReactNode;
  className?: string;
}

export const DashboardShell = forwardRef<HTMLDivElement, DashboardShellProps>(function DashboardShell(
  { sidebar, topbar, children, rightRail, className },
  ref,
) {
  return (
    <div
      ref={ref as Ref<HTMLDivElement>}
      className={cnHero("min-h-screen bg-background text-foreground flex", className)}
    >
      {sidebar}
      <div className="flex-1 flex flex-col min-w-0">
        {topbar ? (
          <header className="sticky top-0 z-30 h-14 border-b border-border bg-background/85 backdrop-blur-md flex items-center px-4 sm:px-6">
            {topbar}
          </header>
        ) : null}
        <div className="flex-1 flex min-w-0">
          <main className="flex-1 min-w-0 overflow-auto px-4 sm:px-6 py-6">
            {children}
          </main>
          {rightRail ? (
            <aside className="hidden xl:block w-80 border-l border-border bg-background overflow-auto">
              {rightRail}
            </aside>
          ) : null}
        </div>
      </div>
    </div>
  );
});
DashboardShell.displayName = "DashboardShell";
