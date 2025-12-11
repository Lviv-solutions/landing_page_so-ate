'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { debounce } from 'es-toolkit';
import { common, createLowlight } from 'lowlight';
import { mergeClasses } from 'minimal-shared/utils';
import ImageExtension from '@tiptap/extension-image';
import StarterKitExtension from '@tiptap/starter-kit';
import TextAlignExtension from '@tiptap/extension-text-align';
import { useMemo, useState, useEffect, useCallback } from 'react';
import { Placeholder as PlaceholderExtension } from '@tiptap/extensions';
import CodeBlockLowlightExtension from '@tiptap/extension-code-block-lowlight';
import { useEditor, EditorContent, ReactNodeViewRenderer } from '@tiptap/react';
import Box from '@mui/material/Box';
import Portal from '@mui/material/Portal';
import Backdrop from '@mui/material/Backdrop';
import FormHelperText from '@mui/material/FormHelperText';
import { EditorRoot } from './styles';
import { editorClasses } from './classes';
import { Toolbar } from './components/toolbar';
import { BubbleToolbar } from './components/bubble-toolbar';
import { CodeHighlightBlock } from './components/code-highlight-block';
import { ClearFormat as ClearFormatExtension } from './extension/clear-format';
import { TextTransform as TextTransformExtension } from './extension/text-transform';
// ----------------------------------------------------------------------
export function Editor({ sx, error, onChange, slotProps, helperText, resetValue, className, editable = true, fullItem = false, immediatelyRender = false, ref: contentRef, value: initialContent = '', placeholder = 'Write something awesome...', ...other }) {
    const [fullscreen, setFullscreen] = useState(false);
    const [rerenderKey, setRerenderKey] = useState(0);
    const lowlight = useMemo(() => createLowlight(common), []);
    const debouncedOnChange = useMemo(() => debounce((html) => {
        onChange?.(html);
    }, 200), [onChange]);
    const editor = useEditor({
        editable,
        immediatelyRender,
        content: initialContent,
        shouldRerenderOnTransaction: !!rerenderKey,
        onUpdate: (ctx) => {
            const html = ctx.editor.getHTML();
            debouncedOnChange(html);
        },
        extensions: [
            StarterKitExtension.configure({
                codeBlock: false,
                code: { HTMLAttributes: { class: editorClasses.content.codeInline } },
                heading: { HTMLAttributes: { class: editorClasses.content.heading } },
                horizontalRule: { HTMLAttributes: { class: editorClasses.content.hr } },
                listItem: { HTMLAttributes: { class: editorClasses.content.listItem } },
                blockquote: { HTMLAttributes: { class: editorClasses.content.blockquote } },
                bulletList: { HTMLAttributes: { class: editorClasses.content.bulletList } },
                orderedList: { HTMLAttributes: { class: editorClasses.content.orderedList } },
                link: {
                    openOnClick: false,
                    HTMLAttributes: { class: editorClasses.content.link },
                },
            }),
            TextAlignExtension.configure({ types: ['heading', 'paragraph'] }),
            ImageExtension.configure({ HTMLAttributes: { class: editorClasses.content.image } }),
            PlaceholderExtension.configure({
                placeholder,
                emptyEditorClass: editorClasses.content.placeholder,
            }),
            CodeBlockLowlightExtension.extend({
                addNodeView: () => ReactNodeViewRenderer(CodeHighlightBlock),
            }).configure({ lowlight }),
            // Custom extensions
            TextTransformExtension,
            ClearFormatExtension,
        ],
        ...other,
    });
    const handleToggleFullscreen = useCallback(() => {
        editor?.unmount();
        setFullscreen((prev) => !prev);
        setRerenderKey((prev) => prev + 1);
    }, [editor]);
    const handleExitFullscreen = useCallback((event) => {
        if (event.key === 'Escape') {
            editor?.unmount();
            setFullscreen(false);
            setRerenderKey((prev) => prev + 1);
        }
    }, [editor]);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!editor?.isDestroyed && editor?.isEmpty && initialContent !== '<p></p>') {
                editor?.commands.setContent(initialContent);
            }
        }, 200);
        return () => clearTimeout(timer);
    }, [initialContent, editor]);
    useEffect(() => {
        if (resetValue && !initialContent) {
            editor?.commands.clearContent();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialContent]);
    useEffect(() => {
        if (!fullscreen)
            return undefined;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleExitFullscreen);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleExitFullscreen);
        };
    }, [fullscreen, handleExitFullscreen]);
    return (_jsxs(Portal, { disablePortal: !fullscreen, children: [fullscreen && _jsx(Backdrop, { open: true, sx: [(theme) => ({ zIndex: theme.zIndex.modal - 1 })] }), _jsxs(Box, { ...slotProps?.wrapper, sx: [
                    { display: 'flex', flexDirection: 'column' },
                    ...(Array.isArray(slotProps?.wrapper?.sx)
                        ? slotProps.wrapper.sx
                        : [slotProps?.wrapper?.sx]),
                ], children: [_jsx(EditorRoot, { className: mergeClasses([editorClasses.root, className], {
                            [editorClasses.state.error]: !!error,
                            [editorClasses.state.disabled]: !editable,
                            [editorClasses.state.fullscreen]: fullscreen,
                        }), sx: sx, children: editor && !editor.isDestroyed && (_jsxs(_Fragment, { children: [_jsx(Toolbar, { editor: editor, fullItem: fullItem, fullscreen: fullscreen, onToggleFullscreen: handleToggleFullscreen }), _jsx(BubbleToolbar, { editor: editor }), _jsx(EditorContent, { ref: contentRef, spellCheck: false, autoComplete: "off", autoCapitalize: "off", editor: editor, className: editorClasses.content.root })] })) }), helperText && _jsx(FormHelperText, { error: !!error, children: helperText })] })] }));
}
