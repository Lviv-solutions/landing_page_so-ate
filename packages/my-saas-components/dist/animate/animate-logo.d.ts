import type { Theme, SxProps } from '@mui/material/styles';
import type { LogoProps } from '../logo';
export type AnimateLogoProps = React.ComponentProps<'div'> & {
    sx?: SxProps<Theme>;
    logo?: React.ReactNode;
    slotProps?: {
        logo?: LogoProps;
    };
};
export declare function AnimateLogoZoom({ logo, slotProps, sx, ...other }: AnimateLogoProps): import("react/jsx-runtime").JSX.Element;
export declare function AnimateLogoRotate({ logo, sx, slotProps, ...other }: AnimateLogoProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=animate-logo.d.ts.map