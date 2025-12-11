'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import './code-highlight-block.css';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useId, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { mergeClasses, isExternalLink } from 'minimal-shared/utils';
import Link from '@mui/material/Link';
import { RouterLink } from 'src/routes/components';
import { Image } from '../image';
import { MarkdownRoot } from './styles';
import { markdownClasses } from './classes';
import { htmlToMarkdown, isMarkdownContent } from './html-to-markdown';
export function Markdown({ sx, children, className, components, rehypePlugins, ...other }) {
    const content = useMemo(() => {
        const cleanedContent = String(children).trim();
        return isMarkdownContent(cleanedContent) ? cleanedContent : htmlToMarkdown(cleanedContent);
    }, [children]);
    const allRehypePlugins = useMemo(() => [...defaultRehypePlugins, ...(rehypePlugins ?? [])], [rehypePlugins]);
    return (_jsx(MarkdownRoot, { className: mergeClasses([markdownClasses.root, className]), sx: sx, children: _jsx(ReactMarkdown, { components: { ...defaultComponents, ...components }, rehypePlugins: allRehypePlugins, ...other, children: content }) }));
}
/** **************************************
 * @rehypePlugins
 *************************************** */
const defaultRehypePlugins = [
    rehypeRaw,
    rehypeHighlight,
    [remarkGfm, { singleTilde: false }],
];
/** **************************************
 * @components
 * Note: node is passed by react-markdown, but we intentionally omit or rename it
 * (e.g., node: _n) to prevent rendering it as [object Object] in the DOM.
 *************************************** */
const defaultComponents = {
    img: ({ node: _n, onLoad: _o, ...other }) => (_jsx(Image, { ratio: "16/9", className: markdownClasses.content.image, sx: { borderRadius: 2 }, ...other })),
    a: ({ href = '', children, node: _n, ...other }) => {
        const linkProps = isExternalLink(href)
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : { component: RouterLink };
        return (_jsx(Link, { ...linkProps, href: href, className: markdownClasses.content.link, ...other, children: children }));
    },
    pre: ({ children }) => (_jsx("div", { className: markdownClasses.content.codeBlock, children: _jsx("pre", { children: children }) })),
    code: ({ className = '', children, node: _n, ...other }) => {
        const hasLanguage = /language-\w+/.test(className);
        const appliedClass = hasLanguage ? className : markdownClasses.content.codeInline;
        return (_jsx("code", { className: appliedClass, ...other, children: children }));
    },
    input: ({ type, node: _n, ...other }) => type === 'checkbox' ? (_jsx(CustomCheckbox, { className: markdownClasses.content.checkbox, ...other })) : (_jsx("input", { type: type, ...other })),
};
function CustomCheckbox(props) {
    const uniqueId = useId();
    return _jsx("input", { type: "checkbox", id: uniqueId, ...props });
}
