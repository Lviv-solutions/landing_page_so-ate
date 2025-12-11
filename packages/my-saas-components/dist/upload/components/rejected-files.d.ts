import type { FileRejection } from 'react-dropzone';
export type RejectedFilesProps = React.ComponentProps<typeof RejectedList> & {
    files?: readonly FileRejection[];
};
export declare function RejectedFiles({ files, sx, className, ...other }: RejectedFilesProps): import("react/jsx-runtime").JSX.Element;
declare const RejectedList: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
export {};
//# sourceMappingURL=rejected-files.d.ts.map