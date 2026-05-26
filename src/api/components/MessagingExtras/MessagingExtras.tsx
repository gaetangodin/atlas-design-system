/**
 * Messaging-domain composition extras.
 *
 *  - `ChatConnectionReceivedBar`            — inline banner shown when a
 *                                              new connection request lands.
 *  - `ClientInboundConnectionInviteCards`   — grid of received invites.
 *  - `StaffConnectionRequestsManageTable`   — staff-side manage table.
 *  - `MessagesWorkspace`                    — workspace shell composition.
 */

import { type ReactNode } from "react";
import { Inbox, UserPlus } from "lucide-react";
import { Card, CardBody, CardFooter, CardHeader } from "../Card";
import { Avatar } from "../Avatar";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── ChatConnectionReceivedBar ───────────────── */

export interface ChatConnectionReceivedBarProps {
  senderName: string;
  senderRole?: string;
  /** Optional avatar URL. */
  avatarUrl?: string;
  initials?: string;
  onAccept?: () => void;
  onDecline?: () => void;
  onView?: () => void;
  className?: string;
}
export function ChatConnectionReceivedBar({
  senderName, senderRole, avatarUrl, initials, onAccept, onDecline, onView, className,
}: ChatConnectionReceivedBarProps) {
  return (
    <div
      role="status"
      className={cnHero(
        "flex items-center gap-3 rounded-2xl border border-border bg-spotlight/15 px-4 py-3",
        className,
      )}
    >
      <Avatar size="sm" src={avatarUrl} name={initials ?? senderName.slice(0, 2)} />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-foreground">{senderName}</p>
        {senderRole ? <p className="text-xs text-muted-foreground">{senderRole}</p> : null}
        <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
          <UserPlus className="size-3" aria-hidden /> Sent you a connection request
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1.5">
        {onView ? (
          <button type="button" onClick={onView} className="text-xs font-medium text-muted-foreground hover:text-foreground">
            View
          </button>
        ) : null}
        <button
          type="button"
          onClick={onDecline}
          className="rounded-full border border-border bg-card px-2.5 py-1 text-xs font-semibold text-foreground hover:bg-muted"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={onAccept}
          className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

/* ────────────────────── ClientInboundConnectionInviteCards ──────── */

export interface InboundInvite {
  id: string;
  senderName: string;
  senderRole?: string;
  whenLabel?: string;
  avatarUrl?: string;
  initials?: string;
  /** Free-form note from the sender. */
  note?: ReactNode;
  onAccept?: () => void;
  onDecline?: () => void;
}
export interface ClientInboundConnectionInviteCardsProps {
  invites: InboundInvite[];
  emptyState?: ReactNode;
  className?: string;
}
export function ClientInboundConnectionInviteCards({ invites, emptyState, className }: ClientInboundConnectionInviteCardsProps) {
  if (invites.length === 0 && emptyState) return <>{emptyState}</>;
  return (
    <div className={cnHero("grid gap-3 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {invites.map((inv) => (
        <Card key={inv.id} shadow="sm">
          <CardHeader className="flex items-start gap-3">
            <Avatar size="md" src={inv.avatarUrl} name={inv.initials ?? inv.senderName.slice(0, 2)} />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{inv.senderName}</p>
              {inv.senderRole ? <p className="truncate text-xs text-muted-foreground">{inv.senderRole}</p> : null}
              {inv.whenLabel ? <p className="text-[10px] text-muted-foreground">{inv.whenLabel}</p> : null}
            </div>
          </CardHeader>
          {inv.note ? <CardBody className="text-sm text-muted-foreground">{inv.note}</CardBody> : null}
          <CardFooter className="justify-end gap-1.5">
            <button type="button" onClick={inv.onDecline} className="rounded-full border border-border px-2.5 py-1 text-xs font-semibold hover:bg-muted">
              Decline
            </button>
            <button type="button" onClick={inv.onAccept} className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground hover:bg-primary/90">
              Accept
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

/* ────────────────────── StaffConnectionRequestsManageTable ──────── */

export interface ConnectionRequestRow {
  id: string;
  candidateName: ReactNode;
  posting?: ReactNode;
  status?: ReactNode;
  sentAt?: ReactNode;
  /** Trailing actions cell. */
  actions?: ReactNode;
}
export interface StaffConnectionRequestsManageTableProps {
  requests: ConnectionRequestRow[];
  emptyState?: ReactNode;
  className?: string;
}
export function StaffConnectionRequestsManageTable({ requests, emptyState, className }: StaffConnectionRequestsManageTableProps) {
  if (requests.length === 0 && emptyState) return <>{emptyState}</>;
  return (
    <div className={cnHero("overflow-hidden rounded-xl border border-border bg-card", className)}>
      <table className="w-full text-sm">
        <thead className="bg-muted/30 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          <tr>
            <th className="px-4 py-2 text-left">Candidate</th>
            <th className="px-4 py-2 text-left">Posting</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Sent</th>
            <th className="px-4 py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {requests.map((r) => (
            <tr key={r.id} className="hover:bg-muted/40">
              <td className="px-4 py-2">{r.candidateName}</td>
              <td className="px-4 py-2 text-muted-foreground">{r.posting}</td>
              <td className="px-4 py-2">{r.status}</td>
              <td className="px-4 py-2 text-muted-foreground">{r.sentAt}</td>
              <td className="px-4 py-2 text-right">{r.actions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ────────────────────── MessagesWorkspace ───────────────────────── */

export interface MessagesWorkspaceProps {
  /** Conversation list rail. */
  threadList: ReactNode;
  /** Active thread content (or empty state). */
  threadBody: ReactNode;
  /** Optional right rail (contact info, files). */
  rightRail?: ReactNode;
  className?: string;
}
export function MessagesWorkspace({ threadList, threadBody, rightRail, className }: MessagesWorkspaceProps) {
  return (
    <div
      className={cnHero(
        "grid h-full overflow-hidden rounded-2xl border border-border bg-background",
        rightRail ? "grid-cols-[280px_1fr_320px]" : "grid-cols-[280px_1fr]",
        className,
      )}
    >
      <aside className="border-r border-border bg-card">
        <header className="flex items-center gap-2 border-b border-border px-3 py-2 text-sm font-semibold">
          <Inbox className="size-4 text-muted-foreground" aria-hidden /> Inbox
        </header>
        <div className="overflow-y-auto">{threadList}</div>
      </aside>
      <main className="flex min-h-0 flex-col">{threadBody}</main>
      {rightRail ? <aside className="border-l border-border bg-card">{rightRail}</aside> : null}
    </div>
  );
}
