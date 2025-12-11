"use client";
import { styled } from "@mui/material/styles";
// ----------------------------------------------------------------------
const colorVariants = {
    primary: {
        filled: {
            color: "#fff",
            backgroundColor: "#1976d2"
        },
        soft: {
            color: "#1976d2",
            backgroundColor: "rgba(25, 118, 210, 0.12)"
        },
        outlined: {
            color: "#1976d2",
            border: "1px solid rgba(25, 118, 210, 0.5)"
        },
        inverted: {
            color: "#1976d2",
            backgroundColor: "#fff"
        },
    },
    secondary: {
        filled: {
            color: "#fff",
            backgroundColor: "#9c27b0"
        },
        soft: {
            color: "#9c27b0",
            backgroundColor: "rgba(156, 39, 176, 0.12)"
        },
        outlined: {
            color: "#9c27b0",
            border: "1px solid rgba(156, 39, 176, 0.5)"
        },
        inverted: {
            color: "#9c27b0",
            backgroundColor: "#fff"
        },
    },
    info: {
        filled: {
            color: "#fff",
            backgroundColor: "#0288d1"
        },
        soft: {
            color: "#0288d1",
            backgroundColor: "rgba(2, 136, 209, 0.12)"
        },
        outlined: {
            color: "#0288d1",
            border: "1px solid rgba(2, 136, 209, 0.5)"
        },
        inverted: {
            color: "#0288d1",
            backgroundColor: "#fff"
        },
    },
    success: {
        filled: {
            color: "#fff",
            backgroundColor: "#2e7d32"
        },
        soft: {
            color: "#2e7d32",
            backgroundColor: "rgba(46, 125, 50, 0.12)"
        },
        outlined: {
            color: "#2e7d32",
            border: "1px solid rgba(46, 125, 50, 0.5)"
        },
        inverted: {
            color: "#2e7d32",
            backgroundColor: "#fff"
        },
    },
    warning: {
        filled: {
            color: "#fff",
            backgroundColor: "#ed6c02"
        },
        soft: {
            color: "#ed6c02",
            backgroundColor: "rgba(237, 108, 2, 0.12)"
        },
        outlined: {
            color: "#ed6c02",
            border: "1px solid rgba(237, 108, 2, 0.5)"
        },
        inverted: {
            color: "#ed6c02",
            backgroundColor: "#fff"
        },
    },
    error: {
        filled: {
            color: "#fff",
            backgroundColor: "#d32f2f"
        },
        soft: {
            color: "#d32f2f",
            backgroundColor: "rgba(211, 47, 47, 0.12)"
        },
        outlined: {
            color: "#d32f2f",
            border: "1px solid rgba(211, 47, 47, 0.5)"
        },
        inverted: {
            color: "#d32f2f",
            backgroundColor: "#fff"
        },
    },
    default: {
        filled: {
            color: "#fff",
            backgroundColor: "#637381"
        },
        soft: {
            color: "#637381",
            backgroundColor: "rgba(99, 115, 129, 0.12)"
        },
        outlined: {
            color: "#637381",
            border: "1px solid rgba(99, 115, 129, 0.5)"
        },
        inverted: {
            color: "#637381",
            backgroundColor: "#fff"
        },
    },
};
export const LabelRoot = styled("span", {
    shouldForwardProp: (prop) => !["color", "variant", "disabled", "sx"].includes(prop),
})(({ theme, variant = "soft", color = "default", disabled }) => ({
    height: 24,
    minWidth: 24,
    flexShrink: 0,
    lineHeight: 18 / 12,
    cursor: "default",
    alignItems: "center",
    whiteSpace: "nowrap",
    display: "inline-flex",
    gap: theme.spacing(0.75),
    justifyContent: "center",
    padding: theme.spacing(0, 0.75),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightBold,
    borderRadius: Number(theme.shape.borderRadius) * 0.75,
    transition: theme.transitions.create(["color", "background-color", "border-color"], {
        duration: theme.transitions.duration.shorter,
    }),
    ...colorVariants[color][variant],
    ...(disabled && {
        opacity: 0.48,
        pointerEvents: "none",
    }),
}));
export const LabelIcon = styled("span")(({ theme }) => ({
    width: 16,
    height: 16,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
        width: "100%",
        height: "100%",
        flexShrink: 0,
    },
}));
