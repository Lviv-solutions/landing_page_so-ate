"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import CircularProgress from "@mui/material/CircularProgress";

import { Iconify } from "@my-saas/components";
import { useTranslation } from "../../../hooks/useTranslation";
import businessService, {
  type Business,
} from "../../../../services/businessService";
import Navigation from "../../../../components/Navigation";

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<Business | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);
  const router = useRouter();
  const { t, locale } = useTranslation();
  const isArabic = locale === "ar";

  useEffect(() => {
    // Temporarily disabled authentication check for testing
    // const token = localStorage.getItem("auth_token");
    // if (!token) {
    //   router.push("/login");
    // } else {
    //   setIsAuthenticated(true);
    // }
    setIsAuthenticated(true);
    setIsLoading(false);
  }, [router]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setSearchError(
        t("dashboard.searchError") || "Please enter a search term"
      );
      return;
    }

    setIsSearching(true);
    setSearchError(null);
    setSearchResult(null);

    try {
      const result = await businessService.searchByName(searchQuery, isArabic);

      if (result.found && result.business) {
        setSearchResult(result.business);
      } else {
        setSearchError(t("dashboard.notFound") || "Business not found");
      }
    } catch (error) {
      console.error("Search error:", error);
      setSearchError(
        t("dashboard.searchFailed") || "Search failed. Please try again."
      );
    } finally {
      setIsSearching(false);
    }
  };

  if (isLoading) {
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
          <Box
            sx={{
              width: 128,
              height: 128,
              border: "2px solid",
              borderColor: "primary.main",
              borderTopColor: "transparent",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              "@keyframes spin": {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
              },
            }}
          />
          <Typography color="text.secondary">{t("common.loading")}</Typography>
        </Stack>
      </Box>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <Navigation locale={locale} />

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          px: { xs: 4, md: 8, lg: 12 },
          py: { xs: 12, md: 8 },
          gap: { xs: 6, md: 10, lg: 16 },
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        {/* Right Side - Illustration */}
        <Box
          sx={{
            flex: { xs: "none", md: 1 },
            maxWidth: { xs: "100%", md: "550px" },
            display: "flex",
            justifyContent: "center",
            position: "relative",
            order: { xs: 2, md: 2 },
          }}
        >
          {/* Info Badge */}
          <Card
            sx={{
              position: "absolute",
              top: { xs: 80, md: 100 },
              right: { xs: 0, md: 40 },
              zIndex: 2,
              minWidth: { xs: 160, md: 200 },
            }}
          >
            <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ fontWeight: 500 }}
              >
                {t("brand.tagline")}
              </Typography>
            </CardContent>
          </Card>

          {/* Main Illustration */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: { xs: 350, md: 500 },
              mt: { xs: 10, md: 0 },
            }}
          >
            <Image
              src="/assets/admin-console/bc87b4b6-94dd-4780-ad3b-41b62fe3772f_upscayl_4x_upscayl-standard-4x 1.png"
              alt="Restaurant Search"
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
              priority
            />
          </Box>

          {/* Decorative Dots */}
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: 120, md: 180 },
              right: { xs: 20, md: 60 },
              width: { xs: 10, md: 14 },
              height: { xs: 10, md: 14 },
              borderRadius: "50%",
              bgcolor: "secondary.light",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: { xs: 140, md: 200 },
              right: { xs: 60, md: 100 },
              width: { xs: 8, md: 10 },
              height: { xs: 8, md: 10 },
              borderRadius: "50%",
              bgcolor: "primary.main",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: 60, md: 100 },
              left: { xs: 40, md: 80 },
              width: { xs: 10, md: 12 },
              height: { xs: 10, md: 12 },
              borderRadius: "50%",
              bgcolor: "success.main",
            }}
          />
        </Box>

        {/* Left Side - Search Section */}
        <Box
          sx={{
            flex: { xs: "none", md: 1 },
            maxWidth: { xs: "100%", md: "600px" },
            width: "100%",
            order: { xs: 1, md: 1 },
          }}
        >
          <Stack
            spacing={0.5}
            sx={{ mb: 4, textAlign: isArabic ? "right" : "left" }}
          >
            <Typography variant="h1" color="text.primary">
              {t("dashboard.title")}
            </Typography>
            <Typography variant="h1" color="text.primary">
              {t("dashboard.subtitle")}
            </Typography>
            <Typography variant="h1" color="primary.main">
              {t("dashboard.highlight")}
            </Typography>
          </Stack>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 5,
              lineHeight: 1.8,
              maxWidth: "540px",
              textAlign: isArabic ? "right" : "left",
            }}
          >
            {t("dashboard.description")}
          </Typography>

          {/* Search Box */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
              maxWidth: "600px",
            }}
          >
            <TextField
              placeholder={t("dashboard.searchPlaceholder")}
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
                e.key === "Enter" && handleSearch()
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify
                      icon="solar:magnifer-linear"
                      width={22}
                      color="#9CA3AF"
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: { xs: "100%", sm: "401px" },
                "& .MuiOutlinedInput-root": {
                  height: 56,
                  bgcolor: "#FAFAFA",
                  borderRadius: 1,
                  "& fieldset": {
                    borderColor: "grey.300",
                  },
                  "&:hover fieldset": {
                    borderColor: "grey.400",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                    borderWidth: 1,
                  },
                },
              }}
            />
            <Button
              variant="contained"
              size="large"
              onClick={handleSearch}
              disabled={isSearching}
              sx={{
                height: 56,
                minWidth: 110,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                fontWeight: 600,
                boxShadow: (theme: any) => theme.customShadows.primary,
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              {isSearching ? (
                <CircularProgress size={24} sx={{ color: "inherit" }} />
              ) : (
                t("dashboard.searchButton")
              )}
            </Button>
          </Box>

          {/* Not Found State */}
          {searchError && (
            <Card
              sx={{
                mt: 4,
                width: 406,
                height: 96,
                minWidth: 320,
                boxShadow: (theme: any) => theme.customShadows.card,
              }}
            >
              <CardContent
                sx={{
                  p: 2,
                  height: "100%",
                  "&:last-child": { pb: 2 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    height: "100%",
                    flexDirection: isArabic ? "row-reverse" : "row",
                  }}
                >
                  {/* Add Button */}
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() =>
                      router.push(
                        `/${locale}/business/create/step1?name=${encodeURIComponent(searchQuery)}`
                      )
                    }
                    sx={{
                      width: 65,
                      height: 36,
                      minWidth: 64,
                      minHeight: 36,
                      flexShrink: 0,
                      borderColor: "grey.300",
                      color: "text.primary",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      "&:hover": {
                        borderColor: "primary.main",
                        bgcolor: "rgba(255, 86, 48, 0.08)",
                      },
                    }}
                  >
                    {t("dashboard.addButton")}
                  </Button>

                  {/* Text Content */}
                  <Box sx={{ flex: 1, textAlign: isArabic ? "right" : "left" }}>
                    <Typography
                      variant="subtitle2"
                      color="text.primary"
                      sx={{ mb: 0.25, lineHeight: 1.4 }}
                    >
                      {t("dashboard.notFoundTitle")}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ lineHeight: 1.4 }}
                    >
                      {t("dashboard.notFoundSubtitle")}
                    </Typography>
                  </Box>

                  {/* Icon */}
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src="/assets/admin-console/elements.svg"
                      alt="Not Found"
                      width={43.5}
                      height={43.5}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          )}

          {/* Search Results */}
          {searchResult && (
            <Card sx={{ mt: 4, maxWidth: 600 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {t("dashboard.foundTitle")}
                </Typography>
                <Stack spacing={2.5}>
                  <Box>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                    >
                      {t("dashboard.nameLabel")}
                    </Typography>
                    <Typography variant="subtitle1" color="text.primary">
                      {isArabic ? searchResult.arName : searchResult.enName}
                    </Typography>
                  </Box>
                  {searchResult.address && (
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        {t("dashboard.addressLabel")}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        {searchResult.address}
                      </Typography>
                    </Box>
                  )}
                  {searchResult.phoneNumber && (
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        {t("dashboard.phoneLabel")}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        {searchResult.phoneNumber}
                      </Typography>
                    </Box>
                  )}
                  <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                    <Button variant="contained" color="primary">
                      {t("dashboard.manageButton")}
                    </Button>
                    <Button
                      variant="outlined"
                      color="inherit"
                      onClick={() => {
                        setSearchResult(null);
                        setSearchQuery("");
                      }}
                    >
                      {t("dashboard.newSearchButton")}
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          )}
        </Box>
      </Box>
    </Box>
  );
}
