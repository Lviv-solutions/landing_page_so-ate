"use client";
import React, { ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "./minimal";
import { EmotionCacheProvider } from "./EmotionCacheProvider";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = createTheme("light");

  return (
    <EmotionCacheProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </EmotionCacheProvider>
  );
}
