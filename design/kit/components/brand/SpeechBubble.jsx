import React from "react";

const TONES = {
  poppy: { bg: "var(--brand-yellow-wash)", bd: "var(--brand-yellow)", fg: "var(--ink-900)" },
  parker: { bg: "var(--brand-indigo-wash)", bd: "var(--brand-indigo)", fg: "var(--ink-900)" },
  brand: { bg: "var(--brand-red-wash)", bd: "var(--brand-red)", fg: "var(--ink-900)" },
  plain: { bg: "var(--paper)", bd: "var(--border-subtle)", fg: "var(--text-body)" },
};

export function SpeechBubble({ children, tone = "plain", tail = "bottom-left", style, ...rest }) {
  const t = TONES[tone] || TONES.plain;
  const vertical = tail.indexOf("top") === 0 ? "top" : "bottom";
  const horizontal = tail.indexOf("right") !== -1 ? "right" : "left";
  return (
    <div style={{ position: "relative", display: "inline-block", ...style }} {...rest}>
      <div
        style={{
          background: t.bg,
          border: "2px solid " + t.bd,
          borderRadius: "var(--radius-lg)",
          padding: "16px 22px",
          fontFamily: "var(--font-display)",
          fontWeight: "var(--weight-bold)",
          fontSize: "var(--size-h4)",
          lineHeight: 1.35,
          color: t.fg,
        }}
      >
        {children}
      </div>
      <span
        style={{
          position: "absolute",
          [vertical]: -13,
          [horizontal]: 34,
          width: 22,
          height: 22,
          background: t.bg,
          borderRight: "2px solid " + t.bd,
          borderBottom: "2px solid " + t.bd,
          transform: vertical === "bottom" ? "rotate(45deg)" : "rotate(225deg)",
        }}
      />
    </div>
  );
}
