/**
 * Academy-domain composition templates.
 *
 *  - `AcademyMyLearningCards`   — grid of in-progress learning cards.
 *  - `AcademyTrainingOfferCta`  — banner-style training-offer prompt.
 *  - `CoachHubPanel`            — coaching landing panel composition.
 *  - `CareerHubCard`            — single Career Hub tile.
 *  - `CareerHubProgress`        — progress strip for the Career Hub.
 *  - `CareerHubSidebar`         — sidebar nav for the Career Hub.
 *  - `HomeSearch`               — large home-page search input.
 */

import { type ReactNode } from "react";
import { GraduationCap, Search, Sparkles } from "lucide-react";
import { Card, CardBody, CardFooter, CardHeader } from "../Card";
import { Progress } from "../Progress";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── AcademyMyLearningCards ──────────────────── */

export interface MyLearningEntry {
  id: string;
  title: string;
  meta?: ReactNode;
  /** 0–100 — progress through the course. */
  progress?: number;
  imageUrl?: string;
  onResume?: () => void;
}
export interface AcademyMyLearningCardsProps {
  entries: MyLearningEntry[];
  className?: string;
}
export function AcademyMyLearningCards({ entries, className }: AcademyMyLearningCardsProps) {
  return (
    <div className={cnHero("grid gap-3 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {entries.map((e) => (
        <Card key={e.id} isPressable onClick={e.onResume}>
          {e.imageUrl ? (
            <div
              className="h-32 w-full bg-muted"
              style={{ backgroundImage: `url(${e.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
              aria-hidden
            />
          ) : null}
          <CardBody className="space-y-2">
            <p className="text-sm font-semibold">{e.title}</p>
            {e.meta ? <p className="text-xs text-muted-foreground">{e.meta}</p> : null}
            {typeof e.progress === "number" ? (
              <div className="space-y-1">
                <Progress aria-label="Progress" value={e.progress} size="sm" />
                <p className="text-[10px] text-muted-foreground">{e.progress}% complete</p>
              </div>
            ) : null}
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

/* ────────────────────── AcademyTrainingOfferCta ─────────────────── */

export interface AcademyTrainingOfferCtaProps {
  title: ReactNode;
  body?: ReactNode;
  cta?: ReactNode;
  className?: string;
}
export function AcademyTrainingOfferCta({ title, body, cta, className }: AcademyTrainingOfferCtaProps) {
  return (
    <div
      className={cnHero(
        "flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-lavender-200/70 bg-lavender-50/60 px-5 py-4",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex size-9 items-center justify-center rounded-full bg-lavender-500/30 text-lavender-800" aria-hidden>
          <Sparkles className="size-4" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">{title}</p>
          {body ? <p className="mt-0.5 text-xs text-muted-foreground">{body}</p> : null}
        </div>
      </div>
      {cta ? <div className="shrink-0">{cta}</div> : null}
    </div>
  );
}

/* ────────────────────── CoachHubPanel ───────────────────────────── */

export interface CoachHubPanelProps {
  title?: ReactNode;
  description?: ReactNode;
  /** Coach roster slot. */
  coachListSlot?: ReactNode;
  /** Footer action slot. */
  actions?: ReactNode;
  className?: string;
}
export function CoachHubPanel({ title = "Your coaches", description, coachListSlot, actions, className }: CoachHubPanelProps) {
  return (
    <Card className={cnHero("max-w-3xl", className)}>
      <CardHeader className="flex flex-col gap-0.5">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          <GraduationCap className="size-3.5" aria-hidden /> Coach hub
        </span>
        <p className="text-base font-semibold">{title}</p>
        {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      </CardHeader>
      <CardBody>{coachListSlot}</CardBody>
      {actions ? <CardFooter className="justify-end">{actions}</CardFooter> : null}
    </Card>
  );
}

/* ────────────────────── CareerHubCard ───────────────────────────── */

export interface CareerHubCardProps {
  title: ReactNode;
  description?: ReactNode;
  /** Top-right icon / badge. */
  trailing?: ReactNode;
  cta?: ReactNode;
  onClick?: () => void;
  className?: string;
}
export function CareerHubCard({ title, description, trailing, cta, onClick, className }: CareerHubCardProps) {
  return (
    <Card isPressable={Boolean(onClick)} onClick={onClick} className={className}>
      <CardHeader className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{title}</p>
          {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
        </div>
        {trailing ? <div className="shrink-0">{trailing}</div> : null}
      </CardHeader>
      {cta ? <CardFooter>{cta}</CardFooter> : null}
    </Card>
  );
}

/* ────────────────────── CareerHubProgress ───────────────────────── */

export interface CareerHubProgressMilestone {
  id: string;
  label: string;
  state: "done" | "active" | "pending";
}
export interface CareerHubProgressProps {
  milestones: CareerHubProgressMilestone[];
  className?: string;
}
export function CareerHubProgress({ milestones, className }: CareerHubProgressProps) {
  return (
    <ol className={cnHero("flex items-center gap-2 overflow-x-auto", className)}>
      {milestones.map((m, idx) => {
        const isLast = idx === milestones.length - 1;
        return (
          <li key={m.id} className="flex shrink-0 items-center gap-2">
            <span
              className={cnHero(
                "inline-flex size-7 items-center justify-center rounded-full text-xs font-semibold",
                m.state === "done" ? "bg-emerald-500 text-white" :
                m.state === "active" ? "border-2 border-emerald-500 bg-card text-emerald-600" :
                "border border-border bg-card text-muted-foreground",
              )}
            >
              {idx + 1}
            </span>
            <span className="text-xs font-medium text-foreground">{m.label}</span>
            {!isLast ? <span className="h-px w-8 bg-border" aria-hidden /> : null}
          </li>
        );
      })}
    </ol>
  );
}

/* ────────────────────── CareerHubSidebar ────────────────────────── */

export interface CareerHubSidebarItem {
  id: string;
  label: string;
  icon?: ReactNode;
  badge?: ReactNode;
}
export interface CareerHubSidebarProps {
  items: CareerHubSidebarItem[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
}
export function CareerHubSidebar({ items, activeId, onSelect, className }: CareerHubSidebarProps) {
  return (
    <aside className={cnHero("space-y-1 rounded-2xl border border-border bg-card p-3", className)}>
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            aria-current={isActive ? "page" : undefined}
            className={cnHero(
              "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
              isActive ? "bg-muted text-foreground font-semibold" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
            )}
          >
            {item.icon ? <span className="size-4">{item.icon}</span> : null}
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge}
          </button>
        );
      })}
    </aside>
  );
}

/* ────────────────────── HomeSearch ──────────────────────────────── */

export interface HomeSearchProps {
  /** Search input slot — app wires the query + submit. */
  searchInput: ReactNode;
  /** Subtitle / supporting copy. */
  caption?: ReactNode;
  /** Trending / suggestion chips. */
  chips?: ReactNode;
  className?: string;
}
export function HomeSearch({ searchInput, caption, chips, className }: HomeSearchProps) {
  return (
    <div className={cnHero("mx-auto max-w-2xl space-y-3 text-center", className)}>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden />
        <div className="rounded-full">{searchInput}</div>
      </div>
      {caption ? <p className="text-sm text-muted-foreground">{caption}</p> : null}
      {chips ? <div className="flex flex-wrap justify-center gap-1.5">{chips}</div> : null}
    </div>
  );
}
