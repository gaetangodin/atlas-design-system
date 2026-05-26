/**
 * Onboarding-domain compositions (full first-run / welcome flow).
 *
 *  - `WelcomeFlowShell`                  — full-bleed multi-step welcome shell.
 *  - `PostcardShell`                     — full-bleed marketing postcard wrapper.
 *  - `RoleSelectStep`                    — role picker (jobseeker / employer / staff).
 *  - `WelcomeIconRadiogroup`             — large icon radio group.
 *  - `JobSeekerSteps`                    — labeled progress stepper for jobseeker setup.
 *  - `EmployerSteps`                     — labeled progress stepper for employer setup.
 *  - `EmployerVerificationsPanel`        — verification checklist with statuses.
 *  - `InviteUsersScreen`                 — invite-by-email screen shell.
 *  - `PasswordRegistrationScreen`        — password registration shell.
 *  - `EmployerReferralLanding`           — landing page for referral CTA.
 */

import { type ReactNode } from "react";
import { Check, ChevronRight, Mail } from "lucide-react";
import { Card, CardHeader, CardBody, CardFooter } from "../Card";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── WelcomeFlowShell ────────────────────────── */

export interface WelcomeFlowShellProps {
  /** Brand mark / logo to display top-left. */
  brand?: ReactNode;
  /** Optional progress label ("Step 2 of 4"). */
  progressLabel?: ReactNode;
  /** Step headline. */
  headline: ReactNode;
  /** Sub-headline / body copy. */
  body?: ReactNode;
  /** Step content. */
  children: ReactNode;
  /** Bottom action row — typically Back / Next. */
  actions?: ReactNode;
  /** Optional aside / illustration column. */
  aside?: ReactNode;
  className?: string;
}
export function WelcomeFlowShell({ brand, progressLabel, headline, body, children, actions, aside, className }: WelcomeFlowShellProps) {
  return (
    <div className={cnHero("flex min-h-[640px] flex-col bg-background", className)}>
      <header className="flex items-center justify-between px-6 py-4">
        <div>{brand}</div>
        {progressLabel ? <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{progressLabel}</p> : null}
      </header>
      <main className={cnHero("grid flex-1 gap-6 px-6 pb-8", aside ? "lg:grid-cols-[1fr_1fr]" : "")}>
        <section className="flex max-w-xl flex-col gap-3">
          <h1 className="text-2xl font-semibold text-foreground">{headline}</h1>
          {body ? <p className="text-sm text-muted-foreground">{body}</p> : null}
          <div className="mt-2 flex-1">{children}</div>
          {actions ? <div className="flex items-center justify-between gap-2 pt-3">{actions}</div> : null}
        </section>
        {aside ? <aside className="hidden lg:block">{aside}</aside> : null}
      </main>
    </div>
  );
}

/* ────────────────────── PostcardShell ───────────────────────────── */

export interface PostcardShellProps {
  /** Background gradient or image url. */
  backgroundUrl?: string;
  /** Full-bleed eyebrow (e.g. "Welcome to Xeekrs"). */
  eyebrow?: ReactNode;
  headline: ReactNode;
  body?: ReactNode;
  /** Bottom-of-postcard CTA(s). */
  cta?: ReactNode;
  className?: string;
}
export function PostcardShell({ backgroundUrl, eyebrow, headline, body, cta, className }: PostcardShellProps) {
  const bgStyle = backgroundUrl ? { backgroundImage: `url(${backgroundUrl})` } : undefined;
  return (
    <div
      className={cnHero(
        "relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl p-8",
        backgroundUrl ? "bg-cover bg-center text-white" : "bg-gradient-to-br from-lavender-200 to-spotlight text-foreground",
        className,
      )}
      style={bgStyle}
    >
      {backgroundUrl ? <div className="absolute inset-0 bg-foreground/35" aria-hidden /> : null}
      <div className="relative z-10 flex flex-col gap-2">
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-wide opacity-80">{eyebrow}</p> : null}
        <h2 className="text-3xl font-semibold leading-tight">{headline}</h2>
        {body ? <p className="text-sm opacity-90">{body}</p> : null}
        {cta ? <div className="mt-3 flex flex-wrap items-center gap-2">{cta}</div> : null}
      </div>
    </div>
  );
}

/* ────────────────────── RoleSelectStep ──────────────────────────── */

export interface RoleSelectOption {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
}
export interface RoleSelectStepProps {
  options: RoleSelectOption[];
  /** Selected role id, or undefined. */
  value?: string;
  onChange?: (id: string) => void;
  className?: string;
}
export function RoleSelectStep({ options, value, onChange, className }: RoleSelectStepProps) {
  return (
    <div className={cnHero("grid gap-3 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {options.map((o) => {
        const selected = value === o.id;
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange?.(o.id)}
            aria-pressed={selected}
            className={cnHero(
              "flex flex-col items-start gap-2 rounded-2xl border p-4 text-left transition",
              selected ? "border-primary bg-primary/5" : "border-border bg-card hover:bg-muted/40",
            )}
          >
            {o.icon ? <span className="grid size-10 place-items-center rounded-xl bg-muted text-foreground">{o.icon}</span> : null}
            <p className="text-sm font-semibold">{o.label}</p>
            {o.description ? <p className="text-xs text-muted-foreground">{o.description}</p> : null}
          </button>
        );
      })}
    </div>
  );
}

/* ────────────────────── WelcomeIconRadiogroup ───────────────────── */

export interface WelcomeIconRadiogroupOption {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
}
export interface WelcomeIconRadiogroupProps {
  /** Accessible group label. */
  label?: ReactNode;
  options: WelcomeIconRadiogroupOption[];
  value?: string;
  onChange?: (id: string) => void;
  className?: string;
}
export function WelcomeIconRadiogroup({ label, options, value, onChange, className }: WelcomeIconRadiogroupProps) {
  return (
    <fieldset className={cnHero("flex flex-col gap-2", className)}>
      {label ? <legend className="text-sm font-semibold text-foreground">{label}</legend> : null}
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((o) => {
          const selected = value === o.id;
          return (
            <label
              key={o.id}
              className={cnHero(
                "flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition",
                selected ? "border-primary bg-primary/5" : "border-border bg-card hover:bg-muted/40",
              )}
            >
              <input
                type="radio"
                name="welcome-radio"
                checked={selected}
                onChange={() => onChange?.(o.id)}
                className="sr-only"
              />
              {o.icon ? <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-muted text-foreground">{o.icon}</span> : null}
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-foreground">{o.label}</span>
                {o.description ? <span className="block text-xs text-muted-foreground">{o.description}</span> : null}
              </span>
              <span
                aria-hidden
                className={cnHero(
                  "mt-0.5 grid size-4 place-items-center rounded-full border",
                  selected ? "border-primary bg-primary" : "border-border bg-card",
                )}
              >
                {selected ? <span className="size-2 rounded-full bg-primary-foreground" /> : null}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

/* ────────────────────── JobSeekerSteps / EmployerSteps ──────────── */

export type OnboardingStepStatus = "pending" | "active" | "completed";

export interface OnboardingStep {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  status: OnboardingStepStatus;
  onClick?: () => void;
}
export interface OnboardingStepsProps {
  steps: OnboardingStep[];
  className?: string;
}
function OnboardingStepsList({ steps, className }: OnboardingStepsProps) {
  return (
    <ol className={cnHero("flex flex-col gap-1.5", className)}>
      {steps.map((s, idx) => (
        <li key={s.id}>
          <button
            type="button"
            onClick={s.onClick}
            className={cnHero(
              "flex w-full items-start gap-3 rounded-xl border p-3 text-left transition",
              s.status === "active" && "border-primary bg-primary/5",
              s.status === "completed" && "border-border bg-card text-muted-foreground",
              s.status === "pending" && "border-border bg-card hover:bg-muted/40",
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
              {s.status === "completed" ? <Check className="size-3.5" /> : idx + 1}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium text-foreground">{s.label}</span>
              {s.description ? <span className="block text-xs text-muted-foreground">{s.description}</span> : null}
            </span>
            {s.status === "active" ? <ChevronRight className="size-4 shrink-0 text-muted-foreground" aria-hidden /> : null}
          </button>
        </li>
      ))}
    </ol>
  );
}
export const JobSeekerSteps = OnboardingStepsList;
export const EmployerSteps = OnboardingStepsList;

/* ────────────────────── EmployerVerificationsPanel ──────────────── */

export type VerificationStatus = "pending" | "in-review" | "approved" | "rejected";

export interface VerificationItem {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  status: VerificationStatus;
  /** Trailing action ("Upload", "Re-submit", "View"). */
  action?: ReactNode;
}
export interface EmployerVerificationsPanelProps {
  title?: ReactNode;
  description?: ReactNode;
  items: VerificationItem[];
  footer?: ReactNode;
  className?: string;
}

const VERIFICATION_PILL: Record<VerificationStatus, string> = {
  pending: "bg-muted text-muted-foreground",
  "in-review": "bg-canary-100 text-foreground",
  approved: "bg-emerald-100 text-emerald-900",
  rejected: "bg-pink-100 text-pink-900",
};

export function EmployerVerificationsPanel({
  title = "Verifications", description, items, footer, className,
}: EmployerVerificationsPanelProps) {
  return (
    <Card shadow="sm" className={className}>
      <CardHeader>
        <p className="text-sm font-semibold">{title}</p>
        {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
      </CardHeader>
      <CardBody className="grid gap-2">
        {items.map((it) => (
          <div key={it.id} className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-foreground">{it.label}</p>
              {it.description ? <p className="text-xs text-muted-foreground">{it.description}</p> : null}
            </div>
            <span className={cnHero("shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide", VERIFICATION_PILL[it.status])}>
              {it.status.replace("-", " ")}
            </span>
            {it.action ? <div className="shrink-0">{it.action}</div> : null}
          </div>
        ))}
      </CardBody>
      {footer ? <CardFooter>{footer}</CardFooter> : null}
    </Card>
  );
}

/* ────────────────────── InviteUsersScreen ───────────────────────── */

export interface InviteUsersScreenProps {
  title?: ReactNode;
  description?: ReactNode;
  /** Email-input slot (consumer-supplied). */
  emailInputSlot: ReactNode;
  /** Existing invites list (chip group / list). */
  invitesSlot?: ReactNode;
  /** Footer actions (Skip, Send invites). */
  footer?: ReactNode;
  className?: string;
}
export function InviteUsersScreen({
  title = "Invite your team", description, emailInputSlot, invitesSlot, footer, className,
}: InviteUsersScreenProps) {
  return (
    <Card shadow="sm" className={className}>
      <CardHeader className="flex items-start gap-2">
        <Mail className="mt-0.5 size-4 text-muted-foreground" aria-hidden />
        <div className="min-w-0">
          <p className="text-sm font-semibold">{title}</p>
          {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
        </div>
      </CardHeader>
      <CardBody className="gap-3">
        {emailInputSlot}
        {invitesSlot}
      </CardBody>
      {footer ? <CardFooter className="justify-end gap-2">{footer}</CardFooter> : null}
    </Card>
  );
}

/* ────────────────────── PasswordRegistrationScreen ──────────────── */

export interface PasswordRegistrationScreenProps {
  title?: ReactNode;
  description?: ReactNode;
  /** Password input slot. */
  passwordSlot: ReactNode;
  /** Confirm-password input slot. */
  confirmSlot?: ReactNode;
  /** Strength meter / rules list slot. */
  rulesSlot?: ReactNode;
  footer?: ReactNode;
  className?: string;
}
export function PasswordRegistrationScreen({
  title = "Set your password", description, passwordSlot, confirmSlot, rulesSlot, footer, className,
}: PasswordRegistrationScreenProps) {
  return (
    <Card shadow="sm" className={className}>
      <CardHeader>
        <p className="text-sm font-semibold">{title}</p>
        {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
      </CardHeader>
      <CardBody className="gap-3">
        {passwordSlot}
        {confirmSlot}
        {rulesSlot}
      </CardBody>
      {footer ? <CardFooter className="justify-end gap-2">{footer}</CardFooter> : null}
    </Card>
  );
}

/* ────────────────────── EmployerReferralLanding ─────────────────── */

export interface EmployerReferralLandingProps {
  /** Brand mark or hero illustration. */
  hero?: ReactNode;
  eyebrow?: ReactNode;
  headline: ReactNode;
  body?: ReactNode;
  /** Bulleted value-prop list. */
  bullets?: ReactNode[];
  /** Primary CTA. */
  primaryCta?: ReactNode;
  /** Secondary CTA. */
  secondaryCta?: ReactNode;
  className?: string;
}
export function EmployerReferralLanding({
  hero, eyebrow, headline, body, bullets = [], primaryCta, secondaryCta, className,
}: EmployerReferralLandingProps) {
  return (
    <section className={cnHero("grid items-center gap-8 rounded-3xl border border-border bg-card p-8 lg:grid-cols-2", className)}>
      <div>
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{eyebrow}</p> : null}
        <h2 className="mt-1 text-2xl font-semibold text-foreground">{headline}</h2>
        {body ? <p className="mt-2 text-sm text-muted-foreground">{body}</p> : null}
        {bullets.length > 0 ? (
          <ul className="mt-3 grid gap-1.5 text-sm text-foreground">
            {bullets.map((b, i) => (
              <li key={i} className="inline-flex items-start gap-2">
                <Check className="mt-0.5 size-3.5 text-emerald-700" aria-hidden /> <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {(primaryCta || secondaryCta) ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {primaryCta}
            {secondaryCta}
          </div>
        ) : null}
      </div>
      {hero ? <div className="rounded-2xl bg-muted/40 p-4">{hero}</div> : null}
    </section>
  );
}
