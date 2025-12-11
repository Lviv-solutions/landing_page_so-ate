import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';
import type { MotionValue, MotionProps } from 'framer-motion';
import type { PaletteColorKey } from 'src/theme/core';
export declare const scrollProgressClasses: {
    circular: any;
    linear: any;
};
type BaseProps = MotionProps & React.ComponentProps<'svg'> & React.ComponentProps<'div'>;
export interface ScrollProgressProps extends BaseProps {
    size?: number;
    portal?: boolean;
    thickness?: number;
    whenScroll?: 'x' | 'y';
    sx?: SxProps<Theme>;
    progress: MotionValue<number>;
    variant: 'linear' | 'circular';
    color?: PaletteColorKey | 'inherit';
    slotProps?: {
        wrapper?: BoxProps;
    };
}
export declare function ScrollProgress({ sx, size, portal, variant, slotProps, className, progress, thickness, whenScroll, color, ...other }: ScrollProgressProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=scroll-progress.d.ts.map