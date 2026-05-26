/**
 * VerticalTabs — settings-style sub-nav. Wraps HeroUI Tabs with
 * `isVertical` and brand styling tuned for left-aligned, full-text
 * pills (not the segmented-control look the horizontal Tabs uses).
 */
import { forwardRef, type Ref } from "react";
import {
  Tabs as HeroUITabs,
  Tab as HeroUITab,
  type TabsProps as HeroUITabsProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type VerticalTabsProps = Omit<HeroUITabsProps, "isVertical">;

export const VerticalTabs = forwardRef<HTMLDivElement, VerticalTabsProps>(function VerticalTabs(
  { classNames, variant = "light", ...rest },
  ref,
) {
  return (
    <HeroUITabs
      ref={ref as Ref<HTMLDivElement>}
      isVertical
      variant={variant}
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero(classNames?.base),
        tabList: cnHero(
          "flex flex-col w-full items-stretch gap-0.5 bg-transparent p-0",
          classNames?.tabList,
        ),
        tab: cnHero(
          "justify-start h-9 px-3 rounded-md text-sm text-muted-foreground",
          "data-[selected=true]:bg-muted data-[selected=true]:text-foreground",
          "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          classNames?.tab,
        ),
        tabContent: cnHero("font-medium", classNames?.tabContent),
        cursor: cnHero("hidden", classNames?.cursor),
        panel: cnHero("pl-6 pt-0 bg-background", classNames?.panel),
      }}
    />
  );
});
VerticalTabs.displayName = "VerticalTabs";

export const VerticalTab = HeroUITab;
