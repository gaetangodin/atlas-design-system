/**
 * Profile tabs shell — generic consolidation of the Xeekrs employer-profile
 * and job-seeker-3-profile tab patterns. A single slot-based component
 * with a horizontal tab row + active tab body.
 *
 * Use case: any record-detail page (employer, candidate, case, etc.) with
 * Overview / Notes / Recruitment / Placements / Directory tabs.
 */

import { type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface ProfileTab {
  id: string;
  label: ReactNode;
  /** Optional count badge. */
  count?: number;
  /** Optional disabled state. */
  disabled?: boolean;
}
export interface ProfileTabsShellProps {
  /** Hero / identity strip above the tab row. */
  hero?: ReactNode;
  tabs: ProfileTab[];
  /** ID of the currently selected tab. */
  value: string;
  onChange: (id: string) => void;
  /** Body content for the active tab. */
  children: ReactNode;
  /** Optional right rail. */
  rightRail?: ReactNode;
  /** Optional sticky toolbar between tabs and body. */
  toolbar?: ReactNode;
  className?: string;
}
export function ProfileTabsShell({
  hero, tabs, value, onChange, children, rightRail, toolbar, className,
}: ProfileTabsShellProps) {
  return (
    <article className={cnHero("flex w-full flex-col gap-3", className)}>
      {hero}
      <div className="border-b border-border">
        <nav className="-mb-px flex gap-1 overflow-x-auto">
          {tabs.map((t) => {
            const active = t.id === value;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => !t.disabled && onChange(t.id)}
                disabled={t.disabled}
                aria-current={active ? "page" : undefined}
                className={cnHero(
                  "inline-flex items-center gap-1.5 whitespace-nowrap border-b-2 px-3 py-2 text-sm font-medium transition",
                  active
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
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
      </div>
      {toolbar ? <div className="flex items-center justify-between gap-3 pt-2">{toolbar}</div> : null}
      <div className={cnHero("grid gap-4", rightRail ? "lg:grid-cols-[1fr_320px]" : "")}>
        <div className="min-w-0">{children}</div>
        {rightRail ? <aside className="flex flex-col gap-3">{rightRail}</aside> : null}
      </div>
    </article>
  );
}

/* ────────────────────── Tab-content shells ──────────────────────── */
/**
 * Thin re-exportable wrappers that bake in a section card + title. They
 * exist so the Xeekrs `EmployerProfileOverviewTab`, `*NotesTab`, etc. file
 * names continue to make sense without dragging app-specific data into Atlas.
 */
export interface ProfileTabSectionProps {
  title?: ReactNode;
  description?: ReactNode;
  trailing?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}
export function ProfileTabSection({ title, description, trailing, children, footer, className }: ProfileTabSectionProps) {
  return (
    <section className={cnHero("rounded-2xl border border-border bg-card", className)}>
      {(title || description || trailing) ? (
        <header className="flex items-start justify-between gap-3 px-4 pt-3">
          <div className="min-w-0">
            {title ? <p className="text-sm font-semibold">{title}</p> : null}
            {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
          </div>
          {trailing ? <div className="shrink-0">{trailing}</div> : null}
        </header>
      ) : null}
      <div className="px-4 py-3">{children}</div>
      {footer ? <footer className="border-t border-border px-4 py-2">{footer}</footer> : null}
    </section>
  );
}

/* Aliases for the Xeekrs tab-file names so they resolve out of Atlas. */
export const ProfileOverviewTab = ProfileTabSection;
export const ProfileNotesTab = ProfileTabSection;
export const ProfileRecruitmentTab = ProfileTabSection;
export const ProfilePlacementsTab = ProfileTabSection;
export const ProfileDirectoryTab = ProfileTabSection;
export const ProfileCandidatesTab = ProfileTabSection;
export const ProfileJobsTab = ProfileTabSection;
export const ProfileCaseTasksTab = ProfileTabSection;
