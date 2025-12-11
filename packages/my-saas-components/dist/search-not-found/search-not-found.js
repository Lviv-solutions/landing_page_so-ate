'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export function SearchNotFound({ query, sx, slotProps, ...other }) {
    if (!query) {
        return (_jsx(Typography, { variant: "body2", ...slotProps?.description, children: "Please enter keywords" }));
    }
    return (_jsxs(Box, { sx: [
            {
                gap: 1,
                display: 'flex',
                borderRadius: 1.5,
                textAlign: 'center',
                flexDirection: 'column',
            },
            ...(Array.isArray(sx) ? sx : [sx]),
        ], ...other, children: [_jsx(Typography, { variant: "h6", ...slotProps?.title, sx: [
                    { color: 'text.primary' },
                    ...(Array.isArray(slotProps?.title?.sx) ? slotProps.title.sx : [slotProps?.title?.sx]),
                ], children: "Not found" }), _jsxs(Typography, { variant: "body2", ...slotProps?.description, children: ["No results found for \u00A0", _jsx("strong", { children: `"${query}"` }), ".", _jsx("br", {}), " Try checking for typos or using complete words."] })] }));
}
