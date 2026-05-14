import { Plan, PlanStatus, BillingPeriod } from "../../../../services/planManagementService";
import { Service } from "../../../../services/serviceManagementService";
import { Feature } from "../../../../services/featureManagementService";
import { LimitType } from "../../../../services/planFeatureManagementService";

export interface PlanFormData {
  code: string;
  name: string;
  description: string;
  billingPeriod: BillingPeriod;
  priceMinor: number;
  currency: string;
  trialDays: number;
  serviceCodes: string[];
  featureCodes: string[];
}

export interface FeatureLimitConfig {
  limitType: LimitType;
  limitValue: string;
  notes: string;
}

export interface AdminPlansState {
  plans: Plan[];
  filteredPlans: Plan[];
  selectedPlan: Plan | null;
  services: Service[];
  features: Feature[];
  selectedServices: string[];
  selectedFeatures: string[];
  featureLimits: Map<string, FeatureLimitConfig>;
  formData: PlanFormData;
  isLoading: boolean;
  actionLoading: boolean;
  error: string | null;
  successMessage: string | null;
  currentTab: number;
  createDialog: boolean;
  editDialog: boolean;
  deleteDialog: boolean;
}

export type { Plan, Service, Feature };
export { PlanStatus, BillingPeriod, LimitType };
