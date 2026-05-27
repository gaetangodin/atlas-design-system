/**
 * Layout custom-property tokens — match the Xeekrs `globals.css` layout
 * variables so consumers don't have to redeclare them in their app's CSS.
 *
 * These are *layout* tokens (heights, widths, sticky-stack offsets)
 * rather than colors. Components reach for them via Tailwind arbitrary
 * values when they need to anchor to the app shell.
 *
 * domain/ rule: no framework deps. Plain strings.
 */

export const layoutVars = {
  /** Fixed app header (`TopBar` / `MobileTopBar`) row height. */
  appHeaderHeight: { var: "--app-header-height", fallback: "56px" },
  /** Measured height of the announcement-alert-bar stack; 0 when hidden. */
  announcementAlertBarsHeight: { var: "--announcement-alert-bars-height", fallback: "0px" },
  /**
   * Top of the first fixed UI below the header row: safe-area + header +
   * announcement stack. Use as `top: var(--app-fixed-header-stack-top)`
   * for sticky sub-bars.
   */
  appFixedHeaderStackTop: {
    var: "--app-fixed-header-stack-top",
    fallback: "calc(env(safe-area-inset-top, 0px) + var(--app-header-height, 56px) + var(--announcement-alert-bars-height, 0px))",
  },
  /** Fixed recruitment subnav row height (sticky tabs + border). */
  recruitmentSubnavBarHeight: { var: "--recruitment-subnav-bar-height", fallback: "4.5rem" },
  /** Desktop sidebar rail width — collapsed state. */
  sidebarRailWidthCollapsed: { var: "--sidebar-rail-width-collapsed", fallback: "64px" },
  /** Desktop sidebar rail width — expanded state. */
  sidebarRailWidthExpanded: { var: "--sidebar-rail-width-expanded", fallback: "252px" },
  /** Overridden on `main.main-content-*`; aligns sticky subbars to the content column. */
  workMainContentInsetLeft: { var: "--work-main-content-inset-left", fallback: "0px" },
  /** Segment tab track (`.breadcrumb-tabs-row`); reused for chips on MessagesWorkspaceRoute, ReportsView, etc. */
  breadcrumbTabsRowBg: { var: "--breadcrumb-tabs-row-bg", fallback: "#edede8" },
} as const;

export type LayoutVarKey = keyof typeof layoutVars;

/** Produce a `var(--token, fallback)` CSS string for a layout token. */
export function layoutVar(key: LayoutVarKey): string {
  const t = layoutVars[key];
  return `var(${t.var}, ${t.fallback})`;
}
