"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
export function EmptyContent({ sx, imgUrl, action, filled, slotProps, description, title = "No data", ...other }) {
    // Default empty content icon - can be overridden via imgUrl prop
    const defaultImgUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE2MCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiBmaWxsPSIjRjRGNkY4Ii8+CjxwYXRoIGQ9Ik04MCA0MEw4MCA4MEw0MCA4MEw0MCA0MEw4MCA0MFoiIGZpbGw9IiNEREUzRUEiLz4KPHN2Zz4K";
    return (_jsxs(ContentRoot, { filled: filled, sx: sx, ...other, children: [_jsx(Box, { component: "img", alt: "Empty content", src: imgUrl ?? defaultImgUrl, ...slotProps?.img, sx: [
                    {
                        width: 1,
                        maxWidth: 160,
                    },
                    ...(Array.isArray(slotProps?.img?.sx) ? slotProps.img.sx : [slotProps?.img?.sx]),
                ] }), title && (_jsx(Typography, { variant: "h6", ...slotProps?.title, sx: [
                    {
                        mt: 1,
                        textAlign: "center",
                        color: "text.disabled",
                    },
                    ...(Array.isArray(slotProps?.title?.sx) ? slotProps.title.sx : [slotProps?.title?.sx]),
                ], children: title })), description && (_jsx(Typography, { variant: "body2", ...slotProps?.description, sx: [
                    {
                        mt: 1,
                        textAlign: "center",
                        color: "text.disabled",
                    },
                    ...(Array.isArray(slotProps?.description?.sx)
                        ? slotProps.description.sx
                        : [slotProps?.description?.sx]),
                ], children: description })), action && action] }));
}
// ----------------------------------------------------------------------
const ContentRoot = styled("div", {
    shouldForwardProp: (prop) => !["filled", "sx"].includes(prop),
})(({ filled, theme }) => ({
    flexGrow: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(0, 3),
    ...(filled && {
        borderRadius: Number(theme.shape.borderRadius) * 2,
        backgroundColor: theme.palette.action.hover,
        border: `dashed 1px ${theme.palette.divider}`,
    }),
}));
