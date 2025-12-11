import type { FabProps } from '@mui/material/Fab';
type BackToTopProps = FabProps & {
    isDebounce?: boolean;
    scrollThreshold?: string | number;
    renderButton?: (isVisible?: boolean) => React.ReactElement;
};
export declare function BackToTopButton({ sx, isDebounce, renderButton, scrollThreshold, ...other }: BackToTopProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=back-to-top-button.d.ts.map