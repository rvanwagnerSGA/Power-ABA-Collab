export interface FieldProps {
  label?: string;
  htmlFor?: string;
  /** Plain-language helper text, shown when there is no error. */
  hint?: string;
  /** Replaces the hint and turns the message red. */
  error?: string;
  required?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;
