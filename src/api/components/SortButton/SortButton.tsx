/**
 * SortButton — table column header sort affordance.
 *
 * Renders a label with an inline up/down arrow. Three states:
 * `asc` / `desc` / `none`. Click cycles through them via `onSort`.
 */
import { forwardRef } from "react";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

export type SortDirection = "asc" | "desc" | "none";

export interface SortButtonProps {
  label: string;
  direction?: SortDirection;
  onSort?: (next: SortDirection) => void;
  className?: string;
  testId?: string;
}

function nextDirection(d: SortDirection): SortDirection {
  if (d === "none") return "asc";
  if (d === "asc") return "desc";
  return "none";
}

export const SortButton = forwardRef<HTMLButtonElement, SortButtonProps>(
  function SortButton({ label, direction = "none", onSort, className, testId }, ref) {
    const Icon = direction === "asc" ? ArrowUp : direction === "desc" ? ArrowDown : ArrowUpDown;
    const isActive = direction !== "none";
    return (
      <button
        ref={ref}
        type="button"
        data-testid={testId}
        aria-sort={direction === "asc" ? "ascending" : direction === "desc" ? "descending" : "none"}
        onClick={() => onSort?.(nextDirection(direction))}
        className={cnHero(
          "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-semibold tracking-wide transition-colors hover:bg-muted/60",
          isActive ? "text-foreground" : "text-muted-foreground",
          className,
        )}
      >
        {label}
        <Icon className="size-3" aria-hidden />
      </button>
    );
  },
);
SortButton.displayName = "SortButton";
