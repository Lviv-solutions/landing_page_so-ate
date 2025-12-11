'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId, useCallback } from 'react';
import { varAlpha } from 'minimal-shared/utils';
import Box from '@mui/material/Box';
import { Iconify } from '../iconify';
import { HelperText, CaptionText, CenteredInput, CounterButton, InputContainer, NumberInputRoot, } from './styles';
export function NumberInput({ sx, error, value, onChange, disabled, slotProps, helperText, captionText, hideDivider, hideButtons, disableInput, min = 0, max = 9999, ...other }) {
    const uniqueId = useId();
    const currentValue = value ?? 0;
    const isDecrementDisabled = currentValue <= min || disabled;
    const isIncrementDisabled = currentValue >= max || disabled;
    const handleDecrement = useCallback((event) => {
        if (!isDecrementDisabled) {
            onChange?.(event, currentValue - 1);
        }
    }, [isDecrementDisabled, onChange, currentValue]);
    const handleIncrement = useCallback((event) => {
        if (!isIncrementDisabled) {
            onChange?.(event, currentValue + 1);
        }
    }, [isIncrementDisabled, onChange, currentValue]);
    const handleChange = useCallback((event) => {
        const transformedValue = transformNumberOnChange(event.target.value, { min, max });
        onChange?.(event, transformedValue);
    }, [max, min, onChange]);
    return (_jsxs(Box, { ...slotProps?.wrapper, children: [_jsxs(NumberInputRoot, { sx: [
                    (theme) => ({
                        '--border-color': varAlpha(theme.vars.palette.grey['500Channel'], 0.2),
                        '--vertical-divider-color': hideDivider
                            ? 'transparent'
                            : varAlpha(theme.vars.palette.grey['500Channel'], 0.2),
                        '--input-background': !disabled && error
                            ? varAlpha(theme.vars.palette.error.mainChannel, 0.08)
                            : varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
                    }),
                    ...(Array.isArray(sx) ? sx : [sx]),
                ], ...other, children: [!hideButtons && (_jsx(CounterButton, { disabled: isDecrementDisabled, onClick: handleDecrement, ...slotProps?.button, children: _jsx(Iconify, { width: 16, icon: "mingcute:minimize-line" }) })), _jsxs(InputContainer, { ...slotProps?.inputWrapper, children: [_jsx(CenteredInput, { name: uniqueId, disabled: disabled || disableInput, value: currentValue, onChange: handleChange, ...slotProps?.input }), captionText && _jsx(CaptionText, { ...slotProps?.captionText, children: captionText })] }), !hideButtons && (_jsx(CounterButton, { disabled: isIncrementDisabled, onClick: handleIncrement, ...slotProps?.button, children: _jsx(Iconify, { width: 16, icon: "mingcute:add-line" }) }))] }), helperText && (_jsx(HelperText, { error: error, ...slotProps?.helperText, children: helperText }))] }));
}
// ----------------------------------------------------------------------
export function transformNumberOnChange(value, options) {
    const { min = 0, max = 9999 } = options ?? {};
    if (!value || value.trim() === '') {
        return 0;
    }
    const numericValue = Number(value.trim());
    if (!Number.isNaN(numericValue)) {
        // Clamp the value between min and max
        return Math.min(Math.max(numericValue, min), max);
    }
    return 0;
}
