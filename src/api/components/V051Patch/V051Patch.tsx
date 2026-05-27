/**
 * v0.5.1 patch — small leftover surfaces from
 * `Xeekrsmainapp/src/components/` that weren't aliased in v0.5.
 *
 *  - `BottomNavigation`               — alias for Atlas's `BottomNav`.
 *  - `PreEmploymentTraining`          — slot-based pre-employment-training shell.
 *  - `RecruitmentWorkSubnavHeader`    — workspace area subnav header with
 *                                       identity + tabs slot.
 *  - `PullToRefreshIndicatorExtras`   — alt spinner variants (dots, bar, ring).
 */

import { type ReactNode } from "react";
import { Building2 } from "lucide-react";
import { BottomNav } from "../BottomNav";
import { Card, CardHeader, CardBody, CardFooter } from "../Card";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── BottomNavigation alias ──────────────────── */

/**
 * Direct alias of Atlas's `BottomNav` — keeps the Xeekrs
 * `BottomNavigation.tsx` import path working from consumers.
 */
export const BottomNavigation = BottomNav;

/* ────────────────────── PreEmploymentTraining ───────────────────── */

export interface PreEmploymentTrainingModule {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  /** 0–100 percent. */
  progress?: number;
  /** Status label (e.g. "Not started", "In progress", "Completed"). */
  status?: ReactNode;
  /** Optional duration label ("12 min"). */
  durationLabel?: ReactNode;
  /** Trailing action (Start, Resume, Review). */
  action?: ReactNode;
  onClick?: () => void;
}
export interface PreEmploymentTrainingProps {
  title?: ReactNode;
  description?: ReactNode;
  modules: PreEmploymentTrainingModule[];
  /** Overall progress summary slot (e.g. "3 of 8 modules completed"). */
  summary?: ReactNode;
  footer?: ReactNode;
  className?: string;
}
/**
 * Slot-based shell for the pre-employment training experience. The
 * consumer supplies module data; Atlas renders the cards + progress.
 */
export function PreEmploymentTraining({
  title = "Pre-employment training", description, modules, summary, footer, className,
}: PreEmploymentTrainingProps) {
  return (
    <section className={cnHero("flex w-full flex-col gap-3", className)}>
      <header>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
        {summary ? <p className="mt-1 text-xs font-medium text-muted-foreground">{summary}</p> : null}
      </header>
      <ul className="grid gap-2">
        {modules.map((m) => {
          const pct = typeof m.progress === "number" ? Math.max(0, Math.min(100, m.progress)) : null;
          return (
            <li key={m.id}>
              <button
                type="button"
                onClick={m.onClick}
                className="flex w-full items-start gap-3 rounded-xl border border-border bg-card p-3 text-left transition hover:bg-muted/40"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground">{m.title}</p>
                  {m.description ? <p className="mt-0.5 text-xs text-muted-foreground">{m.description}</p> : null}
                  {pct !== null ? (
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                      <span className="block h-full bg-primary" style={{ width: `${pct}%` }} />
                    </div>
                  ) : null}
                  <p className="mt-1 inline-flex items-center gap-2 text-[10px] text-muted-foreground">
                    {m.status ? <span className="font-semibold uppercase tracking-wide">{m.status}</span> : null}
                    {m.status && m.durationLabel ? <span aria-hidden>·</span> : null}
                    {m.durationLabel ? <span>{m.durationLabel}</span> : null}
                  </p>
                </div>
                {m.action ? <div className="shrink-0">{m.action}</div> : null}
              </button>
            </li>
          );
        })}
      </ul>
      {footer ? <footer className="border-t border-border pt-2 text-xs text-muted-foreground">{footer}</footer> : null}
    </section>
  );
}

/* ────────────────────── RecruitmentWorkSubnavHeader ─────────────── */

export interface RecruitmentWorkSubnavHeaderProps {
  /** Identity / area label (e.g. "Atlas Inc · Recruitment"). */
  identityLabel?: ReactNode;
  /** Optional identity icon (Building2 default). */
  identityIcon?: ReactNode;
  /** Title shown below the identity. */
  title?: ReactNode;
  /** Tabs slot (typically `WorkAreaSubnav` from RecruitmentExtras). */
  tabsSlot?: ReactNode;
  /** Trailing actions (right-side buttons). */
  actions?: ReactNode;
  className?: string;
}
/**
 * Header strip used at the top of recruitment-work pages — sits above
 * the WorkAreaSubnav and carries identity + area context.
 */
export function RecruitmentWorkSubnavHeader({
  identityLabel, identityIcon, title = "Recruitment", tabsSlot, actions, className,
}: RecruitmentWorkSubnavHeaderProps) {
  return (
    <header className={cnHero("flex flex-col gap-2 border-b border-border bg-card px-4 py-3", className)}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid size-7 shrink-0 place-items-center rounded-md bg-muted text-foreground">
            {identityIcon ?? <Building2 className="size-3.5 text-muted-foreground" aria-hidden />}
          </span>
          <div className="min-w-0">
            {identityLabel ? <p className="truncate text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{identityLabel}</p> : null}
            <p className="truncate text-sm font-semibold text-foreground">{title}</p>
          </div>
        </div>
        {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
      </div>
      {tabsSlot}
    </header>
  );
}

/* ────────────────────── PullToRefreshIndicatorExtras ────────────── */

export type PullToRefreshIndicatorVariant = "spinner" | "dots" | "bar" | "ring";

export interface PullToRefreshIndicatorExtrasProps {
  /** Progress, 0–1. */
  progress: number;
  /** Whether the refresh is currently active (post-trigger). */
  refreshing?: boolean;
  variant?: PullToRefreshIndicatorVariant;
  className?: string;
}
/**
 * Alternate indicator visuals for `PullToRefresh` (in MobileBits). The
 * default indicator there is a spinner; this exposes dots / bar / ring
 * variants for hosts that want a different look.
 */
export function PullToRefreshIndicatorExtras({
  progress, refreshing, variant = "spinner", className,
}: PullToRefreshIndicatorExtrasProps) {
  const pct = Math.max(0, Math.min(1, progress));
  if (variant === "bar") {
    return (
      <div className={cnHero("h-1 w-24 overflow-hidden rounded-full bg-muted", className)} aria-hidden>
        <span className={cnHero("block h-full bg-primary", refreshing && "animate-pulse")} style={{ width: `${pct * 100}%` }} />
      </div>
    );
  }
  if (variant === "dots") {
    return (
      <div className={cnHero("flex items-center gap-1", className)} aria-hidden>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cnHero("size-1.5 rounded-full bg-muted-foreground transition", refreshing && "animate-bounce")}
            style={{ animationDelay: refreshing ? `${i * 0.12}s` : undefined, opacity: refreshing ? 1 : pct }}
          />
        ))}
      </div>
    );
  }
  if (variant === "ring") {
    const r = 8;
    const c = 2 * Math.PI * r;
    return (
      <svg className={cnHero("inline-block", className)} width="20" height="20" viewBox="0 0 20 20" aria-hidden>
        <circle cx="10" cy="10" r={r} stroke="currentColor" strokeOpacity="0.15" strokeWidth="2" fill="none" />
        <circle
          cx="10" cy="10" r={r}
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          strokeLinecap="round"
          className={refreshing ? "animate-spin origin-center" : ""}
        />
      </svg>
    );
  }
  // spinner (default)
  return (
    <div
      role="status"
      aria-hidden
      className={cnHero("size-4 rounded-full border-2 border-muted border-t-foreground", refreshing && "animate-spin", className)}
      style={{ opacity: refreshing ? 1 : pct }}
    />
  );
}
