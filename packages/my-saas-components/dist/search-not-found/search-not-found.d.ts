import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';
import type { TypographyProps } from '@mui/material/Typography';
type SearchNotFoundProps = BoxProps & {
    query?: string;
    sx?: SxProps<Theme>;
    slotProps?: {
        title?: TypographyProps;
        description?: TypographyProps;
    };
};
export declare function SearchNotFound({ query, sx, slotProps, ...other }: SearchNotFoundProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=search-not-found.d.ts.map