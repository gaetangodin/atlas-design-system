# Component: Input

## Description
Single-line text entry. Wraps HeroUI's `Input` with Preline-flavored
border and focus-ring colors.

## Variants

| Variant       | Use when                                                  |
| ------------- | --------------------------------------------------------- |
| `bordered`    | Default. Forms, settings, anywhere with whitespace.       |
| `flat`        | Dense layouts, inline edits, search fields in toolbars.   |
| `underlined`  | Editorial / minimalist contexts where chrome is noise.    |

## Props

| Property        | Type                                                | Default       | Description                                      |
| --------------- | --------------------------------------------------- | ------------- | ------------------------------------------------ |
| `variant`       | `"bordered" \| "flat" \| "underlined"`           | `"bordered"`  | Visual style.                                    |
| `size`          | `"sm" \| "md" \| "lg"`                           | `"md"`        | Height + font size.                              |
| `label`         | `ReactNode`                                         | —             | Floats above the field.                          |
| `description`   | `ReactNode`                                         | —             | Helper text below the field.                     |
| `errorMessage`  | `ReactNode`                                         | —             | Replaces description when `isInvalid`.           |
| `isInvalid`     | `boolean`                                           | `false`       | Red border + error text.                         |
| `isRequired`    | `boolean`                                           | `false`       | Adds the asterisk and `aria-required`.           |
| `isDisabled`    | `boolean`                                           | `false`       | Greys out, removes pointer events.               |
| `isReadOnly`    | `boolean`                                           | `false`       | Selectable but not editable.                     |
| `startContent`  | `ReactNode`                                         | —             | Slot before the input (e.g. search icon).        |
| `endContent`    | `ReactNode`                                         | —             | Slot after the input (e.g. clear button).        |
| `type`          | `"text" \| "email" \| "password" \| ...`        | `"text"`      | Native input type.                               |

## Accessibility

- Label, description, and errorMessage are associated via `aria-*`
  attributes by HeroUI/React Aria. Always pass a `label` (visible or
  visually hidden) — never just a placeholder.
- `isRequired` adds `aria-required="true"`. The asterisk is decorative.
- When `isInvalid`, `aria-invalid="true"` is set and `errorMessage`
  is announced to screen readers.

## Examples

```tsx
import { Input } from "@atlas/design-system";
import { Search, Eye } from "lucide-react";

<Input label="Email" type="email" placeholder="you@example.com" isRequired />

<Input
  label="Password"
  type="password"
  endContent={<Eye size={16} />}
  description="At least 8 characters"
/>

<Input
  variant="flat"
  size="sm"
  startContent={<Search size={16} />}
  placeholder="Search…"
/>

<Input
  label="Email"
  isInvalid
  errorMessage="That email is already registered."
/>
```
