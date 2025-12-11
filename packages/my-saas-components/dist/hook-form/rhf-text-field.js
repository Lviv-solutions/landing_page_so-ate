'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import { transformValue, transformValueOnBlur, transformValueOnChange } from 'minimal-shared/utils';
import TextField from '@mui/material/TextField';
export function RHFTextField({ name, helperText, slotProps, type = 'text', ...other }) {
    const { control } = useFormContext();
    const isNumberType = type === 'number';
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsx(TextField, { ...field, fullWidth: true, value: isNumberType ? transformValue(field.value) : field.value, onChange: (event) => {
                const transformedValue = isNumberType
                    ? transformValueOnChange(event.target.value)
                    : event.target.value;
                field.onChange(transformedValue);
            }, onBlur: (event) => {
                const transformedValue = isNumberType
                    ? transformValueOnBlur(event.target.value)
                    : event.target.value;
                field.onChange(transformedValue);
            }, type: isNumberType ? 'text' : type, error: !!error, helperText: error?.message ?? helperText, slotProps: {
                ...slotProps,
                htmlInput: {
                    ...slotProps?.htmlInput,
                    ...(isNumberType && {
                        inputMode: 'decimal',
                        pattern: '[0-9]*\\.?[0-9]*',
                    }),
                    autoComplete: 'new-password', // Disable autocomplete and autofill
                },
            }, ...other })) }));
}
