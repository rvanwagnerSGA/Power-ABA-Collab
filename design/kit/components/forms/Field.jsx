import React from "react";

export function Field({ label, htmlFor, hint, error, required = false, children, style, ...rest }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", ...style }} {...rest}>
      {label ? (
        <label htmlFor={htmlFor} style={{ fontFamily: "var(--font-body)", fontSize: "var(--size-small)", fontWeight: "var(--weight-semibold)", color: "var(--ink-900)" }}>
          {label}
          {required ? <span style={{ color: "var(--brand-red)" }}> *</span> : null}
        </label>
      ) : null}
      {children}
      {error ? (
        <span style={{ fontSize: "var(--size-caption)", color: "var(--status-error)", fontWeight: "var(--weight-medium)" }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: "var(--size-caption)", color: "var(--text-muted)" }}>{hint}</span>
      ) : null}
    </div>
  );
}
