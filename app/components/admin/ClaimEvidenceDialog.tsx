import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Alert from "@mui/material/Alert";

import { Iconify } from "../../../packages/my-saas-components/src/iconify";
import { ClaimRequest, ClaimStatus } from "../../../services/claimRequestService";
import { Subscription } from "../../../services/subscriptionService";
import {
  parseEvidenceJson,
  getSubscriptionStatusText,
  getSubscriptionStatusColor,
} from "./claimHelpers";

interface ClaimEvidenceDialogProps {
  open: boolean;
  claim: ClaimRequest | null;
  isArabic: boolean;
  t: (key: string) => string;
  subscription: Subscription | null;
  subscriptionLoading: boolean;
  onClose: () => void;
}

export default function ClaimEvidenceDialog({
  open,
  claim,
  isArabic,
  t,
  subscription,
  subscriptionLoading,
  onClose,
}: ClaimEvidenceDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
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
        {claim && (() => {
          const evidence = parseEvidenceJson(claim.evidenceJson);
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
                    {claim.id}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {t("admin.businessName") || "Business Name"}:
                  </Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {claim.enName || claim.arName || "N/A"}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {t("admin.requesterId") || "Requester ID"}:
                  </Typography>
                  <Typography variant="body2" fontWeight="medium" fontFamily="monospace" sx={{ wordBreak: "break-all" }}>
                    {claim.requesterId}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {t("admin.createdAt") || "Created At"}:
                  </Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {claim.createdAt.toLocaleString(isArabic ? "ar-SA" : "en-US", {
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
                  {claim.planCode ? (
                    <Chip
                      label={claim.planCode.toUpperCase()}
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
                {claim.reviewedAt && (
                  <Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {t("admin.reviewedAt") || "Reviewed At"}:
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                      {claim.reviewedAt.toLocaleString(isArabic ? "ar-SA" : "en-US", {
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
                {claim.reviewedBy && (
                  <Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {t("admin.reviewedBy") || "Reviewed By"}:
                    </Typography>
                    <Typography variant="body2" fontWeight="medium" fontFamily="monospace" sx={{ wordBreak: "break-all" }}>
                      {claim.reviewedBy}
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
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
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
            {claim.status === ClaimStatus.CLAIM_STATUS_APPROVED && (
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
                        label={getSubscriptionStatusText(subscription.status, t)}
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
        <Button onClick={onClose} variant="contained">
          {t("admin.close") || "Close"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
