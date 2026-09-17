export interface PetalStrengthsProps {
  /** Keys of earned petals: "courage" | "curiosity" | "kindness" | "calm" | "expression". Empty array shows all five as earned. */
  earned?: string[];
  /** Adds the Brand Bible story example under each label. */
  showMeaning?: boolean;
  layout?: "row" | "stack";
  style?: React.CSSProperties;
}
export declare function PetalStrengths(props: PetalStrengthsProps): JSX.Element;
