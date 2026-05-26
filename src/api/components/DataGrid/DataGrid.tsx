/**
 * DataGrid — table with inline-editable cells. Lightweight: each
 * editable column declares its editor (`text` | `number` | `select`).
 * State is uncontrolled; use `onCellChange` for persistence.
 *
 * For richer needs (virtualization, drag columns, formula evaluation)
 * graduate to TanStack Table or AG Grid.
 */
"use client";
import { useState, type ReactNode, type Key } from "react";
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
} from "../Table";
import { cnHero } from "../../../shared/cn-hero";

type EditorType = "text" | "number" | "select";

export interface DataGridColumn<T> {
  key: keyof T & string;
  label: ReactNode;
  editable?: boolean;
  editor?: EditorType;
  options?: ReadonlyArray<{ value: string; label: string }>;
  width?: number | string;
  render?: (row: T) => ReactNode;
}

export interface DataGridProps<T> {
  columns: ReadonlyArray<DataGridColumn<T>>;
  rows: ReadonlyArray<T>;
  rowKey: keyof T & string;
  onCellChange?: (rowId: string | number, key: string, value: unknown) => void;
  className?: string;
  ariaLabel?: string;
}

export function DataGrid<T extends object>({
  columns,
  rows,
  rowKey,
  onCellChange,
  className,
  ariaLabel = "Editable data grid",
}: DataGridProps<T>) {
  const [editing, setEditing] = useState<{ row: string | number; key: string } | null>(null);

  return (
    <Table aria-label={ariaLabel} className={className}>
      <TableHeader columns={columns as unknown as Array<{ key: string }>}>
        {(col) => {
          const c = col as unknown as DataGridColumn<T>;
          return (
            <TableColumn key={c.key} style={c.width ? { width: c.width } : undefined}>
              {c.label}
            </TableColumn>
          );
        }}
      </TableHeader>
      <TableBody>
        {rows.map((row) => {
          const id = (row as Record<string, unknown>)[rowKey] as string | number;
          return (
            <TableRow key={String(id)}>
              {(columnKey: Key) => {
                const c = columns.find((x) => x.key === columnKey) as DataGridColumn<T> | undefined;
                if (!c) return <TableCell>—</TableCell>;
                const isEditing =
                  c.editable && editing?.row === id && editing.key === c.key;
                const v = (row as Record<string, unknown>)[c.key];
                if (isEditing) {
                  if (c.editor === "select" && c.options) {
                    return (
                      <TableCell>
                        <select
                          autoFocus
                          defaultValue={String(v ?? "")}
                          onBlur={() => setEditing(null)}
                          onChange={(e) => {
                            onCellChange?.(id, c.key, e.target.value);
                            setEditing(null);
                          }}
                          className="h-8 rounded-md border border-input bg-input-background px-2 text-sm text-foreground outline-none focus:border-ring focus:ring-ring/50 focus:ring-[3px]"
                        >
                          {c.options.map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell>
                      <input
                        autoFocus
                        type={c.editor === "number" ? "number" : "text"}
                        defaultValue={String(v ?? "")}
                        onBlur={(e) => {
                          const next = c.editor === "number" ? Number(e.target.value) : e.target.value;
                          onCellChange?.(id, c.key, next);
                          setEditing(null);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") (e.target as HTMLInputElement).blur();
                          if (e.key === "Escape") setEditing(null);
                        }}
                        className="h-8 w-full rounded-md border border-input bg-input-background px-2 text-sm text-foreground outline-none focus:border-ring focus:ring-ring/50 focus:ring-[3px]"
                      />
                    </TableCell>
                  );
                }
                return (
                  <TableCell
                    onClick={c.editable ? () => setEditing({ row: id, key: c.key }) : undefined}
                    className={cnHero(c.editable && "cursor-text hover:bg-muted/40")}
                  >
                    {c.render ? c.render(row) : (v as ReactNode)}
                  </TableCell>
                );
              }}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
