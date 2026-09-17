export interface TagProps {
  children?: React.ReactNode;
  icon?: string;
  /** Selected state — red hairline plus red wash. */
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** Shows a dismiss "x" when provided. */
  onRemove?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
