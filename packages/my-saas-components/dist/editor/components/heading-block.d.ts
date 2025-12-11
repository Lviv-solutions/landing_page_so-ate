import type { Editor } from '@tiptap/react';
declare const HEADING_OPTIONS: readonly [{
    readonly label: "Paragraph";
    readonly level: null;
}, {
    readonly label: "Heading 1";
    readonly level: 1;
}, {
    readonly label: "Heading 2";
    readonly level: 2;
}, {
    readonly label: "Heading 3";
    readonly level: 3;
}, {
    readonly label: "Heading 4";
    readonly level: 4;
}, {
    readonly label: "Heading 5";
    readonly level: 5;
}, {
    readonly label: "Heading 6";
    readonly level: 6;
}];
export type TextHeadingLevel = (typeof HEADING_OPTIONS)[number]['level'];
type HeadingBlock = {
    editor: Editor;
    isActive: (value: TextHeadingLevel) => boolean;
};
export declare function HeadingBlock({ editor, isActive }: HeadingBlock): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=heading-block.d.ts.map