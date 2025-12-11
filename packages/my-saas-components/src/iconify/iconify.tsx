"use client";

import type { IconProps } from "@iconify/react";
import React, { useId } from "react";

import { Icon } from "@iconify/react";
import { styled } from "@mui/material/styles";

import type { IconifyName } from "./register-icons";
import { iconifyClasses } from "./classes";
import { allIconNames, registerIcons } from "./register-icons";

// ----------------------------------------------------------------------

export type IconifyProps = React.ComponentProps<typeof IconRoot> &
  Omit<IconProps, "icon"> & {
    icon: IconifyName | string; // Allow both registered and online icons
  };

export function Iconify({ className, icon, width = 20, height, sx, ...other }: IconifyProps) {
  const uniqueId = useId();

  if (!allIconNames.includes(icon as IconifyName)) {
    console.warn(
      [
        `Icon "${icon}" is currently loaded online, which may cause flickering effects.`,
        `To ensure a smoother experience, please register your icon collection for offline use.`,
        `More information is available at: https://docs.minimals.cc/icons/`,
      ].join("\n")
    );
  }

  registerIcons();

  const mergedClassName = [iconifyClasses.root, className].filter(Boolean).join(" ");

  return (
    <IconRoot
      ssr
      id={uniqueId}
      icon={icon}
      className={mergedClassName}
      sx={[
        {
          width,
          flexShrink: 0,
          height: height ?? width,
          display: "inline-flex",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    />
  );
}

// ----------------------------------------------------------------------

const IconRoot = styled(Icon)``;
