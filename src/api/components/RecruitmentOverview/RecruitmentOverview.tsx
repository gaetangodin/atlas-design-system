/**
 * Recruitment overview dashboard — slot-based shell + 9 reusable tiles.
 *
 *  - `RecruitmentOverviewDashboard` — top-level shell composing tiles.
 *  - `OverviewHeaderStrip`          — title + date-range + actions strip.
 *  - `OverviewStatCards`            — 4-up KPI strip.
 *  - `ActiveJobsCard`               — list of active job postings.
 *  - `CandidatePipelineFunnelCard`  — funnel viz tile.
 *  - `InsightsTipsStrip`            — horizontal tips carousel.
 *  - `JobPerformanceCard`           — per-job-posting metrics card.
 *  - `MessagesCard`                 — quick-glance messages tile.
 *  - `OnboardingChecklistCard`      — onboarding checklist tile.
 *  - `RecentCandidateActivityCard`  — recent candidate activity tile.
 *  - `RecommendedCandidatesCard`    — recommended candidates tile.
 */

import { type ReactNode } from "react";
import {
  Briefcase, MessageSquare, Users, Sparkles, ChevronRight, CheckCircle2, ListChecks, TrendingUp,
} from "lucide-react";
import { Card, CardHeader, CardBody, CardFooter } from "../Card";
import { Avatar } from "../Avatar";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── RecruitmentOverviewDashboard ────────────── */

export interface RecruitmentOverviewDashboardProps {
  /** Top header strip. */
  header?: ReactNode;
  /** Stat-card strip. */
  stats?: ReactNode;
  /** Main column tiles (Active jobs, Pipeline, etc.). */
  main: ReactNode[];
  /** Right-rail tiles (Messages, Activity, Recommended). */
  rail?: ReactNode[];
  /** Optional pre-footer tips strip. */
  tipsStrip?: ReactNode;
  className?: string;
}
export function RecruitmentOverviewDashboard({
  header, stats, main, rail = [], tipsStrip, className,
}: RecruitmentOverviewDashboardProps) {
  return (
    <div className={cnHero("flex w-full flex-col gap-4", className)}>
      {header}
      {stats}
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
      {tipsStrip}
    </div>
  );
}

/* ────────────────────── OverviewHeaderStrip ─────────────────────── */

export interface OverviewHeaderStripProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  /** Date-range picker slot. */
  dateRangeSlot?: ReactNode;
  /** Trailing actions. */
  actions?: ReactNode;
  className?: string;
}
export function OverviewHeaderStrip({ title = "Recruitment overview", subtitle, dateRangeSlot, actions, className }: OverviewHeaderStripProps) {
  return (
    <header className={cnHero("flex flex-wrap items-end justify-between gap-3", className)}>
      <div className="min-w-0">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        {subtitle ? <p className="text-sm text-muted-foreground">{subtitle}</p> : null}
      </div>
      <div className="flex items-center gap-2">
        {dateRangeSlot}
        {actions}
      </div>
    </header>
  );
}

/* ────────────────────── OverviewStatCards ───────────────────────── */

export interface OverviewStatTile {
  id: string;
  label: ReactNode;
  value: ReactNode;
  delta?: ReactNode;
  deltaTone?: "positive" | "negative" | "neutral";
}
export interface OverviewStatCardsProps {
  tiles: OverviewStatTile[];
  className?: string;
}
const DELTA_TONE = {
  positive: "text-emerald-700",
  negative: "text-pink-700",
  neutral: "text-muted-foreground",
} as const;
export function OverviewStatCards({ tiles, className }: OverviewStatCardsProps) {
  return (
    <div className={cnHero("grid grid-cols-2 gap-3 sm:grid-cols-4", className)}>
      {tiles.map((t) => (
        <Card key={t.id} shadow="sm">
          <CardBody className="gap-1">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{t.label}</p>
            <p className="text-xl font-semibold text-foreground">{t.value}</p>
            {t.delta ? <p className={cnHero("text-xs font-medium", DELTA_TONE[t.deltaTone ?? "neutral"])}>{t.delta}</p> : null}
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

/* ────────────────────── ActiveJobsCard ──────────────────────────── */

export interface ActiveJobRow {
  id: string;
  title: ReactNode;
  status?: ReactNode;
  /** Applicant count / sub-line. */
  metric?: ReactNode;
  onClick?: () => void;
}
export interface ActiveJobsCardProps {
  title?: ReactNode;
  rows: ActiveJobRow[];
  /** Footer (e.g. "View all"). */
  footer?: ReactNode;
  emptyState?: ReactNode;
  className?: string;
}
export function ActiveJobsCard({ title = "Active jobs", rows, footer, emptyState, className }: ActiveJobsCardProps) {
  return (
    <Card shadow="sm" className={className}>
      <CardHeader className="flex items-center gap-1.5">
        <Briefcase className="size-3.5 text-muted-foreground" aria-hidden />
        <p className="text-sm font-semibold">{title}</p>
      </CardHeader>
      <CardBody className="gap-1">
        {rows.length === 0 && emptyState ? (
          emptyState
        ) : (
          rows.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={r.onClick}
              className="flex w-full items-center justify-between gap-3 rounded-lg px-2 py-2 text-left hover:bg-muted/40"
            >
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium text-foreground">{r.title}</span>
                {r.metric ? <span className="block truncate text-xs text-muted-foreground">{r.metric}</span> : null}
              </span>
              {r.status ? (
                <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{r.status}</span>
              ) : null}
            </button>
          ))
        )}
      </CardBody>
      {footer ? <CardFooter className="justify-end">{footer}</CardFooter> : null}
    </Card>
  );
}

/* ────────────────────── CandidatePipelineFunnelCard ─────────────── */

export interface PipelineStageDatum {
  id: string;
  label: ReactNode;
  count: number;
  /** Optional colour key. */
  tone?: "lavender" | "emerald" | "canary" | "pink" | "stone";
}
const STAGE_BAR: Record<NonNullable<PipelineStageDatum["tone"]>, string> = {
  lavender: "bg-lavender-500",
  emerald: "bg-emerald-500",
  canary: "bg-canary-500",
  pink: "bg-pink-500",
  stone: "bg-stone-500",
};
export interface CandidatePipelineFunnelCardProps {
  title?: ReactNode;
  stages: PipelineStageDatum[];
  /** Footer slot (e.g. "View funnel report"). */
  footer?: ReactNode;
  className?: string;
}
export function CandidatePipelineFunnelCard({ title = "Candidate pipeline", stages, footer, className }: CandidatePipelineFunnelCardProps) {
  const max = Math.max(1, ...stages.map((s) => s.count));
  return (
    <Card shadow="sm" className={className}>
      <CardHeader className="flex items-center gap-1.5">
        <Users className="size-3.5 text-muted-foreground" aria-hidden />
        <p className="text-sm font-semibold">{title}</p>
      </CardHeader>
      <CardBody className="grid gap-2">
        {stages.map((s) => {
          const pct = Math.round((s.count / max) * 100);
          return (
            <div key={s.id} className="flex items-center gap-3">
              <span className="w-28 shrink-0 truncate text-xs text-muted-foreground">{s.label}</span>
              <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-muted">
                <span
                  className={cnHero("absolute inset-y-0 left-0", STAGE_BAR[s.tone ?? "lavender"])}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="w-10 shrink-0 text-right text-xs font-semibold tabular-nums text-foreground">{s.count}</span>
            </div>
          );
        })}
      </CardBody>
      {footer ? <CardFooter className="justify-end">{footer}</CardFooter> : null}
    </Card>
  );
}

/* ────────────────────── InsightsTipsStrip ───────────────────────── */

export interface InsightTip {
  id: string;
  title: ReactNode;
  body?: ReactNode;
  /** Trailing CTA label. */
  ctaLabel?: ReactNode;
  onCtaClick?: () => void;
}
export interface InsightsTipsStripProps {
  tips: InsightTip[];
  className?: string;
}
export function InsightsTipsStrip({ tips, className }: InsightsTipsStripProps) {
  return (
    <div className={cnHero("flex gap-3 overflow-x-auto pb-1", className)}>
      {tips.map((t) => (
        <Card key={t.id} shadow="sm" className="min-w-[260px] max-w-xs shrink-0 bg-lavender-50">
          <CardBody className="gap-1">
            <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-lavender-800">
              <Sparkles className="size-3" aria-hidden /> Insight
            </p>
            <p className="text-sm font-semibold text-foreground">{t.title}</p>
            {t.body ? <p className="text-xs text-muted-foreground">{t.body}</p> : null}
          </CardBody>
          {t.ctaLabel ? (
            <CardFooter className="justify-end">
              <button
                type="button"
                onClick={t.onCtaClick}
                className="inline-flex items-center gap-0.5 text-xs font-semibold text-lavender-800 hover:text-foreground"
              >
                {t.ctaLabel} <ChevronRight className="size-3" aria-hidden />
              </button>
            </CardFooter>
          ) : null}
        </Card>
      ))}
    </div>
  );
}

/* ────────────────────── JobPerformanceCard ──────────────────────── */

export interface JobPerformanceMetric {
  label: ReactNode;
  value: ReactNode;
}
export interface JobPerformanceCardProps {
  title?: ReactNode;
  jobTitle: ReactNode;
  metrics: JobPerformanceMetric[];
  /** Chart slot — consumer-supplied. */
  chartSlot?: ReactNode;
  footer?: ReactNode;
  className?: string;
}
export function JobPerformanceCard({ title = "Job performance", jobTitle, metrics, chartSlot, footer, className }: JobPerformanceCardProps) {
  return (
    <Card shadow="sm" className={className}>
      <CardHeader className="flex items-center gap-1.5">
        <TrendingUp className="size-3.5 text-muted-foreground" aria-hidden />
        <p className="text-sm font-semibold">{title}</p>
      </CardHeader>
      <CardBody className="gap-3">
        <p className="text-base font-semibold text-foreground">{jobTitle}</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {metrics.map((m, i) => (
            <div key={i}>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{m.label}</p>
              <p className="text-base font-semibold text-foreground">{m.value}</p>
            </div>
          ))}
        </div>
        {chartSlot}
      </CardBody>
      {footer ? <CardFooter>{footer}</CardFooter> : null}
    </Card>
  );
}

/* ────────────────────── MessagesCard ────────────────────────────── */

export interface MessagesCardRow {
  id: string;
  senderName: ReactNode;
  preview?: ReactNode;
  whenLabel?: ReactNode;
  initials?: string;
  avatarUrl?: string;
  unread?: boolean;
  onClick?: () => void;
}
export interface MessagesCardProps {
  title?: ReactNode;
  rows: MessagesCardRow[];
  footer?: ReactNode;
  className?: string;
}
export function MessagesCard({ title = "Messages", rows, footer, className }: MessagesCardProps) {
  return (
    <Card shadow="sm" className={className}>
      <CardHeader className="flex items-center gap-1.5">
        <MessageSquare className="size-3.5 text-muted-foreground" aria-hidden />
        <p className="text-sm font-semibold">{title}</p>
      </CardHeader>
      <CardBody className="grid gap-1">
        {rows.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={r.onClick}
            className="flex w-full items-start gap-3 rounded-lg px-2 py-2 text-left hover:bg-muted/40"
          >
            <Avatar size="sm" src={r.avatarUrl} name={r.initials ?? (typeof r.senderName === "string" ? r.senderName.slice(0, 2) : "??")} />
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2">
                <span className="truncate text-sm font-medium text-foreground">{r.senderName}</span>
                {r.unread ? <span className="size-1.5 rounded-full bg-primary" aria-hidden /> : null}
              </span>
              {r.preview ? <span className="block truncate text-xs text-muted-foreground">{r.preview}</span> : null}
            </span>
            {r.whenLabel ? <span className="shrink-0 text-[10px] text-muted-foreground">{r.whenLabel}</span> : null}
          </button>
        ))}
      </CardBody>
      {footer ? <CardFooter className="justify-end">{footer}</CardFooter> : null}
    </Card>
  );
}

/* ────────────────────── OnboardingChecklistCard ─────────────────── */

export interface OnboardingChecklistItem {
  id: string;
  label: ReactNode;
  done?: boolean;
  /** Optional sub-line. */
  description?: ReactNode;
  onClick?: () => void;
}
export interface OnboardingChecklistCardProps {
  title?: ReactNode;
  items: OnboardingChecklistItem[];
  footer?: ReactNode;
  className?: string;
}
export function OnboardingChecklistCard({ title = "Get set up", items, footer, className }: OnboardingChecklistCardProps) {
  const done = items.filter((i) => i.done).length;
  return (
    <Card shadow="sm" className={className}>
      <CardHeader className="flex items-center justify-between gap-2">
        <p className="inline-flex items-center gap-1.5 text-sm font-semibold">
          <ListChecks className="size-3.5 text-muted-foreground" aria-hidden /> {title}
        </p>
        <p className="text-xs text-muted-foreground">{done}/{items.length}</p>
      </CardHeader>
      <CardBody className="grid gap-1">
        {items.map((it) => (
          <button
            key={it.id}
            type="button"
            onClick={it.onClick}
            className="flex w-full items-start gap-2 rounded-lg px-2 py-2 text-left hover:bg-muted/40"
          >
            <CheckCircle2
              className={cnHero(
                "mt-0.5 size-4 shrink-0",
                it.done ? "text-emerald-700" : "text-muted-foreground/40",
              )}
              aria-hidden
            />
            <span className="min-w-0 flex-1">
              <span className={cnHero("block text-sm", it.done ? "text-muted-foreground line-through" : "font-medium text-foreground")}>{it.label}</span>
              {it.description ? <span className="block text-xs text-muted-foreground">{it.description}</span> : null}
            </span>
          </button>
        ))}
      </CardBody>
      {footer ? <CardFooter>{footer}</CardFooter> : null}
    </Card>
  );
}

/* ────────────────────── RecentCandidateActivityCard ─────────────── */

export interface RecentCandidateActivityRow {
  id: string;
  candidateName: ReactNode;
  action: ReactNode;
  whenLabel?: ReactNode;
  initials?: string;
  avatarUrl?: string;
  onClick?: () => void;
}
export interface RecentCandidateActivityCardProps {
  title?: ReactNode;
  rows: RecentCandidateActivityRow[];
  footer?: ReactNode;
  className?: string;
}
export function RecentCandidateActivityCard({
  title = "Recent activity", rows, footer, className,
}: RecentCandidateActivityCardProps) {
  return (
    <Card shadow="sm" className={className}>
      <CardHeader className="flex items-center gap-1.5">
        <Sparkles className="size-3.5 text-muted-foreground" aria-hidden />
        <p className="text-sm font-semibold">{title}</p>
      </CardHeader>
      <CardBody className="grid gap-1">
        {rows.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={r.onClick}
            className="flex w-full items-start gap-3 rounded-lg px-2 py-2 text-left hover:bg-muted/40"
          >
            <Avatar size="sm" src={r.avatarUrl} name={r.initials ?? (typeof r.candidateName === "string" ? r.candidateName.slice(0, 2) : "??")} />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm">
                <span className="font-medium text-foreground">{r.candidateName}</span>{" "}
                <span className="text-muted-foreground">{r.action}</span>
              </span>
              {r.whenLabel ? <span className="block text-[10px] text-muted-foreground">{r.whenLabel}</span> : null}
            </span>
          </button>
        ))}
      </CardBody>
      {footer ? <CardFooter className="justify-end">{footer}</CardFooter> : null}
    </Card>
  );
}

/* ────────────────────── RecommendedCandidatesCard ───────────────── */

export interface RecommendedCandidate {
  id: string;
  name: ReactNode;
  role?: ReactNode;
  /** Match label (e.g. "94% match"). */
  matchLabel?: ReactNode;
  initials?: string;
  avatarUrl?: string;
  onClick?: () => void;
}
export interface RecommendedCandidatesCardProps {
  title?: ReactNode;
  candidates: RecommendedCandidate[];
  footer?: ReactNode;
  className?: string;
}
export function RecommendedCandidatesCard({
  title = "Recommended candidates", candidates, footer, className,
}: RecommendedCandidatesCardProps) {
  return (
    <Card shadow="sm" className={className}>
      <CardHeader className="flex items-center gap-1.5">
        <Users className="size-3.5 text-muted-foreground" aria-hidden />
        <p className="text-sm font-semibold">{title}</p>
      </CardHeader>
      <CardBody className="grid gap-1">
        {candidates.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={c.onClick}
            className="flex w-full items-start gap-3 rounded-lg px-2 py-2 text-left hover:bg-muted/40"
          >
            <Avatar size="sm" src={c.avatarUrl} name={c.initials ?? (typeof c.name === "string" ? c.name.slice(0, 2) : "??")} />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-foreground">{c.name}</span>
              {c.role ? <span className="block truncate text-xs text-muted-foreground">{c.role}</span> : null}
            </span>
            {c.matchLabel ? (
              <span className="shrink-0 rounded-full bg-spotlight/30 px-2 py-0.5 text-[10px] font-semibold text-foreground">{c.matchLabel}</span>
            ) : null}
          </button>
        ))}
      </CardBody>
      {footer ? <CardFooter className="justify-end">{footer}</CardFooter> : null}
    </Card>
  );
}
