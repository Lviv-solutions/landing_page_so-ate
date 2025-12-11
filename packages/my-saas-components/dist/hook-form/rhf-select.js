'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { merge } from 'es-toolkit';
import { Controller, useFormContext } from 'react-hook-form';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { HelperText } from './help-text';
export function RHFSelect({ name, children, helperText, slotProps = {}, ...other }) {
    const { control } = useFormContext();
    const labelId = `${name}-select`;
    const baseSlotProps = {
        select: {
            sx: { textTransform: 'capitalize' },
            MenuProps: {
                slotProps: {
                    paper: {
                        sx: { maxHeight: 240 },
                    },
                },
            },
        },
        htmlInput: { id: labelId },
        inputLabel: { htmlFor: labelId },
    };
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsx(TextField, { ...field, select: true, fullWidth: true, error: !!error, helperText: error?.message ?? helperText, slotProps: merge(baseSlotProps, slotProps), ...other, children: children })) }));
}
export function RHFMultiSelect({ name, chip, label, options, checkbox, placeholder, slotProps, helperText, ...other }) {
    const { control } = useFormContext();
    const labelId = `${name}-multi-select`;
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => {
            const renderLabel = () => (_jsx(InputLabel, { htmlFor: labelId, ...slotProps?.inputLabel, children: label }));
            const renderOptions = () => options.map((option) => (_jsxs(MenuItem, { value: option.value, children: [checkbox && (_jsx(Checkbox, { size: "small", disableRipple: true, checked: field.value.includes(option.value), ...slotProps?.checkbox })), option.label] }, option.value)));
            return (_jsxs(FormControl, { error: !!error, ...other, children: [label && renderLabel(), _jsx(Select, { ...field, multiple: true, displayEmpty: !!placeholder, label: label, renderValue: (selected) => {
                            const selectedItems = options.filter((item) => selected.includes(item.value));
                            if (!selectedItems.length && placeholder) {
                                return _jsx(Box, { sx: { color: 'text.disabled' }, children: placeholder });
                            }
                            if (chip) {
                                return (_jsx(Box, { sx: { gap: 0.5, display: 'flex', flexWrap: 'wrap' }, children: selectedItems.map((item) => (_jsx(Chip, { size: "small", variant: "soft", label: item.label, ...slotProps?.chip }, item.value))) }));
                            }
                            return selectedItems.map((item) => item.label).join(', ');
                        }, ...slotProps?.select, inputProps: {
                            id: labelId,
                            ...slotProps?.select?.inputProps,
                        }, children: renderOptions() }), _jsx(HelperText, { ...slotProps?.helperText, errorMessage: error?.message, helperText: helperText })] }));
        } }));
}
