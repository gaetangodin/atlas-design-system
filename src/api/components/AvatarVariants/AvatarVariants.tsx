/**
 * Avatar variants — HeroUI Avatar wrapped in role-tinted, ringed,
 * square, hex, group-chat, and identity-pill presentations. The base
 * `Avatar` and `AvatarGroup` remain in `components/Avatar`; status-
 * dotted avatars live in `components/StatusAvatar`. These are the
 * specialised variants used in nav bars, message threads, and profile
 * surfaces.
 *
 * Ported from `Xeekrsmainapp/src/components/heroui-branded/avatar-variants.tsx`.
 */
import * as React from "react";
import { Avatar as HeroUIAvatar, type AvatarProps } from "@heroui/react";
import { cnHero as cn } from "../../../shared/cn-hero";

/* ─── Tone-tinted circle ───────────────────────────────────────────── */

export type AvatarTone =
  | "jobseeker"   // Emerald
  | "coach"       // Lavender (HeroUI secondary)
  | "admin"       // Earth (HeroUI primary)
  | "partner"     // Mint
  | "recruiter"   // Canary
  | "neutral";    // Stone muted

const TONE_BG: Record<AvatarTone, string> = {
  jobseeker: "bg-[#00685D] text-white",
  coach: "bg-secondary text-secondary-foreground",
  admin: "bg-primary text-primary-foreground",
  partner: "bg-success text-success-foreground",
  recruiter: "bg-warning text-warning-foreground",
  neutral: "bg-muted text-foreground",
};

export function AvatarToned({
  tone = "neutral",
  classNames,
  radius = "full",
  ...rest
}: AvatarProps & { tone?: AvatarTone }) {
  return (
    <HeroUIAvatar
      radius={radius}
      {...rest}
      classNames={{
        ...classNames,
        base: cn(TONE_BG[tone], classNames?.base),
        name: cn("text-xs font-semibold", classNames?.name),
        fallback: cn("text-current", classNames?.fallback),
      }}
    />
  );
}

/* ─── Avatar with status ring (coach control mode) ─────────────────── */

export function AvatarRing({
  ringColor = "#EDFF7D",
  ringWidth = 2,
  classNames,
  radius = "full",
  ...rest
}: AvatarProps & { ringColor?: string; ringWidth?: number }) {
  return (
    <HeroUIAvatar
      radius={radius}
      {...rest}
      classNames={{ ...classNames, base: cn(classNames?.base) }}
      style={{
        boxShadow: `0 0 0 ${ringWidth}px var(--background), 0 0 0 ${ringWidth + 2}px ${ringColor}`,
      }}
    />
  );
}

/* ─── Square / rounded employer avatar ─────────────────────────────── */

export function AvatarSquare({ classNames, ...rest }: AvatarProps) {
  return (
    <HeroUIAvatar
      radius="md"
      {...rest}
      classNames={{
        ...classNames,
        base: cn("bg-foreground text-background", classNames?.base),
        name: cn("text-xs font-semibold", classNames?.name),
        fallback: cn("text-current", classNames?.fallback),
      }}
    />
  );
}

/* ─── Hexagonal career-profile tile ────────────────────────────────── */

const HEX_PATH = "M 50 5 L 92 27.5 L 92 72.5 L 50 95 L 8 72.5 L 8 27.5 Z";

export function AvatarHex({
  size = 32,
  fillColor,
  iconColor,
  active = false,
  children,
  className,
}: {
  size?: number;
  fillColor: string;
  iconColor?: string;
  /** When true, renders a thin ring offset for the active state. */
  active?: boolean;
  /** Inner content — typically a Lucide icon at ~50% of size, or
   *  initials in 1-2 letters. */
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn("relative inline-flex shrink-0 items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        aria-hidden
        className={cn(active && "drop-shadow-[0_0_0_2px_rgba(0,104,93,0.4)]")}
      >
        <path
          d={HEX_PATH}
          fill={fillColor}
          stroke={active ? "#00685D" : "transparent"}
          strokeWidth={active ? 4 : 0}
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center font-semibold"
        style={{ color: iconColor ?? "#FFFFFF", fontSize: size * 0.32 }}
      >
        {children}
      </span>
    </span>
  );
}

/* ─── Group chat avatar (2×2 grid) ─────────────────────────────────── */

export type GroupAvatarMember = {
  name: string;
  initials?: string;
  avatarUrl?: string;
  /** Drives the fallback chip color (same tones as AvatarToned). */
  tone?: AvatarTone;
};

function autoInit(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0] + parts[parts.length - 1]![0]!).toUpperCase();
}

export function GroupAvatar({
  members,
  size = 40,
  className,
}: {
  members: GroupAvatarMember[];
  size?: number;
  className?: string;
}) {
  const visible = members.slice(0, 3);
  const overflow = members.length - 3;
  const showOverflow = overflow > 0;
  const cells: (GroupAvatarMember | { overflow: number })[] = showOverflow
    ? [...visible, { overflow }]
    : members.slice(0, 4);
  return (
    <div
      className={cn(
        "grid shrink-0 overflow-hidden rounded-lg border border-border bg-muted",
        className,
      )}
      style={{
        width: size,
        height: size,
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
      }}
    >
      {cells.map((cell, idx) => {
        if ("overflow" in cell) {
          return (
            <span
              key="overflow"
              className="flex items-center justify-center bg-muted font-semibold text-muted-foreground"
              style={{ fontSize: size * 0.22 }}
            >
              +{cell.overflow}
            </span>
          );
        }
        const initials = cell.initials ?? autoInit(cell.name);
        const toneClass = TONE_BG[cell.tone ?? "neutral"];
        return cell.avatarUrl ? (
          <img
            key={`${cell.name}-${idx}`}
            src={cell.avatarUrl}
            alt={cell.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span
            key={`${cell.name}-${idx}`}
            className={cn("flex items-center justify-center font-semibold", toneClass)}
            style={{ fontSize: size * 0.2 }}
            title={cell.name}
          >
            {initials}
          </span>
        );
      })}
    </div>
  );
}

/* ─── Identity pill (org + careers + coach + user) ─────────────────── */

export type IdentityPillProps = {
  org?: { initials: string; bg?: string; color?: string };
  careers?: { fillColor: string; iconColor?: string; label?: string }[];
  coach?: { src?: string; name: string; active?: boolean };
  user: { src?: string; name: string };
  size?: "sm" | "md";
  className?: string;
};

/* ─── Overlapping support-agent stack ──────────────────────────────── */

export type AvatarStackItem = {
  name: string;
  avatarUrl?: string;
  /** Optional category hint. Drives the fallback chip color when
   *  there's no avatar image. */
  kind?: "coach" | "team" | "admin" | "partner" | string;
  /** Two-letter initials. Computed from `name` if omitted. */
  initials?: string;
};

const STACK_SIZE_MAP = {
  sm: { box: "h-6 w-6", initials: "text-xs", overflow: "text-xs", overlap: "-ml-2" },
  md: { box: "h-7 w-7", initials: "text-xs", overflow: "text-xs", overlap: "-ml-2.5" },
  lg: { box: "h-9 w-9", initials: "text-xs", overflow: "text-xs", overlap: "-ml-3" },
} as const;

function kindBg(kind: AvatarStackItem["kind"]) {
  switch (kind) {
    case "coach":   return "bg-secondary text-secondary-foreground";
    case "admin":   return "bg-primary text-primary-foreground";
    case "partner": return "bg-success text-success-foreground";
    case "team":    return "bg-warning text-warning-foreground";
    default:        return "bg-muted text-foreground";
  }
}

export const AvatarStack = React.forwardRef<
  HTMLDivElement,
  {
    agents: AvatarStackItem[];
    /** Hard cap on visible avatars before collapsing to `+N`. Default 4. */
    max?: number;
    size?: keyof typeof STACK_SIZE_MAP;
    /** Aria-label for the entire group. Falls back to a comma-joined
     *  list of names. */
    ariaLabel?: string;
    className?: string;
  }
>(function AvatarStack({ agents, max = 4, size = "md", ariaLabel, className }, ref) {
  const tokens = STACK_SIZE_MAP[size];
  const shown = agents.slice(0, max);
  const extra = agents.length - shown.length;
  return (
    <div
      ref={ref}
      className={cn("flex shrink-0 items-center", className)}
      role="group"
      aria-label={ariaLabel ?? `Support agents: ${agents.map((a) => a.name).join(", ")}`}
    >
      {shown.map((agent, idx) => {
        const initials = agent.initials ?? autoInit(agent.name);
        return (
          <span
            key={`${agent.name}-${idx}`}
            className={cn(
              "relative inline-flex shrink-0 items-center justify-center rounded-md ring-2 ring-background overflow-hidden",
              tokens.box,
              !agent.avatarUrl && kindBg(agent.kind),
              idx > 0 && tokens.overlap,
            )}
            style={{ zIndex: idx + 1 }}
            title={agent.name}
          >
            {agent.avatarUrl ? (
              <img
                src={agent.avatarUrl}
                alt={agent.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className={cn("font-semibold tabular-nums", tokens.initials)}>
                {initials}
              </span>
            )}
          </span>
        );
      })}
      {extra > 0 ? (
        <span
          className={cn(
            "relative inline-flex shrink-0 items-center justify-center rounded-md bg-muted font-semibold tabular-nums text-muted-foreground ring-2 ring-background",
            tokens.box,
            tokens.overflow,
            tokens.overlap,
          )}
          style={{ zIndex: shown.length + 1 }}
          title={`${extra} more support ${extra === 1 ? "agent" : "agents"}`}
          aria-label={`${extra} more support agents`}
        >
          +{extra}
        </span>
      ) : null}
    </div>
  );
});

export function IdentityPill({
  org,
  careers,
  coach,
  user,
  size = "md",
  className,
}: IdentityPillProps) {
  const tokens = size === "sm" ? { box: "h-9 px-1.5", dot: 24 } : { box: "h-10 px-2", dot: 28 };
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-card shadow-sm",
        tokens.box,
        className,
      )}
    >
      {org ? (
        <AvatarSquare
          name={org.initials}
          classNames={{
            base: "h-7 w-7 shrink-0",
            name: "text-[10px] font-bold",
          }}
          style={{ background: org.bg, color: org.color }}
        />
      ) : null}
      {careers?.length ? (
        <div className="flex items-center -space-x-1">
          {careers.slice(0, 3).map((career, idx) => (
            <AvatarHex
              key={idx}
              size={tokens.dot}
              fillColor={career.fillColor}
              iconColor={career.iconColor}
              className="ring-2 ring-card"
            >
              {career.label ?? "★"}
            </AvatarHex>
          ))}
        </div>
      ) : null}
      {coach ? (
        <AvatarRing
          src={coach.src}
          name={coach.name.slice(0, 2).toUpperCase()}
          ringColor={coach.active ? "#EDFF7D" : "#D6D3D1"}
          classNames={{ base: "h-7 w-7 shrink-0" }}
        />
      ) : null}
      <HeroUIAvatar
        src={user.src}
        name={user.name.slice(0, 2).toUpperCase()}
        radius="full"
        classNames={{
          base: "h-7 w-7 shrink-0 bg-primary text-primary-foreground",
          name: "text-[10px] font-semibold",
        }}
      />
    </div>
  );
}
