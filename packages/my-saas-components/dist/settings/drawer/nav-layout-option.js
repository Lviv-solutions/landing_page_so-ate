import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { varAlpha } from 'minimal-shared/utils';
import Box from '@mui/material/Box';
import { OptionButton } from './styles';
export function NavLayoutOptions({ sx, value, options, onChangeOption, ...other }) {
    return (_jsx(Box, { sx: [
            {
                gap: 1.5,
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
            },
            ...(Array.isArray(sx) ? sx : [sx]),
        ], ...other, children: options.map((option) => {
            const selected = value === option.value;
            return (_jsx(OptionButton, { selected: selected, onClick: () => onChangeOption(option.value), sx: [
                    (theme) => ({
                        height: 64,
                        border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}`,
                    }),
                ], children: option.icon }, option.value));
        }) }));
}
export function NavColorOptions({ sx, value, options, onChangeOption, ...other }) {
    return (_jsx(Box, { sx: [
            {
                gap: 1.5,
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
            },
            ...(Array.isArray(sx) ? sx : [sx]),
        ], ...other, children: options.map((option) => {
            const selected = value === option.value;
            return (_jsxs(OptionButton, { selected: selected, onClick: () => onChangeOption(option.value), sx: { gap: 1.5, height: 56 }, children: [option.icon, option.label] }, option.value));
        }) }));
}
