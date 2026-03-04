"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

import { Iconify } from "../../../packages/my-saas-components/src/iconify";
import { useTranslation } from "../../hooks/useTranslation";
import { logoutAdmin } from "../../../lib/auth";
import { webClientAuthService } from "../../../lib/auth-service";
import { AdminInfo } from "../../types/admin";

interface NavButton {
  label: string;
  icon: string;
  path: string;
}

interface AdminPageLayoutProps {
  children: React.ReactNode;
  adminInfo: AdminInfo | null;
  navButtons?: NavButton[];
  successMessage?: string | null;
  onClearSuccess?: () => void;
}

export default function AdminPageLayout({
  children,
  adminInfo,
  navButtons = [],
  successMessage,
  onClearSuccess,
}: AdminPageLayoutProps) {
  const router = useRouter();
  const { t, locale } = useTranslation();
  const isArabic = locale === "ar";

  const toggleLocale = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split("/").filter(Boolean);
    pathSegments[0] = newLocale;
    router.push("/" + pathSegments.join("/"));
  };

  const handleLogout = () => {
    logoutAdmin();
    webClientAuthService.logout();
    router.push(`/${locale}/admin`);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#FAFAFA",
        position: "relative",
      }}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 3, md: 6 },
          py: 3,
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Image
            src="/assets/admin-console/Icon.svg"
            alt="So-Eat Business"
            width={48}
            height={48}
          />
          <Stack>
            <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
              {t("brand.name")} - Admin Panel
            </Typography>
            {adminInfo && (
              <Typography variant="caption" color="text.secondary">
                {adminInfo.email || adminInfo.name || adminInfo.id}
              </Typography>
            )}
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          {navButtons.map((btn) => (
            <Button
              key={btn.path}
              variant="outlined"
              startIcon={<Iconify icon={btn.icon} />}
              onClick={() => router.push(`/${locale}/admin/${btn.path}`)}
            >
              {btn.label}
            </Button>
          ))}
          <Box
            component="button"
            onClick={toggleLocale}
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
            <Typography sx={{ fontSize: "0.875rem", fontWeight: 500, color: "#6B7280" }}>
              {locale === "ar" ? "العربية" : "English"}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            color="error"
            startIcon={<Iconify icon="solar:logout-2-bold" />}
            onClick={handleLogout}
            sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600 }}
          >
            Logout
          </Button>
        </Stack>
      </Box>

      <Box sx={{ maxWidth: "1400px", mx: "auto", px: { xs: 3, md: 6 }, py: 4 }}>
        <Stack spacing={3}>
          {successMessage && (
            <Alert
              severity="success"
              onClose={onClearSuccess}
              icon={<Iconify icon="solar:check-circle-bold" />}
            >
              {successMessage}
            </Alert>
          )}
          {children}
        </Stack>
      </Box>
    </Box>
  );
}
