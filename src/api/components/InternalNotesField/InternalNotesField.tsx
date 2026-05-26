/**
 * InternalNotesField — labelled Textarea with an "internal" visual
 * cue (lock icon + muted band) to signal the content isn't shown to
 * the candidate / public audience.
 *
 * Pattern from Xeekrs's posting / interview flows where staff add
 * private notes alongside public-facing copy. Wraps Atlas's `Textarea`
 * — the field semantics are unchanged.
 */

import { forwardRef, type ChangeEvent } from "react";
import { Lock } from "lucide-react";
import { Textarea } from "../Textarea";
import { cnHero } from "../../../shared/cn-hero";

export interface InternalNotesFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  description?: string;
  minRows?: number;
  maxRows?: number;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  className?: string;
  testId?: string;
  id?: string;
}

export const InternalNotesField = forwardRef<HTMLDivElement, InternalNotesFieldProps>(
  function InternalNotesField(
    {
      label = "Internal notes",
      placeholder = "Visible only to your team — not to the candidate.",
      value,
      defaultValue,
      onChange,
      description = "Internal — not shared with the candidate.",
      minRows = 3,
      maxRows,
      isDisabled,
      isReadOnly,
      className,
      testId,
      id,
    },
    ref,
  ) {
    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero(
          "rounded-xl border border-dashed border-border bg-muted/20 p-3",
          className,
        )}
      >
        <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          <Lock className="size-3 shrink-0" aria-hidden />
          {label}
        </div>
        <Textarea
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={(next) => onChange?.(typeof next === "string" ? next : (next as ChangeEvent<HTMLTextAreaElement>)?.target?.value ?? "")}
          description={description}
          minRows={minRows}
          {...(maxRows ? { maxRows } : {})}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
        />
      </div>
    );
  },
);

InternalNotesField.displayName = "InternalNotesField";
