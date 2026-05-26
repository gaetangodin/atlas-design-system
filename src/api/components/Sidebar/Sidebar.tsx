/**
 * Sidebar — desktop side navigation rail.
 * Composite — uses semantic nav + buttons. Two widths: collapsed (64px)
 * and expanded (252px) matching Xeekrs's layout vars.
 */
"use client";
import { forwardRef, type ReactNode, type Ref } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface SidebarItem {
  id: string;
  label: string;
  icon: ReactNode;
  badge?: ReactNode;
  href?: string;
}

export interface SidebarProps {
  items: SidebarItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  collapsed?: boolean;
  brand?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(function Sidebar(
  { items, activeId, onSelect, collapsed = false, brand, footer, className },
  ref,
) {
  return (
    <aside
      ref={ref as Ref<HTMLElement>}
      aria-label="Primary navigation"
      className={cnHero(
        "flex flex-col h-full border-r border-border bg-background text-foreground transition-[width] duration-200",
        collapsed ? "w-16" : "w-[252px]",
        className,
      )}
    >
      {brand ? (
        <div className={cnHero("flex items-center h-14 px-3 border-b border-border", collapsed && "justify-center")}>
          {brand}
        </div>
      ) : null}
      <nav className="flex-1 overflow-auto px-2 py-3">
        <ul role="list" className="flex flex-col gap-1">
          {items.map((item) => {
            const isActive = item.id === activeId;
            const Inner = (
              <>
                <span className="inline-flex items-center justify-center size-5 [&_svg]:size-5">{item.icon}</span>
                {!collapsed ? <span className="flex-1 truncate">{item.label}</span> : null}
                {!collapsed && item.badge ? (
                  <span className="ml-auto inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-muted text-xs font-medium text-foreground">
                    {item.badge}
                  </span>
                ) : null}
              </>
            );
            const className = cnHero(
              "flex items-center gap-3 w-full h-9 rounded-full px-3 text-sm font-medium outline-none",
              "focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              isActive
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
              collapsed && "justify-center px-0",
            );
            return (
              <li key={item.id}>
                {item.href ? (
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={className}
                  >
                    {Inner}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => onSelect?.(item.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={className}
                  >
                    {Inner}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      {footer ? <div className="border-t border-border p-3">{footer}</div> : null}
    </aside>
  );
});
Sidebar.displayName = "Sidebar";
