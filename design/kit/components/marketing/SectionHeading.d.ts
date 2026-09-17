/**
 * Eyebrow + two-color headline + lead paragraph — the standard section opener.
 * @startingPoint section="Marketing" subtitle="Eyebrow, two-tone headline, lead paragraph" viewport="700x260"
 */
export interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowTone?: "red" | "coral" | "indigo" | "magenta" | "orange" | "yellow" | "teal" | "neutral";
  title?: React.ReactNode;
  /** Second half of the headline, rendered indigo — the brand's red/indigo split. */
  accent?: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
