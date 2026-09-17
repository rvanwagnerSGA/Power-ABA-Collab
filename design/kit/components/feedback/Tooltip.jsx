import React from "react";

export function Tooltip({ label, children, placement = "top", style, ...rest }) {
  const [show, setShow] = React.useState(false);
  const pos = placement === "bottom"
    ? { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" }
    : { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" };
  return (
    <span
      style={{ position: "relative", display: "inline-flex", ...style }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      {...rest}
    >
      {children}
      {show ? (
        <span
          role="tooltip"
          style={{
            position: "absolute",
            ...pos,
            zIndex: 20,
            padding: "8px 12px",
            background: "var(--ink-900)",
            color: "#FFFFFF",
            borderRadius: "var(--radius-sm)",
            fontFamily: "var(--font-body)",
            fontSize: "var(--size-caption)",
            lineHeight: 1.4,
            whiteSpace: "nowrap",
            boxShadow: "var(--shadow-md)",
          }}
        >
          {label}
        </span>
      ) : null}
    </span>
  );
}
