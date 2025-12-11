'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
export function MoreLinks({ links, sx, ...other }) {
    return (_jsx(MoreLinksRoot, { sx: sx, ...other, children: links?.map((href) => (_jsx("li", { children: _jsx(Link, { href: href, variant: "body2", target: "_blank", rel: "noopener noreferrer", children: href }) }, href))) }));
}
// ----------------------------------------------------------------------
const MoreLinksRoot = styled("ul")(() => ({
    display: "flex",
    flexDirection: "column",
    "& > li": { display: "flex" },
}));
