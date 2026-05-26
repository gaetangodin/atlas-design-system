/**
 * NewsletterCTA — inline email capture. Headline + body + email + CTA.
 * No backend logic; consumer wires up `onSubmit`.
 */
"use client";
import { forwardRef, useState, type ReactNode, type Ref, type FormEvent } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { cnHero } from "../../../shared/cn-hero";

export interface NewsletterCTAProps {
  title: ReactNode;
  body?: ReactNode;
  ctaLabel?: ReactNode;
  placeholder?: string;
  onSubmit?: (email: string) => void;
  consent?: ReactNode;
  className?: string;
}

export const NewsletterCTA = forwardRef<HTMLElement, NewsletterCTAProps>(function NewsletterCTA(
  { title, body, ctaLabel = "Subscribe", placeholder = "you@example.com", onSubmit, consent, className },
  ref,
) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section
      ref={ref as Ref<HTMLElement>}
      className={cnHero(
        "rounded-2xl border border-border bg-card p-8 sm:p-10 flex flex-col items-center text-center gap-4",
        className,
      )}
    >
      <h2 style={{ fontSize: 24, lineHeight: 1.2, fontWeight: 600 }} className="text-foreground tracking-tight">
        {title}
      </h2>
      {body ? <p className="text-base text-muted-foreground max-w-md leading-relaxed">{body}</p> : null}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-2 w-full max-w-md mt-2">
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={setEmail}
          isRequired
          className="flex-1"
          aria-label="Email"
        />
        <Button type="submit" variant="solid" color="primary">
          {ctaLabel}
        </Button>
      </form>
      {consent ? <div className="text-xs text-muted-foreground">{consent}</div> : null}
    </section>
  );
});
NewsletterCTA.displayName = "NewsletterCTA";
