import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';
type BorderStyleProps = {
    width?: string;
    size?: number;
    sx?: SxProps<Theme>;
};
type AnimateBorderProps = BoxProps & {
    duration?: number;
    slotProps?: {
        primaryBorder?: BorderStyleProps;
        secondaryBorder?: BorderStyleProps;
        outlineColor?: string | ((theme: Theme) => string);
        svgSettings?: {
            rx?: string;
            ry?: string;
        };
    };
};
export declare function AnimateBorder({ sx, children, duration, slotProps, className, ...other }: AnimateBorderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=animate-border.d.ts.map