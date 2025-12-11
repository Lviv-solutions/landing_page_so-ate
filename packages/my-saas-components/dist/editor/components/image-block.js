'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { usePopover } from 'minimal-shared/hooks';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { editorClasses } from '../classes';
import { ToolbarItem } from './toolbar-item';
export function ImageBlock({ editor, icon }) {
    const { anchorEl, open, onOpen, onClose } = usePopover();
    const [state, setState] = useState({
        imageUrl: '',
        altText: '',
    });
    const handleApply = useCallback(() => {
        onClose();
        setState({ imageUrl: '', altText: '' });
        editor.chain().focus().setImage({ src: state.imageUrl, alt: state.altText }).run();
    }, [editor, onClose, state.altText, state.imageUrl]);
    const popoverId = open ? 'image-popover' : undefined;
    return (_jsxs(_Fragment, { children: [_jsx(ToolbarItem, { "aria-describedby": popoverId, "aria-label": "Insert image", className: editorClasses.toolbar.image, onClick: onOpen, icon: icon }), _jsxs(Popover, { id: popoverId, open: open, anchorEl: anchorEl, onClose: onClose, anchorOrigin: { vertical: 'bottom', horizontal: 'left' }, slotProps: {
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
                }, children: [_jsx(Typography, { variant: "subtitle2", children: "Add image" }), _jsx(TextField, { fullWidth: true, size: "small", placeholder: "Image URL", value: state.imageUrl, onChange: (event) => setState((prev) => ({ ...prev, imageUrl: event.target.value })) }), _jsx(TextField, { fullWidth: true, size: "small", placeholder: "Alt text", value: state.altText, onChange: (event) => setState((prev) => ({ ...prev, altText: event.target.value })) }), _jsx(Button, { variant: "contained", disabled: !state.imageUrl, onClick: handleApply, sx: { alignSelf: 'flex-end' }, children: "Apply" })] })] }));
}
