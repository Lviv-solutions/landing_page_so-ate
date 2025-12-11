import type { Editor } from '@tiptap/react';
import type { TextHeadingLevel } from './heading-block';
import type { TextTransformValue } from '../extension/text-transform';
export type TextAlignValue = 'left' | 'center' | 'right' | 'justify';
export type UseToolbarStateReturn = {
    isBold: boolean;
    isCode: boolean;
    isLink: boolean;
    isItalic: boolean;
    isStrike: boolean;
    isUnderline: boolean;
    isCodeBlock: boolean;
    isBulletList: boolean;
    isBlockquote: boolean;
    isOrderedList: boolean;
    isAlign: (value: TextAlignValue) => boolean;
    isTextLevel: (value: TextHeadingLevel) => boolean;
    isTextTransform: (value: TextTransformValue) => boolean;
    canUndo: boolean;
    canRedo: boolean;
};
export declare function useToolbarState(editor: Editor): UseToolbarStateReturn;
//# sourceMappingURL=use-toolbar-state.d.ts.map