'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import Skeleton from '@mui/material/Skeleton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
export function TableSkeleton({ rowCount = 0, cellCount = 0, ...other }) {
    return Array.from({ length: rowCount }, (_, rowIndex) => (_jsx(TableRow, { ...other, children: Array.from({ length: cellCount }, (__, cellIndex) => (_jsx(TableCell, { children: _jsx(Skeleton, { variant: "text" }) }, cellIndex))) }, rowIndex)));
}
