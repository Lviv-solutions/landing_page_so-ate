"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Iconify } from "../../../packages/my-saas-components/src/iconify";

interface LocaleToggleButtonProps {
  locale: string;
  onToggle: () => void;
}

export default function LocaleToggleButton({ locale, onToggle }: LocaleToggleButtonProps) {
  return (
    <Box
      component="button"
      onClick={onToggle}
      sx={{
        border: "none",
        background: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 1,
        padding: "8px 12px",
        borderRadius: 1,
        transition: "all 0.2s",
        "&:hover": {
          bgcolor: "rgba(0, 0, 0, 0.04)",
        },
      }}
    >
      <Iconify
        icon={
          locale === "ar"
            ? "twemoji:flag-saudi-arabia"
            : "twemoji:flag-united-states"
        }
        width={20}
      />
      <Typography
        sx={{
          fontSize: "0.875rem",
          fontWeight: 500,
          color: "#6B7280",
        }}
      >
        {locale === "ar" ? "العربية" : "English"}
      </Typography>
    </Box>
  );
}
