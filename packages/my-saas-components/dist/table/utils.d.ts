export declare function rowInPage<T>(data: T[], page: number, rowsPerPage: number): T[];
export declare function emptyRows(page: number, rowsPerPage: number, arrayLength: number): number;
export declare function getComparator<Key extends keyof any>(order: 'asc' | 'desc', orderBy: Key): (a: {
    [key in Key]: number | string;
}, b: {
    [key in Key]: number | string;
}) => number;
//# sourceMappingURL=utils.d.ts.map