import type { ButtonBaseProps } from '@mui/material/ButtonBase';
export type BaseOptionProps = Omit<ButtonBaseProps, 'action'> & {
    label: string;
    tooltip?: string;
    selected: boolean;
    icon: React.ReactNode;
    action?: React.ReactNode;
    onChangeOption: () => void;
};
export declare function BaseOption({ sx, icon, label, action, tooltip, selected, onChangeOption, ...other }: BaseOptionProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=base-option.d.ts.map