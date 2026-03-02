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
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import { Iconify } from "../../../../packages/my-saas-components/src/iconify";
import { useTranslation } from "../../../hooks/useTranslation";
import { getAdminId, getAdminInfo, logoutAdmin } from "../../../../lib/auth";
import { webClientAuthService } from "../../../../lib/auth-service";
import planAssignmentService, {
  PlanAssignment,
  AssignmentStatus,
} from "../../../../services/planAssignmentService";
import planManagementService, { Plan } from "../../../../services/planManagementService";
import userService, { User } from "../../../../services/userService";
import businessService, { Business } from "../../../../services/businessService";

function AdminAssignmentsContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [assignments, setAssignments] = useState<PlanAssignment[]>([]);
  const [filteredAssignments, setFilteredAssignments] = useState<PlanAssignment[]>([]);
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
  const [adminInfo, setAdminInfo] = useState<{ id: string; email?: string; name?: string } | null>(null);
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

        // Load assignments and plans separately to handle errors independently
        try {
          const assignmentsResponse = await planAssignmentService.listPlanAssignments(
            { pageSize: 100 },
            { accessToken: token ?? undefined }
          );
          setAssignments(assignmentsResponse.assignments);
          filterAssignmentsByTab(assignmentsResponse.assignments, 0);
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

  const handleLogout = () => {
    logoutAdmin();
    webClientAuthService.logout();
    router.push(`/${locale}/admin`);
  };

  const filterAssignmentsByTab = (allAssignments: PlanAssignment[], tabIndex: number) => {
    let filtered: PlanAssignment[];
    switch (tabIndex) {
      case 0:
        filtered = allAssignments.filter(
          (a) => a.status === AssignmentStatus.ASSIGNMENT_STATUS_PENDING
        );
        break;
      case 1:
        filtered = allAssignments.filter(
          (a) => a.status === AssignmentStatus.ASSIGNMENT_STATUS_ACCEPTED
        );
        break;
      case 2:
        filtered = allAssignments.filter(
          (a) =>
            a.status === AssignmentStatus.ASSIGNMENT_STATUS_REJECTED ||
            a.status === AssignmentStatus.ASSIGNMENT_STATUS_CANCELED ||
            a.status === AssignmentStatus.ASSIGNMENT_STATUS_EXPIRED
        );
        break;
      default:
        filtered = allAssignments;
    }
    setFilteredAssignments(filtered);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
    filterAssignmentsByTab(assignments, newValue);
  };

  const getAssignmentStatusColor = (status: AssignmentStatus) => {
    switch (status) {
      case AssignmentStatus.ASSIGNMENT_STATUS_PENDING:
        return "warning";
      case AssignmentStatus.ASSIGNMENT_STATUS_ACCEPTED:
        return "success";
      case AssignmentStatus.ASSIGNMENT_STATUS_REJECTED:
      case AssignmentStatus.ASSIGNMENT_STATUS_CANCELED:
        return "error";
      case AssignmentStatus.ASSIGNMENT_STATUS_EXPIRED:
        return "default";
      default:
        return "default";
    }
  };

  const getAssignmentStatusText = (status: AssignmentStatus) => {
    switch (status) {
      case AssignmentStatus.ASSIGNMENT_STATUS_PENDING:
        return "Pending";
      case AssignmentStatus.ASSIGNMENT_STATUS_ACCEPTED:
        return "Accepted";
      case AssignmentStatus.ASSIGNMENT_STATUS_REJECTED:
        return "Rejected";
      case AssignmentStatus.ASSIGNMENT_STATUS_CANCELED:
        return "Canceled";
      case AssignmentStatus.ASSIGNMENT_STATUS_EXPIRED:
        return "Expired";
      default:
        return "Unknown";
    }
  };

  const getAssignmentStatusIcon = (status: AssignmentStatus) => {
    switch (status) {
      case AssignmentStatus.ASSIGNMENT_STATUS_PENDING:
        return "solar:clock-circle-bold";
      case AssignmentStatus.ASSIGNMENT_STATUS_ACCEPTED:
        return "solar:check-circle-bold";
      case AssignmentStatus.ASSIGNMENT_STATUS_REJECTED:
      case AssignmentStatus.ASSIGNMENT_STATUS_CANCELED:
        return "solar:close-circle-bold";
      case AssignmentStatus.ASSIGNMENT_STATUS_EXPIRED:
        return "solar:calendar-remove-bold";
      default:
        return "solar:question-circle-bold";
    }
  };

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
      const updatedAssignments = [response.assignment, ...assignments];
      setAssignments(updatedAssignments);
      filterAssignmentsByTab(updatedAssignments, currentTab);
      setAssignDialog(false);
    } catch (err: any) {
      console.error("Failed to assign plan:", err);
      setError(err.message || "Failed to assign plan");
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
      const updatedAssignments = assignments.map((a) =>
        a.id === updatedAssignment.id ? updatedAssignment : a
      );
      setAssignments(updatedAssignments);
      filterAssignmentsByTab(updatedAssignments, currentTab);
      setCancelDialog(false);
    } catch (err: any) {
      console.error("Failed to cancel assignment:", err);
      setError(err.message || "Failed to cancel assignment");
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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
              startIcon={<Iconify icon="solar:bill-list-bold" />}
              onClick={() => router.push(`/${locale}/admin/plans`)}
            >
              Plans
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
                        <span>Pending</span>
                        <Chip
                          label={
                            assignments.filter(
                              (a) => a.status === AssignmentStatus.ASSIGNMENT_STATUS_PENDING
                            ).length
                          }
                          size="small"
                          color="warning"
                        />
                      </Stack>
                    }
                  />
                  <Tab
                    label={
                      <Stack direction="row" spacing={1} alignItems="center">
                        <span>Accepted</span>
                        <Chip
                          label={
                            assignments.filter(
                              (a) => a.status === AssignmentStatus.ASSIGNMENT_STATUS_ACCEPTED
                            ).length
                          }
                          size="small"
                          color="success"
                        />
                      </Stack>
                    }
                  />
                  <Tab
                    label={
                      <Stack direction="row" spacing={1} alignItems="center">
                        <span>Rejected/Canceled</span>
                        <Chip
                          label={
                            assignments.filter(
                              (a) =>
                                a.status === AssignmentStatus.ASSIGNMENT_STATUS_REJECTED ||
                                a.status === AssignmentStatus.ASSIGNMENT_STATUS_CANCELED ||
                                a.status === AssignmentStatus.ASSIGNMENT_STATUS_EXPIRED
                            ).length
                          }
                          size="small"
                          color="error"
                        />
                      </Stack>
                    }
                  />
                </Tabs>
              </Box>

              <CardContent>
                {filteredAssignments.length === 0 ? (
                  <Box textAlign="center" py={6}>
                    <Iconify icon="solar:inbox-line-bold-duotone" width={80} color="grey.400" />
                    <Typography variant="h6" color="text.secondary" mt={2}>
                      No assignments in this category
                    </Typography>
                  </Box>
                ) : (
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Assignment ID</TableCell>
                          <TableCell>Plan</TableCell>
                          <TableCell>User ID</TableCell>
                          <TableCell>Business ID</TableCell>
                          <TableCell>Start Date</TableCell>
                          <TableCell>Expires At</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell align={isArabic ? "left" : "right"}>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {filteredAssignments.map((assignment) => (
                          <TableRow
                            key={assignment.id}
                            sx={{ "&:hover": { bgcolor: "action.hover" } }}
                          >
                            <TableCell>
                              <Typography
                                variant="body2"
                                fontFamily="monospace"
                                sx={{
                                  maxWidth: 150,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {assignment.id}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2" fontWeight="medium">
                                {assignment.planCode}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2" fontFamily="monospace">
                                {assignment.userId.substring(0, 12)}...
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2" fontFamily="monospace">
                                {assignment.businessId.substring(0, 12)}...
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2" color="text.secondary">
                                {assignment.startAt.toLocaleDateString()}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2" color="text.secondary">
                                {assignment.expiresAt.toLocaleDateString()}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Chip
                                icon={
                                  <Iconify
                                    icon={getAssignmentStatusIcon(assignment.status)}
                                    width={18}
                                  />
                                }
                                label={getAssignmentStatusText(assignment.status)}
                                color={getAssignmentStatusColor(assignment.status)}
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
                                  color="info"
                                  startIcon={<Iconify icon="solar:eye-bold" />}
                                  onClick={() => handleOpenDetailsDialog(assignment)}
                                >
                                  Details
                                </Button>
                                {assignment.status === AssignmentStatus.ASSIGNMENT_STATUS_PENDING && (
                                  <Button
                                    size="small"
                                    variant="outlined"
                                    color="error"
                                    startIcon={<Iconify icon="solar:close-circle-bold" />}
                                    onClick={() => handleOpenCancelDialog(assignment)}
                                  >
                                    Cancel
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

        <Dialog open={assignDialog} onClose={() => setAssignDialog(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Assign Plan to User</DialogTitle>
          <DialogContent>
            <Stack spacing={2} pt={1}>
              {error && (
                <Alert severity="error" icon={<Iconify icon="solar:danger-circle-bold" />}>
                  {error}
                </Alert>
              )}
              <Box>
                <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                  Step 1: Search User by Email
                </Typography>
                <Stack direction="row" spacing={1}>
                  <TextField
                    label="Search by email"
                    value={userSearchQuery}
                    onChange={(e) => setUserSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSearchUsers()}
                    fullWidth
                    size="small"
                    placeholder="john@example.com"
                  />
                  <Button
                    variant="contained"
                    onClick={handleSearchUsers}
                    disabled={searchingUsers || !userSearchQuery.trim()}
                    startIcon={
                      searchingUsers ? (
                        <CircularProgress size={16} />
                      ) : (
                        <Iconify icon="solar:magnifer-bold" />
                      )
                    }
                  >
                    Search
                  </Button>
                </Stack>
                {users.length > 0 && (
                  <Box sx={{ mt: 1, maxHeight: 200, overflow: "auto", border: "1px solid #e0e0e0", borderRadius: 1 }}>
                    {users.map((user) => (
                      <Box
                        key={user.id}
                        onClick={() => handleSelectUser(user)}
                        sx={{
                          p: 1.5,
                          cursor: "pointer",
                          bgcolor: selectedUser?.id === user.id ? "primary.light" : "transparent",
                          "&:hover": { bgcolor: "action.hover" },
                          borderBottom: "1px solid #f0f0f0",
                        }}
                      >
                        <Typography variant="body2" fontWeight="medium">
                          {user.email}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          ID: {user.id}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>

              {selectedUser && (
                <Alert severity="success" icon={<Iconify icon="solar:user-check-bold" />}>
                  Selected User: <strong>{selectedUser.email}</strong>
                </Alert>
              )}

              {selectedUser && (
                <Box>
                  <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                    Step 2: Select Business
                  </Typography>
                  {loadingBusinesses ? (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 2 }}>
                      <CircularProgress size={20} />
                      <Typography variant="body2" color="text.secondary">
                        Loading businesses...
                      </Typography>
                    </Box>
                  ) : businesses.length === 0 ? (
                    <Alert severity="warning">
                      No businesses found for this user. The user must create a business first.
                    </Alert>
                  ) : (
                    <Box sx={{ maxHeight: 200, overflow: "auto", border: "1px solid #e0e0e0", borderRadius: 1 }}>
                      {businesses.map((business) => (
                        <Box
                          key={business.id}
                          onClick={() => handleSelectBusiness(business)}
                          sx={{
                            p: 1.5,
                            cursor: "pointer",
                            bgcolor: selectedBusiness?.id === business.id ? "primary.light" : "transparent",
                            "&:hover": { bgcolor: "action.hover" },
                            borderBottom: "1px solid #f0f0f0",
                          }}
                        >
                          <Typography variant="body2" fontWeight="medium">
                            {business.enName || business.arName}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            ID: {business.id}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              )}

              {selectedBusiness && (
                <Alert severity="success" icon={<Iconify icon="solar:buildings-bold" />}>
                  Selected Business: <strong>{selectedBusiness.enName || selectedBusiness.arName}</strong>
                </Alert>
              )}

              {selectedUser && selectedBusiness && (
                <>
                  <Typography variant="subtitle2" gutterBottom fontWeight="bold" sx={{ mt: 2 }}>
                    Step 3: Select Plan & Set Dates
                  </Typography>
                  <FormControl fullWidth required>
                    <InputLabel>Plan</InputLabel>
                    <Select
                      value={formData.planCode}
                      onChange={(e) => setFormData({ ...formData, planCode: e.target.value })}
                      label="Plan"
                      disabled={plans.length === 0}
                    >
                      {plans.length === 0 ? (
                        <MenuItem value="" disabled>
                          No plans available - Please create plans first
                        </MenuItem>
                      ) : (
                        plans.map((plan) => (
                          <MenuItem key={plan.code} value={plan.code}>
                            {plan.name} ({plan.code})
                          </MenuItem>
                        ))
                      )}
                    </Select>
                    {plans.length === 0 && (
                      <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                        No plans found. Create plans in the Plans page first.
                      </Typography>
                    )}
                  </FormControl>
                  <DateTimePicker
                    label="Start Date"
                    value={formData.startAt}
                    onChange={(newValue) =>
                      setFormData({ ...formData, startAt: newValue || dayjs() })
                    }
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                  <DateTimePicker
                    label="End Date"
                    value={formData.endAt}
                    onChange={(newValue) =>
                      setFormData({ ...formData, endAt: newValue || dayjs() })
                    }
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                  <DateTimePicker
                    label="Offer Expires At"
                    value={formData.expiresAt}
                    onChange={(newValue) =>
                      setFormData({ ...formData, expiresAt: newValue || dayjs() })
                    }
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        helperText: "User must accept before this date",
                      },
                    }}
                  />
                  <TextField
                    label="Notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    fullWidth
                    multiline
                    rows={3}
                    helperText="Optional message for the user"
                  />
                  <Alert severity="info" icon={<Iconify icon="solar:info-circle-bold" />}>
                    An email will be sent to the user with plan details and accept/reject options.
                  </Alert>
                </>
              )}
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setAssignDialog(false)} disabled={actionLoading}>
              Cancel
            </Button>
            <Button
              onClick={handleAssignPlan}
              variant="contained"
              disabled={actionLoading || !selectedUser || !selectedBusiness || !formData.planCode}
              startIcon={
                actionLoading ? (
                  <CircularProgress size={16} />
                ) : (
                  <Iconify icon="solar:user-check-bold" />
                )
              }
            >
              Assign Plan
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={detailsDialog}
          onClose={() => setDetailsDialog(false)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Iconify icon="solar:document-text-bold" width={24} />
              <Typography variant="h6">Assignment Details</Typography>
            </Stack>
          </DialogTitle>
          <DialogContent>
            {selectedAssignment && (
              <Stack spacing={3}>
                <Box
                  sx={{
                    bgcolor: "#f8f9fa",
                    p: 2,
                    borderRadius: 2,
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Assignment Information
                  </Typography>
                  <Stack spacing={1.5}>
                    <Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Assignment ID:
                      </Typography>
                      <Typography
                        variant="body2"
                        fontWeight="medium"
                        fontFamily="monospace"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {selectedAssignment.id}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Plan Code:
                      </Typography>
                      <Typography variant="body2" fontWeight="medium">
                        {selectedAssignment.planCode}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        User ID:
                      </Typography>
                      <Typography
                        variant="body2"
                        fontWeight="medium"
                        fontFamily="monospace"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {selectedAssignment.userId}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Business ID:
                      </Typography>
                      <Typography
                        variant="body2"
                        fontWeight="medium"
                        fontFamily="monospace"
                        sx={{ wordBreak: "break-all" }}
                      >
                        {selectedAssignment.businessId}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Status:
                      </Typography>
                      <Chip
                        icon={
                          <Iconify
                            icon={getAssignmentStatusIcon(selectedAssignment.status)}
                            width={18}
                          />
                        }
                        label={getAssignmentStatusText(selectedAssignment.status)}
                        color={getAssignmentStatusColor(selectedAssignment.status)}
                        size="small"
                      />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Start Date:
                      </Typography>
                      <Typography variant="body2" fontWeight="medium">
                        {selectedAssignment.startAt.toLocaleString()}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        End Date:
                      </Typography>
                      <Typography variant="body2" fontWeight="medium">
                        {selectedAssignment.endAt.toLocaleString()}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Expires At:
                      </Typography>
                      <Typography variant="body2" fontWeight="medium">
                        {selectedAssignment.expiresAt.toLocaleString()}
                      </Typography>
                    </Box>
                    {selectedAssignment.notes && (
                      <Box>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Notes:
                        </Typography>
                        <Typography variant="body2" fontWeight="medium">
                          {selectedAssignment.notes}
                        </Typography>
                      </Box>
                    )}
                    {selectedAssignment.subscriptionId && (
                      <Box>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Subscription ID:
                        </Typography>
                        <Typography
                          variant="body2"
                          fontWeight="medium"
                          fontFamily="monospace"
                          sx={{ wordBreak: "break-all" }}
                        >
                          {selectedAssignment.subscriptionId}
                        </Typography>
                      </Box>
                    )}
                    <Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Created At:
                      </Typography>
                      <Typography variant="body2" fontWeight="medium">
                        {selectedAssignment.createdAt.toLocaleString()}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDetailsDialog(false)}>Close</Button>
          </DialogActions>
        </Dialog>

        <Dialog open={cancelDialog} onClose={() => setCancelDialog(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Cancel Assignment</DialogTitle>
          <DialogContent>
            <Stack spacing={2} pt={1}>
              {error && (
                <Alert severity="error" icon={<Iconify icon="solar:danger-circle-bold" />}>
                  {error}
                </Alert>
              )}
              <Alert severity="warning" icon={<Iconify icon="solar:info-circle-bold" />}>
                Are you sure you want to cancel this assignment? The user will no longer be able to
                accept it.
              </Alert>
              <TextField
                label="Cancellation Reason"
                multiline
                rows={4}
                fullWidth
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                placeholder="Please provide a reason for canceling this assignment..."
                required
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setCancelDialog(false)} disabled={actionLoading}>
              Cancel
            </Button>
            <Button
              onClick={handleCancelAssignment}
              variant="contained"
              color="error"
              disabled={actionLoading}
              startIcon={
                actionLoading ? (
                  <CircularProgress size={16} />
                ) : (
                  <Iconify icon="solar:close-circle-bold" />
                )
              }
            >
              Cancel Assignment
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
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
