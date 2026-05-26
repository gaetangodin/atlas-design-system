# Component: Textarea

## Description
Multi-line text input. Wraps HeroUI's `Textarea` with Xeekrs's bordered
field treatment — `radius="lg"` (12px) instead of pill, outside label,
brand focus ring, and the zero-width-space outside-label trick from
`Input`.

## Exports

- `Textarea`

## Import

```tsx
import { Textarea } from "@atlas/design-system";
```

## Props

| Prop            | Type                                         | Default       | Description                              |
| --------------- | -------------------------------------------- | ------------- | ---------------------------------------- |
| `variant`       | `"flat" \| "bordered" \| "underlined" \| "faded"` | `"bordered"` | Visual style.                            |
| `radius`        | `AtlasRadius`                                | `"lg"`        | Corner radius. Pill is discouraged.      |
| `size`          | `"sm" \| "md" \| "lg"`                   | `"md"`        | Height + font size.                      |
| `label`         | `ReactNode`                                  | —             | Floats above the field.                  |
| `description`   | `ReactNode`                                  | —             | Helper text below the field.             |
| `errorMessage`  | `ReactNode`                                  | —             | Replaces description when invalid.       |
| `minRows`       | `number`                                     | `3`           | Initial visible row count.               |
| `maxRows`       | `number`                                     | —             | Caps growth; scrolls after.              |
| `value`         | `string`                                     | —             | Controlled value.                        |
| `onChange`      | `(value: string) => void`                    | —             | Fires on input.                          |
| `isInvalid`     | `boolean`                                    | `false`       | Red border + error styling.              |
| `isDisabled`    | `boolean`                                    | `false`       | Greys out, removes interaction.          |
| `isRequired`    | `boolean`                                    | `false`       | Adds the asterisk and `aria-required`.   |

## Accessibility

- Always pass a `label` (visible or visually hidden). HeroUI/React-Aria
  associate it via `aria-labelledby`.
- `isInvalid` sets `aria-invalid="true"` and announces `errorMessage`.

## Examples

```tsx
<Textarea label="Notes" placeholder="What did the candidate mention?" />

<Textarea
  label="Bio"
  description="Tell us in 2–3 sentences."
  minRows={4}
  maxRows={10}
/>

<Textarea
  label="Comments"
  isInvalid
  errorMessage="Please add at least one sentence."
/>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use for free-form prose: notes, comments, bios. | Use for short single-line input — that's `Input`. |
| Set `maxRows` for long fields so the page doesn't jump. | Leave growth uncapped on dense forms. |
