import type { ButtonBaseProps } from '@mui/material/ButtonBase';
type LargeBlockProps = React.ComponentProps<typeof LargeBlockRoot> & {
    title: string;
    tooltip?: string;
    canReset?: boolean;
    onReset?: () => void;
};
declare const LargeBlockRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare function LargeBlock({ sx, title, tooltip, children, canReset, onReset, ...other }: LargeBlockProps): import("react/jsx-runtime").JSX.Element;
type SmallBlockProps = React.ComponentProps<typeof SmallBlockRoot> & {
    label: string;
    canReset?: boolean;
    onReset?: () => void;
};
declare const SmallBlockRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare function SmallBlock({ label, canReset, onReset, sx, children, ...other }: SmallBlockProps): import("react/jsx-runtime").JSX.Element;
export type OptionButtonProps = ButtonBaseProps & {
    selected?: boolean;
};
export declare function OptionButton({ selected, sx, children, ...other }: OptionButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=styles.d.ts.map