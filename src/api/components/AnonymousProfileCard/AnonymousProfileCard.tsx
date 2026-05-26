/**
 * AnonymousProfileCard — recruitment profile card with optional
 * anonymization (pre-consent).
 *
 * Composes Atlas primitives that landed in earlier batches:
 *   - `ProfileIdentityWell` for the name + avatar + role + location block.
 *   - `ProfileCardToolbar` for the top action row.
 *   - `ReadinessBadge` + `MatchDiamond` pill for status chips.
 *   - `QuickActionButton` row for contact actions.
 *
 * The full Xeekrs `AnonymousProfileCard` (380+ lines) is heavily
 * coupled to its data shape; Atlas ships the assembled card shape and
 * apps adapt their data via the simple prop API below.
 */

import { forwardRef, type ReactNode } from "react";
import { Card, CardBody, CardHeader } from "../Card";
import { Divider } from "../Divider";
import { ProfileCardToolbar } from "../ProfileCardToolbar";
import { ProfileIdentityWell } from "../ProfileIdentityWell";
import { cnHero } from "../../../shared/cn-hero";

export interface AnonymousProfileCardProps {
  /** Display name — replaced with "Anonymous candidate" when anonymized. */
  name: string;
  initials?: string;
  photoUrl?: string;
  role?: string | null;
  location?: string | null;
  /** Hides photo + name even if provided. */
  isAnonymous?: boolean;

  /** Status badges shown in the identity well (top-right). */
  identityBadges?: ReactNode;
  /** Toolbar left content — typically Readiness + Match pills. */
  toolbarLeading?: ReactNode;
  /** Toolbar right content — actions, dropdown, bookmark. */
  toolbarTrailing?: ReactNode;
  /** Quick-action row beneath the identity well (call / chat / email). */
  quickActions?: ReactNode;

  /** Body content — skill fit accordion, applicant docs, etc. */
  children?: ReactNode;

  /** Footer slot — meta row (applied X days ago, …). */
  footer?: ReactNode;

  className?: string;
  testId?: string;
  id?: string;
}

export const AnonymousProfileCard = forwardRef<HTMLDivElement, AnonymousProfileCardProps>(
  function AnonymousProfileCard(
    {
      name,
      initials,
      photoUrl,
      role,
      location,
      isAnonymous = false,
      identityBadges,
      toolbarLeading,
      toolbarTrailing,
      quickActions,
      children,
      footer,
      className,
      testId,
      id,
    },
    ref,
  ) {
    return (
      <Card ref={ref} id={id} testId={testId} className={cnHero("overflow-hidden", className)}>
        {toolbarLeading || toolbarTrailing ? (
          <ProfileCardToolbar leading={toolbarLeading} trailing={toolbarTrailing} />
        ) : null}
        <CardHeader>
          <ProfileIdentityWell
            name={name}
            initials={initials}
            photoUrl={photoUrl}
            role={role}
            location={location}
            isAnonymous={isAnonymous}
            badges={identityBadges}
          />
        </CardHeader>
        {quickActions ? (
          <div className="px-6 pb-3">
            <div className="flex flex-wrap items-center gap-1.5">{quickActions}</div>
          </div>
        ) : null}
        {children ? (
          <>
            <Divider />
            <CardBody>{children}</CardBody>
          </>
        ) : null}
        {footer ? (
          <>
            <Divider />
            <div className="px-6 py-3 text-xs text-muted-foreground">{footer}</div>
          </>
        ) : null}
      </Card>
    );
  },
);

AnonymousProfileCard.displayName = "AnonymousProfileCard";
