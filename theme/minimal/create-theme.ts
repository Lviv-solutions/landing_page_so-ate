import { createTheme as createMuiTheme } from "@mui/material/styles";
import type { Theme, ThemeOptions } from "@mui/material/styles";
import { palette } from "./palette";
import { shadows, customShadows } from "./shadows";
import { typography } from "./typography";

declare module "@mui/material/styles" {
  interface Theme {
    customShadows: {
      card: string;
      primary: string;
      secondary: string;
      info: string;
      success: string;
      warning: string;
      error: string;
      dialog: string;
      dropdown: string;
    };
  }
  interface ThemeOptions {
    customShadows?: {
      card: string;
      primary: string;
      secondary: string;
      info: string;
      success: string;
      warning: string;
      error: string;
      dialog: string;
      dropdown: string;
    };
  }
}

export function createTheme(mode: "light" | "dark" = "light"): Theme {
  const themeOptions: ThemeOptions = {
    palette: {
      mode,
      ...palette[mode],
    },
    typography,
    shadows: shadows[mode] as any,
    customShadows: customShadows[mode],
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 8,
          },
          sizeLarge: {
            height: 48,
            fontSize: "0.9375rem",
          },
          sizeMedium: {
            height: 40,
          },
          sizeSmall: {
            height: 32,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            position: "relative",
            zIndex: 0,
          },
        },
      },
      MuiCardHeader: {
        styleOverrides: {
          root: {
            padding: "24px 24px 0",
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: 24,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 8,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            "& fieldset": {
              borderColor:
                mode === "light"
                  ? palette.light.grey[300]
                  : palette.dark.grey[300],
            },
            "&:hover fieldset": {
              borderColor:
                mode === "light"
                  ? palette.light.grey[400]
                  : palette.dark.grey[400],
            },
            "&.Mui-focused fieldset": {
              borderWidth: 1,
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          paragraph: {
            marginBottom: 16,
          },
          gutterBottom: {
            marginBottom: 8,
          },
        },
      },
    },
  };

  return createMuiTheme(themeOptions);
}
