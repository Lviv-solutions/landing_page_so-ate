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
import claimRequestService, {
  ClaimStatus,
  type ClaimRequest,
} from "../../../../services/claimRequestService";

export default function AdminClaimsReview() {
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
        const storedAdminId =
          localStorage.getItem("admin_id") || "admin-user-id";
        setAdminId(storedAdminId);

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
  }, []);

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
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="text.primary"
          >
            {t("brand.name")} - Admin Panel
          </Typography>
        </Stack>

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
                        <TableCell>Claim ID</TableCell>
                        <TableCell>Requester ID</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Submitted</TableCell>
                        <TableCell align="right">Actions</TableCell>
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
                          <TableCell align="right">
                            <Stack
                              direction="row"
                              spacing={1}
                              justifyContent="flex-end"
                            >
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
                                  >
                                    Approve
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
                                  >
                                    Reject
                                  </Button>
                                </>
                              )}
                              {claim.status !==
                                ClaimStatus.CLAIM_STATUS_PENDING && (
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  Reviewed
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
    </Box>
  );
}
