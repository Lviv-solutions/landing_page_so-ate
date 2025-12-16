export type ThemeColorPreset = 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red';

export const primaryColorPresets: Record<ThemeColorPreset, { main: string }> = {
  default: { main: '#00A76F' },
  cyan: { main: '#078DEE' },
  purple: { main: '#7635DC' },
  blue: { main: '#2065D1' },
  orange: { main: '#FDA92D' },
  red: { main: '#FF3030' },
};
