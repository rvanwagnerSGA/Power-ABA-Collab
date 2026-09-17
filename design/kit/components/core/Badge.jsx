import React from "react";
import { Icon } from "./Icon.jsx";

const TONES = {
  red: ["var(--brand-red-wash)", "var(--brand-red)"],
  coral: ["var(--brand-coral-wash)", "#B93B39"],
  indigo: ["var(--brand-indigo-wash)", "var(--brand-indigo)"],
  magenta: ["var(--brand-magenta-wash)", "var(--brand-magenta)"],
  orange: ["var(--brand-orange-wash)", "#C25200"],
  yellow: ["var(--brand-yellow-wash)", "#8A6600"],
  teal: ["var(--brand-teal-wash)", "#1F7C74"],
  neutral: ["var(--ink-100)", "var(--ink-700)"],
};

export function Badge({ children, tone = "red", solid = false, icon, style, ...rest }) {
  const [bg, fg] = TONES[tone] || TONES.red;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        padding: "6px 14px",
        borderRadius: "var(--radius-pill)",
        background: solid ? fg : bg,
        color: solid ? "var(--text-on-brand)" : fg,
        fontFamily: "var(--font-body)",
        fontSize: "var(--size-caption)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        lineHeight: 1.2,
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={13} /> : null}
      {children}
    </span>
  );
}
