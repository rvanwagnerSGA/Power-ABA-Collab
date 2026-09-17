export interface CardProps {
  children?: React.ReactNode;
  /** Surface colorway. "plain" is white with a hairline; washes drop the border. */
  tone?: "plain" | "sunken" | "warm" | "red" | "indigo" | "yellow" | "teal" | "solid";
  /** CSS length; defaults to --card-pad (28px). */
  padding?: string;
  /** CSS length; defaults to --radius-lg (24px). */
  radius?: string;
  /** Lifts 3px and deepens the shadow on hover. */
  hoverable?: boolean;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
