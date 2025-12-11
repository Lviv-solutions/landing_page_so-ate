import type { Variants, Transition } from 'framer-motion';
type Direction = 'inUp' | 'inDown' | 'inLeft' | 'inRight' | 'outUp' | 'outDown' | 'outLeft' | 'outRight';
type Options = {
    distance?: number;
    transitionIn?: Transition;
    transitionOut?: Transition;
};
export declare const varSlide: (direction: Direction, options?: Options) => Variants;
export {};
//# sourceMappingURL=slide.d.ts.map