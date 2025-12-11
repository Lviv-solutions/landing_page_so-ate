'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { HelperText } from './help-text';
export function RHFCheckbox({ sx, name, label, slotProps, helperText, ...other }) {
    const { control } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsxs(Box, { ...slotProps?.wrapper, children: [_jsx(FormControlLabel, { label: label, control: _jsx(Checkbox, { ...field, checked: field.value, ...slotProps?.checkbox, slotProps: {
                            ...slotProps?.checkbox?.slotProps,
                            input: {
                                id: `${name}-checkbox`,
                                ...(!label && { 'aria-label': `${name} checkbox` }),
                                ...slotProps?.checkbox?.slotProps?.input,
                            },
                        } }), sx: [{ mx: 0 }, ...(Array.isArray(sx) ? sx : [sx])], ...other }), _jsx(HelperText, { ...slotProps?.helperText, errorMessage: error?.message, helperText: helperText })] })) }));
}
export function RHFMultiCheckbox({ name, label, options, slotProps, helperText, ...other }) {
    const { control } = useFormContext();
    const getSelected = (selectedItems, item) => selectedItems.includes(item)
        ? selectedItems.filter((value) => value !== item)
        : [...selectedItems, item];
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsxs(FormControl, { component: "fieldset", ...slotProps?.wrapper, children: [label && (_jsx(FormLabel, { component: "legend", ...slotProps?.formLabel, sx: [
                        { mb: 1, typography: 'body2' },
                        ...(Array.isArray(slotProps?.formLabel?.sx)
                            ? slotProps.formLabel.sx
                            : [slotProps?.formLabel?.sx]),
                    ], children: label })), _jsx(FormGroup, { ...other, children: options.map((option) => (_jsx(FormControlLabel, { control: _jsx(Checkbox, { checked: field.value.includes(option.value), onChange: () => field.onChange(getSelected(field.value, option.value)), ...slotProps?.checkbox, slotProps: {
                                ...slotProps?.checkbox?.slotProps,
                                input: {
                                    id: `${option.label}-checkbox`,
                                    ...(!option.label && { 'aria-label': `${option.label} checkbox` }),
                                    ...slotProps?.checkbox?.slotProps?.input,
                                },
                            } }), label: option.label }, option.value))) }), _jsx(HelperText, { ...slotProps?.helperText, disableGutters: true, errorMessage: error?.message, helperText: helperText })] })) }));
}
