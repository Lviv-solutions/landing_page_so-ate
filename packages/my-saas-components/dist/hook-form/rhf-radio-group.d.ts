import type { RadioProps } from '@mui/material/Radio';
import type { FormLabelProps } from '@mui/material/FormLabel';
import type { RadioGroupProps } from '@mui/material/RadioGroup';
import type { FormControlProps } from '@mui/material/FormControl';
import type { FormHelperTextProps } from '@mui/material/FormHelperText';
export type RHFRadioGroupProps = RadioGroupProps & {
    name: string;
    label?: string;
    options: {
        label: string;
        value: string;
    }[];
    helperText?: React.ReactNode;
    slotProps?: {
        wrapper?: FormControlProps;
        radio?: RadioProps;
        formLabel?: FormLabelProps;
        helperText?: FormHelperTextProps;
    };
};
export declare function RHFRadioGroup({ sx, name, label, options, helperText, slotProps, ...other }: RHFRadioGroupProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-radio-group.d.ts.map