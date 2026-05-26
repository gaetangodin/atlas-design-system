/**
 * Drawer — mirrors `heroui-branded/overlay.tsx::BrandedDrawer`.
 * Same 24px brand radius as Modal so any free-floating drawer
 * variant inherits the corner.
 */
import {
  Drawer as HeroUIDrawer,
  DrawerContent as HeroUIDrawerContent,
  DrawerHeader as HeroUIDrawerHeader,
  DrawerBody as HeroUIDrawerBody,
  DrawerFooter as HeroUIDrawerFooter,
  type DrawerProps as HeroUIDrawerProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type DrawerProps = HeroUIDrawerProps;

export function Drawer({ classNames, ...rest }: DrawerProps) {
  return (
    <HeroUIDrawer
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero(
          "rounded-2xl border border-border bg-background text-foreground shadow-xl",
          classNames?.base,
        ),
        backdrop: cnHero("bg-foreground/55 backdrop-blur-sm", classNames?.backdrop),
        closeButton: cnHero(
          "text-muted-foreground hover:bg-muted hover:text-foreground rounded-full",
          classNames?.closeButton,
        ),
        header: cnHero(
          "flex flex-col gap-1.5 px-6 pt-6 pb-2 border-b border-border",
          classNames?.header,
        ),
        body: cnHero("px-6 py-4 text-sm text-foreground", classNames?.body),
        footer: cnHero(
          "flex items-center justify-end gap-2 px-6 pt-2 pb-6 border-t border-border",
          classNames?.footer,
        ),
      }}
    />
  );
}

export const DrawerContent = HeroUIDrawerContent;
export const DrawerHeader = HeroUIDrawerHeader;
export const DrawerBody = HeroUIDrawerBody;
export const DrawerFooter = HeroUIDrawerFooter;
