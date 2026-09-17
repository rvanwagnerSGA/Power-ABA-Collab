export interface ToastProps {
  tone?: "success" | "info" | "warning" | "error";
  title?: React.ReactNode;
  children?: React.ReactNode;
  onDismiss?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
