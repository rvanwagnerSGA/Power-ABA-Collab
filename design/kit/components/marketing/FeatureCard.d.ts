/**
 * Icon-in-a-circle service tile — the site's "Areas of Focus" and brochure feature grid.
 * @startingPoint section="Marketing" subtitle="Service tile with washed icon circle" viewport="700x300"
 */
export interface FeatureCardProps {
  /** Lucide icon slug. */
  icon: string;
  /** Circle wash + icon color. Rotate tones across a grid rather than repeating one. */
  tone?: "red" | "coral" | "indigo" | "magenta" | "orange" | "yellow" | "teal";
  title?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  style?: React.CSSProperties;
}
export declare function FeatureCard(props: FeatureCardProps): JSX.Element;
