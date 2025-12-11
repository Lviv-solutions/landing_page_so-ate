import type { BoxProps } from '@mui/material/Box';
import type { CheckboxProps } from '@mui/material/Checkbox';
import type { FormGroupProps } from '@mui/material/FormGroup';
import type { FormLabelProps } from '@mui/material/FormLabel';
import type { FormControlProps } from '@mui/material/FormControl';
import type { FormHelperTextProps } from '@mui/material/FormHelperText';
import type { FormControlLabelProps } from '@mui/material/FormControlLabel';
type RHFCheckboxProps = Omit<FormControlLabelProps, 'control'> & {
    name: string;
    helperText?: React.ReactNode;
    slotProps?: {
        wrapper?: BoxProps;
        checkbox?: CheckboxProps;
        helperText?: FormHelperTextProps;
    };
};
export declare function RHFCheckbox({ sx, name, label, slotProps, helperText, ...other }: RHFCheckboxProps): import("react/jsx-runtime").JSX.Element;
type RHFMultiCheckboxProps = FormGroupProps & {
    name: string;
    label?: string;
    helperText?: React.ReactNode;
    options: {
        label: string;
        value: string;
    }[];
    slotProps?: {
        wrapper?: FormControlProps;
        checkbox?: CheckboxProps;
        formLabel?: FormLabelProps;
        helperText?: FormHelperTextProps;
    };
};
export declare function RHFMultiCheckbox({ name, label, options, slotProps, helperText, ...other }: RHFMultiCheckboxProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-checkbox.d.ts.map