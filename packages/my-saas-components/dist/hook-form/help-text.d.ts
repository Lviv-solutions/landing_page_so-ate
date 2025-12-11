import type { FormHelperTextProps } from '@mui/material/FormHelperText';
export type HelperTextProps = FormHelperTextProps & {
    errorMessage?: string;
    disableGutters?: boolean;
    helperText?: React.ReactNode;
};
export declare function HelperText({ sx, helperText, errorMessage, disableGutters, ...other }: HelperTextProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=help-text.d.ts.map