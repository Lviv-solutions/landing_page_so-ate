import type { BoxProps } from '@mui/material/Box';
import type { SliderProps } from '@mui/material/Slider';
import type { FormHelperTextProps } from '@mui/material/FormHelperText';
export type RHFSliderProps = SliderProps & {
    name: string;
    helperText?: React.ReactNode;
    slotProps?: {
        wrapper?: BoxProps;
        helperText?: FormHelperTextProps;
    };
};
export declare function RHFSlider({ name, helperText, slotProps, ...other }: RHFSliderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-slider.d.ts.map