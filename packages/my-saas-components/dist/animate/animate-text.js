'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useMemo, useEffect } from 'react';
import { mergeClasses } from 'minimal-shared/utils';
import { m, useInView, useAnimation } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { createClasses } from 'src/theme/create-classes';
import { varFade, varContainer } from './variants';
// ----------------------------------------------------------------------
export const animateTextClasses = {
    root: createClasses('animate__text__root'),
    lines: createClasses('animate__text__lines'),
    line: createClasses('animate__text__line'),
    word: createClasses('animate__text__word'),
    char: createClasses('animate__text__char'),
    space: createClasses('animate__text__space'),
    srOnly: 'sr-only',
};
const srOnlyStyles = {
    p: 0,
    width: '1px',
    height: '1px',
    margin: '-1px',
    borderWidth: 0,
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    clip: 'rect(0, 0, 0, 0)',
};
export function AnimateText({ sx, variants, className, textContent, once = true, amount = 1 / 3, component = 'p', repeatDelayMs = 100, // 1000 = 1s
...other }) {
    const textRef = useRef(null);
    const animationControls = useAnimation();
    const textArray = useMemo(() => (Array.isArray(textContent) ? textContent : [textContent]), [textContent]);
    const isInView = useInView(textRef, { once, amount });
    useEffect(() => {
        let timeout;
        const triggerAnimation = () => {
            if (repeatDelayMs) {
                timeout = setTimeout(async () => {
                    await animationControls.start('initial');
                    animationControls.start('animate');
                }, repeatDelayMs);
            }
            else {
                animationControls.start('animate');
            }
        };
        if (isInView) {
            triggerAnimation();
        }
        else {
            animationControls.start('initial');
        }
        return () => clearTimeout(timeout);
    }, [animationControls, isInView, repeatDelayMs]);
    return (_jsxs(Typography, { component: component, className: mergeClasses([animateTextClasses.root, className]), sx: [
            {
                p: 0,
                m: 0,
                /**
                 * Utilities for improving accessibility with screen readers.
                 * https://v1.tailwindcss.com/docs/screen-readers
                 */
                [`& .${animateTextClasses.srOnly}`]: srOnlyStyles,
            },
            ...(Array.isArray(sx) ? sx : [sx]),
        ], ...other, children: [_jsx("span", { className: animateTextClasses.srOnly, children: textArray.join(' ') }), _jsx(AnimatedTextContainer, { "aria-hidden": true, ref: textRef, initial: "initial", animate: animationControls, exit: "exit", variants: varContainer(), className: animateTextClasses.lines, children: textArray?.map((line, lineIndex) => (_jsx(TextLine, { "data-index": lineIndex, className: animateTextClasses.line, sx: { display: 'block' }, children: line.split(' ').map((word, wordIndex) => {
                        const lastWordInline = line.split(' ')[line.split(' ').length - 1];
                        return (_jsxs(TextWord, { "data-index": wordIndex, className: animateTextClasses.word, sx: { display: 'inline-block' }, children: [word.split('').map((char, charIndex) => (_jsx(AnimatedTextChar, { variants: variants ?? varFade('in'), "data-index": charIndex, className: animateTextClasses.char, sx: { display: 'inline-block' }, children: char }, `${char}-${charIndex}`))), lastWordInline !== word && (_jsx(TextWord, { className: animateTextClasses.space, sx: { display: 'inline-block' }, children: "\u00A0" }))] }, `${word}-${wordIndex}`));
                    }) }, `${line}-${lineIndex}`))) })] }));
}
// ----------------------------------------------------------------------
const TextLine = styled('span') ``;
const TextWord = styled('span') ``;
const AnimatedTextContainer = styled(m.span) ``;
const AnimatedTextChar = styled(m.span) ``;
