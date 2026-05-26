/**
 * @deprecated File kept for back-compat — the canonical theme module
 * is now `xeekrs-theme.ts`. This file simply re-exports.
 *
 * Safe to delete in a future major bump once nothing imports from
 * `infrastructure/heroui/preline-theme` directly.
 */
export { xeekrsPlugin, prelinePlugin } from "./xeekrs-theme";
