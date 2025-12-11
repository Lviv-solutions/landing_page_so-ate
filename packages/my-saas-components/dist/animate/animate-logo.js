'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';
import { styled } from '@mui/material/styles';
import { Logo } from '../logo';
export function AnimateLogoZoom({ logo, slotProps, sx, ...other }) {
    return (_jsxs(LogoZoomRoot, { sx: sx, ...other, children: [_jsx(m.span, { animate: { scale: [1, 0.9, 0.9, 1, 1], opacity: [1, 0.48, 0.48, 1, 1] }, transition: {
                    duration: 2,
                    repeatDelay: 1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }, children: logo ?? (_jsx(Logo, { disabled: true, ...slotProps?.logo, sx: [
                        { width: 64, height: 64 },
                        ...(Array.isArray(slotProps?.logo?.sx) ? slotProps.logo.sx : [slotProps?.logo?.sx]),
                    ] })) }), _jsx(LogoZoomPrimaryOutline, { animate: {
                    scale: [1.6, 1, 1, 1.6, 1.6],
                    rotate: [270, 0, 0, 270, 270],
                    opacity: [0.25, 1, 1, 1, 0.25],
                    borderRadius: ['25%', '25%', '50%', '50%', '25%'],
                }, transition: { ease: 'linear', duration: 3.2, repeat: Infinity } }), _jsx(LogoZoomSecondaryOutline, { animate: {
                    scale: [1, 1.2, 1.2, 1, 1],
                    rotate: [0, 270, 270, 0, 0],
                    opacity: [1, 0.25, 0.25, 0.25, 1],
                    borderRadius: ['25%', '25%', '50%', '50%', '25%'],
                }, transition: { ease: 'linear', duration: 3.2, repeat: Infinity } })] }));
}
const LogoZoomRoot = styled('div')(() => ({
    width: 120,
    height: 120,
    alignItems: 'center',
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
}));
const LogoZoomPrimaryOutline = styled(m.span)(({ theme }) => ({
    position: 'absolute',
    width: 'calc(100% - 20px)',
    height: 'calc(100% - 20px)',
    border: `solid 3px ${varAlpha(theme.vars.palette.primary.darkChannel, 0.24)}`,
}));
const LogoZoomSecondaryOutline = styled(m.span)(({ theme }) => ({
    width: '100%',
    height: '100%',
    position: 'absolute',
    border: `solid 8px ${varAlpha(theme.vars.palette.primary.darkChannel, 0.24)}`,
}));
// ----------------------------------------------------------------------
export function AnimateLogoRotate({ logo, sx, slotProps, ...other }) {
    return (_jsxs(LogoRotateRoot, { sx: sx, ...other, children: [logo ?? (_jsx(Logo, { ...slotProps?.logo, sx: [
                    { zIndex: 9, width: 40, height: 40 },
                    ...(Array.isArray(slotProps?.logo?.sx) ? slotProps.logo.sx : [slotProps?.logo?.sx]),
                ] })), _jsx(LogoRotateBackground, { animate: { rotate: 360 }, transition: { duration: 10, ease: 'linear', repeat: Infinity } })] }));
}
const LogoRotateRoot = styled('div')(() => ({
    width: 96,
    height: 96,
    alignItems: 'center',
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
}));
const LogoRotateBackground = styled(m.span)(({ theme }) => ({
    width: '100%',
    height: '100%',
    opacity: 0.16,
    borderRadius: '50%',
    position: 'absolute',
    backgroundImage: `linear-gradient(135deg, transparent 50%, ${theme.vars.palette.primary.main} 100%)`,
    transition: theme.transitions.create(['opacity'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
    }),
}));
