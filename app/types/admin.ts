import { BillingPeriod } from "../../services/planManagementService";

export interface AdminInfo {
  id: string;
  email?: string;
  name?: string;
}

export interface DialogState<T = null> {
  open: boolean;
  data: T | null;
}

export interface TabConfig {
  label: string;
  count: number;
  color: "success" | "warning" | "error" | "default" | "primary" | "secondary" | "info";
}

export interface AdminPageState {
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
  actionLoading: boolean;
}

export interface PlanFormData {
  code: string;
  name: string;
  description: string;
  billingPeriod: BillingPeriod;
  priceMinor: number;
  currency: string;
  trialDays: number;
}

export const DEFAULT_PLAN_FORM_DATA: PlanFormData = {
  code: "",
  name: "",
  description: "",
  billingPeriod: BillingPeriod.BILLING_PERIOD_MONTHLY,
  priceMinor: 0,
  currency: "USD",
  trialDays: 0,
};
