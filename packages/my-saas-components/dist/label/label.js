"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { upperFirst } from "es-toolkit";
import { styled } from "@mui/material/styles";
const LabelRoot = styled("span")(({ theme, variant = "soft", color = "default", disabled }) => ({
    height: 24,
    minWidth: 24,
    flexShrink: 0,
    lineHeight: 18 / 12,
    cursor: "default",
    alignItems: "center",
    whiteSpace: "nowrap",
    display: "inline-flex",
    gap: theme.spacing(0.75),
    justifyContent: "center",
    padding: theme.spacing(0, 0.75),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightBold,
    borderRadius: Number(theme.shape.borderRadius) * 0.75,
    // Simple color scheme
    ...(color === "primary" && variant === "soft" && {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main + "20",
    }),
    ...(color === "error" && variant === "soft" && {
        color: theme.palette.error.main,
        backgroundColor: theme.palette.error.main + "20",
    }),
    ...(color === "success" && variant === "soft" && {
        color: theme.palette.success.main,
        backgroundColor: theme.palette.success.main + "20",
    }),
    ...(color === "warning" && variant === "soft" && {
        color: theme.palette.warning.main,
        backgroundColor: theme.palette.warning.main + "20",
    }),
    ...(color === "info" && variant === "soft" && {
        color: theme.palette.info.main,
        backgroundColor: theme.palette.info.main + "20",
    }),
    ...(color === "default" && {
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.action.hover,
    }),
    ...(disabled && {
        opacity: 0.48,
        pointerEvents: "none",
    }),
}));
const LabelIcon = styled("span")(() => ({
    width: 16,
    height: 16,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
        width: "100%",
        height: "100%",
        flexShrink: 0,
    },
}));
export function Label({ sx, endIcon, children, startIcon, className, disabled, variant = "soft", color = "default", ...other }) {
    const mergedClassName = ["label__root", className].filter(Boolean).join(" ");
    return (_jsxs(LabelRoot, { color: color, variant: variant, disabled: disabled, className: mergedClassName, sx: sx, ...other, children: [startIcon && _jsx(LabelIcon, { className: "label__icon", children: startIcon }), typeof children === "string" ? upperFirst(children) : children, endIcon && _jsx(LabelIcon, { className: "label__icon", children: endIcon })] }));
}
