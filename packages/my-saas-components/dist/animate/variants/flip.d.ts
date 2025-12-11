import type { Variants, Transition } from 'framer-motion';
type Direction = 'inX' | 'inY' | 'outX' | 'outY';
type Options = {
    distance?: number;
    transitionIn?: Transition;
    transitionOut?: Transition;
};
export declare const varFlip: (direction: Direction, options?: Options) => Variants;
export {};
//# sourceMappingURL=flip.d.ts.map