export interface AccordionItem { question: React.ReactNode; answer: React.ReactNode }
export interface AccordionProps {
  items?: AccordionItem[];
  /** Index open on mount; -1 for all closed. */
  defaultOpen?: number;
  style?: React.CSSProperties;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
