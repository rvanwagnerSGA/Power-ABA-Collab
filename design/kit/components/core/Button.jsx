import React from "react";
import { Icon } from "./Icon.jsx";

const SIZES = {
  sm: { h: "var(--control-h-sm)", px: 18, fs: 14, icon: 16 },
  md: { h: "var(--control-h-md)", px: 26, fs: 16, icon: 18 },
  lg: { h: "var(--control-h-lg)", px: 34, fs: 17, icon: 20 },
};

const VARIANTS = {
  primary: { bg: "var(--action-primary)", fg: "var(--text-on-brand)", bd: "transparent", hoverBg: "var(--action-primary-hover)", shadow: "var(--shadow-brand)" },
  secondary: { bg: "var(--action-secondary)", fg: "var(--text-on-brand)", bd: "transparent", hoverBg: "var(--action-secondary-hover)", shadow: "var(--shadow-indigo)" },
  outline: { bg: "var(--paper)", fg: "var(--brand-red)", bd: "var(--brand-red)", hoverBg: "var(--brand-red-wash)", shadow: "var(--shadow-xs)" },
  ghost: { bg: "transparent", fg: "var(--brand-red)", bd: "transparent", hoverBg: "var(--brand-red-wash)", shadow: "none" },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconAfter,
  fullWidth = false,
  disabled = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      disabled={!href ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: fullWidth ? "flex" : "inline-flex",
        width: fullWidth ? "100%" : undefined,
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-2)",
        minHeight: s.h,
        padding: "0 " + s.px + "px",
        fontFamily: "var(--font-body)",
        fontSize: s.fs,
        fontWeight: "var(--weight-semibold)",
        lineHeight: 1,
        textDecoration: "none",
        whiteSpace: "nowrap",
        color: v.fg,
        background: hover && !disabled ? v.hoverBg : v.bg,
        border: "2px solid " + v.bd,
        borderRadius: "var(--radius-pill)",
        boxShadow: variant === "ghost" ? "none" : v.shadow,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transform: press && !disabled ? "scale(var(--press-scale))" : hover && !disabled ? "translateY(var(--hover-lift))" : "none",
        transition: "background var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)",
        ...style,
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={s.icon} /> : null}
      {children}
      {iconAfter ? <Icon name={iconAfter} size={s.icon} /> : null}
    </Tag>
  );
}
