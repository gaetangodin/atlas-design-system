/**
 * Incentives-domain compositions.
 *
 *  - `IncentiveTierAssignCard` — card showing a tier (Bronze/Silver/Gold/etc.)
 *                                with its perks, eligibility, and an assign CTA.
 */

import { type ReactNode } from "react";
import { Award, Check } from "lucide-react";
import { Card, CardHeader, CardBody, CardFooter } from "../Card";
import { cnHero } from "../../../shared/cn-hero";

export type IncentiveTierTone = "bronze" | "silver" | "gold" | "platinum" | "neutral";

const TIER_RING: Record<IncentiveTierTone, string> = {
  bronze: "bg-orange-100 text-orange-900",
  silver: "bg-stone-200 text-foreground",
  gold: "bg-canary-100 text-foreground",
  platinum: "bg-lavender-200 text-foreground",
  neutral: "bg-muted text-foreground",
};

export interface IncentiveTierAssignCardProps {
  tierName: ReactNode;
  /** Short eligibility description. */
  description?: ReactNode;
  /** Bullet-list of perks included with this tier. */
  perks?: ReactNode[];
  /** Optional sub-line metric (e.g. "Active in 4 regions"). */
  metric?: ReactNode;
  tone?: IncentiveTierTone;
  /** Whether this tier is already assigned to the subject. */
  assigned?: boolean;
  assignLabel?: ReactNode;
  onAssign?: () => void;
  /** Disable the assign button. */
  disabled?: boolean;
  className?: string;
}
export function IncentiveTierAssignCard({
  tierName, description, perks = [], metric, tone = "neutral",
  assigned, assignLabel = "Assign tier", onAssign, disabled, className,
}: IncentiveTierAssignCardProps) {
  return (
    <Card shadow="sm" className={className}>
      <CardHeader className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <span className={cnHero("inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide", TIER_RING[tone])}>
            <Award className="size-3" aria-hidden /> {tierName}
          </span>
          {description ? <p className="mt-1.5 text-sm text-foreground">{description}</p> : null}
          {metric ? <p className="mt-0.5 text-xs text-muted-foreground">{metric}</p> : null}
        </div>
      </CardHeader>
      {perks.length > 0 ? (
        <CardBody>
          <ul className="grid gap-1 text-xs text-foreground">
            {perks.map((p, i) => (
              <li key={i} className="inline-flex items-start gap-1.5">
                <Check className="mt-0.5 size-3.5 text-emerald-700" aria-hidden /> <span>{p}</span>
              </li>
            ))}
          </ul>
        </CardBody>
      ) : null}
      <CardFooter className="justify-end">
        <button
          type="button"
          onClick={onAssign}
          disabled={disabled || assigned}
          className={cnHero(
            "rounded-full px-3 py-1.5 text-xs font-semibold transition",
            assigned
              ? "bg-emerald-100 text-emerald-900"
              : "bg-primary text-primary-foreground hover:bg-primary/90",
            (disabled || assigned) && !assigned && "opacity-50",
          )}
        >
          {assigned ? "Assigned" : assignLabel}
        </button>
      </CardFooter>
    </Card>
  );
}
