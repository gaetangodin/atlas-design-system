/**
 * FAQ — header + Atlas Accordion driven by an array of Q/A pairs.
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { Accordion, AccordionItem } from "../Accordion";
import { cnHero } from "../../../shared/cn-hero";

export interface FAQItem {
  id: string;
  question: ReactNode;
  answer: ReactNode;
}

export interface FAQProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  body?: ReactNode;
  items: FAQItem[];
  className?: string;
}

export const FAQ = forwardRef<HTMLElement, FAQProps>(function FAQ(
  { eyebrow, title, body, items, className },
  ref,
) {
  return (
    <section ref={ref as Ref<HTMLElement>} className={cnHero("flex flex-col gap-6 max-w-3xl mx-auto", className)}>
      {(eyebrow || title || body) && (
        <div className="text-center">
          {eyebrow ? (
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-3">{eyebrow}</div>
          ) : null}
          {title ? (
            <h2 style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 600 }} className="text-foreground tracking-tight">
              {title}
            </h2>
          ) : null}
          {body ? <p className="mt-3 text-base text-muted-foreground leading-relaxed">{body}</p> : null}
        </div>
      )}
      <Accordion variant="light" selectionMode="multiple">
        {items.map((it) => (
          <AccordionItem key={it.id} aria-label={typeof it.question === "string" ? it.question : it.id} title={it.question}>
            {it.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
});
FAQ.displayName = "FAQ";
