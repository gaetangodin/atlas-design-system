/**
 * Candidates-domain compositions.
 *
 *  - `ContactCardPreview`        — compact preview of a candidate's contact card.
 *  - `CandidateSearchFilters`    — chip group for filtering candidate lists.
 *  - `InfiniteScrollSentinel`    — DOM sentinel for triggering load-more.
 */

import { type ReactNode, useEffect, useRef } from "react";
import { Mail, Phone, Linkedin, Globe } from "lucide-react";
import { Card, CardHeader, CardBody } from "../Card";
import { Avatar } from "../Avatar";
import { Chip } from "../Chip";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── ContactCardPreview ──────────────────────── */

export interface ContactCardPreviewProps {
  name: ReactNode;
  role?: ReactNode;
  initials?: string;
  avatarUrl?: string;
  email?: string;
  phone?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
  /** Trailing action area (e.g. "Save", "Share"). */
  actions?: ReactNode;
  className?: string;
}
export function ContactCardPreview({
  name, role, initials, avatarUrl, email, phone, linkedinUrl, websiteUrl, actions, className,
}: ContactCardPreviewProps) {
  return (
    <Card shadow="sm" className={className}>
      <CardHeader className="flex items-start gap-3">
        <Avatar size="md" src={avatarUrl} name={initials ?? (typeof name === "string" ? name.slice(0, 2) : "??")} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{name}</p>
          {role ? <p className="truncate text-xs text-muted-foreground">{role}</p> : null}
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </CardHeader>
      <CardBody className="grid gap-1.5">
        {email ? (
          <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-xs text-foreground hover:underline">
            <Mail className="size-3.5 text-muted-foreground" aria-hidden /> {email}
          </a>
        ) : null}
        {phone ? (
          <a href={`tel:${phone}`} className="inline-flex items-center gap-2 text-xs text-foreground hover:underline">
            <Phone className="size-3.5 text-muted-foreground" aria-hidden /> {phone}
          </a>
        ) : null}
        {linkedinUrl ? (
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-foreground hover:underline">
            <Linkedin className="size-3.5 text-muted-foreground" aria-hidden /> LinkedIn
          </a>
        ) : null}
        {websiteUrl ? (
          <a href={websiteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-foreground hover:underline">
            <Globe className="size-3.5 text-muted-foreground" aria-hidden /> {websiteUrl}
          </a>
        ) : null}
      </CardBody>
    </Card>
  );
}

/* ────────────────────── CandidateSearchFilters ──────────────────── */

export interface CandidateSearchFilter {
  id: string;
  label: ReactNode;
  /** Optional count badge after the label. */
  count?: number;
  selected?: boolean;
  onToggle?: () => void;
}
export interface CandidateSearchFiltersProps {
  filters: CandidateSearchFilter[];
  /** Optional clear-all action. */
  onClear?: () => void;
  className?: string;
}
export function CandidateSearchFilters({ filters, onClear, className }: CandidateSearchFiltersProps) {
  return (
    <div className={cnHero("flex flex-wrap items-center gap-1.5", className)}>
      {filters.map((f) => (
        <button
          key={f.id}
          type="button"
          onClick={f.onToggle}
          className={cnHero(
            "rounded-full border px-3 py-1 text-xs font-medium transition",
            f.selected
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-foreground hover:bg-muted",
          )}
        >
          {f.label}
          {typeof f.count === "number" ? (
            <span className={cnHero("ml-1 inline-block rounded-full px-1.5 py-0.5 text-[10px]", f.selected ? "bg-primary-foreground/20" : "bg-muted text-muted-foreground")}>
              {f.count}
            </span>
          ) : null}
        </button>
      ))}
      {onClear && filters.some((f) => f.selected) ? (
        <button
          type="button"
          onClick={onClear}
          className="ml-1 text-xs font-medium text-muted-foreground hover:text-foreground"
        >
          Clear
        </button>
      ) : null}
    </div>
  );
}

/* Re-export Chip for legacy alias used by old candidate-filter call sites. */
export { Chip as CandidateFilterChip };

/* ────────────────────── InfiniteScrollSentinel ──────────────────── */

export interface InfiniteScrollSentinelProps {
  /** Fires when the sentinel enters the viewport. */
  onIntersect: () => void;
  /** Intersection-observer root margin. Default "200px". */
  rootMargin?: string;
  /** Disable the observer (e.g., when no more pages). */
  disabled?: boolean;
  className?: string;
}
/**
 * Lightweight sentinel for infinite-scroll lists. Place at the bottom of
 * the scrollable region; the parent owns the data-loading state.
 */
export function InfiniteScrollSentinel({ onIntersect, rootMargin = "200px", disabled = false, className }: InfiniteScrollSentinelProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (disabled || !ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) onIntersect();
      },
      { rootMargin },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [disabled, onIntersect, rootMargin]);
  return <div ref={ref} aria-hidden className={cnHero("h-1 w-full", className)} />;
}
