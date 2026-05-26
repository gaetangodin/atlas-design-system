/**
 * ColorPicker — palette swatch grid + custom hex input.
 * Brand-aligned, lightweight. For full HSL/RGB picking, drop down to
 * a third-party (react-colorful) — we don't ship one in Atlas.
 */
"use client";
import { forwardRef, useState, type Ref } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface ColorPickerProps {
  value?: string;
  defaultValue?: string;
  onChange?: (hex: string) => void;
  /** Palette of swatches. Defaults to Atlas chart + brand palette. */
  swatches?: ReadonlyArray<string>;
  /** Allow free-text hex entry. */
  customInput?: boolean;
  label?: string;
  className?: string;
  isDisabled?: boolean;
}

const DEFAULT_SWATCHES = [
  "#0c2120", "#4c6fdc", "#10b981", "#f59e0b", "#f31260",
  "#14b8a6", "#3b82f6", "#a855f7", "#ef4444", "#f97316",
  "#ededed", "#78716c", "#ffffff",
] as const;

export const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(function ColorPicker(
  { value, defaultValue = "#0c2120", onChange, swatches = DEFAULT_SWATCHES, customInput = true, label, className, isDisabled = false },
  ref,
) {
  const [inner, setInner] = useState<string>(defaultValue);
  const current = value ?? inner;

  const set = (hex: string) => {
    setInner(hex);
    onChange?.(hex);
  };

  return (
    <div ref={ref as Ref<HTMLDivElement>} className={cnHero("flex flex-col gap-2", isDisabled && "opacity-50 pointer-events-none", className)}>
      {label ? <label className="text-sm font-medium text-foreground">{label}</label> : null}
      <div className="flex flex-wrap gap-2">
        {swatches.map((hex) => (
          <button
            key={hex}
            type="button"
            aria-label={`Select ${hex}`}
            onClick={() => set(hex)}
            className={cnHero(
              "size-7 rounded-full border outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              hex.toLowerCase() === current.toLowerCase()
                ? "ring-2 ring-foreground ring-offset-2 ring-offset-background border-transparent"
                : "border-border",
            )}
            style={{ background: hex }}
          />
        ))}
      </div>
      {customInput ? (
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="size-7 rounded-md border border-border shrink-0"
            style={{ background: current }}
          />
          <input
            type="text"
            value={current}
            onChange={(e) => set(e.target.value)}
            placeholder="#0c2120"
            className="flex-1 h-9 rounded-full border border-input bg-input-background px-3 text-sm font-mono text-foreground outline-none focus:border-ring focus:ring-ring/50 focus:ring-[3px]"
          />
        </div>
      ) : null}
    </div>
  );
});
ColorPicker.displayName = "ColorPicker";
