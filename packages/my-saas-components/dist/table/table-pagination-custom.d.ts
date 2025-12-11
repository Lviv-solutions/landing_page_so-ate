import type { Theme, SxProps } from '@mui/material/styles';
import type { TablePaginationProps } from '@mui/material/TablePagination';
export type TablePaginationCustomProps = TablePaginationProps & {
    dense?: boolean;
    sx?: SxProps<Theme>;
    onChangeDense?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export declare function TablePaginationCustom({ sx, dense, onChangeDense, rowsPerPageOptions, ...other }: TablePaginationCustomProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=table-pagination-custom.d.ts.map