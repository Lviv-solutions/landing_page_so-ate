"use client";
import { useRouter } from "next/navigation";
import AdminRoute from "../../../components/AdminRoute";
import Image from "next/image";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Chip from "@mui/material/Chip";
import { Iconify } from "../../../../packages/my-saas-components/src/iconify";
import { useTranslation } from "../../../hooks/useTranslation";
import { getAdminInfo, logoutAdmin } from "../../../../lib/auth";
import { usePlanManagement } from "./hooks/usePlanManagement";
import { PlansTable } from "./components/PlansTable";
import { PlanFormDialog } from "./components/PlanFormDialog";
import { DeletePlanDialog } from "./components/DeletePlanDialog";
import { PlanStatus } from "./types";
import { useState, useEffect } from "react";

function AdminPlansContent() {
  const router = useRouter();
  const { t, locale } = useTranslation();
  const isArabic = locale === "ar";
  const [adminInfo, setAdminInfo] = useState<{ id: string; email?: string; name?: string } | null>(null);

  const {
    isLoading,
    plans,
    filteredPlans,
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
    selectedPlan,
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
  } = usePlanManagement();

  useEffect(() => {
    const info = getAdminInfo();
    if (!info) {
      router.push(`/${locale}/admin/login`);
      return;
    }
    setAdminInfo(info);
  }, [router, locale]);

  const toggleLocale = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split("/").filter(Boolean);
    pathSegments[0] = newLocale;
    router.push(`/${pathSegments.join("/")}`);
  };

  const handleLogout = () => {
    logoutAdmin();
    router.push(`/${locale}/admin/login`);
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9fafb" }}>
      {/* Header */}
      <Box
        sx={{
          bgcolor: "white",
          borderBottom: "1px solid #e5e7eb",
          px: 3,
          py: 2,
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
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
        </Stack>
      </Box>

      {/* Main Content */}
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
              <Tabs value={currentTab} onChange={(_, v) => handleTabChange(v)}>
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
              <PlansTable
                plans={filteredPlans}
                onEdit={handleOpenEditDialog}
                onArchive={handleOpenDeleteDialog}
              />
            </CardContent>
          </Card>
        </Stack>
      </Box>

      {/* Create/Edit Dialog */}
      <PlanFormDialog
        open={createDialog || editDialog}
        mode={createDialog ? "create" : "edit"}
        formData={formData}
        services={services}
        features={features}
        selectedServices={selectedServices}
        selectedFeatures={selectedFeatures}
        featureLimits={featureLimits}
        loading={actionLoading}
        error={error}
        onClose={() => {
          setCreateDialog(false);
          setEditDialog(false);
          setError(null);
        }}
        onSubmit={createDialog ? handleCreatePlan : handleUpdatePlan}
        onFormChange={(data) => setFormData({ ...formData, ...data })}
        onServicesChange={handleServicesChange}
        onFeaturesChange={handleFeaturesChange}
        onFeatureLimitUpdate={updateFeatureLimit}
      />

      {/* Delete Dialog */}
      <DeletePlanDialog
        open={deleteDialog}
        plan={selectedPlan}
        loading={actionLoading}
        error={error}
        onClose={() => {
          setDeleteDialog(false);
          setError(null);
        }}
        onConfirm={handleArchivePlan}
      />
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
