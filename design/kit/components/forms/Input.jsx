import React from "react";
import { Icon } from "../core/Icon.jsx";

export const controlBase = {
  width: "100%",
  minHeight: "var(--control-h-md)",
  padding: "0 16px",
  fontFamily: "var(--font-body)",
  fontSize: "var(--size-body)",
  color: "var(--ink-900)",
  background: "var(--paper)",
  border: "2px solid var(--border-subtle)",
  borderRadius: "var(--radius-md)",
  outline: "none",
  transition: "border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)",
};

export function Input({ icon, invalid = false, disabled = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const border = invalid ? "var(--status-error)" : focus ? "var(--brand-indigo)" : "var(--border-subtle)";
  return (
    <span style={{ position: "relative", display: "block" }}>
      {icon ? (
        <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
          <Icon name={icon} size={18} color="var(--text-muted)" />
        </span>
      ) : null}
      <input
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          ...controlBase,
          paddingLeft: icon ? 44 : 16,
          borderColor: border,
          boxShadow: focus ? "0 0 0 4px var(--brand-indigo-wash)" : "none",
          background: disabled ? "var(--surface-sunken)" : "var(--paper)",
          opacity: disabled ? 0.7 : 1,
          ...style,
        }}
        {...rest}
      />
    </span>
  );
}
