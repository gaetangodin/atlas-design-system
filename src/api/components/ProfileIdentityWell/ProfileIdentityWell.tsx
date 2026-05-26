/**
 * ProfileIdentityWell — name + avatar + role + location block at the
 * top of a recruitment profile card.
 *
 * Renders a portrait-style identity panel. Supports anonymized state
 * (no photo + initials) for pre-consent surfaces.
 */

import { forwardRef, type ReactNode } from "react";
import { Briefcase, MapPin } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

export interface ProfileIdentityWellProps {
  name: string;
  /** Falls back to first/last initials of `name`. */
  initials?: string;
  photoUrl?: string;
  role?: string | null;
  location?: string | null;
  /** Trailing badges (Readiness, Match). */
  badges?: ReactNode;
  /** Footer slot — typically credentials, headline. */
  footer?: ReactNode;
  /** Tone: "anonymous" hides photo even if provided. */
  isAnonymous?: boolean;
  className?: string;
  testId?: string;
  id?: string;
}

function autoInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0 || !parts[0]) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const ProfileIdentityWell = forwardRef<HTMLDivElement, ProfileIdentityWellProps>(
  function ProfileIdentityWell(
    {
      name,
      initials,
      photoUrl,
      role,
      location,
      badges,
      footer,
      isAnonymous = false,
      className,
      testId,
      id,
    },
    ref,
  ) {
    const showPhoto = !isAnonymous && photoUrl;
    const resolvedInitials = initials ?? autoInitials(name);
    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero("flex items-start gap-4", className)}
      >
        <div
          className={cnHero(
            "flex aspect-square h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border",
            isAnonymous ? "bg-muted text-muted-foreground" : "bg-card",
          )}
        >
          {showPhoto ? (
            <img
              src={photoUrl}
              alt={name}
              className="h-full w-full object-cover"
              draggable={false}
            />
          ) : (
            <span className="text-xl font-bold tabular-nums">{resolvedInitials}</span>
          )}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className="truncate font-heading text-lg font-semibold tracking-tight text-foreground">
              {isAnonymous ? "Anonymous candidate" : name}
            </h3>
            {badges ? (
              <div className="flex flex-wrap items-center gap-1.5">{badges}</div>
            ) : null}
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            {role ? (
              <span className="inline-flex items-center gap-1">
                <Briefcase className="size-3.5 shrink-0" aria-hidden />
                <span className="truncate">{role}</span>
              </span>
            ) : null}
            {location ? (
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3.5 shrink-0" aria-hidden />
                <span className="truncate">{location}</span>
              </span>
            ) : null}
          </div>
          {footer ? <div className="text-xs text-muted-foreground">{footer}</div> : null}
        </div>
      </div>
    );
  },
);

ProfileIdentityWell.displayName = "ProfileIdentityWell";
