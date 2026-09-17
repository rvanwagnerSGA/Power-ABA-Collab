import React from "react";

const ICON_BASE = "https://unpkg.com/lucide-static@0.460.0/icons/";

export function Icon({ name, size = 20, color = "currentColor", strokeWidth, style, ...rest }) {
  const url = ICON_BASE + name + ".svg";
  return (
    <span
      role="img"
      aria-hidden="true"
      data-icon={name}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        flex: "0 0 auto",
        backgroundColor: color,
        WebkitMaskImage: "url(" + url + ")",
        maskImage: "url(" + url + ")",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        opacity: strokeWidth ? 1 : undefined,
        ...style,
      }}
      {...rest}
    />
  );
}
