import type { Editor } from '@tiptap/react';
import type { EditorToolbarItemProps } from '../types';
type LinkBlockProps = {
    editor: Editor;
    active: boolean;
    linkIcon: EditorToolbarItemProps['icon'];
    unlinkIcon: EditorToolbarItemProps['icon'];
};
export declare function LinkBlock({ editor, linkIcon, unlinkIcon, active }: LinkBlockProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=link-block.d.ts.map