export interface ElementRect {
    top: number;
    left: number;
    width: number;
    height: number;
}
export declare function useElementRect<T extends HTMLElement>(element: T | null, context: 'anchor' | 'popoverPaper', open: boolean): ElementRect | null;
//# sourceMappingURL=hooks.d.ts.map