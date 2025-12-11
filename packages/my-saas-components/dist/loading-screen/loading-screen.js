"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment } from "react";
import Portal from "@mui/material/Portal";
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
export function LoadingScreen({ portal, slots, slotsProps, sx, ...other }) {
    const PortalWrapper = portal ? Portal : Fragment;
    return (_jsx(PortalWrapper, { children: _jsx(LoadingContent, { sx: sx, ...other, children: slots?.progress ?? (_jsx(LinearProgress, { color: "inherit", sx: [
                    { width: 1, maxWidth: 360 },
                    ...(Array.isArray(slotsProps?.progress?.sx)
                        ? slotsProps.progress.sx
                        : [slotsProps?.progress?.sx]),
                ], ...slotsProps?.progress })) }) }));
}
// ----------------------------------------------------------------------
const LoadingContent = styled("div")(({ theme }) => ({
    flexGrow: 1,
    width: "100%",
    display: "flex",
    minHeight: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
}));
