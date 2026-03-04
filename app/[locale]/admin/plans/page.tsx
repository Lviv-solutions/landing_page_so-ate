"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminRoute from "../../../components/AdminRoute";
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
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

import { Iconify } from "../../../../packages/my-saas-components/src/iconify";
import { useTranslation } from "../../../hooks/useTranslation";
import { getAdminId, getAdminInfo, logoutAdmin } from "../../../../lib/auth";
import { webClientAuthService } from "../../../../lib/auth-service";
import planManagementService, {
  Plan,
  PlanStatus,
  BillingPeriod,
} from "../../../../services/planManagementService";
import serviceManagementService, {
  Service,
} from "../../../../services/serviceManagementService";
import featureManagementService, {
  Feature,
  ValueType,
} from "../../../../services/featureManagementService";
import planFeatureManagementService, {
  LimitType,
  CreatePlanFeatureParams,
} from "../../../../services/planFeatureManagementService";

function AdminPlansContent() {
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
  const [adminInfo, setAdminInfo] = useState<{ id: string; email?: string; name?: string } | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [featureLimits, setFeatureLimits] = useState<Map<string, {
    limitType: LimitType;
    limitValue: string;
    notes: string;
  }>>(new Map());

  const [formData, setFormData] = useState({
    code: "",
    name: "",
    description: "",
    billingPeriod: BillingPeriod.BILLING_PERIOD_MONTHLY,
    priceMinor: 0,
    currency: "USD",
    trialDays: 0,
    serviceCodes: [] as string[],
    featureCodes: [] as string[],
  });

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
    const loadData = async () => {
      try {
        const loggedInAdminId = getAdminId();
        if (!loggedInAdminId) {
          setError("Admin not logged in");
          setIsLoading(false);
          router.push(`/${locale}/admin`);
          return;
        }
        setAdminInfo(getAdminInfo());

        const token = webClientAuthService.getToken();
        const [plansResponse, servicesResponse, featuresResponse] = await Promise.all([
          planManagementService.listPlans(
            { pageSize: 100 },
            { accessToken: token ?? undefined }
          ),
          serviceManagementService.listServices(
            { pageSize: 100 },
            { accessToken: token ?? undefined }
          ),
          featureManagementService.listFeatures(
            { pageSize: 100 },
            { accessToken: token ?? undefined }
          ),
        ]);

        setPlans(plansResponse.plans);
        setServices(servicesResponse.services);
        setFeatures(featuresResponse.features);
        filterPlansByTab(plansResponse.plans, 0);
      } catch (error) {
        console.error("Failed to load data:", error);
        setError("Failed to load data");
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [router, locale]);

  const handleLogout = () => {
    logoutAdmin();
    webClientAuthService.logout();
    router.push(`/${locale}/admin`);
  };

  const filterPlansByTab = (allPlans: Plan[], tabIndex: number) => {
    let filtered: Plan[];
    switch (tabIndex) {
      case 0:
        filtered = allPlans.filter((p) => p.status === PlanStatus.PLAN_STATUS_ACTIVE);
        break;
      case 1:
        filtered = allPlans.filter((p) => p.status === PlanStatus.PLAN_STATUS_INACTIVE);
        break;
      case 2:
        filtered = allPlans.filter((p) => p.status === PlanStatus.PLAN_STATUS_ARCHIVED);
        break;
      default:
        filtered = allPlans;
    }
    setFilteredPlans(filtered);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
    filterPlansByTab(plans, newValue);
  };

  const getPlanStatusColor = (status: PlanStatus) => {
    switch (status) {
      case PlanStatus.PLAN_STATUS_ACTIVE:
        return "success";
      case PlanStatus.PLAN_STATUS_INACTIVE:
        return "warning";
      case PlanStatus.PLAN_STATUS_ARCHIVED:
        return "error";
      default:
        return "default";
    }
  };

  const getPlanStatusText = (status: PlanStatus) => {
    switch (status) {
      case PlanStatus.PLAN_STATUS_ACTIVE:
        return "Active";
      case PlanStatus.PLAN_STATUS_INACTIVE:
        return "Inactive";
      case PlanStatus.PLAN_STATUS_ARCHIVED:
        return "Archived";
      default:
        return "Unknown";
    }
  };

  const getBillingPeriodText = (period: BillingPeriod) => {
    switch (period) {
      case BillingPeriod.BILLING_PERIOD_MONTHLY:
        return "Monthly";
      case BillingPeriod.BILLING_PERIOD_QUARTERLY:
        return "Quarterly";
      case BillingPeriod.BILLING_PERIOD_YEARLY:
        return "Yearly";
      case BillingPeriod.BILLING_PERIOD_LIFETIME:
        return "Lifetime";
      default:
        return "Unknown";
    }
  };

  const formatPrice = (priceMinor: number, currency: string) => {
    const price = priceMinor / 100;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(price);
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
          code: formData.code,
          name: formData.name,
          description: formData.description,
          serviceCodes: selectedServices,
          featureCodes: selectedFeatures,
          billingPeriod: formData.billingPeriod,
          priceMinor: formData.priceMinor,
          currency: formData.currency,
          trialDays: formData.trialDays,
          status: selectedPlan.status,
        },
        { accessToken: token ?? undefined }
      );

      setSuccessMessage(`Plan "${updatedPlan.name}" updated successfully!`);
      const updatedPlans = plans.map((p) =>
        p.code === updatedPlan.code ? updatedPlan : p
      );
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

  const handleServiceToggle = (serviceCode: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(serviceCode)) {
        const updated = prev.filter((code) => code !== serviceCode);
        setSelectedFeatures((prevFeatures) =>
          prevFeatures.filter((fCode) => {
            const feature = features.find((f) => f.code === fCode);
            return feature && updated.includes(feature.serviceCode);
          })
        );
        return updated;
      } else {
        return [...prev, serviceCode];
      }
    });
  };

  const handleFeatureToggle = (featureCode: string) => {
    setSelectedFeatures((prev) => {
      const isRemoving = prev.includes(featureCode);
      if (isRemoving) {
        // Remove feature limit when deselecting feature
        const newLimits = new Map(featureLimits);
        newLimits.delete(featureCode);
        setFeatureLimits(newLimits);
        return prev.filter((code) => code !== featureCode);
      } else {
        // Add default feature limit when selecting feature
        const feature = features.find((f) => f.code === featureCode);
        if (feature) {
          const newLimits = new Map(featureLimits);
          newLimits.set(featureCode, {
            limitType: feature.valueType === ValueType.VALUE_TYPE_BOOL 
              ? LimitType.LIMIT_TYPE_HARD 
              : LimitType.LIMIT_TYPE_LIMITED,
            limitValue: feature.valueType === ValueType.VALUE_TYPE_BOOL ? "true" : "",
            notes: "",
          });
          setFeatureLimits(newLimits);
        }
        return [...prev, featureCode];
      }
    });
  };

  const getAvailableFeatures = () => {
    return features.filter((feature) => selectedServices.includes(feature.serviceCode));
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

  const renderFeatureLimitInput = (feature: Feature) => {
    const limit = featureLimits.get(feature.code);
    if (!limit) return null;

    const isUnlimited = limit.limitType === LimitType.LIMIT_TYPE_UNLIMITED;

    return (
      <Box key={feature.code} sx={{ mb: 2, p: 2, border: "1px solid #e0e0e0", borderRadius: 1 }}>
        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
          {feature.name}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
          {feature.code} • {feature.serviceCode}
        </Typography>

        <Stack spacing={2}>
          {/* Limit Type Selection */}
          <FormControl fullWidth size="small">
            <InputLabel>Limit Type</InputLabel>
            <Select
              value={limit.limitType}
              onChange={(e) => updateFeatureLimit(feature.code, "limitType", e.target.value as LimitType)}
              label="Limit Type"
            >
              <MenuItem value={LimitType.LIMIT_TYPE_HARD}>Hard Limit</MenuItem>
              <MenuItem value={LimitType.LIMIT_TYPE_SOFT}>Soft Limit (Warning)</MenuItem>
              {feature.valueType === ValueType.VALUE_TYPE_INT && (
                <MenuItem value={LimitType.LIMIT_TYPE_UNLIMITED}>Unlimited</MenuItem>
              )}
              <MenuItem value={LimitType.LIMIT_TYPE_DISABLED}>Disabled</MenuItem>
            </Select>
          </FormControl>

          {/* Value Input based on feature type */}
          {!isUnlimited && limit.limitType !== LimitType.LIMIT_TYPE_DISABLED && (
            <>
              {feature.valueType === ValueType.VALUE_TYPE_INT && (
                <TextField
                  type="number"
                  label={`Limit Value (${feature.unit})`}
                  value={limit.limitValue}
                  onChange={(e) => updateFeatureLimit(feature.code, "limitValue", e.target.value)}
                  size="small"
                  fullWidth
                  inputProps={{ min: 0 }}
                />
              )}

              {feature.valueType === ValueType.VALUE_TYPE_BOOL && (
                <FormControl fullWidth size="small">
                  <InputLabel>Value</InputLabel>
                  <Select
                    value={limit.limitValue}
                    onChange={(e) => updateFeatureLimit(feature.code, "limitValue", e.target.value)}
                    label="Value"
                  >
                    <MenuItem value="true">Enabled</MenuItem>
                    <MenuItem value="false">Disabled</MenuItem>
                  </Select>
                </FormControl>
              )}

              {feature.valueType === ValueType.VALUE_TYPE_TEXT && (
                <TextField
                  label="Text Value"
                  value={limit.limitValue}
                  onChange={(e) => updateFeatureLimit(feature.code, "limitValue", e.target.value)}
                  size="small"
                  fullWidth
                />
              )}

              {feature.valueType === ValueType.VALUE_TYPE_JSON && (
                <TextField
                  label="JSON Configuration"
                  value={limit.limitValue}
                  onChange={(e) => updateFeatureLimit(feature.code, "limitValue", e.target.value)}
                  size="small"
                  fullWidth
                  multiline
                  rows={3}
                  placeholder='{"key": "value"}'
                />
              )}
            </>
          )}

          {isUnlimited && (
            <Chip label="Unlimited" color="success" size="small" sx={{ width: "fit-content" }} />
          )}

          {/* Notes */}
          <TextField
            label="Notes (Optional)"
            value={limit.notes}
            onChange={(e) => updateFeatureLimit(feature.code, "notes", e.target.value)}
            size="small"
            fullWidth
            placeholder="Add notes about this limit"
          />
        </Stack>
      </Box>
    );
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

      setSuccessMessage(`Plan "${selectedPlan.name}" archived successfully!`);
      const updatedPlans = plans.map((p) =>
        p.code === updatedPlan.code ? updatedPlan : p
      );
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
          <Typography color="text.secondary">Loading...</Typography>
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
            <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
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
          <Button
            variant="outlined"
            startIcon={<Iconify icon="solar:list-bold" />}
            onClick={() => router.push(`/${locale}/admin/claims`)}
          >
            Claims
          </Button>
          <Button
            variant="outlined"
            startIcon={<Iconify icon="solar:user-check-bold" />}
            onClick={() => router.push(`/${locale}/admin/assignments`)}
          >
            Assignments
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
            <Typography sx={{ fontSize: "0.875rem", fontWeight: 500, color: "#6B7280" }}>
              {locale === "ar" ? "العربية" : "English"}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            color="error"
            startIcon={<Iconify icon="solar:logout-2-bold" />}
            onClick={handleLogout}
            sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600 }}
          >
            Logout
          </Button>
        </Stack>
      </Box>

      <Box sx={{ maxWidth: "1400px", mx: "auto", px: { xs: 3, md: 6 }, py: 4 }}>
        <Stack spacing={3}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Plan Management
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Create and manage subscription plans
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<Iconify icon="solar:add-circle-bold" />}
              onClick={handleOpenCreateDialog}
              sx={{
                background: "linear-gradient(135deg, #ED614A 0%, #E6446F 50%, #FF6B35 100%)",
                "&:hover": {
                  background: "linear-gradient(135deg, #DC5039 0%, #D5335E 50%, #EE5A24 100%)",
                },
              }}
            >
              Create Plan
            </Button>
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
                      <span>Active</span>
                      <Chip
                        label={plans.filter((p) => p.status === PlanStatus.PLAN_STATUS_ACTIVE).length}
                        size="small"
                        color="success"
                      />
                    </Stack>
                  }
                />
                <Tab
                  label={
                    <Stack direction="row" spacing={1} alignItems="center">
                      <span>Inactive</span>
                      <Chip
                        label={plans.filter((p) => p.status === PlanStatus.PLAN_STATUS_INACTIVE).length}
                        size="small"
                        color="warning"
                      />
                    </Stack>
                  }
                />
                <Tab
                  label={
                    <Stack direction="row" spacing={1} alignItems="center">
                      <span>Archived</span>
                      <Chip
                        label={plans.filter((p) => p.status === PlanStatus.PLAN_STATUS_ARCHIVED).length}
                        size="small"
                        color="error"
                      />
                    </Stack>
                  }
                />
              </Tabs>
            </Box>

            <CardContent>
              {filteredPlans.length === 0 ? (
                <Box textAlign="center" py={6}>
                  <Iconify icon="solar:inbox-line-bold-duotone" width={80} color="grey.400" />
                  <Typography variant="h6" color="text.secondary" mt={2}>
                    No plans in this category
                  </Typography>
                </Box>
              ) : (
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Code</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Billing Period</TableCell>
                        <TableCell>Trial Days</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align={isArabic ? "left" : "right"}>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredPlans.map((plan) => (
                        <TableRow key={plan.code} sx={{ "&:hover": { bgcolor: "action.hover" } }}>
                          <TableCell>
                            <Typography variant="body2" fontFamily="monospace" fontWeight="medium">
                              {plan.code}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" fontWeight="medium">
                              {plan.name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {plan.description}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" fontWeight="bold">
                              {formatPrice(plan.priceMinor, plan.currency)}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2">
                              {getBillingPeriodText(plan.billingPeriod)}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2">{plan.trialDays} days</Typography>
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={getPlanStatusText(plan.status)}
                              color={getPlanStatusColor(plan.status)}
                              size="small"
                            />
                          </TableCell>
                          <TableCell align={isArabic ? "left" : "right"}>
                            <Stack
                              direction="row"
                              spacing={1}
                              justifyContent={isArabic ? "flex-start" : "flex-end"}
                            >
                              <Button
                                size="small"
                                variant="outlined"
                                color="primary"
                                startIcon={<Iconify icon="solar:pen-bold" />}
                                onClick={() => handleOpenEditDialog(plan)}
                              >
                                Edit
                              </Button>
                              {plan.status !== PlanStatus.PLAN_STATUS_ARCHIVED && (
                                <Button
                                  size="small"
                                  variant="outlined"
                                  color="error"
                                  startIcon={<Iconify icon="solar:archive-bold" />}
                                  onClick={() => handleOpenDeleteDialog(plan)}
                                >
                                  Archive
                                </Button>
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

      <Dialog open={createDialog} onClose={() => setCreateDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Create New Plan</DialogTitle>
        <DialogContent>
          <Stack spacing={2} pt={1}>
            {error && (
              <Alert severity="error" icon={<Iconify icon="solar:danger-circle-bold" />}>
                {error}
              </Alert>
            )}
            <TextField
              label="Plan Code"
              value={formData.code}
              onChange={(e) => setFormData({ ...formData, code: e.target.value })}
              fullWidth
              required
              helperText="Unique identifier (e.g., premium, enterprise)"
            />
            <TextField
              label="Plan Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              fullWidth
              required
            />
            <TextField
              label="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              fullWidth
              multiline
              rows={3}
              required
            />
            <FormControl fullWidth>
              <InputLabel>Services</InputLabel>
              <Select
                multiple
                value={selectedServices}
                onChange={(e) => {
                  const value = e.target.value as string[];
                  setSelectedServices(value);
                }}
                label="Services"
                renderValue={(selected) => {
                  const selectedNames = services
                    .filter((s) => selected.includes(s.code))
                    .map((s) => s.name);
                  return selectedNames.join(", ");
                }}
              >
                {services.map((service) => (
                  <MenuItem key={service.code} value={service.code}>
                    <Checkbox checked={selectedServices.includes(service.code)} />
                    <ListItemText primary={service.name} secondary={service.code} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Features</InputLabel>
              <Select
                multiple
                value={selectedFeatures}
                onChange={(e) => {
                  const value = e.target.value as string[];
                  const newFeatures = value.filter(code => !selectedFeatures.includes(code));
                  const removedFeatures = selectedFeatures.filter(code => !value.includes(code));
                  
                  // Add new features with default limits
                  newFeatures.forEach(featureCode => {
                    const feature = features.find(f => f.code === featureCode);
                    if (feature) {
                      const newLimits = new Map(featureLimits);
                      newLimits.set(featureCode, {
                        limitType: feature.valueType === ValueType.VALUE_TYPE_BOOL 
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
                    removedFeatures.forEach(code => newLimits.delete(code));
                    setFeatureLimits(newLimits);
                  }
                  
                  setSelectedFeatures(value);
                }}
                label="Features"
                disabled={selectedServices.length === 0}
                renderValue={(selected) => {
                  const selectedNames = features
                    .filter((f) => selected.includes(f.code))
                    .map((f) => f.name);
                  return selectedNames.join(", ");
                }}
              >
                {getAvailableFeatures().map((feature) => (
                  <MenuItem key={feature.code} value={feature.code}>
                    <Checkbox checked={selectedFeatures.includes(feature.code)} />
                    <ListItemText 
                      primary={feature.name} 
                      secondary={`${feature.code} (${feature.serviceCode})`} 
                    />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Feature Limits Configuration */}
            {selectedFeatures.length > 0 && (
              <Box>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                  Configure Feature Limits
                </Typography>
                {selectedFeatures.map((featureCode) => {
                  const feature = features.find((f) => f.code === featureCode);
                  return feature ? renderFeatureLimitInput(feature) : null;
                })}
              </Box>
            )}

            <FormControl fullWidth>
              <InputLabel>Billing Period</InputLabel>
              <Select
                value={formData.billingPeriod}
                onChange={(e) =>
                  setFormData({ ...formData, billingPeriod: e.target.value as BillingPeriod })
                }
                label="Billing Period"
              >
                <MenuItem value={BillingPeriod.BILLING_PERIOD_MONTHLY}>Monthly</MenuItem>
                <MenuItem value={BillingPeriod.BILLING_PERIOD_QUARTERLY}>Quarterly</MenuItem>
                <MenuItem value={BillingPeriod.BILLING_PERIOD_YEARLY}>Yearly</MenuItem>
                <MenuItem value={BillingPeriod.BILLING_PERIOD_LIFETIME}>Lifetime</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Price"
              type="number"
              value={formData.priceMinor / 100}
              onChange={(e) =>
                setFormData({ ...formData, priceMinor: Math.round(parseFloat(e.target.value) * 100) })
              }
              fullWidth
              required
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              helperText="Enter price in dollars (e.g., 29.99)"
            />
            <FormControl fullWidth>
              <InputLabel>Currency</InputLabel>
              <Select
                value={formData.currency}
                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                label="Currency"
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="GBP">GBP</MenuItem>
                <MenuItem value="SAR">SAR</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Trial Days"
              type="number"
              value={formData.trialDays}
              onChange={(e) => setFormData({ ...formData, trialDays: parseInt(e.target.value) })}
              fullWidth
              helperText="Number of free trial days (0 for no trial)"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCreateDialog(false)} disabled={actionLoading}>
            Cancel
          </Button>
          <Button
            onClick={handleCreatePlan}
            variant="contained"
            disabled={actionLoading}
            startIcon={
              actionLoading ? <CircularProgress size={16} /> : <Iconify icon="solar:check-circle-bold" />
            }
          >
            Create Plan
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={editDialog} onClose={() => setEditDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Plan</DialogTitle>
        <DialogContent>
          <Stack spacing={2} pt={1}>
            {error && (
              <Alert severity="error" icon={<Iconify icon="solar:danger-circle-bold" />}>
                {error}
              </Alert>
            )}
            <TextField label="Plan Code" value={formData.code} fullWidth disabled />
            <TextField
              label="Plan Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              fullWidth
              required
            />
            <TextField
              label="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              fullWidth
              multiline
              rows={3}
              required
            />
            <FormControl fullWidth>
              <InputLabel>Services</InputLabel>
              <Select
                multiple
                value={selectedServices}
                onChange={(e) => {
                  const value = e.target.value as string[];
                  setSelectedServices(value);
                }}
                label="Services"
                renderValue={(selected) => {
                  const selectedNames = services
                    .filter((s) => selected.includes(s.code))
                    .map((s) => s.name);
                  return selectedNames.join(", ");
                }}
              >
                {services.map((service) => (
                  <MenuItem key={service.code} value={service.code}>
                    <Checkbox checked={selectedServices.includes(service.code)} />
                    <ListItemText primary={service.name} secondary={service.code} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Features</InputLabel>
              <Select
                multiple
                value={selectedFeatures}
                onChange={(e) => {
                  const value = e.target.value as string[];
                  const newFeatures = value.filter(code => !selectedFeatures.includes(code));
                  const removedFeatures = selectedFeatures.filter(code => !value.includes(code));
                  
                  // Add new features with default limits
                  newFeatures.forEach(featureCode => {
                    const feature = features.find(f => f.code === featureCode);
                    if (feature) {
                      const newLimits = new Map(featureLimits);
                      newLimits.set(featureCode, {
                        limitType: feature.valueType === ValueType.VALUE_TYPE_BOOL 
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
                    removedFeatures.forEach(code => newLimits.delete(code));
                    setFeatureLimits(newLimits);
                  }
                  
                  setSelectedFeatures(value);
                }}
                label="Features"
                disabled={selectedServices.length === 0}
                renderValue={(selected) => {
                  const selectedNames = features
                    .filter((f) => selected.includes(f.code))
                    .map((f) => f.name);
                  return selectedNames.join(", ");
                }}
              >
                {getAvailableFeatures().map((feature) => (
                  <MenuItem key={feature.code} value={feature.code}>
                    <Checkbox checked={selectedFeatures.includes(feature.code)} />
                    <ListItemText 
                      primary={feature.name} 
                      secondary={`${feature.code} (${feature.serviceCode})`} 
                    />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Feature Limits Configuration */}
            {selectedFeatures.length > 0 && (
              <Box>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                  Configure Feature Limits
                </Typography>
                {selectedFeatures.map((featureCode) => {
                  const feature = features.find((f) => f.code === featureCode);
                  return feature ? renderFeatureLimitInput(feature) : null;
                })}
              </Box>
            )}

            <FormControl fullWidth>
              <InputLabel>Billing Period</InputLabel>
              <Select
                value={formData.billingPeriod}
                onChange={(e) =>
                  setFormData({ ...formData, billingPeriod: e.target.value as BillingPeriod })
                }
                label="Billing Period"
              >
                <MenuItem value={BillingPeriod.BILLING_PERIOD_MONTHLY}>Monthly</MenuItem>
                <MenuItem value={BillingPeriod.BILLING_PERIOD_QUARTERLY}>Quarterly</MenuItem>
                <MenuItem value={BillingPeriod.BILLING_PERIOD_YEARLY}>Yearly</MenuItem>
                <MenuItem value={BillingPeriod.BILLING_PERIOD_LIFETIME}>Lifetime</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Price"
              type="number"
              value={formData.priceMinor / 100}
              onChange={(e) =>
                setFormData({ ...formData, priceMinor: Math.round(parseFloat(e.target.value) * 100) })
              }
              fullWidth
              required
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
            <FormControl fullWidth>
              <InputLabel>Currency</InputLabel>
              <Select
                value={formData.currency}
                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                label="Currency"
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="GBP">GBP</MenuItem>
                <MenuItem value="SAR">SAR</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Trial Days"
              type="number"
              value={formData.trialDays}
              onChange={(e) => setFormData({ ...formData, trialDays: parseInt(e.target.value) })}
              fullWidth
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialog(false)} disabled={actionLoading}>
            Cancel
          </Button>
          <Button
            onClick={handleUpdatePlan}
            variant="contained"
            disabled={actionLoading}
            startIcon={
              actionLoading ? <CircularProgress size={16} /> : <Iconify icon="solar:check-circle-bold" />
            }
          >
            Update Plan
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Archive Plan</DialogTitle>
        <DialogContent>
          <Stack spacing={2} pt={1}>
            {error && (
              <Alert severity="error" icon={<Iconify icon="solar:danger-circle-bold" />}>
                {error}
              </Alert>
            )}
            <Alert severity="warning" icon={<Iconify icon="solar:info-circle-bold" />}>
              Are you sure you want to archive the plan "{selectedPlan?.name}"? This action will make the
              plan unavailable for new subscriptions.
            </Alert>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog(false)} disabled={actionLoading}>
            Cancel
          </Button>
          <Button
            onClick={handleArchivePlan}
            variant="contained"
            color="error"
            disabled={actionLoading}
            startIcon={
              actionLoading ? <CircularProgress size={16} /> : <Iconify icon="solar:archive-bold" />
            }
          >
            Archive Plan
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default function AdminPlansPage() {
  return (
    <AdminRoute>
      <AdminPlansContent />
    </AdminRoute>
  );
}
