/**
 * Side-panel slot primitives — `NotificationsPanel`,
 * `RemindersPanel`, `MessagesPanel`, `RightSidebar`,
 * `WorkspaceTakeoverPanel`. All share the same shape: a vertical
 * panel with a header, scrollable body, and optional footer. Apps
 * fill the slots with real data.
 */
import { forwardRef, type ReactNode } from "react";
import { X } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

interface BasePanelProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  /** Top-right close button. */
  onClose?: () => void;
  /** Footer slot (sticky). */
  footer?: ReactNode;
  children?: ReactNode;
  /** Width — defaults to `w-80`. */
  width?: string;
  className?: string;
  testId?: string;
  id?: string;
}

function PanelShell({ title, subtitle, onClose, footer, children, width = "w-80", className, testId, id }: BasePanelProps) {
  return (
    <aside
      id={id}
      data-testid={testId}
      className={cnHero("flex h-full flex-col border-l border-border bg-card", width, className)}
    >
      <header className="flex items-start justify-between gap-2 border-b border-border px-4 py-3">
        <div className="min-w-0">
          {title ? <p className="text-base font-semibold">{title}</p> : null}
          {subtitle ? <p className="text-xs text-muted-foreground">{subtitle}</p> : null}
        </div>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close panel"
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        ) : null}
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
      {footer ? <div className="border-t border-border bg-card/95 px-4 py-3">{footer}</div> : null}
    </aside>
  );
}

export type NotificationsPanelProps = BasePanelProps;
export const NotificationsPanel = forwardRef<HTMLElement, NotificationsPanelProps>(function NotificationsPanel(props, _ref) {
  return <PanelShell title="Notifications" {...props} />;
});
NotificationsPanel.displayName = "NotificationsPanel";

export type RemindersPanelProps = BasePanelProps;
export const RemindersPanel = forwardRef<HTMLElement, RemindersPanelProps>(function RemindersPanel(props, _ref) {
  return <PanelShell title="Reminders" {...props} />;
});
RemindersPanel.displayName = "RemindersPanel";

export type MessagesPanelProps = BasePanelProps;
export const MessagesPanel = forwardRef<HTMLElement, MessagesPanelProps>(function MessagesPanel(props, _ref) {
  return <PanelShell title="Messages" {...props} />;
});
MessagesPanel.displayName = "MessagesPanel";

export type RightSidebarProps = BasePanelProps;
export const RightSidebar = forwardRef<HTMLElement, RightSidebarProps>(function RightSidebar(props, _ref) {
  return <PanelShell {...props} />;
});
RightSidebar.displayName = "RightSidebar";

export type WorkspaceTakeoverPanelProps = BasePanelProps & { width?: string };
export const WorkspaceTakeoverPanel = forwardRef<HTMLElement, WorkspaceTakeoverPanelProps>(function WorkspaceTakeoverPanel(props, _ref) {
  return <PanelShell width="w-96" {...props} />;
});
WorkspaceTakeoverPanel.displayName = "WorkspaceTakeoverPanel";
