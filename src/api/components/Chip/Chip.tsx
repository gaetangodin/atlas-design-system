/**
 * Chip — Xeekrs library item ported to Atlas.
 *
 * ⚠️ NAMING CONFLICT (logged in docs/MIGRATION-CONFLICTS.md):
 *   Atlas's `Badge` already wraps HeroUI's `Chip` under the hood —
 *   they are functionally the same primitive (pill-shaped label).
 *   Atlas convention was: `Badge` = HeroUI Chip, `NotificationBadge`
 *   = HeroUI Badge.
 *
 *   To honour the "bring everything in side-by-side" policy this
 *   component re-exposes HeroUI Chip directly, untouched. A human
 *   reconciles later — likely outcome: keep Badge as Atlas's branded
 *   pill, remove Chip (or vice versa).
 *
 *   Until reconciliation, prefer `Badge` for branded usage; reach
 *   for `Chip` only when you need raw HeroUI Chip props (sizes /
 *   variants Atlas hasn't surfaced yet).
 */

import { Chip as HeroUIChip, type ChipProps as HeroUIChipProps } from "@heroui/react";
import { forwardRef } from "react";

export type ChipProps = HeroUIChipProps;

export const Chip = forwardRef<HTMLDivElement, ChipProps>(function Chip(props, ref) {
  return <HeroUIChip ref={ref as never} disableAnimation {...props} />;
});

Chip.displayName = "Chip";
