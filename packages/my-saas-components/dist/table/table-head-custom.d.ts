import type { Theme, SxProps, CSSObject } from '@mui/material/styles';
export type TableHeadCellProps = {
    id: string;
    label?: string;
    width?: CSSObject['width'];
    align?: 'left' | 'center' | 'right';
    sx?: SxProps<Theme>;
};
export type TableHeadCustomProps = {
    orderBy?: string;
    rowCount?: number;
    sx?: SxProps<Theme>;
    numSelected?: number;
    order?: 'asc' | 'desc';
    headCells: TableHeadCellProps[];
    onSort?: (id: string) => void;
    onSelectAllRows?: (checked: boolean) => void;
};
export declare function TableHeadCustom({ sx, order, onSort, orderBy, headCells, rowCount, numSelected, onSelectAllRows, }: TableHeadCustomProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=table-head-custom.d.ts.map