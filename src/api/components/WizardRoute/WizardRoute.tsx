/**
 * WizardRoute — multi-step form / posting / onboarding shell.
 *
 * Pattern: `PostingStepper` (or any stepper) on the left → step
 * content in the center → sticky footer with prev/next/save actions.
 *
 * Used for posting flows, onboarding wizards, resume builder, project
 * creation. Steps + actions are app concern; this is the chrome.
 */

import { forwardRef, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface WizardRouteProps {
  /** Left rail — typically `<PostingStepper />`. */
  stepper?: ReactNode;
  /** Step heading. */
  title?: ReactNode;
  /** Step subtitle / instructions. */
  subtitle?: ReactNode;
  /** Step body — the form fields. */
  children?: ReactNode;
  /** Sticky footer actions (Back / Save / Continue). */
  footerActions?: ReactNode;
  /** Optional right-rail (preview, AI assist panel). */
  rightRail?: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
}

export const WizardRoute = forwardRef<HTMLDivElement, WizardRouteProps>(
  function WizardRoute(
    { stepper, title, subtitle, children, footerActions, rightRail, className, testId, id },
    ref,
  ) {
    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero("flex min-h-full flex-col bg-background", className)}
      >
        <div className="flex min-h-0 flex-1 gap-6 px-4 py-6 md:px-6">
          {stepper ? (
            <aside className="hidden w-64 shrink-0 lg:block">{stepper}</aside>
          ) : null}
          <main className="min-w-0 flex-1 space-y-5">
            {title || subtitle ? (
              <header>
                {title ? (
                  <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {title}
                  </h2>
                ) : null}
                {subtitle ? (
                  <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
                ) : null}
              </header>
            ) : null}
            <div className="space-y-5">{children}</div>
          </main>
          {rightRail ? (
            <aside className="hidden w-72 shrink-0 lg:block">{rightRail}</aside>
          ) : null}
        </div>
        {footerActions ? (
          <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-end gap-2 border-t border-border bg-card/95 px-4 py-3 backdrop-blur md:px-6">
            {footerActions}
          </div>
        ) : null}
      </div>
    );
  },
);

WizardRoute.displayName = "WizardRoute";
