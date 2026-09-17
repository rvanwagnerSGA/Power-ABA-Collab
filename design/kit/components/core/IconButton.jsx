import React from "react";
import { Icon } from "./Icon.jsx";

const BOXES = { sm: 36, md: 44, lg: 52 };

export function IconButton({ icon, label, variant = "ghost", size = "md", disabled = false, onClick, style, ...rest }) {
  const box = BOXES[size] || BOXES.md;
  const [hover, setHover] = React.useState(false);
  const solid = variant === "primary" || variant === "secondary";
  const bg = variant === "primary" ? "var(--action-primary)" : variant === "secondary" ? "var(--action-secondary)" : variant === "soft" ? "var(--brand-red-wash)" : "transparent";
  const hoverBg = variant === "primary" ? "var(--action-primary-hover)" : variant === "secondary" ? "var(--action-secondary-hover)" : "var(--brand-red-wash)";
  return (
    <button
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: box,
        height: box,
        borderRadius: "var(--radius-circle)",
        border: variant === "outline" ? "2px solid var(--brand-red)" : "2px solid transparent",
        background: hover && !disabled ? hoverBg : bg,
        color: solid ? "var(--text-on-brand)" : "var(--brand-red)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "background var(--duration-base) var(--ease-standard)",
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={Math.round(box * 0.45)} />
    </button>
  );
}
