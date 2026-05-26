/**
 * Public component prop contracts.
 *
 * Variant + color naming aligns with HeroUI (since Atlas wraps it),
 * which lets consumers swap between `<Button>` from `@atlas/design-system`
 * and `<Button>` from `@heroui/react` without renaming props.
 *
 * These types are stable across minor versions. Renaming or narrowing
 * a prop is a major bump.
 */

import type { ReactNode, MouseEventHandler } from "react";

/* ------------------------------------------------------------------ */
/* Shared                                                              */
/* ------------------------------------------------------------------ */

export interface BaseComponentProps {
  className?: string;
  testId?: string;
  id?: string;
}

export type AtlasColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export type AtlasSize = "sm" | "md" | "lg";

export type AtlasRadius = "none" | "sm" | "md" | "lg" | "full";

/* ------------------------------------------------------------------ */
/* Button                                                              */
/* ------------------------------------------------------------------ */

export type ButtonVariant =
  | "solid"
  | "bordered"
  | "light"
  | "flat"
  | "faded"
  | "shadow"
  | "ghost";

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  color?: AtlasColor;
  size?: AtlasSize;
  /** Brand default is `full` (pill) — pass `lg` for square-cornered toolbar buttons. */
  radius?: AtlasRadius;
  isLoading?: boolean;
  isDisabled?: boolean;
  isIconOnly?: boolean;
  fullWidth?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  as?: "button" | "a";
  href?: string;
  children?: ReactNode;
  "aria-label"?: string;
}

/* ------------------------------------------------------------------ */
/* Input + Textarea                                                    */
/* ------------------------------------------------------------------ */

export type InputVariant = "flat" | "bordered" | "underlined" | "faded";

export type LabelPlacement = "inside" | "outside" | "outside-left";

export interface InputProps extends BaseComponentProps {
  variant?: InputVariant;
  color?: AtlasColor;
  size?: AtlasSize;
  radius?: AtlasRadius;
  label?: ReactNode;
  labelPlacement?: LabelPlacement;
  description?: ReactNode;
  errorMessage?: ReactNode;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isClearable?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  type?: "text" | "email" | "password" | "search" | "tel" | "url" | "number";
  name?: string;
  autoComplete?: string;
}

export interface TextareaProps extends Omit<InputProps, "type"> {
  minRows?: number;
  maxRows?: number;
}

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */

export interface CardProps extends BaseComponentProps {
  isPressable?: boolean;
  isHoverable?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: AtlasRadius;
  /** Hover-lift variant — sits flat on the page background until hovered. */
  variant?: "default" | "hover-lift";
  children?: ReactNode;
}

/* ------------------------------------------------------------------ */
/* Badge (HeroUI Chip under the hood)                                  */
/* ------------------------------------------------------------------ */

export type BadgeVariant = "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "dot";

export interface BadgeProps extends BaseComponentProps {
  variant?: BadgeVariant;
  color?: AtlasColor;
  size?: AtlasSize;
  radius?: AtlasRadius;
  startContent?: ReactNode;
  endContent?: ReactNode;
  onClose?: () => void;
  children?: ReactNode;
}
