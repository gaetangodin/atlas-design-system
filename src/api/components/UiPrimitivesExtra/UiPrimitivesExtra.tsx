/**
 * Small ui/ primitives that don't yet have Atlas equivalents.
 *
 *  - `Separator`         — horizontal/vertical divider (CSS-only).
 *  - `ScrollArea`        — styled scroll container with min-height.
 *  - `HoverCard`         — hover-revealed floating card (uses `:hover` group).
 *  - `ContextMenu`       — right-click menu wrapper (controlled by parent).
 *  - `NavigationMenu`    — header-style horizontal nav with optional submenu slot.
 *  - `CaseloadShellTabs` — tab strip used by caseload sub-shells.
 */

import { type ReactNode, useEffect, useRef, useState } from "react";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── Separator ───────────────────────────────── */

export interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  /** Decorative — sets aria-hidden to true. */
  decorative?: boolean;
  className?: string;
}
export function Separator({ orientation = "horizontal", decorative = true, className }: SeparatorProps) {
  return (
    <div
      role={decorative ? "none" : "separator"}
      aria-orientation={decorative ? undefined : orientation}
      className={cnHero(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className,
      )}
    />
  );
}

/* ────────────────────── ScrollArea ──────────────────────────────── */

export interface ScrollAreaProps {
  children: ReactNode;
  /** Constrain height — pass a Tailwind class like "h-96" or a CSS value. */
  height?: string;
  className?: string;
}
export function ScrollArea({ children, height = "h-80", className }: ScrollAreaProps) {
  return (
    <div
      className={cnHero(
        "overflow-y-auto overflow-x-hidden rounded-xl",
        // Subtle scrollbar treatment.
        "[scrollbar-width:thin]",
        "[&::-webkit-scrollbar]:w-1.5",
        "[&::-webkit-scrollbar-thumb]:rounded-full",
        "[&::-webkit-scrollbar-thumb]:bg-muted",
        height,
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ────────────────────── HoverCard ───────────────────────────────── */

export interface HoverCardProps {
  /** Anchor element that activates the hover. */
  trigger: ReactNode;
  /** Floating content. */
  children: ReactNode;
  /** Tailwind side classes for the floating card. Default opens below. */
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}
const SIDE_POS: Record<NonNullable<HoverCardProps["side"]>, string> = {
  top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
  bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
  left: "right-full top-1/2 mr-2 -translate-y-1/2",
  right: "left-full top-1/2 ml-2 -translate-y-1/2",
};
export function HoverCard({ trigger, children, side = "bottom", className }: HoverCardProps) {
  return (
    <span className="group relative inline-block">
      <span>{trigger}</span>
      <span
        className={cnHero(
          "pointer-events-none absolute z-40 hidden w-64 rounded-xl border border-border bg-background p-3 text-xs text-foreground shadow-lg",
          "group-hover:pointer-events-auto group-hover:block",
          SIDE_POS[side],
          className,
        )}
      >
        {children}
      </span>
    </span>
  );
}

/* ────────────────────── ContextMenu ─────────────────────────────── */

export interface ContextMenuItem {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  /** Item shortcut text. */
  shortcut?: string;
  /** Renders as a destructive item. */
  destructive?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
}
export interface ContextMenuProps {
  /** Anchor element. */
  children: ReactNode;
  items: ContextMenuItem[];
  className?: string;
}
/**
 * Right-click activated menu. Atlas owns the popper-style positioning
 * (anchored to the cursor on contextmenu); items + behavior come from
 * the consumer.
 */
export function ContextMenu({ children, items, className }: ContextMenuProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("click", close);
    window.addEventListener("scroll", close, true);
    return () => {
      window.removeEventListener("click", close);
      window.removeEventListener("scroll", close, true);
    };
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      onContextMenu={(e) => {
        e.preventDefault();
        setPos({ x: e.clientX, y: e.clientY });
        setOpen(true);
      }}
      className="relative"
    >
      {children}
      {open ? (
        <ul
          role="menu"
          style={{ position: "fixed", top: pos.y, left: pos.x }}
          className={cnHero(
            "z-50 min-w-[180px] rounded-xl border border-border bg-background p-1 text-sm shadow-lg",
            className,
          )}
        >
          {items.map((it) => (
            <li key={it.id}>
              <button
                type="button"
                onClick={() => {
                  if (it.disabled) return;
                  it.onSelect?.();
                  setOpen(false);
                }}
                disabled={it.disabled}
                role="menuitem"
                className={cnHero(
                  "flex w-full items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-left transition",
                  it.destructive ? "text-pink-700 hover:bg-pink-50" : "text-foreground hover:bg-muted/40",
                  it.disabled && "cursor-not-allowed opacity-50",
                )}
              >
                <span className="inline-flex items-center gap-2">
                  {it.icon ? <span className="text-muted-foreground">{it.icon}</span> : null}
                  {it.label}
                </span>
                {it.shortcut ? <kbd className="font-mono text-[10px] text-muted-foreground">{it.shortcut}</kbd> : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

/* ────────────────────── NavigationMenu ──────────────────────────── */

export interface NavigationMenuItem {
  id: string;
  label: ReactNode;
  href?: string;
  /** Submenu content shown on hover/focus. */
  submenu?: ReactNode;
  /** Mark this item as active. */
  active?: boolean;
}
export interface NavigationMenuProps {
  items: NavigationMenuItem[];
  className?: string;
}
export function NavigationMenu({ items, className }: NavigationMenuProps) {
  return (
    <nav className={cnHero("flex items-center gap-1", className)}>
      {items.map((it) => (
        <div key={it.id} className="group relative">
          <a
            href={it.href ?? "#"}
            className={cnHero(
              "inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium transition",
              it.active ? "bg-spotlight/30 text-foreground" : "text-foreground hover:bg-muted/40",
            )}
          >
            {it.label}
          </a>
          {it.submenu ? (
            <div className="invisible absolute left-0 top-full z-40 mt-1 min-w-[220px] rounded-xl border border-border bg-background p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {it.submenu}
            </div>
          ) : null}
        </div>
      ))}
    </nav>
  );
}

/* ────────────────────── CaseloadShellTabs ───────────────────────── */

export interface CaseloadShellTab {
  id: string;
  label: ReactNode;
  count?: number;
  disabled?: boolean;
}
export interface CaseloadShellTabsProps {
  tabs: CaseloadShellTab[];
  value: string;
  onChange: (id: string) => void;
  /** Trailing slot in the tab strip. */
  trailing?: ReactNode;
  className?: string;
}
export function CaseloadShellTabs({ tabs, value, onChange, trailing, className }: CaseloadShellTabsProps) {
  return (
    <div className={cnHero("flex items-center justify-between gap-3 border-b border-border", className)}>
      <nav className="-mb-px flex gap-1 overflow-x-auto" role="tablist">
        {tabs.map((t) => {
          const active = t.id === value;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active}
              disabled={t.disabled}
              onClick={() => !t.disabled && onChange(t.id)}
              className={cnHero(
                "inline-flex items-center gap-1.5 whitespace-nowrap border-b-2 px-3 py-2 text-sm font-medium transition",
                active ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground",
                t.disabled && "cursor-not-allowed opacity-50",
              )}
            >
              {t.label}
              {typeof t.count === "number" ? (
                <span className={cnHero("rounded-full px-1.5 py-0.5 text-[10px] font-semibold", active ? "bg-primary/15 text-foreground" : "bg-muted text-muted-foreground")}>
                  {t.count}
                </span>
              ) : null}
            </button>
          );
        })}
      </nav>
      {trailing ? <div className="shrink-0 pb-1">{trailing}</div> : null}
    </div>
  );
}
