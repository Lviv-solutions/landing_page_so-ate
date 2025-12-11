import type { BoxProps } from '@mui/material/Box';
import type { SliderProps } from '@mui/material/Slider';
import type { SettingsState } from '../types';
export type FontFamilyOptionsProps = BoxProps & {
    options: string[];
    icon: React.ReactNode;
    value: SettingsState['fontFamily'];
    onChangeOption: (newOption: string) => void;
};
export declare function FontFamilyOptions({ sx, icon, value, options, onChangeOption, ...other }: FontFamilyOptionsProps): import("react/jsx-runtime").JSX.Element;
export type FontSizeOptionsProps = SliderProps & {
    options: [number, number];
    value: SettingsState['fontSize'];
    onChangeOption: (newOption: number) => void;
};
export declare function FontSizeOptions({ sx, value, options, onChangeOption, ...other }: FontSizeOptionsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=font-options.d.ts.map