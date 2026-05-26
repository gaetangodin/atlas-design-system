/**
 * Input — public component.
 *
 * Direct port of `Xeekrsmainapp/src/components/heroui-branded/input.tsx`.
 * Pill-shaped (`radius="full"`), bordered variant, h-9. Uses Xeekrs
 * CSS-var Tailwind classes (`bg-input-background`, `border-input`,
 * `ring-ring`, `text-muted-foreground`).
 */

import { forwardRef } from "react";
import {
  Input as HeroUIInput,
  type InputProps as HeroUIInputProps,
} from "@heroui/react";
import type { InputProps } from "../../../contracts/component-props";
import { cnHero } from "../../../shared/cn-hero";

/**
 * HeroUI's `useInput` only treats `labelPlacement="outside"` as truly
 * outside the field when `placeholder`, `startContent`, or `outside-left`
 * is set. A zero-width-space keeps the DOM placeholder visually empty
 * while satisfying that condition.
 */
export const HEROUI_OUTSIDE_LABEL_PLACEHOLDER = "​";

const WRAPPER_BASE =
  "flex h-9 w-full items-center rounded-full border border-input bg-input-background " +
  "px-3 text-base transition-colors " +
  "data-[hover=true]:border-input data-[focus=true]:border-ring " +
  "data-[focus=true]:ring-ring/50 data-[focus=true]:ring-[3px] " +
  "data-[invalid=true]:border-destructive data-[invalid=true]:ring-destructive/20";

const INPUT_BASE =
  "w-full bg-transparent text-base text-foreground outline-none " +
  "placeholder:text-muted-foreground " +
  "disabled:cursor-not-allowed disabled:opacity-50";

const LABEL_BASE = "text-sm font-medium text-foreground";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  const {
    variant = "bordered",
    color = "default",
    size = "md",
    radius,
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
    isClearable = false,
    startContent,
    endContent,
    type = "text",
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

  // Map our radius to HeroUI's; default is full (pill).
  const heroRadius: HeroUIInputProps["radius"] = radius ?? "full";

  return (
    <HeroUIInput
      ref={ref}
      id={id}
      name={name}
      type={type}
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
      isClearable={isClearable}
      startContent={startContent}
      endContent={endContent}
      autoComplete={autoComplete}
      variant={variant}
      color={color}
      size={size}
      radius={heroRadius}
      data-testid={testId}
      classNames={{
        base: cnHero("w-full min-w-0"),
        label: cnHero(LABEL_BASE, "mb-1.5 text-left"),
        inputWrapper: cnHero(WRAPPER_BASE),
        input: cnHero(INPUT_BASE),
        description: "text-xs text-muted-foreground",
        errorMessage: "text-xs text-destructive",
      }}
      className={className}
    />
  );
});

Input.displayName = "Input";
