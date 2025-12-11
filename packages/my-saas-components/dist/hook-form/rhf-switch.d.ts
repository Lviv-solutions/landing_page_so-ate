import type { BoxProps } from '@mui/material/Box';
import type { SwitchProps } from '@mui/material/Switch';
import type { FormGroupProps } from '@mui/material/FormGroup';
import type { FormLabelProps } from '@mui/material/FormLabel';
import type { FormControlProps } from '@mui/material/FormControl';
import type { FormHelperTextProps } from '@mui/material/FormHelperText';
import type { FormControlLabelProps } from '@mui/material/FormControlLabel';
export type RHFSwitchProps = Omit<FormControlLabelProps, 'control'> & {
    name: string;
    helperText?: React.ReactNode;
    slotProps?: {
        wrapper?: BoxProps;
        switch?: SwitchProps;
        helperText?: FormHelperTextProps;
    };
};
export declare function RHFSwitch({ name, helperText, label, slotProps, sx, ...other }: RHFSwitchProps): import("react/jsx-runtime").JSX.Element;
type RHFMultiSwitchProps = FormGroupProps & {
    name: string;
    label?: string;
    helperText?: React.ReactNode;
    options: {
        label: string;
        value: string;
    }[];
    slotProps?: {
        wrapper?: FormControlProps;
        switch: SwitchProps;
        formLabel?: FormLabelProps;
        helperText?: FormHelperTextProps;
    };
};
export declare function RHFMultiSwitch({ name, label, options, helperText, slotProps, ...other }: RHFMultiSwitchProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-switch.d.ts.map