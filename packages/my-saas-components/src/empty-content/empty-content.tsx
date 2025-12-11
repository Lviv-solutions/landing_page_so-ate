"use client";

import type { BoxProps } from "@mui/material/Box";
import type { Theme, SxProps } from "@mui/material/styles";
import type { TypographyProps } from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

// ----------------------------------------------------------------------

export type EmptyContentProps = React.ComponentProps<"div"> & {
  title?: string;
  imgUrl?: string;
  filled?: boolean;
  sx?: SxProps<Theme>;
  description?: string;
  action?: React.ReactNode;
  slotProps?: {
    img?: BoxProps<"img">;
    title?: TypographyProps;
    description?: TypographyProps;
  };
};

export function EmptyContent({
  sx,
  imgUrl,
  action,
  filled,
  slotProps,
  description,
  title = "No data",
  ...other
}: EmptyContentProps) {
  // Default empty content icon - can be overridden via imgUrl prop
  const defaultImgUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE2MCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiBmaWxsPSIjRjRGNkY4Ii8+CjxwYXRoIGQ9Ik04MCA0MEw4MCA4MEw0MCA4MEw0MCA0MEw4MCA0MFoiIGZpbGw9IiNEREUzRUEiLz4KPHN2Zz4K";

  return (
    <ContentRoot filled={filled} sx={sx} {...other}>
      <Box
        component="img"
        alt="Empty content"
        src={imgUrl ?? defaultImgUrl}
        {...slotProps?.img}
        sx={[
          {
            width: 1,
            maxWidth: 160,
          },
          ...(Array.isArray(slotProps?.img?.sx) ? slotProps.img.sx : [slotProps?.img?.sx]),
        ]}
      />

      {title && (
        <Typography
          variant="h6"
          {...slotProps?.title}
          sx={[
            {
              mt: 1,
              textAlign: "center",
              color: "text.disabled",
            },
            ...(Array.isArray(slotProps?.title?.sx) ? slotProps.title.sx : [slotProps?.title?.sx]),
          ]}
        >
          {title}
        </Typography>
      )}

      {description && (
        <Typography
          variant="body2"
          {...slotProps?.description}
          sx={[
            {
              mt: 1,
              textAlign: "center",
              color: "text.disabled",
            },
            ...(Array.isArray(slotProps?.description?.sx)
              ? slotProps.description.sx
              : [slotProps?.description?.sx]),
          ]}
        >
          {description}
        </Typography>
      )}

      {action && action}
    </ContentRoot>
  );
}

// ----------------------------------------------------------------------

const ContentRoot = styled("div", {
  shouldForwardProp: (prop: string) => !["filled", "sx"].includes(prop),
})<Pick<EmptyContentProps, "filled">>(({ filled, theme }) => ({
  flexGrow: 1,
  height: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(0, 3),
  ...(filled && {
    borderRadius: Number(theme.shape.borderRadius) * 2,
    backgroundColor: theme.palette.action.hover,
    border: `dashed 1px ${theme.palette.divider}`,
  }),
}));
