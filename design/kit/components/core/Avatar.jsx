import React from "react";

const RING = { poppy: "var(--poppy-glasses)", parker: "var(--parker-shirt)", brand: "var(--brand-red)", none: "transparent" };

export function Avatar({ src, name = "", size = 56, ring = "none", style, ...rest }) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  return (
    <span
      title={name || undefined}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "var(--radius-circle)",
        overflow: "hidden",
        background: "var(--brand-indigo-wash)",
        color: "var(--brand-indigo)",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-bold)",
        fontSize: Math.round(size * 0.36),
        boxShadow: ring === "none" ? "none" : "0 0 0 3px var(--paper), 0 0 0 6px " + RING[ring],
        flex: "0 0 auto",
        ...style,
      }}
      {...rest}
    >
      {src ? <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : initials}
    </span>
  );
}
