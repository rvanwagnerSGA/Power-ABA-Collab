import React from "react";

export function Radio({ label, name, value, checked, onChange, disabled = false, style, ...rest }) {
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
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
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
          borderRadius: "var(--radius-circle)",
          border: "2px solid " + (checked ? "var(--brand-red)" : "var(--border-strong)"),
          background: "var(--paper)",
          transition: "all var(--duration-base) var(--ease-standard)",
        }}
      >
        <span style={{ width: 12, height: 12, borderRadius: "var(--radius-circle)", background: checked ? "var(--brand-red)" : "transparent", transition: "background var(--duration-base) var(--ease-standard)" }} />
      </span>
      <span>{label}</span>
    </label>
  );
}
