export interface AvatarProps {
  /** Photo URL. Falls back to initials from `name`. */
  src?: string;
  name?: string;
  /** Pixel diameter. */
  size?: number;
  /** Optional double ring in a character or brand color. */
  ring?: "none" | "poppy" | "parker" | "brand";
  style?: React.CSSProperties;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
