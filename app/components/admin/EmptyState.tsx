"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Iconify } from "../../../packages/my-saas-components/src/iconify";

interface EmptyStateProps {
  icon?: string;
  message?: string;
}

export default function EmptyState({
  icon = "solar:inbox-line-bold-duotone",
  message = "No items found",
}: EmptyStateProps) {
  return (
    <Box textAlign="center" py={6}>
      <Iconify icon={icon} width={80} color="grey.400" />
      <Typography variant="h6" color="text.secondary" mt={2}>
        {message}
      </Typography>
    </Box>
  );
}
