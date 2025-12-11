import type { UseInViewOptions } from "framer-motion";
import type { Breakpoint } from "@mui/material/styles";
import type { EffectsType } from "./styles";
import React from "react";
import { ImageImg, ImageRoot, ImageOverlay, ImagePlaceholder } from "./styles";
type PredefinedAspectRatio = "2/3" | "3/2" | "4/3" | "3/4" | "6/4" | "4/6" | "16/9" | "9/16" | "21/9" | "9/21" | "1/1";
type AspectRatioType = PredefinedAspectRatio | `${number}/${number}`;
export type ImageProps = React.ComponentProps<typeof ImageRoot> & Pick<React.ComponentProps<typeof ImageImg>, "src" | "alt"> & {
    delayTime?: number;
    onLoad?: () => void;
    effect?: EffectsType;
    visibleByDefault?: boolean;
    disablePlaceholder?: boolean;
    viewportOptions?: UseInViewOptions;
    ratio?: AspectRatioType | Partial<Record<Breakpoint, AspectRatioType>>;
    slotProps?: {
        img?: Omit<React.ComponentProps<typeof ImageImg>, "src" | "alt">;
        overlay?: React.ComponentProps<typeof ImageOverlay>;
        placeholder?: React.ComponentProps<typeof ImagePlaceholder>;
    };
};
export declare function Image({ sx, src, ref, ratio, onLoad, effect, alt, slotProps, className, viewportOptions, disablePlaceholder, visibleByDefault, delayTime, ...other }: ImageProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=image.d.ts.map