import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
// ----------------------------------------------------------------------
const visuallyHidden = {
    border: 0,
    padding: 0,
    width: '1px',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    clip: 'rect(0 0 0 0)',
};
export function TableHeadCustom({ sx, order, onSort, orderBy, headCells, rowCount = 0, numSelected = 0, onSelectAllRows, }) {
    return (_jsx(TableHead, { sx: sx, children: _jsxs(TableRow, { children: [onSelectAllRows && (_jsx(TableCell, { padding: "checkbox", children: _jsx(Checkbox, { indeterminate: !!numSelected && numSelected < rowCount, checked: !!rowCount && numSelected === rowCount, onChange: (event) => onSelectAllRows(event.target.checked), slotProps: {
                            input: {
                                id: `all-row-checkbox`,
                                'aria-label': `All row Checkbox`,
                            },
                        } }) })), headCells.map((headCell) => (_jsx(TableCell, { align: headCell.align || 'left', sortDirection: orderBy === headCell.id ? order : false, sx: [
                        { width: headCell.width },
                        ...(Array.isArray(headCell.sx) ? headCell.sx : [headCell.sx]),
                    ], children: onSort ? (_jsxs(TableSortLabel, { hideSortIcon: true, active: orderBy === headCell.id, direction: orderBy === headCell.id ? order : 'asc', onClick: () => onSort(headCell.id), children: [headCell.label, orderBy === headCell.id ? (_jsx(Box, { component: "span", sx: visuallyHidden, children: order === 'desc' ? 'sorted descending' : 'sorted ascending' })) : null] })) : (headCell.label) }, headCell.id)))] }) }));
}
