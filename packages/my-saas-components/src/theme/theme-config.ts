export type ThemeConfig = {
  defaultMode: 'light' | 'dark';
  direction: 'ltr' | 'rtl';
  fontFamily: {
    primary: string;
    secondary: string;
  };
};

export const themeConfig: ThemeConfig = {
  defaultMode: 'light',
  direction: 'ltr',
  fontFamily: {
    primary: 'Inter, sans-serif',
    secondary: 'Roboto, sans-serif',
  },
};
