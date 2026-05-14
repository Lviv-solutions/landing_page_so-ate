"use client";
import React from "react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

interface FormCardProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export default function FormCard({ children, sx }: FormCardProps) {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        border: "1px solid #E0E0E0",
        padding: "24px",
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        ...((sx as Record<string, unknown>) || {}),
      }}
    >
      {children}
    </Box>
  );
}
