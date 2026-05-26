/**
 * AccountMenu — secondary nav for the account / settings shell.
 *
 * Ported from Xeekrs (`AccountMenu.tsx`). Renders a vertical list of
 * account sections with an active state. Two display modes:
 *   - expanded: full text + icon, used in the wide drawer.
 *   - collapsed: icon-only buttons with right-side tooltips,
 *     used in the icon rail.
 *
 * Sections are passed in as data (`items` prop) — Atlas doesn't ship
 * a hard-coded list of section IDs. Each item carries `id`, `label`,
 * and `icon` (a ReactNode, typically a lucide icon).
 *
 * The component owns no state. The active selection is controlled.
 */

import { forwardRef, type ReactNode } from "react";
import { ChevronLeft } from "lucide-react";
import { Tooltip } from "../Tooltip";
import { cnHero } from "../../../shared/cn-hero";

export interface AccountMenuItem {
  id: string;
  label: string;
  icon: ReactNode;
  /** Optional: a notification badge or count rendered to the right (expanded only). */
  badge?: ReactNode;
}

export interface AccountMenuProps {
  /** Items to render. */
  items: AccountMenuItem[];
  /** Currently-selected item id. */
  activeId: string;
  /** Selection callback. */
  onSelect: (id: string) => void;
  /** Icon-rail variant. */
  isCollapsed?: boolean;
  /** Title shown above the list in expanded mode. */
  heading?: string;
  /** Back-to-parent callback (only used in collapsed mode). */
  onBack?: () => void;
  /** Aria-label for the navigation container. */
  "aria-label"?: string;
  className?: string;
  testId?: string;
  id?: string;
}

export const AccountMenu = forwardRef<HTMLDivElement, AccountMenuProps>(
  function AccountMenu(
    {
      items,
      activeId,
      onSelect,
      isCollapsed = false,
      heading = "My Account",
      onBack,
      "aria-label": ariaLabel,
      className,
      testId,
      id,
    },
    ref,
  ) {
    if (isCollapsed) {
      return (
        <div
          ref={ref}
          id={id}
          data-testid={testId}
          className={cnHero(
            "flex min-h-0 flex-1 flex-col gap-2 px-2 py-3",
            className,
          )}
        >
          {onBack ? (
            <Tooltip content="Back to navigation" placement="right">
              <button
                type="button"
                onClick={onBack}
                aria-label="Back to navigation"
                className="flex w-full items-center justify-center rounded-lg border border-border bg-transparent p-2 text-foreground transition-colors hover:bg-muted"
              >
                <ChevronLeft className="size-4 shrink-0" aria-hidden />
              </button>
            </Tooltip>
          ) : null}

          <div className="mx-auto h-px w-6 shrink-0 bg-border" aria-hidden />

          <nav className="flex flex-col gap-1.5" aria-label={ariaLabel ?? heading}>
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <Tooltip key={item.id} content={item.label} placement="right">
                  <button
                    type="button"
                    onClick={() => onSelect(item.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={cnHero(
                      "flex w-full items-center justify-center rounded-lg border p-2 transition-colors",
                      isActive
                        ? "border-border bg-muted text-foreground shadow-sm"
                        : "border-border bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    <span className="shrink-0" aria-hidden>
                      {item.icon}
                    </span>
                  </button>
                </Tooltip>
              );
            })}
          </nav>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero("p-4", className)}
      >
        <h6 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {heading}
        </h6>
        <nav className="space-y-1" aria-label={ariaLabel ?? heading}>
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item.id)}
                aria-current={isActive ? "page" : undefined}
                className={cnHero(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-colors",
                  isActive
                    ? "bg-muted text-foreground"
                    : "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <span className="shrink-0" aria-hidden>
                  {item.icon}
                </span>
                <span
                  className={cnHero(
                    "flex-1 text-left text-sm",
                    isActive ? "font-semibold" : "font-medium",
                  )}
                >
                  {item.label}
                </span>
                {item.badge ? (
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {item.badge}
                  </span>
                ) : null}
              </button>
            );
          })}
        </nav>
      </div>
    );
  },
);

AccountMenu.displayName = "AccountMenu";
