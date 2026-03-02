"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import AdminRoute from "../../../components/AdminRoute";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import { useTranslation } from "../../../hooks/useTranslation";
import { getAdminId, getAdminInfo } from "../../../../lib/auth";
import { webClientAuthService } from "../../../../lib/auth-service";
import claimRequestService, {
  ClaimRequest,
  ClaimStatus,
} from "../../../../services/claimRequestService";
import subscriptionService, {
  Subscription,
} from "../../../../services/subscriptionService";

import {
  AdminPageLayout,
  AdminLoadingScreen,
  StatusTabs,
  EmptyState,
  ClaimsTable,
  ClaimActionDialog,
  ClaimEvidenceDialog,
} from "../../../components/admin";
import { AdminInfo, TabConfig } from "../../../types/admin";

function AdminClaimsReviewContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [claims, setClaims] = useState<ClaimRequest[]>([]);
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
  const [adminInfo, setAdminInfo] = useState<AdminInfo | null>(null);

  const filteredClaims = useMemo(() => {
    switch (currentTab) {
      case 0:
        return claims.filter((c) => c.status === ClaimStatus.CLAIM_STATUS_PENDING);
      case 1:
        return claims.filter((c) => c.status === ClaimStatus.CLAIM_STATUS_APPROVED);
      case 2:
        return claims.filter((c) => c.status === ClaimStatus.CLAIM_STATUS_REJECTED);
      default:
        return claims;
    }
  }, [claims, currentTab]);

  const tabs: TabConfig[] = useMemo(
    () => [
      {
        label: "Pending",
        count: claims.filter((c) => c.status === ClaimStatus.CLAIM_STATUS_PENDING).length,
        color: "warning",
      },
      {
        label: "Approved",
        count: claims.filter((c) => c.status === ClaimStatus.CLAIM_STATUS_APPROVED).length,
        color: "success",
      },
      {
        label: "Rejected",
        count: claims.filter((c) => c.status === ClaimStatus.CLAIM_STATUS_REJECTED).length,
        color: "error",
      },
    ],
    [claims]
  );

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

        const token = webClientAuthService.getToken();
        const response = await claimRequestService.listClaimRequests(
          { pageSize: 100 },
          { accessToken: token ?? undefined }
        );

        setClaims(response.claimRequests);
      } catch (error) {
        console.error("Failed to load claims:", error);
        setError("Failed to load claims");
      } finally {
        setIsLoading(false);
      }
    };

    loadClaims();
  }, [router, locale]);


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
      const token = webClientAuthService.getToken();
      const response = await claimRequestService.approveClaimRequest(
        { id: selectedClaim.id, reviewedBy: adminId },
        { accessToken: token ?? undefined }
      );

      setSuccessMessage(
        `Claim approved successfully! Business ID: ${response.businessId}`
      );

      setClaims((prev) =>
        prev.map((c) =>
          c.id === selectedClaim.id
            ? { ...c, status: ClaimStatus.CLAIM_STATUS_APPROVED }
            : c
        )
      );

      handleCloseActionDialog();
    } catch (err: unknown) {
      console.error("Failed to approve claim:", err);
      setError(err instanceof Error ? err.message : "Failed to approve claim");
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
      const token = webClientAuthService.getToken();
      await claimRequestService.rejectClaimRequest(
        {
          id: selectedClaim.id,
          reviewedBy: adminId,
          rejectionReason: rejectionReason,
        },
        { accessToken: token ?? undefined }
      );

      setSuccessMessage("Claim rejected successfully");

      setClaims((prev) =>
        prev.map((c) =>
          c.id === selectedClaim.id
            ? { ...c, status: ClaimStatus.CLAIM_STATUS_REJECTED }
            : c
        )
      );

      handleCloseActionDialog();
    } catch (err: unknown) {
      console.error("Failed to reject claim:", err);
      setError(err instanceof Error ? err.message : "Failed to reject claim");
    } finally {
      setActionLoading(false);
    }
  };

  if (isLoading) {
    return <AdminLoadingScreen message={t("common.loading")} />;
  }

  const navButtons = [
    { label: "Plans", icon: "solar:bill-list-bold", path: "plans" },
    { label: "Assignments", icon: "solar:user-check-bold", path: "assignments" },
  ];

  return (
    <AdminPageLayout
      adminInfo={adminInfo}
      navButtons={navButtons}
      successMessage={successMessage}
      onClearSuccess={() => setSuccessMessage(null)}
    >
      <Box>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {t("admin.claimsTitle") || "Business Claims Review"}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t("admin.claimsSubtitle") ||
            "Review and approve business claim requests"}
        </Typography>
      </Box>

      <Card>
        <StatusTabs
          tabs={tabs}
          value={currentTab}
          onChange={(_e, newValue) => setCurrentTab(newValue)}
        />

        <CardContent>
          {filteredClaims.length === 0 ? (
            <EmptyState message={t("admin.noClaims") || "No claims in this category"} />
          ) : (
            <ClaimsTable
              claims={filteredClaims}
              isArabic={isArabic}
              t={t}
              onViewEvidence={handleOpenEvidenceDialog}
              onApprove={(claim) => handleOpenActionDialog(claim, "approve")}
              onReject={(claim) => handleOpenActionDialog(claim, "reject")}
            />
          )}
        </CardContent>
      </Card>

      <ClaimActionDialog
        open={actionDialog.open}
        type={actionDialog.type}
        selectedClaim={selectedClaim}
        error={error}
        rejectionReason={rejectionReason}
        actionLoading={actionLoading}
        onClose={handleCloseActionDialog}
        onApprove={handleApproveClaim}
        onReject={handleRejectClaim}
        onRejectionReasonChange={setRejectionReason}
      />

      <ClaimEvidenceDialog
        open={evidenceDialog.open}
        claim={evidenceDialog.claim}
        isArabic={isArabic}
        t={t}
        subscription={subscription}
        subscriptionLoading={subscriptionLoading}
        onClose={handleCloseEvidenceDialog}
      />
    </AdminPageLayout>
  );
}

export default function AdminClaimsReview() {
  return (
    <AdminRoute>
      <AdminClaimsReviewContent />
    </AdminRoute>
  );
}
