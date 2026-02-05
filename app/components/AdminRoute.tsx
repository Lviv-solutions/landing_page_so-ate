"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAdmin } from "../../lib/auth";
import { Box, CircularProgress, Typography, Stack } from "@mui/material";

interface AdminRouteProps {
  children: React.ReactNode;
}

export default function AdminRoute({ children }: AdminRouteProps) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const adminStatus = isAdmin();
      setIsAuthorized(adminStatus);

      if (!adminStatus) {
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    };

    checkAuth();
  }, [router]);

  if (isAuthorized === null) {
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
          <Typography color="text.secondary">Checking authorization...</Typography>
        </Stack>
      </Box>
    );
  }

  if (!isAuthorized) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#FAFAFA",
        }}
      >
        <Stack spacing={3} alignItems="center" textAlign="center" px={3}>
          <Box
            sx={{
              fontSize: "6rem",
              filter: "grayscale(100%)",
            }}
          >
            🚫
          </Box>
          <Typography variant="h4" fontWeight="bold" color="error">
            Access Denied
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth={500}>
            You do not have permission to access this page. Admin privileges are required.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Redirecting to home page...
          </Typography>
        </Stack>
      </Box>
    );
  }

  return <>{children}</>;
}
