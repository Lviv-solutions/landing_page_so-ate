'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { varAlpha } from 'minimal-shared/utils';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { LinkBlock } from './link-block';
import { editorClasses } from '../classes';
import { ImageBlock } from './image-block';
import { ToolbarItem } from './toolbar-item';
import { HeadingBlock } from './heading-block';
import { toolbarIcons } from './toolbar-icons';
import { useToolbarState } from './use-toolbar-state';
// ----------------------------------------------------------------------
export function Toolbar({ sx, editor, fullItem, fullscreen, onToggleFullscreen, ...other }) {
    const toolbarState = useToolbarState(editor);
    const chainCommands = () => editor.chain().focus();
    return (_jsxs(ToolbarRoot, { className: editorClasses.toolbar.root, divider: _jsx(Divider, { orientation: "vertical", flexItem: true, sx: { height: 16, my: 'auto' } }), sx: sx, ...other, children: [_jsx(HeadingBlock, { editor: editor, isActive: toolbarState.isTextLevel }), _jsxs(ToolbarBlock, { children: [_jsx(ToolbarItem, { "aria-label": "Bold (\u2318B)", active: toolbarState.isBold, className: editorClasses.toolbar.bold, onClick: () => chainCommands().toggleBold().run(), icon: toolbarIcons.bold }), _jsx(ToolbarItem, { "aria-label": "Italic (\u2318I)", active: toolbarState.isItalic, className: editorClasses.toolbar.italic, onClick: () => chainCommands().toggleItalic().run(), icon: toolbarIcons.italic }), _jsx(ToolbarItem, { "aria-label": "Underline (\u2318U)", active: toolbarState.isUnderline, className: editorClasses.toolbar.underline, onClick: () => chainCommands().toggleUnderline().run(), icon: toolbarIcons.underline }), _jsx(ToolbarItem, { "aria-label": "Strike (\u2318S)", active: toolbarState.isStrike, className: editorClasses.toolbar.strike, onClick: () => chainCommands().toggleStrike().run(), icon: toolbarIcons.strike })] }), _jsxs(ToolbarBlock, { children: [_jsx(ToolbarItem, { "aria-label": "Bullet list (\u2318\u21E78)", active: toolbarState.isBulletList, className: editorClasses.toolbar.bulletList, onClick: () => chainCommands().toggleBulletList().run(), icon: toolbarIcons.bulletList }), _jsx(ToolbarItem, { "aria-label": "Ordered list (\u2318\u21E77)", active: toolbarState.isOrderedList, className: editorClasses.toolbar.orderedList, onClick: () => chainCommands().toggleOrderedList().run(), icon: toolbarIcons.orderedList })] }), _jsxs(ToolbarBlock, { children: [_jsx(ToolbarItem, { "aria-label": "Align left (\u2318\u21E7L)", active: toolbarState.isAlign('left'), className: editorClasses.toolbar.alignLeft, onClick: () => chainCommands().toggleTextAlign('left').run(), icon: toolbarIcons.alignLeft }), _jsx(ToolbarItem, { "aria-label": "Align center (\u2318\u21E7E)", active: toolbarState.isAlign('center'), className: editorClasses.toolbar.alignCenter, onClick: () => chainCommands().toggleTextAlign('center').run(), icon: toolbarIcons.alignCenter }), _jsx(ToolbarItem, { "aria-label": "Align right (\u2318\u21E7R)", active: toolbarState.isAlign('right'), className: editorClasses.toolbar.alignRight, onClick: () => chainCommands().toggleTextAlign('right').run(), icon: toolbarIcons.alignRight }), _jsx(ToolbarItem, { "aria-label": "Align justify (\u2318\u21E7J)", active: toolbarState.isAlign('justify'), className: editorClasses.toolbar.alignJustify, onClick: () => chainCommands().toggleTextAlign('justify').run(), icon: toolbarIcons.alignJustify })] }), fullItem && (_jsxs(ToolbarBlock, { children: [_jsx(ToolbarItem, { "aria-label": "Code (\u2318E)", active: toolbarState.isCode, className: editorClasses.toolbar.code, onClick: () => chainCommands().toggleCode().run(), icon: toolbarIcons.code }), _jsx(ToolbarItem, { "aria-label": "Code block (\u2318\u2325C)", active: toolbarState.isCodeBlock, className: editorClasses.toolbar.codeBlock, onClick: () => chainCommands().toggleCodeBlock().run(), icon: toolbarIcons.codeBlock })] })), fullItem && (_jsxs(ToolbarBlock, { children: [_jsx(ToolbarItem, { "aria-label": "Blockquote (\u2318\u21E7B)", active: toolbarState.isBlockquote, className: editorClasses.toolbar.blockquote, onClick: () => chainCommands().toggleBlockquote().run(), icon: toolbarIcons.blockquote }), _jsx(ToolbarItem, { "aria-label": "Horizontal rule", className: editorClasses.toolbar.hr, onClick: () => chainCommands().setHorizontalRule().run(), icon: toolbarIcons.horizontalRule })] })), _jsxs(ToolbarBlock, { children: [_jsx(LinkBlock, { editor: editor, active: toolbarState.isLink, linkIcon: toolbarIcons.link, unlinkIcon: toolbarIcons.unlink }), _jsx(ImageBlock, { editor: editor, icon: toolbarIcons.image })] }), _jsxs(ToolbarBlock, { children: [_jsx(ToolbarItem, { "aria-label": "Hard break (\u21E7Enter)", className: editorClasses.toolbar.hardBreak, onClick: () => chainCommands().setHardBreak().run(), icon: toolbarIcons.hardBreak }), _jsx(ToolbarItem, { "aria-label": "Clear format (\u2318\u21E7X)", className: editorClasses.toolbar.clear, onClick: () => chainCommands().clearNodes().unsetAllMarks().run(), icon: toolbarIcons.clear })] }), fullItem && (_jsxs(ToolbarBlock, { children: [_jsx(ToolbarItem, { "aria-label": "Undo (\u2318Z)", disabled: !toolbarState.canUndo, className: editorClasses.toolbar.undo, onClick: () => chainCommands().undo().run(), icon: toolbarIcons.undo }), _jsx(ToolbarItem, { "aria-label": "Redo (\u2318\u21E7Z)", disabled: !toolbarState.canRedo, className: editorClasses.toolbar.redo, onClick: () => chainCommands().redo().run(), icon: toolbarIcons.redo })] })), _jsx(ToolbarBlock, { children: _jsx(ToolbarItem, { "aria-label": "Fullscreen", active: fullscreen, className: editorClasses.toolbar.fullscreen, onClick: onToggleFullscreen, icon: fullscreen ? toolbarIcons.fullscreen : toolbarIcons.exitFullscreen }) })] }));
}
// ----------------------------------------------------------------------
const ToolbarRoot = styled(Stack)(({ theme }) => ({
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(1.25),
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    backgroundColor: theme.vars.palette.background.paper,
    borderBottom: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
}));
const ToolbarBlock = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
}));
