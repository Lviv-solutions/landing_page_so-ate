'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BubbleMenu } from '@tiptap/react/menus';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { LinkBlock } from './link-block';
import { editorClasses } from '../classes';
import { ToolbarItem } from './toolbar-item';
import { toolbarIcons } from './toolbar-icons';
import { useToolbarState } from './use-toolbar-state';
export function BubbleToolbar({ editor, sx, ...other }) {
    const toolbarState = useToolbarState(editor);
    const chainCommands = () => editor.chain().focus();
    return (_jsx(BubbleMenu, { editor: editor, children: _jsxs(ToolbarRoot, { sx: sx, ...other, children: [_jsx(ToolbarItem, { "aria-label": "Bold", active: toolbarState.isBold, className: editorClasses.toolbar.bold, onClick: () => chainCommands().toggleBold().run(), icon: toolbarIcons.bold }), _jsx(ToolbarItem, { "aria-label": "Italic", active: toolbarState.isItalic, className: editorClasses.toolbar.italic, onClick: () => chainCommands().toggleItalic().run(), icon: toolbarIcons.italic }), _jsx(ToolbarItem, { "aria-label": "Underline", active: toolbarState.isUnderline, className: editorClasses.toolbar.underline, onClick: () => chainCommands().toggleUnderline().run(), icon: toolbarIcons.underline }), _jsx(ToolbarItem, { "aria-label": "Strike", active: toolbarState.isStrike, className: editorClasses.toolbar.strike, onClick: () => chainCommands().toggleStrike().run(), icon: toolbarIcons.strike }), _jsx(LinkBlock, { editor: editor, active: toolbarState.isLink, linkIcon: toolbarIcons.link, unlinkIcon: toolbarIcons.unlink }), _jsx(ToolbarItem, { "aria-label": "Uppercase", active: toolbarState.isTextTransform('uppercase'), className: editorClasses.toolbar.clear, onClick: () => chainCommands().toggleTextTransform('uppercase').run(), icon: toolbarIcons.uppercase }), _jsx(ToolbarItem, { "aria-label": "Lowercase", active: toolbarState.isTextTransform('lowercase'), className: editorClasses.toolbar.clear, onClick: () => chainCommands().toggleTextTransform('lowercase').run(), icon: toolbarIcons.lowercase }), _jsx(ToolbarItem, { "aria-label": "Capitalize", active: toolbarState.isTextTransform('capitalize'), className: editorClasses.toolbar.clear, onClick: () => chainCommands().toggleTextTransform('capitalize').run(), icon: toolbarIcons.capitalize }), _jsx(Divider, { orientation: "vertical", flexItem: true, sx: { height: 16, my: 'auto' } }), _jsx(ToolbarItem, { "aria-label": "Clear format", className: editorClasses.toolbar.clear, onClick: () => chainCommands().clearNodes().unsetAllMarks().run(), icon: toolbarIcons.clear })] }) }));
}
// ----------------------------------------------------------------------
const ToolbarRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(0.5),
    padding: theme.spacing(0.5),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.vars.customShadows.z8,
    backgroundColor: theme.vars.palette.background.paper,
    border: `1px solid ${theme.vars.palette.shared.paperOutlined}`,
}));
