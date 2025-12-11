'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export function RHFAutocomplete({ name, label, slotProps, helperText, placeholder, ...other }) {
    const { control, setValue } = useFormContext();
    const { textField, ...otherSlotProps } = slotProps ?? {};
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsx(Autocomplete, { ...field, id: `${name}-rhf-autocomplete`, onChange: (event, newValue) => setValue(name, newValue, { shouldValidate: true }), renderInput: (params) => (_jsx(TextField, { ...params, ...textField, label: label, placeholder: placeholder, error: !!error, helperText: error?.message ?? helperText, slotProps: {
                    ...textField?.slotProps,
                    htmlInput: {
                        ...params.inputProps,
                        ...textField?.slotProps?.htmlInput,
                        autoComplete: 'new-password', // Disable autocomplete and autofill
                    },
                } })), slotProps: {
                ...otherSlotProps,
                chip: {
                    size: 'small',
                    variant: 'soft',
                    ...otherSlotProps?.chip,
                },
            }, ...other })) }));
}
