import React from "react";
import { Icon } from "../core/Icon.jsx";
import { controlBase } from "./Input.jsx";

export function Select({ options = [], placeholder, invalid = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <span style={{ position: "relative", display: "block" }}>
      <select
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          ...controlBase,
          appearance: "none",
          paddingRight: 44,
          cursor: "pointer",
          borderColor: invalid ? "var(--status-error)" : focus ? "var(--brand-indigo)" : "var(--border-subtle)",
          boxShadow: focus ? "0 0 0 4px var(--brand-indigo-wash)" : "none",
          ...style,
        }}
        {...rest}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((o) => {
          const value = typeof o === "string" ? o : o.value;
          const label = typeof o === "string" ? o : o.label;
          return <option key={value} value={value}>{label}</option>;
        })}
      </select>
      <span style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
        <Icon name="chevron-down" size={18} color="var(--text-muted)" />
      </span>
    </span>
  );
}
