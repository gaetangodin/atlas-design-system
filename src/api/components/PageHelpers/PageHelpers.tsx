/**
 * Page-level helper primitives.
 *
 *  - `PlaceholderPage`     — full-page empty state shell for routes
 *                            still under construction.
 *  - `ProfileSectionCard`  — section card with a heading + body slots,
 *                            used inside profile pages.
 *  - `WorkPageShell`       — the "Work" hub page shell — adds a tinted
 *                            band beneath the TopBar for sub-nav.
 *  - `BusinessAvatarMark`  — square employer logo mark (distinct from
 *                            Atlas's circular Avatar).
 */
import { forwardRef, type ReactNode } from "react";
import { Construction } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── PlaceholderPage ─────────────────────────── */

export interface PlaceholderPageProps {
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
  testId?: string;
}

export function PlaceholderPage({
  title = "Coming soon",
  description = "This route hasn't shipped yet — check back later.",
  icon,
  action,
  className,
  testId,
}: PlaceholderPageProps) {
  return (
    <div
      data-testid={testId}
      className={cnHero(
        "flex min-h-[60vh] flex-col items-center justify-center px-6 text-center",
        className,
      )}
    >
      <div className="mb-4 inline-flex size-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
        {icon ?? <Construction className="size-6" aria-hidden />}
      </div>
      <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}

/* ────────────────────── ProfileSectionCard ──────────────────────── */

export interface ProfileSectionCardProps {
  title?: ReactNode;
  description?: ReactNode;
  /** Right-aligned header slot (e.g. "Edit" button). */
  headerAction?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
}

export const ProfileSectionCard = forwardRef<HTMLElement, ProfileSectionCardProps>(
  function ProfileSectionCard({ title, description, headerAction, children, footer, className, testId, id }, ref) {
    return (
      <section
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero(
          "overflow-hidden rounded-2xl border border-border bg-card",
          className,
        )}
      >
        {title || headerAction ? (
          <header className="flex flex-wrap items-start justify-between gap-3 border-b border-border px-5 py-4">
            <div className="min-w-0">
              {title ? <p className="text-sm font-semibold text-foreground">{title}</p> : null}
              {description ? <p className="text-xs text-muted-foreground">{description}</p> : null}
            </div>
            {headerAction ? <div className="shrink-0">{headerAction}</div> : null}
          </header>
        ) : null}
        {children ? <div className="px-5 py-4">{children}</div> : null}
        {footer ? <footer className="border-t border-border bg-card/95 px-5 py-3 text-xs text-muted-foreground">{footer}</footer> : null}
      </section>
    );
  },
);
ProfileSectionCard.displayName = "ProfileSectionCard";

/* ────────────────────── WorkPageShell ───────────────────────────── */

export interface WorkPageShellProps {
  /** Slot beneath the top bar — typically a `<SubNav />` row. */
  subNav?: ReactNode;
  /** Page title strip. */
  title?: ReactNode;
  subtitle?: ReactNode;
  /** Right-aligned page actions. */
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
  testId?: string;
}

export function WorkPageShell({ subNav, title, subtitle, actions, children, className, testId }: WorkPageShellProps) {
  return (
    <div data-testid={testId} className={cnHero("flex min-h-full flex-col bg-background", className)}>
      {subNav}
      {title || actions ? (
        <header className="flex flex-wrap items-end justify-between gap-3 border-b border-border bg-card px-4 py-4 md:px-6">
          <div className="min-w-0">
            {title ? (
              <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {title}
              </h1>
            ) : null}
            {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
          </div>
          {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
        </header>
      ) : null}
      <main className="flex-1 px-4 py-5 md:px-6">{children}</main>
    </div>
  );
}

/* ────────────────────── BusinessAvatarMark ──────────────────────── */

export interface BusinessAvatarMarkProps {
  /** Employer / business name — used for initials fallback and aria. */
  name: string;
  logoUrl?: string;
  size?: "sm" | "md" | "lg";
  /** Use light-on-dark chrome (for tinted backdrops). */
  tone?: "default" | "onTint";
  className?: string;
}

const MARK_SIZE: Record<NonNullable<BusinessAvatarMarkProps["size"]>, string> = {
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-14 text-base",
};

function markInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0] ?? "?";
  if (parts.length === 1) return first.slice(0, 2).toUpperCase();
  const last = parts[parts.length - 1] ?? first;
  return ((first[0] ?? "") + (last[0] ?? "")).toUpperCase();
}

export function BusinessAvatarMark({ name, logoUrl, size = "md", tone = "default", className }: BusinessAvatarMarkProps) {
  const cls = cnHero(
    "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md font-bold tracking-tight ring-1",
    MARK_SIZE[size],
    tone === "onTint" ? "bg-white/15 text-white ring-white/25" : "bg-muted/80 text-muted-foreground ring-border/50",
    className,
  );
  if (logoUrl) {
    return (
      <span className={cls} aria-label={name}>
        <img src={logoUrl} alt="" className="h-full w-full object-contain p-0.5" loading="lazy" />
      </span>
    );
  }
  return (
    <span className={cls} aria-label={name}>
      {markInitials(name)}
    </span>
  );
}
