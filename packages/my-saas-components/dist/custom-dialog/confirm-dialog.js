import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// ----------------------------------------------------------------------
export function ConfirmDialog({ open, title, action, content, onClose, ...other }) {
    return (_jsxs(Dialog, { fullWidth: true, maxWidth: "xs", open: open, onClose: onClose, ...other, children: [_jsx(DialogTitle, { sx: { pb: 2 }, children: title }), content && _jsxs(DialogContent, { sx: { typography: 'body2' }, children: [" ", content] }), _jsxs(DialogActions, { children: [action, _jsx(Button, { variant: "outlined", color: "inherit", onClick: onClose, children: "Cancel" })] })] }));
}
