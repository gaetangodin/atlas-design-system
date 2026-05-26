/**
 * Caseload-domain composition templates.
 *
 * Slot-based shells for the recurring patterns in Xeekrs's
 * `components/caseload/` directory. Apps fill the slots with their
 * data. Atlas doesn't bake the domain models in — only the layout
 * and visual chrome.
 */

import { type ReactNode } from "react";
import { Card, CardBody, CardHeader } from "../Card";
import { ProfileSectionCard } from "../PageHelpers";
import { cnHero } from "../../../shared/cn-hero";

interface SlotProps {
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/* ─── CaseloadCard — list/grid tile for a caseload entry. */
export interface CaseloadCardProps extends SlotProps {
  meta?: ReactNode;
  trailing?: ReactNode;
  onClick?: () => void;
}
export function CaseloadCard({ title, description, meta, trailing, onClick, children, className }: CaseloadCardProps) {
  return (
    <Card isPressable={Boolean(onClick)} onClick={onClick} className={cnHero("h-full", className)}>
      <CardHeader className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          {title ? <p className="truncate text-sm font-semibold text-foreground">{title}</p> : null}
          {description ? <p className="line-clamp-2 text-xs text-muted-foreground">{description}</p> : null}
        </div>
        {trailing ? <div className="shrink-0">{trailing}</div> : null}
      </CardHeader>
      <CardBody className="space-y-2">
        {children}
        {meta ? <p className="text-xs text-muted-foreground">{meta}</p> : null}
      </CardBody>
    </Card>
  );
}

/* ─── CaseloadCategoryTable — grouped table sections (one per category). */
export interface CaseloadCategoryTableProps extends SlotProps {
  /** Header row content (e.g. column labels). */
  headerRow?: ReactNode;
}
export function CaseloadCategoryTable({ title, description, headerRow, children, className }: CaseloadCategoryTableProps) {
  return (
    <ProfileSectionCard title={title} description={description} className={className}>
      <div className="-mx-5">
        {headerRow ? (
          <div className="border-b border-border bg-muted/30 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {headerRow}
          </div>
        ) : null}
        <div className="divide-y divide-border">{children}</div>
      </div>
    </ProfileSectionCard>
  );
}

/* ─── CaseloadTaskRow — single-line row inside a caseload table. */
export interface CaseloadTaskRowProps {
  title: ReactNode;
  status?: ReactNode;
  due?: ReactNode;
  trailing?: ReactNode;
  onClick?: () => void;
  className?: string;
}
export function CaseloadTaskRow({ title, status, due, trailing, onClick, className }: CaseloadTaskRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      className={cnHero(
        "flex w-full items-center gap-3 px-5 py-2.5 text-left transition-colors hover:bg-muted/40 disabled:cursor-default",
        className,
      )}
    >
      <p className="min-w-0 flex-1 truncate text-sm">{title}</p>
      {status ? <span className="shrink-0 text-xs">{status}</span> : null}
      {due ? <span className="shrink-0 text-xs text-muted-foreground">{due}</span> : null}
      {trailing}
    </button>
  );
}

/* ─── CaseloadOverviewHubSections — section grid for hub overview pages. */
export interface CaseloadHubSection {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  body: ReactNode;
}
export interface CaseloadOverviewHubSectionsProps {
  sections: CaseloadHubSection[];
  className?: string;
}
export function CaseloadOverviewHubSections({ sections, className }: CaseloadOverviewHubSectionsProps) {
  return (
    <div className={cnHero("grid gap-4 lg:grid-cols-2", className)}>
      {sections.map((s) => (
        <ProfileSectionCard key={s.id} title={s.title} description={s.description}>
          {s.body}
        </ProfileSectionCard>
      ))}
    </div>
  );
}

/* ─── CaseworkerOnBehalfBar — banner reminding a staff user that they're
 *    acting on behalf of a learner / client. */
export interface CaseworkerOnBehalfBarProps {
  onBehalfOfName: string;
  onExit?: () => void;
  className?: string;
}
export function CaseworkerOnBehalfBar({ onBehalfOfName, onExit, className }: CaseworkerOnBehalfBarProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cnHero(
        "flex flex-wrap items-center justify-between gap-3 border-b border-warning/40 bg-warning/10 px-4 py-2 text-sm",
        className,
      )}
    >
      <p className="text-warning-700">
        Acting on behalf of <strong className="font-semibold">{onBehalfOfName}</strong>.
      </p>
      {onExit ? (
        <button
          type="button"
          onClick={onExit}
          className="text-xs font-semibold underline-offset-2 hover:underline"
        >
          Exit
        </button>
      ) : null}
    </div>
  );
}

/* ─── EmployerProfileQuickView / JobSeeker3ProfileQuickView — quick-view
 *    panels that float beside list pages. Atlas exposes one shell;
 *    apps differentiate via `subject` and `body`. */
export interface ProfileQuickViewProps extends SlotProps {
  /** "Employer", "Job seeker", etc. — the subject category label. */
  subjectLabel?: string;
  onClose?: () => void;
  actions?: ReactNode;
}
export function ProfileQuickView({ subjectLabel, title, description, onClose, actions, children, className }: ProfileQuickViewProps) {
  return (
    <aside
      className={cnHero(
        "flex h-full w-80 flex-col border-l border-border bg-card",
        className,
      )}
    >
      <header className="space-y-1 border-b border-border px-4 py-3">
        {subjectLabel ? (
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {subjectLabel}
          </p>
        ) : null}
        <p className="text-base font-semibold">{title}</p>
        {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">{children}</div>
      {actions || onClose ? (
        <footer className="flex items-center justify-between gap-2 border-t border-border bg-card/95 px-4 py-2.5">
          {actions}
          {onClose ? (
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              Close
            </button>
          ) : null}
        </footer>
      ) : null}
    </aside>
  );
}

/* ─── TeamMembersTable — slot-based "team members" listing. */
export interface TeamMember {
  id: string;
  name: string;
  role?: ReactNode;
  status?: ReactNode;
  trailing?: ReactNode;
}
export interface TeamMembersTableProps {
  members: TeamMember[];
  emptyState?: ReactNode;
  className?: string;
}
export function TeamMembersTable({ members, emptyState, className }: TeamMembersTableProps) {
  if (members.length === 0 && emptyState) return <>{emptyState}</>;
  return (
    <div className={cnHero("overflow-hidden rounded-xl border border-border bg-card", className)}>
      <ul className="divide-y divide-border">
        {members.map((m) => (
          <li key={m.id} className="flex items-center gap-3 px-4 py-3 text-sm">
            <p className="min-w-0 flex-1 truncate font-medium">{m.name}</p>
            {m.role ? <span className="shrink-0 text-xs text-muted-foreground">{m.role}</span> : null}
            {m.status ? <span className="shrink-0 text-xs">{m.status}</span> : null}
            {m.trailing ? <span className="shrink-0">{m.trailing}</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── LeadsScreen — slot-based screen for caseload lead-management. */
export interface LeadsScreenProps {
  title?: ReactNode;
  filters?: ReactNode;
  /** Main content — apps drop their list / table here. */
  children?: ReactNode;
  emptyState?: ReactNode;
  className?: string;
}
export function LeadsScreen({ title = "Leads", filters, children, emptyState, className }: LeadsScreenProps) {
  return (
    <div className={cnHero("flex h-full flex-col", className)}>
      <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <p className="text-base font-semibold">{title}</p>
        {filters}
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">{emptyState ?? children}</div>
    </div>
  );
}

/* ─── SupportServicesBrowseTile — tile in the support-services browse hub. */
export interface SupportServicesBrowseTileProps {
  title: ReactNode;
  description?: ReactNode;
  iconSlot?: ReactNode;
  onClick?: () => void;
  className?: string;
}
export function SupportServicesBrowseTile({ title, description, iconSlot, onClick, className }: SupportServicesBrowseTileProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cnHero(
        "group flex h-full flex-col items-start gap-3 rounded-2xl border border-border bg-card p-5 text-left shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      {iconSlot ? (
        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-muted text-foreground">
          {iconSlot}
        </span>
      ) : null}
      <p className="text-base font-semibold">{title}</p>
      {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
    </button>
  );
}
