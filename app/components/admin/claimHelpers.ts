import { ClaimStatus } from "../../../services/claimRequestService";
import { SubscriptionStatus } from "../../../services/subscriptionService";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseEvidenceJson = (evidenceJson: any): any => {
  if (!evidenceJson) return {};
  
  // If it's already a plain object, return it
  if (!evidenceJson.fieldsMap) return evidenceJson;
  
  // Parse protobuf Struct format
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: Record<string, any> = {};
  if (Array.isArray(evidenceJson.fieldsMap)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export const getStatusColor = (status: ClaimStatus) => {
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

export const getStatusText = (status: ClaimStatus, t: (key: string) => string) => {
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

export const getStatusIcon = (status: ClaimStatus) => {
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

export const getSubscriptionStatusText = (status: SubscriptionStatus, t: (key: string) => string) => {
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

export const getSubscriptionStatusColor = (status: SubscriptionStatus): "success" | "warning" | "error" | "default" => {
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
