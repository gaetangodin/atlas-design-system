/**
 * Mobile primitives — small purpose-built helpers used on phone shells.
 *
 *  - `MobileMenu`               — full-bleed drawer menu (hamburger target).
 *  - `MobileSearch`             — full-screen mobile search overlay shell.
 *  - `MobileSectionTabPicker`   — mobile alternative to Tabs (segmented).
 *  - `SwipeHandler`             — wraps children with touch-swipe gesture
 *                                 callbacks (left / right / up / down).
 *  - `PullToRefresh`            — pull-down gesture shell with indicator.
 *
 * Apps wire the actual drawer / overlay open-state. Atlas owns the
 * chrome + gesture plumbing.
 */
import { forwardRef, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown, X } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── MobileMenu ──────────────────────────────── */

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function MobileMenu({ isOpen, onClose, title, children, className }: MobileMenuProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden">
      <header className="flex items-center justify-between border-b border-border px-4 py-3">
        <p className="text-base font-semibold">{title ?? "Menu"}</p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
        >
          <X className="size-4" />
        </button>
      </header>
      <div className={cnHero("flex-1 overflow-y-auto", className)}>{children}</div>
    </div>
  );
}

/* ────────────────────── MobileSearch ────────────────────────────── */

export interface MobileSearchProps {
  isOpen: boolean;
  onClose: () => void;
  /** The search input element (provided by the app). */
  searchInput: ReactNode;
  /** Results / suggestions area. */
  children?: ReactNode;
  className?: string;
}

export function MobileSearch({ isOpen, onClose, searchInput, children, className }: MobileSearchProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden">
      <header className="flex items-center gap-3 border-b border-border px-3 py-2">
        <div className="min-w-0 flex-1">{searchInput}</div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close search"
          className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
        >
          <X className="size-4" />
        </button>
      </header>
      <div className={cnHero("flex-1 overflow-y-auto", className)}>{children}</div>
    </div>
  );
}

/* ────────────────────── MobileSectionTabPicker ──────────────────── */

export interface MobileSectionTabPickerOption {
  id: string;
  label: string;
}

export interface MobileSectionTabPickerProps {
  options: MobileSectionTabPickerOption[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
}

export function MobileSectionTabPicker({ options, value, onChange, className }: MobileSectionTabPickerProps) {
  const active = options.find((o) => o.id === value);
  return (
    <div className={cnHero("relative w-full", className)}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full appearance-none rounded-full border border-border bg-card pl-4 pr-10 text-sm font-semibold text-foreground"
      >
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
      <span className="sr-only">Current section: {active?.label}</span>
    </div>
  );
}

/* ────────────────────── SwipeHandler ────────────────────────────── */

export interface SwipeHandlerProps {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  /** Threshold in pixels before a swipe fires. Defaults to 40. */
  threshold?: number;
  children?: ReactNode;
  className?: string;
}

export function SwipeHandler({
  onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, threshold = 40, children, className,
}: SwipeHandlerProps) {
  const startRef = useRef<{ x: number; y: number } | null>(null);
  return (
    <div
      className={className}
      onTouchStart={(e) => {
        const t = e.touches[0];
        if (t) startRef.current = { x: t.clientX, y: t.clientY };
      }}
      onTouchEnd={(e) => {
        const start = startRef.current;
        const t = e.changedTouches[0];
        if (!start || !t) return;
        const dx = t.clientX - start.x;
        const dy = t.clientY - start.y;
        if (Math.abs(dx) > Math.abs(dy)) {
          if (dx > threshold) onSwipeRight?.();
          else if (dx < -threshold) onSwipeLeft?.();
        } else {
          if (dy > threshold) onSwipeDown?.();
          else if (dy < -threshold) onSwipeUp?.();
        }
        startRef.current = null;
      }}
    >
      {children}
    </div>
  );
}

/* ────────────────────── PullToRefresh ───────────────────────────── */

export interface PullToRefreshProps {
  /** Called when the user has pulled past the threshold + released. */
  onRefresh: () => Promise<void> | void;
  /** Threshold in pixels before refresh fires. Defaults to 60. */
  threshold?: number;
  /** Indicator slot — defaults to a simple pill. */
  indicator?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PullToRefresh({ onRefresh, threshold = 60, indicator, children, className }: PullToRefreshProps) {
  const [pull, setPull] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const startY = useRef<number | null>(null);

  useEffect(() => {
    if (pull >= threshold && !refreshing) {
      setRefreshing(true);
      Promise.resolve(onRefresh()).finally(() => {
        setRefreshing(false);
        setPull(0);
      });
    }
  }, [pull, refreshing, threshold, onRefresh]);

  return (
    <div
      className={cnHero("relative", className)}
      onTouchStart={(e) => {
        if (window.scrollY === 0) startY.current = e.touches[0]?.clientY ?? null;
      }}
      onTouchMove={(e) => {
        if (startY.current == null) return;
        const dy = (e.touches[0]?.clientY ?? 0) - startY.current;
        if (dy > 0) setPull(Math.min(dy, threshold * 1.5));
      }}
      onTouchEnd={() => {
        startY.current = null;
        if (pull < threshold) setPull(0);
      }}
    >
      <div
        aria-hidden
        style={{ height: pull }}
        className="flex items-end justify-center overflow-hidden transition-[height]"
      >
        {pull > 0 || refreshing ? (
          indicator ?? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              {refreshing ? "Refreshing…" : "Pull to refresh"}
            </span>
          )
        ) : null}
      </div>
      {children}
    </div>
  );
}
