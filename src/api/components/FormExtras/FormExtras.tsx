/**
 * Form-extra primitives — small wrappers for common form patterns.
 *
 *  - `LanguageSwitcher`                   — locale picker dropdown.
 *  - `AboutRoleRichTextEditor`            — minimal rich-text shell
 *                                            with toolbar slot.
 *  - `ResponsibilitiesBulletEditor`       — bullet-list editor for
 *                                            "key responsibilities" type fields.
 *  - `SupportTicketForm`                  — slot-based ticket form.
 */
import { forwardRef, useState, type FormEvent, type ReactNode } from "react";
import { Globe, Plus, X } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── LanguageSwitcher ────────────────────────── */

export interface LanguageOption {
  code: string;
  label: string;
}

export interface LanguageSwitcherProps {
  options: LanguageOption[];
  value: string;
  onChange: (code: string) => void;
  className?: string;
  testId?: string;
}

export function LanguageSwitcher({ options, value, onChange, className, testId }: LanguageSwitcherProps) {
  return (
    <label data-testid={testId} className={cnHero("relative inline-flex items-center gap-1.5 text-sm text-muted-foreground", className)}>
      <Globe className="size-4" aria-hidden />
      <span className="sr-only">Language</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-transparent pr-4 font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {options.map((o) => (
          <option key={o.code} value={o.code}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

/* ────────────────────── AboutRoleRichTextEditor ─────────────────── */

export interface AboutRoleRichTextEditorProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** Toolbar slot — apps pass their own formatting buttons. */
  toolbar?: ReactNode;
  minRows?: number;
  className?: string;
  testId?: string;
}

export const AboutRoleRichTextEditor = forwardRef<HTMLTextAreaElement, AboutRoleRichTextEditorProps>(
  function AboutRoleRichTextEditor(
    { value, defaultValue, onChange, placeholder, toolbar, minRows = 6, className, testId },
    ref,
  ) {
    return (
      <div data-testid={testId} className={cnHero("rounded-xl border border-border bg-card", className)}>
        {toolbar ? (
          <div className="flex flex-wrap items-center gap-1.5 border-b border-border bg-muted/30 px-2 py-1.5">
            {toolbar}
          </div>
        ) : null}
        <textarea
          ref={ref}
          rows={minRows}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder ?? "About the role…"}
          onChange={(e) => onChange?.(e.target.value)}
          className="block w-full resize-y border-0 bg-transparent px-3 py-2.5 text-sm leading-relaxed text-foreground focus:outline-none"
        />
      </div>
    );
  },
);
AboutRoleRichTextEditor.displayName = "AboutRoleRichTextEditor";

/* ────────────────────── ResponsibilitiesBulletEditor ────────────── */

export interface ResponsibilitiesBulletEditorProps {
  value: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
  className?: string;
  testId?: string;
}

export function ResponsibilitiesBulletEditor({
  value,
  onChange,
  placeholder = "Add a responsibility",
  className,
  testId,
}: ResponsibilitiesBulletEditorProps) {
  const [draft, setDraft] = useState("");
  const addBullet = (): void => {
    if (!draft.trim()) return;
    onChange([...value, draft.trim()]);
    setDraft("");
  };
  return (
    <div data-testid={testId} className={cnHero("space-y-2", className)}>
      <ul className="space-y-1.5">
        {value.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm">
            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-muted-foreground" aria-hidden />
            <span className="min-w-0 flex-1">{bullet}</span>
            <button
              type="button"
              onClick={() => onChange(value.filter((_, i) => i !== idx))}
              aria-label="Remove bullet"
              className="inline-flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-3.5" />
            </button>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addBullet();
            }
          }}
          placeholder={placeholder}
          className="flex-1 rounded-md border border-border bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <button
          type="button"
          onClick={addBullet}
          aria-label="Add bullet"
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Plus className="size-4" />
        </button>
      </div>
    </div>
  );
}

/* ────────────────────── SupportTicketForm ───────────────────────── */

export interface SupportTicketFormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  /** Slots for the actual fields — apps wire their own form library. */
  subjectField?: ReactNode;
  categoryField?: ReactNode;
  descriptionField?: ReactNode;
  attachmentField?: ReactNode;
  /** Footer slot — defaults to Cancel + Submit. */
  actions?: ReactNode;
  className?: string;
  testId?: string;
}

export function SupportTicketForm({
  onSubmit,
  subjectField,
  categoryField,
  descriptionField,
  attachmentField,
  actions,
  className,
  testId,
}: SupportTicketFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      data-testid={testId}
      className={cnHero("space-y-4 rounded-2xl border border-border bg-card p-5", className)}
    >
      {subjectField ? <div>{subjectField}</div> : null}
      {categoryField ? <div>{categoryField}</div> : null}
      {descriptionField ? <div>{descriptionField}</div> : null}
      {attachmentField ? <div>{attachmentField}</div> : null}
      {actions ? <div className="flex justify-end gap-2 pt-2">{actions}</div> : null}
    </form>
  );
}
