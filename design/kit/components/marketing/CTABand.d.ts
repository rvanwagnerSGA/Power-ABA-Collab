export interface CTABandProps {
  title?: React.ReactNode;
  lead?: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** red and indigo are full-bleed solids with white type; warm is the cream surface. */
  tone?: "red" | "indigo" | "warm";
  style?: React.CSSProperties;
}
export declare function CTABand(props: CTABandProps): JSX.Element;
