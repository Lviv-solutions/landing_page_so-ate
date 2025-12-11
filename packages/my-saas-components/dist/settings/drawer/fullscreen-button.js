'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { Iconify } from '../../iconify';
// ----------------------------------------------------------------------
export function FullScreenButton() {
    const [fullscreen, setFullscreen] = useState(false);
    const handleToggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setFullscreen(true);
        }
        else if (document.exitFullscreen) {
            document.exitFullscreen();
            setFullscreen(false);
        }
    }, []);
    return (_jsx(Tooltip, { title: fullscreen ? 'Exit' : 'Fullscreen', children: _jsx(IconButton, { onClick: handleToggleFullscreen, color: fullscreen ? 'primary' : 'default', children: _jsx(Iconify, { icon: fullscreen
                    ? 'solar:quit-full-screen-square-outline'
                    : 'solar:full-screen-square-outline' }) }) }));
}
