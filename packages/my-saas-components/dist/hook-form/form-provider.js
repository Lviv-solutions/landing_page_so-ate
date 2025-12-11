'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider as RHFForm } from 'react-hook-form';
export function Form({ children, onSubmit, methods }) {
    return (_jsx(RHFForm, { ...methods, children: _jsx("form", { onSubmit: onSubmit, noValidate: true, autoComplete: "off", children: children }) }));
}
