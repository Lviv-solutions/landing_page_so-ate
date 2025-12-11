import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { alpha as hexAlpha } from '@mui/material/styles';
import { OptionButton } from './styles';
export function PresetsOptions({ sx, icon, value, options, onChangeOption, ...other }) {
    return (_jsx(Box, { sx: [
            {
                gap: 1.5,
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
            },
            ...(Array.isArray(sx) ? sx : [sx]),
        ], ...other, children: options.map((option) => {
            const selected = value === option.name;
            return (_jsx(OptionButton, { onClick: () => onChangeOption(option.name), sx: {
                    height: 64,
                    color: option.value,
                    ...(selected && {
                        bgcolor: hexAlpha(option.value, 0.08),
                    }),
                }, children: icon }, option.name));
        }) }));
}
