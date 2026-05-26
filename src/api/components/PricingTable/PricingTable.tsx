/**
 * PricingTable — row of `PricingCard`s with shared header text.
 * Highlight a recommended tier; cards stack on mobile.
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { PricingCard, type PricingCardProps } from "../PricingCard";
import { cnHero } from "../../../shared/cn-hero";

export interface PricingTableTier extends PricingCardProps {
  id: string;
}

export interface PricingTableProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  body?: ReactNode;
  tiers: PricingTableTier[];
  className?: string;
}

const colsClass = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

export const PricingTable = forwardRef<HTMLDivElement, PricingTableProps>(function PricingTable(
  { eyebrow, title, body, tiers, className },
  ref,
) {
  const cols = (Math.min(4, Math.max(2, tiers.length)) as 2 | 3 | 4);
  return (
    <div ref={ref as Ref<HTMLDivElement>} className={cnHero("flex flex-col gap-8", className)}>
      {(eyebrow || title || body) && (
        <div className="text-center max-w-2xl mx-auto">
          {eyebrow ? (
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-3">{eyebrow}</div>
          ) : null}
          {title ? (
            <h2 style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 600 }} className="text-foreground tracking-tight">
              {title}
            </h2>
          ) : null}
          {body ? <p className="mt-3 text-base text-muted-foreground leading-relaxed">{body}</p> : null}
        </div>
      )}
      <div className={cnHero("grid grid-cols-1 gap-6", colsClass[cols])}>
        {tiers.map(({ id, ...tier }) => (
          <PricingCard key={id} {...tier} />
        ))}
      </div>
    </div>
  );
});
PricingTable.displayName = "PricingTable";
