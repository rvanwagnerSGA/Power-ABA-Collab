import React from "react";
import { SpeechBubble } from "./SpeechBubble.jsx";

const ART = {
  pair: "assets/characters/poppy-parker-full-body.png",
  waving: "assets/characters/poppy-parker-waving.png",
  kids: "assets/characters/poppy-parker-kids-live-action.png",
  teens: "assets/characters/poppy-parker-teens-live-action.png",
};

export function CharacterCallout({ art = "waving", line, tone = "plain", height = 220, side = "left", basePath = "", style, ...rest }) {
  const src = (basePath ? basePath.replace(/\/$/, "") + "/" : "") + ART[art];
  const image = <img src={src} alt="Poppy and Parker, the Power Pals" style={{ height: height, width: "auto", flex: "0 0 auto" }} />;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "var(--space-5)",
        flexDirection: side === "right" ? "row-reverse" : "row",
        ...style,
      }}
      {...rest}
    >
      {image}
      {line ? <SpeechBubble tone={tone} tail={side === "right" ? "bottom-right" : "bottom-left"} style={{ marginBottom: height * 0.18 }}>{line}</SpeechBubble> : null}
    </div>
  );
}
