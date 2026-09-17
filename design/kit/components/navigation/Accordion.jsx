import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Accordion({ items = [], defaultOpen = 0, style, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", ...style }} {...rest}>
      {items.map((it, i) => {
        const on = open === i;
        return (
          <div
            key={i}
            style={{
              background: on ? "var(--brand-red-wash)" : "var(--surface-card)",
              border: "1px solid " + (on ? "transparent" : "var(--border-subtle)"),
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              transition: "background var(--duration-base) var(--ease-standard)",
            }}
          >
            <button
              onClick={() => setOpen(on ? -1 : i)}
              aria-expanded={on}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "var(--space-4)",
                width: "100%",
                minHeight: 60,
                padding: "16px 22px",
                border: "none",
                background: "transparent",
                textAlign: "left",
                cursor: "pointer",
                fontFamily: "var(--font-display)",
                fontWeight: "var(--weight-bold)",
                fontSize: "var(--size-h4)",
                color: on ? "var(--brand-red)" : "var(--ink-900)",
              }}
            >
              {it.question}
              <Icon name={on ? "minus" : "plus"} size={20} color={on ? "var(--brand-red)" : "var(--text-muted)"} />
            </button>
            {on ? (
              <div style={{ padding: "0 22px 20px", fontSize: "var(--size-body)", lineHeight: "var(--lh-body)", color: "var(--text-body)" }}>
                {it.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
