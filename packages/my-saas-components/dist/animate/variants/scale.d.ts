import type { Variants, Transition } from 'framer-motion';
type Direction = 'in' | 'inX' | 'inY' | 'out' | 'outX' | 'outY';
type Options = {
    transitionIn?: Transition;
    transitionOut?: Transition;
};
export declare const varScale: (direction: Direction, options?: Options) => Variants;
export {};
//# sourceMappingURL=scale.d.ts.map