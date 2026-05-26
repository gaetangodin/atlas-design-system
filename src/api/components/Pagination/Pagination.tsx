/**
 * Pagination — HeroUI native, restyled to brand.
 */
import { forwardRef, type Ref } from "react";
import {
  Pagination as HeroUIPagination,
  PaginationItem as HeroUIPaginationItem,
  PaginationCursor as HeroUIPaginationCursor,
  type PaginationProps as HeroUIPaginationProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type PaginationProps = HeroUIPaginationProps;

export const Pagination = forwardRef<HTMLElement, PaginationProps>(function Pagination(
  { classNames, radius = "full", ...rest },
  ref,
) {
  return (
    <HeroUIPagination
      ref={ref as Ref<HTMLElement>}
      radius={radius}
      {...rest}
      classNames={{
        ...classNames,
        wrapper: cnHero("gap-1", classNames?.wrapper),
        item: cnHero(
          "size-9 text-sm font-medium text-foreground bg-transparent",
          "hover:bg-muted data-[hover=true]:bg-muted",
          classNames?.item,
        ),
        cursor: cnHero("bg-primary text-primary-foreground font-medium", classNames?.cursor),
        next: cnHero(classNames?.next),
        prev: cnHero(classNames?.prev),
      }}
    />
  );
});
Pagination.displayName = "Pagination";

export const PaginationItem = HeroUIPaginationItem;
export const PaginationCursor = HeroUIPaginationCursor;
