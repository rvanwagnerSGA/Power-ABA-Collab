import React from "react";

export function StepItem({ number, title, children, tone = "red", last = false, style, ...rest }) {
  const COLORS = { red: "var(--brand-red)", indigo: "var(--brand-indigo)", orange: "var(--brand-orange)", magenta: "var(--brand-magenta)", teal: "var(--brand-teal)" };
  const color = COLORS[tone] || COLORS.red;
  return (
    <div style={{ display: "flex", gap: "var(--space-4)", ...style }} {...rest}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "0 0 auto" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            borderRadius: "var(--radius-circle)",
            background: color,
            color: "var(--text-on-brand)",
            fontFamily: "var(--font-display)",
            fontWeight: "var(--weight-display)",
            fontSize: 20,
          }}
        >
          {number}
        </span>
        {last ? null : <span style={{ flex: 1, width: 2, background: "var(--border-subtle)", marginTop: 6 }} />}
      </div>
      <div style={{ paddingBottom: last ? 0 : "var(--space-6)" }}>
        <h4 style={{ fontSize: "var(--size-h4)", lineHeight: "var(--lh-h4)", color: "var(--ink-900)", margin: "8px 0 6px" }}>{title}</h4>
        <p style={{ fontSize: "var(--size-body)", lineHeight: "var(--lh-body)", color: "var(--text-muted)" }}>{children}</p>
      </div>
    </div>
  );
}
