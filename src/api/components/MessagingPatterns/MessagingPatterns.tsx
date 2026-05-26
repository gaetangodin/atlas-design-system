/**
 * Messaging-domain compositions.
 *
 *  - `ChatOpportunityCard` — surface that highlights a candidate /
 *     posting recommendation inside a chat list.
 *  - `GroupChatAvatar` — overlapping avatar stack for group threads.
 *  - `CannedMessageSelector` — popover-mounted picker for templated
 *     replies (templates / AI assist tabs).
 *  - `ClientTouchpointCards` — horizontal scroller of recent
 *     touchpoints (call / email / chat) with a client.
 */

import { forwardRef, type ReactNode } from "react";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Card, CardBody, CardHeader } from "../Card";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { Tab, Tabs } from "../Tabs";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── ChatOpportunityCard ─────────────────────── */

export interface ChatOpportunityCardProps {
  title: ReactNode;
  description?: ReactNode;
  /** Optional thumbnail / avatar URL. */
  imageUrl?: string;
  initials?: string;
  /** Right-aligned CTA. */
  cta?: ReactNode;
  onClick?: () => void;
  className?: string;
  testId?: string;
  id?: string;
}

export const ChatOpportunityCard = forwardRef<HTMLDivElement, ChatOpportunityCardProps>(
  function ChatOpportunityCard(
    { title, description, imageUrl, initials, cta, onClick, className, testId, id },
    ref,
  ) {
    return (
      <button
        ref={ref as never}
        type="button"
        onClick={onClick}
        id={id}
        data-testid={testId}
        className={cnHero(
          "group flex w-full items-center gap-3 rounded-2xl border border-border bg-card p-3 text-left shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          className,
        )}
      >
        <Avatar size="md" src={imageUrl} name={initials} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">{title}</p>
          {description ? (
            <p className="line-clamp-2 text-xs text-muted-foreground">{description}</p>
          ) : null}
        </div>
        <div className="shrink-0">
          {cta ?? (
            <ArrowRight
              className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          )}
        </div>
      </button>
    );
  },
);
ChatOpportunityCard.displayName = "ChatOpportunityCard";

/* ────────────────────── GroupChatAvatar ─────────────────────────── */

export interface GroupChatAvatarMember {
  name: string;
  avatarUrl?: string;
  initials?: string;
}

export interface GroupChatAvatarProps {
  members: GroupChatAvatarMember[];
  max?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  testId?: string;
}

const SIZE_TABLE: Record<NonNullable<GroupChatAvatarProps["size"]>, { box: string; overlap: string }> = {
  sm: { box: "h-6 w-6", overlap: "-ml-2" },
  md: { box: "h-8 w-8", overlap: "-ml-2.5" },
  lg: { box: "h-10 w-10", overlap: "-ml-3" },
};

export function GroupChatAvatar({
  members,
  max = 3,
  size = "md",
  className,
  testId,
}: GroupChatAvatarProps) {
  const t = SIZE_TABLE[size];
  const shown = members.slice(0, max);
  const extra = members.length - shown.length;
  return (
    <div
      data-testid={testId}
      className={cnHero("flex shrink-0 items-center", className)}
      aria-label={`Group of ${members.length}`}
    >
      {shown.map((m, idx) => (
        <span
          key={`${m.name}-${idx}`}
          className={cnHero(
            "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full ring-2 ring-background",
            t.box,
            idx > 0 && t.overlap,
            !m.avatarUrl && "bg-muted text-foreground",
          )}
          style={{ zIndex: idx + 1 }}
          title={m.name}
        >
          {m.avatarUrl ? (
            <img src={m.avatarUrl} alt={m.name} className="h-full w-full object-cover" />
          ) : (
            <span className="text-[10px] font-semibold">
              {m.initials ?? m.name.slice(0, 2).toUpperCase()}
            </span>
          )}
        </span>
      ))}
      {extra > 0 ? (
        <span
          className={cnHero(
            "relative inline-flex shrink-0 items-center justify-center rounded-full bg-muted font-semibold text-muted-foreground ring-2 ring-background",
            t.box,
            t.overlap,
            "text-[10px]",
          )}
          style={{ zIndex: shown.length + 1 }}
        >
          +{extra}
        </span>
      ) : null}
    </div>
  );
}

/* ────────────────────── CannedMessageSelector ───────────────────── */

export interface CannedTemplate {
  id: string;
  label: string;
  preview?: string;
}

export interface CannedMessageSelectorProps {
  templates: CannedTemplate[];
  /** AI suggestions tab — pass a slot if you want it shown. */
  aiAssistSlot?: ReactNode;
  onPick: (templateId: string) => void;
  /** Trigger label — defaults to "Quick replies". */
  triggerLabel?: string;
  className?: string;
  testId?: string;
}

export function CannedMessageSelector({
  templates,
  aiAssistSlot,
  onPick,
  triggerLabel = "Quick replies",
  className,
  testId,
}: CannedMessageSelectorProps) {
  return (
    <div className={cnHero(className)} data-testid={testId}>
      <Popover placement="top-start">
        <PopoverTrigger>
          <Button size="sm" variant="flat" startContent={<MessageSquare className="size-4" />}>
            {triggerLabel}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="w-80 p-2">
            <Tabs aria-label="Canned messages" size="sm" variant="underlined">
              <Tab key="templates" title="Templates">
                <ul className="mt-2 max-h-64 space-y-1 overflow-y-auto pr-1">
                  {templates.map((t) => (
                    <li key={t.id}>
                      <button
                        type="button"
                        onClick={() => onPick(t.id)}
                        className="w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted/60"
                      >
                        <p className="font-medium text-foreground">{t.label}</p>
                        {t.preview ? (
                          <p className="line-clamp-1 text-xs text-muted-foreground">{t.preview}</p>
                        ) : null}
                      </button>
                    </li>
                  ))}
                </ul>
              </Tab>
              <Tab key="ai" title={<span className="inline-flex items-center gap-1"><Sparkles className="size-3" /> AI Assist</span>}>
                <div className="mt-2 max-h-64 overflow-y-auto pr-1 text-sm">
                  {aiAssistSlot ?? (
                    <p className="text-muted-foreground">
                      Wire an AI panel here (pass <code>aiAssistSlot</code>).
                    </p>
                  )}
                </div>
              </Tab>
            </Tabs>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

/* ────────────────────── ClientTouchpointCards ───────────────────── */

export type TouchpointKind = "call" | "chat" | "email" | "meeting";

export interface ClientTouchpoint {
  id: string;
  kind: TouchpointKind;
  whenLabel: string;
  summary: ReactNode;
  initiatedBy?: string;
}

export interface ClientTouchpointCardsProps {
  touchpoints: ClientTouchpoint[];
  className?: string;
  testId?: string;
}

const KIND_LABEL: Record<TouchpointKind, string> = {
  call: "Call",
  chat: "Chat",
  email: "Email",
  meeting: "Meeting",
};

export function ClientTouchpointCards({ touchpoints, className, testId }: ClientTouchpointCardsProps) {
  return (
    <div
      data-testid={testId}
      className={cnHero("-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2", className)}
    >
      {touchpoints.map((t) => (
        <Card key={t.id} className="min-w-[16rem] shrink-0 snap-start" shadow="sm">
          <CardHeader className="flex items-baseline justify-between gap-2 py-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {KIND_LABEL[t.kind]}
            </span>
            <span className="text-[11px] text-muted-foreground">{t.whenLabel}</span>
          </CardHeader>
          <CardBody className="space-y-1 py-2">
            <p className="text-sm text-foreground">{t.summary}</p>
            {t.initiatedBy ? (
              <p className="text-xs text-muted-foreground">by {t.initiatedBy}</p>
            ) : null}
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
