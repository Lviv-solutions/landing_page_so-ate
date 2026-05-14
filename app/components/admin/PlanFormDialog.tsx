"use client";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import CircularProgress from "@mui/material/CircularProgress";

import { Iconify } from "../../../packages/my-saas-components/src/iconify";
import { BillingPeriod } from "../../../services/planManagementService";
import { PlanFormData } from "../../types/admin";

interface PlanFormDialogProps {
  open: boolean;
  mode: "create" | "edit";
  formData: PlanFormData;
  onChange: (data: PlanFormData) => void;
  onSubmit: () => void;
  onClose: () => void;
  loading?: boolean;
  error?: string | null;
}

export default function PlanFormDialog({
  open,
  mode,
  formData,
  onChange,
  onSubmit,
  onClose,
  loading = false,
  error,
}: PlanFormDialogProps) {
  const isEdit = mode === "edit";
  const title = isEdit ? "Edit Plan" : "Create New Plan";
  const submitLabel = isEdit ? "Update Plan" : "Create Plan";

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
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
            onChange={(e) => onChange({ ...formData, code: e.target.value })}
            fullWidth
            required
            disabled={isEdit}
            helperText={!isEdit ? "Unique identifier (e.g., premium, enterprise)" : undefined}
          />
          <TextField
            label="Plan Name"
            value={formData.name}
            onChange={(e) => onChange({ ...formData, name: e.target.value })}
            fullWidth
            required
          />
          <TextField
            label="Description"
            value={formData.description}
            onChange={(e) => onChange({ ...formData, description: e.target.value })}
            fullWidth
            multiline
            rows={3}
            required
          />
          <FormControl fullWidth>
            <InputLabel>Billing Period</InputLabel>
            <Select
              value={formData.billingPeriod}
              onChange={(e) =>
                onChange({ ...formData, billingPeriod: e.target.value as BillingPeriod })
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
              onChange({ ...formData, priceMinor: Math.round(parseFloat(e.target.value) * 100) })
            }
            fullWidth
            required
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            helperText={!isEdit ? "Enter price in dollars (e.g., 29.99)" : undefined}
          />
          <FormControl fullWidth>
            <InputLabel>Currency</InputLabel>
            <Select
              value={formData.currency}
              onChange={(e) => onChange({ ...formData, currency: e.target.value })}
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
            onChange={(e) => onChange({ ...formData, trialDays: parseInt(e.target.value) })}
            fullWidth
            helperText={!isEdit ? "Number of free trial days (0 for no trial)" : undefined}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          onClick={onSubmit}
          variant="contained"
          disabled={loading}
          startIcon={
            loading ? <CircularProgress size={16} /> : <Iconify icon="solar:check-circle-bold" />
          }
        >
          {submitLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
