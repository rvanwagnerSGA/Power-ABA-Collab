import React from "react";

export function PowerBloom({ size = 64, basePath = "", ring = true, style, ...rest }) {
  const src = (basePath ? basePath.replace(/\/$/, "") + "/" : "") + "assets/logo/power-bloom-circle.jpg";
  return (
    <span
      role="img"
      aria-label="Power Bloom"
      style={{
        display: "inline-block",
        width: size,
        height: size,
        flex: "0 0 auto",
        borderRadius: "var(--radius-circle)",
        overflow: "hidden",
        background: "var(--paper)",
        boxShadow: ring ? "0 0 0 3px var(--paper), var(--shadow-sm)" : "none",
        ...style,
      }}
      {...rest}
    >
      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </span>
  );
}
