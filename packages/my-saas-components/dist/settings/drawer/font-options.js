import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { setFont } from 'minimal-shared/utils';
import Box from '@mui/material/Box';
import Slider, { sliderClasses } from '@mui/material/Slider';
import { OptionButton } from './styles';
export function FontFamilyOptions({ sx, icon, value, options, onChangeOption, ...other }) {
    return (_jsx(Box, { sx: [
            {
                gap: 1.5,
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
            },
            ...(Array.isArray(sx) ? sx : [sx]),
        ], ...other, children: options.map((option) => {
            const selected = value === option;
            return (_jsxs(OptionButton, { selected: selected, onClick: () => onChangeOption(option), sx: (theme) => ({
                    py: 2,
                    gap: 0.75,
                    flexDirection: 'column',
                    fontFamily: setFont(option),
                    fontSize: theme.typography.pxToRem(12),
                }), children: [icon, option.endsWith('Variable') ? option.replace(' Variable', '') : option] }, option));
        }) }));
}
export function FontSizeOptions({ sx, value, options, onChangeOption, ...other }) {
    return (_jsx(Slider, { marks: true, step: 1, size: "small", valueLabelDisplay: "on", "aria-label": "Change font size", valueLabelFormat: (val) => `${val}px`, value: value, min: options[0], max: options[1], onChange: (event, newOption) => onChangeOption(newOption), sx: [
            (theme) => ({
                [`& .${sliderClasses.rail}`]: {
                    height: 12,
                },
                [`& .${sliderClasses.track}`]: {
                    height: 12,
                    background: `linear-gradient(135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.primary.dark})`,
                },
            }),
            ...(Array.isArray(sx) ? sx : [sx]),
        ], ...other }));
}
