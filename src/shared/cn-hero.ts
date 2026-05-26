/**
 * `cnHero` — class-name combiner that knows about HeroUI's custom
 * Tailwind tokens (`rounded-large`, `bg-content1`, `text-small`, ...).
 *
 * HeroUI's plugin emits classes that conflict semantically with stock
 * Tailwind ones (`rounded-xl`, `bg-card`, `text-sm`). Default `twMerge`
 * doesn't know they share a scope, so both end up on the element and
 * the CSS cascade picks the winner — usually HeroUI's, which fights
 * Atlas's branded overrides.
 *
 * This is a direct port of `Xeekrsmainapp/src/components/heroui-branded/cn.ts`
 * so wrappers in `api/components` behave identically across both repos.
 */

import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const heroTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      rounded: ["rounded-small", "rounded-medium", "rounded-large"],
      "rounded-t": ["rounded-t-small", "rounded-t-medium", "rounded-t-large"],
      "rounded-b": ["rounded-b-small", "rounded-b-medium", "rounded-b-large"],
      "rounded-l": ["rounded-l-small", "rounded-l-medium", "rounded-l-large"],
      "rounded-r": ["rounded-r-small", "rounded-r-medium", "rounded-r-large"],
      shadow: ["shadow-small", "shadow-medium", "shadow-large"],
      "font-size": ["text-tiny", "text-small", "text-medium"],
      "bg-color": [
        "bg-content1",
        "bg-content2",
        "bg-content3",
        "bg-content4",
        "bg-default",
        "bg-default-50",
        "bg-default-100",
        "bg-default-200",
        "bg-default-300",
        "bg-default-400",
        "bg-default-500",
        "bg-default-600",
        "bg-default-700",
        "bg-default-800",
        "bg-default-900",
        "bg-focus",
        "bg-overlay",
        "bg-divider",
      ],
      "text-color": [
        "text-content1",
        "text-content1-foreground",
        "text-content2",
        "text-content2-foreground",
        "text-content3",
        "text-content3-foreground",
        "text-content4",
        "text-content4-foreground",
        "text-default",
        "text-default-50",
        "text-default-100",
        "text-default-200",
        "text-default-300",
        "text-default-400",
        "text-default-500",
        "text-default-600",
        "text-default-700",
        "text-default-800",
        "text-default-900",
        "text-default-foreground",
        "text-primary-foreground",
        "text-secondary-foreground",
        "text-success-foreground",
        "text-warning-foreground",
        "text-danger-foreground",
        "text-focus",
        "text-overlay",
      ],
      "border-color": [
        "border-default",
        "border-default-50",
        "border-default-100",
        "border-default-200",
        "border-default-300",
        "border-default-400",
        "border-focus",
        "border-divider",
      ],
    },
    conflictingClassGroups: {
      rounded: ["rounded-t", "rounded-b", "rounded-l", "rounded-r"],
    },
  },
});

export function cnHero(...inputs: ClassValue[]): string {
  return heroTwMerge(clsx(inputs));
}
