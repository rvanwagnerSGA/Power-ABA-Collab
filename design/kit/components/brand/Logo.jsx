import React from "react";

const LOCKUPS = {
  digital: "assets/logo/power-aba-logo-digital.png",
  print: "assets/logo/power-aba-logo-print.png",
  compact: "assets/logo/power-aba-logo-compact.png",
  bloom: "assets/logo/power-bloom-circle.jpg",
};

export function Logo({ lockup = "digital", height = 56, basePath = "", href, style, ...rest }) {
  const src = (basePath ? basePath.replace(/\/$/, "") + "/" : "") + LOCKUPS[lockup];
  const img = (
    <img
      src={src}
      alt="Power ABA Therapy"
      style={{ height: height, width: "auto", display: "block", ...style }}
      {...rest}
    />
  );
  return href ? <a href={href} style={{ display: "inline-block" }}>{img}</a> : img;
}
