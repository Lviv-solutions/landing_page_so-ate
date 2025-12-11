import type { TypographyProps } from '@mui/material/Typography';
import type { Variants, UseInViewOptions } from 'framer-motion';
export declare const animateTextClasses: {
    root: any;
    lines: any;
    line: any;
    word: any;
    char: any;
    space: any;
    srOnly: string;
};
export type AnimateTextProps = TypographyProps & {
    variants?: Variants;
    repeatDelayMs?: number;
    textContent: string | string[];
    once?: UseInViewOptions['once'];
    amount?: UseInViewOptions['amount'];
};
export declare function AnimateText({ sx, variants, className, textContent, once, amount, component, repeatDelayMs, // 1000 = 1s
...other }: AnimateTextProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=animate-text.d.ts.map