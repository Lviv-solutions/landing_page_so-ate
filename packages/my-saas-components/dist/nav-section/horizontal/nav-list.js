'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useCallback } from 'react';
import { usePopoverHover } from 'minimal-shared/hooks';
import { isActiveLink, isExternalLink } from 'minimal-shared/utils';
import { useTheme } from '@mui/material/styles';
import { popoverClasses } from '@mui/material/Popover';
import { usePathname } from 'src/routes/hooks';
import { NavItem } from './nav-item';
import { navSectionClasses } from '../styles';
import { NavUl, NavLi, NavDropdown, NavDropdownPaper } from '../components';
// ----------------------------------------------------------------------
export function NavList({ data, depth, render, cssVars, slotProps, checkPermissions, enabledRootRedirect, }) {
    const theme = useTheme();
    const pathname = usePathname();
    const isActive = isActiveLink(pathname, data.path, data.deepMatch ?? !!data.children);
    const { open, onOpen, onClose, anchorEl, elementRef: navItemRef, } = usePopoverHover();
    const isRtl = theme.direction === 'rtl';
    const id = open ? `${data.title}-popover` : undefined;
    useEffect(() => {
        // If the pathname changes, close the menu
        if (open) {
            onClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    const handleOpenMenu = useCallback(() => {
        if (data.children) {
            onOpen();
        }
    }, [data.children, onOpen]);
    const renderNavItem = () => (_jsx(NavItem, { ref: navItemRef, "aria-describedby": id, 
        // slots
        title: data.title, path: data.path, icon: data.icon, info: data.info, caption: data.caption, 
        // state
        active: isActive, open: open, disabled: data.disabled, 
        // options
        depth: depth, render: render, hasChild: !!data.children, externalLink: isExternalLink(data.path), enabledRootRedirect: enabledRootRedirect, 
        // styles
        slotProps: depth === 1 ? slotProps?.rootItem : slotProps?.subItem, 
        // actions
        onMouseEnter: handleOpenMenu, onMouseLeave: onClose }));
    const renderDropdown = () => !!data.children && (_jsx(NavDropdown, { disableScrollLock: true, "aria-hidden": !open, id: id, open: open, anchorEl: anchorEl, anchorOrigin: depth === 1
            ? { vertical: 'bottom', horizontal: isRtl ? 'right' : 'left' }
            : { vertical: 'center', horizontal: isRtl ? 'left' : 'right' }, transformOrigin: depth === 1
            ? { vertical: 'top', horizontal: isRtl ? 'right' : 'left' }
            : { vertical: 'center', horizontal: isRtl ? 'right' : 'left' }, slotProps: {
            paper: {
                onMouseEnter: handleOpenMenu,
                onMouseLeave: onClose,
                className: navSectionClasses.dropdown.root,
            },
        }, sx: {
            ...cssVars,
            [`& .${popoverClasses.paper}`]: {
                ...(depth === 1 && { pt: 1, ml: -0.75 }),
            },
        }, children: _jsx(NavDropdownPaper, { className: navSectionClasses.dropdown.paper, sx: slotProps?.dropdown?.paper, children: _jsx(NavSubList, { data: data.children, depth: depth, render: render, cssVars: cssVars, slotProps: slotProps, checkPermissions: checkPermissions, enabledRootRedirect: enabledRootRedirect }) }) }));
    // Hidden item by role
    if (data.allowedRoles && checkPermissions && checkPermissions(data.allowedRoles)) {
        return null;
    }
    return (_jsxs(NavLi, { disabled: data.disabled, children: [renderNavItem(), renderDropdown()] }));
}
// ----------------------------------------------------------------------
function NavSubList({ data, render, cssVars, depth = 0, slotProps, checkPermissions, enabledRootRedirect, }) {
    return (_jsx(NavUl, { sx: { gap: 0.5 }, children: data.map((list) => (_jsx(NavList, { data: list, render: render, depth: depth + 1, cssVars: cssVars, slotProps: slotProps, checkPermissions: checkPermissions, enabledRootRedirect: enabledRootRedirect }, list.title))) }));
}
