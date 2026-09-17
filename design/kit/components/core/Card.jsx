import React from "react";

export function Card({ children, tone = "plain", padding = "var(--card-pad)", radius = "var(--radius-lg)", hoverable = false, as = "div", style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const TONE_BG = {
    plain: "var(--surface-card)",
    sunken: "var(--surface-sunken)",
    warm: "var(--paper-warm)",
    red: "var(--brand-red-wash)",
    indigo: "var(--brand-indigo-wash)",
    yellow: "var(--brand-yellow-wash)",
    teal: "var(--brand-teal-wash)",
    solid: "var(--surface-brand)",
  };
  const Tag = as;
  return (
    <Tag
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: TONE_BG[tone] || TONE_BG.plain,
        color: tone === "solid" ? "var(--text-on-brand)" : "var(--text-body)",
        border: tone === "plain" ? "1px solid var(--border-subtle)" : "1px solid transparent",
        borderRadius: radius,
        padding: padding,
        boxShadow: hoverable && hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
        transform: hoverable && hover ? "translateY(-3px)" : "none",
        transition: "box-shadow var(--duration-base) var(--ease-out-soft), transform var(--duration-base) var(--ease-out-soft)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
