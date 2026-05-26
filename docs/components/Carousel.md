# Component: Carousel

## Description
Snap-scrolling carousel. Wraps Embla — prev/next controls, pagination
dots, keyboard navigation. For showing a row of cards that scrolls
horizontally with momentum.

> **Optional peer dep.** `embla-carousel-react` isn't installed
> automatically. If you import Carousel, run
> `pnpm add embla-carousel-react`.

## Exports

- `Carousel`

## Import

```tsx
import { Carousel } from "@atlas/design-system";
```

## Props

| Prop            | Type                          | Default        | Description |
| --------------- | ----------------------------- | -------------- | ----------- |
| `children`      | `ReactNode[]`                 | —              | Each child becomes a slide. |
| `loop`          | `boolean`                     | `false`        | Loop after the last slide. |
| `controls`      | `boolean`                     | `true`         | Show prev/next arrow buttons. |
| `dots`          | `boolean`                     | `true`         | Show pagination dots below. |
| `slidesPerView` | `number`                      | —              | Force multiple slides visible at once. |
| `ariaLabel`     | `string`                      | `"Carousel"`   | |

## Accessibility

- Renders `<div role="region" aria-roledescription="carousel">`.
- Arrow buttons disable at the boundaries (unless `loop`).
- Dots are real `<button>` elements with `aria-current="true"` on the
  active slide.

## Examples

```tsx
<Carousel slidesPerView={2} ariaLabel="Featured referrals">
  {referrals.map(r => (
    <ProfileCard key={r.id} name={r.name} role={r.role} avatarUrl={r.avatar} />
  ))}
</Carousel>

// Hero-image rotation, looped, no dots
<Carousel loop dots={false}>
  <img src="/hero-1.jpg" alt="" />
  <img src="/hero-2.jpg" alt="" />
  <img src="/hero-3.jpg" alt="" />
</Carousel>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use for browseable card rows where partial visibility implies "more →". | Use Carousel to hide important content behind clicks. |
| Cap auto-loop intervals (if added) at ≥6s; respect `prefers-reduced-motion`. | Auto-rotate hero slides every 2s — bad for a11y. |
