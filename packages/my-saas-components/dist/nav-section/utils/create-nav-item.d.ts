import type { NavItemDataProps, NavItemOptionsProps } from '../types';
type CreateNavItemReturn = {
    subItem: boolean;
    rootItem: boolean;
    subDeepItem: boolean;
    baseProps: Record<string, any>;
    renderIcon: React.ReactNode;
    renderInfo: React.ReactNode;
};
type CreateNavItemProps = Pick<NavItemDataProps, 'path' | 'icon' | 'info'> & NavItemOptionsProps;
export declare function createNavItem({ path, icon, info, depth, render, hasChild, externalLink, enabledRootRedirect, }: CreateNavItemProps): CreateNavItemReturn;
export {};
//# sourceMappingURL=create-nav-item.d.ts.map