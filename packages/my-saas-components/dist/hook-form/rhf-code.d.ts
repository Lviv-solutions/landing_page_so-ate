import type { BoxProps } from '@mui/material/Box';
import type { MuiOtpInputProps } from 'mui-one-time-password-input';
import type { FormHelperTextProps } from '@mui/material/FormHelperText';
export interface RHFCodesProps extends Omit<MuiOtpInputProps, 'sx'> {
    name: string;
    maxSize?: number;
    placeholder?: string;
    helperText?: React.ReactNode;
    slotProps?: {
        wrapper?: BoxProps;
        helperText?: FormHelperTextProps;
        textField?: MuiOtpInputProps['TextFieldsProps'];
    };
}
export declare function RHFCode({ name, slotProps, helperText, maxSize, placeholder, ...other }: RHFCodesProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-code.d.ts.map