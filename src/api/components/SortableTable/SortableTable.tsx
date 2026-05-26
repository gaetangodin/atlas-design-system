/**
 * SortableTable — data-driven Table wrapper with sortable columns and
 * built-in pagination. Composes Atlas's `Table` and `Pagination`.
 *
 * For minor edits to a single column (renderer override, custom width)
 * pass `columns[i].render` / `columns[i].width`.
 */
"use client";
import { useMemo, useState, type ReactNode } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "../Table";
import { Pagination } from "../Pagination";
import { cnHero } from "../../../shared/cn-hero";

export interface SortableTableColumn<T> {
  key: keyof T & string;
  label: ReactNode;
  /** Allow sort on this column. Default true if values are primitives. */
  sortable?: boolean;
  width?: number | string;
  render?: (row: T) => ReactNode;
  align?: "start" | "center" | "end";
}

export interface SortableTableProps<T> {
  columns: ReadonlyArray<SortableTableColumn<T>>;
  rows: ReadonlyArray<T>;
  rowKey: keyof T & string;
  pageSize?: number;
  emptyContent?: ReactNode;
  onRowClick?: (row: T) => void;
  className?: string;
  ariaLabel?: string;
}

type SortDir = "asc" | "desc";

export function SortableTable<T extends object>({
  columns,
  rows,
  rowKey,
  pageSize = 10,
  emptyContent = "No results",
  onRowClick,
  className,
  ariaLabel = "Data table",
}: SortableTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [page, setPage] = useState(1);

  const sorted = useMemo(() => {
    if (!sortKey) return rows;
    const out = [...rows].sort((a, b) => {
      // Indexed access on a structural object — narrowed at runtime,
      // but TypeScript can't prove that for unknown column keys.
      const av = (a as Record<string, unknown>)[sortKey];
      const bv = (b as Record<string, unknown>)[sortKey];
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      if (typeof av === "number" && typeof bv === "number") return av - bv;
      return String(av).localeCompare(String(bv));
    });
    return sortDir === "asc" ? out : out.reverse();
  }, [rows, sortKey, sortDir]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const pageRows = sorted.slice((page - 1) * pageSize, page * pageSize);

  const onSort = (key: string) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  return (
    <div className={cnHero("flex flex-col gap-3", className)}>
      <Table aria-label={ariaLabel}>
        <TableHeader columns={columns as unknown as Array<{ key: string }>}>
          {(col) => {
            const c = col as unknown as SortableTableColumn<T>;
            const isSorted = sortKey === c.key;
            const sortable = c.sortable ?? true;
            return (
              <TableColumn
                key={c.key}
                style={c.width ? { width: c.width } : undefined}
                onClick={sortable ? () => onSort(c.key) : undefined}
                className={cnHero(
                  c.align === "end" && "text-right",
                  c.align === "center" && "text-center",
                  sortable && "cursor-pointer select-none",
                )}
              >
                <span className="inline-flex items-center gap-1.5">
                  {c.label}
                  {sortable ? (
                    <span aria-hidden="true" className={cnHero("text-muted-foreground", isSorted && "text-foreground")}>
                      {isSorted && sortDir === "asc" ? "▲" : isSorted && sortDir === "desc" ? "▼" : "↕"}
                    </span>
                  ) : null}
                </span>
              </TableColumn>
            );
          }}
        </TableHeader>
        <TableBody emptyContent={emptyContent}>
          {pageRows.map((row) => (
            <TableRow
              key={String((row as Record<string, unknown>)[rowKey])}
              className={onRowClick ? "cursor-pointer" : undefined}
              onClick={onRowClick ? () => onRowClick(row) : undefined}
            >
              {(columnKey: React.Key) => {
                const c = columns.find((x) => x.key === columnKey) as SortableTableColumn<T> | undefined;
                if (!c) return <TableCell>—</TableCell>;
                const v = c.render ? c.render(row) : ((row as Record<string, unknown>)[c.key] as ReactNode);
                return (
                  <TableCell
                    className={cnHero(
                      c.align === "end" && "text-right",
                      c.align === "center" && "text-center",
                    )}
                  >
                    {v}
                  </TableCell>
                );
              }}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {totalPages > 1 ? (
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {Math.min((page - 1) * pageSize + 1, sorted.length)}–
            {Math.min(page * pageSize, sorted.length)} of {sorted.length}
          </span>
          <Pagination total={totalPages} page={page} onChange={setPage} />
        </div>
      ) : null}
    </div>
  );
}
