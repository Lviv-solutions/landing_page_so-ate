"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useCallback, startTransition } from "react";
import { useInView } from "framer-motion";
import { imageClasses } from "./classes";
import { ImageImg, ImageRoot, ImageOverlay, ImagePlaceholder } from "./styles";
const DEFAULT_DELAY = 0;
const DEFAULT_EFFECT = {
    style: "blur",
    duration: 300,
    disabled: false,
};
export function Image({ sx, src, ref, ratio, onLoad, effect, alt = "", slotProps, className, viewportOptions, disablePlaceholder, visibleByDefault = false, delayTime = DEFAULT_DELAY, ...other }) {
    const localRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const isInView = useInView(localRef, {
        once: true,
        ...viewportOptions,
    });
    const handleImageLoad = useCallback(() => {
        const timer = setTimeout(() => {
            startTransition(() => {
                setIsLoaded(true);
                onLoad?.();
            });
        }, delayTime);
        return () => clearTimeout(timer);
    }, [delayTime, onLoad]);
    const finalEffect = {
        ...DEFAULT_EFFECT,
        ...effect,
    };
    const shouldRenderImage = visibleByDefault || isInView;
    const showPlaceholder = !visibleByDefault && !isLoaded && !disablePlaceholder;
    // Simple class merging without external dependency
    const mergedClassName = [imageClasses.root, className]
        .filter(Boolean)
        .join(" ");
    const imgClassName = [
        imageClasses.img,
        !visibleByDefault && isLoaded ? imageClasses.state.loaded : "",
    ]
        .filter(Boolean)
        .join(" ");
    const renderComponents = {
        overlay: () => slotProps?.overlay && (_jsx(ImageOverlay, { className: imageClasses.overlay, ...slotProps.overlay })),
        placeholder: () => showPlaceholder && (_jsx(ImagePlaceholder, { className: imageClasses.placeholder, ...slotProps?.placeholder })),
        image: () => (_jsx(ImageImg, { src: src, alt: alt, onLoad: handleImageLoad, className: imgClassName, ...slotProps?.img })),
    };
    return (_jsxs(ImageRoot, { ref: (node) => {
            // Simple ref merging
            if (localRef.current !== node) {
                localRef.current = node;
            }
            if (typeof ref === "function") {
                ref(node);
            }
            else if (ref) {
                ref.current = node;
            }
        }, effect: visibleByDefault || finalEffect.disabled ? undefined : finalEffect, className: mergedClassName, sx: [
            {
                "--aspect-ratio": ratio,
                ...(!!ratio && { width: 1 }),
            },
            ...(Array.isArray(sx) ? sx : [sx]),
        ], ...other, children: [renderComponents.overlay(), renderComponents.placeholder(), shouldRenderImage && renderComponents.image()] }));
}
