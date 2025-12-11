'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import { Editor } from '../editor';
export function RHFEditor({ name, helperText, ...other }) {
    const { control, formState: { isSubmitSuccessful }, } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsx(Editor, { ...field, error: !!error, helperText: error?.message ?? helperText, resetValue: isSubmitSuccessful, ...other })) }));
}
