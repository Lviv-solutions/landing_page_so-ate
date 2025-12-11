import type { BoxProps } from '@mui/material/Box';
import type { SettingsState } from '../types';
export type PresetsOptionsProps = BoxProps & {
    icon: React.ReactNode;
    value: SettingsState['primaryColor'];
    options: {
        name: SettingsState['primaryColor'];
        value: string;
    }[];
    onChangeOption: (newOption: SettingsState['primaryColor']) => void;
};
export declare function PresetsOptions({ sx, icon, value, options, onChangeOption, ...other }: PresetsOptionsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=presets-options.d.ts.map