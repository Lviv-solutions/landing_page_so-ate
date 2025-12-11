export declare const FILE_FORMATS: {
    readonly txt: readonly ["txt", "md", "rtf", "csv", "log"];
    readonly zip: readonly ["zip", "rar", "7z", "tar", "gz", "bz2", "xz", "iso"];
    readonly audio: readonly ["wav", "aif", "aiff", "mp3", "aac", "flac", "ogg", "m4a", "wma"];
    readonly image: readonly ["jpg", "jpeg", "png", "gif", "webp", "bmp", "tif", "tiff", "heic", "heif", "ico", "jfif", "raw", "svg", "svg+xml", "indd"];
    readonly video: readonly ["m4v", "avi", "mpg", "mpeg", "mp4", "webm", "mov", "flv", "mkv", "wmv", "3gp"];
    readonly word: readonly ["doc", "docx", "odt"];
    readonly excel: readonly ["xls", "xlsx", "ods", "csv"];
    readonly powerpoint: readonly ["ppt", "pptx", "odp"];
    readonly pdf: readonly ["pdf", "xps"];
    readonly photoshop: readonly ["psd"];
    readonly illustrator: readonly ["ai", "eps"];
};
export declare const EXTRA_EXTENSIONS: readonly ["folder"];
export declare const FILE_ICONS: Record<FileFormat | "folder" | "unknown", string>;
export type FileFormat = keyof typeof FILE_FORMATS;
export type FileExtension = (typeof FILE_FORMATS)[FileFormat][number];
export type AllExtensions = FileExtension | FileFormat | "folder";
export type FileInput = string | null;
export type FileMetaData = {
    key?: string;
    name: string;
    type: string;
    size: number;
    path?: string;
    lastModified?: number;
    lastModifiedDate?: Date;
    format?: FileFormat | "unknown";
};
/**
 * Extracts the file name from a URL or path.
 *
 * @example getFileName('https://site.com/docs/file.pdf?v=1') => 'file.pdf'
 * @example getFileName('/path/to/file%20name.txt') => 'file name.txt'
 */
export declare function getFileName(input?: FileInput): string;
/**
 * Extracts the file extension from a file name or URL.
 *
 * @example getFileExtension('document.pdf') => 'pdf'
 * @example getFileExtension('image.JPEG') => 'jpeg'
 */
export declare function getFileExtension(fileName: string): string;
/**
 * Detects the file format based on the file extension.
 *
 * @example detectFileFormat('document.pdf') => 'pdf'
 * @example detectFileFormat('image.jpg') => 'image'
 */
export declare function detectFileFormat(input?: FileInput): FileFormat | "unknown";
/**
 * Gets file icon path based on the file format.
 * Requires assetsDir to be provided for icon path construction.
 */
export declare function getFileIcon(format?: FileFormat | "unknown", assetsDir?: string): string;
/**
 * Extracts metadata from a File object or file path string.
 */
export declare function getFileMeta(file?: File | string | null): FileMetaData;
//# sourceMappingURL=utils.d.ts.map