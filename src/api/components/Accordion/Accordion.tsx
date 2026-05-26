/**
 * Accordion — HeroUI native, restyled to brand.
 * Replaces Radix Accordion + Collapsible per RADIX_TO_HEROUI.md.
 */
import { forwardRef, type Ref } from "react";
import {
  Accordion as HeroUIAccordion,
  AccordionItem as HeroUIAccordionItem,
  type AccordionProps as HeroUIAccordionProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type AccordionProps = HeroUIAccordionProps;

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(function Accordion(
  { itemClasses, ...rest },
  ref,
) {
  return (
    <HeroUIAccordion
      ref={ref as Ref<HTMLDivElement>}
      {...rest}
      itemClasses={{
        ...itemClasses,
        base: cnHero("border-b border-border last:border-b-0", itemClasses?.base),
        heading: cnHero(itemClasses?.heading),
        trigger: cnHero(
          "py-3 text-sm font-medium text-foreground hover:text-foreground/80 outline-none",
          "data-[focus-visible=true]:ring-ring/50 data-[focus-visible=true]:ring-[3px]",
          itemClasses?.trigger,
        ),
        title: cnHero("font-medium text-foreground", itemClasses?.title),
        subtitle: cnHero("text-xs text-muted-foreground", itemClasses?.subtitle),
        content: cnHero("pt-0 pb-3 text-sm text-foreground", itemClasses?.content),
        indicator: cnHero("text-muted-foreground", itemClasses?.indicator),
      }}
    />
  );
});
Accordion.displayName = "Accordion";

export const AccordionItem = HeroUIAccordionItem;
