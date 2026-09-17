export interface LogoProps {
  /** digital = website/social/email lockup. print = print & apparel lockup. compact = tight "PowerABA" mark. bloom = the Power Bloom badge alone. */
  lockup?: "digital" | "print" | "compact" | "bloom";
  /** Rendered height in px; width follows. */
  height?: number;
  /** Path prefix to the design-system root, e.g. "../.." from a nested page. */
  basePath?: string;
  href?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
