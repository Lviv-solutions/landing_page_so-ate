import type { LinkProps } from "@mui/material/Link";
import React from "react";
export type BackLinkProps = LinkProps & {
    label?: string;
    component?: React.ElementType;
};
export declare function BackLink({ sx, label, component, ...other }: BackLinkProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=back-link.d.ts.map