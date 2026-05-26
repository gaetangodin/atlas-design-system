/**
 * NotificationBadge — small dot or count overlay positioned on a child.
 * Wraps HeroUI's Badge primitive; brand-aligned to destructive pink.
 */
import { forwardRef, type Ref } from "react";
import { Badge as HeroUIBadge, type BadgeProps as HeroUIBadgeProps } from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type NotificationBadgeProps = HeroUIBadgeProps;

export const NotificationBadge = forwardRef<HTMLSpanElement, NotificationBadgeProps>(
  function NotificationBadge({ classNames, size = "sm", color = "danger", ...rest }, ref) {
    return (
      <HeroUIBadge
        ref={ref as Ref<HTMLSpanElement>}
        size={size}
        color={color}
        {...rest}
        classNames={{
          ...classNames,
          badge: cnHero(
            "bg-destructive text-white text-xs font-semibold rounded-full border-2 border-background",
            classNames?.badge,
          ),
        }}
      />
    );
  },
);
NotificationBadge.displayName = "NotificationBadge";
