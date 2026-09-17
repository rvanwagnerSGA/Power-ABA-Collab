import React from "react";

const PETALS = [
  { key: "courage", label: "Courage", color: "var(--petal-1-courage)", ink: "#8A6600", wash: "var(--brand-yellow-wash)", meaning: "Entering a new room, trying one step, returning after a break." },
  { key: "curiosity", label: "Curiosity", color: "var(--petal-2-curiosity)", ink: "#C25200", wash: "var(--brand-orange-wash)", meaning: "Asking a question, exploring a tool, trying a different approach." },
  { key: "kindness", label: "Kindness", color: "var(--petal-3-kindness)", ink: "#B93B39", wash: "var(--brand-coral-wash)", meaning: "Helping, listening, waiting, repairing a mistake." },
  { key: "calm", label: "Calm & confidence", color: "var(--petal-4-calm)", ink: "var(--brand-indigo)", wash: "var(--brand-indigo-wash)", meaning: "Using a break, breathing, preparing, following a visual plan." },
  { key: "expression", label: "Self-expression", color: "var(--petal-5-expression)", ink: "var(--brand-magenta)", wash: "var(--brand-magenta-wash)", meaning: "Sharing a preference, saying no, using a device, gesture, picture, or words." },
];

export function PetalStrengths({ earned = [], showMeaning = false, layout = "row", style, ...rest }) {
  return (
    <div
      style={{
        display: layout === "row" ? "flex" : "grid",
        flexWrap: "wrap",
        gridTemplateColumns: layout === "row" ? undefined : "1fr",
        gap: showMeaning ? "var(--space-3)" : "var(--space-2)",
        ...style,
      }}
      {...rest}
    >
      {PETALS.map((p) => {
        const on = earned.length === 0 || earned.indexOf(p.key) !== -1;
        return (
          <div
            key={p.key}
            style={{
              display: "flex",
              alignItems: showMeaning ? "flex-start" : "center",
              gap: "var(--space-3)",
              padding: showMeaning ? "12px 16px" : "6px 14px 6px 10px",
              borderRadius: showMeaning ? "var(--radius-md)" : "var(--radius-pill)",
              background: on ? p.wash : "var(--surface-sunken)",
              opacity: on ? 1 : 0.45,
              fontFamily: "var(--font-body)",
            }}
          >
            <span style={{ width: 14, height: 14, marginTop: showMeaning ? 5 : 0, borderRadius: "var(--radius-circle)", background: on ? p.color : "var(--ink-300)", flex: "0 0 auto" }} />
            <span>
              <span style={{ display: "block", fontSize: "var(--size-small)", fontWeight: "var(--weight-semibold)", color: on ? p.ink : "var(--text-muted)" }}>{p.label}</span>
              {showMeaning ? <span style={{ display: "block", fontSize: "var(--size-caption)", lineHeight: 1.5, color: "var(--text-muted)", marginTop: 2 }}>{p.meaning}</span> : null}
            </span>
          </div>
        );
      })}
    </div>
  );
}
