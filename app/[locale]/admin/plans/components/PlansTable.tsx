import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Iconify } from "../../../../../packages/my-saas-components/src/iconify";
import { Plan, PlanStatus, BillingPeriod } from "../types";

interface PlansTableProps {
  plans: Plan[];
  onEdit: (plan: Plan) => void;
  onArchive: (plan: Plan) => void;
}

export function PlansTable({ plans, onEdit, onArchive }: PlansTableProps) {
  const getStatusColor = (status: PlanStatus) => {
    switch (status) {
      case PlanStatus.PLAN_STATUS_ACTIVE:
        return "success";
      case PlanStatus.PLAN_STATUS_INACTIVE:
        return "warning";
      case PlanStatus.PLAN_STATUS_ARCHIVED:
        return "default";
      default:
        return "default";
    }
  };

  const getStatusText = (status: PlanStatus) => {
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

  if (plans.length === 0) {
    return (
      <Stack alignItems="center" justifyContent="center" sx={{ py: 8 }}>
        <Iconify icon="solar:inbox-line-bold-duotone" width={64} sx={{ mb: 2, opacity: 0.5 }} />
        <p style={{ color: "#637381" }}>No plans found</p>
      </Stack>
    );
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Plan Code</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Billing Period</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Trial Days</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plans.map((plan) => (
            <TableRow key={plan.code} hover>
              <TableCell>{plan.code}</TableCell>
              <TableCell>{plan.name}</TableCell>
              <TableCell>
                <Chip
                  label={getStatusText(plan.status)}
                  color={getStatusColor(plan.status)}
                  size="small"
                />
              </TableCell>
              <TableCell>{getBillingPeriodText(plan.billingPeriod)}</TableCell>
              <TableCell>{formatPrice(plan.priceMinor, plan.currency)}</TableCell>
              <TableCell>{plan.trialDays}</TableCell>
              <TableCell align="right">
                <Stack direction="row" spacing={1} justifyContent="flex-end">
                  <Button
                    size="small"
                    startIcon={<Iconify icon="solar:pen-bold" />}
                    onClick={() => onEdit(plan)}
                  >
                    Edit
                  </Button>
                  {plan.status !== PlanStatus.PLAN_STATUS_ARCHIVED && (
                    <Button
                      size="small"
                      color="error"
                      startIcon={<Iconify icon="solar:archive-bold" />}
                      onClick={() => onArchive(plan)}
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
  );
}
