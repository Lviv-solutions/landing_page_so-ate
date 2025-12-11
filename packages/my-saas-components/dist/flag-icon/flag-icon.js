"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from "@mui/material/styles";
import { flagIconClasses } from "./classes";
export function FlagIcon({ code, className, sx, ...other }) {
    if (!code) {
        return null;
    }
    const mergedClassName = [flagIconClasses.root, className].filter(Boolean).join(" ");
    return (_jsx(FlagRoot, { className: mergedClassName, sx: sx, ...other, children: _jsx(FlagImg, { loading: "lazy", alt: code, src: `https://purecatamphetamine.github.io/country-flag-icons/3x2/${code?.toUpperCase()}.svg`, className: flagIconClasses.img }) }));
}
// ----------------------------------------------------------------------
const FlagRoot = styled("span")(({ theme }) => ({
    width: 26,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
    borderRadius: "5px",
    alignItems: "center",
    display: "inline-flex",
    justifyContent: "center",
    backgroundColor: theme.palette.background.neutral ||
        theme.palette.background.default,
}));
const FlagImg = styled("img")(() => ({
    width: "100%",
    height: "100%",
    maxWidth: "unset",
    objectFit: "cover",
}));
