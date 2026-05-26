/**
 * Employers-domain compositions.
 *
 *  - `EmployerCaseloadShareBookmarkToolbar` — toolbar with share + bookmark + actions.
 *  - `EmployerIdentityCard`                 — compact identity card with logo, name, region.
 *  - `PublicEmployerProfileShell`           — slot-based public-facing employer profile layout.
 */

import { type ReactNode } from "react";
import { Bookmark, Share2, MoreHorizontal, Building2, MapPin } from "lucide-react";
import { Card, CardHeader, CardBody, CardFooter } from "../Card";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── EmployerCaseloadShareBookmarkToolbar ────── */

export interface EmployerCaseloadShareBookmarkToolbarProps {
  bookmarked?: boolean;
  onToggleBookmark?: () => void;
  onShare?: () => void;
  onMore?: () => void;
  /** Extra trailing slot for context-specific actions. */
  trailing?: ReactNode;
  className?: string;
}
export function EmployerCaseloadShareBookmarkToolbar({
  bookmarked, onToggleBookmark, onShare, onMore, trailing, className,
}: EmployerCaseloadShareBookmarkToolbarProps) {
  return (
    <div className={cnHero("flex items-center gap-1.5", className)}>
      <button
        type="button"
        onClick={onToggleBookmark}
        aria-pressed={!!bookmarked}
        aria-label={bookmarked ? "Remove bookmark" : "Bookmark"}
        className={cnHero(
          "inline-flex size-8 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-muted",
          bookmarked && "bg-spotlight/30",
        )}
      >
        <Bookmark className={cnHero("size-4", bookmarked && "fill-current")} />
      </button>
      <button
        type="button"
        onClick={onShare}
        aria-label="Share"
        className="inline-flex size-8 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-muted"
      >
        <Share2 className="size-4" />
      </button>
      {onMore ? (
        <button
          type="button"
          onClick={onMore}
          aria-label="More actions"
          className="inline-flex size-8 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-muted"
        >
          <MoreHorizontal className="size-4" />
        </button>
      ) : null}
      {trailing ? <div className="ml-1 flex items-center gap-1.5">{trailing}</div> : null}
    </div>
  );
}

/* ────────────────────── EmployerIdentityCard ────────────────────── */

export interface EmployerIdentityCardProps {
  name: ReactNode;
  /** Industry / category badge. */
  industry?: ReactNode;
  /** Region / city. */
  location?: ReactNode;
  logoUrl?: string;
  initials?: string;
  /** Trailing area (Save, Share, Status pill). */
  actions?: ReactNode;
  className?: string;
}
export function EmployerIdentityCard({ name, industry, location, logoUrl, initials, actions, className }: EmployerIdentityCardProps) {
  return (
    <div className={cnHero("flex items-center gap-3 rounded-2xl border border-border bg-card p-3", className)}>
      <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-muted text-xs font-semibold uppercase text-foreground">
        {logoUrl ? <img src={logoUrl} alt="" className="size-full object-cover" /> : initials ?? <Building2 className="size-4 text-muted-foreground" aria-hidden />}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{name}</p>
        <p className="mt-0.5 inline-flex items-center gap-1.5 truncate text-xs text-muted-foreground">
          {industry ? <span>{industry}</span> : null}
          {industry && location ? <span aria-hidden>·</span> : null}
          {location ? (
            <span className="inline-flex items-center gap-1">
              <MapPin className="size-3" aria-hidden /> {location}
            </span>
          ) : null}
        </p>
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
    </div>
  );
}

/* ────────────────────── PublicEmployerProfileShell ──────────────── */

export interface PublicEmployerProfileShellProps {
  /** Hero strip — full-bleed cover + identity row. */
  hero: ReactNode;
  /** Tab/section navigation. */
  nav?: ReactNode;
  /** Active tab body. */
  body: ReactNode;
  /** Right rail (open postings, follow CTA). */
  rightRail?: ReactNode;
  /** Footer (badges, attribution, last-updated). */
  footer?: ReactNode;
  className?: string;
}
export function PublicEmployerProfileShell({ hero, nav, body, rightRail, footer, className }: PublicEmployerProfileShellProps) {
  return (
    <article className={cnHero("flex w-full flex-col gap-4", className)}>
      {hero}
      {nav ? <nav className="border-b border-border">{nav}</nav> : null}
      <div className={cnHero("grid gap-4", rightRail ? "lg:grid-cols-[1fr_320px]" : "")}>
        <div className="min-w-0">{body}</div>
        {rightRail ? <aside className="flex flex-col gap-3">{rightRail}</aside> : null}
      </div>
      {footer ? <footer className="border-t border-border pt-3">{footer}</footer> : null}
    </article>
  );
}
