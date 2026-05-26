/**
 * Recruitment-domain composition extras — patterns that didn't fit
 * the v0.2/v0.3 batches.
 *
 *  - `RecruitmentAreaTabs`                  — tab strip variant.
 *  - `RecruitmentWorkspaceDestinationCards` — top-of-page destination cards.
 *  - `TalentSupplyRadar`                    — slot for the recruitment radar viz.
 *  - `TasksTable` / `TaskDrilldownPanel`     — task list + drilldown.
 *  - `ProjectDrilldownPanel`                — project drilldown panel.
 *  - `ProjectProgramChannelPanel`           — channel panel inside projects.
 *  - `WorkAreaSubnav` (+ `Trailing`)        — work-area-specific subnav.
 *  - `WorkBusinessSiteEmptyState`           — empty state for missing sites.
 *  - `WorkDashboard`                        — work-hub dashboard shell.
 *  - `SkillGapBridgingItem`                 — single skill-gap row.
 *  - `PerformanceExecutiveSummarySuggestions` — exec-summary panel.
 *  - `ReferralsHubMark` / `XeekrsHeaderLogo` — brand marks.
 *  - `JobPostingCreationFlow` / `JobPostingForm` / `JobPostingSettingsDashboard`
 *    `JobPostingQualityTab` / `JobPostingDisclosurePublicPreview`
 *    `EmployerPendingApprovalBar` / `EmployerOnboardingLocationStep`
 *    — posting/employer slot shells.
 *  - `ApplicationStatusModal`               — slot variant of ApplicationModal.
 *
 * All slot-based — apps wire the data + behaviour.
 */

import { useState, type ReactNode } from "react";
import { Activity, Radar, Sparkles } from "lucide-react";
import { Card, CardBody, CardHeader } from "../Card";
import { Modal, ModalBody, ModalContent, ModalHeader, ModalFooter } from "../Modal";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { ResponsiveTabsList, type ResponsiveTab } from "../MiscPrimitives";
import { ProfileSectionCard, WorkPageShell } from "../PageHelpers";
import { DisclosureBar } from "../DisclosureBar";
import { AlertBar } from "../AlertBar";
import { BrandLogo } from "../BrandLogo";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── RecruitmentAreaTabs ─────────────────────── */
export interface RecruitmentAreaTabsProps {
  tabs: ResponsiveTab[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
}
export function RecruitmentAreaTabs(props: RecruitmentAreaTabsProps) {
  return <ResponsiveTabsList {...props} />;
}

/* ────────────────────── RecruitmentWorkspaceDestinationCards ────── */
export interface DestinationCard {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
}
export interface RecruitmentWorkspaceDestinationCardsProps {
  cards: DestinationCard[];
  className?: string;
}
export function RecruitmentWorkspaceDestinationCards({ cards, className }: RecruitmentWorkspaceDestinationCardsProps) {
  return (
    <div className={cnHero("grid gap-3 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {cards.map((c) => (
        <Card key={c.id} isPressable onClick={c.onClick}>
          <CardBody className="flex flex-col gap-2">
            {c.icon ? <span className="inline-flex size-9 items-center justify-center rounded-xl bg-muted">{c.icon}</span> : null}
            <p className="text-sm font-semibold">{c.title}</p>
            {c.description ? <p className="text-xs text-muted-foreground">{c.description}</p> : null}
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

/* ────────────────────── TalentSupplyRadar ───────────────────────── */
export interface TalentSupplyRadarProps {
  /** App-rendered viz (typically a Recharts RadarChart). */
  vizSlot: ReactNode;
  legend?: ReactNode;
  caption?: ReactNode;
  className?: string;
}
export function TalentSupplyRadar({ vizSlot, legend, caption, className }: TalentSupplyRadarProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex items-center gap-2">
        <Radar className="size-4 text-muted-foreground" aria-hidden />
        <p className="text-sm font-semibold">Talent supply radar</p>
      </CardHeader>
      <CardBody className="space-y-3">
        <div className="aspect-square w-full">{vizSlot}</div>
        {legend ? <div className="text-xs text-muted-foreground">{legend}</div> : null}
        {caption ? <p className="text-xs text-muted-foreground">{caption}</p> : null}
      </CardBody>
    </Card>
  );
}

/* ────────────────────── TasksTable / TaskDrilldownPanel ─────────── */
export interface TaskRow {
  id: string;
  title: ReactNode;
  status?: ReactNode;
  assignee?: ReactNode;
  due?: ReactNode;
}
export interface TasksTableProps {
  tasks: TaskRow[];
  onSelect?: (id: string) => void;
  className?: string;
}
export function TasksTable({ tasks, onSelect, className }: TasksTableProps) {
  return (
    <div className={cnHero("overflow-hidden rounded-xl border border-border bg-card", className)}>
      <table className="w-full text-sm">
        <thead className="bg-muted/30 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          <tr>
            <th className="px-4 py-2 text-left">Task</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Assignee</th>
            <th className="px-4 py-2 text-left">Due</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {tasks.map((t) => (
            <tr key={t.id} className={onSelect ? "cursor-pointer hover:bg-muted/40" : ""} onClick={() => onSelect?.(t.id)}>
              <td className="px-4 py-2">{t.title}</td>
              <td className="px-4 py-2">{t.status}</td>
              <td className="px-4 py-2">{t.assignee}</td>
              <td className="px-4 py-2 text-muted-foreground">{t.due}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export interface TaskDrilldownPanelProps {
  title: ReactNode;
  subtitle?: ReactNode;
  onClose?: () => void;
  children?: ReactNode;
  className?: string;
}
export function TaskDrilldownPanel({ title, subtitle, onClose, children, className }: TaskDrilldownPanelProps) {
  return (
    <aside className={cnHero("flex h-full w-96 flex-col border-l border-border bg-card", className)}>
      <header className="flex items-start justify-between gap-2 border-b border-border px-4 py-3">
        <div className="min-w-0">
          <p className="text-base font-semibold">{title}</p>
          {subtitle ? <p className="text-xs text-muted-foreground">{subtitle}</p> : null}
        </div>
        {onClose ? (
          <button type="button" onClick={onClose} className="text-xs text-muted-foreground hover:text-foreground">Close</button>
        ) : null}
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">{children}</div>
    </aside>
  );
}

/* ────────────────────── ProjectDrilldownPanel ───────────────────── */
export type ProjectDrilldownPanelProps = TaskDrilldownPanelProps;
export const ProjectDrilldownPanel = TaskDrilldownPanel;

/* ────────────────────── ProjectProgramChannelPanel ──────────────── */
export interface ProjectProgramChannelPanelProps {
  channelName: ReactNode;
  description?: ReactNode;
  /** Stream of channel content — apps render messages/timeline. */
  feed?: ReactNode;
  composer?: ReactNode;
  className?: string;
}
export function ProjectProgramChannelPanel({ channelName, description, feed, composer, className }: ProjectProgramChannelPanelProps) {
  return (
    <div className={cnHero("flex h-full flex-col rounded-2xl border border-border bg-card", className)}>
      <header className="border-b border-border px-4 py-3">
        <p className="text-base font-semibold">{channelName}</p>
        {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">{feed}</div>
      {composer ? <div className="border-t border-border px-4 py-3">{composer}</div> : null}
    </div>
  );
}

/* ────────────────────── WorkAreaSubnav (+ Trailing) ─────────────── */
export interface WorkAreaSubnavProps {
  tabs: ResponsiveTab[];
  value: string;
  onChange: (id: string) => void;
  trailing?: ReactNode;
  className?: string;
}
export function WorkAreaSubnav({ tabs, value, onChange, trailing, className }: WorkAreaSubnavProps) {
  return (
    <div className={cnHero("flex items-center justify-between gap-3 border-b border-border bg-background px-4 py-2", className)}>
      <ResponsiveTabsList tabs={tabs} value={value} onChange={onChange} className="border-b-0" />
      {trailing ? <div className="shrink-0">{trailing}</div> : null}
    </div>
  );
}

export interface WorkAreaSubnavTrailingProps {
  children?: ReactNode;
  className?: string;
}
export function WorkAreaSubnavTrailing({ children, className }: WorkAreaSubnavTrailingProps) {
  return <div className={cnHero("flex items-center gap-1.5", className)}>{children}</div>;
}

/* ────────────────────── WorkBusinessSiteEmptyState ──────────────── */
export interface WorkBusinessSiteEmptyStateProps {
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}
export function WorkBusinessSiteEmptyState({
  title = "Add your first business site",
  description = "Business sites group your postings, applicants, and team by location.",
  action,
  className,
}: WorkBusinessSiteEmptyStateProps) {
  return (
    <div className={cnHero("flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card px-6 py-12 text-center", className)}>
      <p className="font-heading text-lg font-semibold">{title}</p>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}

/* ────────────────────── WorkDashboard ───────────────────────────── */
export interface WorkDashboardProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  kpis?: ReactNode;
  feed?: ReactNode;
  /** Right-rail (recent activity, tasks). */
  rightRail?: ReactNode;
  className?: string;
}
export function WorkDashboard({ title = "Work", subtitle, kpis, feed, rightRail, className }: WorkDashboardProps) {
  return (
    <WorkPageShell title={title} subtitle={subtitle} className={className}>
      <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {kpis ? <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{kpis}</section> : null}
          {feed}
        </div>
        {rightRail ? <aside className="space-y-3">{rightRail}</aside> : null}
      </div>
    </WorkPageShell>
  );
}

/* ────────────────────── SkillGapBridgingItem ────────────────────── */
export interface SkillGapBridgingItemProps {
  skill: ReactNode;
  gapLabel?: ReactNode;
  suggestion?: ReactNode;
  cta?: ReactNode;
  className?: string;
}
export function SkillGapBridgingItem({ skill, gapLabel, suggestion, cta, className }: SkillGapBridgingItemProps) {
  return (
    <div className={cnHero("flex items-start gap-3 rounded-xl border border-border bg-card p-3", className)}>
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-lavender-100 text-lavender-800" aria-hidden>
        <Sparkles className="size-4" />
      </span>
      <div className="min-w-0 flex-1 space-y-0.5">
        <p className="text-sm font-semibold">{skill}</p>
        {gapLabel ? <p className="text-xs text-warning-700">{gapLabel}</p> : null}
        {suggestion ? <p className="text-xs text-muted-foreground">{suggestion}</p> : null}
      </div>
      {cta ? <div className="shrink-0">{cta}</div> : null}
    </div>
  );
}

/* ────────────────────── PerformanceExecutiveSummarySuggestions ──── */
export interface ExecutiveSuggestion {
  id: string;
  title: ReactNode;
  body?: ReactNode;
  action?: ReactNode;
}
export interface PerformanceExecutiveSummarySuggestionsProps {
  suggestions: ExecutiveSuggestion[];
  className?: string;
}
export function PerformanceExecutiveSummarySuggestions({ suggestions, className }: PerformanceExecutiveSummarySuggestionsProps) {
  return (
    <ProfileSectionCard
      title={<span className="inline-flex items-center gap-2"><Activity className="size-4" aria-hidden /> Suggestions</span>}
      className={className}
    >
      <ul className="divide-y divide-border">
        {suggestions.map((s) => (
          <li key={s.id} className="flex items-start justify-between gap-3 py-3">
            <div className="min-w-0">
              <p className="text-sm font-medium">{s.title}</p>
              {s.body ? <p className="mt-0.5 text-xs text-muted-foreground">{s.body}</p> : null}
            </div>
            {s.action ? <div className="shrink-0">{s.action}</div> : null}
          </li>
        ))}
      </ul>
    </ProfileSectionCard>
  );
}

/* ────────────────────── Brand-mark re-exports ───────────────────── */
export function XeekrsHeaderLogo(props: { className?: string; height?: number }) {
  return <BrandLogo variant="xeekrs" {...props} />;
}
export function ReferralsHubMark(props: { className?: string }) {
  return (
    <span
      className={cnHero(
        "inline-flex size-8 items-center justify-center rounded-full bg-lavender-500/20 text-lavender-800",
        props.className,
      )}
      aria-hidden
    >
      <Sparkles className="size-4" />
    </span>
  );
}

/* ────────────────────── Posting / Employer slot shells ──────────── */

export interface JobPostingCreationFlowProps {
  /** Slot for the multi-step wizard body. */
  children?: ReactNode;
  className?: string;
}
export function JobPostingCreationFlow({ children, className }: JobPostingCreationFlowProps) {
  return <div className={cnHero("space-y-5", className)}>{children}</div>;
}

export interface JobPostingFormProps {
  children?: ReactNode;
  className?: string;
}
export function JobPostingForm({ children, className }: JobPostingFormProps) {
  return (
    <form className={cnHero("space-y-5", className)} onSubmit={(e) => e.preventDefault()}>
      {children}
    </form>
  );
}

export interface JobPostingSettingsDashboardProps {
  sections: { id: string; title: ReactNode; body: ReactNode }[];
  className?: string;
}
export function JobPostingSettingsDashboard({ sections, className }: JobPostingSettingsDashboardProps) {
  return (
    <div className={cnHero("space-y-3", className)}>
      {sections.map((s) => (
        <ProfileSectionCard key={s.id} title={s.title}>
          {s.body}
        </ProfileSectionCard>
      ))}
    </div>
  );
}

export interface JobPostingQualityTabProps {
  /** Slot for the QualityScorePanel + recommendations. */
  children?: ReactNode;
  className?: string;
}
export function JobPostingQualityTab({ children, className }: JobPostingQualityTabProps) {
  return <div className={cnHero("space-y-4", className)}>{children}</div>;
}

export interface JobPostingDisclosurePublicPreviewProps {
  /** Disclosure body. */
  body: ReactNode;
  className?: string;
}
export function JobPostingDisclosurePublicPreview({ body, className }: JobPostingDisclosurePublicPreviewProps) {
  return <DisclosureBar message={<>{body}</>} className={className} />;
}

export interface EmployerPendingApprovalBarProps {
  message?: ReactNode;
  action?: ReactNode;
  className?: string;
}
export function EmployerPendingApprovalBar({
  message = "This employer is pending approval. Postings won't go live until approved.",
  action,
  className,
}: EmployerPendingApprovalBarProps) {
  return (
    <AlertBar tone="warning" message={message} action={action} className={className} />
  );
}

export interface EmployerOnboardingLocationStepProps {
  /** Form fields slot (address, postal code, etc.). */
  children?: ReactNode;
  /** Title heading. */
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
}
export function EmployerOnboardingLocationStep({ children, title = "Where do you operate?", description, className }: EmployerOnboardingLocationStepProps) {
  return (
    <section className={cnHero("space-y-4", className)}>
      <header>
        <p className="font-heading text-xl font-semibold">{title}</p>
        {description ? <p className="mt-1 text-sm text-muted-foreground">{description}</p> : null}
      </header>
      {children}
    </section>
  );
}

/* ────────────────────── ApplicationStatusModal ──────────────────── */

export interface ApplicationStatusModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  applicationTitle: ReactNode;
  status: ReactNode;
  /** Timeline / recap slot. */
  timeline?: ReactNode;
  actions?: ReactNode;
}
export function ApplicationStatusModal({
  isOpen, onOpenChange, applicationTitle, status, timeline, actions,
}: ApplicationStatusModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-0.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Application status
              </p>
              <p className="text-lg font-semibold">{applicationTitle}</p>
            </ModalHeader>
            <ModalBody className="space-y-3">
              <div className="rounded-lg border border-border bg-card p-3 text-sm">{status}</div>
              {timeline ? (
                <>
                  <Divider />
                  <div>{timeline}</div>
                </>
              ) : null}
            </ModalBody>
            <ModalFooter>
              {actions ?? <Button variant="light" onClick={onClose}>Close</Button>}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
