'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useCallback } from 'react';
import { hasKeys, varAlpha } from 'minimal-shared/utils';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useColorScheme } from '@mui/material/styles';
import { themeConfig } from 'src/theme/theme-config';
import { primaryColorPresets } from 'src/theme/with-settings';
import { Label } from '../../label';
import { settingIcons } from './icons';
import { Iconify } from '../../iconify';
import { BaseOption } from './base-option';
import { Scrollbar } from '../../scrollbar';
import { SmallBlock, LargeBlock } from './styles';
import { PresetsOptions } from './presets-options';
import { FullScreenButton } from './fullscreen-button';
import { FontSizeOptions, FontFamilyOptions } from './font-options';
import { useSettingsContext } from '../context/use-settings-context';
import { NavColorOptions, NavLayoutOptions } from './nav-layout-option';
// ----------------------------------------------------------------------
export function SettingsDrawer({ sx, defaultSettings }) {
    const settings = useSettingsContext();
    const { mode, setMode, colorScheme } = useColorScheme();
    // Visible options by default settings
    const visibility = {
        mode: hasKeys(defaultSettings, ['mode']),
        contrast: hasKeys(defaultSettings, ['contrast']),
        navColor: hasKeys(defaultSettings, ['navColor']),
        fontSize: hasKeys(defaultSettings, ['fontSize']),
        direction: hasKeys(defaultSettings, ['direction']),
        navLayout: hasKeys(defaultSettings, ['navLayout']),
        fontFamily: hasKeys(defaultSettings, ['fontFamily']),
        primaryColor: hasKeys(defaultSettings, ['primaryColor']),
        compactLayout: hasKeys(defaultSettings, ['compactLayout']),
    };
    useEffect(() => {
        if (mode !== undefined && mode !== settings.state.mode) {
            settings.setState({ mode });
        }
    }, [mode, settings]);
    const handleReset = useCallback(() => {
        settings.onReset();
        setMode(null);
    }, [setMode, settings]);
    const renderHead = () => (_jsxs(Box, { sx: {
            py: 2,
            pr: 1,
            pl: 2.5,
            display: 'flex',
            alignItems: 'center',
        }, children: [_jsx(Typography, { variant: "h6", sx: { flexGrow: 1 }, children: "Settings" }), _jsx(FullScreenButton, {}), _jsx(Tooltip, { title: "Reset all", children: _jsx(IconButton, { onClick: handleReset, children: _jsx(Badge, { color: "error", variant: "dot", invisible: !settings.canReset, children: _jsx(Iconify, { icon: "solar:restart-bold" }) }) }) }), _jsx(Tooltip, { title: "Close", children: _jsx(IconButton, { onClick: settings.onCloseDrawer, children: _jsx(Iconify, { icon: "mingcute:close-line" }) }) })] }));
    const renderMode = () => (_jsx(BaseOption, { label: "Mode", selected: settings.state.mode === 'dark', icon: _jsx(SvgIcon, { children: settingIcons.moon }), action: mode === 'system' ? (_jsx(Label, { sx: {
                height: 20,
                cursor: 'inherit',
                borderRadius: '20px',
                fontWeight: 'fontWeightSemiBold',
            }, children: "System" })) : null, onChangeOption: () => {
            setMode(colorScheme === 'light' ? 'dark' : 'light');
            settings.setState({ mode: colorScheme === 'light' ? 'dark' : 'light' });
        } }));
    const renderContrast = () => (_jsx(BaseOption, { label: "Contrast", selected: settings.state.contrast === 'high', icon: _jsx(SvgIcon, { children: settingIcons.contrast }), onChangeOption: () => {
            settings.setState({
                contrast: settings.state.contrast === 'default' ? 'high' : 'default',
            });
        } }));
    const renderDirection = () => (_jsx(BaseOption, { label: "Right to left", selected: settings.state.direction === 'rtl', icon: _jsx(SvgIcon, { children: settingIcons.alignRight }), onChangeOption: () => {
            settings.setState({ direction: settings.state.direction === 'ltr' ? 'rtl' : 'ltr' });
        } }));
    const renderCompactLayout = () => (_jsx(BaseOption, { tooltip: "Dashboard only and available at large resolutions > 1600px (xl)", label: "Compact", selected: !!settings.state.compactLayout, icon: _jsx(SvgIcon, { children: settingIcons.autofitWidth }), onChangeOption: () => {
            settings.setState({ compactLayout: !settings.state.compactLayout });
        } }));
    const renderPresets = () => (_jsx(LargeBlock, { title: "Presets", canReset: settings.state.primaryColor !== defaultSettings.primaryColor, onReset: () => {
            settings.setState({ primaryColor: defaultSettings.primaryColor });
        }, children: _jsx(PresetsOptions, { icon: _jsx(SvgIcon, { sx: { width: 28, height: 28 }, children: settingIcons.siderbarDuotone }), options: Object.keys(primaryColorPresets).map((key) => ({
                name: key,
                value: primaryColorPresets[key].main,
            })), value: settings.state.primaryColor, onChangeOption: (newOption) => {
                settings.setState({ primaryColor: newOption });
            } }) }));
    const renderNav = () => (_jsxs(LargeBlock, { title: "Nav", tooltip: "Dashboard only", sx: { gap: 2.5 }, children: [visibility.navLayout && (_jsx(SmallBlock, { label: "Layout", canReset: settings.state.navLayout !== defaultSettings.navLayout, onReset: () => {
                    settings.setState({ navLayout: defaultSettings.navLayout });
                }, children: _jsx(NavLayoutOptions, { value: settings.state.navLayout, onChangeOption: (newOption) => {
                        settings.setState({ navLayout: newOption });
                    }, options: [
                        {
                            value: 'vertical',
                            icon: (_jsx(SvgIcon, { sx: { width: 1, height: 'auto' }, children: settingIcons.navVertical })),
                        },
                        {
                            value: 'horizontal',
                            icon: (_jsx(SvgIcon, { sx: { width: 1, height: 'auto' }, children: settingIcons.navHorizontal })),
                        },
                        {
                            value: 'mini',
                            icon: _jsx(SvgIcon, { sx: { width: 1, height: 'auto' }, children: settingIcons.navMini }),
                        },
                    ] }) })), visibility.navColor && (_jsx(SmallBlock, { label: "Color", canReset: settings.state.navColor !== defaultSettings.navColor, onReset: () => {
                    settings.setState({ navColor: defaultSettings.navColor });
                }, children: _jsx(NavColorOptions, { value: settings.state.navColor, onChangeOption: (newOption) => {
                        settings.setState({ navColor: newOption });
                    }, options: [
                        {
                            label: 'Integrate',
                            value: 'integrate',
                            icon: _jsx(SvgIcon, { children: settingIcons.sidebarOutline }),
                        },
                        {
                            label: 'Apparent',
                            value: 'apparent',
                            icon: _jsx(SvgIcon, { children: settingIcons.sidebarFill }),
                        },
                    ] }) }))] }));
    const renderFont = () => (_jsxs(LargeBlock, { title: "Font", sx: { gap: 2.5 }, children: [visibility.fontFamily && (_jsx(SmallBlock, { label: "Family", canReset: settings.state.fontFamily !== defaultSettings.fontFamily, onReset: () => {
                    settings.setState({ fontFamily: defaultSettings.fontFamily });
                }, children: _jsx(FontFamilyOptions, { value: settings.state.fontFamily, onChangeOption: (newOption) => {
                        settings.setState({ fontFamily: newOption });
                    }, options: [
                        themeConfig.fontFamily.primary,
                        'Inter Variable',
                        'DM Sans Variable',
                        'Nunito Sans Variable',
                    ], icon: _jsx(SvgIcon, { sx: { width: 28, height: 28 }, children: settingIcons.font }) }) })), visibility.fontSize && (_jsx(SmallBlock, { label: "Size", canReset: settings.state.fontSize !== defaultSettings.fontSize, onReset: () => {
                    settings.setState({ fontSize: defaultSettings.fontSize });
                }, sx: { gap: 5 }, children: _jsx(FontSizeOptions, { options: [12, 20], value: settings.state.fontSize, onChangeOption: (newOption) => {
                        settings.setState({ fontSize: newOption });
                    } }) }))] }));
    return (_jsxs(Drawer, { anchor: "right", open: settings.openDrawer, onClose: settings.onCloseDrawer, slotProps: {
            backdrop: { invisible: true },
            paper: {
                sx: [
                    (theme) => ({
                        ...theme.mixins.paperStyles(theme, {
                            color: varAlpha(theme.vars.palette.background.defaultChannel, 0.9),
                        }),
                        width: 360,
                    }),
                    ...(Array.isArray(sx) ? sx : [sx]),
                ],
            },
        }, children: [renderHead(), _jsx(Scrollbar, { children: _jsxs(Box, { sx: {
                        pb: 5,
                        gap: 6,
                        px: 2.5,
                        display: 'flex',
                        flexDirection: 'column',
                    }, children: [_jsxs(Box, { sx: { gap: 2, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }, children: [visibility.mode && renderMode(), visibility.contrast && renderContrast(), visibility.direction && renderDirection(), visibility.compactLayout && renderCompactLayout()] }), (visibility.navColor || visibility.navLayout) && renderNav(), visibility.primaryColor && renderPresets(), (visibility.fontFamily || visibility.fontSize) && renderFont()] }) })] }));
}
