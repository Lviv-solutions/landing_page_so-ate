import type { IconProps } from "@iconify/react";
import React from "react";
import type { IconifyName } from "./register-icons";
export type IconifyProps = React.ComponentProps<typeof IconRoot> & Omit<IconProps, "icon"> & {
    icon: IconifyName | string;
};
export declare function Iconify({ className, icon, width, height, sx, ...other }: IconifyProps): import("react/jsx-runtime").JSX.Element;
declare const IconRoot: import("@emotion/styled").StyledComponent<React.SVGProps<SVGSVGElement> & import("@iconify/react").IconifyIconProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, {}, {}>;
export {};
//# sourceMappingURL=iconify.d.ts.map