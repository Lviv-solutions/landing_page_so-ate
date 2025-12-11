import type { MotionProps } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';
export type MotionViewportProps = BoxProps & MotionProps & {
    disableAnimate?: boolean;
};
export declare function MotionViewport({ children, viewport, disableAnimate, ...other }: MotionViewportProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=motion-viewport.d.ts.map