"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Stack,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Iconify } from "../../../packages/my-saas-components/src/iconify";
import { loginAsAdmin, isAdminLoggedIn } from "../../../lib/auth";
import { webClientAuthService } from "../../../lib/auth-service";
import { useTranslation } from "../../hooks/useTranslation";
import { useEffect } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const { t, locale } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isArabic = locale === "ar";

  useEffect(() => {
    if (isAdminLoggedIn()) {
      router.push(`/${locale}/admin/claims`);
    }
  }, [router, locale]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (formData.email && formData.password) {
        const result = await webClientAuthService.login({
          email: formData.email,
          password: formData.password,
        });
        if (!result.success) {
          setError(result.message ?? "Login failed");
          return;
        }
        const userJson = typeof window !== "undefined" ? localStorage.getItem("auth_user") : null;
        const user = userJson ? (JSON.parse(userJson) as { id?: string; username?: string }) : null;
        loginAsAdmin(user?.id ?? "", formData.email, user?.username ?? "Admin User");
        router.push(`/${locale}/admin/claims`);
      } else {
        setError("Please enter both email and password");
      }
    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#FAFAFA",
        backgroundImage: "linear-gradient(135deg, #ED614A 0%, #E6446F 50%, #FF6B35 100%)",
        position: "relative",
        overflow: "hidden",
      }}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.1)",
          filter: "blur(60px)",
          animation: "float 6s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-20px)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.1)",
          filter: "blur(80px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <Card
        sx={{
          maxWidth: 450,
          width: "100%",
          mx: 2,
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          borderRadius: 3,
          position: "relative",
          zIndex: 1,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Stack spacing={3}>
            {/* Logo and Title */}
            <Stack spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #ED614A 0%, #E6446F 50%, #FF6B35 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 30px rgba(237, 97, 74, 0.4)",
                }}
              >
                <Iconify icon="solar:shield-user-bold" width={40} color="white" />
              </Box>
              <Typography variant="h4" fontWeight="bold" textAlign="center">
                {t("admin.loginTitle") || "Admin Login"}
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="center">
                {t("admin.loginSubtitle") || "Sign in to access the admin control panel"}
              </Typography>
            </Stack>

            {/* Error Alert */}
            {error && (
              <Alert
                severity="error"
                icon={<Iconify icon="solar:danger-circle-bold" />}
                onClose={() => setError(null)}
              >
                {error}
              </Alert>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label={t("admin.email") || "Email Address"}
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Iconify icon="solar:letter-bold" color="action.active" />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label={t("admin.password") || "Password"}
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Iconify icon="solar:lock-password-bold" color="action.active" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          <Iconify
                            icon={
                              showPassword
                                ? "solar:eye-bold"
                                : "solar:eye-closed-bold"
                            }
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  disabled={isLoading}
                  sx={{
                    background: "linear-gradient(135deg, #ED614A 0%, #E6446F 50%, #FF6B35 100%)",
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "linear-gradient(135deg, #DC5039 0%, #D5335E 50%, #EE5A24 100%)",
                    },
                  }}
                >
                  {isLoading ? (
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Iconify icon="svg-spinners:ring-resize" width={20} />
                      <span>{t("admin.signingIn") || "Signing In..."}</span>
                    </Stack>
                  ) : (
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Iconify icon="solar:login-3-bold" width={20} />
                      <span>{t("admin.signIn") || "Sign In"}</span>
                    </Stack>
                  )}
                </Button>
              </Stack>
            </form>

            {/* Footer */}
            <Box sx={{ textAlign: "center", pt: 2 }}>
              <Typography variant="caption" color="text.secondary">
                {t("admin.loginFooter") || "Authorized personnel only"}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
