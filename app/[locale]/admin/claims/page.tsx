"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AdminRoute from "../../../components/AdminRoute";

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
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Iconify } from "../../../../packages/my-saas-components/src/iconify";
import { useTranslation } from "../../../hooks/useTranslation";
import { getAdminId, getAdminInfo, logoutAdmin } from "../../../../lib/auth";
import claimRequestService, {
  ClaimRequest,
  ClaimStatus,
} from "../../../../services/claimRequestService";
import subscriptionService, {
  Subscription,
  SubscriptionStatus,
} from "../../../../services/subscriptionService";

function AdminClaimsReviewContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [claims, setClaims] = useState<ClaimRequest[]>([]);
  const [filteredClaims, setFilteredClaims] = useState<ClaimRequest[]>([]);
  const [selectedClaim, setSelectedClaim] = useState<ClaimRequest | null>(null);
  const [actionDialog, setActionDialog] = useState<{
    open: boolean;
    type: "approve" | "reject" | null;
  }>({ open: false, type: null });
  const [rejectionReason, setRejectionReason] = useState("");
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState(0);
  const [adminId, setAdminId] = useState<string>("");
  const [evidenceDialog, setEvidenceDialog] = useState<{
    open: boolean;
    claim: ClaimRequest | null;
  }>({ open: false, claim: null });
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [subscriptionLoading, setSubscriptionLoading] = useState(false);

  const router = useRouter();
  const { t, locale } = useTranslation();
  const isArabic = locale === "ar";
  const [adminInfo, setAdminInfo] = useState<{ id: string; email?: string; name?: string } | null>(null);

  // Helper function to parse protobuf Struct data
  const parseEvidenceJson = (evidenceJson: any): any => {
    if (!evidenceJson) return {};
    
    // If it's already a plain object, return it
    if (!evidenceJson.fieldsMap) return evidenceJson;
    
    // Parse protobuf Struct format
    const result: any = {};
    if (Array.isArray(evidenceJson.fieldsMap)) {
      evidenceJson.fieldsMap.forEach((field: any) => {
        const key = field[0];
        const value = field[1];
        
        if (value?.structValue?.fieldsMap) {
          // Nested object
          result[key] = parseEvidenceJson(value.structValue);
        } else if (value?.stringValue !== undefined) {
          result[key] = value.stringValue;
        } else if (value?.numberValue !== undefined) {
          result[key] = value.numberValue;
        } else if (value?.boolValue !== undefined) {
          result[key] = value.boolValue;
        }
      });
    }
    return result;
  };

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
        const loggedInAdminId = getAdminId();
        if (!loggedInAdminId) {
          setError("Admin not logged in");
          setIsLoading(false);
          router.push(`/${locale}/admin`);
          return;
        }
        setAdminId(loggedInAdminId);
        setAdminInfo(getAdminInfo());

        const response = await claimRequestService.listClaimRequests({
          pageSize: 100,
        });

        setClaims(response.claimRequests);
        filterClaimsByTab(response.claimRequests, 0);
      } catch (error) {
        console.error("Failed to load claims:", error);
        setError("Failed to load claims");
      } finally {
        setIsLoading(false);
      }
    };

    loadClaims();
  }, [router, locale]);

  const handleLogout = () => {
    logoutAdmin();
    router.push(`/${locale}/admin`);
  };

  const filterClaimsByTab = (allClaims: ClaimRequest[], tabIndex: number) => {
    let filtered: ClaimRequest[];
    switch (tabIndex) {
      case 0:
        filtered = allClaims.filter(
          (c) => c.status === ClaimStatus.CLAIM_STATUS_PENDING
        );
        break;
      case 1:
        filtered = allClaims.filter(
          (c) => c.status === ClaimStatus.CLAIM_STATUS_APPROVED
        );
        break;
      case 2:
        filtered = allClaims.filter(
          (c) => c.status === ClaimStatus.CLAIM_STATUS_REJECTED
        );
        break;
      default:
        filtered = allClaims;
    }
    setFilteredClaims(filtered);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
    filterClaimsByTab(claims, newValue);
  };

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

  const getSubscriptionStatusText = (status: SubscriptionStatus) => {
    switch (status) {
      case SubscriptionStatus.SUBSCRIPTION_STATUS_ACTIVE:
        return t("admin.subscriptionActive") || "Active";
      case SubscriptionStatus.SUBSCRIPTION_STATUS_PAST_DUE:
        return t("admin.subscriptionPastDue") || "Past Due";
      case SubscriptionStatus.SUBSCRIPTION_STATUS_CANCELED:
        return t("admin.subscriptionCanceled") || "Canceled";
      case SubscriptionStatus.SUBSCRIPTION_STATUS_EXPIRED:
        return t("admin.subscriptionExpired") || "Expired";
      default:
        return t("admin.subscriptionUnspecified") || "Unknown";
    }
  };

  const getSubscriptionStatusColor = (status: SubscriptionStatus): "success" | "warning" | "error" | "default" => {
    switch (status) {
      case SubscriptionStatus.SUBSCRIPTION_STATUS_ACTIVE:
        return "success";
      case SubscriptionStatus.SUBSCRIPTION_STATUS_PAST_DUE:
        return "warning";
      case SubscriptionStatus.SUBSCRIPTION_STATUS_CANCELED:
      case SubscriptionStatus.SUBSCRIPTION_STATUS_EXPIRED:
        return "error";
      default:
        return "default";
    }
  };

  const handleOpenActionDialog = (
    claim: ClaimRequest,
    type: "approve" | "reject"
  ) => {
    setSelectedClaim(claim);
    setActionDialog({ open: true, type });
    setRejectionReason("");
    setError(null);
  };

  const handleCloseActionDialog = () => {
    setActionDialog({ open: false, type: null });
    setSelectedClaim(null);
    setRejectionReason("");
  };

  const handleOpenEvidenceDialog = async (claim: ClaimRequest) => {
    setEvidenceDialog({ open: true, claim });
    setSubscription(null);
    
    // Fetch subscription data if claim is approved and has a business ID
    if (claim.status === ClaimStatus.CLAIM_STATUS_APPROVED && claim.businessId) {
      setSubscriptionLoading(true);
      try {
        const sub = await subscriptionService.findActiveByBusiness(claim.businessId);
        setSubscription(sub);
      } catch (error) {
        console.error("Failed to fetch subscription:", error);
      } finally {
        setSubscriptionLoading(false);
      }
    }
  };

  const handleCloseEvidenceDialog = () => {
    setEvidenceDialog({ open: false, claim: null });
  };

  const handleApproveClaim = async () => {
    if (!selectedClaim) return;

    setActionLoading(true);
    setError(null);

    try {
      const response = await claimRequestService.approveClaimRequest({
        id: selectedClaim.id,
        reviewedBy: adminId,
      });

      setSuccessMessage(
        `Claim approved successfully! Business ID: ${response.businessId}`
      );

      const updatedClaims = claims.map((c) =>
        c.id === selectedClaim.id
          ? { ...c, status: ClaimStatus.CLAIM_STATUS_APPROVED }
          : c
      );
      setClaims(updatedClaims);
      filterClaimsByTab(updatedClaims, currentTab);

      handleCloseActionDialog();
    } catch (err: any) {
      console.error("Failed to approve claim:", err);
      setError(err.message || "Failed to approve claim");
    } finally {
      setActionLoading(false);
    }
  };

  const handleRejectClaim = async () => {
    if (!selectedClaim) return;

    if (!rejectionReason.trim()) {
      setError("Please provide a rejection reason");
      return;
    }

    setActionLoading(true);
    setError(null);

    try {
      await claimRequestService.rejectClaimRequest({
        id: selectedClaim.id,
        reviewedBy: adminId,
        rejectionReason: rejectionReason,
      });

      setSuccessMessage("Claim rejected successfully");

      const updatedClaims = claims.map((c) =>
        c.id === selectedClaim.id
          ? { ...c, status: ClaimStatus.CLAIM_STATUS_REJECTED }
          : c
      );
      setClaims(updatedClaims);
      filterClaimsByTab(updatedClaims, currentTab);

      handleCloseActionDialog();
    } catch (err: any) {
      console.error("Failed to reject claim:", err);
      setError(err.message || "Failed to reject claim");
    } finally {
      setActionLoading(false);
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
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="text.primary"
            >
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

          <Button
            variant="outlined"
            color="error"
            startIcon={<Iconify icon="solar:logout-2-bold" />}
            onClick={handleLogout}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            {t("admin.logout") || "Logout"}
          </Button>
        </Stack>
      </Box>

      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 3, md: 6 },
          py: 4,
        }}
      >
        <Stack spacing={3}>
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {t("admin.claimsTitle") || "Business Claims Review"}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t("admin.claimsSubtitle") ||
                "Review and approve business claim requests"}
            </Typography>
          </Box>

          {successMessage && (
            <Alert
              severity="success"
              onClose={() => setSuccessMessage(null)}
              icon={<Iconify icon="solar:check-circle-bold" />}
            >
              {successMessage}
            </Alert>
          )}

          <Card>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={currentTab} onChange={handleTabChange}>
                <Tab
                  label={
                    <Stack direction="row" spacing={1} alignItems="center">
                      <span>Pending</span>
                      <Chip
                        label={
                          claims.filter(
                            (c) => c.status === ClaimStatus.CLAIM_STATUS_PENDING
                          ).length
                        }
                        size="small"
                        color="warning"
                      />
                    </Stack>
                  }
                />
                <Tab
                  label={
                    <Stack direction="row" spacing={1} alignItems="center">
                      <span>Approved</span>
                      <Chip
                        label={
                          claims.filter(
                            (c) =>
                              c.status === ClaimStatus.CLAIM_STATUS_APPROVED
                          ).length
                        }
                        size="small"
                        color="success"
                      />
                    </Stack>
                  }
                />
                <Tab
                  label={
                    <Stack direction="row" spacing={1} alignItems="center">
                      <span>Rejected</span>
                      <Chip
                        label={
                          claims.filter(
                            (c) =>
                              c.status === ClaimStatus.CLAIM_STATUS_REJECTED
                          ).length
                        }
                        size="small"
                        color="error"
                      />
                    </Stack>
                  }
                />
              </Tabs>
            </Box>

            <CardContent>
              {filteredClaims.length === 0 ? (
                <Box textAlign="center" py={6}>
                  <Iconify
                    icon="solar:inbox-line-bold-duotone"
                    width={80}
                    color="grey.400"
                  />
                  <Typography variant="h6" color="text.secondary" mt={2}>
                    {t("admin.noClaims") || "No claims in this category"}
                  </Typography>
                </Box>
              ) : (
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>{t("admin.claimId") || "Claim ID"}</TableCell>
                        <TableCell>{t("admin.businessName") || "Business Name"}</TableCell>
                        <TableCell>{t("admin.contactInfo") || "Contact Info"}</TableCell>
                        <TableCell>{t("admin.requesterId") || "Requester ID"}</TableCell>
                        <TableCell>{t("admin.status") || "Status"}</TableCell>
                        <TableCell>{t("admin.submitted") || "Submitted"}</TableCell>
                        <TableCell align={isArabic ? "left" : "right"}>{t("admin.actions") || "Actions"}</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredClaims.map((claim) => (
                        <TableRow
                          key={claim.id}
                          sx={{ "&:hover": { bgcolor: "action.hover" } }}
                        >
                          <TableCell>
                            <Typography
                              variant="body2"
                              fontFamily="monospace"
                              sx={{
                                maxWidth: 200,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {claim.id}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" fontWeight="medium">
                              {claim.enName || claim.arName || "N/A"}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" color="text.secondary">
                              {claim.evidenceJson?.email ||
                               claim.evidenceJson?.phoneNumber || 
                               claim.evidenceJson?.ownershipProof || 
                               "N/A"}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" fontFamily="monospace">
                              {claim.requesterId.substring(0, 8)}...
                            </Typography>
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
                          <TableCell align={isArabic ? "left" : "right"}>
                            <Stack
                              direction="row"
                              spacing={1}
                              justifyContent={isArabic ? "flex-start" : "flex-end"}
                              sx={{ 
                                flexDirection: isArabic ? "row-reverse" : "row" 
                              }}
                            >
                              <Button
                                size="small"
                                variant="outlined"
                                color="info"
                                startIcon={
                                  <Iconify icon="solar:document-text-bold" />
                                }
                                onClick={() => handleOpenEvidenceDialog(claim)}
                                sx={{ minWidth: 100 }}
                              >
                                {t("admin.viewEvidence") || "Evidence"}
                              </Button>
                              {claim.status ===
                                ClaimStatus.CLAIM_STATUS_PENDING && (
                                <>
                                  <Button
                                    size="small"
                                    variant="contained"
                                    color="success"
                                    startIcon={
                                      <Iconify icon="solar:check-circle-bold" />
                                    }
                                    onClick={() =>
                                      handleOpenActionDialog(claim, "approve")
                                    }
                                    sx={{ minWidth: 100 }}
                                  >
                                    {t("admin.approve") || "Approve"}
                                  </Button>
                                  <Button
                                    size="small"
                                    variant="outlined"
                                    color="error"
                                    startIcon={
                                      <Iconify icon="solar:close-circle-bold" />
                                    }
                                    onClick={() =>
                                      handleOpenActionDialog(claim, "reject")
                                    }
                                    sx={{ minWidth: 100 }}
                                  >
                                    {t("admin.reject") || "Reject"}
                                  </Button>
                                </>
                              )}
                              {claim.status !==
                                ClaimStatus.CLAIM_STATUS_PENDING && (
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  {t("admin.reviewed") || "Reviewed"}
                                </Typography>
                              )}
                            </Stack>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </CardContent>
          </Card>
        </Stack>
      </Box>

      <Dialog
        open={actionDialog.open}
        onClose={handleCloseActionDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {actionDialog.type === "approve"
            ? "Approve Claim Request"
            : "Reject Claim Request"}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} pt={1}>
            {error && (
              <Alert
                severity="error"
                icon={<Iconify icon="solar:danger-circle-bold" />}
              >
                {error}
              </Alert>
            )}

            {selectedClaim && (
              <Box>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  Claim ID
                </Typography>
                <Typography variant="body2" fontFamily="monospace" gutterBottom>
                  {selectedClaim.id}
                </Typography>

                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                  mt={2}
                >
                  Requester ID
                </Typography>
                <Typography variant="body2" fontFamily="monospace" gutterBottom>
                  {selectedClaim.requesterId}
                </Typography>

                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                  mt={2}
                >
                  Evidence
                </Typography>
                <Box
                  sx={{
                    bgcolor: "grey.50",
                    p: 2,
                    borderRadius: 1,
                    fontFamily: "monospace",
                    fontSize: "0.75rem",
                    overflow: "auto",
                    maxHeight: 200,
                  }}
                >
                  <pre>
                    {JSON.stringify(selectedClaim.evidenceJson, null, 2)}
                  </pre>
                </Box>
              </Box>
            )}

            {actionDialog.type === "reject" && (
              <TextField
                label="Rejection Reason"
                multiline
                rows={4}
                fullWidth
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder="Please provide a reason for rejecting this claim..."
                required
              />
            )}

            {actionDialog.type === "approve" && (
              <Alert
                severity="info"
                icon={<Iconify icon="solar:info-circle-bold" />}
              >
                Approving this claim will automatically create a business and
                assign it to the requester.
              </Alert>
            )}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseActionDialog} disabled={actionLoading}>
            Cancel
          </Button>
          <Button
            onClick={
              actionDialog.type === "approve"
                ? handleApproveClaim
                : handleRejectClaim
            }
            variant="contained"
            color={actionDialog.type === "approve" ? "success" : "error"}
            disabled={actionLoading}
            startIcon={
              actionLoading ? (
                <CircularProgress size={16} />
              ) : (
                <Iconify
                  icon={
                    actionDialog.type === "approve"
                      ? "solar:check-circle-bold"
                      : "solar:close-circle-bold"
                  }
                />
              )
            }
          >
            {actionDialog.type === "approve" ? "Approve" : "Reject"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Evidence Dialog */}
      <Dialog
        open={evidenceDialog.open}
        onClose={handleCloseEvidenceDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Iconify icon="solar:document-text-bold" width={24} />
            <Typography variant="h6">
              {t("admin.evidenceDetails") || "Evidence Details"}
            </Typography>
          </Stack>
        </DialogTitle>
        <DialogContent>
          {evidenceDialog.claim && (() => {
            const evidence = parseEvidenceJson(evidenceDialog.claim.evidenceJson);
            return (
            <Stack spacing={3}>
              {/* Claim Info */}
              <Box
                sx={{
                  bgcolor: "#f8f9fa",
                  p: 2,
                  borderRadius: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {t("admin.claimInformation") || "Claim Information"}
                </Typography>
                <Stack spacing={1.5}>
                  <Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {t("admin.claimId") || "Claim ID"}:
                    </Typography>
                    <Typography variant="body2" fontWeight="medium" fontFamily="monospace" sx={{ wordBreak: "break-all" }}>
                      {evidenceDialog.claim.id}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {t("admin.businessName") || "Business Name"}:
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                      {evidenceDialog.claim.enName || evidenceDialog.claim.arName || "N/A"}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {t("admin.requesterId") || "Requester ID"}:
                    </Typography>
                    <Typography variant="body2" fontWeight="medium" fontFamily="monospace" sx={{ wordBreak: "break-all" }}>
                      {evidenceDialog.claim.requesterId}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {t("admin.createdAt") || "Created At"}:
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                      {evidenceDialog.claim.createdAt.toLocaleString(isArabic ? "ar-SA" : "en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: true
                      })}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {t("admin.selectedPlan") || "Selected Plan"}:
                    </Typography>
                    {evidenceDialog.claim.planCode ? (
                      <Chip
                        label={evidenceDialog.claim.planCode.toUpperCase()}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ fontWeight: 600 }}
                      />
                    ) : (
                      <Typography variant="body2" color="warning.main" fontStyle="italic">
                        {t("admin.notSpecified") || "Not available (backend not returning planCode)"}
                      </Typography>
                    )}
                  </Box>
                  {evidenceDialog.claim.reviewedAt && (
                    <Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {t("admin.reviewedAt") || "Reviewed At"}:
                      </Typography>
                      <Typography variant="body2" fontWeight="medium">
                        {evidenceDialog.claim.reviewedAt.toLocaleString(isArabic ? "ar-SA" : "en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                          hour12: true
                        })}
                      </Typography>
                    </Box>
                  )}
                  {evidenceDialog.claim.reviewedBy && (
                    <Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {t("admin.reviewedBy") || "Reviewed By"}:
                      </Typography>
                      <Typography variant="body2" fontWeight="medium" fontFamily="monospace" sx={{ wordBreak: "break-all" }}>
                        {evidenceDialog.claim.reviewedBy}
                      </Typography>
                    </Box>
                  )}
                </Stack>
              </Box>

              {/* Location Info */}
              {evidence?.location && (
                <Box
                  sx={{
                    bgcolor: "#fff",
                    p: 2,
                    borderRadius: 2,
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                    <Iconify icon="solar:map-point-bold" width={20} color="primary.main" />
                    <Typography variant="subtitle1" fontWeight="bold">
                      {t("admin.locationInfo") || "Location Information"}
                    </Typography>
                  </Stack>
                  <Stack spacing={1.5}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body2" color="text.secondary">
                        {t("admin.country") || "Country"}:
                      </Typography>
                      <Typography variant="body2" fontWeight="medium">
                        {evidence.location.country || "N/A"}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body2" color="text.secondary">
                        {t("admin.city") || "City"}:
                      </Typography>
                      <Typography variant="body2" fontWeight="medium">
                        {evidence.location.city || "N/A"}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body2" color="text.secondary">
                        {t("admin.street") || "Street"}:
                      </Typography>
                      <Typography variant="body2" fontWeight="medium">
                        {evidence.location.street || "N/A"}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body2" color="text.secondary">
                        {t("admin.postalCode") || "Postal Code"}:
                      </Typography>
                      <Typography variant="body2" fontWeight="medium">
                        {evidence.location.postalCode || "N/A"}
                      </Typography>
                    </Box>
                    {evidence.location.latitude && (
                      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="body2" color="text.secondary">
                          {t("admin.latitude") || "Latitude"}:
                        </Typography>
                        <Typography variant="body2" fontWeight="medium" fontFamily="monospace">
                          {evidence.location.latitude}
                        </Typography>
                      </Box>
                    )}
                    {evidence.location.longitude && (
                      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="body2" color="text.secondary">
                          {t("admin.longitude") || "Longitude"}:
                        </Typography>
                        <Typography variant="body2" fontWeight="medium" fontFamily="monospace">
                          {evidence.location.longitude}
                        </Typography>
                      </Box>
                    )}
                  </Stack>
                </Box>
              )}

              {/* Business Details */}
              <Box
                sx={{
                  bgcolor: "#fff",
                  p: 2,
                  borderRadius: 2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                  <Iconify icon="solar:shop-bold" width={20} color="primary.main" />
                  <Typography variant="subtitle1" fontWeight="bold">
                    {t("admin.businessDetails") || "Business Details"}
                  </Typography>
                </Stack>
                <Stack spacing={1.5}>
                  {evidence?.phoneNumber && (
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body2" color="text.secondary">
                        {t("admin.phoneNumber") || "Phone Number"}:
                      </Typography>
                      <Typography variant="body2" fontWeight="medium">
                        {evidence.phoneNumber}
                      </Typography>
                    </Box>
                  )}
                  {evidence?.tableCount && (
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body2" color="text.secondary">
                        {t("admin.tableCount") || "Table Count"}:
                      </Typography>
                      <Typography variant="body2" fontWeight="medium">
                        {evidence.tableCount}
                      </Typography>
                    </Box>
                  )}
                  {evidence?.alwaysOpen !== undefined && (
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body2" color="text.secondary">
                        {t("admin.alwaysOpen") || "Always Open"}:
                      </Typography>
                      <Chip
                        label={evidence.alwaysOpen ? "Yes" : "No"}
                        size="small"
                        color={evidence.alwaysOpen ? "success" : "default"}
                      />
                    </Box>
                  )}
                  {evidence?.ownershipProof && (
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body2" color="text.secondary">
                        {t("admin.ownershipProof") || "Ownership Proof"}:
                      </Typography>
                      <Typography variant="body2" fontWeight="medium">
                        {evidence.ownershipProof}
                      </Typography>
                    </Box>
                  )}
                </Stack>
              </Box>

              {/* Working Schedule */}
              {evidence?.schedule && (
                <Box
                  sx={{
                    bgcolor: "#fff",
                    p: 2,
                    borderRadius: 2,
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                    <Iconify icon="solar:calendar-bold" width={20} color="primary.main" />
                    <Typography variant="subtitle1" fontWeight="bold">
                      {t("admin.workingHours") || "Working Hours"}
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    {Object.entries(evidence.schedule).map(([day, hours]: [string, any]) => (
                      <Box
                        key={day}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          py: 0.5,
                        }}
                      >
                        <Typography variant="body2" sx={{ textTransform: "capitalize", minWidth: 100 }}>
                          {day}:
                        </Typography>
                        {hours?.isOpen ? (
                          <Typography variant="body2" fontWeight="medium" color="success.main">
                            {hours.from} - {hours.to}
                          </Typography>
                        ) : (
                          <Chip label="Closed" size="small" color="error" variant="outlined" />
                        )}
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}

              {/* Subscription Information - Only for approved claims */}
              {evidenceDialog.claim.status === ClaimStatus.CLAIM_STATUS_APPROVED && (
                <Box
                  sx={{
                    bgcolor: "#fff",
                    p: 2,
                    borderRadius: 2,
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                    <Iconify icon="solar:card-bold" width={20} color="primary.main" />
                    <Typography variant="subtitle1" fontWeight="bold">
                      {t("admin.subscriptionInfo") || "Subscription Information"}
                    </Typography>
                  </Stack>
                  
                  {subscriptionLoading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
                      <CircularProgress size={24} />
                    </Box>
                  ) : subscription ? (
                    <Stack spacing={1.5}>
                      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="body2" color="text.secondary">
                          {t("admin.planCode") || "Plan Code"}:
                        </Typography>
                        <Typography variant="body2" fontWeight="medium">
                          {subscription.planCode}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant="body2" color="text.secondary">
                          {t("admin.status") || "Status"}:
                        </Typography>
                        <Chip
                          label={getSubscriptionStatusText(subscription.status)}
                          size="small"
                          color={getSubscriptionStatusColor(subscription.status)}
                        />
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="body2" color="text.secondary">
                          {t("admin.startDate") || "Start Date"}:
                        </Typography>
                        <Typography variant="body2" fontWeight="medium">
                          {subscription.startAt.toLocaleDateString(isArabic ? "ar-SA" : "en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="body2" color="text.secondary">
                          {t("admin.endDate") || "End Date"}:
                        </Typography>
                        <Typography variant="body2" fontWeight="medium">
                          {subscription.endAt.toLocaleDateString(isArabic ? "ar-SA" : "en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {t("admin.subscriptionId") || "Subscription ID"}:
                        </Typography>
                        <Typography variant="body2" fontWeight="medium" fontFamily="monospace" sx={{ wordBreak: "break-all" }}>
                          {subscription.id}
                        </Typography>
                      </Box>
                    </Stack>
                  ) : (
                    <Alert severity="info" icon={<Iconify icon="solar:info-circle-bold" />}>
                      {t("admin.noActiveSubscription") || "No active subscription found for this business"}
                    </Alert>
                  )}
                </Box>
              )}
            </Stack>
            );
          })()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEvidenceDialog} variant="contained">
            {t("admin.close") || "Close"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default function AdminClaimsReview() {
  return (
    <AdminRoute>
      <AdminClaimsReviewContent />
    </AdminRoute>
  );
}
