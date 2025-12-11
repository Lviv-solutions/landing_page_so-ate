'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useBoolean } from 'minimal-shared/hooks';
import { mergeClasses } from 'minimal-shared/utils';
import Collapse from '@mui/material/Collapse';
import { useTheme } from '@mui/material/styles';
import { NavList } from './nav-list';
import { Nav, NavUl, NavLi, NavSubheader } from '../components';
import { navSectionClasses, navSectionCssVars } from '../styles';
// ----------------------------------------------------------------------
export function NavSectionVertical({ sx, data, render, className, slotProps, checkPermissions, enabledRootRedirect, cssVars: overridesVars, ...other }) {
    const theme = useTheme();
    const cssVars = { ...navSectionCssVars.vertical(theme), ...overridesVars };
    return (_jsx(Nav, { className: mergeClasses([navSectionClasses.vertical, className]), sx: [{ ...cssVars }, ...(Array.isArray(sx) ? sx : [sx])], ...other, children: _jsx(NavUl, { sx: { flex: '1 1 auto', gap: 'var(--nav-item-gap)' }, children: data.map((group) => (_jsx(Group, { subheader: group.subheader, items: group.items, render: render, slotProps: slotProps, checkPermissions: checkPermissions, enabledRootRedirect: enabledRootRedirect }, group.subheader ?? group.items[0].title))) }) }));
}
// ----------------------------------------------------------------------
function Group({ items, render, subheader, slotProps, checkPermissions, enabledRootRedirect, }) {
    const groupOpen = useBoolean(true);
    const renderContent = () => (_jsx(NavUl, { sx: { gap: 'var(--nav-item-gap)' }, children: items.map((list) => (_jsx(NavList, { data: list, render: render, depth: 1, slotProps: slotProps, checkPermissions: checkPermissions, enabledRootRedirect: enabledRootRedirect }, list.title))) }));
    return (_jsx(NavLi, { children: subheader ? (_jsxs(_Fragment, { children: [_jsx(NavSubheader, { "data-title": subheader, open: groupOpen.value, onClick: groupOpen.onToggle, sx: slotProps?.subheader, children: subheader }), _jsx(Collapse, { in: groupOpen.value, children: renderContent() })] })) : (renderContent()) }));
}
