/**
 * v0.6.2 patch — final close-out of missing aliases and small new
 * surfaces discovered in the post-v0.6.1 thorough audit.
 *
 * New components:
 *  - `AnnouncementDetailAdminMetaBadges` — admin metadata badge row.
 *  - `CandidateContactInfoButton`        — contact-info button with LinkedIn variant.
 *  - `ConsentAuditLegalCard`             — legal disclosure card with audit trail.
 *  - `CreateOrganizationStep`            — slot-based create-org step shell.
 *  - `EmployerInviteEmail`               — email template shell for employer invites.
 *  - `OrganizationRequestEmail`          — email template shell for org requests.
 *  - `EmployerWorkspaceBizSetupSteps`    — multi-step business setup wizard.
 *  - `JobSeekerWelcomeEntry`             — jobseeker welcome entry card.
 *  - `WelcomeFlowGallery`                - hero postcard gallery for the welcome flow.
 *
 * Name aliases:
 *  - `PublicEmployerProfile`             = `PublicEmployerProfileShell`
 *  - `WorkInterviewsView`                = `WorkInterviewsViewShell`
 *  - `WelcomeFlow`                       = `WelcomeFlowShell`
 *  - `AllJobSeekers`                     = `AllJobSeekersCard`
 *  - `AlertDialog`                       = `AlertModal`
 *  - 7 `EmployerProfile*Tab` aliases
 *  - 8 `JobSeeker3Profile*Tab` aliases
 */

import { type ReactNode, useEffect, useState } from "react";
import { Shield, Linkedin, Mail, FileCheck2, Briefcase, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardBody, CardFooter } from "../Card";
import { Avatar } from "../Avatar";
import { Popover, PopoverTrigger, PopoverContent } from "../Popover";
import { ProfileTabSection } from "../ProfileTabsShell";
import { PublicEmployerProfileShell } from "../EmployersExtras";
import { WorkInterviewsViewShell } from "../InterviewsExtras";
import { WelcomeFlowShell } from "../OnboardingPatterns";
import { AllJobSeekersCard } from "../CaseloadDashboards";
import { AlertModal } from "../AlertModal";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── AnnouncementDetailAdminMetaBadges ───────── */

export interface AdminMetaBadge {
  id: string;
  label: ReactNode;
  /** Optional icon to lead with. */
  icon?: ReactNode;
  /** Optional tone — defaults to neutral. */
  tone?: "neutral" | "info" | "success" | "warning" | "danger";
}
const META_TONE: Record<NonNullable<AdminMetaBadge["tone"]>, string> = {
  neutral: "bg-muted text-foreground",
  info: "bg-info-light text-info",
  success: "bg-emerald-100 text-emerald-900",
  warning: "bg-canary-100 text-foreground",
  danger: "bg-pink-100 text-pink-900",
};
export interface AnnouncementDetailAdminMetaBadgesProps {
  badges: AdminMetaBadge[];
  className?: string;
}
export function AnnouncementDetailAdminMetaBadges({ badges, className }: AnnouncementDetailAdminMetaBadgesProps) {
  return (
    <div className={cnHero("flex flex-wrap items-center gap-1.5", className)}>
      <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
        <Shield className="-mt-0.5 mr-1 inline size-3" aria-hidden /> Admin
      </span>
      {badges.map((b) => (
        <span
          key={b.id}
          className={cnHero(
            "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
            META_TONE[b.tone ?? "neutral"],
          )}
        >
          {b.icon}
          {b.label}
        </span>
      ))}
    </div>
  );
}

/* ────────────────────── CandidateContactInfoButton ──────────────── */

export interface CandidateContactInfoButtonProps {
  /** Candidate name (used for the popover header). */
  candidateName: ReactNode;
  email?: string;
  phone?: string;
  linkedinUrl?: string;
  /** Trigger button label — defaults to "Contact". */
  triggerLabel?: ReactNode;
  /** Inverted (filled) trigger. */
  inverted?: boolean;
  className?: string;
}
/**
 * Single contact-info trigger button that opens a popover with email,
 * phone, and LinkedIn entries. Distinct from `ContactInfoButton` in
 * that it leads with the LinkedIn solid mark and is tuned for
 * candidate-card use sites.
 */
export function CandidateContactInfoButton({
  candidateName, email, phone, linkedinUrl,
  triggerLabel = "Contact", inverted, className,
}: CandidateContactInfoButtonProps) {
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <button
          type="button"
          className={cnHero(
            "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition",
            inverted
              ? "bg-foreground text-background hover:bg-foreground/90"
              : "border border-border bg-card text-foreground hover:bg-muted",
            className,
          )}
        >
          {triggerLabel}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-3">
        <p className="text-xs font-semibold text-foreground">{candidateName}</p>
        <ul className="mt-2 grid gap-1 text-xs">
          {email ? (
            <li>
              <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-foreground hover:underline">
                <Mail className="size-3.5 text-muted-foreground" aria-hidden /> {email}
              </a>
            </li>
          ) : null}
          {phone ? (
            <li>
              <a href={`tel:${phone}`} className="inline-flex items-center gap-2 text-foreground hover:underline">
                {phone}
              </a>
            </li>
          ) : null}
          {linkedinUrl ? (
            <li>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-[#0A66C2] hover:underline"
              >
                <Linkedin className="size-3.5" aria-hidden /> View on LinkedIn
              </a>
            </li>
          ) : null}
        </ul>
      </PopoverContent>
    </Popover>
  );
}

/* ────────────────────── ConsentAuditLegalCard ───────────────────── */

export interface ConsentAuditLegalCardProps {
  title?: ReactNode;
  description?: ReactNode;
  /** Legal disclosure body. */
  body: ReactNode;
  /** Audit-trail entries shown in a small footer list. */
  auditEntries?: Array<{ id: string; label: ReactNode; whenLabel?: ReactNode }>;
  /** Acknowledge / agree CTA. */
  acknowledgeLabel?: ReactNode;
  onAcknowledge?: () => void;
  acknowledged?: boolean;
  className?: string;
}
export function ConsentAuditLegalCard({
  title = "Legal disclosure", description, body, auditEntries = [],
  acknowledgeLabel = "I understand", onAcknowledge, acknowledged, className,
}: ConsentAuditLegalCardProps) {
  return (
    <Card shadow="sm" className={className}>
      <CardHeader>
        <p className="inline-flex items-center gap-1.5 text-sm font-semibold">
          <FileCheck2 className="size-3.5 text-muted-foreground" aria-hidden /> {title}
        </p>
        {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
      </CardHeader>
      <CardBody className="text-sm text-foreground">{body}</CardBody>
      {auditEntries.length > 0 ? (
        <CardBody className="border-t border-border pt-2">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Audit trail</p>
          <ul className="mt-1 grid gap-0.5 text-xs text-muted-foreground">
            {auditEntries.map((e) => (
              <li key={e.id} className="flex items-center justify-between gap-2">
                <span>{e.label}</span>
                {e.whenLabel ? <span className="text-[10px]">{e.whenLabel}</span> : null}
              </li>
            ))}
          </ul>
        </CardBody>
      ) : null}
      <CardFooter className="justify-end">
        <button
          type="button"
          onClick={onAcknowledge}
          disabled={acknowledged}
          className={cnHero(
            "rounded-full px-3 py-1.5 text-xs font-semibold transition",
            acknowledged
              ? "bg-emerald-100 text-emerald-900"
              : "bg-primary text-primary-foreground hover:bg-primary/90",
          )}
        >
          {acknowledged ? "Acknowledged" : acknowledgeLabel}
        </button>
      </CardFooter>
    </Card>
  );
}

/* ────────────────────── CreateOrganizationStep ──────────────────── */

export interface CreateOrganizationStepProps {
  title?: ReactNode;
  description?: ReactNode;
  /** Organization-name input slot. */
  nameInputSlot: ReactNode;
  /** Optional industry / type picker slot. */
  industrySlot?: ReactNode;
  /** Optional location picker slot. */
  locationSlot?: ReactNode;
  /** Footer actions (Back, Continue). */
  footer?: ReactNode;
  className?: string;
}
export function CreateOrganizationStep({
  title = "Create your organization", description, nameInputSlot, industrySlot, locationSlot, footer, className,
}: CreateOrganizationStepProps) {
  return (
    <Card shadow="sm" className={className}>
      <CardHeader>
        <p className="text-sm font-semibold">{title}</p>
        {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
      </CardHeader>
      <CardBody className="grid gap-3">
        {nameInputSlot}
        {industrySlot}
        {locationSlot}
      </CardBody>
      {footer ? <CardFooter className="justify-end gap-2">{footer}</CardFooter> : null}
    </Card>
  );
}

/* ────────────────────── Email templates ─────────────────────────── */

export interface EmailTemplateProps {
  /** Brand header (logo + name). */
  brand?: ReactNode;
  /** Subject line shown above the body. */
  subject?: ReactNode;
  /** Salutation (e.g., "Hi Avery,"). */
  salutation?: ReactNode;
  /** Email body. */
  body: ReactNode;
  /** Primary CTA button text. */
  ctaLabel?: ReactNode;
  /** Primary CTA href. */
  ctaHref?: string;
  /** Sign-off line. */
  signOff?: ReactNode;
  /** Footer text (legal, unsubscribe). */
  footer?: ReactNode;
  className?: string;
}
function EmailTemplate({
  brand, subject, salutation, body, ctaLabel, ctaHref, signOff, footer, className,
}: EmailTemplateProps) {
  return (
    <article
      className={cnHero(
        "mx-auto w-full max-w-xl rounded-2xl border border-border bg-card p-6 text-sm text-foreground",
        className,
      )}
    >
      {brand ? <header className="border-b border-border pb-3">{brand}</header> : null}
      {subject ? <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{subject}</p> : null}
      {salutation ? <p className="mt-3">{salutation}</p> : null}
      <div className="mt-2 space-y-3">{body}</div>
      {ctaLabel ? (
        <div className="mt-4">
          <a
            href={ctaHref ?? "#"}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {ctaLabel} <ArrowRight className="size-3" aria-hidden />
          </a>
        </div>
      ) : null}
      {signOff ? <p className="mt-4">{signOff}</p> : null}
      {footer ? <footer className="mt-6 border-t border-border pt-3 text-xs text-muted-foreground">{footer}</footer> : null}
    </article>
  );
}
export const EmployerInviteEmail = EmailTemplate;
export const OrganizationRequestEmail = EmailTemplate;

/* ────────────────────── EmployerWorkspaceBizSetupSteps ──────────── */

export interface BizSetupStep {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  status: "pending" | "active" | "completed";
  onClick?: () => void;
}
export interface EmployerWorkspaceBizSetupStepsProps {
  steps: BizSetupStep[];
  /** Overall progress summary slot. */
  summary?: ReactNode;
  /** Footer actions (Skip, Continue). */
  footer?: ReactNode;
  className?: string;
}
export function EmployerWorkspaceBizSetupSteps({
  steps, summary, footer, className,
}: EmployerWorkspaceBizSetupStepsProps) {
  return (
    <section className={cnHero("flex flex-col gap-3", className)}>
      {summary ? <p className="text-xs text-muted-foreground">{summary}</p> : null}
      <ol className="grid gap-2">
        {steps.map((s, idx) => (
          <li key={s.id}>
            <button
              type="button"
              onClick={s.onClick}
              className={cnHero(
                "flex w-full items-start gap-3 rounded-xl border bg-card p-3 text-left transition",
                s.status === "active" && "border-primary bg-primary/5",
                s.status === "completed" && "border-border text-muted-foreground",
                s.status === "pending" && "border-border hover:bg-muted/40",
              )}
            >
              <span
                className={cnHero(
                  "grid size-6 shrink-0 place-items-center rounded-full border text-[11px] font-semibold",
                  s.status === "completed" && "border-emerald-700 bg-emerald-700 text-white",
                  s.status === "active" && "border-primary bg-primary text-primary-foreground",
                  s.status === "pending" && "border-border bg-card text-muted-foreground",
                )}
              >
                {idx + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-foreground">{s.label}</span>
                {s.description ? <span className="block text-xs text-muted-foreground">{s.description}</span> : null}
              </span>
            </button>
          </li>
        ))}
      </ol>
      {footer ? <footer className="flex items-center justify-end gap-2">{footer}</footer> : null}
    </section>
  );
}

/* ────────────────────── JobSeekerWelcomeEntry ───────────────────── */

export interface JobSeekerWelcomeEntryProps {
  eyebrow?: ReactNode;
  headline?: ReactNode;
  body?: ReactNode;
  /** Hero illustration / image slot. */
  visual?: ReactNode;
  /** Primary CTA. */
  primaryCta?: ReactNode;
  /** Secondary CTA. */
  secondaryCta?: ReactNode;
  className?: string;
}
export function JobSeekerWelcomeEntry({
  eyebrow, headline = "Find work that fits.", body, visual, primaryCta, secondaryCta, className,
}: JobSeekerWelcomeEntryProps) {
  return (
    <section className={cnHero("grid items-center gap-6 rounded-3xl border border-border bg-card p-6 lg:grid-cols-2", className)}>
      <div>
        {eyebrow ? (
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <Briefcase className="size-3" aria-hidden /> {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-1 text-2xl font-semibold text-foreground">{headline}</h2>
        {body ? <p className="mt-2 text-sm text-muted-foreground">{body}</p> : null}
        {(primaryCta || secondaryCta) ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {primaryCta}
            {secondaryCta}
          </div>
        ) : null}
      </div>
      {visual ? <div className="rounded-2xl bg-muted/40 p-4">{visual}</div> : null}
    </section>
  );
}

/* ────────────────────── WelcomeFlowGallery ──────────────────────── */

export interface WelcomeGalleryItem {
  id: string;
  imageUrl: string;
  /** Optional alt text. */
  alt?: string;
}
export interface WelcomeFlowGalleryProps {
  items: WelcomeGalleryItem[];
  /** Auto-rotate interval in ms. 0 disables auto-rotate. Default 5000. */
  intervalMs?: number;
  className?: string;
}
/**
 * Postcard-style hero gallery used in the welcome flow. Auto-rotates
 * through `items` and exposes the active image via fade transitions.
 */
export function WelcomeFlowGallery({ items, intervalMs = 5000, className }: WelcomeFlowGalleryProps) {
  const [active, setActive] = useState(0);
  const count = items.length;
  useEffect(() => {
    if (intervalMs <= 0 || count <= 1) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % count),
      intervalMs,
    );
    return () => window.clearInterval(id);
  }, [intervalMs, count]);
  if (count === 0) return null;
  return (
    <div className={cnHero("relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-muted", className)}>
      {items.map((it, i) => (
        <img
          key={it.id}
          src={it.imageUrl}
          alt={it.alt ?? ""}
          className={cnHero(
            "absolute inset-0 size-full object-cover transition-opacity duration-700",
            i === active ? "opacity-100" : "opacity-0",
          )}
          loading="lazy"
        />
      ))}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {items.map((it, i) => (
          <button
            key={it.id}
            type="button"
            aria-label={`Go to image ${i + 1}`}
            onClick={() => setActive(i)}
            className={cnHero(
              "size-1.5 rounded-full transition",
              i === active ? "bg-white" : "bg-white/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}

/* ────────────────────── Name aliases ────────────────────────────── */

export const PublicEmployerProfile = PublicEmployerProfileShell;
export const WorkInterviewsView = WorkInterviewsViewShell;
export const WelcomeFlow = WelcomeFlowShell;
export const AllJobSeekers = AllJobSeekersCard;
export const AlertDialog = AlertModal;

/* ────────────────────── Employer-profile tab aliases ────────────── */

export const EmployerProfileCandidatesTab = ProfileTabSection;
export const EmployerProfileCaseTasksTab = ProfileTabSection;
export const EmployerProfileDirectoryTab = ProfileTabSection;
export const EmployerProfileJobsTab = ProfileTabSection;
export const EmployerProfileNotesTab = ProfileTabSection;
export const EmployerProfileOverviewTab = ProfileTabSection;
export const EmployerProfilePlacementsTab = ProfileTabSection;
export const EmployerProfileRecruitmentTab = ProfileTabSection;

/* ────────────────────── JobSeeker-3-profile tab aliases ─────────── */

export const JobSeeker3ProfileCandidatesTab = ProfileTabSection;
export const JobSeeker3ProfileCaseTasksTab = ProfileTabSection;
export const JobSeeker3ProfileDirectoryTab = ProfileTabSection;
export const JobSeeker3ProfileJobsTab = ProfileTabSection;
export const JobSeeker3ProfileNotesTab = ProfileTabSection;
export const JobSeeker3ProfileOverviewTab = ProfileTabSection;
export const JobSeeker3ProfilePlacementsTab = ProfileTabSection;
export const JobSeeker3ProfileRecruitmentTab = ProfileTabSection;
