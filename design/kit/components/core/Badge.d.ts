export interface BadgeProps {
  children?: React.ReactNode;
  /** Brand colorway. Washes carry AA-contrast text of the same hue family. */
  tone?: "red" | "coral" | "indigo" | "magenta" | "orange" | "yellow" | "teal" | "neutral";
  /** Filled instead of washed — use sparingly, for one emphasis badge per view. */
  solid?: boolean;
  icon?: string;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
