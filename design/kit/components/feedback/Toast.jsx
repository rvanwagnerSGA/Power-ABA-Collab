import React from "react";
import { Icon } from "../core/Icon.jsx";

const TONES = {
  success: { bg: "var(--status-success-wash)", fg: "var(--status-success)", icon: "circle-check" },
  info: { bg: "var(--status-info-wash)", fg: "var(--status-info)", icon: "info" },
  warning: { bg: "var(--status-warning-wash)", fg: "#8A6600", icon: "triangle-alert" },
  error: { bg: "var(--status-error-wash)", fg: "var(--status-error)", icon: "circle-alert" },
};

export function Toast({ tone = "success", title, children, onDismiss, style, ...rest }) {
  const t = TONES[tone] || TONES.success;
  return (
    <div
      role="status"
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--space-3)",
        maxWidth: 460,
        padding: "16px 18px",
        background: t.bg,
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-md)",
        ...style,
      }}
      {...rest}
    >
      <Icon name={t.icon} size={20} color={t.fg} style={{ marginTop: 2 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        {title ? <div style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)", fontSize: "var(--size-small)", color: t.fg }}>{title}</div> : null}
        {children ? <div style={{ fontSize: "var(--size-small)", lineHeight: "var(--lh-small)", color: "var(--text-body)", marginTop: 2 }}>{children}</div> : null}
      </div>
      {onDismiss ? (
        <button onClick={onDismiss} aria-label="Dismiss" style={{ border: "none", background: "transparent", cursor: "pointer", padding: 2, display: "inline-flex" }}>
          <Icon name="x" size={16} color="var(--text-muted)" />
        </button>
      ) : null}
    </div>
  );
}
