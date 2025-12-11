'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import Portal from '@mui/material/Portal';
import { Iconify } from '../iconify';
import { SnackbarRoot } from './styles';
import { snackbarClasses } from './classes';
// ----------------------------------------------------------------------
export function Snackbar() {
    return (_jsx(Portal, { children: _jsx(SnackbarRoot, { expand: true, closeButton: true, gap: 12, offset: 16, visibleToasts: 4, position: "top-right", className: snackbarClasses.root, toastOptions: {
                unstyled: true,
                classNames: {
                    toast: snackbarClasses.toast,
                    icon: snackbarClasses.icon,
                    loader: snackbarClasses.loader,
                    loading: snackbarClasses.loading,
                    /********/
                    content: snackbarClasses.content,
                    title: snackbarClasses.title,
                    description: snackbarClasses.description,
                    /********/
                    closeButton: snackbarClasses.closeButton,
                    actionButton: snackbarClasses.actionButton,
                    cancelButton: snackbarClasses.cancelButton,
                    /********/
                    info: snackbarClasses.info,
                    error: snackbarClasses.error,
                    success: snackbarClasses.success,
                    warning: snackbarClasses.warning,
                },
            }, icons: {
                loading: _jsx("span", { className: snackbarClasses.loadingIcon }),
                info: _jsx(Iconify, { className: snackbarClasses.iconSvg, icon: "solar:info-circle-bold" }),
                success: _jsx(Iconify, { className: snackbarClasses.iconSvg, icon: "solar:check-circle-bold" }),
                warning: (_jsx(Iconify, { className: snackbarClasses.iconSvg, icon: "solar:danger-triangle-bold" })),
                error: _jsx(Iconify, { className: snackbarClasses.iconSvg, icon: "solar:danger-bold" }),
            } }) }));
}
