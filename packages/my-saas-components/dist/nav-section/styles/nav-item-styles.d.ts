import type { Theme, CSSObject } from '@mui/material/styles';
type NavItemStyles = {
    icon: CSSObject;
    info: CSSObject;
    texts: CSSObject;
    disabled: CSSObject;
    captionIcon: CSSObject;
    title: (theme: Theme) => CSSObject;
    arrow: (theme: Theme) => CSSObject;
    captionText: (theme: Theme) => CSSObject;
};
export declare const navItemStyles: NavItemStyles;
export {};
//# sourceMappingURL=nav-item-styles.d.ts.map