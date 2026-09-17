export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Lucide slug shown inside the left edge. */
  icon?: string;
  /** Red border for validation failure. */
  invalid?: boolean;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
