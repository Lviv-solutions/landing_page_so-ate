import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDropzone } from 'react-dropzone';
import { mergeClasses } from 'minimal-shared/utils';
import { UploadArea } from './styles';
import { Iconify } from '../../iconify';
import { uploadClasses } from '../classes';
// ----------------------------------------------------------------------
export function UploadBox({ sx, error, disabled, className, placeholder, ...dropzoneOptions }) {
    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
        disabled,
        ...dropzoneOptions,
    });
    const hasError = isDragReject || !!error;
    return (_jsxs(UploadArea, { ...getRootProps(), className: mergeClasses([uploadClasses.box, className], {
            [uploadClasses.state.dragActive]: isDragActive,
            [uploadClasses.state.disabled]: disabled,
            [uploadClasses.state.error]: hasError,
        }), sx: sx, children: [_jsx("input", { ...getInputProps() }), placeholder ?? _jsx(Iconify, { icon: "eva:cloud-upload-fill", width: 28 })] }));
}
