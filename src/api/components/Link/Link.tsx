/**
 * Link — mirrors `heroui-branded/display.tsx::BrandedLink`.
 */
import { forwardRef, type Ref } from "react";
import { Link as HeroUILink, type LinkProps as HeroUILinkProps } from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type LinkProps = HeroUILinkProps;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { className, ...rest },
  ref,
) {
  return (
    <HeroUILink
      ref={ref as Ref<HTMLAnchorElement>}
      {...rest}
      className={cnHero(
        "text-primary underline-offset-4 hover:underline text-sm font-medium",
        className,
      )}
    />
  );
});
Link.displayName = "Link";
