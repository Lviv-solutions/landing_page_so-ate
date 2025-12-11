import type { Theme, SxProps } from "@mui/material/styles";
import React from "react";
export type BreadcrumbsLinkProps = React.ComponentProps<"div"> & {
    name?: string;
    href?: string;
    disabled?: boolean;
    icon?: React.ReactNode;
    sx?: SxProps<Theme>;
    component?: React.ElementType;
};
export declare function BreadcrumbsLink({ href, icon, name, disabled, component, ...other }: BreadcrumbsLinkProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=breadcrumb-link.d.ts.map