'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { HelperText } from './help-text';
export function RHFRadioGroup({ sx, name, label, options, helperText, slotProps, ...other }) {
    const { control } = useFormContext();
    const labelledby = `${name}-radios`;
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsxs(FormControl, { component: "fieldset", ...slotProps?.wrapper, children: [label && (_jsx(FormLabel, { id: labelledby, component: "legend", ...slotProps?.formLabel, sx: [
                        { mb: 1, typography: 'body2' },
                        ...(Array.isArray(slotProps?.formLabel?.sx)
                            ? slotProps.formLabel.sx
                            : [slotProps?.formLabel?.sx]),
                    ], children: label })), _jsx(RadioGroup, { ...field, "aria-labelledby": labelledby, sx: sx, ...other, children: options.map((option) => (_jsx(FormControlLabel, { value: option.value, control: _jsx(Radio, { ...slotProps?.radio, slotProps: {
                                ...slotProps?.radio?.slotProps,
                                input: {
                                    id: `${option.label}-radio`,
                                    ...(!option.label && { 'aria-label': `${option.label} radio` }),
                                    ...slotProps?.radio?.slotProps?.input,
                                },
                            } }), label: option.label }, option.value))) }), _jsx(HelperText, { ...slotProps?.helperText, disableGutters: true, errorMessage: error?.message, helperText: helperText })] })) }));
}
