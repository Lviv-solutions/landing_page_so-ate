'use client';
import { styled } from "@mui/material/styles";
import { imageClasses } from "./classes";
// ----------------------------------------------------------------------
const placeholderImage = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJhZGlhbEdyYWRpZW50IGlkPSJhIiBjeD0iNTAlIiBjeT0iNDYuODAxMTAyJSIgcj0iOTUuNDk3MTEyJSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5MTllYWIiIHN0b3Atb3BhY2l0eT0iLjQ4Ii8+PC9yYWRpYWxHcmFkaWVudD48cGF0aCBkPSJtODggODZoNTEydjUxMmgtNTEyeiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODggLTg2KSIvPjwvc3ZnPg==";
const sharedStyles = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "inherit",
    aspectRatio: "inherit",
    borderRadius: "inherit",
};
function getEffectStyles(effect) {
    const { style = "blur", duration = 300 } = effect;
    return {
        [`& .${imageClasses.img}`]: {
            transition: `all ${duration}ms ease-in-out`,
            ...(style === "blur" && {
                filter: "blur(10px)",
                [`&.${imageClasses.state.loaded}`]: {
                    filter: "blur(0px)",
                },
            }),
            ...(style === "zoom" && {
                transform: "scale(1.1)",
                [`&.${imageClasses.state.loaded}`]: {
                    transform: "scale(1)",
                },
            }),
        },
    };
}
export const ImageRoot = styled("span", {
    shouldForwardProp: (prop) => !["effect", "sx"].includes(prop),
})(({ effect }) => ({
    maxWidth: "100%",
    overflow: "hidden",
    position: "relative",
    display: "inline-block",
    verticalAlign: "bottom",
    aspectRatio: "var(--aspect-ratio)",
    ...(effect && getEffectStyles(effect)),
}));
export const ImageImg = styled("img")(() => ({
    ...sharedStyles,
    objectFit: "cover",
}));
export const ImageOverlay = styled("span")({
    ...sharedStyles,
    zIndex: 1,
    position: "absolute",
});
export const ImagePlaceholder = styled("span")({
    ...sharedStyles,
    content: '""',
    position: "absolute",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${placeholderImage})`,
});
