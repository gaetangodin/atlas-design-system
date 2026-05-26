# Design tokens

All Atlas tokens live in `src/domain/tokens` and are exported from
`@atlas/design-system/tokens`. They're plain TypeScript values — no
framework, no JSX, no Tailwind — so they can be consumed by any
renderer.

## Color

| Token                            | Value      | Source / verified                          |
| -------------------------------- | ---------- | ------------------------------------------ |
| `semantic.brand.primary`         | `#2563eb`  | Figma "Image Border Color"                 |
| `semantic.brand.primarySoft`     | `#eff6ff`  | Figma "Image Bg Secondary Color"           |
| `semantic.text.primary`          | `#1f2937`  | Figma "Text/Title Color"                   |
| `semantic.text.secondary`        | `#6b7280`  | Figma "Placeholder/Color"                  |
| `semantic.text.tertiary`         | `#9ca3af`  | Figma "Secondary Text Color"               |
| `semantic.text.disabled`         | `#d1d5db`  | Figma "Date Disabled Color"                |
| `semantic.border.default`        | `#e5e7eb`  | Figma "Border/Border Color"                |

The full Tailwind-style scale (50/100/.../900) is available as
`palette.gray`, `palette.blue`, etc.

## Spacing

4px base, matches Tailwind. Sample Figma values verified to map onto
the scale: 16 → `4`, 20 → `5`, 48 → `12`.

## Radius

| Token         | Value     | Source                                         |
| ------------- | --------- | ---------------------------------------------- |
| `radius.md`   | `0.5rem`  | Preline default for inputs and buttons         |
| `radius.lg`   | `0.75rem` | Preline default for cards, datepickers         |
| `radius.full` | `9999px`  | Pills, badges, circular avatars                |

## Shadow

| Token            | Value (CSS)                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------------- |
| `shadows.md`     | `0 2px 2px 0 rgb(0 0 0 / 0.06), 0 4px 3px 0 rgb(0 0 0 / 0.07)` (verified Figma "Drop Shadow/md") |
| `shadows["2xl"]` | `0 25px 25px 0 rgb(0 0 0 / 0.15)` (verified Figma "Drop Shadow/2xl")                            |

## Typography

Inter font stack. Body baseline 16/24, weight 500 for "medium" UI text,
600 for headings. Letter-spacing is `0.5px` ("ui") on most body text —
a Preline convention.
