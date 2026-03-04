"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import AdminRoute from "../../../components/AdminRoute";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
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
import planAssignmentService, {
  PlanAssignment,
  AssignmentStatus,
} from "../../../../services/planAssignmentService";
import planManagementService, {
  Plan,
  BillingPeriod,
} from "../../../../services/planManagementService";

import {
  AdminPageLayout,
  AdminLoadingScreen,
} from "../../../components/admin";
import { AdminInfo } from "../../../types/admin";

const formatPrice = (priceMinor: number, currency: string) => {
  const amount = priceMinor / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "USD",
    minimumFractionDigits: 2,
  }).format(amount);
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

const getStatusColor = (status: AssignmentStatus) => {
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

const getStatusText = (status: AssignmentStatus) => {
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

interface RevenueByPlan {
  planCode: string;
  planName: string;
  price: number;
  currency: string;
  billingPeriod: BillingPeriod;
  subscriptionCount: number;
  totalRevenue: number;
}

function AdminBillingContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [assignments, setAssignments] = useState<PlanAssignment[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [adminInfo, setAdminInfo] = useState<AdminInfo | null>(null);

  const router = useRouter();
  const { locale } = useTranslation();

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

        try {
          const assignmentsResponse = await planAssignmentService.listPlanAssignments(
            { pageSize: 100 },
            { accessToken: token ?? undefined }
          );
          setAssignments(assignmentsResponse.assignments);
        } catch (assignError) {
          console.error("Failed to load assignments:", assignError);
          setError("Failed to load assignments.");
        }

        try {
          const plansResponse = await planManagementService.listPlans(
            { pageSize: 100 },
            { accessToken: token ?? undefined }
          );
          setPlans(plansResponse.plans);
        } catch (planError) {
          console.error("Failed to load plans:", planError);
        }
      } catch (err) {
        console.error("Failed to load data:", err);
        setError("Failed to load billing data");
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [router, locale]);

  const plansMap = useMemo(() => {
    const map = new Map<string, Plan>();
    plans.forEach((plan) => map.set(plan.code, plan));
    return map;
  }, [plans]);

  const acceptedAssignments = useMemo(
    () => assignments.filter((a) => a.status === AssignmentStatus.ASSIGNMENT_STATUS_ACCEPTED),
    [assignments]
  );

  const pendingAssignments = useMemo(
    () => assignments.filter((a) => a.status === AssignmentStatus.ASSIGNMENT_STATUS_PENDING),
    [assignments]
  );

  const totalRevenue = useMemo(() => {
    return acceptedAssignments.reduce((sum, assignment) => {
      const plan = plansMap.get(assignment.planCode);
      return sum + (plan ? plan.priceMinor : 0);
    }, 0);
  }, [acceptedAssignments, plansMap]);

  const mainCurrency = useMemo(() => {
    const plan = plans.find((p) => p.currency);
    return plan?.currency || "USD";
  }, [plans]);

  const revenueByPlan: RevenueByPlan[] = useMemo(() => {
    const grouped = new Map<string, PlanAssignment[]>();
    acceptedAssignments.forEach((a) => {
      const list = grouped.get(a.planCode) || [];
      list.push(a);
      grouped.set(a.planCode, list);
    });

    return Array.from(grouped.entries())
      .map(([planCode, planAssignments]) => {
        const plan = plansMap.get(planCode);
        return {
          planCode,
          planName: plan?.name || planCode,
          price: plan?.priceMinor || 0,
          currency: plan?.currency || "USD",
          billingPeriod: plan?.billingPeriod || BillingPeriod.BILLING_PERIOD_UNSPECIFIED,
          subscriptionCount: planAssignments.length,
          totalRevenue: (plan?.priceMinor || 0) * planAssignments.length,
        };
      })
      .sort((a, b) => b.totalRevenue - a.totalRevenue);
  }, [acceptedAssignments, plansMap]);

  const recentAssignments = useMemo(() => {
    return [...assignments]
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 10);
  }, [assignments]);

  const statusCounts = useMemo(() => {
    const counts = {
      accepted: 0,
      pending: 0,
      rejected: 0,
      canceled: 0,
      expired: 0,
    };
    assignments.forEach((a) => {
      switch (a.status) {
        case AssignmentStatus.ASSIGNMENT_STATUS_ACCEPTED:
          counts.accepted++;
          break;
        case AssignmentStatus.ASSIGNMENT_STATUS_PENDING:
          counts.pending++;
          break;
        case AssignmentStatus.ASSIGNMENT_STATUS_REJECTED:
          counts.rejected++;
          break;
        case AssignmentStatus.ASSIGNMENT_STATUS_CANCELED:
          counts.canceled++;
          break;
        case AssignmentStatus.ASSIGNMENT_STATUS_EXPIRED:
          counts.expired++;
          break;
      }
    });
    return counts;
  }, [assignments]);

  const activePlansCount = useMemo(
    () => plans.filter((p) => p.status === 1).length,
    [plans]
  );

  if (isLoading) {
    return <AdminLoadingScreen />;
  }

  const navButtons = [
    { label: "Claims", icon: "solar:list-bold", path: "claims" },
    { label: "Plans", icon: "solar:bill-list-bold", path: "plans" },
    { label: "Assignments", icon: "solar:user-check-bold", path: "assignments" },
  ];

  const statCards = [
    {
      title: "Total Revenue",
      value: formatPrice(totalRevenue, mainCurrency),
      icon: "solar:wallet-money-bold",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Active Subscriptions",
      value: acceptedAssignments.length.toString(),
      icon: "solar:check-circle-bold",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    },
    {
      title: "Pending Assignments",
      value: pendingAssignments.length.toString(),
      icon: "solar:clock-circle-bold",
      gradient: "linear-gradient(135deg, #F2994A 0%, #F2C94C 100%)",
    },
    {
      title: "Active Plans",
      value: activePlansCount.toString(),
      icon: "solar:bill-list-bold",
      gradient: "linear-gradient(135deg, #ED614A 0%, #E6446F 100%)",
    },
  ];

  return (
    <AdminPageLayout
      adminInfo={adminInfo}
      navButtons={navButtons}
      successMessage={null}
    >
      <Box>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Billing Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Revenue overview and subscription analytics
        </Typography>
      </Box>

      {error && (
        <Card sx={{ bgcolor: "#FFF3F0", border: "1px solid #FFCCC7" }}>
          <CardContent>
            <Stack direction="row" spacing={1} alignItems="center">
              <Iconify icon="solar:danger-circle-bold" color="#FF4D4F" />
              <Typography color="error">{error}</Typography>
            </Stack>
          </CardContent>
        </Card>
      )}

      {/* Summary Stat Cards */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
        {statCards.map((card) => (
          <Card
            key={card.title}
            sx={{
              flex: 1,
              background: card.gradient,
              color: "white",
              borderRadius: 3,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                <Box>
                  <Typography variant="body2" sx={{ opacity: 0.85, mb: 0.5 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="h4" fontWeight="bold">
                    {card.value}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Iconify icon={card.icon} width={28} />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>

      {/* Revenue by Plan */}
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Revenue by Plan
          </Typography>
          {revenueByPlan.length === 0 ? (
            <Typography variant="body2" color="text.secondary" sx={{ py: 4, textAlign: "center" }}>
              No subscription revenue data yet
            </Typography>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Plan</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Billing Period</TableCell>
                    <TableCell align="center">Subscriptions</TableCell>
                    <TableCell align="right">Revenue</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {revenueByPlan.map((row) => (
                    <TableRow key={row.planCode} sx={{ "&:hover": { bgcolor: "action.hover" } }}>
                      <TableCell>
                        <Typography variant="body2" fontWeight="medium">
                          {row.planName}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" fontFamily="monospace">
                          {row.planCode}
                        </Typography>
                      </TableCell>
                      <TableCell>{formatPrice(row.price, row.currency)}</TableCell>
                      <TableCell>{getBillingPeriodText(row.billingPeriod)}</TableCell>
                      <TableCell align="center">
                        <Chip label={row.subscriptionCount} size="small" color="primary" />
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body2" fontWeight="bold">
                          {formatPrice(row.totalRevenue, row.currency)}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>

      {/* Status Breakdown */}
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Assignment Status Breakdown
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mt: 1 }}>
            <Chip
              icon={<Iconify icon="solar:check-circle-bold" width={18} />}
              label={`Accepted: ${statusCounts.accepted}`}
              color="success"
            />
            <Chip
              icon={<Iconify icon="solar:clock-circle-bold" width={18} />}
              label={`Pending: ${statusCounts.pending}`}
              color="warning"
            />
            <Chip
              icon={<Iconify icon="solar:close-circle-bold" width={18} />}
              label={`Rejected: ${statusCounts.rejected}`}
              color="error"
            />
            <Chip
              icon={<Iconify icon="solar:close-circle-bold" width={18} />}
              label={`Canceled: ${statusCounts.canceled}`}
              color="error"
              variant="outlined"
            />
            <Chip
              icon={<Iconify icon="solar:calendar-remove-bold" width={18} />}
              label={`Expired: ${statusCounts.expired}`}
              color="default"
            />
          </Stack>
        </CardContent>
      </Card>

      {/* Recent Assignments */}
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Recent Assignments
          </Typography>
          {recentAssignments.length === 0 ? (
            <Typography variant="body2" color="text.secondary" sx={{ py: 4, textAlign: "center" }}>
              No assignments yet
            </Typography>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Plan</TableCell>
                    <TableCell>User ID</TableCell>
                    <TableCell>Business ID</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Created</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentAssignments.map((assignment) => (
                    <TableRow key={assignment.id} sx={{ "&:hover": { bgcolor: "action.hover" } }}>
                      <TableCell>
                        <Typography variant="body2" fontWeight="medium">
                          {plansMap.get(assignment.planCode)?.name || assignment.planCode}
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
                        <Chip
                          label={getStatusText(assignment.status)}
                          color={getStatusColor(assignment.status)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" color="text.secondary">
                          {assignment.createdAt.toLocaleDateString()}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>
    </AdminPageLayout>
  );
}

export default function AdminBillingPage() {
  return (
    <AdminRoute>
      <AdminBillingContent />
    </AdminRoute>
  );
}
