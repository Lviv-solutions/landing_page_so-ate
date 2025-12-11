'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { LazyMotion } from 'framer-motion';
const loadFeaturesAsync = async () => import('./features').then((res) => res.default);
export function MotionLazy({ children }) {
    return (_jsx(LazyMotion, { strict: true, features: loadFeaturesAsync, children: children }));
}
