/**
 * Power Bloom Friday quote card — a short brand line over a soft surface.
 * @startingPoint section="Marketing" subtitle="Power Bloom Friday quote card" viewport="700x360"
 */
export interface QuoteCardProps {
  quote?: React.ReactNode;
  /** Source line, rendered uppercase. Never attribute a quote to a real client without documented consent. */
  attribution?: React.ReactNode;
  tone?: "warm" | "red" | "indigo" | "yellow";
  basePath?: string;
  style?: React.CSSProperties;
}
export declare function QuoteCard(props: QuoteCardProps): JSX.Element;
