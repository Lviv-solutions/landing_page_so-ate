import type { BoxProps } from '@mui/material/Box';
import type { InputBaseProps } from '@mui/material/InputBase';
import type { ButtonBaseProps } from '@mui/material/ButtonBase';
import type { FormHelperTextProps } from '@mui/material/FormHelperText';
import { CaptionText, InputContainer, NumberInputRoot } from './styles';
type NumberInputSlotProps = {
    wrapper?: BoxProps;
    input?: InputBaseProps;
    button?: ButtonBaseProps;
    inputWrapper?: React.ComponentProps<typeof InputContainer>;
    captionText?: React.ComponentProps<typeof CaptionText>;
    helperText?: FormHelperTextProps;
};
type EventHandler = React.MouseEvent<HTMLButtonElement, MouseEvent> | React.ChangeEvent<HTMLInputElement>;
export type NumberInputProps = Omit<React.ComponentProps<typeof NumberInputRoot>, 'onChange'> & {
    min?: number;
    max?: number;
    error?: boolean;
    disabled?: boolean;
    value?: number | null;
    hideDivider?: boolean;
    hideButtons?: boolean;
    disableInput?: boolean;
    helperText?: React.ReactNode;
    captionText?: React.ReactNode;
    slotProps?: NumberInputSlotProps;
    onChange?: (event: EventHandler, value: number) => void;
};
export declare function NumberInput({ sx, error, value, onChange, disabled, slotProps, helperText, captionText, hideDivider, hideButtons, disableInput, min, max, ...other }: NumberInputProps): import("react/jsx-runtime").JSX.Element;
export declare function transformNumberOnChange(value: string, options?: {
    min?: number;
    max?: number;
}): number;
export {};
//# sourceMappingURL=number-input.d.ts.map