import { useState, useEffect } from "react";
import { webClientAuthService } from "../../../../../lib/auth-service";
import planManagementService from "../../../../../services/planManagementService";
import serviceManagementService from "../../../../../services/serviceManagementService";
import featureManagementService, { ValueType } from "../../../../../services/featureManagementService";
import planFeatureManagementService from "../../../../../services/planFeatureManagementService";
import {
  Plan,
  PlanStatus,
  BillingPeriod,
  Service,
  Feature,
  LimitType,
  PlanFormData,
  FeatureLimitConfig,
} from "../types";

export function usePlanManagement() {
  const [isLoading, setIsLoading] = useState(true);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [filteredPlans, setFilteredPlans] = useState<Plan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [createDialog, setCreateDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState(0);
  const [services, setServices] = useState<Service[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [featureLimits, setFeatureLimits] = useState<Map<string, FeatureLimitConfig>>(new Map());

  const [formData, setFormData] = useState<PlanFormData>({
    code: "",
    name: "",
    description: "",
    billingPeriod: BillingPeriod.BILLING_PERIOD_MONTHLY,
    priceMinor: 0,
    currency: "USD",
    trialDays: 0,
    serviceCodes: [],
    featureCodes: [],
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const token = webClientAuthService.getToken();
      const [plansResponse, servicesResponse, featuresResponse] = await Promise.all([
        planManagementService.listPlans({}, { accessToken: token ?? undefined }),
        serviceManagementService.listServices({}, { accessToken: token ?? undefined }),
        featureManagementService.listFeatures({}, { accessToken: token ?? undefined }),
      ]);

      setPlans(plansResponse.plans);
      setServices(servicesResponse.services);
      setFeatures(featuresResponse.features);
      filterPlansByTab(plansResponse.plans, 0);
    } catch (error: any) {
      console.error("Failed to load data:", error);
      setError(`Failed to load data: ${error.message || error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const filterPlansByTab = (plansList: Plan[], tabIndex: number) => {
    let filtered: Plan[];
    switch (tabIndex) {
      case 0:
        filtered = plansList.filter((p) => p.status === PlanStatus.PLAN_STATUS_ACTIVE);
        break;
      case 1:
        filtered = plansList.filter((p) => p.status === PlanStatus.PLAN_STATUS_INACTIVE);
        break;
      case 2:
        filtered = plansList.filter((p) => p.status === PlanStatus.PLAN_STATUS_ARCHIVED);
        break;
      default:
        filtered = plansList;
    }
    setFilteredPlans(filtered);
  };

  const handleTabChange = (newValue: number) => {
    setCurrentTab(newValue);
    filterPlansByTab(plans, newValue);
  };

  const handleOpenCreateDialog = () => {
    setFormData({
      code: "",
      name: "",
      description: "",
      billingPeriod: BillingPeriod.BILLING_PERIOD_MONTHLY,
      priceMinor: 0,
      currency: "USD",
      trialDays: 0,
      serviceCodes: [],
      featureCodes: [],
    });
    setSelectedServices([]);
    setSelectedFeatures([]);
    setFeatureLimits(new Map());
    setCreateDialog(true);
    setError(null);
  };

  const handleOpenEditDialog = (plan: Plan) => {
    setSelectedPlan(plan);
    setFormData({
      code: plan.code,
      name: plan.name,
      description: plan.description,
      billingPeriod: plan.billingPeriod,
      priceMinor: plan.priceMinor,
      currency: plan.currency,
      trialDays: plan.trialDays,
      serviceCodes: plan.serviceCodes || [],
      featureCodes: plan.featureCodes || [],
    });
    setSelectedServices(plan.serviceCodes || []);
    setSelectedFeatures(plan.featureCodes || []);
    setEditDialog(true);
    setError(null);
  };

  const handleOpenDeleteDialog = (plan: Plan) => {
    setSelectedPlan(plan);
    setDeleteDialog(true);
    setError(null);
  };

  const handleCreatePlan = async () => {
    setActionLoading(true);
    setError(null);

    try {
      const token = webClientAuthService.getToken();
      const newPlan = await planManagementService.createPlan(
        {
          code: formData.code,
          name: formData.name,
          description: formData.description,
          serviceCodes: selectedServices,
          featureCodes: selectedFeatures,
          billingPeriod: formData.billingPeriod,
          priceMinor: formData.priceMinor,
          currency: formData.currency,
          trialDays: formData.trialDays,
        },
        { accessToken: token ?? undefined }
      );

      // Create feature limits for each selected feature
      for (const featureCode of selectedFeatures) {
        const limit = featureLimits.get(featureCode);
        if (limit) {
          await planFeatureManagementService.createPlanFeature(
            {
              planCode: newPlan.code,
              featureCode: featureCode,
              limitType: limit.limitType,
              limitValue: limit.limitValue,
              notes: limit.notes,
            },
            { accessToken: token ?? undefined }
          );
        }
      }

      setSuccessMessage(`Plan "${newPlan.name}" created successfully!`);
      const updatedPlans = [...plans, newPlan];
      setPlans(updatedPlans);
      filterPlansByTab(updatedPlans, currentTab);
      setCreateDialog(false);
    } catch (err: any) {
      console.error("Failed to create plan:", err);
      setError(err.message || "Failed to create plan");
    } finally {
      setActionLoading(false);
    }
  };

  const handleUpdatePlan = async () => {
    if (!selectedPlan) return;

    setActionLoading(true);
    setError(null);

    try {
      const token = webClientAuthService.getToken();
      const updatedPlan = await planManagementService.updatePlan(
        {
          code: selectedPlan.code,
          name: formData.name,
          description: formData.description,
          serviceCodes: selectedServices,
          featureCodes: selectedFeatures,
          billingPeriod: formData.billingPeriod,
          priceMinor: formData.priceMinor,
          currency: formData.currency,
          trialDays: formData.trialDays,
        },
        { accessToken: token ?? undefined }
      );

      setSuccessMessage(`Plan "${updatedPlan.name}" updated successfully!`);
      const updatedPlans = plans.map((p) => (p.code === updatedPlan.code ? updatedPlan : p));
      setPlans(updatedPlans);
      filterPlansByTab(updatedPlans, currentTab);
      setEditDialog(false);
    } catch (err: any) {
      console.error("Failed to update plan:", err);
      setError(err.message || "Failed to update plan");
    } finally {
      setActionLoading(false);
    }
  };

  const handleArchivePlan = async () => {
    if (!selectedPlan) return;

    setActionLoading(true);
    setError(null);

    try {
      const token = webClientAuthService.getToken();
      const updatedPlan = await planManagementService.updatePlan(
        {
          code: selectedPlan.code,
          status: PlanStatus.PLAN_STATUS_ARCHIVED,
        },
        { accessToken: token ?? undefined }
      );

      setSuccessMessage(`Plan "${updatedPlan.name}" archived successfully!`);
      const updatedPlans = plans.map((p) => (p.code === updatedPlan.code ? updatedPlan : p));
      setPlans(updatedPlans);
      filterPlansByTab(updatedPlans, currentTab);
      setDeleteDialog(false);
    } catch (err: any) {
      console.error("Failed to archive plan:", err);
      setError(err.message || "Failed to archive plan");
    } finally {
      setActionLoading(false);
    }
  };

  const updateFeatureLimit = (
    featureCode: string,
    field: "limitType" | "limitValue" | "notes",
    value: string | LimitType
  ) => {
    const newLimits = new Map(featureLimits);
    const currentLimit = newLimits.get(featureCode);
    if (currentLimit) {
      newLimits.set(featureCode, {
        ...currentLimit,
        [field]: value,
      });
      setFeatureLimits(newLimits);
    }
  };

  const handleServicesChange = (newServices: string[]) => {
    setSelectedServices(newServices);
    // Filter out features that don't belong to selected services
    setSelectedFeatures((prev) =>
      prev.filter((fCode) => {
        const feature = features.find((f) => f.code === fCode);
        return feature && newServices.includes(feature.serviceCode);
      })
    );
  };

  const handleFeaturesChange = (newFeatures: string[]) => {
    const addedFeatures = newFeatures.filter((code) => !selectedFeatures.includes(code));
    const removedFeatures = selectedFeatures.filter((code) => !newFeatures.includes(code));

    // Add default limits for new features
    addedFeatures.forEach((featureCode) => {
      const feature = features.find((f) => f.code === featureCode);
      if (feature) {
        const newLimits = new Map(featureLimits);
        newLimits.set(featureCode, {
          limitType:
            feature.valueType === ValueType.VALUE_TYPE_BOOL
              ? LimitType.LIMIT_TYPE_HARD
              : LimitType.LIMIT_TYPE_LIMITED,
          limitValue: feature.valueType === ValueType.VALUE_TYPE_BOOL ? "true" : "",
          notes: "",
        });
        setFeatureLimits(newLimits);
      }
    });

    // Remove limits for deselected features
    if (removedFeatures.length > 0) {
      const newLimits = new Map(featureLimits);
      removedFeatures.forEach((code) => newLimits.delete(code));
      setFeatureLimits(newLimits);
    }

    setSelectedFeatures(newFeatures);
  };

  return {
    // State
    isLoading,
    plans,
    filteredPlans,
    selectedPlan,
    createDialog,
    editDialog,
    deleteDialog,
    actionLoading,
    error,
    successMessage,
    currentTab,
    services,
    features,
    selectedServices,
    selectedFeatures,
    featureLimits,
    formData,

    // Actions
    setError,
    setSuccessMessage,
    setFormData,
    setCreateDialog,
    setEditDialog,
    setDeleteDialog,
    handleTabChange,
    handleOpenCreateDialog,
    handleOpenEditDialog,
    handleOpenDeleteDialog,
    handleCreatePlan,
    handleUpdatePlan,
    handleArchivePlan,
    updateFeatureLimit,
    handleServicesChange,
    handleFeaturesChange,
  };
}
