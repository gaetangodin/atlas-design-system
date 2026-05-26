/**
 * Misc small primitives — `CollapsibleCard`, `MiniMonthCalendar`,
 * `ResponsiveTabsList`, `TabBar`.
 *
 * Each one is a tight wrapper over an existing Atlas primitive plus
 * a Xeekrs-specific affordance.
 */
import { forwardRef, useState, type ReactNode } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── CollapsibleCard ─────────────────────────── */

export interface CollapsibleCardProps {
  title: ReactNode;
  description?: ReactNode;
  /** Open by default. Uncontrolled. */
  defaultOpen?: boolean;
  /** Controlled open state. Pair with `onOpenChange`. */
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Right-side action (e.g. count chip). */
  headerAction?: ReactNode;
  children?: ReactNode;
  className?: string;
  testId?: string;
}

export const CollapsibleCard = forwardRef<HTMLElement, CollapsibleCardProps>(
  function CollapsibleCard(
    { title, description, defaultOpen = true, isOpen, onOpenChange, headerAction, children, className, testId },
    ref,
  ) {
    const [internal, setInternal] = useState(defaultOpen);
    const open = isOpen ?? internal;
    const toggle = (): void => {
      const next = !open;
      if (isOpen === undefined) setInternal(next);
      onOpenChange?.(next);
    };
    return (
      <section
        ref={ref}
        data-testid={testId}
        className={cnHero(
          "overflow-hidden rounded-2xl border border-border bg-card",
          className,
        )}
      >
        <header className="flex items-start justify-between gap-2 border-b border-border px-5 py-3">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            className="flex min-w-0 flex-1 items-center gap-2 text-left"
          >
            <ChevronDown
              className={cnHero(
                "size-4 shrink-0 text-muted-foreground transition-transform",
                open && "rotate-180",
              )}
              aria-hidden
            />
            <span className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">{title}</p>
              {description ? (
                <p className="truncate text-xs text-muted-foreground">{description}</p>
              ) : null}
            </span>
          </button>
          {headerAction ? <div className="shrink-0">{headerAction}</div> : null}
        </header>
        {open ? <div className="px-5 py-4">{children}</div> : null}
      </section>
    );
  },
);
CollapsibleCard.displayName = "CollapsibleCard";

/* ────────────────────── MiniMonthCalendar ───────────────────────── */

export interface MiniMonthCalendarProps {
  /** Month being displayed (1–12). */
  month: number;
  /** Year being displayed. */
  year: number;
  /** Selected dates (ISO format YYYY-MM-DD). */
  selected?: string[];
  /** Click handler — fires the clicked ISO date. */
  onPickDate?: (iso: string) => void;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
  className?: string;
  testId?: string;
}

function pad(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

function buildGrid(month: number, year: number): { iso: string; day: number; inMonth: boolean }[] {
  const first = new Date(year, month - 1, 1);
  const startWeekday = first.getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const cells: { iso: string; day: number; inMonth: boolean }[] = [];
  // leading padding
  for (let i = 0; i < startWeekday; i++) {
    const d = new Date(year, month - 1, -startWeekday + i + 1);
    cells.push({
      iso: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
      day: d.getDate(),
      inMonth: false,
    });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    cells.push({ iso: `${year}-${pad(month)}-${pad(i)}`, day: i, inMonth: true });
  }
  // trailing padding to fill week rows
  while (cells.length % 7 !== 0) {
    const last = cells[cells.length - 1]!;
    const next = new Date(last.iso);
    next.setDate(next.getDate() + 1);
    cells.push({
      iso: `${next.getFullYear()}-${pad(next.getMonth() + 1)}-${pad(next.getDate())}`,
      day: next.getDate(),
      inMonth: false,
    });
  }
  return cells;
}

const MONTH_LABEL = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function MiniMonthCalendar({
  month, year, selected = [], onPickDate, onPrevMonth, onNextMonth, className, testId,
}: MiniMonthCalendarProps) {
  const grid = buildGrid(month, year);
  return (
    <div
      data-testid={testId}
      className={cnHero("inline-block rounded-xl border border-border bg-card p-3 text-xs", className)}
    >
      <header className="mb-2 flex items-center justify-between">
        <button
          type="button"
          onClick={onPrevMonth}
          aria-label="Previous month"
          className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
        >
          <ChevronLeft className="size-3.5" />
        </button>
        <p className="font-semibold tabular-nums">{MONTH_LABEL[month - 1]} {year}</p>
        <button
          type="button"
          onClick={onNextMonth}
          aria-label="Next month"
          className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
        >
          <ChevronRight className="size-3.5" />
        </button>
      </header>
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-muted-foreground">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={i} className="font-semibold">{d}</span>
        ))}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-1">
        {grid.map((cell) => {
          const isSel = selected.includes(cell.iso);
          return (
            <button
              key={cell.iso}
              type="button"
              onClick={() => onPickDate?.(cell.iso)}
              className={cnHero(
                "inline-flex size-7 items-center justify-center rounded-md text-xs tabular-nums transition-colors",
                isSel ? "bg-primary text-primary-foreground font-semibold" : cell.inMonth ? "text-foreground hover:bg-muted" : "text-muted-foreground/60 hover:bg-muted/40",
              )}
            >
              {cell.day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ────────────────────── ResponsiveTabsList ──────────────────────── */

export interface ResponsiveTab {
  id: string;
  label: string;
  badge?: ReactNode;
}

export interface ResponsiveTabsListProps {
  tabs: ResponsiveTab[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
  testId?: string;
}

export function ResponsiveTabsList({ tabs, value, onChange, className, testId }: ResponsiveTabsListProps) {
  return (
    <div
      data-testid={testId}
      className={cnHero(
        "flex w-full gap-1 overflow-x-auto whitespace-nowrap border-b border-border",
        className,
      )}
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === value;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cnHero(
              "inline-flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {tab.label}
            {tab.badge ? <span className="text-xs">{tab.badge}</span> : null}
          </button>
        );
      })}
    </div>
  );
}

/* ────────────────────── TabBar (mobile-bottom tab style) ───────── */

export interface TabBarItem {
  id: string;
  label: string;
  icon: ReactNode;
}

export interface TabBarProps {
  items: TabBarItem[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
  testId?: string;
}

export function TabBar({ items, value, onChange, className, testId }: TabBarProps) {
  return (
    <nav
      data-testid={testId}
      className={cnHero(
        "flex w-full items-center justify-around border-t border-border bg-card px-2 py-2",
        className,
      )}
      style={{ paddingBottom: "max(env(safe-area-inset-bottom, 0px), 0.5rem)" }}
    >
      {items.map((item) => {
        const isActive = item.id === value;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            aria-current={isActive ? "page" : undefined}
            className={cnHero(
              "inline-flex flex-col items-center gap-0.5 rounded-md px-3 py-1 text-[10px] font-semibold transition-colors",
              isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <span className="size-5">{item.icon}</span>
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
