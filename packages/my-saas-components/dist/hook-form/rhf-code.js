'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MuiOtpInput } from 'mui-one-time-password-input';
import { Controller, useFormContext } from 'react-hook-form';
import Box from '@mui/material/Box';
import { inputBaseClasses } from '@mui/material/InputBase';
import { HelperText } from './help-text';
export function RHFCode({ name, slotProps, helperText, maxSize = 56, placeholder = '-', ...other }) {
    const { control } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsxs(Box, { ...slotProps?.wrapper, sx: [
                {
                    [`& .${inputBaseClasses.input}`]: {
                        p: 0,
                        height: 'auto',
                        aspectRatio: '1/1',
                        maxWidth: maxSize,
                    },
                },
                ...(Array.isArray(slotProps?.wrapper?.sx)
                    ? slotProps.wrapper.sx
                    : [slotProps?.wrapper?.sx]),
            ], children: [_jsx(MuiOtpInput, { ...field, autoFocus: true, gap: 1.5, length: 6, TextFieldsProps: {
                        placeholder,
                        error: !!error,
                        ...slotProps?.textField,
                    }, ...other }), _jsx(HelperText, { ...slotProps?.helperText, errorMessage: error?.message, helperText: helperText })] })) }));
}
