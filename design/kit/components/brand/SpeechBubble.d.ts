export interface SpeechBubbleProps {
  children?: React.ReactNode;
  /** poppy = yellow, parker = indigo, brand = red, plain = white. */
  tone?: "poppy" | "parker" | "brand" | "plain";
  tail?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  style?: React.CSSProperties;
}
export declare function SpeechBubble(props: SpeechBubbleProps): JSX.Element;
