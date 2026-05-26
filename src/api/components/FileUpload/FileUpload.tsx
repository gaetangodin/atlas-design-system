/**
 * FileUpload — drag-and-drop dropzone matching Preline's file-upload
 * pattern, themed Xeekrs.
 *
 * No HeroUI primitive — built on native `<input type="file">` plus
 * dragenter/dragover/drop handlers. Accessible: keyboard activation
 * triggers the file picker, aria-label describes the dropzone, and
 * the underlying input remains focusable for screen readers.
 */
"use client";
import { forwardRef, useRef, useState, type ReactNode, type Ref, type DragEvent, type ChangeEvent } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface FileUploadProps {
  /** Called with the selected files (single or multiple). */
  onFiles?: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
  isDisabled?: boolean;
  /** Custom headline (defaults to "Drop files or browse"). */
  label?: ReactNode;
  /** Custom helper line under the headline. */
  description?: ReactNode;
  /** Replace the default cloud-upload icon. */
  icon?: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
}

const DefaultIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="17 8 12 3 7 8" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="3" x2="12" y2="15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FileUpload = forwardRef<HTMLDivElement, FileUploadProps>(function FileUpload(
  {
    onFiles,
    multiple = false,
    accept,
    isDisabled = false,
    label = "Drop files or browse",
    description = "PNG, JPG, PDF up to 10MB",
    icon,
    className,
    testId,
    id,
  },
  ref,
) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragOver, setDragOver] = useState(false);

  const open = () => inputRef.current?.click();

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    if (isDisabled) return;
    const files = Array.from(e.dataTransfer.files);
    if (files.length) onFiles?.(multiple ? files : [files[0]!]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length) onFiles?.(files);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div
      ref={ref as Ref<HTMLDivElement>}
      id={id}
      data-testid={testId}
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      aria-label={typeof label === "string" ? label : "File upload"}
      aria-disabled={isDisabled || undefined}
      onClick={isDisabled ? undefined : open}
      onKeyDown={(e) => {
        if (isDisabled) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      }}
      onDragOver={(e) => {
        e.preventDefault();
        if (!isDisabled) setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      className={cnHero(
        "flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed bg-background px-6 py-10 text-center transition-colors",
        "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        isDragOver
          ? "border-primary bg-primary/5"
          : "border-border hover:bg-muted/40 hover:border-input",
        isDisabled && "opacity-50 pointer-events-none",
        className,
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-full bg-muted text-foreground">
        {icon ?? <DefaultIcon />}
      </div>
      <div>
        <div className="text-sm font-medium text-foreground">{label}</div>
        {description ? (
          <div className="text-xs text-muted-foreground mt-1">{description}</div>
        ) : null}
      </div>
      <input
        ref={inputRef}
        type="file"
        multiple={multiple}
        accept={accept}
        disabled={isDisabled}
        onChange={handleChange}
        className="sr-only"
        tabIndex={-1}
      />
    </div>
  );
});
FileUpload.displayName = "FileUpload";
