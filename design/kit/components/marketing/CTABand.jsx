import React from "react";
import { Button } from "../core/Button.jsx";

export function CTABand({ title, lead, primaryLabel, primaryHref, secondaryLabel, secondaryHref, tone = "red", style, ...rest }) {
  const solid = tone === "red" ? "var(--brand-red)" : tone === "indigo" ? "var(--brand-indigo)" : "var(--paper-warm)";
  const onDark = tone !== "warm";
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-6)",
        padding: "var(--space-8) var(--space-8)",
        background: solid,
        borderRadius: "var(--radius-xl)",
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", minWidth: 0, maxWidth: 620 }}>
        <h2 style={{ fontSize: "var(--size-h2)", lineHeight: "var(--lh-h2)", color: onDark ? "#FFFFFF" : "var(--brand-red)", margin: 0 }}>{title}</h2>
        {lead ? <p style={{ fontSize: "var(--size-lead)", lineHeight: "var(--lh-lead)", color: onDark ? "rgba(255,255,255,.92)" : "var(--text-body)" }}>{lead}</p> : null}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
        {primaryLabel ? (
          <Button href={primaryHref} size="lg" variant={onDark ? "outline" : "primary"} style={onDark ? { background: "#FFFFFF", borderColor: "#FFFFFF", color: tone === "red" ? "var(--brand-red)" : "var(--brand-indigo)" } : undefined}>
            {primaryLabel}
          </Button>
        ) : null}
        {secondaryLabel ? (
          <Button href={secondaryHref} size="lg" variant="ghost" style={onDark ? { color: "#FFFFFF", border: "2px solid rgba(255,255,255,.55)" } : undefined}>
            {secondaryLabel}
          </Button>
        ) : null}
      </div>
    </section>
  );
}
