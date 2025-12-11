'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import { PhoneInput } from '../phone-input';
export function RHFPhoneInput({ name, helperText, ...other }) {
    const { control } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsx(PhoneInput, { ...field, fullWidth: true, error: !!error, helperText: error?.message ?? helperText, ...other })) }));
}
