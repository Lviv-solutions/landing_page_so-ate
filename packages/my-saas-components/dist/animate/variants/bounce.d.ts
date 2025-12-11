import type { Variants, Transition } from 'framer-motion';
type Direction = 'in' | 'inUp' | 'inDown' | 'inLeft' | 'inRight' | 'out' | 'outUp' | 'outDown' | 'outLeft' | 'outRight';
type Options = {
    distance?: number;
    transition?: Transition;
};
export declare const varBounce: (direction: Direction, options?: Options) => Variants;
export {};
//# sourceMappingURL=bounce.d.ts.map