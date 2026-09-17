import React from "react";
import { controlBase } from "./Input.jsx";

export function Textarea({ rows = 4, invalid = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea
      rows={rows}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        ...controlBase,
        minHeight: "auto",
        padding: "14px 16px",
        lineHeight: "var(--lh-body)",
        resize: "vertical",
        borderColor: invalid ? "var(--status-error)" : focus ? "var(--brand-indigo)" : "var(--border-subtle)",
        boxShadow: focus ? "0 0 0 4px var(--brand-indigo-wash)" : "none",
        ...style,
      }}
      {...rest}
    />
  );
}
