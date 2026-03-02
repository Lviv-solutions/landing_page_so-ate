"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import AdminRoute from "../../../components/AdminRoute";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Iconify } from "../../../../packages/my-saas-components/src/iconify";
import { useTranslation } from "../../../hooks/useTranslation";
import { getAdminId, getAdminInfo } from "../../../../lib/auth";
import { webClientAuthService } from "../../../../lib/auth-service";
import planManagementService, {
  Plan,
  PlanStatus,
  BillingPeriod,
} from "../../../../services/planManagementService";

import {
  AdminPageLayout,
  AdminLoadingScreen,
  StatusTabs,
  EmptyState,
  ConfirmDialog,
  PlanFormDialog,
} from "../../../components/admin";
import { AdminInfo, PlanFormData, DEFAULT_PLAN_FORM_DATA, TabConfig } from "../../../types/admin";

const NAV_BUTTONS = [
  { label: "Claims", icon: "solar:list-bold", path: "claims" },
  { label: "Assignments", icon: "solar:user-check-bold", path: "assignments" },
];

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

function AdminPlansContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [createDialog, setCreateDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState(0);
  const [adminInfo, setAdminInfo] = useState<AdminInfo | null>(null);
  const [formData, setFormData] = useState<PlanFormData>(DEFAULT_PLAN_FORM_DATA);

  const router = useRouter();
  const { locale } = useTranslation();
  const isArabic = locale === "ar";

  const filteredPlans = useMemo(() => {
    switch (currentTab) {
      case 0:
        return plans.filter((p) => p.status === PlanStatus.PLAN_STATUS_ACTIVE);
      case 1:
        return plans.filter((p) => p.status === PlanStatus.PLAN_STATUS_INACTIVE);
      case 2:
        return plans.filter((p) => p.status === PlanStatus.PLAN_STATUS_ARCHIVED);
      default:
        return plans;
    }
  }, [plans, currentTab]);

  const tabs: TabConfig[] = useMemo(
    () => [
      {
        label: "Active",
        count: plans.filter((p) => p.status === PlanStatus.PLAN_STATUS_ACTIVE).length,
        color: "success",
      },
      {
        label: "Inactive",
        count: plans.filter((p) => p.status === PlanStatus.PLAN_STATUS_INACTIVE).length,
        color: "warning",
      },
      {
        label: "Archived",
        count: plans.filter((p) => p.status === PlanStatus.PLAN_STATUS_ARCHIVED).length,
        color: "error",
      },
    ],
    [plans]
  );

  useEffect(() => {
    const loadPlans = async () => {
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
        const response = await planManagementService.listPlans(
          { pageSize: 100 },
          { accessToken: token ?? undefined }
        );

        setPlans(response.plans);
      } catch (error) {
        console.error("Failed to load plans:", error);
        setError("Failed to load plans");
      } finally {
        setIsLoading(false);
      }
    };

    loadPlans();
  }, [router, locale]);

  const handleOpenCreateDialog = () => {
    setFormData({ ...DEFAULT_PLAN_FORM_DATA });
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
    });
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
          billingPeriod: formData.billingPeriod,
          priceMinor: formData.priceMinor,
          currency: formData.currency,
          trialDays: formData.trialDays,
        },
        { accessToken: token ?? undefined }
      );

      setSuccessMessage(`Plan "${newPlan.name}" created successfully!`);
      setPlans((prev) => [...prev, newPlan]);
      setCreateDialog(false);
    } catch (err: unknown) {
      console.error("Failed to create plan:", err);
      setError(err instanceof Error ? err.message : "Failed to create plan");
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
          billingPeriod: formData.billingPeriod,
          priceMinor: formData.priceMinor,
          currency: formData.currency,
          trialDays: formData.trialDays,
          status: selectedPlan.status,
        },
        { accessToken: token ?? undefined }
      );

      setSuccessMessage(`Plan "${updatedPlan.name}" updated successfully!`);
      setPlans((prev) => prev.map((p) => (p.code === updatedPlan.code ? updatedPlan : p)));
      setEditDialog(false);
    } catch (err: unknown) {
      console.error("Failed to update plan:", err);
      setError(err instanceof Error ? err.message : "Failed to update plan");
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

      setSuccessMessage(`Plan "${selectedPlan.name}" archived successfully!`);
      setPlans((prev) => prev.map((p) => (p.code === updatedPlan.code ? updatedPlan : p)));
      setDeleteDialog(false);
    } catch (err: unknown) {
      console.error("Failed to archive plan:", err);
      setError(err instanceof Error ? err.message : "Failed to archive plan");
    } finally {
      setActionLoading(false);
    }
  };

  if (isLoading) {
    return <AdminLoadingScreen />;
  }

  return (
    <AdminPageLayout
      adminInfo={adminInfo}
      navButtons={NAV_BUTTONS}
      successMessage={successMessage}
      onClearSuccess={() => setSuccessMessage(null)}
    >
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

      <Card>
        <StatusTabs
          tabs={tabs}
          value={currentTab}
          onChange={(_e, newValue) => setCurrentTab(newValue)}
        />

        <CardContent>
          {filteredPlans.length === 0 ? (
            <EmptyState message="No plans in this category" />
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

      <PlanFormDialog
        open={createDialog}
        mode="create"
        formData={formData}
        onChange={setFormData}
        onSubmit={handleCreatePlan}
        onClose={() => setCreateDialog(false)}
        loading={actionLoading}
        error={error}
      />

      <PlanFormDialog
        open={editDialog}
        mode="edit"
        formData={formData}
        onChange={setFormData}
        onSubmit={handleUpdatePlan}
        onClose={() => setEditDialog(false)}
        loading={actionLoading}
        error={error}
      />

      <ConfirmDialog
        open={deleteDialog}
        title="Archive Plan"
        message={`Are you sure you want to archive the plan "${selectedPlan?.name}"? This action will make the plan unavailable for new subscriptions.`}
        severity="warning"
        confirmLabel="Archive Plan"
        confirmColor="error"
        confirmIcon="solar:archive-bold"
        loading={actionLoading}
        error={error}
        onConfirm={handleArchivePlan}
        onCancel={() => setDeleteDialog(false)}
      />
    </AdminPageLayout>
  );
}

export default function AdminPlansPage() {
  return (
    <AdminRoute>
      <AdminPlansContent />
    </AdminRoute>
  );
}
