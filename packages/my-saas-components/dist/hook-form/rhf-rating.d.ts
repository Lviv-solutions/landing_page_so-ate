import type { BoxProps } from '@mui/material/Box';
import type { RatingProps } from '@mui/material/Rating';
import type { FormHelperTextProps } from '@mui/material/FormHelperText';
export type RHFRatingProps = RatingProps & {
    name: string;
    helperText?: React.ReactNode;
    slotProps?: {
        wrapper?: BoxProps;
        helperText?: FormHelperTextProps;
    };
};
export declare function RHFRating({ name, helperText, slotProps, ...other }: RHFRatingProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-rating.d.ts.map