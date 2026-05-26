/**
 * BottomSheet — Vaul wrapper, themed Xeekrs.
 *
 * Vaul is the canonical React mobile sheet (drag-handle, snap points,
 * spring physics). Atlas wraps it with brand chrome. `vaul` is an
 * optional peer dep — install it in the consumer app if you need this
 * component.
 */
"use client";
import { Drawer as Vaul } from "vaul";
import { cnHero } from "../../../shared/cn-hero";
import type { ComponentProps, ReactNode } from "react";

export type BottomSheetRootProps = ComponentProps<typeof Vaul.Root>;
export type BottomSheetContentProps = ComponentProps<typeof Vaul.Content> & { children?: ReactNode };

export const BottomSheet = Vaul.Root;
export const BottomSheetTrigger = Vaul.Trigger;
export const BottomSheetPortal = Vaul.Portal;
export const BottomSheetClose = Vaul.Close;

export function BottomSheetOverlay({ className, ...rest }: ComponentProps<typeof Vaul.Overlay>) {
  return (
    <Vaul.Overlay
      {...rest}
      className={cnHero("fixed inset-0 z-50 bg-foreground/55 backdrop-blur-sm", className)}
    />
  );
}

export function BottomSheetContent({ className, children, ...rest }: BottomSheetContentProps) {
  return (
    <Vaul.Content
      {...rest}
      className={cnHero(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-2xl border border-border bg-background text-foreground",
        "after:!hidden",
        className,
      )}
    >
      <div aria-hidden="true" className="mx-auto mt-3 mb-2 h-1 w-12 rounded-full bg-border" />
      <div className="flex-1 overflow-auto px-6 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2">
        {children}
      </div>
    </Vaul.Content>
  );
}

export function BottomSheetTitle({ className, ...rest }: ComponentProps<typeof Vaul.Title>) {
  return (
    <Vaul.Title
      {...rest}
      className={cnHero("text-base font-medium text-foreground mb-1.5", className)}
    />
  );
}

export function BottomSheetDescription({ className, ...rest }: ComponentProps<typeof Vaul.Description>) {
  return (
    <Vaul.Description
      {...rest}
      className={cnHero("text-sm text-muted-foreground mb-4", className)}
    />
  );
}
