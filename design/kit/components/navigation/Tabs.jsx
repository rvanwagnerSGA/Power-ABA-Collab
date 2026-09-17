import React from "react";

export function Tabs({ items = [], value, defaultValue, onChange, style, ...rest }) {
  const first = items.length ? (typeof items[0] === "string" ? items[0] : items[0].value) : "";
  const [internal, setInternal] = React.useState(defaultValue || first);
  const active = value === undefined ? internal : value;
  return (
    <div
      role="tablist"
      style={{
        display: "inline-flex",
        gap: "var(--space-1)",
        padding: 6,
        background: "var(--surface-sunken)",
        borderRadius: "var(--radius-pill)",
        ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const val = typeof it === "string" ? it : it.value;
        const label = typeof it === "string" ? it : it.label;
        const on = val === active;
        return (
          <button
            key={val}
            role="tab"
            aria-selected={on}
            onClick={() => { if (value === undefined) setInternal(val); if (onChange) onChange(val); }}
            style={{
              minHeight: 40,
              padding: "0 20px",
              border: "none",
              borderRadius: "var(--radius-pill)",
              background: on ? "var(--brand-red)" : "transparent",
              color: on ? "var(--text-on-brand)" : "var(--text-body)",
              fontFamily: "var(--font-body)",
              fontSize: "var(--size-small)",
              fontWeight: "var(--weight-semibold)",
              cursor: "pointer",
              boxShadow: on ? "var(--shadow-sm)" : "none",
              transition: "background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard)",
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
