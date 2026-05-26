/**
 * Lucide adapter for the IconRegistry port.
 *
 * Implements `IconRegistryPort` defined in application/. api/ depends on
 * the port, never on this file directly — swap Lucide for another set
 * by writing a sibling adapter.
 */

import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Search,
  X,
  AlertCircle,
  Info,
  CircleCheck,
  TriangleAlert,
} from "lucide-react";
import type { IconRegistryPort } from "../../application/ports/IconRegistry";

const map = {
  check: Check,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  eye: Eye,
  "eye-off": EyeOff,
  search: Search,
  close: X,
  "alert-circle": AlertCircle,
  info: Info,
  "circle-check": CircleCheck,
  warning: TriangleAlert,
} as const;

type IconName = keyof typeof map;

export const lucideIconRegistry: IconRegistryPort = {
  render(name, props) {
    const Component = map[name as IconName];
    if (!Component) return null;
    return <Component size={props?.size ?? 16} className={props?.className} aria-hidden="true" />;
  },
  has(name) {
    return name in map;
  },
  list() {
    return Object.keys(map);
  },
};
