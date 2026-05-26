/**
 * Playground feature — shared static values.
 *
 * Anything used by more than one file in the feature lands here.
 */

import type { IntentColor, PlaygroundNavItem } from "../types/playground.types";

export const INTENT_COLORS: readonly IntentColor[] = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
] as const;

export const PLAYGROUND_NAV: readonly PlaygroundNavItem[] = [
  { id: "foundations", label: "Foundations & brand" },
  { id: "shell-chrome", label: "Shell & chrome" },
  { id: "topbar", label: "TopBar & shells" },
  { id: "route-shells", label: "Route shells" },
  { id: "layouts", label: "Dashboards & modals" },
  { id: "discovery", label: "Discovery & marketing" },
  { id: "announcements", label: "Announcements" },
  { id: "recruitment", label: "Recruitment" },
  { id: "recruitment-compositions", label: "Recruitment compositions" },
  { id: "posting-flow", label: "Posting flow" },
  { id: "more-primitives", label: "More primitives" },
  { id: "buttons", label: "Buttons" },
  { id: "cards", label: "Cards & stats" },
  { id: "badges", label: "Badges" },
  { id: "inputs", label: "Inputs" },
  { id: "pickers", label: "Selects" },
  { id: "forms", label: "Form controls" },
  { id: "file-upload", label: "File upload" },
  { id: "dates", label: "Dates & times" },
  { id: "feedback", label: "Feedback" },
  { id: "banners", label: "Banners & toasts" },
  { id: "display", label: "Display" },
  { id: "lists", label: "Description list" },
  { id: "timeline", label: "Timeline" },
  { id: "empty-state", label: "Empty state" },
  { id: "layout", label: "Layout" },
  { id: "navigation", label: "Navigation" },
  { id: "shells", label: "Shells" },
  { id: "overlays", label: "Overlays" },
  { id: "table", label: "Table" },
  { id: "charts", label: "Charts" },
  { id: "carousel", label: "Carousel" },
] as const;

export const PROGRESS_STEP = 10;
export const PROGRESS_MIN = 0;
export const PROGRESS_MAX = 100;
