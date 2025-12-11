"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from "@mui/material/styles";
import { svgColorClasses } from "./classes";
// ----------------------------------------------------------------------
export function SvgColor({ src, className, sx, ...other }) {
    const mergedClassName = [svgColorClasses.root, className].filter(Boolean).join(" ");
    return (_jsx(SvgRoot, { className: mergedClassName, sx: [
            {
                mask: `url(${src}) no-repeat center / contain`,
                WebkitMask: `url(${src}) no-repeat center / contain`,
            },
            ...(Array.isArray(sx) ? sx : [sx]),
        ], ...other }));
}
// ----------------------------------------------------------------------
const SvgRoot = styled("span")(() => ({
    width: 24,
    height: 24,
    flexShrink: 0,
    display: "inline-flex",
    backgroundColor: "currentColor",
}));
