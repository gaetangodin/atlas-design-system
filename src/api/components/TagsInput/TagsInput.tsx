/**
 * TagsInput — pill input that turns text into removable tags.
 * Composes a native input with `Badge`-style chips. Brand styling.
 */
"use client";
import { forwardRef, useState, type Ref, type KeyboardEvent } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface TagsInputProps {
  value?: string[];
  defaultValue?: string[];
  onChange?: (tags: string[]) => void;
  placeholder?: string;
  isDisabled?: boolean;
  /** Maximum number of tags. Excess input is ignored after the limit. */
  maxTags?: number;
  label?: string;
  description?: string;
  className?: string;
  id?: string;
  testId?: string;
}

export const TagsInput = forwardRef<HTMLDivElement, TagsInputProps>(function TagsInput(
  {
    value,
    defaultValue,
    onChange,
    placeholder = "Type and press Enter",
    isDisabled = false,
    maxTags,
    label,
    description,
    className,
    id,
    testId,
  },
  ref,
) {
  const [inner, setInner] = useState<string[]>(defaultValue ?? []);
  const tags = value ?? inner;
  const [draft, setDraft] = useState("");

  const update = (next: string[]) => {
    setInner(next);
    onChange?.(next);
  };

  const addTag = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    if (tags.includes(trimmed)) return;
    if (maxTags && tags.length >= maxTags) return;
    update([...tags, trimmed]);
    setDraft("");
  };

  const removeTag = (idx: number) => {
    const next = [...tags];
    next.splice(idx, 1);
    update(next);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (isDisabled) return;
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(draft);
    } else if (e.key === "Backspace" && draft === "" && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  return (
    <div ref={ref as Ref<HTMLDivElement>} className={cnHero("w-full min-w-0", className)} data-testid={testId}>
      {label ? (
        <label htmlFor={id} className="block text-sm font-medium text-foreground mb-1.5">
          {label}
        </label>
      ) : null}
      <div
        className={cnHero(
          "flex flex-wrap items-center gap-1.5 min-h-9 w-full rounded-full border border-input bg-input-background px-2 py-1.5 text-base transition-colors",
          "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
          isDisabled && "opacity-50 pointer-events-none",
        )}
      >
        {tags.map((tag, idx) => (
          <span
            key={`${tag}-${idx}`}
            className="inline-flex items-center gap-1 rounded-md bg-muted text-foreground text-xs font-medium pl-2 pr-1 py-0.5"
          >
            {tag}
            <button
              type="button"
              aria-label={`Remove ${tag}`}
              className="inline-flex items-center justify-center size-4 rounded-full text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
              onClick={() => removeTag(idx)}
              disabled={isDisabled}
            >
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1.5 1.5L7.5 7.5M7.5 1.5L1.5 7.5" strokeLinecap="round" />
              </svg>
            </button>
          </span>
        ))}
        <input
          id={id}
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={tags.length === 0 ? placeholder : ""}
          disabled={isDisabled}
          className="flex-1 min-w-[60px] bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>
      {description ? (
        <div className="text-xs text-muted-foreground mt-1">{description}</div>
      ) : null}
    </div>
  );
});
TagsInput.displayName = "TagsInput";
