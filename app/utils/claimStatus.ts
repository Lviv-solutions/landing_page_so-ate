import { ClaimStatus } from "../../services/claimRequestService";

export const getClaimStatusColor = (status: ClaimStatus): "warning" | "success" | "error" | "default" => {
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

export const getClaimStatusText = (status: ClaimStatus, t: (key: string) => string): string => {
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

export const getClaimStatusIcon = (status: ClaimStatus): string => {
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
