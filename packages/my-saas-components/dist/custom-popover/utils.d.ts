import type { PopoverOrigin } from '@mui/material/Popover';
import type { ElementRect } from './hooks';
import type { ArrowPlacement } from './types';
type PopoverOriginPair = {
    anchorOrigin: PopoverOrigin;
    transformOrigin: PopoverOrigin;
};
/**
 * Gets the popover origin pair for a given placement, with optional RTL flipping.
 */
export declare function getPopoverOrigin(placement: ArrowPlacement, isRtl?: boolean): PopoverOriginPair;
/**
 * Calculates the arrow offset to center it on the anchor while clamping within the paper bounds.
 */
export declare function getArrowOffset(anchorRect: ElementRect, paperRect: ElementRect, arrowSize: number): {
    offsetX: number;
    offsetY: number;
};
export {};
//# sourceMappingURL=utils.d.ts.map