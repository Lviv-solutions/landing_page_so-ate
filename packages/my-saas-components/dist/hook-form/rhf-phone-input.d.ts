import type { PhoneInputProps } from '../phone-input';
export type RHFPhoneInputProps = Omit<PhoneInputProps, 'value' | 'onChange'> & {
    name: string;
};
export declare function RHFPhoneInput({ name, helperText, ...other }: RHFPhoneInputProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=rhf-phone-input.d.ts.map