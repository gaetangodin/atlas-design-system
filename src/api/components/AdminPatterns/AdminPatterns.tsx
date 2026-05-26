/**
 * Admin / employer-hub domain compositions.
 *
 *  - `AdminConfigPanel`           — header + grouped config sections.
 *  - `CoachboardTasksTab`         — coaching workboard task list.
 *  - `EmployerHubBusinessSwitcher` — multi-business picker for employers.
 *  - `EmployerHubDashboardContent`— two-column employer overview shell.
 *  - `SiteSwitcherModal`          — modal listing user's site / org access.
 *
 * All are SLOT-BASED. Atlas does not bring in app-specific copy or data.
 */

import { type ReactNode } from "react";
import { Building2, Check, Shield } from "lucide-react";
import { Card, CardBody, CardHeader, CardFooter } from "../Card";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "../Modal";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── AdminConfigPanel ────────────────────────── */

export interface AdminConfigSection {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  body: ReactNode;
  /** Optional trailing area in the section header (e.g. "Edit" button). */
  trailing?: ReactNode;
}
export interface AdminConfigPanelProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  sections: AdminConfigSection[];
  footer?: ReactNode;
  className?: string;
}
export function AdminConfigPanel({ title = "Configuration", subtitle, sections, footer, className }: AdminConfigPanelProps) {
  return (
    <div className={cnHero("flex w-full flex-col gap-4", className)}>
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          <Shield className="-mt-0.5 mr-1 inline size-3.5" aria-hidden /> Admin
        </p>
        <h2 className="mt-0.5 text-lg font-semibold text-foreground">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
      </header>
      <div className="grid gap-3">
        {sections.map((s) => (
          <Card key={s.id} shadow="sm">
            <CardHeader className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{s.title}</p>
                {s.description ? <p className="mt-0.5 text-xs text-muted-foreground">{s.description}</p> : null}
              </div>
              {s.trailing ? <div className="shrink-0">{s.trailing}</div> : null}
            </CardHeader>
            <CardBody>{s.body}</CardBody>
          </Card>
        ))}
      </div>
      {footer ? <footer className="pt-2">{footer}</footer> : null}
    </div>
  );
}

/* ────────────────────── CoachboardTasksTab ──────────────────────── */

export interface CoachboardTaskRow {
  id: string;
  learnerName: ReactNode;
  taskTitle: ReactNode;
  dueLabel?: ReactNode;
  status?: ReactNode;
  /** Trailing actions cell. */
  actions?: ReactNode;
}
export interface CoachboardTasksTabProps {
  rows: CoachboardTaskRow[];
  emptyState?: ReactNode;
  className?: string;
}
export function CoachboardTasksTab({ rows, emptyState, className }: CoachboardTasksTabProps) {
  if (rows.length === 0 && emptyState) return <>{emptyState}</>;
  return (
    <div className={cnHero("overflow-hidden rounded-xl border border-border bg-card", className)}>
      <table className="w-full text-sm">
        <thead className="bg-muted/30 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          <tr>
            <th className="px-4 py-2 text-left">Learner</th>
            <th className="px-4 py-2 text-left">Task</th>
            <th className="px-4 py-2 text-left">Due</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r) => (
            <tr key={r.id} className="hover:bg-muted/40">
              <td className="px-4 py-2">{r.learnerName}</td>
              <td className="px-4 py-2">{r.taskTitle}</td>
              <td className="px-4 py-2 text-muted-foreground">{r.dueLabel}</td>
              <td className="px-4 py-2">{r.status}</td>
              <td className="px-4 py-2 text-right">{r.actions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ────────────────────── EmployerHubBusinessSwitcher ─────────────── */

export interface EmployerHubBusiness {
  id: string;
  name: ReactNode;
  /** Sub-line (industry, location, members, etc). */
  detail?: ReactNode;
  initials?: string;
  /** Whether this business is currently selected. */
  active?: boolean;
  onSelect?: () => void;
}
export interface EmployerHubBusinessSwitcherProps {
  businesses: EmployerHubBusiness[];
  title?: ReactNode;
  description?: ReactNode;
  /** Trailing slot, typically a "+ Create" action. */
  trailing?: ReactNode;
  emptyState?: ReactNode;
  className?: string;
}
export function EmployerHubBusinessSwitcher({
  businesses, title = "Your businesses", description, trailing, emptyState, className,
}: EmployerHubBusinessSwitcherProps) {
  if (businesses.length === 0 && emptyState) return <>{emptyState}</>;
  return (
    <Card shadow="sm" className={cnHero("", className)}>
      <CardHeader className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{title}</p>
          {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
        </div>
        {trailing ? <div className="shrink-0">{trailing}</div> : null}
      </CardHeader>
      <CardBody className="grid gap-2">
        {businesses.map((b) => (
          <button
            key={b.id}
            type="button"
            onClick={b.onSelect}
            className={cnHero(
              "flex items-center gap-3 rounded-xl border px-3 py-2 text-left transition",
              b.active
                ? "border-primary bg-primary/5"
                : "border-border bg-card hover:bg-muted/40",
            )}
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-muted text-xs font-semibold uppercase text-foreground">
              {b.initials ?? <Building2 className="size-4 text-muted-foreground" aria-hidden />}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-foreground">{b.name}</span>
              {b.detail ? <span className="block truncate text-xs text-muted-foreground">{b.detail}</span> : null}
            </span>
            {b.active ? <Check className="size-4 text-primary" aria-hidden /> : null}
          </button>
        ))}
      </CardBody>
    </Card>
  );
}

/* ────────────────────── EmployerHubDashboardContent ─────────────── */

export interface EmployerHubDashboardContentProps {
  /** Top KPI strip. */
  kpis?: ReactNode;
  /** Main column body — typically posting list, recent applicants, etc. */
  main: ReactNode;
  /** Right rail — typically business switcher, pending approvals. */
  rightRail?: ReactNode;
  className?: string;
}
export function EmployerHubDashboardContent({ kpis, main, rightRail, className }: EmployerHubDashboardContentProps) {
  return (
    <div className={cnHero("flex w-full flex-col gap-4", className)}>
      {kpis ? <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{kpis}</div> : null}
      <div className={cnHero("grid gap-4", rightRail ? "lg:grid-cols-[1fr_320px]" : "")}>
        <div className="min-w-0">{main}</div>
        {rightRail ? <aside className="flex flex-col gap-3">{rightRail}</aside> : null}
      </div>
    </div>
  );
}

/* ────────────────────── SiteSwitcherModal ───────────────────────── */

export interface SiteEntry {
  id: string;
  name: ReactNode;
  /** Optional secondary line (role, location, etc). */
  detail?: ReactNode;
  initials?: string;
  active?: boolean;
  onSelect?: () => void;
}
export interface SiteSwitcherModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  sites: SiteEntry[];
  title?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  className?: string;
}
export function SiteSwitcherModal({
  isOpen, onOpenChange, sites, title = "Switch site", description, footer, className,
}: SiteSwitcherModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" size="md">
      <ModalContent className={className}>
        <ModalHeader className="flex flex-col gap-1">
          <p className="text-sm font-semibold">{title}</p>
          {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
        </ModalHeader>
        <ModalBody>
          <ul className="grid gap-2">
            {sites.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={s.onSelect}
                  className={cnHero(
                    "flex w-full items-center gap-3 rounded-xl border px-3 py-2 text-left transition",
                    s.active ? "border-primary bg-primary/5" : "border-border hover:bg-muted/40",
                  )}
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-muted text-xs font-semibold uppercase text-foreground">
                    {s.initials ?? <Building2 className="size-4 text-muted-foreground" aria-hidden />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-foreground">{s.name}</span>
                    {s.detail ? <span className="block truncate text-xs text-muted-foreground">{s.detail}</span> : null}
                  </span>
                  {s.active ? <Check className="size-4 text-primary" aria-hidden /> : null}
                </button>
              </li>
            ))}
          </ul>
        </ModalBody>
        {footer ? <ModalFooter>{footer}</ModalFooter> : null}
      </ModalContent>
    </Modal>
  );
}

/* ────────────────────── ProjectOverviewShell ────────────────────── */
/**
 * `ProjectOverviewShell` — slot-based project overview composition.
 *
 * Atlas owns the layout; the consumer supplies copy and content.
 */
export interface ProjectOverviewShellProps {
  hero?: ReactNode;
  kpis?: ReactNode;
  main: ReactNode;
  rightRail?: ReactNode;
  className?: string;
}
export function ProjectOverviewShell({ hero, kpis, main, rightRail, className }: ProjectOverviewShellProps) {
  return (
    <div className={cnHero("flex w-full flex-col gap-4", className)}>
      {hero}
      {kpis ? <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{kpis}</div> : null}
      <div className={cnHero("grid gap-4", rightRail ? "lg:grid-cols-[1fr_320px]" : "")}>
        <div className="min-w-0">{main}</div>
        {rightRail ? <aside className="flex flex-col gap-3">{rightRail}</aside> : null}
      </div>
    </div>
  );
}

/* ────────────────────── ProjectFilesShell ───────────────────────── */

export interface ProjectFileRow {
  id: string;
  name: ReactNode;
  kind?: ReactNode;
  size?: ReactNode;
  modifiedLabel?: ReactNode;
  owner?: ReactNode;
  actions?: ReactNode;
}
export interface ProjectFilesShellProps {
  files: ProjectFileRow[];
  toolbar?: ReactNode;
  emptyState?: ReactNode;
  className?: string;
}
export function ProjectFilesShell({ files, toolbar, emptyState, className }: ProjectFilesShellProps) {
  if (files.length === 0 && emptyState) return <>{emptyState}</>;
  return (
    <div className={cnHero("flex w-full flex-col gap-3", className)}>
      {toolbar ? <div className="flex items-center justify-between gap-3">{toolbar}</div> : null}
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/30 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Kind</th>
              <th className="px-4 py-2 text-left">Size</th>
              <th className="px-4 py-2 text-left">Modified</th>
              <th className="px-4 py-2 text-left">Owner</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {files.map((f) => (
              <tr key={f.id} className="hover:bg-muted/40">
                <td className="px-4 py-2 font-medium">{f.name}</td>
                <td className="px-4 py-2 text-muted-foreground">{f.kind}</td>
                <td className="px-4 py-2 text-muted-foreground">{f.size}</td>
                <td className="px-4 py-2 text-muted-foreground">{f.modifiedLabel}</td>
                <td className="px-4 py-2 text-muted-foreground">{f.owner}</td>
                <td className="px-4 py-2 text-right">{f.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ────────────────────── ReportsViewShell ────────────────────────── */

export interface ReportTile {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  /** Render a chart/visualization here. */
  body: ReactNode;
  footer?: ReactNode;
}
export interface ReportsViewShellProps {
  /** Filters / toolbar slot above the grid. */
  toolbar?: ReactNode;
  tiles: ReportTile[];
  emptyState?: ReactNode;
  className?: string;
}
export function ReportsViewShell({ toolbar, tiles, emptyState, className }: ReportsViewShellProps) {
  if (tiles.length === 0 && emptyState) return <>{emptyState}</>;
  return (
    <div className={cnHero("flex w-full flex-col gap-4", className)}>
      {toolbar ? <div className="flex flex-wrap items-center justify-between gap-3">{toolbar}</div> : null}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((t) => (
          <Card key={t.id} shadow="sm">
            <CardHeader>
              <p className="text-sm font-semibold">{t.title}</p>
              {t.description ? <p className="text-xs text-muted-foreground">{t.description}</p> : null}
            </CardHeader>
            <CardBody>{t.body}</CardBody>
            {t.footer ? <CardFooter>{t.footer}</CardFooter> : null}
          </Card>
        ))}
      </div>
    </div>
  );
}
