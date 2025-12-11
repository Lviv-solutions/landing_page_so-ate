import type { UseInViewOptions } from 'framer-motion';
import type { TypographyProps } from '@mui/material/Typography';
export type AnimateCountUpProps = TypographyProps & {
    to: number;
    from?: number;
    toFixed?: number;
    duration?: number;
    unit?: 'k' | 'm' | 'b' | string;
    once?: UseInViewOptions['once'];
    amount?: UseInViewOptions['amount'];
};
export declare function AnimateCountUp({ to, sx, from, toFixed, once, duration, amount, unit: unitProp, component, ...other }: AnimateCountUpProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=animate-count-up.d.ts.map