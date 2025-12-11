import { Mark } from '@tiptap/core';
export type TextTransformValue = 'uppercase' | 'lowercase' | 'capitalize';
export interface TextTransformOptions {
    allowedValues: TextTransformValue[];
    defaultValue?: TextTransformValue;
}
export interface TextTransformAttributes {
    textTransform?: TextTransformValue;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        textTransform: {
            unsetTextTransform: () => ReturnType;
            setTextTransform: (value: TextTransformValue) => ReturnType;
            toggleTextTransform: (value: TextTransformValue) => ReturnType;
        };
    }
}
export declare const TextTransform: Mark<TextTransformOptions, TextTransformAttributes>;
//# sourceMappingURL=text-transform.d.ts.map