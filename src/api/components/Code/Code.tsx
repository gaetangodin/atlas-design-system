/**
 * Code, Kbd, Snippet — mirror `heroui-branded/display.tsx`.
 */
import { forwardRef, type Ref } from "react";
import {
  Code as HeroUICode,
  Kbd as HeroUIKbd,
  Snippet as HeroUISnippet,
  type CodeProps as HeroUICodeProps,
  type KbdProps as HeroUIKbdProps,
  type SnippetProps as HeroUISnippetProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type CodeProps = HeroUICodeProps;
export type KbdProps = HeroUIKbdProps;
export type SnippetProps = HeroUISnippetProps;

export const Code = forwardRef<HTMLElement, CodeProps>(function Code({ className, ...rest }, ref) {
  return (
    <HeroUICode
      ref={ref as Ref<HTMLElement>}
      {...rest}
      className={cnHero(
        "rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground",
        className,
      )}
    />
  );
});
Code.displayName = "Code";

export const Kbd = forwardRef<HTMLElement, KbdProps>(function Kbd({ classNames, ...rest }, ref) {
  return (
    <HeroUIKbd
      ref={ref as Ref<HTMLElement>}
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero(
          "inline-flex items-center gap-1 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground",
          classNames?.base,
        ),
      }}
    />
  );
});
Kbd.displayName = "Kbd";

export const Snippet = forwardRef<HTMLDivElement, SnippetProps>(function Snippet(
  { classNames, ...rest },
  ref,
) {
  return (
    <HeroUISnippet
      ref={ref as Ref<HTMLDivElement>}
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero(
          "rounded-md border border-border bg-muted px-3 py-2 font-mono text-sm text-foreground",
          classNames?.base,
        ),
        copyButton: cnHero("text-muted-foreground hover:text-foreground", classNames?.copyButton),
      }}
    />
  );
});
Snippet.displayName = "Snippet";
