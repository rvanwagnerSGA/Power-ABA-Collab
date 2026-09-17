import React from "react";
import { PowerBloom } from "../brand/PowerBloom.jsx";

export function QuoteCard({ quote, attribution, tone = "warm", basePath = "", style, ...rest }) {
  const BG = {
    warm: ["var(--paper-warm)", "var(--ink-900)"],
    red: ["var(--brand-red)", "#FFFFFF"],
    indigo: ["var(--brand-indigo)", "#FFFFFF"],
    yellow: ["var(--brand-yellow-wash)", "var(--ink-900)"],
  };
  const [bg, fg] = BG[tone] || BG.warm;
  return (
    <figure
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)",
        margin: 0,
        padding: "var(--space-7)",
        background: bg,
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-md)",
        ...style,
      }}
      {...rest}
    >
      <PowerBloom size={44} basePath={basePath} ring={false} />
      <blockquote style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "var(--size-h3)", lineHeight: "var(--lh-h3)", color: fg }}>
        {quote}
      </blockquote>
      {attribution ? (
        <figcaption style={{ fontFamily: "var(--font-body)", fontSize: "var(--size-small)", fontWeight: "var(--weight-semibold)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: fg, opacity: 0.75 }}>
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
