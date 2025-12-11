// ----------------------------------------------------------------------
export const FILE_FORMATS = {
    txt: ["txt", "md", "rtf", "csv", "log"],
    zip: ["zip", "rar", "7z", "tar", "gz", "bz2", "xz", "iso"],
    audio: ["wav", "aif", "aiff", "mp3", "aac", "flac", "ogg", "m4a", "wma"],
    image: [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "webp",
        "bmp",
        "tif",
        "tiff",
        "heic",
        "heif",
        "ico",
        "jfif",
        "raw",
        "svg",
        "svg+xml",
        "indd",
    ],
    video: ["m4v", "avi", "mpg", "mpeg", "mp4", "webm", "mov", "flv", "mkv", "wmv", "3gp"],
    word: ["doc", "docx", "odt"],
    excel: ["xls", "xlsx", "ods", "csv"],
    powerpoint: ["ppt", "pptx", "odp"],
    pdf: ["pdf", "xps"],
    photoshop: ["psd"],
    illustrator: ["ai", "eps"],
};
export const EXTRA_EXTENSIONS = ["folder"];
export const FILE_ICONS = {
    txt: "ic-txt",
    zip: "ic-zip",
    pdf: "ic-pdf",
    word: "ic-word",
    image: "ic-img",
    audio: "ic-audio",
    video: "ic-video",
    excel: "ic-excel",
    unknown: "ic-file",
    folder: "ic-folder",
    photoshop: "ic-pts",
    illustrator: "ic-ai",
    powerpoint: "ic-power-point",
};
const ALL_EXTENSIONS = new Set([
    ...EXTRA_EXTENSIONS,
    ...Object.keys(FILE_FORMATS),
    ...Object.values(FILE_FORMATS).flat(),
]);
/**
 * Maps file extensions to their corresponding file format.
 * Example: { 'jpg': 'image', 'mp3': 'audio', 'pdf': 'pdf' }
 */
const EXTENSION_TO_FORMAT = Object.fromEntries(Object.entries(FILE_FORMATS).flatMap(([format, exts]) => exts.map((ext) => [ext, format])));
const isSupportedExtension = (ext) => ALL_EXTENSIONS.has(ext);
// ----------------------------------------------------------------------
/**
 * Extracts the file name from a URL or path.
 *
 * @example getFileName('https://site.com/docs/file.pdf?v=1') => 'file.pdf'
 * @example getFileName('/path/to/file%20name.txt') => 'file name.txt'
 */
export function getFileName(input) {
    if (!input)
        return "";
    try {
        const url = new URL(input);
        const pathname = decodeURIComponent(url.pathname);
        return pathname.split("/").pop() || "";
    }
    catch {
        return input.split("/").pop() || input;
    }
}
/**
 * Extracts the file extension from a file name or URL.
 *
 * @example getFileExtension('document.pdf') => 'pdf'
 * @example getFileExtension('image.JPEG') => 'jpeg'
 */
export function getFileExtension(fileName) {
    const lastDotIndex = fileName.lastIndexOf(".");
    if (lastDotIndex === -1)
        return "";
    return fileName.slice(lastDotIndex + 1).toLowerCase();
}
/**
 * Detects the file format based on the file extension.
 *
 * @example detectFileFormat('document.pdf') => 'pdf'
 * @example detectFileFormat('image.jpg') => 'image'
 */
export function detectFileFormat(input) {
    if (!input)
        return "unknown";
    const fileName = getFileName(input);
    const extension = getFileExtension(fileName);
    if (!extension || !isSupportedExtension(extension)) {
        return "unknown";
    }
    return EXTENSION_TO_FORMAT[extension] || extension || "unknown";
}
/**
 * Gets file icon path based on the file format.
 * Requires assetsDir to be provided for icon path construction.
 */
export function getFileIcon(format, assetsDir = "") {
    const iconName = FILE_ICONS[format || "unknown"] || FILE_ICONS.unknown;
    return assetsDir ? `${assetsDir}/assets/icons/files/${iconName}.svg` : iconName;
}
/**
 * Extracts metadata from a File object or file path string.
 */
export function getFileMeta(file) {
    if (!file) {
        return {
            name: "",
            type: "",
            size: 0,
            format: "unknown",
        };
    }
    if (file instanceof File) {
        const format = detectFileFormat(file.name);
        return {
            key: crypto.randomUUID?.() || Math.random().toString(36),
            name: file.name,
            type: file.type,
            size: file.size,
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate || new Date(file.lastModified),
            format,
        };
    }
    const name = getFileName(file);
    const format = detectFileFormat(file);
    return {
        name,
        type: "",
        size: 0,
        path: file,
        format,
    };
}
