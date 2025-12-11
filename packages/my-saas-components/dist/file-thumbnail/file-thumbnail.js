"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Tooltip from "@mui/material/Tooltip";
import { Iconify } from "../iconify";
import { fileThumbnailClasses } from "./classes";
import { getFileMeta, getFileIcon } from "./utils";
import { useFilePreview } from "./use-file-preview";
import { RemoveButton, ThumbnailRoot, DownloadButton, ThumbnailImage } from "./styles";
// ----------------------------------------------------------------------
export function FileThumbnail({ sx, file, tooltip, onRemove, showImage, slotProps, className, onDownload, assetsDir = "", previewUrl: previewUrlProp, ...other }) {
    const fileMeta = getFileMeta(file);
    const previewEnabled = !previewUrlProp && !!file;
    const { previewUrl } = useFilePreview(previewEnabled ? file : null);
    const imageSrc = previewUrlProp ?? previewUrl;
    const canShowImage = fileMeta.format === "image" && !!showImage && imageSrc;
    const tooltipProps = slotProps?.tooltip;
    const renderImage = () => (_jsx(ThumbnailImage, { showImage: true, alt: fileMeta.name, src: imageSrc, className: fileThumbnailClasses.img, ...slotProps?.img }));
    const renderIcon = () => (_jsx(ThumbnailImage, { alt: fileMeta.name, src: getFileIcon(fileMeta.format, assetsDir), className: fileThumbnailClasses.icon, ...slotProps?.icon }));
    const renderActions = () => (_jsxs(_Fragment, { children: [onRemove && (_jsx(RemoveButton, { onClick: onRemove, className: fileThumbnailClasses.removeBtn, ...slotProps?.removeBtn, children: _jsx(Iconify, { icon: "mingcute:close-line", width: 12 }) })), onDownload && (_jsx(DownloadButton, { onClick: onDownload, className: fileThumbnailClasses.downloadBtn, ...slotProps?.downloadBtn, children: _jsx(Iconify, { width: 24, icon: "eva:cloud-download-fill" }) }))] }));
    const mergedClassName = [fileThumbnailClasses.root, className].filter(Boolean).join(" ");
    const renderContent = () => (_jsxs(ThumbnailRoot, { className: mergedClassName, sx: sx, ...other, children: [canShowImage ? renderImage() : renderIcon(), renderActions()] }));
    if (!file)
        return null;
    if (!tooltip)
        return renderContent();
    return (_jsx(Tooltip, { arrow: true, title: fileMeta.name, ...tooltipProps, slotProps: {
            ...tooltipProps?.slotProps,
            popper: {
                modifiers: [{ name: "offset", options: { offset: [0, -12] } }],
                ...tooltipProps?.slotProps?.popper,
            },
        }, children: renderContent() }));
}
