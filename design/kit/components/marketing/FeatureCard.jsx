import React from "react";
import { Icon } from "../core/Icon.jsx";

const TONES = {
  red: ["var(--brand-red-wash)", "var(--brand-red)"],
  coral: ["var(--brand-coral-wash)", "var(--brand-coral)"],
  indigo: ["var(--brand-indigo-wash)", "var(--brand-indigo)"],
  magenta: ["var(--brand-magenta-wash)", "var(--brand-magenta)"],
  orange: ["var(--brand-orange-wash)", "var(--brand-orange)"],
  yellow: ["var(--brand-yellow-wash)", "var(--brand-yellow)"],
  teal: ["var(--brand-teal-wash)", "var(--brand-teal)"],
};

export function FeatureCard({ icon, tone = "red", title, children, href, style, ...rest }) {
  const [wash, solid] = TONES[tone] || TONES.red;
  const [hover, setHover] = React.useState(false);
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        padding: "var(--card-pad)",
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
        transform: hover ? "translateY(-3px)" : "none",
        transition: "box-shadow var(--duration-base) var(--ease-out-soft), transform var(--duration-base) var(--ease-out-soft)",
        textDecoration: "none",
        ...style,
      }}
      {...rest}
    >
      <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: "var(--radius-circle)", background: wash, flex: "0 0 auto" }}>
        <Icon name={icon} size={26} color={solid} />
      </span>
      <h3 style={{ fontSize: "var(--size-h4)", lineHeight: "var(--lh-h4)", color: "var(--ink-900)", margin: 0 }}>{title}</h3>
      <p style={{ fontSize: "var(--size-body)", lineHeight: "var(--lh-body)", color: "var(--text-muted)" }}>{children}</p>
    </Tag>
  );
}
