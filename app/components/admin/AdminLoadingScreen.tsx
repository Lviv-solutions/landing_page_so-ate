"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

interface AdminLoadingScreenProps {
  message?: string;
}

export default function AdminLoadingScreen({ message = "Loading..." }: AdminLoadingScreenProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
      }}
    >
      <Stack spacing={2} alignItems="center">
        <CircularProgress size={64} />
        <Typography color="text.secondary">{message}</Typography>
      </Stack>
    </Box>
  );
}
