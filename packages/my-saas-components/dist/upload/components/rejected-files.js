'use client';
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { varAlpha, mergeClasses } from 'minimal-shared/utils';
import { styled } from '@mui/material/styles';
import { fData } from 'src/utils/format-number';
import { uploadClasses } from '../classes';
import { getFileMeta } from '../../file-thumbnail';
export function RejectedFiles({ files = [], sx, className, ...other }) {
    return (_jsx(RejectedList, { className: mergeClasses([uploadClasses.rejected, className]), sx: sx, ...other, children: files.map(({ file, errors }) => {
            const fileMeta = getFileMeta(file);
            return (_jsxs(RejectedItem, { children: [_jsxs(RejectedTitle, { children: [fileMeta.name, " - ", fileMeta.size ? fData(fileMeta.size) : ''] }), errors.map((error) => (_jsxs(RejectedMsg, { children: ["- ", error.message] }, error.code)))] }, fileMeta.key));
        }) }));
}
// ----------------------------------------------------------------------
const RejectedList = styled('ul')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1),
    flexDirection: 'column',
    padding: theme.spacing(2),
    marginTop: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    border: `dashed 1px ${theme.vars.palette.error.main}`,
    backgroundColor: varAlpha(theme.vars.palette.error.mainChannel, 0.08),
}));
const RejectedItem = styled('li')({
    display: 'flex',
    flexDirection: 'column',
});
const RejectedTitle = styled('span')(({ theme }) => ({
    ...theme.typography.subtitle2,
}));
const RejectedMsg = styled('span')(({ theme }) => ({
    ...theme.typography.caption,
}));
