/**
 * User — mirrors `heroui-branded/display.tsx::BrandedUser`.
 */
import { forwardRef, type Ref } from "react";
import { User as HeroUIUser, type UserProps as HeroUIUserProps } from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type UserProps = HeroUIUserProps;

export const User = forwardRef<HTMLDivElement, UserProps>(function User({ classNames, ...rest }, ref) {
  return (
    <HeroUIUser
      ref={ref as Ref<HTMLDivElement>}
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero("flex items-center gap-2", classNames?.base),
        name: cnHero("text-sm font-medium text-foreground", classNames?.name),
        description: cnHero("text-xs text-muted-foreground", classNames?.description),
      }}
    />
  );
});
User.displayName = "User";
