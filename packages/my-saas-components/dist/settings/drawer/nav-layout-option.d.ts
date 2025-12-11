import type { BoxProps } from '@mui/material/Box';
import type { SettingsState } from '../types';
export type NavLayoutOptionProps = BoxProps & {
    value: SettingsState['navLayout'];
    options: {
        value: SettingsState['navLayout'];
        icon: React.ReactNode;
    }[];
    onChangeOption: (newOption: SettingsState['navLayout']) => void;
};
export declare function NavLayoutOptions({ sx, value, options, onChangeOption, ...other }: NavLayoutOptionProps): import("react/jsx-runtime").JSX.Element;
export type NavColorOptionProps = BoxProps & {
    value: SettingsState['navColor'];
    options: {
        label: string;
        value: SettingsState['navColor'];
        icon: React.ReactNode;
    }[];
    onChangeOption: (newOption: SettingsState['navColor']) => void;
};
export declare function NavColorOptions({ sx, value, options, onChangeOption, ...other }: NavColorOptionProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=nav-layout-option.d.ts.map