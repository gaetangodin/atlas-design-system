# Component: BlogPostCard

## Description
Article preview card — cover image + meta + title + excerpt. Used in
Academy / Help-hub / news feeds.

## Exports

- `BlogPostCard`

## Import

```tsx
import { BlogPostCard } from "@atlas/design-system";
```

## Props

| Prop       | Type                          | Default | Description |
| ---------- | ----------------------------- | ------- | ----------- |
| `title`    | `ReactNode`                   | —       | **Required.** |
| `excerpt`  | `ReactNode`                   | —       | 2–3 line preview (`line-clamp-3`). |
| `coverUrl` | `string`                      | —       | 16:9 cover image. |
| `coverAlt` | `string`                      | `""`    | |
| `meta`     | `ReactNode`                   | —       | Date / author / category. |
| `href`     | `string`                      | —       | Renders the title as a link. |
| `onClick`  | `() => void`                  | —       | Makes the whole card pressable. |

## Accessibility

- When `href` is set, the title is the link target.
- When `onClick` is set, the whole card becomes a pressable surface
  with keyboard activation.

## Examples

```tsx
<BlogPostCard
  coverUrl="/blog/match-quality.jpg"
  meta="Academy · 4 min read"
  title="How match quality works"
  excerpt="Behind every match is a score — here's what goes into it and how to read it."
  href="/academy/match-quality"
/>

// Grid of three
<Grid cols={3}>{posts.map(p => <BlogPostCard key={p.id} {...p} />)}</Grid>
```
