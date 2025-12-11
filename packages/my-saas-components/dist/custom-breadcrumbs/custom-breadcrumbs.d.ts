import type { Theme, SxProps } from "@mui/material/styles";
import type { BreadcrumbsProps } from "@mui/material/Breadcrumbs";
import type { MoreLinksProps } from "./more-links";
import type { BreadcrumbsLinkProps } from "./breadcrumb-link";
import React from "react";
import { BreadcrumbsHeading, BreadcrumbsContent, BreadcrumbsContainer } from "./styles";
export type CustomBreadcrumbsSlotProps = {
    breadcrumbs: BreadcrumbsProps;
    moreLinks: Omit<MoreLinksProps, "links">;
    heading: React.ComponentProps<typeof BreadcrumbsHeading>;
    content: React.ComponentProps<typeof BreadcrumbsContent>;
    container: React.ComponentProps<typeof BreadcrumbsContainer>;
};
export type CustomBreadcrumbsSlots = {
    breadcrumbs?: React.ReactNode;
};
export type CustomBreadcrumbsProps = React.ComponentProps<"div"> & {
    sx?: SxProps<Theme>;
    heading?: string;
    activeLast?: boolean;
    backHref?: string;
    action?: React.ReactNode;
    links?: BreadcrumbsLinkProps[];
    moreLinks?: MoreLinksProps["links"];
    slots?: CustomBreadcrumbsSlots;
    slotProps?: Partial<CustomBreadcrumbsSlotProps>;
    linkComponent?: React.ElementType;
};
export declare function CustomBreadcrumbs({ sx, action, backHref, heading, slots, links, moreLinks, slotProps, activeLast, linkComponent, ...other }: CustomBreadcrumbsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=custom-breadcrumbs.d.ts.map