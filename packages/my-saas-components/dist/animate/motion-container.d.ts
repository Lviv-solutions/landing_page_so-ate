import type { MotionProps } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';
export type MotionContainerProps = BoxProps & MotionProps & {
    animate?: boolean;
    action?: boolean;
};
export declare function MotionContainer({ sx, animate, children, action, ...other }: MotionContainerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=motion-container.d.ts.map