import React from "react";
import { IconButton } from "../core/IconButton.jsx";

export function Dialog({ open = true, title, children, footer, onClose, width = 520, style, ...rest }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-5)",
        background: "rgba(43,37,35,.45)",
        backdropFilter: "blur(3px)",
        zIndex: 100,
      }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: width,
          background: "var(--surface-card)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
          padding: "var(--space-7)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-4)",
          ...style,
        }}
        {...rest}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-4)" }}>
          <h3 style={{ fontSize: "var(--size-h3)", lineHeight: "var(--lh-h3)", color: "var(--brand-red)", margin: 0 }}>{title}</h3>
          {onClose ? <IconButton icon="x" label="Close" size="sm" onClick={onClose} /> : null}
        </div>
        <div style={{ fontSize: "var(--size-body)", lineHeight: "var(--lh-body)", color: "var(--text-body)" }}>{children}</div>
        {footer ? <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", justifyContent: "flex-end", marginTop: "var(--space-2)" }}>{footer}</div> : null}
      </div>
    </div>
  );
}
