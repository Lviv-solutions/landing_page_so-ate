import type { UploadProps, FilesUploadType } from '../types';
import type { FileThumbnailProps } from '../../file-thumbnail';
export type PreviewOrientation = 'horizontal' | 'vertical';
export type MultiFilePreviewProps = React.ComponentProps<typeof PreviewList> & Pick<UploadProps, 'onRemove'> & {
    files: FilesUploadType;
    startNode?: React.ReactNode;
    endNode?: React.ReactNode;
    orientation?: PreviewOrientation;
    thumbnail?: Omit<FileThumbnailProps, 'file'>;
};
export declare function MultiFilePreview({ sx, onRemove, className, endNode, startNode, files, orientation, thumbnail: thumbnailProps, ...other }: MultiFilePreviewProps): import("react/jsx-runtime").JSX.Element;
export declare const PreviewList: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme> & {
    orientation?: PreviewOrientation;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
//# sourceMappingURL=multi-file-preview.d.ts.map