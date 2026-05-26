/**
 * ColumnSelector — popover-based "show / hide columns" picker for
 * tables and dashboards.
 *
 * Renders a labeled trigger pill that opens a Popover with a checkbox
 * list of column definitions. Controlled — apps own which columns are
 * visible; this component just renders + dispatches changes.
 */

import { forwardRef } from "react";
import { Columns3 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { Checkbox } from "../Checkbox";
import { cnHero } from "../../../shared/cn-hero";

export interface ColumnDefinition {
  id: string;
  label: string;
  /** Set true to disable toggling (sticky / required column). */
  isLocked?: boolean;
}

export interface ColumnSelectorProps {
  columns: ColumnDefinition[];
  /** Visible column ids. */
  visibleIds: string[];
  onChange: (visibleIds: string[]) => void;
  /** Trigger label — defaults to "Columns". */
  triggerLabel?: string;
  className?: string;
  testId?: string;
  id?: string;
}

export const ColumnSelector = forwardRef<HTMLDivElement, ColumnSelectorProps>(
  function ColumnSelector(
    { columns, visibleIds, onChange, triggerLabel = "Columns", className, testId, id },
    ref,
  ) {
    const toggle = (col: ColumnDefinition): void => {
      if (col.isLocked) return;
      const next = visibleIds.includes(col.id)
        ? visibleIds.filter((x) => x !== col.id)
        : [...visibleIds, col.id];
      onChange(next);
    };
    const visibleCount = visibleIds.length;
    return (
      <div ref={ref} id={id} data-testid={testId} className={cnHero(className)}>
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Columns3 className="size-3.5 shrink-0" aria-hidden />
              {triggerLabel}
              <span className="ml-1 inline-flex min-w-5 items-center justify-center rounded-full bg-muted px-1.5 text-[10px] font-bold leading-5 text-muted-foreground">
                {visibleCount}/{columns.length}
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="min-w-[14rem] space-y-2 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Columns
              </p>
              <ul className="space-y-1.5">
                {columns.map((col) => {
                  const checked = visibleIds.includes(col.id);
                  return (
                    <li key={col.id}>
                      <label
                        className={cnHero(
                          "flex items-center gap-2 rounded-md px-1.5 py-1 text-sm transition-colors",
                          col.isLocked
                            ? "cursor-not-allowed opacity-60"
                            : "cursor-pointer hover:bg-muted/60",
                        )}
                      >
                        <Checkbox
                          isSelected={checked}
                          isDisabled={col.isLocked}
                          onValueChange={() => toggle(col)}
                        />
                        <span className="text-foreground">{col.label}</span>
                        {col.isLocked ? (
                          <span className="ml-auto text-xs text-muted-foreground">locked</span>
                        ) : null}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
);

ColumnSelector.displayName = "ColumnSelector";
