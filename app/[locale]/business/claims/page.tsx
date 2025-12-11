"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Iconify } from "../../../../packages/my-saas-components/src/iconify";
import { useTranslation } from "../../../hooks/useTranslation";
import claimRequestService, {
  ClaimStatus,
  type ClaimRequest,
} from "../../../../services/claimRequestService";

export default function ClaimsDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [claims, setClaims] = useState<ClaimRequest[]>([]);
  const [userId, setUserId] = useState<string>("");
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

  useEffect(() => {
    const loadClaims = async () => {
      try {
        const storedUserId = localStorage.getItem("user_id") || "temp-user-id";
        setUserId(storedUserId);
        setIsAuthenticated(true);

        // TODO: Uncomment when backend is ready
        // const response = await claimRequestService.listClaimRequests({
        //   requesterId: storedUserId,
        //   pageSize: 50,
        // });
        // setClaims(response.claimRequests);

        setClaims([]);
      } catch (error) {
        console.error("Failed to load claims:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadClaims();
  }, []);

  const getStatusColor = (status: ClaimStatus) => {
    switch (status) {
      case ClaimStatus.CLAIM_STATUS_PENDING:
        return "warning";
      case ClaimStatus.CLAIM_STATUS_APPROVED:
        return "success";
      case ClaimStatus.CLAIM_STATUS_REJECTED:
        return "error";
      default:
        return "default";
    }
  };

  const getStatusText = (status: ClaimStatus) => {
    switch (status) {
      case ClaimStatus.CLAIM_STATUS_PENDING:
        return t("claims.statusPending") || "Pending Review";
      case ClaimStatus.CLAIM_STATUS_APPROVED:
        return t("claims.statusApproved") || "Approved";
      case ClaimStatus.CLAIM_STATUS_REJECTED:
        return t("claims.statusRejected") || "Rejected";
      default:
        return t("claims.statusUnspecified") || "Unknown";
    }
  };

  const getStatusIcon = (status: ClaimStatus) => {
    switch (status) {
      case ClaimStatus.CLAIM_STATUS_PENDING:
        return "solar:clock-circle-bold";
      case ClaimStatus.CLAIM_STATUS_APPROVED:
        return "solar:check-circle-bold";
      case ClaimStatus.CLAIM_STATUS_REJECTED:
        return "solar:close-circle-bold";
      default:
        return "solar:question-circle-bold";
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
          <CircularProgress size={64} />
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
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="text.primary"
          >
            {t("brand.name")}
          </Typography>
        </Stack>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="outlined"
            onClick={() => router.push(`/${locale}/business/search`)}
            startIcon={<Iconify icon="solar:arrow-left-linear" />}
          >
            {t("claims.backToSearch") || "Back to Search"}
          </Button>
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
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 3, md: 6 },
          py: 4,
        }}
      >
        <Stack spacing={3}>
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {t("claims.title") || "My Business Claims"}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t("claims.subtitle") ||
                "Track the status of your business claim requests"}
            </Typography>
          </Box>

          {claims.length === 0 ? (
            <Card>
              <CardContent>
                <Stack spacing={3} alignItems="center" py={6}>
                  <Box
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      bgcolor: "grey.100",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Iconify
                      icon="solar:document-text-bold-duotone"
                      width={60}
                      color="grey.400"
                    />
                  </Box>
                  <Box textAlign="center">
                    <Typography variant="h6" gutterBottom>
                      {t("claims.noClaims") || "No Claims Yet"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t("claims.noClaimsDescription") ||
                        "You haven't submitted any business claim requests yet"}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => router.push(`/${locale}/business/search`)}
                    startIcon={<Iconify icon="solar:add-circle-bold" />}
                  >
                    {t("claims.createClaim") || "Create New Claim"}
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ) : (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      {t("claims.tableBusinessName") || "Business Name"}
                    </TableCell>
                    <TableCell>{t("claims.tableStatus") || "Status"}</TableCell>
                    <TableCell>
                      {t("claims.tableSubmitted") || "Submitted"}
                    </TableCell>
                    <TableCell align="right">
                      {t("claims.tableActions") || "Actions"}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {claims.map((claim) => (
                    <TableRow
                      key={claim.id}
                      sx={{
                        "&:hover": { bgcolor: "action.hover" },
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        router.push(`/${locale}/business/claims/${claim.id}`)
                      }
                    >
                      <TableCell>
                        <Typography variant="subtitle2">{claim.id}</Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          icon={
                            <Iconify
                              icon={getStatusIcon(claim.status)}
                              width={18}
                            />
                          }
                          label={getStatusText(claim.status)}
                          color={getStatusColor(claim.status)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" color="text.secondary">
                          {claim.createdAt.toLocaleDateString()}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          size="small"
                          endIcon={<Iconify icon="solar:arrow-right-linear" />}
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(
                              `/${locale}/business/claims/${claim.id}`
                            );
                          }}
                        >
                          {t("claims.viewDetails") || "View Details"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
