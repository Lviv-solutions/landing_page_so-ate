import type { Variants, Transition } from 'framer-motion';
type Direction = 'in' | 'out';
type Options = {
    deg?: number;
    transitionIn?: Transition;
    transitionOut?: Transition;
};
export declare const varRotate: (direction: Direction, options?: Options) => Variants;
export {};
//# sourceMappingURL=rotate.d.ts.map