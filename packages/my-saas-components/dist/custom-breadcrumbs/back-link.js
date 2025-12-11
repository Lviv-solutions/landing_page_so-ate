import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "@mui/material/Link";
import { Iconify, iconifyClasses } from "../iconify";
export function BackLink({ sx, label, component, ...other }) {
    return (_jsxs(Link, { component: component || "a", color: "inherit", underline: "none", sx: [
            (theme) => ({
                verticalAlign: "middle",
                [`& .${iconifyClasses.root}`]: {
                    verticalAlign: "inherit",
                    transform: "translateY(-2px)",
                    ml: {
                        xs: "-14px",
                        md: "-18px",
                    },
                    mr: {
                        xs: "4px",
                        md: "6px",
                    },
                },
            }),
            ...(Array.isArray(sx) ? sx : [sx]),
        ], ...other, children: [_jsx(Iconify, { icon: "eva:arrow-ios-back-fill", width: 16 }), label] }));
}
