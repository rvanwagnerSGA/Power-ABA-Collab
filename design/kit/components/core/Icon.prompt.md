Renders a Lucide glyph as a CSS-masked span so it can take any brand color — use it anywhere Power ABA needs an icon.

```jsx
<Icon name="heart" size={24} color="var(--brand-red)" />
```

Substitution note: Power ABA's live site uses bespoke multicolor PNG icons that were not supplied as files. Lucide (2px stroke, rounded caps) is the flagged stand-in. Swap `ICON_BASE` for a local sprite when the real set arrives.
