/**
 * Avatar + AvatarGroup — mirror `heroui-branded/display.tsx::BrandedAvatar`.
 */
import { forwardRef, type Ref } from "react";
import {
  Avatar as HeroUIAvatar,
  AvatarGroup as HeroUIAvatarGroup,
  type AvatarProps as HeroUIAvatarProps,
  type AvatarGroupProps as HeroUIAvatarGroupProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type AvatarProps = HeroUIAvatarProps;
export type AvatarGroupProps = HeroUIAvatarGroupProps;

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  { classNames, radius = "full", ...rest },
  ref,
) {
  return (
    <HeroUIAvatar
      ref={ref as Ref<HTMLSpanElement>}
      radius={radius}
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero("bg-muted text-foreground", classNames?.base),
        fallback: cnHero("text-muted-foreground", classNames?.fallback),
        name: cnHero("text-sm font-medium text-foreground", classNames?.name),
      }}
    />
  );
});
Avatar.displayName = "Avatar";

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(function AvatarGroup(
  { classNames, ...rest },
  ref,
) {
  return (
    <HeroUIAvatarGroup
      ref={ref as Ref<HTMLDivElement>}
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero("flex items-center -space-x-2", classNames?.base),
        count: cnHero(
          "bg-muted text-foreground text-xs font-medium rounded-full",
          classNames?.count,
        ),
      }}
    />
  );
});
AvatarGroup.displayName = "AvatarGroup";
