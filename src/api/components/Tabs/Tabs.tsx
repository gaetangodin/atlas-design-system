/**
 * Tabs — mirrors `heroui-branded/tabs.tsx::BrandedTabs`.
 * Brand rule: full radius on track + cursor; reads as a single capsule.
 */
import { forwardRef, type Ref } from "react";
import {
  Tabs as HeroUITabs,
  Tab as HeroUITab,
  type TabsProps as HeroUITabsProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type TabsProps = HeroUITabsProps;

const TAB_LIST_BASE =
  "inline-flex w-fit items-center rounded-full bg-muted p-[3px] text-muted-foreground";

const TAB_BASE =
  "inline-flex h-[calc(100%-1px)] items-center justify-center gap-1.5 " +
  "rounded-full font-medium text-muted-foreground " +
  "data-[selected=true]:text-foreground " +
  "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]";

const SIZE_TOKENS = {
  sm: { list: "h-8", tab: "px-2.5 text-sm" },
  md: { list: "h-9", tab: "px-3 text-sm" },
  lg: { list: "h-10", tab: "px-4 text-base" },
} as const;

const CURSOR = "rounded-full bg-background shadow-sm";

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  { classNames, variant = "solid", size = "md", ...rest },
  ref,
) {
  const tokens = SIZE_TOKENS[size as keyof typeof SIZE_TOKENS] ?? SIZE_TOKENS.md;
  return (
    <HeroUITabs
      ref={ref as Ref<HTMLDivElement>}
      variant={variant}
      size={size}
      {...rest}
      classNames={{
        ...classNames,
        tabList: cnHero(TAB_LIST_BASE, tokens.list, classNames?.tabList),
        tab: cnHero(TAB_BASE, tokens.tab, classNames?.tab),
        tabContent: cnHero("font-medium", classNames?.tabContent),
        cursor: cnHero(CURSOR, classNames?.cursor),
        panel: cnHero("pt-4 bg-background", classNames?.panel),
      }}
    />
  );
});
Tabs.displayName = "Tabs";

export const Tab = HeroUITab;
