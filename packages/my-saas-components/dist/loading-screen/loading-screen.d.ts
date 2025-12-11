import type { Theme, SxProps } from "@mui/material/styles";
import type { LinearProgressProps } from "@mui/material/LinearProgress";
import React from "react";
export type LoadingScreenProps = React.ComponentProps<"div"> & {
    portal?: boolean;
    sx?: SxProps<Theme>;
    slots?: {
        progress?: React.ReactNode;
    };
    slotsProps?: {
        progress?: LinearProgressProps;
    };
};
export declare function LoadingScreen({ portal, slots, slotsProps, sx, ...other }: LoadingScreenProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=loading-screen.d.ts.map