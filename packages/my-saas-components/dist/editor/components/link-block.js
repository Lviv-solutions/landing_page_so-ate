'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { usePopover } from 'minimal-shared/hooks';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { editorClasses } from '../classes';
import { ToolbarItem } from './toolbar-item';
export function LinkBlock({ editor, linkIcon, unlinkIcon, active }) {
    const [linkUrl, setLinkUrl] = useState('');
    const { anchorEl, open, onOpen, onClose } = usePopover();
    const handleOpenPopover = useCallback((event) => {
        const currentUrl = editor.getAttributes('link').href ?? '';
        onOpen(event);
        setLinkUrl(currentUrl);
    }, [editor, onOpen]);
    const handleApply = useCallback(() => {
        const chainCommands = () => editor.chain().focus().extendMarkRange('link');
        onClose();
        if (linkUrl) {
            chainCommands().setLink({ href: linkUrl }).run();
        }
        else {
            chainCommands().unsetLink().run();
        }
    }, [editor, linkUrl, onClose]);
    const popoverId = open ? 'link-popover' : undefined;
    return (_jsxs(_Fragment, { children: [_jsx(ToolbarItem, { "aria-describedby": popoverId, "aria-label": "Insert link", active: active, className: editorClasses.toolbar.link, onClick: handleOpenPopover, icon: linkIcon }), _jsx(ToolbarItem, { "aria-label": "Remove link", disabled: !active, className: editorClasses.toolbar.unlink, onClick: () => editor.chain().focus().unsetLink().run(), icon: unlinkIcon }), _jsxs(Popover, { id: popoverId, open: open, anchorEl: anchorEl, onClose: onClose, anchorOrigin: { vertical: 'bottom', horizontal: 'left' }, slotProps: {
                    paper: {
                        sx: {
                            p: 2.5,
                            gap: 1.25,
                            width: 1,
                            maxWidth: 320,
                            display: 'flex',
                            flexDirection: 'column',
                        },
                    },
                }, children: [_jsx(Typography, { variant: "subtitle2", children: "Link URL" }), _jsxs(Box, { sx: { gap: 1, display: 'flex', alignItems: 'center' }, children: [_jsx(TextField, { fullWidth: true, size: "small", placeholder: "Enter URL", value: linkUrl, onChange: (event) => setLinkUrl(event.target.value) }), _jsx(Button, { variant: "contained", disabled: !linkUrl, onClick: handleApply, children: "Apply" })] })] })] }));
}
