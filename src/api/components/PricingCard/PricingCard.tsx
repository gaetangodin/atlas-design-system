/**
 * PricingCard — single tier in a pricing table. Tier name, price,
 * cadence, feature list, primary CTA. Optional "highlighted" treatment
 * for the recommended plan.
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { Card, CardBody } from "../Card";
import { cnHero } from "../../../shared/cn-hero";

export interface PricingCardProps {
  tier: ReactNode;
  price: ReactNode;
  /** e.g. "/month" or "billed annually". */
  cadence?: ReactNode;
  description?: ReactNode;
  features: ReadonlyArray<ReactNode>;
  cta?: ReactNode;
  highlighted?: boolean;
  className?: string;
}

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M3 7.5L6 10.5L11 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PricingCard = forwardRef<HTMLDivElement, PricingCardProps>(function PricingCard(
  { tier, price, cadence, description, features, cta, highlighted = false, className },
  ref,
) {
  return (
    <Card
      ref={ref as Ref<HTMLDivElement>}
      shadow={highlighted ? "lg" : "sm"}
      className={cnHero(highlighted && "ring-2 ring-foreground", className)}
    >
      <CardBody>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">{tier}</span>
            {highlighted ? (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-foreground text-background text-xs font-medium">
                Recommended
              </span>
            ) : null}
          </div>
          <div className="flex items-baseline gap-1.5 mt-2">
            <span className="text-foreground tabular-nums" style={{ fontSize: 36, fontWeight: 600, lineHeight: 1 }}>
              {price}
            </span>
            {cadence ? <span className="text-sm text-muted-foreground">{cadence}</span> : null}
          </div>
          {description ? <p className="text-sm text-muted-foreground mt-2">{description}</p> : null}
        </div>
        <ul role="list" className="mt-4 flex flex-col gap-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground">
              <span className="inline-flex items-center justify-center size-4 rounded-full bg-foreground text-background mt-0.5 shrink-0">
                <Check />
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        {cta ? <div className="mt-5">{cta}</div> : null}
      </CardBody>
    </Card>
  );
});
PricingCard.displayName = "PricingCard";
