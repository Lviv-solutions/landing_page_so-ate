import type { Variants, Transition } from 'framer-motion';
type Direction = 'in' | 'inUp' | 'inDown' | 'inLeft' | 'inRight' | 'out' | 'outUp' | 'outDown' | 'outLeft' | 'outRight';
type Options = {
    distance?: number;
    transitionIn?: Transition;
    transitionOut?: Transition;
};
export declare const varZoom: (direction: Direction, options?: Options) => Variants;
export {};
//# sourceMappingURL=zoom.d.ts.map