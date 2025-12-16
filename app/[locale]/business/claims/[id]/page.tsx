"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";

import { Iconify } from "../../../../../packages/my-saas-components/src/iconify";
import { useTranslation } from "../../../../hooks/useTranslation";
import claimRequestService, {
  ClaimStatus,
  type ClaimRequest,
} from "../../../../../services/claimRequestService";
import businessService from "../../../../../services/businessService";

export default function ClaimDetailPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [claim, setClaim] = useState<ClaimRequest | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const params = useParams();
  const { t, locale } = useTranslation();
  const isArabic = locale === "ar";
  const claimId = params.id as string;

  const toggleLocale = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split("/").filter(Boolean);
    pathSegments[0] = newLocale;
    router.push("/" + pathSegments.join("/"));
  };

  useEffect(() => {
    const loadClaim = async () => {
      try {
        const claimData = await claimRequestService.getClaimRequest(claimId);
        setClaim(claimData);
      } catch (err: any) {
        console.error("Failed to load claim:", err);
        setError(err.message || "Failed to load claim details");
      } finally {
        setIsLoading(false);
      }
    };

    if (claimId) {
      loadClaim();
    }
  }, [claimId]);

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

  const handleViewBusiness = async () => {
    if (claim?.businessId) {
      router.push(`/${locale}/business/manage/${claim.businessId}`);
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

  if (error || !claim) {
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
        <Card sx={{ maxWidth: 500, mx: 2 }}>
          <CardContent>
            <Stack spacing={3} alignItems="center" py={4}>
              <Iconify
                icon="solar:danger-circle-bold-duotone"
                width={80}
                color="error.main"
              />
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom>
                  {t("claims.errorTitle") || "Error Loading Claim"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {error || t("claims.errorMessage") || "Claim not found"}
                </Typography>
              </Box>
              <Button
                variant="contained"
                onClick={() => router.push(`/${locale}/business/claims`)}
              >
                {t("claims.backToClaims") || "Back to Claims"}
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    );
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
            onClick={() => router.push(`/${locale}/business/claims`)}
            startIcon={<Iconify icon="solar:arrow-left-linear" />}
          >
            {t("claims.backToClaims") || "Back to Claims"}
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
          maxWidth: "900px",
          mx: "auto",
          px: { xs: 3, md: 6 },
          py: 4,
        }}
      >
        <Stack spacing={3}>
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {t("claims.detailTitle") || "Claim Request Details"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t("claims.claimId") || "Claim ID"}: {claim.id}
            </Typography>
          </Box>

          <Card>
            <CardContent>
              <Stack spacing={3}>
                <Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={2}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      {t("claims.statusTitle") || "Status"}
                    </Typography>
                    <Chip
                      icon={
                        <Iconify
                          icon={getStatusIcon(claim.status)}
                          width={18}
                        />
                      }
                      label={getStatusText(claim.status)}
                      color={getStatusColor(claim.status)}
                    />
                  </Stack>

                  {claim.status === ClaimStatus.CLAIM_STATUS_PENDING && (
                    <Alert
                      severity="info"
                      icon={<Iconify icon="solar:info-circle-bold" />}
                    >
                      {t("claims.pendingMessage") ||
                        "Your claim is currently under review. We'll notify you once it's been processed."}
                    </Alert>
                  )}

                  {claim.status === ClaimStatus.CLAIM_STATUS_APPROVED && (
                    <Alert
                      severity="success"
                      icon={<Iconify icon="solar:check-circle-bold" />}
                    >
                      {t("claims.approvedMessage") ||
                        "Congratulations! Your claim has been approved. You can now manage your business."}
                    </Alert>
                  )}

                  {claim.status === ClaimStatus.CLAIM_STATUS_REJECTED && (
                    <Alert
                      severity="error"
                      icon={<Iconify icon="solar:close-circle-bold" />}
                    >
                      {t("claims.rejectedMessage") ||
                        "Your claim has been rejected. Please review the reason below and submit a new claim if needed."}
                    </Alert>
                  )}
                </Box>

                <Divider />

                <Box>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {t("claims.submittedOn") || "Submitted On"}
                  </Typography>
                  <Typography variant="body1">
                    {claim.createdAt.toLocaleString()}
                  </Typography>
                </Box>

                {claim.reviewedAt && (
                  <Box>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                    >
                      {t("claims.reviewedOn") || "Reviewed On"}
                    </Typography>
                    <Typography variant="body1">
                      {claim.reviewedAt.toLocaleString()}
                    </Typography>
                  </Box>
                )}

                {claim.reviewedBy && (
                  <Box>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                    >
                      {t("claims.reviewedBy") || "Reviewed By"}
                    </Typography>
                    <Typography variant="body1">{claim.reviewedBy}</Typography>
                  </Box>
                )}

                {claim.status === ClaimStatus.CLAIM_STATUS_APPROVED &&
                  claim.businessId && (
                    <>
                      <Divider />
                      <Box>
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          gutterBottom
                        >
                          {t("claims.businessId") || "Business ID"}
                        </Typography>
                        <Typography variant="body1" fontFamily="monospace">
                          {claim.businessId}
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={handleViewBusiness}
                        startIcon={<Iconify icon="solar:shop-bold" />}
                      >
                        {t("claims.viewBusiness") || "View Business Dashboard"}
                      </Button>
                    </>
                  )}

                {claim.evidenceJson &&
                  Object.keys(claim.evidenceJson).length > 0 && (
                    <>
                      <Divider />
                      <Box>
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          gutterBottom
                        >
                          {t("claims.evidence") || "Supporting Evidence"}
                        </Typography>
                        <Box
                          sx={{
                            bgcolor: "grey.50",
                            p: 2,
                            borderRadius: 1,
                            fontFamily: "monospace",
                            fontSize: "0.875rem",
                            overflow: "auto",
                          }}
                        >
                          <pre>
                            {JSON.stringify(claim.evidenceJson, null, 2)}
                          </pre>
                        </Box>
                      </Box>
                    </>
                  )}
              </Stack>
            </CardContent>
          </Card>

          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => router.push(`/${locale}/business/claims`)}
            >
              {t("claims.backToClaims") || "Back to Claims"}
            </Button>
            {claim.status === ClaimStatus.CLAIM_STATUS_REJECTED && (
              <Button
                variant="contained"
                fullWidth
                onClick={() => router.push(`/${locale}/business/search`)}
                startIcon={<Iconify icon="solar:refresh-bold" />}
              >
                {t("claims.submitNewClaim") || "Submit New Claim"}
              </Button>
            )}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
