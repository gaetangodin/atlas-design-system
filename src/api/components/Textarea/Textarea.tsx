/**
 * Textarea — public component.
 *
 * Direct port of `Xeekrsmainapp/src/components/heroui-branded/input.tsx`
 * `BrandedTextarea`. Uses `radius="lg"` (12px) instead of pill — pill
 * doesn't read as a textarea.
 */

import { forwardRef } from "react";
import { Textarea as HeroUITextarea } from "@heroui/react";
import type { TextareaProps } from "../../../contracts/component-props";
import { cnHero } from "../../../shared/cn-hero";
import { HEROUI_OUTSIDE_LABEL_PLACEHOLDER } from "../Input/Input";

const TEXTAREA_WRAPPER =
  "flex w-full rounded-md border border-input bg-input-background " +
  "px-3 py-2 text-base transition-colors " +
  "data-[hover=true]:border-input data-[focus=true]:border-ring " +
  "data-[focus=true]:ring-ring/50 data-[focus=true]:ring-[3px]";

const INPUT_BASE =
  "w-full bg-transparent text-base text-foreground outline-none " +
  "placeholder:text-muted-foreground min-h-[60px] resize-none " +
  "disabled:cursor-not-allowed disabled:opacity-50";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(props, ref) {
  const {
    variant = "bordered",
    size = "md",
    radius = "lg",
    label,
    labelPlacement = "outside",
    description,
    errorMessage,
    placeholder,
    value,
    defaultValue,
    onChange,
    isInvalid = false,
    isDisabled = false,
    isReadOnly = false,
    isRequired = false,
    minRows = 3,
    maxRows,
    name,
    autoComplete,
    className,
    testId,
    id,
  } = props;

  const effectivePlaceholder =
    labelPlacement === "outside" && label != null && (placeholder == null || placeholder === "")
      ? HEROUI_OUTSIDE_LABEL_PLACEHOLDER
      : placeholder;

  return (
    <HeroUITextarea
      ref={ref}
      id={id}
      name={name}
      label={label}
      labelPlacement={labelPlacement}
      description={description}
      errorMessage={errorMessage}
      placeholder={effectivePlaceholder}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onChange}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      minRows={minRows}
      maxRows={maxRows}
      autoComplete={autoComplete}
      variant={variant}
      size={size}
      radius={radius}
      data-testid={testId}
      classNames={{
        base: cnHero("w-full min-w-0"),
        label: cnHero("text-sm font-medium text-foreground", "mb-1.5 text-left"),
        inputWrapper: cnHero(TEXTAREA_WRAPPER),
        input: cnHero(INPUT_BASE),
        description: "text-xs text-muted-foreground",
        errorMessage: "text-xs text-destructive",
      }}
      className={className}
    />
  );
});

Textarea.displayName = "Textarea";
