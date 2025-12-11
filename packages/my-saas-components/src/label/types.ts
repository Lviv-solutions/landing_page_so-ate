import type React from "react";
import type { LabelRoot } from "./styles";

// ----------------------------------------------------------------------

export type LabelColor =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "default";

export type LabelVariant = "filled" | "outlined" | "soft" | "inverted";

export interface LabelProps extends React.ComponentProps<typeof LabelRoot> {
  disabled?: boolean;
  color?: LabelColor;
  variant?: LabelVariant;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
}
