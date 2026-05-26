/**
 * ProfileRoute — record-profile page-shell layout.
 *
 * Pattern: hero band → identity well + KPI strip → tabbed content.
 * Specialization of DetailRoute aimed at person / employer profiles.
 */

import { forwardRef, type ReactNode } from "react";
import { DetailRoute } from "../DetailRoute";

export interface ProfileRouteProps {
  hero?: ReactNode;
  toolbar?: ReactNode;
  /** Identity block — typically `<ProfileIdentityWell />`. */
  identity?: ReactNode;
  /** Horizontal KPI strip beneath the identity well. */
  kpis?: ReactNode;
  /** Tab bar — typically `<Tabs />`. */
  tabs?: ReactNode;
  /** Active tab content. */
  children?: ReactNode;
  rightRail?: ReactNode;
  footer?: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
}

export const ProfileRoute = forwardRef<HTMLDivElement, ProfileRouteProps>(
  function ProfileRoute(
    { hero, toolbar, identity, kpis, tabs, children, rightRail, footer, className, testId, id },
    ref,
  ) {
    return (
      <DetailRoute
        ref={ref}
        id={id}
        testId={testId}
        className={className}
        hero={hero}
        toolbar={toolbar}
        rightRail={rightRail}
        footer={footer}
      >
        {identity ? (
          <section className="rounded-2xl border border-border bg-card p-5">
            {identity}
          </section>
        ) : null}
        {kpis ? (
          <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{kpis}</section>
        ) : null}
        {tabs ? <section>{tabs}</section> : null}
        {children ? <section>{children}</section> : null}
      </DetailRoute>
    );
  },
);

ProfileRoute.displayName = "ProfileRoute";
