import type { TextFieldProps } from '@mui/material/TextField';
import type { AutocompleteProps } from '@mui/material/Autocomplete';
type Multiple = boolean | undefined;
type DisableClearable = boolean | undefined;
type FreeSolo = boolean | undefined;
type ExcludedProps = 'renderInput';
export type AutocompleteBaseProps = Omit<AutocompleteProps<any, Multiple, DisableClearable, FreeSolo>, ExcludedProps>;
export type RHFAutocompleteProps = AutocompleteBaseProps & {
    name: string;
    label?: string;
    placeholder?: string;
    helperText?: React.ReactNode;
    slotProps?: AutocompleteBaseProps['slotProps'] & {
        textField?: Partial<TextFieldProps>;
    };
};
export declare function RHFAutocomplete({ name, label, slotProps, helperText, placeholder, ...other }: RHFAutocompleteProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-autocomplete.d.ts.map