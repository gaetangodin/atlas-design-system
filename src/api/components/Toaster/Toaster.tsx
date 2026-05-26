/**
 * Toaster — Sonner re-export, themed Xeekrs.
 *
 * Sonner is the canonical toast lib for React. Atlas exposes the
 * provider with brand classNames + the imperative `toast()` API.
 *
 * Mount once near the root: `<AtlasProvider>...<Toaster /></AtlasProvider>`.
 */
"use client";
import { Toaster as SonnerToaster, toast as sonnerToast, type ToasterProps as SonnerToasterProps } from "sonner";
import { cnHero } from "../../../shared/cn-hero";

export type ToasterProps = SonnerToasterProps;

export function Toaster(props: ToasterProps) {
  const { toastOptions, ...rest } = props;
  return (
    <SonnerToaster
      richColors={false}
      closeButton
      {...rest}
      toastOptions={{
        ...toastOptions,
        classNames: {
          toast: cnHero(
            "rounded-lg border border-border bg-background text-foreground shadow-md p-4 gap-3",
            toastOptions?.classNames?.toast,
          ),
          title: cnHero("text-sm font-medium text-foreground", toastOptions?.classNames?.title),
          description: cnHero("text-sm text-muted-foreground", toastOptions?.classNames?.description),
          actionButton: cnHero(
            "inline-flex items-center justify-center h-7 px-3 rounded-full bg-primary text-primary-foreground text-xs font-medium",
            toastOptions?.classNames?.actionButton,
          ),
          cancelButton: cnHero(
            "inline-flex items-center justify-center h-7 px-3 rounded-full bg-muted text-foreground text-xs font-medium",
            toastOptions?.classNames?.cancelButton,
          ),
          success: cnHero(
            "border-success/30 bg-success/10 text-success",
            toastOptions?.classNames?.success,
          ),
          error: cnHero(
            "border-destructive/30 bg-destructive/10 text-destructive",
            toastOptions?.classNames?.error,
          ),
          warning: cnHero(
            "border-warning/30 bg-warning/10 text-warning",
            toastOptions?.classNames?.warning,
          ),
          info: cnHero("border-info/30 bg-info/10 text-info", toastOptions?.classNames?.info),
        },
      }}
    />
  );
}

// Re-export Sonner's `toast` API as-is. The explicit `typeof` annotation
// avoids a TS4023 ("cannot name external type") when the declaration is
// emitted, because Sonner uses internal anonymous types in the function
// surface.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toast: typeof sonnerToast = sonnerToast as any;
