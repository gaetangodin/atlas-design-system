/**
 * FeatureGrid — grid of feature tiles. Each tile = icon + title + body.
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface FeatureGridItem {
  id: string;
  icon?: ReactNode;
  title: ReactNode;
  body: ReactNode;
}

export interface FeatureGridProps {
  items: FeatureGridItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const colsClass = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

export const FeatureGrid = forwardRef<HTMLDivElement, FeatureGridProps>(function FeatureGrid(
  { items, columns = 3, className },
  ref,
) {
  return (
    <div
      ref={ref as Ref<HTMLDivElement>}
      className={cnHero("grid grid-cols-1 gap-x-6 gap-y-10", colsClass[columns], className)}
    >
      {items.map((it) => (
        <div key={it.id} className="flex flex-col gap-3">
          {it.icon ? (
            <span className="inline-flex items-center justify-center size-10 rounded-lg bg-muted text-foreground [&_svg]:size-5">
              {it.icon}
            </span>
          ) : null}
          <div>
            <div className="text-base font-medium text-foreground">{it.title}</div>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{it.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
});
FeatureGrid.displayName = "FeatureGrid";
