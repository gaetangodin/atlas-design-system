# Component: FileUpload

## Description
Drag-and-drop file dropzone with a fallback file-picker button. Custom
component — no HeroUI primitive — built on native `<input type="file">`
plus dragenter / dragover / drop handlers. Accessible: keyboard
activation opens the picker, ARIA label describes the zone.

## Exports

- `FileUpload`

## Import

```tsx
import { FileUpload } from "@atlas/design-system";
```

## Props

| Prop          | Type                       | Default                    | Description |
| ------------- | -------------------------- | -------------------------- | ----------- |
| `onFiles`     | `(files: File[]) => void`  | —                          | Receives the selected files. |
| `multiple`    | `boolean`                  | `false`                    | Accept multiple files at once. |
| `accept`      | `string`                   | —                          | MIME filter (e.g. `"image/*,.pdf"`). |
| `isDisabled`  | `boolean`                  | `false`                    | |
| `label`       | `ReactNode`                | `"Drop files or browse"`   | Headline. |
| `description` | `ReactNode`                | `"PNG, JPG, PDF up to 10MB"` | Helper. |
| `icon`        | `ReactNode`                | Cloud-upload SVG           | Replace the default glyph. |

## States

| State     | Visual                                                  |
| --------- | ------------------------------------------------------- |
| Idle      | Dashed border, muted bg-hover.                          |
| Drag-over | Primary border + `bg-primary/5`.                        |
| Focus     | Brand focus ring.                                       |
| Disabled  | 50% opacity, no interaction.                            |

## Accessibility

- Zone has `role="button"` + `tabIndex={0}`.
- Enter/Space opens the picker.
- The underlying `<input type="file">` is visually hidden but
  focusable through assistive tech as well.

## Examples

```tsx
<FileUpload onFiles={(files) => upload(files[0])} accept="image/*,.pdf" />

<FileUpload
  multiple
  label="Drop CVs"
  description="PDF or DOCX, max 5 files"
  accept=".pdf,.doc,.docx"
  onFiles={handleFiles}
/>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Validate file types/sizes inside `onFiles` and show errors via `Alert`. | Trust the `accept` filter alone — clients can paste anything. |
| Use `multiple` when batch uploads are common. | Force users to upload one file at a time when many is normal. |
