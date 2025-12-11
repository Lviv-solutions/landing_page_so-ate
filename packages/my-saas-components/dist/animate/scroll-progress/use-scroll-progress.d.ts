import type { MotionValue } from 'framer-motion';
export type UseScrollProgressReturn = {
    scrollXProgress: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
    elementRef: React.RefObject<HTMLDivElement | null>;
};
export type UseScrollProgress = 'document' | 'container';
export declare function useScrollProgress(target?: UseScrollProgress): UseScrollProgressReturn;
//# sourceMappingURL=use-scroll-progress.d.ts.map