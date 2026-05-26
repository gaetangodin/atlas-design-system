/**
 * BottomNav — mobile bottom navigation bar with safe-area awareness.
 * No HeroUI primitive; built on `<nav>` + buttons.
 */
"use client";
import { forwardRef, type ReactNode, type Ref } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface BottomNavItem {
  id: string;
  label: string;
  icon: ReactNode;
  badge?: ReactNode;
}

export interface BottomNavProps {
  items: BottomNavItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  className?: string;
}

export const BottomNav = forwardRef<HTMLElement, BottomNavProps>(function BottomNav(
  { items, activeId, onSelect, className },
  ref,
) {
  return (
    <nav
      ref={ref as Ref<HTMLElement>}
      aria-label="Primary"
      className={cnHero(
        "sticky bottom-0 inset-x-0 border-t border-border bg-background/90 backdrop-blur-md",
        "pb-[env(safe-area-inset-bottom)]",
        className,
      )}
    >
      <ul role="list" className="flex items-stretch justify-around">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id} className="flex-1">
              <button
                type="button"
                onClick={() => onSelect?.(item.id)}
                aria-current={isActive ? "page" : undefined}
                className={cnHero(
                  "relative flex w-full flex-col items-center justify-center gap-1 py-2.5 outline-none",
                  "focus-visible:ring-ring/50 focus-visible:ring-[3px] rounded-md",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="relative inline-flex items-center justify-center [&_svg]:size-5">
                  {item.icon}
                  {item.badge ? (
                    <span className="absolute -top-1 -right-2 inline-flex items-center justify-center min-w-4 h-4 px-1 rounded-full bg-destructive text-white text-[10px] font-medium leading-none">
                      {item.badge}
                    </span>
                  ) : null}
                </span>
                <span className="text-[11px] font-medium">{item.label}</span>
                {isActive ? (
                  <span aria-hidden="true" className="absolute -top-px left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-full bg-foreground" />
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
});
BottomNav.displayName = "BottomNav";
