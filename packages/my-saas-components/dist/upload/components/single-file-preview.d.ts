import type { FileUploadType } from '../types';
export type SingleFilePreviewProps = React.ComponentProps<typeof PreviewRoot> & {
    file: FileUploadType;
};
export declare function SingleFilePreview({ sx, file, className, ...other }: SingleFilePreviewProps): import("react/jsx-runtime").JSX.Element;
declare const PreviewRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export {};
//# sourceMappingURL=single-file-preview.d.ts.map