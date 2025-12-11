'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { HelperText } from './help-text';
export function RHFSwitch({ name, helperText, label, slotProps, sx, ...other }) {
    const { control } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsxs(Box, { ...slotProps?.wrapper, children: [_jsx(FormControlLabel, { label: label, control: _jsx(Switch, { ...field, checked: field.value, ...slotProps?.switch, slotProps: {
                            ...slotProps?.switch?.slotProps,
                            input: {
                                id: `${name}-switch`,
                                ...(!label && { 'aria-label': `${name} switch` }),
                                ...slotProps?.switch?.slotProps?.input,
                            },
                        } }), sx: [{ mx: 0 }, ...(Array.isArray(sx) ? sx : [sx])], ...other }), _jsx(HelperText, { ...slotProps?.helperText, errorMessage: error?.message, helperText: helperText })] })) }));
}
export function RHFMultiSwitch({ name, label, options, helperText, slotProps, ...other }) {
    const { control } = useFormContext();
    const getSelected = (selectedItems, item) => selectedItems.includes(item)
        ? selectedItems.filter((value) => value !== item)
        : [...selectedItems, item];
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsxs(FormControl, { component: "fieldset", ...slotProps?.wrapper, children: [label && (_jsx(FormLabel, { component: "legend", ...slotProps?.formLabel, sx: [
                        { mb: 1, typography: 'body2' },
                        ...(Array.isArray(slotProps?.formLabel?.sx)
                            ? slotProps.formLabel.sx
                            : [slotProps?.formLabel?.sx]),
                    ], children: label })), _jsx(FormGroup, { ...other, children: options.map((option) => (_jsx(FormControlLabel, { control: _jsx(Switch, { checked: field.value.includes(option.value), onChange: () => field.onChange(getSelected(field.value, option.value)), ...slotProps?.switch, slotProps: {
                                ...slotProps?.switch?.slotProps,
                                input: {
                                    id: `${option.label}-switch`,
                                    ...(!option.label && { 'aria-label': `${option.label} switch` }),
                                    ...slotProps?.switch?.slotProps?.input,
                                },
                            } }), label: option.label }, option.value))) }), _jsx(HelperText, { ...slotProps?.helperText, disableGutters: true, errorMessage: error?.message, helperText: helperText })] })) }));
}
