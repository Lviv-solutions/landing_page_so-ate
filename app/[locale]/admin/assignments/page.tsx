"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import AdminRoute from "../../../components/AdminRoute";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import { Iconify } from "../../../../packages/my-saas-components/src/iconify";
import { useTranslation } from "../../../hooks/useTranslation";
import { getAdminId, getAdminInfo } from "../../../../lib/auth";
import { webClientAuthService } from "../../../../lib/auth-service";
import planAssignmentService, {
  PlanAssignment,
  AssignmentStatus,
} from "../../../../services/planAssignmentService";
import planManagementService, { Plan } from "../../../../services/planManagementService";
import userService, { User } from "../../../../services/userService";
import businessService, { Business } from "../../../../services/businessService";

import {
  AdminPageLayout,
  AdminLoadingScreen,
  StatusTabs,
  EmptyState,
  AssignmentsTable,
  AssignPlanDialog,
  AssignmentDetailsDialog,
  CancelAssignmentDialog,
} from "../../../components/admin";
import { AdminInfo, TabConfig } from "../../../types/admin";

function AdminAssignmentsContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [assignments, setAssignments] = useState<PlanAssignment[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [selectedAssignment, setSelectedAssignment] = useState<PlanAssignment | null>(null);
  const [userSearchQuery, setUserSearchQuery] = useState("");
  const [searchingUsers, setSearchingUsers] = useState(false);
  const [loadingBusinesses, setLoadingBusinesses] = useState(false);
  const [assignDialog, setAssignDialog] = useState(false);
  const [detailsDialog, setDetailsDialog] = useState(false);
  const [cancelDialog, setCancelDialog] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState(0);
  const [adminInfo, setAdminInfo] = useState<AdminInfo | null>(null);
  const [cancelReason, setCancelReason] = useState("");

  const [formData, setFormData] = useState({
    planCode: "",
    userId: "",
    businessId: "",
    startAt: dayjs(),
    endAt: dayjs().add(1, "year"),
    expiresAt: dayjs().add(7, "day"),
    notes: "",
  });

  const router = useRouter();
  const { locale } = useTranslation();
  const isArabic = locale === "ar";

  const filteredAssignments = useMemo(() => {
    switch (currentTab) {
      case 0:
        return assignments.filter(
          (a) => a.status === AssignmentStatus.ASSIGNMENT_STATUS_PENDING
        );
      case 1:
        return assignments.filter(
          (a) => a.status === AssignmentStatus.ASSIGNMENT_STATUS_ACCEPTED
        );
      case 2:
        return assignments.filter(
          (a) =>
            a.status === AssignmentStatus.ASSIGNMENT_STATUS_REJECTED ||
            a.status === AssignmentStatus.ASSIGNMENT_STATUS_CANCELED ||
            a.status === AssignmentStatus.ASSIGNMENT_STATUS_EXPIRED
        );
      default:
        return assignments;
    }
  }, [assignments, currentTab]);

  const tabs: TabConfig[] = useMemo(
    () => [
      {
        label: "Pending",
        count: assignments.filter(
          (a) => a.status === AssignmentStatus.ASSIGNMENT_STATUS_PENDING
        ).length,
        color: "warning",
      },
      {
        label: "Accepted",
        count: assignments.filter(
          (a) => a.status === AssignmentStatus.ASSIGNMENT_STATUS_ACCEPTED
        ).length,
        color: "success",
      },
      {
        label: "Rejected/Canceled",
        count: assignments.filter(
          (a) =>
            a.status === AssignmentStatus.ASSIGNMENT_STATUS_REJECTED ||
            a.status === AssignmentStatus.ASSIGNMENT_STATUS_CANCELED ||
            a.status === AssignmentStatus.ASSIGNMENT_STATUS_EXPIRED
        ).length,
        color: "error",
      },
    ],
    [assignments]
  );

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

        // Load assignments and plans separately to handle errors independently
        try {
          const assignmentsResponse = await planAssignmentService.listPlanAssignments(
            { pageSize: 100 },
            { accessToken: token ?? undefined }
          );
          setAssignments(assignmentsResponse.assignments);
        } catch (assignError) {
          console.error("Failed to load assignments:", assignError);
          setError("Failed to load assignments. The PlanAssignmentService may not be available.");
        }

        // Load plans separately
        try {
          const plansResponse = await planManagementService.listPlans(
            { pageSize: 100 },
            { accessToken: token ?? undefined }
          );
          setPlans(plansResponse.plans);
        } catch (planError) {
          console.error("Failed to load plans:", planError);
          // Don't set error here, just log it - assignments can still work
          console.warn("Plans not available. You won't be able to assign plans until the backend PlanManagement service is deployed.");
        }
      } catch (error) {
        console.error("Failed to load data:", error);
        setError("Failed to load page data");
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [router, locale]);


  const handleOpenAssignDialog = () => {
    setFormData({
      planCode: "",
      userId: "",
      businessId: "",
      startAt: dayjs(),
      endAt: dayjs().add(1, "year"),
      expiresAt: dayjs().add(7, "day"),
      notes: "",
    });
    setSelectedUser(null);
    setSelectedBusiness(null);
    setUsers([]);
    setBusinesses([]);
    setUserSearchQuery("");
    setAssignDialog(true);
    setError(null);
  };

  const handleSearchUsers = async () => {
    if (!userSearchQuery.trim()) {
      setUsers([]);
      return;
    }

    setSearchingUsers(true);
    try {
      const token = webClientAuthService.getToken();
      const searchResults = await userService.searchUsersByEmail(
        userSearchQuery,
        { accessToken: token ?? undefined }
      );
      setUsers(searchResults);
      setError(null);
    } catch (error) {
      console.error("Failed to search users:", error);
      setError("User search service not available. The backend UserService must be deployed first.");
      setUsers([]);
    } finally {
      setSearchingUsers(false);
    }
  };

  const handleSelectUser = async (user: User) => {
    setSelectedUser(user);
    setFormData({ ...formData, userId: user.id });
    setLoadingBusinesses(true);

    try {
      const token = webClientAuthService.getToken();
      const response = await businessService.listBusinesses(
        100,
        "",
        `created_by=${user.id}`,
        { accessToken: token ?? undefined }
      );
      
      const userBusinesses = response.businessesList || [];
      setBusinesses(userBusinesses);
      
      if (userBusinesses.length === 0) {
        setError(`No businesses found for user ${user.email}`);
      }
    } catch (error) {
      console.error("Failed to load businesses:", error);
      setError("Failed to load user's businesses");
    } finally {
      setLoadingBusinesses(false);
    }
  };

  const handleSelectBusiness = (business: Business) => {
    setSelectedBusiness(business);
    setFormData({ ...formData, businessId: business.id });
  };

  const handleOpenDetailsDialog = (assignment: PlanAssignment) => {
    setSelectedAssignment(assignment);
    setDetailsDialog(true);
  };

  const handleOpenCancelDialog = (assignment: PlanAssignment) => {
    setSelectedAssignment(assignment);
    setCancelReason("");
    setCancelDialog(true);
    setError(null);
  };

  const handleAssignPlan = async () => {
    setActionLoading(true);
    setError(null);

    try {
      if (!formData.planCode || !formData.userId || !formData.businessId) {
        setError("Please fill in all required fields");
        setActionLoading(false);
        return;
      }

      const token = webClientAuthService.getToken();
      const response = await planAssignmentService.assignPlanToUser(
        {
          planCode: formData.planCode,
          userId: formData.userId,
          businessId: formData.businessId,
          startAt: formData.startAt.toDate(),
          endAt: formData.endAt.toDate(),
          expiresAt: formData.expiresAt.toDate(),
          notes: formData.notes,
        },
        { accessToken: token ?? undefined }
      );

      setSuccessMessage(
        `Plan assigned successfully! ${response.emailSent ? "Email sent to user." : ""}`
      );
      setAssignments((prev) => [response.assignment, ...prev]);
      setAssignDialog(false);
    } catch (err: unknown) {
      console.error("Failed to assign plan:", err);
      setError(err instanceof Error ? err.message : "Failed to assign plan");
    } finally {
      setActionLoading(false);
    }
  };

  const handleCancelAssignment = async () => {
    if (!selectedAssignment) return;

    if (!cancelReason.trim()) {
      setError("Please provide a cancellation reason");
      return;
    }

    setActionLoading(true);
    setError(null);

    try {
      const token = webClientAuthService.getToken();
      const updatedAssignment = await planAssignmentService.cancelPlanAssignment(
        selectedAssignment.id,
        cancelReason,
        { accessToken: token ?? undefined }
      );

      setSuccessMessage("Assignment canceled successfully");
      setAssignments((prev) => prev.map((a) => (a.id === updatedAssignment.id ? updatedAssignment : a)));
      setCancelDialog(false);
    } catch (err: unknown) {
      console.error("Failed to cancel assignment:", err);
      setError(err instanceof Error ? err.message : "Failed to cancel assignment");
    } finally {
      setActionLoading(false);
    }
  };

  if (isLoading) {
    return <AdminLoadingScreen />;
  }

  const navButtons = [
    { label: "Claims", icon: "solar:list-bold", path: "claims" },
    { label: "Plans", icon: "solar:bill-list-bold", path: "plans" },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AdminPageLayout
        adminInfo={adminInfo}
        navButtons={navButtons}
        successMessage={successMessage}
        onClearSuccess={() => setSuccessMessage(null)}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Plan Assignments
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Assign subscription plans to users
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<Iconify icon="solar:user-check-bold" />}
            onClick={handleOpenAssignDialog}
            sx={{
              background: "linear-gradient(135deg, #ED614A 0%, #E6446F 50%, #FF6B35 100%)",
              "&:hover": {
                background: "linear-gradient(135deg, #DC5039 0%, #D5335E 50%, #EE5A24 100%)",
              },
            }}
          >
            Assign Plan
          </Button>
        </Box>

        <Card>
          <StatusTabs
            tabs={tabs}
            value={currentTab}
            onChange={(_e, newValue) => setCurrentTab(newValue)}
          />

          <CardContent>
            {filteredAssignments.length === 0 ? (
              <EmptyState message="No assignments in this category" />
            ) : (
              <AssignmentsTable
                assignments={filteredAssignments}
                isArabic={isArabic}
                onViewDetails={handleOpenDetailsDialog}
                onCancel={handleOpenCancelDialog}
              />
            )}
          </CardContent>
        </Card>

        <AssignPlanDialog
          open={assignDialog}
          error={error}
          plans={plans}
          users={users}
          businesses={businesses}
          selectedUser={selectedUser}
          selectedBusiness={selectedBusiness}
          formData={formData}
          actionLoading={actionLoading}
          searchingUsers={searchingUsers}
          loadingBusinesses={loadingBusinesses}
          userSearchQuery={userSearchQuery}
          onClose={() => setAssignDialog(false)}
          onAssign={handleAssignPlan}
          onSearchUsers={handleSearchUsers}
          onSelectUser={handleSelectUser}
          onSelectBusiness={handleSelectBusiness}
          onUserSearchQueryChange={setUserSearchQuery}
          onFormDataChange={setFormData}
        />

        <AssignmentDetailsDialog
          open={detailsDialog}
          assignment={selectedAssignment}
          onClose={() => setDetailsDialog(false)}
        />

        <CancelAssignmentDialog
          open={cancelDialog}
          error={error}
          cancelReason={cancelReason}
          actionLoading={actionLoading}
          onClose={() => setCancelDialog(false)}
          onCancel={handleCancelAssignment}
          onReasonChange={setCancelReason}
        />
      </AdminPageLayout>
    </LocalizationProvider>
  );
}

export default function AdminAssignmentsPage() {
  return (
    <AdminRoute>
      <AdminAssignmentsContent />
    </AdminRoute>
  );
}
