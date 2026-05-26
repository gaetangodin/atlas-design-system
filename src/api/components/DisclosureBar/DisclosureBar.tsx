/**
 * DisclosureBar — inline consent / disclosure message strip.
 *
 * Ported from Xeekrs (`DisclosurePlainMessageBar.tsx`). Used to surface
 * legal/consent notices that don't warrant a full Alert: GDPR copy on
 * job postings, "we share this data with…" notes, recruitment consent
 * messaging.
 *
 * For staff-vs-client variants on the consent flow, use Atlas's
 * `ConsentBar` (separate component — adds the action slot).
 */

import { forwardRef, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export type DisclosureBarVariant = "default" | "notice";

export interface DisclosureBarProps {
  /** The message displayed. Plain text or inline-formatted children. */
  message: ReactNode;
  variant?: DisclosureBarVariant;
  className?: string;
  testId?: string;
  id?: string;
}

const VARIANT_CLASS: Record<DisclosureBarVariant, string> = {
  default:
    "border-muted-foreground/15 bg-muted/35 text-muted-foreground",
  // Amber-tinted notice — bookmarked from Xeekrs's job-posting flow.
  notice:
    "border-amber-300/80 bg-amber-50/70 text-amber-950",
};

export const DisclosureBar = forwardRef<HTMLParagraphElement, DisclosureBarProps>(
  function DisclosureBar(
    { message, variant = "default", className, testId, id },
    ref,
  ) {
    return (
      <p
        ref={ref}
        id={id}
        role="status"
        data-testid={testId}
        className={cnHero(
          "m-0 rounded-lg border px-3 py-2.5 text-sm leading-snug",
          VARIANT_CLASS[variant],
          className,
        )}
      >
        {message}
      </p>
    );
  },
);

DisclosureBar.displayName = "DisclosureBar";
