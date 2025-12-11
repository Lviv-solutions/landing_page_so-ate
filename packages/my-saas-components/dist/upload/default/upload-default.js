import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useDropzone } from 'react-dropzone';
import { mergeClasses } from 'minimal-shared/utils';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import CircularProgress from '@mui/material/CircularProgress';
import { UploadIllustration } from 'src/assets/illustrations';
import { Iconify } from '../../iconify';
import { uploadClasses } from '../classes';
import { RejectedFiles } from '../components/rejected-files';
import { MultiFilePreview } from '../components/multi-file-preview';
import { SingleFilePreview } from '../components/single-file-preview';
import { UploadArea, DeleteButton, UploadWrapper, PlaceholderContainer } from './styles';
// ----------------------------------------------------------------------
export function Upload({ sx, value, error, disabled, onDelete, onUpload, onRemove, className, helperText, onRemoveAll, slotProps, loading = false, multiple = false, hideFilesRejected = false, previewOrientation = 'horizontal', ...dropzoneOptions }) {
    const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
        multiple,
        disabled,
        ...dropzoneOptions,
    });
    const isSingleFileSelected = !multiple && !!value && !Array.isArray(value);
    const hasMultiFilesSelected = multiple && Array.isArray(value) && value.length > 0;
    const hasError = isDragReject || !!error;
    const showFilesRejected = !hideFilesRejected && fileRejections.length > 0;
    const renderPlaceholder = () => (_jsxs(PlaceholderContainer, { className: uploadClasses.placeholder.root, children: [_jsx(UploadIllustration, { hideBackground: true, sx: { width: 200 } }), _jsxs("div", { className: uploadClasses.placeholder.content, children: [_jsx("div", { className: uploadClasses.placeholder.title, children: multiple ? 'Drop or select files' : 'Drop or select a file' }), _jsxs("div", { className: uploadClasses.placeholder.description, children: [multiple ? 'Drag files here' : 'Drag a file here', ", or ", _jsx("span", { children: "browse" }), " your device."] })] })] }));
    const renderSingleFileLoading = () => loading &&
        !multiple && (_jsx(CircularProgress, { size: 26, color: "primary", sx: { zIndex: 9, right: 16, bottom: 16, position: 'absolute' } }));
    const renderSingleFilePreview = () => isSingleFileSelected && _jsx(SingleFilePreview, { file: value });
    const renderMultiFilesPreview = () => hasMultiFilesSelected && (_jsxs(_Fragment, { children: [_jsx(Box, { sx: { my: 3 }, children: _jsx(MultiFilePreview, { files: value, onRemove: onRemove, orientation: previewOrientation, ...slotProps?.multiPreview }) }), (onRemoveAll || onUpload) && (_jsxs(Box, { sx: { gap: 1.5, display: 'flex', justifyContent: 'flex-end' }, children: [onRemoveAll && (_jsx(Button, { size: "small", variant: "outlined", color: "inherit", onClick: onRemoveAll, children: "Remove All" })), onUpload && (_jsx(Button, { size: "small", variant: "contained", onClick: onUpload, startIcon: _jsx(Iconify, { icon: "eva:cloud-upload-fill" }), loading: loading && multiple, loadingPosition: "start", children: loading && multiple ? 'Uploading...' : 'Upload' }))] }))] }));
    return (_jsxs(UploadWrapper, { ...slotProps?.wrapper, className: uploadClasses.wrapper, children: [_jsxs(UploadArea, { ...getRootProps(), className: mergeClasses([uploadClasses.default, className], {
                    [uploadClasses.state.dragActive]: isDragActive,
                    [uploadClasses.state.disabled]: disabled,
                    [uploadClasses.state.error]: hasError,
                }), sx: sx, children: [_jsx("input", { ...getInputProps() }), isSingleFileSelected ? renderSingleFilePreview() : renderPlaceholder()] }), isSingleFileSelected && (_jsx(DeleteButton, { size: "small", onClick: onDelete, children: _jsx(Iconify, { icon: "mingcute:close-line", width: 16 }) })), helperText && _jsx(FormHelperText, { error: !!error, children: helperText }), showFilesRejected && _jsx(RejectedFiles, { files: fileRejections, ...slotProps?.rejectedFiles }), renderSingleFileLoading(), renderMultiFilesPreview()] }));
}
