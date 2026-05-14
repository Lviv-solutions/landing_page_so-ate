import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { Iconify } from "../../../../../packages/my-saas-components/src/iconify";
import { PlanFormData, Service, Feature, BillingPeriod, LimitType, FeatureLimitConfig } from "../types";
import { ValueType } from "../../../../../services/featureManagementService";
import { FeatureLimitsConfig } from "./FeatureLimitsConfig";

interface PlanFormDialogProps {
  open: boolean;
  mode: "create" | "edit";
  formData: PlanFormData;
  services: Service[];
  features: Feature[];
  selectedServices: string[];
  selectedFeatures: string[];
  featureLimits: Map<string, FeatureLimitConfig>;
  loading: boolean;
  error: string | null;
  onClose: () => void;
  onSubmit: () => void;
  onFormChange: (data: Partial<PlanFormData>) => void;
  onServicesChange: (services: string[]) => void;
  onFeaturesChange: (features: string[]) => void;
  onFeatureLimitUpdate: (
    featureCode: string,
    field: "limitType" | "limitValue" | "notes",
    value: string | LimitType
  ) => void;
}

export function PlanFormDialog({
  open,
  mode,
  formData,
  services,
  features,
  selectedServices,
  selectedFeatures,
  featureLimits,
  loading,
  error,
  onClose,
  onSubmit,
  onFormChange,
  onServicesChange,
  onFeaturesChange,
  onFeatureLimitUpdate,
}: PlanFormDialogProps) {
  const getAvailableFeatures = () => {
    return features.filter((feature) => selectedServices.includes(feature.serviceCode));
  };

  const handleFeaturesChange = (newFeatures: string[]) => {
    const addedFeatures = newFeatures.filter((code) => !selectedFeatures.includes(code));
    const removedFeatures = selectedFeatures.filter((code) => !newFeatures.includes(code));

    // Handle added features
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
        onFeatureLimitUpdate(featureCode, "limitType", newLimits.get(featureCode)!.limitType);
      }
    });

    // Handle removed features - limits will be cleaned up by parent
    onFeaturesChange(newFeatures);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{mode === "create" ? "Create New Plan" : "Edit Plan"}</DialogTitle>
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
            onChange={(e) => onFormChange({ code: e.target.value })}
            fullWidth
            required
            disabled={mode === "edit"}
            helperText={mode === "create" ? "Unique identifier (e.g., premium, enterprise)" : undefined}
          />

          <TextField
            label="Plan Name"
            value={formData.name}
            onChange={(e) => onFormChange({ name: e.target.value })}
            fullWidth
            required
          />

          <TextField
            label="Description"
            value={formData.description}
            onChange={(e) => onFormChange({ description: e.target.value })}
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
              onChange={(e) => onServicesChange(e.target.value as string[])}
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
              onChange={(e) => handleFeaturesChange(e.target.value as string[])}
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

          <FeatureLimitsConfig
            selectedFeatures={selectedFeatures}
            features={features}
            featureLimits={featureLimits}
            onUpdateLimit={onFeatureLimitUpdate}
          />

          <FormControl fullWidth>
            <InputLabel>Billing Period</InputLabel>
            <Select
              value={formData.billingPeriod}
              onChange={(e) => onFormChange({ billingPeriod: e.target.value as BillingPeriod })}
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
              onFormChange({ priceMinor: Math.round(parseFloat(e.target.value) * 100) })
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
              onChange={(e) => onFormChange({ currency: e.target.value })}
              label="Currency"
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Trial Days"
            type="number"
            value={formData.trialDays}
            onChange={(e) => onFormChange({ trialDays: parseInt(e.target.value) || 0 })}
            fullWidth
            inputProps={{ min: 0 }}
            helperText="Number of free trial days (0 for no trial)"
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
          {mode === "create" ? "Create Plan" : "Update Plan"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
