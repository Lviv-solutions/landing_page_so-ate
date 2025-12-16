import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';

export type UploadIllustrationProps = BoxProps & {
  hideBackground?: boolean;
};

export function UploadIllustration({ hideBackground, sx, ...other }: UploadIllustrationProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      viewBox="0 0 480 360"
      xmlns="http://www.w3.org/2000/svg"
      sx={sx}
      {...other}
    >
      {!hideBackground && (
        <defs>
          <linearGradient id="BG" x1="19.496%" x2="77.479%" y1="71.822%" y2="16.69%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.16" />
          </linearGradient>
        </defs>
      )}
      
      {!hideBackground && (
        <path
          fill="url(#BG)"
          d="M0 198.78c0 41.458 14.945 79.236 39.539 107.786 28.214 32.765 69.128 53.365 114.734 53.434a148.44 148.44 0 0056.495-11.036c9.051-3.699 19.182-3.274 27.948 1.107a75.779 75.779 0 0033.957 8.01c5.023 0 9.942-.494 14.7-1.433 13.58-2.67 25.94-8.99 36.09-17.94 6.378-5.627 14.547-8.456 22.897-8.446h.142c27.589 0 53.215-8.732 74.492-23.696 19.021-13.358 34.554-31.54 44.904-52.867C485.798 222.16 480 191.02 480 198.78c0-109.564-88.436-198-198-198S84 89.216 84 198.78z"
        />
      )}

      <path
        fill="currentColor"
        fillOpacity="0.24"
        fillRule="evenodd"
        d="M221.25 190.5V79.5h37.5v111h111v37.5h-111v111h-37.5v-111h-111v-37.5z"
        clipRule="evenodd"
      />
    </Box>
  );
}
