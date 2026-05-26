/**
 * Account / settings & home shells.
 *
 *  - `AccountSettingsShell`           — split sidebar + content settings layout.
 *  - `AccountContributionsSection`    — labeled contributions/list section.
 *  - `AccountOrganizationsSection`    — labeled organizations section.
 *  - `AccountProfilePreferencesShell` — preferences form shell.
 *  - `AccountSiteMapSection`          — sitemap section listing routes.
 *  - `AccountWorkspacesSection`       — labeled workspaces section.
 *  - `BrowsePageShell`                — hero + sections shell for browse pages.
 *  - `HomePageShell`                  — landing-page-style hero + content shell.
 *  - `HelpDeskSubpageShell`           — help-desk article shell.
 *  - `JobPostingsTableShell`          — table shell with title + toolbar.
 *  - `OrganizationRequestFloatingCard`— bottom-anchored cardlet for pending org requests.
 */

import { type ReactNode } from "react";
import { Building2, ChevronRight, Settings as SettingsIcon } from "lucide-react";
import { Card, CardHeader, CardBody, CardFooter } from "../Card";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── AccountSettingsShell ────────────────────── */

export interface AccountSettingsNavItem {
  id: string;
  label: ReactNode;
  /** Optional icon. */
  icon?: ReactNode;
  active?: boolean;
  onSelect?: () => void;
}
export interface AccountSettingsShellProps {
  navItems: AccountSettingsNavItem[];
  /** Header strip above content (e.g. section title + actions). */
  header?: ReactNode;
  body: ReactNode;
  /** Optional footer below content. */
  footer?: ReactNode;
  className?: string;
}
export function AccountSettingsShell({ navItems, header, body, footer, className }: AccountSettingsShellProps) {
  return (
    <div className={cnHero("grid gap-4 lg:grid-cols-[220px_1fr]", className)}>
      <aside className="rounded-2xl border border-border bg-card p-2">
        <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          <SettingsIcon className="-mt-0.5 mr-1 inline size-3" aria-hidden /> Settings
        </p>
        <ul className="flex flex-col gap-0.5">
          {navItems.map((it) => (
            <li key={it.id}>
              <button
                type="button"
                onClick={it.onSelect}
                className={cnHero(
                  "flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm transition",
                  it.active ? "bg-primary/5 text-foreground" : "text-foreground hover:bg-muted/40",
                )}
              >
                {it.icon ? <span className="text-muted-foreground">{it.icon}</span> : null}
                <span className="min-w-0 flex-1 truncate">{it.label}</span>
                {it.active ? <ChevronRight className="size-3.5 text-muted-foreground" aria-hidden /> : null}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <section className="min-w-0">
        {header ? <header className="mb-3">{header}</header> : null}
        <div>{body}</div>
        {footer ? <footer className="mt-4 border-t border-border pt-3">{footer}</footer> : null}
      </section>
    </div>
  );
}

/* ────────────────────── Account section shells (re-used) ────────── */

export interface AccountSectionProps {
  title?: ReactNode;
  description?: ReactNode;
  /** Trailing slot in section header (e.g. "+ Add"). */
  trailing?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}
function AccountSection({ title, description, trailing, children, footer, className }: AccountSectionProps) {
  return (
    <Card shadow="sm" className={className}>
      <CardHeader className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          {title ? <p className="text-sm font-semibold">{title}</p> : null}
          {description ? <p className="mt-0.5 text-xs text-muted-foreground">{description}</p> : null}
        </div>
        {trailing ? <div className="shrink-0">{trailing}</div> : null}
      </CardHeader>
      <CardBody>{children}</CardBody>
      {footer ? <CardFooter>{footer}</CardFooter> : null}
    </Card>
  );
}
export const AccountContributionsSection = AccountSection;
export const AccountOrganizationsSection = AccountSection;
export const AccountSiteMapSection = AccountSection;
export const AccountWorkspacesSection = AccountSection;

/* ────────────────────── AccountProfilePreferencesShell ──────────── */

export interface AccountProfilePreferencesShellProps {
  title?: ReactNode;
  description?: ReactNode;
  /** Stack of preference groups. */
  groups: ReactNode[];
  footer?: ReactNode;
  className?: string;
}
export function AccountProfilePreferencesShell({
  title = "Profile preferences", description, groups, footer, className,
}: AccountProfilePreferencesShellProps) {
  return (
    <section className={cnHero("flex flex-col gap-3", className)}>
      <header>
        <p className="text-sm font-semibold">{title}</p>
        {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
      </header>
      <div className="grid gap-3">
        {groups.map((g, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card">{g}</div>
        ))}
      </div>
      {footer ? <footer className="pt-2">{footer}</footer> : null}
    </section>
  );
}

/* ────────────────────── BrowsePageShell ─────────────────────────── */

export interface BrowsePageShellProps {
  /** Top hero strip — eyebrow + title + actions. */
  hero?: ReactNode;
  /** Optional sticky filter / sort toolbar. */
  toolbar?: ReactNode;
  /** Body content — grid or list. */
  body: ReactNode;
  /** Right rail (filters, related). */
  rightRail?: ReactNode;
  className?: string;
}
export function BrowsePageShell({ hero, toolbar, body, rightRail, className }: BrowsePageShellProps) {
  return (
    <div className={cnHero("flex w-full flex-col gap-3", className)}>
      {hero}
      {toolbar ? <div className="flex flex-wrap items-center justify-between gap-3">{toolbar}</div> : null}
      <div className={cnHero("grid gap-4", rightRail ? "lg:grid-cols-[1fr_320px]" : "")}>
        <div className="min-w-0">{body}</div>
        {rightRail ? <aside className="flex flex-col gap-3">{rightRail}</aside> : null}
      </div>
    </div>
  );
}

/* ────────────────────── HomePageShell ───────────────────────────── */

export interface HomePageShellProps {
  /** Top hero (HeroSection / MarketingHero / custom). */
  hero?: ReactNode;
  /** Vertical stack of homepage sections. */
  sections?: ReactNode[];
  /** Optional footer / pre-footer CTA strip. */
  footer?: ReactNode;
  className?: string;
}
export function HomePageShell({ hero, sections = [], footer, className }: HomePageShellProps) {
  return (
    <div className={cnHero("flex w-full flex-col gap-8", className)}>
      {hero}
      {sections.map((s, i) => (
        <section key={i}>{s}</section>
      ))}
      {footer}
    </div>
  );
}

/* ────────────────────── HelpDeskSubpageShell ────────────────────── */

export interface HelpDeskSubpageShellProps {
  /** Breadcrumb slot. */
  breadcrumbs?: ReactNode;
  /** Article heading. */
  title: ReactNode;
  /** Article body (markdown / rich content). */
  body: ReactNode;
  /** Article meta line (updated date, author). */
  meta?: ReactNode;
  /** Right rail — TOC, related articles. */
  rightRail?: ReactNode;
  /** Footer (feedback CTA, related). */
  footer?: ReactNode;
  className?: string;
}
export function HelpDeskSubpageShell({ breadcrumbs, title, body, meta, rightRail, footer, className }: HelpDeskSubpageShellProps) {
  return (
    <article className={cnHero("flex w-full flex-col gap-4", className)}>
      {breadcrumbs}
      <header className="border-b border-border pb-3">
        <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
        {meta ? <p className="mt-1 text-xs text-muted-foreground">{meta}</p> : null}
      </header>
      <div className={cnHero("grid gap-6", rightRail ? "lg:grid-cols-[1fr_240px]" : "")}>
        <div className="prose prose-sm max-w-none text-foreground">{body}</div>
        {rightRail ? <aside className="hidden lg:block">{rightRail}</aside> : null}
      </div>
      {footer ? <footer className="border-t border-border pt-3">{footer}</footer> : null}
    </article>
  );
}

/* ────────────────────── JobPostingsTableShell ───────────────────── */

export interface JobPostingsTableShellProps {
  title?: ReactNode;
  /** Toolbar slot (search, filter, "+ New"). */
  toolbar?: ReactNode;
  /** Table or list body. */
  table: ReactNode;
  /** Footer (pagination, total count). */
  footer?: ReactNode;
  className?: string;
}
export function JobPostingsTableShell({ title = "Job postings", toolbar, table, footer, className }: JobPostingsTableShellProps) {
  return (
    <section className={cnHero("flex w-full flex-col gap-3", className)}>
      <header className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        {toolbar ? <div className="flex items-center gap-2">{toolbar}</div> : null}
      </header>
      {table}
      {footer ? <footer className="flex items-center justify-between gap-3">{footer}</footer> : null}
    </section>
  );
}

/* ────────────────────── OrganizationRequestFloatingCard ─────────── */

export interface OrganizationRequestFloatingCardProps {
  /** Org name awaiting decision. */
  orgName: ReactNode;
  /** Sub-line (e.g. "Requested by Avery Lin · Today"). */
  detail?: ReactNode;
  initials?: string;
  onApprove?: () => void;
  onDecline?: () => void;
  onDismiss?: () => void;
  className?: string;
}
export function OrganizationRequestFloatingCard({
  orgName, detail, initials, onApprove, onDecline, onDismiss, className,
}: OrganizationRequestFloatingCardProps) {
  return (
    <div
      role="region"
      aria-label="Organization request"
      className={cnHero(
        "pointer-events-auto flex items-center gap-3 rounded-2xl border border-border bg-background p-3 shadow-lg",
        className,
      )}
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-muted text-xs font-semibold uppercase text-foreground">
        {initials ?? <Building2 className="size-4 text-muted-foreground" aria-hidden />}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{orgName}</p>
        {detail ? <p className="truncate text-xs text-muted-foreground">{detail}</p> : null}
      </div>
      <div className="flex shrink-0 items-center gap-1.5">
        {onDecline ? (
          <button type="button" onClick={onDecline} className="rounded-full border border-border bg-card px-2.5 py-1 text-xs font-semibold text-foreground hover:bg-muted">
            Decline
          </button>
        ) : null}
        {onApprove ? (
          <button type="button" onClick={onApprove} className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground hover:bg-primary/90">
            Approve
          </button>
        ) : null}
        {onDismiss ? (
          <button type="button" onClick={onDismiss} aria-label="Dismiss" className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground">
            ×
          </button>
        ) : null}
      </div>
    </div>
  );
}
