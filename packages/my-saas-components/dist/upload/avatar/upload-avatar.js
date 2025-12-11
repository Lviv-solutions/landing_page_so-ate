import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDropzone } from 'react-dropzone';
import { mergeClasses } from 'minimal-shared/utils';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { Iconify } from '@my-saas/components';
import { uploadClasses } from '../classes';
import { RejectedFiles } from '../components/rejected-files';
import { getFileMeta, useFilePreview } from '../../file-thumbnail';
import { UploadArea, PreviewImage, UploadContent, UploadWrapper, PlaceholderContainer, } from './styles';
// ----------------------------------------------------------------------
export function UploadAvatar({ sx, error, value, disabled, className, slotProps, helperText, loading = false, hideFilesRejected = false, ...dropzoneOptions }) {
    const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
        disabled,
        multiple: false,
        accept: { 'image/*': [] },
        ...dropzoneOptions,
    });
    const file = !Array.isArray(value) ? value : null;
    const hasSelectedFile = !!file;
    const hasError = isDragReject || !!error;
    const showFilesRejected = !hideFilesRejected && fileRejections.length > 0;
    const fileMeta = getFileMeta(file);
    const { previewUrl } = useFilePreview(file);
    const renderPlaceholder = () => (_jsxs(PlaceholderContainer, { className: uploadClasses.placeholder.root, children: [_jsx(Iconify, { icon: "solar:camera-add-bold", width: 32, className: uploadClasses.placeholder.icon }), _jsx(Typography, { variant: "caption", className: uploadClasses.placeholder.title, children: hasSelectedFile ? 'Update photo' : 'Upload photo' })] }));
    const renderLoading = () => loading && (_jsx(CircularProgress, { thickness: 1, size: "100%", sx: { zIndex: 9, top: 0, left: 0, position: 'absolute' } }));
    const renderPreview = () => hasSelectedFile && previewUrl && _jsx(PreviewImage, { alt: fileMeta.name, src: previewUrl });
    return (_jsxs(UploadWrapper, { ...slotProps?.wrapper, className: uploadClasses.wrapper, children: [_jsxs(UploadArea, { ...getRootProps(), className: mergeClasses([uploadClasses.avatar, className], {
                    [uploadClasses.state.dragActive]: isDragActive,
                    [uploadClasses.state.disabled]: disabled,
                    [uploadClasses.state.error]: hasError,
                    [uploadClasses.state.hasFile]: hasSelectedFile,
                }), sx: sx, children: [_jsx("input", { ...getInputProps() }), _jsxs(UploadContent, { children: [renderPreview(), renderPlaceholder()] }), renderLoading()] }), helperText && helperText, showFilesRejected && _jsx(RejectedFiles, { files: fileRejections, ...slotProps?.rejectedFiles })] }));
}
