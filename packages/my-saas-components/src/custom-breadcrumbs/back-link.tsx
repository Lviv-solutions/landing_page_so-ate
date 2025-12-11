import type { LinkProps } from "@mui/material/Link";
import React from "react";
import Link from "@mui/material/Link";
import { Iconify, iconifyClasses } from "../iconify";

// ----------------------------------------------------------------------

export type BackLinkProps = LinkProps & {
  label?: string;
  component?: React.ElementType;
};

export function BackLink({ sx, label, component, ...other }: BackLinkProps) {
  return (
    <Link
      component={component || "a"}
      color="inherit"
      underline="none"
      sx={[
        (theme) => ({
          verticalAlign: "middle",
          [`& .${iconifyClasses.root}`]: {
            verticalAlign: "inherit",
            transform: "translateY(-2px)",
            ml: {
              xs: "-14px",
              md: "-18px",
            },
            mr: {
              xs: "4px",
              md: "6px",
            },
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Iconify icon="eva:arrow-ios-back-fill" width={16} />
      {label}
    </Link>
  );
}
