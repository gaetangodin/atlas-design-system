/**
 * Breadcrumbs — HeroUI native, restyled to brand.
 */
import { forwardRef, type Ref } from "react";
import {
  Breadcrumbs as HeroUIBreadcrumbs,
  BreadcrumbItem as HeroUIBreadcrumbItem,
  type BreadcrumbsProps as HeroUIBreadcrumbsProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type BreadcrumbsProps = HeroUIBreadcrumbsProps;

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(function Breadcrumbs(
  { classNames, ...rest },
  ref,
) {
  return (
    <HeroUIBreadcrumbs
      ref={ref as Ref<HTMLElement>}
      {...rest}
      classNames={{
        ...classNames,
        list: cnHero("text-sm", classNames?.list),
        separator: cnHero("text-muted-foreground", classNames?.separator),
      }}
      itemClasses={{
        item: cnHero(
          "text-sm text-muted-foreground hover:text-foreground data-[current=true]:text-foreground data-[current=true]:font-medium",
          rest.itemClasses?.item,
        ),
        separator: cnHero("mx-1", rest.itemClasses?.separator),
      }}
    />
  );
});
Breadcrumbs.displayName = "Breadcrumbs";

export const BreadcrumbItem = HeroUIBreadcrumbItem;
