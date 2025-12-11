'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { varAlpha } from 'minimal-shared/utils';
import { usePopover } from 'minimal-shared/hooks';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ButtonBase from '@mui/material/ButtonBase';
import { Iconify } from '../../iconify';
import { CustomPopover } from '../../custom-popover';
export function ChartSelect({ options, value, onChange, slotProps, ...other }) {
    const { open, anchorEl, onClose, onOpen } = usePopover();
    const renderMenuActions = () => (_jsx(CustomPopover, { open: open, anchorEl: anchorEl, onClose: onClose, ...slotProps?.popover, children: _jsx(MenuList, { children: options.map((option) => (_jsx(MenuItem, { selected: option === value, onClick: () => {
                    onClose();
                    onChange(option);
                }, children: option }, option))) }) }));
    return (_jsxs(_Fragment, { children: [_jsxs(ButtonBase, { onClick: onOpen, ...slotProps?.button, sx: [
                    (theme) => ({
                        pr: 1,
                        pl: 1.5,
                        gap: 1.5,
                        height: 34,
                        borderRadius: 1,
                        typography: 'subtitle2',
                        border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
                    }),
                    ...(Array.isArray(slotProps?.button?.sx) ? slotProps.button.sx : [slotProps?.button?.sx]),
                ], ...other, children: [value, _jsx(Iconify, { width: 16, icon: open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill' })] }), renderMenuActions()] }));
}
