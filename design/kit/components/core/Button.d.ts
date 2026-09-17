/**
 * Pill-shaped action button — the only button shape Power ABA uses.
 * @startingPoint section="Core" subtitle="Pill buttons in every brand variant and size" viewport="700x220"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = brand red (one per view). secondary = indigo. outline/ghost for lower emphasis. */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  /** Lucide icon slug rendered before the label. */
  icon?: string;
  /** Lucide icon slug rendered after the label — usually "arrow-right". */
  iconAfter?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
