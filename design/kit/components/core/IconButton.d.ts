export interface IconButtonProps {
  /** Lucide icon slug. */
  icon: string;
  /** Required accessible label — rendered as aria-label and title. */
  label: string;
  variant?: "primary" | "secondary" | "outline" | "soft" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
