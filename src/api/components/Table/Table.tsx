/**
 * Table — HeroUI native, restyled to brand. List-feel rather than
 * dense table-feel — generous row padding, soft hover, no heavy borders.
 */
import { forwardRef, type Ref } from "react";
import {
  Table as HeroUITable,
  TableHeader as HeroUITableHeader,
  TableColumn as HeroUITableColumn,
  TableBody as HeroUITableBody,
  TableRow as HeroUITableRow,
  TableCell as HeroUITableCell,
  type TableProps as HeroUITableProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type TableProps = HeroUITableProps;

export const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
  { classNames, radius = "lg", ...rest },
  ref,
) {
  return (
    <HeroUITable
      ref={ref as Ref<HTMLTableElement>}
      radius={radius}
      {...rest}
      classNames={{
        ...classNames,
        wrapper: cnHero(
          "rounded-lg border border-border bg-background shadow-none",
          classNames?.wrapper,
        ),
        th: cnHero(
          "bg-muted text-xs font-medium text-muted-foreground uppercase tracking-wide",
          classNames?.th,
        ),
        td: cnHero("text-sm text-foreground py-3", classNames?.td),
        tr: cnHero(
          "border-b border-border last:border-b-0 hover:bg-muted/50",
          classNames?.tr,
        ),
      }}
    />
  );
});
Table.displayName = "Table";

export const TableHeader = HeroUITableHeader;
export const TableColumn = HeroUITableColumn;
export const TableBody = HeroUITableBody;
export const TableRow = HeroUITableRow;
export const TableCell = HeroUITableCell;
