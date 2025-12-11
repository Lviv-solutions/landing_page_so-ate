'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { EmptyContent } from '../empty-content';
export function TableNoData({ notFound, sx }) {
    return (_jsx(TableRow, { children: notFound ? (_jsx(TableCell, { colSpan: 12, children: _jsx(EmptyContent, { filled: true, sx: [{ py: 10 }, ...(Array.isArray(sx) ? sx : [sx])] }) })) : (_jsx(TableCell, { colSpan: 12, sx: { p: 0 } })) }));
}
