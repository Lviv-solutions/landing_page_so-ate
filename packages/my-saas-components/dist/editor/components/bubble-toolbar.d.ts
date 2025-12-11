import type { Editor } from '@tiptap/react';
type BubbleToolbarProps = React.ComponentProps<typeof ToolbarRoot> & {
    editor: Editor;
};
export declare function BubbleToolbar({ editor, sx, ...other }: BubbleToolbarProps): import("react/jsx-runtime").JSX.Element;
declare const ToolbarRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export {};
//# sourceMappingURL=bubble-toolbar.d.ts.map