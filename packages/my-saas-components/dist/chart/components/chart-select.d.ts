import type { ButtonBaseProps } from '@mui/material/ButtonBase';
import type { CustomPopoverProps } from '../../custom-popover';
type ChartSelectProps = Omit<ButtonBaseProps, 'onChange'> & {
    options: string[];
    value: string;
    onChange: (newValue: string) => void;
    slotProps?: {
        button?: ButtonBaseProps;
        popover?: CustomPopoverProps;
    };
};
export declare function ChartSelect({ options, value, onChange, slotProps, ...other }: ChartSelectProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=chart-select.d.ts.map