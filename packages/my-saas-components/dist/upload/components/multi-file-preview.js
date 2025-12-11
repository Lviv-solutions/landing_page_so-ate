'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { varAlpha, mergeClasses } from 'minimal-shared/utils';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import { fData } from 'src/utils/format-number';
import { Iconify } from '../../iconify';
import { uploadClasses } from '../classes';
import { getFileMeta, FileThumbnail, useFilesPreview } from '../../file-thumbnail';
export function MultiFilePreview({ sx, onRemove, className, endNode, startNode, files = [], orientation = 'horizontal', thumbnail: thumbnailProps, ...other }) {
    const { filesPreview } = useFilesPreview(files);
    const renderList = () => filesPreview.map(({ file, previewUrl }) => {
        const fileMeta = getFileMeta(file);
        const commonProps = {
            file,
            previewUrl,
            ...thumbnailProps,
        };
        if (orientation === 'horizontal') {
            return (_jsx(PreviewItem, { orientation: "horizontal", children: _jsx(FileThumbnail, { tooltip: true, showImage: true, onRemove: () => onRemove?.(file), ...commonProps, sx: [
                        (theme) => ({
                            width: 80,
                            height: 80,
                            border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
                        }),
                        ...(Array.isArray(thumbnailProps?.sx) ? thumbnailProps.sx : [thumbnailProps?.sx]),
                    ], slotProps: {
                        icon: { sx: { width: 36, height: 36 } },
                        ...thumbnailProps?.slotProps,
                    } }) }, fileMeta.key));
        }
        return (_jsxs(PreviewItem, { orientation: "vertical", children: [_jsx(FileThumbnail, { ...commonProps }), _jsx(ListItemText, { primary: fileMeta.name, secondary: fileMeta.size ? fData(fileMeta.size) : '', slotProps: {
                        secondary: { sx: { typography: 'caption' } },
                    } }), onRemove && (_jsx(IconButton, { size: "small", onClick: () => onRemove(file), children: _jsx(Iconify, { width: 16, icon: "mingcute:close-line" }) }))] }, fileMeta.key));
    });
    return (_jsxs(PreviewList, { orientation: orientation, className: mergeClasses([uploadClasses.preview.multi, className]), sx: sx, ...other, children: [startNode && _jsx(SlotNode, { orientation: orientation, children: startNode }), renderList(), endNode && _jsx(SlotNode, { orientation: orientation, children: endNode })] }));
}
// ----------------------------------------------------------------------
export const PreviewList = styled('ul', {
    shouldForwardProp: (prop) => !['orientation', 'sx'].includes(prop),
})(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    variants: [
        {
            props: (props) => props.orientation === 'horizontal',
            style: {
                flexWrap: 'wrap',
                flexDirection: 'row',
            },
        },
    ],
}));
const PreviewItem = styled('li', {
    shouldForwardProp: (prop) => !['orientation', 'sx'].includes(prop),
})({
    display: 'inline-flex',
    variants: [
        {
            props: (props) => props.orientation === 'vertical',
            style: ({ theme }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing(1.5),
                padding: theme.spacing(1, 1, 1, 1.5),
                borderRadius: theme.shape.borderRadius,
                border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
            }),
        },
    ],
});
const SlotNode = styled('li', {
    shouldForwardProp: (prop) => !['orientation', 'sx'].includes(prop),
})({
    variants: [
        {
            props: (props) => props.orientation === 'horizontal',
            style: {
                width: 'auto',
                display: 'inline-flex',
            },
        },
    ],
});
