import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Checkbox({ label, checked, defaultChecked, onChange, disabled = false, style, ...rest }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked === undefined ? internal : checked;
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "flex-start",
        gap: "var(--space-3)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontFamily: "var(--font-body)",
        fontSize: "var(--size-body)",
        color: "var(--text-body)",
        minHeight: "var(--tap-min)",
        ...style,
      }}
    >
      <input
        type="checkbox"
        checked={isOn}
        disabled={disabled}
        onChange={(e) => { if (checked === undefined) setInternal(e.target.checked); if (onChange) onChange(e); }}
        style={{ position: "absolute", opacity: 0, width: 1, height: 1 }}
        {...rest}
      />
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 24,
          height: 24,
          marginTop: 2,
          flex: "0 0 auto",
          borderRadius: "var(--radius-xs)",
          border: "2px solid " + (isOn ? "var(--brand-red)" : "var(--border-strong)"),
          background: isOn ? "var(--brand-red)" : "var(--paper)",
          transition: "all var(--duration-base) var(--ease-standard)",
        }}
      >
        {isOn ? <Icon name="check" size={16} color="var(--text-on-brand)" /> : null}
      </span>
      <span>{label}</span>
    </label>
  );
}
