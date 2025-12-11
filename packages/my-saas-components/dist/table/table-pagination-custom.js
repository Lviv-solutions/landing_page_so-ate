'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import TablePagination from '@mui/material/TablePagination';
import FormControlLabel from '@mui/material/FormControlLabel';
export function TablePaginationCustom({ sx, dense, onChangeDense, rowsPerPageOptions = [5, 10, 25], ...other }) {
    return (_jsxs(Box, { sx: [{ position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])], children: [_jsx(TablePagination, { rowsPerPageOptions: rowsPerPageOptions, component: "div", ...other, sx: { borderTopColor: 'transparent' } }), onChangeDense && (_jsx(FormControlLabel, { label: "Dense", control: _jsx(Switch, { checked: dense, onChange: onChangeDense, slotProps: { input: { id: 'dense-switch' } } }), sx: {
                    pl: 2,
                    py: 1.5,
                    top: 0,
                    position: { sm: 'absolute' },
                } }))] }));
}
