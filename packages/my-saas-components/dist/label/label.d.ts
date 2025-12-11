import React from "react";
export type LabelColor = "primary" | "secondary" | "info" | "success" | "warning" | "error" | "default";
export type LabelVariant = "filled" | "outlined" | "soft" | "inverted";
export interface LabelProps extends React.ComponentProps<typeof LabelRoot> {
    disabled?: boolean;
    color?: LabelColor;
    variant?: LabelVariant;
    endIcon?: React.ReactNode;
    startIcon?: React.ReactNode;
    children?: React.ReactNode;
}
declare const LabelRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme> & {
    color?: LabelColor;
    variant?: LabelVariant;
    disabled?: boolean;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare function Label({ sx, endIcon, children, startIcon, className, disabled, variant, color, ...other }: LabelProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=label.d.ts.map