'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './code-highlight-block.css';
import { useCallback } from 'react';
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import { editorClasses } from '../classes';
// ----------------------------------------------------------------------
export function CodeHighlightBlock(props) {
    const { node, extension, updateAttributes } = props;
    const language = node.attrs.language;
    const lowlight = extension.options.lowlight;
    const handleChangeLanguage = useCallback((event) => {
        updateAttributes({ language: event.target.value });
    }, [updateAttributes]);
    const renderLanguageOptions = () => lowlight.listLanguages().map((lang) => (_jsx("option", { value: lang, children: lang }, lang)));
    return (_jsxs(NodeViewWrapper, { className: editorClasses.content.codeBlock, children: [_jsxs("select", { name: "language", contentEditable: false, value: language || 'null', onChange: handleChangeLanguage, className: editorClasses.content.langSelect, children: [_jsx("option", { value: "null", children: "auto" }), _jsx("option", { disabled: true, children: "\u2014" }), renderLanguageOptions()] }), _jsx("pre", { children: _jsx(NodeViewContent, { as: "code" }) })] }));
}
