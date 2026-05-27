/**
 * Caseload-domain dashboards — slot-based ports of the large Xeekrs
 * caseload pages (each is ~7–8k lines in the source app). Atlas owns
 * the chrome and layout vocabulary; consumers supply the actual data,
 * tiles, and business logic.
 *
 *  - `EmployerCaseloadDashboard`        — first-tab employer insights
 *                                          dashboard on `CaseloadEmployersRoute`.
 *  - `JobSeekers3CaseloadDashboard`     — analogous shell for the job-seeker
 *                                          caseload dashboard.
 *  - `EmployerNudgeModal`               — caseload-scoped nudge composer
 *                                          (engagement bucket picker + recipient
 *                                          list + subject/body slots).
 *  - `AllJobSeekersCard`                — bento aggregator card.
 *  - `JobSeekerListCard`                — bento list card with "show N more".
 *  - `AssignEmployerTakeoverPanel`      — single-step assign-employer modal.
 *  - `CaseloadSupportAgentsPublishing`  — support-agent publishing strip.
 *  - `CaseworkerCandidateTools`         — inline tools shown when a case
 *                                          worker acts on behalf of an
 *                                          employer.
 */

import { type ReactNode, useState } from "react";
import {
  Sparkles, Mail, ChevronDown, ChevronUp, UserPlus, AlertCircle, Building2,
} from "lucide-react";
import { Card, CardHeader, CardBody, CardFooter } from "../Card";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "../Modal";
import { Avatar } from "../Avatar";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── EmployerCaseloadDashboard ───────────────── */

export interface EmployerEngagementBucket {
  id: string;
  label: ReactNode;
  /** Count of employers in this bucket. */
  count: number;
  /** Optional tone class for the bucket pill. */
  tone?: "emerald" | "canary" | "pink" | "neutral";
  /** Whether the bucket is currently filtered to. */
  active?: boolean;
  onClick?: () => void;
}
const BUCKET_TONE: Record<NonNullable<EmployerEngagementBucket["tone"]>, string> = {
  emerald: "bg-emerald-100 text-emerald-900",
  canary: "bg-canary-100 text-foreground",
  pink: "bg-pink-100 text-pink-900",
  neutral: "bg-muted text-foreground",
};
export interface EmployerCaseloadDashboardProps {
  /** Top header strip (typically `OverviewHeaderStrip`). */
  header?: ReactNode;
  /** Engagement buckets shown as a chip row. */
  buckets?: EmployerEngagementBucket[];
  /** KPI strip. */
  stats?: ReactNode;
  /** Main column tiles (typically `AllEmployersCard` + `EmployerListCard`s). */
  main: ReactNode[];
  /** Right-rail tiles (nudge CTA, recent activity). */
  rail?: ReactNode[];
  /** Hiring success chart slot (raw SVG / consumer-supplied chart). */
  chartSlot?: ReactNode;
  className?: string;
}
export function EmployerCaseloadDashboard({
  header, buckets = [], stats, main, rail = [], chartSlot, className,
}: EmployerCaseloadDashboardProps) {
  return (
    <div className={cnHero("flex w-full flex-col gap-4", className)}>
      {header}
      {buckets.length > 0 ? (
        <div className="flex flex-wrap items-center gap-1.5">
          {buckets.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={b.onClick}
              className={cnHero(
                "rounded-full border px-3 py-1 text-xs font-medium transition",
                b.active
                  ? "border-primary bg-primary text-primary-foreground"
                  : cnHero("border-border", BUCKET_TONE[b.tone ?? "neutral"], "hover:opacity-80"),
              )}
            >
              {b.label}
              <span className="ml-1 inline-block rounded-full bg-foreground/10 px-1.5 py-0.5 text-[10px]">
                {b.count}
              </span>
            </button>
          ))}
        </div>
      ) : null}
      {stats}
      {chartSlot ? (
        <Card shadow="sm">
          <CardHeader>
            <p className="text-sm font-semibold">Hiring success</p>
          </CardHeader>
          <CardBody>{chartSlot}</CardBody>
        </Card>
      ) : null}
      <div className={cnHero("grid gap-4", rail.length > 0 ? "lg:grid-cols-[1fr_340px]" : "")}>
        <div className="grid min-w-0 gap-4">
          {main.map((t, i) => (
            <div key={i}>{t}</div>
          ))}
        </div>
        {rail.length > 0 ? (
          <aside className="flex flex-col gap-4">
            {rail.map((t, i) => (
              <div key={i}>{t}</div>
            ))}
          </aside>
        ) : null}
      </div>
    </div>
  );
}

/* ────────────────────── JobSeekers3CaseloadDashboard ────────────── */

/**
 * Job-seeker caseload dashboard. Structurally identical to
 * `EmployerCaseloadDashboard` (engagement buckets + stats + main / rail
 * tiles) — exposed under a different name so the Xeekrs file naming
 * carries through.
 */
export const JobSeekers3CaseloadDashboard = EmployerCaseloadDashboard;
export type JobSeekers3CaseloadDashboardProps = EmployerCaseloadDashboardProps;

/* ────────────────────── EmployerNudgeModal ──────────────────────── */

export interface NudgeBucket {
  id: string;
  label: ReactNode;
  /** Count of recipients in this bucket. */
  count: number;
  /** Optional tone. */
  tone?: EmployerEngagementBucket["tone"];
}
export interface EmployerNudgeModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title?: ReactNode;
  /** Engagement buckets the user picks one of (e.g. Highly Engaged / At Risk / Needs Follow-Up). */
  buckets: NudgeBucket[];
  /** Currently selected bucket id (controlled). */
  selectedBucketId?: string;
  onBucketChange?: (id: string) => void;
  /** Subject input slot (consumer-supplied `Input`). */
  subjectSlot: ReactNode;
  /** Body input slot (consumer-supplied `Textarea`). */
  bodySlot: ReactNode;
  /** Preselected recipient summary (e.g. "12 employers will be notified"). */
  recipientSummary?: ReactNode;
  canSend?: boolean;
  sendLabel?: ReactNode;
  onSend?: () => void;
  cancelLabel?: ReactNode;
  className?: string;
}
export function EmployerNudgeModal({
  isOpen, onOpenChange, title = "Send nudge",
  buckets, selectedBucketId, onBucketChange,
  subjectSlot, bodySlot, recipientSummary,
  canSend = true, sendLabel = "Send", onSend, cancelLabel = "Cancel", className,
}: EmployerNudgeModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" size="lg">
      <ModalContent className={className}>
        <ModalHeader className="flex flex-col gap-1">
          <p className="inline-flex items-center gap-1.5 text-sm font-semibold">
            <Mail className="size-4 text-muted-foreground" aria-hidden /> {title}
          </p>
          {recipientSummary ? <p className="text-xs text-muted-foreground">{recipientSummary}</p> : null}
        </ModalHeader>
        <ModalBody className="grid gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {buckets.map((b) => {
              const selected = b.id === selectedBucketId;
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => onBucketChange?.(b.id)}
                  className={cnHero(
                    "rounded-full border px-3 py-1 text-xs font-medium transition",
                    selected
                      ? "border-primary bg-primary text-primary-foreground"
                      : cnHero("border-border", BUCKET_TONE[b.tone ?? "neutral"], "hover:opacity-80"),
                  )}
                >
                  {b.label}
                  <span className={cnHero("ml-1 inline-block rounded-full px-1.5 py-0.5 text-[10px]", selected ? "bg-primary-foreground/20" : "bg-foreground/10")}>
                    {b.count}
                  </span>
                </button>
              );
            })}
          </div>
          {subjectSlot}
          {bodySlot}
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onSend}
            disabled={!canSend}
            className={cnHero(
              "rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition",
              !canSend && "opacity-50",
            )}
          >
            {sendLabel}
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

/* ────────────────────── AllJobSeekersCard / JobSeekerListCard ───── */

export interface AllJobSeekersCardProps {
  title?: ReactNode;
  /** Sub-line e.g. "247 across 4 cohorts". */
  metric?: ReactNode;
  /** Search input slot. */
  searchSlot?: ReactNode;
  /** Trailing action (e.g. "Add job seeker"). */
  trailing?: ReactNode;
  /** Bento grid / table of job seekers. */
  children: ReactNode;
  /** Footer (e.g. "Show 24 more"). */
  footer?: ReactNode;
  className?: string;
}
/**
 * Bento-style aggregator card for the job-seekers caseload. Same
 * `rounded-[32px]` chrome with hover-to-white affordance as the
 * employer counterpart.
 */
export function AllJobSeekersCard({
  title = "All job seekers", metric, searchSlot, trailing, children, footer, className,
}: AllJobSeekersCardProps) {
  return (
    <section
      className={cnHero(
        "rounded-[32px] border border-border bg-muted/30 p-4 transition hover:bg-card",
        className,
      )}
    >
      <header className="flex flex-wrap items-center justify-between gap-3 pb-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold">{title}</p>
          {metric ? <p className="text-xs text-muted-foreground">{metric}</p> : null}
        </div>
        <div className="flex items-center gap-2">
          {searchSlot ? <div className="w-56">{searchSlot}</div> : null}
          {trailing}
        </div>
      </header>
      <div>{children}</div>
      {footer ? <footer className="border-t border-border pt-3 text-center text-xs font-semibold text-muted-foreground">{footer}</footer> : null}
    </section>
  );
}

export interface JobSeekerListCardRow {
  id: string;
  name: ReactNode;
  detail?: ReactNode;
  initials?: string;
  avatarUrl?: string;
  /** Trailing area — status pill / actions. */
  trailing?: ReactNode;
  onClick?: () => void;
}
export interface JobSeekerListCardProps {
  title?: ReactNode;
  rows: JobSeekerListCardRow[];
  /** Optional "show N more" expansion threshold. */
  collapseThreshold?: number;
  initialExpanded?: boolean;
  emptyState?: ReactNode;
  className?: string;
}
export function JobSeekerListCard({
  title, rows, collapseThreshold = 5, initialExpanded = false, emptyState, className,
}: JobSeekerListCardProps) {
  const [expanded, setExpanded] = useState(initialExpanded);
  const visibleRows = expanded ? rows : rows.slice(0, collapseThreshold);
  const remainder = rows.length - visibleRows.length;
  if (rows.length === 0 && emptyState) return <>{emptyState}</>;
  return (
    <Card shadow="sm" className={className}>
      {title ? (
        <CardHeader>
          <p className="text-sm font-semibold">{title}</p>
        </CardHeader>
      ) : null}
      <CardBody className="grid gap-1">
        {visibleRows.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={r.onClick}
            className="flex w-full items-start gap-3 rounded-lg px-2 py-2 text-left hover:bg-muted/40"
          >
            <Avatar size="sm" src={r.avatarUrl} name={r.initials ?? (typeof r.name === "string" ? r.name.slice(0, 2) : "??")} />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-foreground">{r.name}</span>
              {r.detail ? <span className="block truncate text-xs text-muted-foreground">{r.detail}</span> : null}
            </span>
            {r.trailing ? <span className="shrink-0">{r.trailing}</span> : null}
          </button>
        ))}
      </CardBody>
      {rows.length > collapseThreshold ? (
        <CardFooter className="justify-center">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-primary"
          >
            {expanded ? (
              <>Show less <ChevronUp className="size-3" aria-hidden /></>
            ) : (
              <>Show {remainder} more <ChevronDown className="size-3" aria-hidden /></>
            )}
          </button>
        </CardFooter>
      ) : null}
    </Card>
  );
}

/* ────────────────────── AssignEmployerTakeoverPanel ─────────────── */

export interface AssignEmployerTakeoverPanelProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  /** Identity card slot for the employer being assigned. */
  identitySlot: ReactNode;
  /** Case-assignment fields slot (manager picker, pipeline stage, next action). */
  fieldsSlot: ReactNode;
  /** Header title. */
  title?: ReactNode;
  /** Sub-line. */
  subtitle?: ReactNode;
  canConfirm?: boolean;
  confirmLabel?: ReactNode;
  onConfirm?: () => void;
  cancelLabel?: ReactNode;
  className?: string;
}
/**
 * Single-step modal mirroring the `ShareOpportunityDialog` chrome —
 * header + identity card + form fields + footer. Routes an existing
 * registered employer onto a caseworker's caseload.
 */
export function AssignEmployerTakeoverPanel({
  isOpen, onOpenChange, identitySlot, fieldsSlot,
  title = "Assign employer", subtitle,
  canConfirm = true, confirmLabel = "Assign", onConfirm,
  cancelLabel = "Cancel", className,
}: AssignEmployerTakeoverPanelProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" size="lg">
      <ModalContent className={className}>
        <ModalHeader className="flex flex-col gap-1">
          <p className="inline-flex items-center gap-1.5 text-sm font-semibold">
            <UserPlus className="size-4 text-muted-foreground" aria-hidden /> {title}
          </p>
          {subtitle ? <p className="text-xs text-muted-foreground">{subtitle}</p> : null}
        </ModalHeader>
        <ModalBody className="grid gap-3">
          {identitySlot}
          {fieldsSlot}
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={!canConfirm}
            className={cnHero(
              "rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition",
              !canConfirm && "opacity-50",
            )}
          >
            {confirmLabel}
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

/* ────────────────────── CaseloadSupportAgentsPublishing ─────────── */

export interface SupportAgentRow {
  id: string;
  name: ReactNode;
  role?: ReactNode;
  initials?: string;
  avatarUrl?: string;
  /** Publishing scope label (e.g. "Public · Marketplace"). */
  scope?: ReactNode;
  /** Toggle slot for "publishing on / off". */
  toggleSlot?: ReactNode;
}
export interface CaseloadSupportAgentsPublishingProps {
  title?: ReactNode;
  description?: ReactNode;
  agents: SupportAgentRow[];
  /** Optional trailing action ("Add agent"). */
  trailing?: ReactNode;
  emptyState?: ReactNode;
  className?: string;
}
export function CaseloadSupportAgentsPublishing({
  title = "Support agents publishing", description, agents, trailing, emptyState, className,
}: CaseloadSupportAgentsPublishingProps) {
  if (agents.length === 0 && emptyState) return <>{emptyState}</>;
  return (
    <Card shadow="sm" className={className}>
      <CardHeader className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-1.5 text-sm font-semibold">
            <Sparkles className="size-3.5 text-muted-foreground" aria-hidden /> {title}
          </p>
          {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
        </div>
        {trailing ? <div className="shrink-0">{trailing}</div> : null}
      </CardHeader>
      <CardBody className="grid gap-2">
        {agents.map((a) => (
          <div key={a.id} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
            <Avatar size="sm" src={a.avatarUrl} name={a.initials ?? (typeof a.name === "string" ? a.name.slice(0, 2) : "??")} />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-foreground">{a.name}</p>
              <p className="text-xs text-muted-foreground">
                {a.role}
                {a.role && a.scope ? <span aria-hidden> · </span> : null}
                {a.scope}
              </p>
            </div>
            {a.toggleSlot ? <div className="shrink-0">{a.toggleSlot}</div> : null}
          </div>
        ))}
      </CardBody>
    </Card>
  );
}

/* ────────────────────── CaseworkerCandidateTools ────────────────── */

export interface ActingOnBehalfOfContext {
  /** The employer the caseworker is acting on behalf of. */
  employerName: ReactNode;
  /** Optional identity initials. */
  initials?: string;
  /** Optional logo URL. */
  logoUrl?: string;
}
export interface CaseworkerCandidateToolsProps {
  /** If undefined, the tools render nothing (consistent with Xeekrs). */
  actingOnBehalfOf?: ActingOnBehalfOfContext;
  /** Inline action set — typically "Save to shortlist", "Send intro", "Add note". */
  actions: ReactNode;
  className?: string;
}
/**
 * Inline caseworker action strip rendered on candidate / matching-talent
 * cards when the case manager is acting on behalf of a caseload employer.
 * Renders `null` when there's no acting-on-behalf-of context.
 */
export function CaseworkerCandidateTools({ actingOnBehalfOf, actions, className }: CaseworkerCandidateToolsProps) {
  if (!actingOnBehalfOf) return null;
  return (
    <div
      role="region"
      aria-label="Caseworker tools"
      className={cnHero(
        "flex items-center gap-2 rounded-xl border border-dashed border-primary/40 bg-primary/5 px-3 py-2 text-xs",
        className,
      )}
    >
      <AlertCircle className="size-3.5 shrink-0 text-primary" aria-hidden />
      <span className="inline-flex items-center gap-1.5 text-foreground">
        Acting for{" "}
        <span className="inline-flex items-center gap-1 font-semibold">
          {actingOnBehalfOf.logoUrl ? (
            <img src={actingOnBehalfOf.logoUrl} alt="" className="size-4 rounded" />
          ) : (
            <Building2 className="size-3 text-muted-foreground" aria-hidden />
          )}
          {actingOnBehalfOf.employerName}
        </span>
      </span>
      <div className="ml-auto flex items-center gap-1.5">{actions}</div>
    </div>
  );
}
