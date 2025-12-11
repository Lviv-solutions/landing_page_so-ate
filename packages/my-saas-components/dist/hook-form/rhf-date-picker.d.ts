import type { TimePickerProps } from '@mui/x-date-pickers/TimePicker';
import type { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import type { DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import type { PickersTextFieldProps } from '@mui/x-date-pickers/PickersTextField';
type PickerProps<T extends DatePickerProps | TimePickerProps | DateTimePickerProps> = T & {
    name: string;
    slotProps?: T['slotProps'] & {
        textField?: Partial<PickersTextFieldProps>;
    };
};
export declare function RHFDatePicker({ name, slotProps, ...other }: PickerProps<DatePickerProps>): import("react/jsx-runtime").JSX.Element;
export declare function RHFTimePicker({ name, slotProps, ...other }: PickerProps<TimePickerProps>): import("react/jsx-runtime").JSX.Element;
export declare function RHFDateTimePicker({ name, slotProps, ...other }: PickerProps<DateTimePickerProps>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-date-picker.d.ts.map