'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { mergeClasses } from 'minimal-shared/utils';
import { useTheme } from '@mui/material/styles';
import { NavList } from './nav-list';
import { Nav, NavUl, NavLi } from '../components';
import { navSectionClasses, navSectionCssVars } from '../styles';
// ----------------------------------------------------------------------
export function NavSectionMini({ sx, data, render, className, slotProps, checkPermissions, enabledRootRedirect, cssVars: overridesVars, ...other }) {
    const theme = useTheme();
    const cssVars = { ...navSectionCssVars.mini(theme), ...overridesVars };
    return (_jsx(Nav, { className: mergeClasses([navSectionClasses.mini, className]), sx: [{ ...cssVars }, ...(Array.isArray(sx) ? sx : [sx])], ...other, children: _jsx(NavUl, { sx: { flex: '1 1 auto', gap: 'var(--nav-item-gap)' }, children: data.map((group) => (_jsx(Group, { render: render, cssVars: cssVars, items: group.items, slotProps: slotProps, checkPermissions: checkPermissions, enabledRootRedirect: enabledRootRedirect }, group.subheader ?? group.items[0].title))) }) }));
}
// ----------------------------------------------------------------------
function Group({ items, render, cssVars, slotProps, checkPermissions, enabledRootRedirect, }) {
    return (_jsx(NavLi, { children: _jsx(NavUl, { sx: { gap: 'var(--nav-item-gap)' }, children: items.map((list) => (_jsx(NavList, { depth: 1, data: list, render: render, cssVars: cssVars, slotProps: slotProps, checkPermissions: checkPermissions, enabledRootRedirect: enabledRootRedirect }, list.title))) }) }));
}
