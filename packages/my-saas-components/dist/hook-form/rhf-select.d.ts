import type { ChipProps } from '@mui/material/Chip';
import type { SelectProps } from '@mui/material/Select';
import type { CheckboxProps } from '@mui/material/Checkbox';
import type { TextFieldProps } from '@mui/material/TextField';
import type { InputLabelProps } from '@mui/material/InputLabel';
import type { FormControlProps } from '@mui/material/FormControl';
import type { FormHelperTextProps } from '@mui/material/FormHelperText';
type RHFSelectProps = TextFieldProps & {
    name: string;
    children: React.ReactNode;
};
export declare function RHFSelect({ name, children, helperText, slotProps, ...other }: RHFSelectProps): import("react/jsx-runtime").JSX.Element;
type RHFMultiSelectProps = FormControlProps & {
    name: string;
    label?: string;
    chip?: boolean;
    checkbox?: boolean;
    placeholder?: string;
    helperText?: React.ReactNode;
    options: {
        label: string;
        value: string;
    }[];
    slotProps?: {
        chip?: ChipProps;
        select?: SelectProps;
        checkbox?: CheckboxProps;
        inputLabel?: InputLabelProps;
        helperText?: FormHelperTextProps;
    };
};
export declare function RHFMultiSelect({ name, chip, label, options, checkbox, placeholder, slotProps, helperText, ...other }: RHFMultiSelectProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-select.d.ts.map