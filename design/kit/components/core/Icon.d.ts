export interface IconProps {
  /** Lucide icon slug, e.g. "heart", "phone", "calendar-check". */
  name: string;
  /** Pixel box. Brand default 20; 16 inside small controls, 24-28 in feature tiles. */
  size?: number;
  /** Any CSS color; defaults to currentColor so icons inherit their container. */
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
