/**
 * StatusAvatar — Avatar with a status dot in the bottom-right.
 */
import { forwardRef, type Ref } from "react";
import { Avatar } from "../Avatar";
import type { AvatarProps } from "../Avatar";
import { cnHero } from "../../../shared/cn-hero";

export type StatusAvatarStatus = "online" | "offline" | "busy" | "away";

export interface StatusAvatarProps extends AvatarProps {
  status?: StatusAvatarStatus;
}

const statusClass: Record<StatusAvatarStatus, string> = {
  online: "bg-success",
  offline: "bg-muted",
  busy: "bg-destructive",
  away: "bg-warning",
};

export const StatusAvatar = forwardRef<HTMLSpanElement, StatusAvatarProps>(function StatusAvatar(
  { status, className, ...rest },
  ref,
) {
  return (
    <span className={cnHero("relative inline-flex shrink-0", className)}>
      <Avatar ref={ref as Ref<HTMLSpanElement>} {...rest} />
      {status ? (
        <span
          aria-label={`Status: ${status}`}
          className={cnHero(
            "absolute bottom-0 right-0 size-3 rounded-full ring-2 ring-background",
            statusClass[status],
          )}
        />
      ) : null}
    </span>
  );
});
StatusAvatar.displayName = "StatusAvatar";
