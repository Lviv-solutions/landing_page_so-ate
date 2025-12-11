'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { mergeClasses } from 'minimal-shared/utils';
import { styled } from '@mui/material/styles';
import { uploadClasses } from '../classes';
import { getFileMeta, useFilePreview } from '../../file-thumbnail';
export function SingleFilePreview({ sx, file, className, ...other }) {
    const fileMeta = getFileMeta(file);
    const { previewUrl } = useFilePreview(file);
    return (_jsx(PreviewRoot, { className: mergeClasses([uploadClasses.preview.single, className]), sx: sx, ...other, children: previewUrl && _jsx(PreviewImage, { alt: fileMeta.name, src: previewUrl }) }));
}
// ----------------------------------------------------------------------
const PreviewRoot = styled('div')(({ theme }) => ({
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 'inherit',
    padding: theme.spacing(1),
}));
const PreviewImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
});
