import type { BoxProps } from '@mui/material/Box';
import type { UploadProps } from '../upload';
export type RHFUploadProps = UploadProps & {
    name: string;
    slotProps?: {
        wrapper?: BoxProps;
    };
};
export declare function RHFUploadAvatar({ name, slotProps, ...other }: RHFUploadProps): import("react/jsx-runtime").JSX.Element;
export declare function RHFUploadBox({ name, ...other }: RHFUploadProps): import("react/jsx-runtime").JSX.Element;
export declare function RHFUpload({ name, multiple, helperText, ...other }: RHFUploadProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-upload.d.ts.map