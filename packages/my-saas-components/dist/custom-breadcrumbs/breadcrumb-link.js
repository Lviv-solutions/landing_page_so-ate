'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
export function BreadcrumbsLink({ href, icon, name, disabled, component, ...other }) {
    const renderContent = () => (_jsxs(ItemRoot, { disabled: disabled, ...other, children: [icon && _jsx(ItemIcon, { children: icon }), name] }));
    if (href) {
        return (_jsx(Link, { component: component || "a", href: href, color: "inherit", sx: {
                display: "inline-flex",
                ...(disabled && { pointerEvents: "none" }),
            }, children: renderContent() }));
    }
    return renderContent();
}
// ----------------------------------------------------------------------
const ItemRoot = styled("div", {
    shouldForwardProp: (prop) => !["disabled", "sx"].includes(prop),
})(({ disabled, theme }) => ({
    ...theme.typography.body2,
    alignItems: "center",
    gap: theme.spacing(0.5),
    display: "inline-flex",
    color: theme.vars?.palette.text.primary || theme.palette.text.primary,
    ...(disabled && {
        cursor: "default",
        pointerEvents: "none",
        color: theme.vars?.palette.text.disabled || theme.palette.text.disabled,
    }),
}));
const ItemIcon = styled("span")(() => ({
    display: "inherit",
    "& > :first-of-type:not(style):not(:first-of-type ~ *), & > style + *": {
        width: 20,
        height: 20,
    },
}));
