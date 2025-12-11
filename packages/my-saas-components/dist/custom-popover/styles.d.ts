import type { CSSObject } from '@mui/material/styles';
import type { ElementRect } from './hooks';
import type { ArrowProps, PaperOffset, ArrowPlacement } from './types';
export declare function getPaperOffsetStyles(placement: ArrowPlacement, paperOffsets: PaperOffset, isRtl: boolean): CSSObject;
export declare const Arrow: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme> & ArrowProps & {
    paperRect: ElementRect;
    anchorRect: ElementRect;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
//# sourceMappingURL=styles.d.ts.map