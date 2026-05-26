/**
 * ProfileCardToolbar — right-aligned action row used at the top of a
 * recruitment profile card.
 *
 * Houses bookmark, share, more-actions, and primary-CTA. Atlas takes
 * arbitrary slot content — apps assemble the actions they need from
 * `QuickActionButton` / `Button` / `Dropdown`.
 */

import { forwardRef, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface ProfileCardToolbarProps {
  /** Left-side content — typically status pills (Readiness, Match). */
  leading?: ReactNode;
  /** Right-side actions — QuickActionButtons, Dropdown, primary CTA. */
  trailing?: ReactNode;
  /** Make the toolbar sticky at the top of a scrollable parent. */
  sticky?: boolean;
  className?: string;
  testId?: string;
  id?: string;
}

export const ProfileCardToolbar = forwardRef<HTMLDivElement, ProfileCardToolbarProps>(
  function ProfileCardToolbar(
    { leading, trailing, sticky = false, className, testId, id },
    ref,
  ) {
    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero(
          "flex flex-wrap items-center justify-between gap-3 border-b border-border bg-card/95 px-4 py-3",
          sticky && "sticky top-0 z-20 backdrop-blur",
          className,
        )}
      >
        <div className="flex flex-wrap items-center gap-2">{leading}</div>
        <div className="flex flex-wrap items-center gap-1.5">{trailing}</div>
      </div>
    );
  },
);

ProfileCardToolbar.displayName = "ProfileCardToolbar";
