'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { HelperText } from './help-text';
export function RHFRating({ name, helperText, slotProps, ...other }) {
    const { control } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsxs(Box, { ...slotProps?.wrapper, sx: [
                { display: 'flex', flexDirection: 'column' },
                ...(Array.isArray(slotProps?.wrapper?.sx)
                    ? slotProps.wrapper.sx
                    : [slotProps?.wrapper?.sx]),
            ], children: [_jsx(Rating, { ...field, onChange: (event, newValue) => field.onChange(Number(newValue)), ...other }), _jsx(HelperText, { ...slotProps?.helperText, disableGutters: true, errorMessage: error?.message, helperText: helperText })] })) }));
}
