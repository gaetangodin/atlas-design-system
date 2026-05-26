# Component: Image

## Description
Image with built-in loading state and `radius` shaping. Wraps HeroUI's
`Image` — Atlas defaults to `radius="md"` and adds overflow clipping
on the wrapper.

## Exports

- `Image`

## Import

```tsx
import { Image } from "@atlas/design-system";
```

## Props

Inherits HeroUI `ImageProps`. Most-used:

| Prop          | Type                          | Default     | Description |
| ------------- | ----------------------------- | ----------- | ----------- |
| `src`         | `string`                      | —           | |
| `alt`         | `string`                      | —           | **Required for a11y.** |
| `width`/`height` | `number \| string`        | —           | Reserve layout space (prevents CLS). |
| `radius`      | `AtlasRadius`                 | `"md"`      | |
| `isBlurred`   | `boolean`                     | `false`     | Subtle backdrop blur during load. |
| `isZoomed`    | `boolean`                     | `false`     | Subtle zoom on hover. |
| `loading`     | `"lazy" \| "eager"`         | `"lazy"`    | |
| `fallbackSrc` | `string`                      | —           | Image to show on error. |

## Accessibility

- Always pass `alt`. Use `alt=""` for purely decorative images.
- `width` + `height` should be set when possible to prevent layout
  shift.

## Examples

```tsx
<Image
  src="/covers/referral-program.jpg"
  alt="Referral program announcement"
  width={400}
  height={225}
/>

// Avatar-ish round portrait
<Image src="/portraits/maya.jpg" alt="Maya" radius="full" width={56} height={56} />
```
