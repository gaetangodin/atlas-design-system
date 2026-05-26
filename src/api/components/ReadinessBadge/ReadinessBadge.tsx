/**
 * ReadinessBadge — recruitment readiness pill ("Interview-Ready",
 * "Active", "Training Phase", "Other").
 *
 * Ported from Xeekrs (`candidates/AnonymousProfileCard.tsx →
 * readinessStageBadgeClassName`). Atlas exposes the four named stages
 * directly via a `stage` prop; apps that need additional stages can
 * fall through to `"default"` styling via a string they pass in.
 *
 * Note: Xeekrs uses Tailwind core `green` / `blue` / `yellow` / `gray`
 * scales for these stages because they're status-of-the-week signals,
 * not part of the brand ramps. Kept verbatim.
 */

import { forwardRef, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

export type ReadinessStage =
  | "Interview-Ready"
  | "Active"
  | "Training Phase"
  | "Other";

export interface ReadinessBadgeProps {
  stage: ReadinessStage | (string & {});
  /** Override the default label (defaults to the stage string itself). */
  children?: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
}

const BASE =
  "inline-flex items-center justify-center rounded-full border px-2.5 py-1 text-xs font-medium";

export function readinessStageClassName(stage: string): string {
  switch (stage) {
    case "Interview-Ready":
      return "bg-green-100 text-green-700 border-green-700";
    case "Active":
      return "bg-blue-100 text-blue-700 border-blue-700";
    case "Training Phase":
      return "bg-yellow-100 text-yellow-700 border-yellow-700";
    default:
      return "bg-gray-100 text-gray-700 border-gray-700";
  }
}

export const ReadinessBadge = forwardRef<HTMLSpanElement, ReadinessBadgeProps>(
  function ReadinessBadge({ stage, children, className, testId, id }, ref) {
    return (
      <span
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero(BASE, readinessStageClassName(stage), className)}
      >
        {children ?? stage}
      </span>
    );
  },
);

ReadinessBadge.displayName = "ReadinessBadge";
