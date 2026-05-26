import type { ReactNode } from "react";

interface RowProps {
  label: string;
  children: ReactNode;
}

export function Row({ label, children }: RowProps) {
  return (
    <div className="grid grid-cols-[120px_1fr] items-start gap-4 py-3 first:pt-0 last:pb-0">
      <span className="pt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}
