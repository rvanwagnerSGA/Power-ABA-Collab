export interface TooltipProps {
  /** Short plain-language label. Never put essential instructions here only. */
  label: React.ReactNode;
  children?: React.ReactNode;
  placement?: "top" | "bottom";
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
