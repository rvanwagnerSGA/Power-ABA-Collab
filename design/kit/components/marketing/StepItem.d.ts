export interface StepItemProps {
  /** Step number shown in the colored disc. */
  number: number | string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  tone?: "red" | "indigo" | "orange" | "magenta" | "teal";
  /** Hides the connector line on the final step. */
  last?: boolean;
  style?: React.CSSProperties;
}
export declare function StepItem(props: StepItemProps): JSX.Element;
