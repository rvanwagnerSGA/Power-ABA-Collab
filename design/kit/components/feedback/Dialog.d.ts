export interface DialogProps {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Right-aligned action row, typically two Buttons. */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Max width in px. */
  width?: number;
  style?: React.CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element;
