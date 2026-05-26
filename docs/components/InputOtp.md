# Component: InputOtp

## Description
Segmented one-time-passcode input. Wraps HeroUI's `InputOtp` — each
digit is a Xeekrs-bordered cell with the brand focus ring on the
active segment.

## Exports

- `InputOtp`

## Import

```tsx
import { InputOtp } from "@atlas/design-system";
```

## Props

Inherits HeroUI's `InputOtp` props. Most-used:

| Prop          | Type                          | Default | Description |
| ------------- | ----------------------------- | ------- | ----------- |
| `length`      | `number`                      | `4`     | Number of segments (e.g. 4 or 6). |
| `value`       | `string`                      | —       | Controlled. |
| `onValueChange` | `(v: string) => void`       | —       | Fires on each segment fill. |
| `onComplete`  | `(v: string) => void`         | —       | Fires when all segments are filled. |
| `allowedKeys` | `RegExp`                      | digits  | Regex for accepted characters. |
| `isDisabled` / `isInvalid` | `boolean`        | `false` | |

## Accessibility

- Renders an `aria-label="One-time passcode"` group; segments focus
  forward as you type, backspace deletes from the previous one.
- Pair with a visible instructional label like "Enter the 6-digit code".

## Examples

```tsx
<InputOtp length={6} onComplete={verifyCode} />

<InputOtp
  length={4}
  allowedKeys={/^[a-zA-Z]$/}
  onComplete={submit}
/>
```
