import type { Theme, SxProps } from '@mui/material/styles';
import type { AnimateLogoProps } from '../animate';
export type SplashScreenProps = React.ComponentProps<'div'> & {
    portal?: boolean;
    sx?: SxProps<Theme>;
    slots?: {
        logo?: React.ReactNode;
    };
    slotProps?: {
        wrapper?: React.ComponentProps<typeof LoadingWrapper>;
        logo?: AnimateLogoProps;
    };
};
export declare function SplashScreen({ portal, slots, slotProps, sx, ...other }: SplashScreenProps): import("react/jsx-runtime").JSX.Element;
declare const LoadingWrapper: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export {};
//# sourceMappingURL=splash-screen.d.ts.map