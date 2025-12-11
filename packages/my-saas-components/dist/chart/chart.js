'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense } from 'react';
import { mergeClasses } from 'minimal-shared/utils';
import NoSsr from '@mui/material/NoSsr';
import { styled } from '@mui/material/styles';
import { chartClasses } from './classes';
import { ChartLoading } from './components';
// ----------------------------------------------------------------------
const LazyChart = lazy(() => import('react-apexcharts'));
export function Chart({ sx, type, series, slotProps, className, options = {}, ...other }) {
    const renderFallback = () => _jsx(ChartLoading, { type: type, sx: slotProps?.loading });
    return (_jsx(ChartRoot, { dir: "ltr", className: mergeClasses([chartClasses.root, className]), sx: sx, ...other, children: _jsx(NoSsr, { fallback: renderFallback(), children: _jsx(Suspense, { fallback: renderFallback(), children: _jsx(LazyChart, { type: type, series: series, options: options, width: "100%", height: "100%" }) }) }) }));
}
// ----------------------------------------------------------------------
const ChartRoot = styled('div')(({ theme }) => ({
    width: '100%',
    flexShrink: 0,
    position: 'relative',
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
}));
