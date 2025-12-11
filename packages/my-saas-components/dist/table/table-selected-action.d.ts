import type { BoxProps } from '@mui/material/Box';
export type TableSelectedActionProps = BoxProps & {
    dense?: boolean;
    rowCount: number;
    numSelected: number;
    action?: React.ReactNode;
    onSelectAllRows: (checked: boolean) => void;
};
export declare function TableSelectedAction({ sx, dense, action, rowCount, numSelected, onSelectAllRows, ...other }: TableSelectedActionProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=table-selected-action.d.ts.map