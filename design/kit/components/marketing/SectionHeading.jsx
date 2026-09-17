import React from "react";
import { Badge } from "../core/Badge.jsx";

export function SectionHeading({ eyebrow, eyebrowTone = "red", title, accent, lead, align = "left", style, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align === "center" ? "center" : "left",
        maxWidth: align === "center" ? "var(--container-narrow)" : 720,
        marginLeft: align === "center" ? "auto" : undefined,
        marginRight: align === "center" ? "auto" : undefined,
        ...style,
      }}
      {...rest}
    >
      {eyebrow ? <Badge tone={eyebrowTone}>{eyebrow}</Badge> : null}
      <h2 style={{ fontSize: "var(--size-h1)", lineHeight: "var(--lh-h1)", color: "var(--brand-red)", margin: 0 }}>
        {title}
        {accent ? <span style={{ color: "var(--brand-indigo)" }}> {accent}</span> : null}
      </h2>
      {lead ? <p style={{ fontSize: "var(--size-lead)", lineHeight: "var(--lh-lead)", color: "var(--text-body)" }}>{lead}</p> : null}
    </div>
  );
}
