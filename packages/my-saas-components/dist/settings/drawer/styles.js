'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { varAlpha } from 'minimal-shared/utils';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { Iconify } from '../../iconify';
const LargeBlockRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    padding: theme.spacing(4, 2, 2, 2),
    borderRadius: Number(theme.shape.borderRadius) * 2,
    border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
}));
const LargeLabel = styled('span')(({ theme }) => ({
    top: -12,
    lineHeight: '22px',
    borderRadius: '22px',
    position: 'absolute',
    alignItems: 'center',
    display: 'inline-flex',
    padding: theme.spacing(0, 1.25),
    fontSize: theme.typography.pxToRem(13),
    color: theme.vars.palette.common.white,
    fontWeight: theme.typography.fontWeightSemiBold,
    backgroundColor: theme.vars.palette.text.primary,
    ...theme.applyStyles('dark', {
        color: theme.vars.palette.grey[800],
    }),
}));
export function LargeBlock({ sx, title, tooltip, children, canReset, onReset, ...other }) {
    return (_jsxs(LargeBlockRoot, { sx: sx, ...other, children: [_jsxs(LargeLabel, { children: [canReset && (_jsx(ButtonBase, { disableRipple: true, onClick: onReset, sx: { ml: -0.5, mr: 0.5 }, children: _jsx(Iconify, { width: 14, icon: "solar:restart-bold", sx: { opacity: 0.64 } }) })), title, tooltip && (_jsx(Tooltip, { title: tooltip, placement: "right", arrow: true, children: _jsx(Iconify, { width: 14, icon: "eva:info-outline", sx: { ml: 0.5, mr: -0.5, opacity: 0.48, cursor: 'pointer' } }) }))] }), children] }));
}
const SmallBlockRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.5),
}));
const SmallLabel = styled(ButtonBase, {
    shouldForwardProp: (prop) => !['canReset', 'sx'].includes(prop),
})(({ theme }) => ({
    cursor: 'default',
    lineHeight: '16px',
    pointerEvent: 'none',
    alignSelf: 'flex-start',
    gap: theme.spacing(0.25),
    fontSize: theme.typography.pxToRem(11),
    color: theme.vars.palette.text.secondary,
    fontWeight: theme.typography.fontWeightSemiBold,
    transition: theme.transitions.create(['color']),
    variants: [
        {
            props: { canReset: true },
            style: {
                cursor: 'pointer',
                pointerEvent: 'auto',
                color: theme.vars.palette.text.primary,
                fontWeight: theme.typography.fontWeightBold,
                '&:hover': {
                    color: theme.vars.palette.primary.main,
                },
            },
        },
    ],
}));
export function SmallBlock({ label, canReset, onReset, sx, children, ...other }) {
    return (_jsxs(SmallBlockRoot, { sx: sx, ...other, children: [_jsxs(SmallLabel, { disableRipple: true, canReset: canReset, onClick: canReset ? onReset : undefined, children: [canReset && _jsx(Iconify, { width: 14, icon: "solar:restart-bold" }), label] }), children] }));
}
export function OptionButton({ selected, sx, children, ...other }) {
    return (_jsx(ButtonBase, { disableRipple: true, sx: [
            (theme) => ({
                width: 1,
                borderRadius: 1.5,
                lineHeight: '18px',
                color: 'text.disabled',
                border: `solid 1px transparent`,
                fontWeight: 'fontWeightSemiBold',
                fontSize: theme.typography.pxToRem(13),
                ...(selected && {
                    color: 'text.primary',
                    bgcolor: 'background.paper',
                    borderColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
                    boxShadow: `-8px 8px 20px -4px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                    ...theme.applyStyles('dark', {
                        boxShadow: `-8px 8px 20px -4px ${varAlpha(theme.vars.palette.common.blackChannel, 0.12)}`,
                    }),
                    '& svg': {
                        color: 'primary.main',
                    },
                }),
            }),
            ...(Array.isArray(sx) ? sx : [sx]),
        ], ...other, children: children }));
}
