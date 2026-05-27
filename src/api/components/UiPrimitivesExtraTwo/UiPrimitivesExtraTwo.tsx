/**
 * Second batch of small ui/ primitives — gaps surfaced during the v0.6
 * audit of `Xeekrsmainapp/src/components/ui/`.
 *
 *  - `Collapsible`              — standalone disclosure (header + body).
 *  - `Label`                    — standalone form label primitive.
 *  - `Menubar` / `MenubarMenu`  — horizontal menu bar with dropdown items.
 *  - `ConsentScrollTableFrame`  — scrollable framed container used by
 *                                 consent / disclosure tables.
 *  - `ToggleGroup`              — connected segmented toggle group.
 */

import { type ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── Collapsible ─────────────────────────────── */

export interface CollapsibleProps {
  /** Header content (always visible). */
  header: ReactNode;
  /** Body content (visible when open). */
  children: ReactNode;
  /** Default open state. Uncontrolled by default. */
  defaultOpen?: boolean;
  /** Controlled open state. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Disable the trigger. */
  disabled?: boolean;
  className?: string;
}
export function Collapsible({
  header, children, defaultOpen = false, open: openProp, onOpenChange, disabled, className,
}: CollapsibleProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const open = isControlled ? !!openProp : uncontrolledOpen;
  const toggle = () => {
    if (disabled) return;
    const next = !open;
    if (!isControlled) setUncontrolledOpen(next);
    onOpenChange?.(next);
  };
  return (
    <div className={cnHero("rounded-xl border border-border bg-card", className)}>
      <button
        type="button"
        onClick={toggle}
        disabled={disabled}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm font-medium text-foreground transition hover:bg-muted/40 disabled:opacity-50"
      >
        <span className="min-w-0 flex-1">{header}</span>
        <ChevronDown
          className={cnHero("size-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>
      {open ? <div className="border-t border-border px-3 py-2 text-sm text-foreground">{children}</div> : null}
    </div>
  );
}

/* ────────────────────── Label ───────────────────────────────────── */

export interface LabelProps {
  htmlFor?: string;
  /** Visually mark the label as required. */
  required?: boolean;
  /** Optional helper text shown below the label. */
  helperText?: ReactNode;
  children: ReactNode;
  className?: string;
}
export function Label({ htmlFor, required, helperText, children, className }: LabelProps) {
  return (
    <span className={cnHero("flex flex-col gap-0.5", className)}>
      <label htmlFor={htmlFor} className="text-xs font-semibold text-foreground">
        {children}
        {required ? <span aria-hidden className="ml-0.5 text-destructive">*</span> : null}
      </label>
      {helperText ? <span className="text-[10px] text-muted-foreground">{helperText}</span> : null}
    </span>
  );
}

/* ────────────────────── Menubar ─────────────────────────────────── */

export interface MenubarItem {
  id: string;
  label: ReactNode;
  /** Optional shortcut text. */
  shortcut?: string;
  /** Optional icon. */
  icon?: ReactNode;
  /** Render as a destructive item. */
  destructive?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
}
export interface MenubarMenu {
  id: string;
  label: ReactNode;
  items: MenubarItem[];
}
export interface MenubarProps {
  menus: MenubarMenu[];
  className?: string;
}
/**
 * Horizontal menu bar (like a macOS / VSCode menu strip). Each entry
 * opens a dropdown on click; hover-to-switch across already-open menus.
 */
export function Menubar({ menus, className }: MenubarProps) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div role="menubar" className={cnHero("flex items-center gap-1 rounded-lg border border-border bg-card p-1", className)}>
      {menus.map((m) => {
        const isOpen = open === m.id;
        return (
          <div key={m.id} className="relative">
            <button
              type="button"
              role="menuitem"
              aria-haspopup="menu"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : m.id)}
              onMouseEnter={() => open && setOpen(m.id)}
              className={cnHero(
                "rounded-md px-2 py-1 text-sm font-medium transition",
                isOpen ? "bg-muted/60 text-foreground" : "text-foreground hover:bg-muted/40",
              )}
            >
              {m.label}
            </button>
            {isOpen ? (
              <ul
                role="menu"
                className="absolute left-0 top-full z-40 mt-1 min-w-[200px] rounded-xl border border-border bg-background p-1 text-sm shadow-lg"
                onMouseLeave={() => setOpen(null)}
              >
                {m.items.map((it) => (
                  <li key={it.id}>
                    <button
                      type="button"
                      role="menuitem"
                      disabled={it.disabled}
                      onClick={() => {
                        if (it.disabled) return;
                        it.onSelect?.();
                        setOpen(null);
                      }}
                      className={cnHero(
                        "flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left transition",
                        it.destructive ? "text-destructive hover:bg-pink-50" : "text-foreground hover:bg-muted/40",
                        it.disabled && "cursor-not-allowed opacity-50",
                      )}
                    >
                      <span className="inline-flex items-center gap-2">
                        {it.icon ? <span className="text-muted-foreground">{it.icon}</span> : null}
                        {it.label}
                      </span>
                      {it.shortcut ? <kbd className="font-mono text-[10px] text-muted-foreground">{it.shortcut}</kbd> : null}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

/* ────────────────────── ConsentScrollTableFrame ─────────────────── */

export interface ConsentScrollTableFrameProps {
  /** Header / table heading row (rendered above the scroll area). */
  header?: ReactNode;
  /** Footer (e.g. "Accept" CTA below the scroll body). */
  footer?: ReactNode;
  /** Scrollable body — a long table or consent text. */
  children: ReactNode;
  /** Constrain the scroll height — Tailwind class. Default `h-64`. */
  height?: string;
  /** Optional eyebrow / caption above the table. */
  caption?: ReactNode;
  className?: string;
}
/**
 * Framed scrollable container used by consent agreements + long
 * disclosure tables. Provides the chrome (rounded border + header +
 * scroll area + footer); the consumer supplies the actual content.
 */
export function ConsentScrollTableFrame({
  header, footer, children, height = "h-64", caption, className,
}: ConsentScrollTableFrameProps) {
  return (
    <section className={cnHero("flex w-full flex-col gap-2", className)}>
      {caption ? <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{caption}</p> : null}
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        {header ? <header className="border-b border-border bg-muted/30 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{header}</header> : null}
        <div className={cnHero("overflow-y-auto px-3 py-2 text-sm text-foreground", height)}>
          {children}
        </div>
        {footer ? <footer className="border-t border-border bg-muted/20 px-3 py-2">{footer}</footer> : null}
      </div>
    </section>
  );
}

/* ────────────────────── ToggleGroup ─────────────────────────────── */

export interface ToggleGroupOption {
  id: string;
  label: ReactNode;
  /** Optional icon (rendered before the label). */
  icon?: ReactNode;
  disabled?: boolean;
}
export type ToggleGroupSize = "sm" | "md" | "lg";
export interface ToggleGroupProps {
  options: ToggleGroupOption[];
  /** Selected option id(s). */
  value: string | string[];
  /** Allow multiple selections. */
  multiple?: boolean;
  onChange: (next: string | string[]) => void;
  size?: ToggleGroupSize;
  /** Accessible label for the group. */
  ariaLabel?: string;
  className?: string;
}
const TOGGLE_SIZE: Record<ToggleGroupSize, string> = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
  lg: "px-4 py-2 text-sm",
};
export function ToggleGroup({
  options, value, multiple, onChange, size = "md", ariaLabel, className,
}: ToggleGroupProps) {
  const values = Array.isArray(value) ? value : [value];
  const isSelected = (id: string) => values.includes(id);
  const toggle = (id: string) => {
    if (multiple) {
      const next = isSelected(id) ? values.filter((v) => v !== id) : [...values, id];
      onChange(next);
    } else {
      onChange(id);
    }
  };
  return (
    <div role="group" aria-label={ariaLabel} className={cnHero("inline-flex items-center rounded-xl border border-border bg-card p-0.5", className)}>
      {options.map((o) => {
        const selected = isSelected(o.id);
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={selected}
            disabled={o.disabled}
            onClick={() => !o.disabled && toggle(o.id)}
            className={cnHero(
              "inline-flex items-center gap-1.5 rounded-lg font-medium transition",
              TOGGLE_SIZE[size],
              selected ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted/40",
              o.disabled && "cursor-not-allowed opacity-50",
            )}
          >
            {o.icon ? <span aria-hidden>{o.icon}</span> : null}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
