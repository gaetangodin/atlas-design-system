/**
 * Playground feature — pure helpers.
 *
 * No state, no hooks, no imports from components. Explicit params,
 * explicit returns.
 */

import type { ReactNode } from "react";
import {
  Bell,
  Check,
  CircleAlert,
  CircleDot,
  Home,
  Inbox,
  Settings,
} from "lucide-react";
import type { IconKey, TimelineIconKey } from "../types/playground.types";
import { PROGRESS_MAX, PROGRESS_MIN } from "../constants/playground.constants";

/** Clamp a progress value to [PROGRESS_MIN, PROGRESS_MAX]. */
export function clampProgress(value: number): number {
  if (value < PROGRESS_MIN) return PROGRESS_MIN;
  if (value > PROGRESS_MAX) return PROGRESS_MAX;
  return value;
}

/** Render the lucide icon for a given mock IconKey at a given pixel size. */
export function renderNavIcon(key: IconKey, sizeClass: string): ReactNode {
  switch (key) {
    case "home":
      return <Home className={sizeClass} />;
    case "inbox":
      return <Inbox className={sizeClass} />;
    case "settings":
      return <Settings className={sizeClass} />;
    case "alerts":
      return <Bell className={sizeClass} />;
    case "me":
      return <Settings className={sizeClass} />;
  }
}

/** Render the lucide icon for a given mock TimelineIconKey. */
export function renderTimelineIcon(key: TimelineIconKey): ReactNode {
  switch (key) {
    case "circleDot":
      return <CircleDot className="size-3.5" />;
    case "check":
      return <Check className="size-3.5" />;
    case "alert":
      return <CircleAlert className="size-3.5" />;
  }
}
