# Component: TagsInput

## Description
Pill input that turns typed text into removable chips. Custom — no
HeroUI primitive. Pill-shaped, h-9, brand focus ring; Enter or comma
commits a tag, Backspace on empty removes the last one.

## Exports

- `TagsInput`

## Import

```tsx
import { TagsInput } from "@atlas/design-system";
```

## Props

| Prop          | Type                          | Default                       | Description |
| ------------- | ----------------------------- | ----------------------------- | ----------- |
| `value`       | `string[]`                    | —                             | Controlled tags. |
| `defaultValue`| `string[]`                    | `[]`                          | Uncontrolled. |
| `onChange`    | `(tags: string[]) => void`    | —                             | Fires on add/remove. |
| `placeholder` | `string`                      | `"Type and press Enter"`      | Shown only when empty. |
| `isDisabled`  | `boolean`                     | `false`                       | |
| `maxTags`     | `number`                      | —                             | Stops accepting more once reached. |
| `label`       | `string`                      | —                             | Field label. |
| `description` | `string`                      | —                             | Helper text. |

## Behavior

- **Enter** or **`,`** commits the draft as a tag.
- **Backspace** on an empty draft removes the last tag.
- Duplicate tags are silently dropped (case-sensitive).

## Accessibility

- The container is a focus-within ring host; the inner `<input>` is the
  real focusable element.
- Each tag's remove button has `aria-label="Remove <tag>"`.

## Examples

```tsx
<TagsInput
  label="Skills"
  defaultValue={["Figma", "React"]}
  description="Press comma or enter to add"
  onChange={setSkills}
/>

<TagsInput maxTags={5} placeholder="Up to 5 keywords" onChange={setKeywords} />
```
