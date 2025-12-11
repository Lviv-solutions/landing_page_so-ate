'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import { NumberInput } from '../number-input';
export function RHFNumberInput({ name, helperText, ...other }) {
    const { control } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsx(NumberInput, { ...field, onChange: (event, value) => field.onChange(value), ...other, error: !!error, helperText: error?.message ?? helperText })) }));
}
