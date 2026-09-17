import React from "react";

export function Switch({ label, checked, defaultChecked, onChange, disabled = false, style, ...rest }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked === undefined ? internal : checked;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!isOn);
    if (onChange) onChange(!isOn);
  };
  return (
    <span
      onClick={toggle}
      role="switch"
      aria-checked={isOn}
      tabIndex={0}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontFamily: "var(--font-body)",
        fontSize: "var(--size-body)",
        color: "var(--text-body)",
        minHeight: "var(--tap-min)",
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          position: "relative",
          width: 52,
          height: 30,
          flex: "0 0 auto",
          borderRadius: "var(--radius-pill)",
          background: isOn ? "var(--brand-red)" : "var(--ink-200)",
          transition: "background var(--duration-base) var(--ease-standard)",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 3,
            left: isOn ? 25 : 3,
            width: 24,
            height: 24,
            borderRadius: "var(--radius-circle)",
            background: "var(--paper)",
            boxShadow: "var(--shadow-sm)",
            transition: "left var(--duration-base) var(--ease-out-soft)",
          }}
        />
      </span>
      {label ? <span>{label}</span> : null}
    </span>
  );
}
