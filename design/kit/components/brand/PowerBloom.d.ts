export interface PowerBloomProps {
  /** Pixel diameter. Do not render below 24px — petal order must stay readable. */
  size?: number;
  /** Path prefix to the design-system root. */
  basePath?: string;
  /** White halo + soft shadow so the badge reads on photos. */
  ring?: boolean;
  style?: React.CSSProperties;
}
export declare function PowerBloom(props: PowerBloomProps): JSX.Element;
