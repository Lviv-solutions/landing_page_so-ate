import type { ChipProps } from '@mui/material/Chip';
import type { TextFieldProps } from '@mui/material/TextField';
import type { AutocompleteProps } from '@mui/material/Autocomplete';
type Multiple = boolean | undefined;
type DisableClearable = boolean | undefined;
type FreeSolo = boolean | undefined;
type ExcludedProps = 'options' | 'renderOption' | 'renderInput' | 'renderValue' | 'getOptionLabel';
export type AutocompleteBaseProps = Omit<AutocompleteProps<any, Multiple, DisableClearable, FreeSolo>, ExcludedProps>;
export type CountrySelectProps = AutocompleteBaseProps & Pick<TextFieldProps, 'label' | 'error' | 'variant' | 'helperText' | 'placeholder' | 'hiddenLabel'> & {
    displayValue?: 'label' | 'code';
    slotProps?: AutocompleteBaseProps['slotProps'] & {
        chip?: Partial<ChipProps>;
        textField?: Partial<TextFieldProps>;
    };
};
export declare function CountrySelect({ id, label, error, variant, multiple, slotProps, helperText, hiddenLabel, placeholder, displayValue, ...other }: CountrySelectProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=country-select.d.ts.map