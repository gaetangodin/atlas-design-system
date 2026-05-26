# Component: Link

## Description
Inline navigation link. Wraps HeroUI's `Link` with the Xeekrs
underline-on-hover treatment in primary color.

## Exports

- `Link`

## Import

```tsx
import { Link } from "@atlas/design-system";
```

## Props

Inherits HeroUI `LinkProps` (extends native `<a>`):

| Prop          | Type                                                     | Default     | Description |
| ------------- | -------------------------------------------------------- | ----------- | ----------- |
| `href`        | `string`                                                 | —           | |
| `color`       | `AtlasColor`                                             | `"primary"` | |
| `size`        | `"sm" \| "md" \| "lg"`                               | `"md"`      | |
| `underline`   | `"none" \| "hover" \| "always" \| "active" \| "focus"` | `"hover"`   | When the underline appears. |
| `isExternal`  | `boolean`                                                | `false`     | Adds `target="_blank" rel="noopener"`. |
| `showAnchorIcon` | `boolean`                                             | `false`     | Trailing external-link glyph. |
| `as`          | `ElementType`                                            | `"a"`       | Render as a `next/link`, `react-router-dom Link`, etc. |

## Accessibility

- A real `<a>` element with the right keyboard semantics.
- External links should set `isExternal` so the destination context is
  announced.

## Examples

```tsx
<Link href="/referrals">View referrals</Link>

<Link href="https://docs.xeekrs.com" isExternal showAnchorIcon>
  Docs
</Link>

// Inside a Next.js app
import NextLink from "next/link";
<Link as={NextLink} href="/dashboard">Dashboard</Link>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use `Link` for navigation; use `Button variant="link"` for actions. | Style a Button as a link visually without using a `<button>` for actions. |
| Set `isExternal` for cross-origin links. | Leave external links unflagged — they break user expectations. |
