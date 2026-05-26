# Component: Hero

## Description
Marketing-page hero block — eyebrow + headline + body + actions, with
an optional media slot to the right. Use as the top of a landing or
feature page.

## Exports

- `Hero`

## Import

```tsx
import { Hero } from "@atlas/design-system";
```

## Props

| Prop          | Type                          | Default     | Description |
| ------------- | ----------------------------- | ----------- | ----------- |
| `eyebrow`     | `ReactNode`                   | —           | Small uppercase line above the headline. |
| `headline`    | `ReactNode`                   | —           | **Required.** |
| `body`        | `ReactNode`                   | —           | Lead paragraph. |
| `actions`     | `ReactNode`                   | —           | Buttons row. |
| `media`       | `ReactNode`                   | —           | Right-hand visual (image, illustration). |
| `orientation` | `"stacked" \| "split"`      | `"split"`   | Stack vertically (`stacked`) or split (`split`). |
| `align`       | `"start" \| "center"`       | `"start"`   | Text alignment when stacked. |

## Examples

```tsx
<Hero
  eyebrow="Recruitment, redesigned"
  headline="Hire faster, with less guesswork."
  body="Xeekrs matches your team with vetted candidates and tracks every step from referral to placement."
  actions={
    <>
      <Button color="primary" size="lg">Start free</Button>
      <Button variant="bordered" size="lg">Book a demo</Button>
    </>
  }
  media={<img src="/hero/dashboard.png" alt="Xeekrs dashboard" />}
/>

// Centered, text-only
<Hero
  orientation="stacked"
  align="center"
  headline="Built for the way teams actually hire"
  body="One source of truth for every referral, every conversation, every offer."
  actions={<Button color="primary" size="lg">Start free</Button>}
/>
```
