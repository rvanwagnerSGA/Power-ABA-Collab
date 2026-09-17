export interface CharacterCalloutProps {
  /** Which approved character artwork to place. "kids" and "teens" are the illustrated-plus-live-action pairings. */
  art?: "pair" | "waving" | "kids" | "teens";
  /** One short line of dialogue. Omit for artwork with no bubble. */
  line?: React.ReactNode;
  tone?: "poppy" | "parker" | "brand" | "plain";
  /** Artwork height in px. */
  height?: number;
  side?: "left" | "right";
  basePath?: string;
  style?: React.CSSProperties;
}
export declare function CharacterCallout(props: CharacterCalloutProps): JSX.Element;
