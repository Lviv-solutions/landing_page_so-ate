'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { mergeClasses } from 'minimal-shared/utils';
import ReactLightbox, { useLightboxState } from 'yet-another-react-lightbox';
import Box from '@mui/material/Box';
import { Iconify } from '../iconify';
import { getPlugins } from './utils';
import { lightboxClasses } from './classes';
// ----------------------------------------------------------------------
export function Lightbox({ slides, disableZoom, disableVideo, disableTotal, disableCaptions, disableSlideshow, disableThumbnails, disableFullscreen, onGetCurrentIndex, className, ...other }) {
    const totalItems = slides ? slides.length : 0;
    return (_jsx(ReactLightbox, { slides: slides, animation: { swipe: 240 }, carousel: { finite: totalItems < 5 }, controller: { closeOnBackdropClick: true }, plugins: getPlugins({
            disableZoom,
            disableVideo,
            disableCaptions,
            disableSlideshow,
            disableThumbnails,
            disableFullscreen,
        }), on: {
            view: ({ index }) => {
                if (onGetCurrentIndex) {
                    onGetCurrentIndex(index);
                }
            },
        }, toolbar: {
            buttons: [
                _jsx(DisplayTotal, { totalItems: totalItems, disableTotal: disableTotal }, 0),
                'close',
            ],
        }, render: {
            iconClose: () => _jsx(Iconify, { width: 24, icon: "carbon:close" }),
            iconZoomIn: () => _jsx(Iconify, { width: 24, icon: "carbon:zoom-in" }),
            iconZoomOut: () => _jsx(Iconify, { width: 24, icon: "carbon:zoom-out" }),
            iconSlideshowPlay: () => _jsx(Iconify, { width: 24, icon: "carbon:play" }),
            iconSlideshowPause: () => _jsx(Iconify, { width: 24, icon: "carbon:pause" }),
            iconPrev: () => _jsx(Iconify, { width: 32, icon: "carbon:chevron-left" }),
            iconNext: () => _jsx(Iconify, { width: 32, icon: "carbon:chevron-right" }),
            iconExitFullscreen: () => _jsx(Iconify, { width: 24, icon: "carbon:center-to-fit" }),
            iconEnterFullscreen: () => _jsx(Iconify, { width: 24, icon: "carbon:fit-to-screen" }),
        }, className: mergeClasses([lightboxClasses.root, className]), ...other }));
}
function DisplayTotal({ totalItems, disableTotal }) {
    const { currentIndex } = useLightboxState();
    if (disableTotal) {
        return null;
    }
    return (_jsxs(Box, { component: "span", className: "yarl__button", sx: {
            typography: 'body2',
            alignItems: 'center',
            display: 'inline-flex',
            justifyContent: 'center',
        }, children: [_jsxs("strong", { children: [" ", currentIndex + 1, " "] }), " / ", totalItems] }));
}
