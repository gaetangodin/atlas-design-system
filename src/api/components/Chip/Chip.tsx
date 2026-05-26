/**
 * Chip — raw HeroUI Chip exposed through Atlas.
 *
 * Atlas ships **both** `Badge` and `Chip` (decided 2026-05):
 *   - `Badge`  — the branded, opinionated Atlas pill (disables
 *                animation, named-utility colors, tuned defaults).
 *                Reach for this in branded surfaces.
 *   - `Chip`   — raw HeroUI Chip API, untouched. Use when you need
 *                HeroUI's full prop surface (sizes / variants Atlas
 *                hasn't reshaped yet).
 *
 * Note: HeroUI's own `Badge` is a different primitive — the
 * notification dot wrapper, exported in Atlas as `NotificationBadge`.
 *
 * See `docs/MIGRATION-CONFLICTS.md` for the full reconciliation note.
 */

import { Chip as HeroUIChip, type ChipProps as HeroUIChipProps } from "@heroui/react";
import { forwardRef } from "react";

export type ChipProps = HeroUIChipProps;

export const Chip = forwardRef<HTMLDivElement, ChipProps>(function Chip(props, ref) {
  return <HeroUIChip ref={ref as never} disableAnimation {...props} />;
});

Chip.displayName = "Chip";
