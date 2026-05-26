/**
 * ConsentAlertBar — connection-request consent bar with staff /
 * client perspectives.
 *
 * Ported from Xeekrs (`messages/ConsentAlertBar.tsx`). Two
 * perspectives:
 *   - `staff`  — recruiter view; "View terms" + "Revoke request"
 *   - `client` — candidate view; "View terms" + "Accept"
 *
 * Visual chrome uses Atlas's `earth-900` named utility (was `#122120`
 * inline in Xeekrs — now resolves via the brand ramp). The light-yellow
 * accent `#F8FFCB` stays as a literal — it's a Xeekrs accent not yet
 * tokenized as a ramp (flagged in MIGRATION-CONFLICTS.md).
 */

import { forwardRef } from "react";
import {
  Briefcase,
  Check,
  HelpCircle,
  MapPin,
  UserPlus,
} from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";
import { Tooltip } from "../Tooltip";

export type ConsentPerspective = "staff" | "client";

export interface ConsentAlertBarProps {
  perspective: ConsentPerspective;
  /** Primary label — anonymized ref for staff-pending threads. */
  displayName: string;
  participantRole?: string | null;
  location?: string | null;
  photoUrl?: string | null;
  /** Initials shown when no `photoUrl`. */
  avatarInitials?: string;
  /** Caption (e.g. "Sent 2m ago") beneath the identity block. */
  metaHint?: string | null;
  onViewTerms?: () => void;
  onAccept?: () => void;
  onRevoke?: () => void;
  className?: string;
  testId?: string;
  id?: string;
}

const SHELL =
  "pointer-events-auto relative mx-auto flex w-full max-w-[min(22rem,calc(100vw-2rem))] flex-col gap-3 rounded-3xl border-0 bg-earth-900 p-3 text-[#F8FFCB] shadow-md ring-1 ring-[#F8FFCB]/35 backdrop-blur-sm";

const FOOTER_ROW = "flex items-center gap-2 border-t border-[#F8FFCB]/15 pt-2.5";

const GHOST_BTN =
  "h-8 flex-1 rounded-full bg-transparent text-xs font-semibold text-[#F8FFCB]/80 transition-colors hover:bg-[#F8FFCB]/10 hover:text-[#F8FFCB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8FFCB]";

export const ConsentAlertBar = forwardRef<HTMLDivElement, ConsentAlertBarProps>(
  function ConsentAlertBar(
    {
      perspective,
      displayName,
      participantRole,
      location,
      photoUrl,
      avatarInitials = "?",
      metaHint,
      onViewTerms,
      onAccept,
      onRevoke,
      className,
      testId,
      id,
    },
    ref,
  ) {
    const hasPhoto = Boolean(photoUrl && /^https?:\/\//i.test(photoUrl));
    const role = participantRole?.trim() || null;
    const loc = location?.trim() || null;

    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        role="status"
        aria-live="polite"
        className={cnHero(SHELL, className)}
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#F8FFCB]/15 text-[#F8FFCB] ring-1 ring-[#F8FFCB]/30">
            <UserPlus className="size-3.5" strokeWidth={2} aria-hidden />
          </span>
          <p className="m-0 flex-1 text-sm font-medium tracking-wide text-[#F8FFCB]/95">
            New connection request
          </p>
        </div>

        <div className="flex items-stretch gap-3">
          {hasPhoto ? (
            <div className="relative aspect-square h-full min-h-10 shrink-0" aria-hidden>
              <img
                src={photoUrl!}
                alt=""
                className="absolute inset-0 size-full rounded-full border border-[#F8FFCB]/30 object-cover"
              />
            </div>
          ) : (
            <div
              className="flex aspect-square h-full min-h-10 shrink-0 items-center justify-center rounded-full border border-[#F8FFCB]/30 bg-[#F8FFCB]/15 text-xs font-semibold text-[#F8FFCB]"
              aria-hidden
            >
              {avatarInitials}
            </div>
          )}
          <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-1">
            <h3 className="truncate text-sm font-semibold text-[#F8FFCB]">
              {displayName}
            </h3>
            {role ? (
              <span className="inline-flex w-fit max-w-full items-center gap-1 rounded-full border border-[#F8FFCB]/25 bg-[#F8FFCB]/10 px-2 py-0.5 text-xs font-semibold text-[#F8FFCB]/90">
                <Briefcase className="size-3 shrink-0" aria-hidden />
                <span className="truncate">{role}</span>
              </span>
            ) : null}
            {loc ? (
              <div className="flex items-center gap-1.5 text-xs text-[#F8FFCB]/70">
                <MapPin className="size-3 shrink-0" aria-hidden />
                <span className="truncate">{loc}</span>
              </div>
            ) : null}
            {metaHint ? (
              <p className="m-0 text-xs font-medium text-[#F8FFCB]/55">{metaHint}</p>
            ) : null}
          </div>
        </div>

        <div className={FOOTER_ROW}>
          <button type="button" onClick={onViewTerms} className={GHOST_BTN}>
            View terms
          </button>
          <div className="flex min-w-0 flex-1 items-center gap-1">
            {perspective === "staff" ? (
              <button
                type="button"
                onClick={onRevoke}
                className="h-8 min-w-0 flex-1 rounded-full border border-red-400/45 bg-red-950/80 text-xs font-semibold text-red-100 shadow-sm transition-colors hover:bg-red-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300/50"
              >
                Revoke request
              </button>
            ) : (
              <button
                type="button"
                onClick={onAccept}
                className="inline-flex h-8 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full border-0 bg-[#F8FFCB] text-xs font-semibold text-earth-900 shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8FFCB]"
              >
                <Check className="size-3.5 shrink-0" aria-hidden />
                Accept
              </button>
            )}
            <Tooltip
              content={
                perspective === "staff"
                  ? "The candidate must accept before their profile and identity details unlock in this thread. You can revoke the invite while they review."
                  : "Accepting grants consent for this organization to message you with identifying details visible in Messages and related workflows."
              }
              placement="top"
            >
              <button
                type="button"
                aria-label={
                  perspective === "staff"
                    ? "Why this request is pending"
                    : "What happens when you accept"
                }
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-[#F8FFCB]/80 transition-colors hover:bg-[#F8FFCB]/10 hover:text-[#F8FFCB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8FFCB]"
              >
                <HelpCircle className="size-4" strokeWidth={2} aria-hidden />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  },
);

ConsentAlertBar.displayName = "ConsentAlertBar";
