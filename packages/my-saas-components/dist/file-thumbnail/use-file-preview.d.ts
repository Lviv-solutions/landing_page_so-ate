export type UseFilePreviewReturn = {
    previewUrl: string;
    setPreviewUrl: React.Dispatch<React.SetStateAction<string>>;
};
export declare function useFilePreview(file?: File | string | null): UseFilePreviewReturn;
export type FilePreviewItem = {
    previewUrl: string;
    file: File | string;
};
export type UseFilesPreviewReturn = {
    filesPreview: FilePreviewItem[];
    setFilesPreview: React.Dispatch<React.SetStateAction<FilePreviewItem[]>>;
};
export declare function revokeObjectUrls(urls: string[]): void;
export declare function useFilesPreview(files: (File | string)[]): UseFilesPreviewReturn;
//# sourceMappingURL=use-file-preview.d.ts.map