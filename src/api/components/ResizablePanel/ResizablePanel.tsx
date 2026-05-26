/**
 * ResizablePanel — Atlas wrappers around `react-resizable-panels`.
 *
 * Ported from Xeekrs (`components/ui/resizable.tsx`, shadcn-style).
 * Three exports:
 *   - `ResizablePanelGroup` — root layout container.
 *   - `ResizablePanel`      — a single resizable region inside the group.
 *   - `ResizableHandle`     — the drag handle between panels.
 *
 * `react-resizable-panels` is an **optional peer dep** of Atlas —
 * consumers that don't use this component don't need it installed.
 *
 * Brand chrome: subtle 1px divider in `border`, focus ring in `ring`.
 *
 * Installed `react-resizable-panels` v4 exposes Group / Panel / Separator
 * (older v2/shadcn used PanelGroup / PanelResizeHandle). Atlas keeps the
 * familiar shadcn-style names externally and adapts to v4 internals here.
 * Imperative refs flow through v4's `groupRef` / `panelRef` props, not
 * React's standard `ref` — Atlas doesn't `forwardRef` here for that reason.
 */

"use client";

import type { ComponentProps, ReactNode } from "react";
import { GripVertical } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";
import { cnHero } from "../../../shared/cn-hero";

export type ResizablePanelGroupProps = ComponentProps<typeof Group>;
export function ResizablePanelGroup({ className, ...props }: ResizablePanelGroupProps) {
  return (
    <Group
      data-slot="resizable-panel-group"
      className={cnHero(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className,
      )}
      {...props}
    />
  );
}

export type ResizablePanelProps = ComponentProps<typeof Panel>;
export function ResizablePanel(props: ResizablePanelProps) {
  return <Panel data-slot="resizable-panel" {...props} />;
}

export type ResizableHandleProps = ComponentProps<typeof Separator> & {
  /** Render a centered grip affordance on the handle. */
  withHandle?: boolean;
  /** Extra Tailwind classes on the handle root. */
  className?: string;
  children?: ReactNode;
};

export function ResizableHandle({
  withHandle,
  className,
  children,
  ...props
}: ResizableHandleProps) {
  return (
    <Separator
      data-slot="resizable-handle"
      className={cnHero(
        "relative flex w-px items-center justify-center bg-border",
        "after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
        "data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full",
        "data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1",
        "data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2",
        "data-[panel-group-direction=vertical]:after:translate-x-0",
        className,
      )}
      {...props}
    >
      {withHandle ? (
        <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-border bg-card">
          <GripVertical className="size-2.5" aria-hidden />
        </div>
      ) : (
        children
      )}
    </Separator>
  );
}
