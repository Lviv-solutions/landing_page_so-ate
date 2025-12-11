import type { LinkProps } from "@mui/material/Link";
import React from "react";
export type LogoProps = LinkProps & {
    isSingle?: boolean;
    disabled?: boolean;
    component?: React.ElementType;
};
export declare function Logo({ sx, disabled, className, href, isSingle, component, ...other }: LogoProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=logo.d.ts.map