'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { HelperText } from './help-text';
export function RHFSlider({ name, helperText, slotProps, ...other }) {
    const { control } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsxs(Box, { ...slotProps?.wrapper, children: [_jsx(Slider, { ...field, valueLabelDisplay: "auto", ...other }), _jsx(HelperText, { ...slotProps?.helperText, disableGutters: true, errorMessage: error?.message, helperText: helperText })] })) }));
}
