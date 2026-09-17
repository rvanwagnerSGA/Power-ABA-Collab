import React from "react";
import { Icon } from "./Icon.jsx";

export function Tag({ children, icon, onRemove, active = false, onClick, style, ...rest }) {
  return (
    <span
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        minHeight: 34,
        padding: "0 14px",
        borderRadius: "var(--radius-pill)",
        border: "2px solid " + (active ? "var(--brand-red)" : "var(--border-subtle)"),
        background: active ? "var(--brand-red-wash)" : "var(--paper)",
        color: active ? "var(--brand-red)" : "var(--text-body)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--size-small)",
        fontWeight: "var(--weight-medium)",
        cursor: onClick ? "pointer" : "default",
        transition: "all var(--duration-base) var(--ease-standard)",
        ...style,
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={15} /> : null}
      {children}
      {onRemove ? (
        <span onClick={(e) => { e.stopPropagation(); onRemove(e); }} style={{ display: "inline-flex", cursor: "pointer", opacity: 0.6 }}>
          <Icon name="x" size={14} />
        </span>
      ) : null}
    </span>
  );
}
