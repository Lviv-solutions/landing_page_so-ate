'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { varContainer } from './variants';
export function MotionViewport({ children, viewport, disableAnimate = true, ...other }) {
    const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const disabled = smDown && disableAnimate;
    const baseProps = disabled
        ? {}
        : {
            component: m.div,
            initial: 'initial',
            whileInView: 'animate',
            variants: varContainer(),
            viewport: { once: true, amount: 0.3, ...viewport },
        };
    return (_jsx(Box, { ...baseProps, ...other, children: children }));
}
