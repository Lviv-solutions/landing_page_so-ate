"use client";

import type { SvgColorProps } from "./types";
import React from "react";
import { styled } from "@mui/material/styles";
import { svgColorClasses } from "./classes";

// ----------------------------------------------------------------------

export function SvgColor({ src, className, sx, ...other }: SvgColorProps) {
  const mergedClassName = [svgColorClasses.root, className].filter(Boolean).join(" ");

  return (
    <SvgRoot
      className={mergedClassName}
      sx={[
        {
          mask: `url(${src}) no-repeat center / contain`,
          WebkitMask: `url(${src}) no-repeat center / contain`,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    />
  );
}

// ----------------------------------------------------------------------

const SvgRoot = styled("span")(() => ({
  width: 24,
  height: 24,
  flexShrink: 0,
  display: "inline-flex",
  backgroundColor: "currentColor",
}));
