'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { mergeClasses } from 'minimal-shared/utils';
import { useTheme } from '@mui/material/styles';
import { NavList } from './nav-list';
import { Scrollbar } from '../../scrollbar';
import { Nav, NavUl, NavLi } from '../components';
import { navSectionClasses, navSectionCssVars } from '../styles';
// ----------------------------------------------------------------------
export function NavSectionHorizontal({ sx, data, render, className, slotProps, checkPermissions, enabledRootRedirect, cssVars: overridesVars, ...other }) {
    const theme = useTheme();
    const cssVars = { ...navSectionCssVars.horizontal(theme), ...overridesVars };
    return (_jsx(Scrollbar, { sx: { height: 1 }, slotProps: { contentSx: { height: 1, display: 'flex', alignItems: 'center' } }, children: _jsx(Nav, { className: mergeClasses([navSectionClasses.horizontal, className]), sx: [
                () => ({
                    ...cssVars,
                    height: 1,
                    mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: 'var(--nav-height)',
                }),
                ...(Array.isArray(sx) ? sx : [sx]),
            ], ...other, children: _jsx(NavUl, { sx: { flexDirection: 'row', gap: 'var(--nav-item-gap)' }, children: data.map((group) => (_jsx(Group, { render: render, cssVars: cssVars, items: group.items, slotProps: slotProps, checkPermissions: checkPermissions, enabledRootRedirect: enabledRootRedirect }, group.subheader ?? group.items[0].title))) }) }) }));
}
// ----------------------------------------------------------------------
function Group({ items, render, cssVars, slotProps, checkPermissions, enabledRootRedirect, }) {
    return (_jsx(NavLi, { children: _jsx(NavUl, { sx: { flexDirection: 'row', gap: 'var(--nav-item-gap)' }, children: items.map((list) => (_jsx(NavList, { depth: 1, data: list, render: render, cssVars: cssVars, slotProps: slotProps, checkPermissions: checkPermissions, enabledRootRedirect: enabledRootRedirect }, list.title))) }) }));
}
