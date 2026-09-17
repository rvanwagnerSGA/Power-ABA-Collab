export interface TabItem { value: string; label: string }
export interface TabsProps {
  items?: (string | TabItem)[];
  /** Controlled selection. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
