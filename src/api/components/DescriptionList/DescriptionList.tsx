/**
 * DescriptionList — `<dl>` for key/value pairs. Wide use in detail
 * pages, receipts, profile cards.
 *
 * Layouts: stacked (label above), inline (label left, value right).
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface DescriptionListItem {
  label: ReactNode;
  value: ReactNode;
}

export interface DescriptionListProps {
  items: DescriptionListItem[];
  layout?: "stacked" | "inline";
  divided?: boolean;
  className?: string;
}

export const DescriptionList = forwardRef<HTMLDListElement, DescriptionListProps>(
  function DescriptionList({ items, layout = "inline", divided = true, className }, ref) {
    return (
      <dl
        ref={ref as Ref<HTMLDListElement>}
        className={cnHero(
          "flex flex-col",
          divided ? "[&>div+div]:border-t [&>div+div]:border-border" : "gap-3",
          className,
        )}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className={cnHero(
              "py-2",
              layout === "inline" ? "flex items-baseline justify-between gap-4" : "flex flex-col gap-1",
            )}
          >
            <dt className="text-sm text-muted-foreground">{item.label}</dt>
            <dd className="text-sm text-foreground font-medium">{item.value}</dd>
          </div>
        ))}
      </dl>
    );
  },
);
DescriptionList.displayName = "DescriptionList";
