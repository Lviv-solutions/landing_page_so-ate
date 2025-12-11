import type { BoxProps } from "@mui/material/Box";
import type { Theme, SxProps } from "@mui/material/styles";
import type { TypographyProps } from "@mui/material/Typography";
import React from "react";
export type EmptyContentProps = React.ComponentProps<"div"> & {
    title?: string;
    imgUrl?: string;
    filled?: boolean;
    sx?: SxProps<Theme>;
    description?: string;
    action?: React.ReactNode;
    slotProps?: {
        img?: BoxProps<"img">;
        title?: TypographyProps;
        description?: TypographyProps;
    };
};
export declare function EmptyContent({ sx, imgUrl, action, filled, slotProps, description, title, ...other }: EmptyContentProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=empty-content.d.ts.map