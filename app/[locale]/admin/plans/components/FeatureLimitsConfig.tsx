import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import { Feature, ValueType } from "../../../../../services/featureManagementService";
import { LimitType, FeatureLimitConfig } from "../types";

interface FeatureLimitsConfigProps {
  selectedFeatures: string[];
  features: Feature[];
  featureLimits: Map<string, FeatureLimitConfig>;
  onUpdateLimit: (
    featureCode: string,
    field: "limitType" | "limitValue" | "notes",
    value: string | LimitType
  ) => void;
}

export function FeatureLimitsConfig({
  selectedFeatures,
  features,
  featureLimits,
  onUpdateLimit,
}: FeatureLimitsConfigProps) {
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
              onChange={(e) => onUpdateLimit(feature.code, "limitType", e.target.value as LimitType)}
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
                  onChange={(e) => onUpdateLimit(feature.code, "limitValue", e.target.value)}
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
                    onChange={(e) => onUpdateLimit(feature.code, "limitValue", e.target.value)}
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
                  onChange={(e) => onUpdateLimit(feature.code, "limitValue", e.target.value)}
                  size="small"
                  fullWidth
                />
              )}

              {feature.valueType === ValueType.VALUE_TYPE_JSON && (
                <TextField
                  label="JSON Configuration"
                  value={limit.limitValue}
                  onChange={(e) => onUpdateLimit(feature.code, "limitValue", e.target.value)}
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
            onChange={(e) => onUpdateLimit(feature.code, "notes", e.target.value)}
            size="small"
            fullWidth
            placeholder="Add notes about this limit"
          />
        </Stack>
      </Box>
    );
  };

  if (selectedFeatures.length === 0) {
    return null;
  }

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
        Configure Feature Limits
      </Typography>
      {selectedFeatures.map((featureCode) => {
        const feature = features.find((f) => f.code === featureCode);
        return feature ? renderFeatureLimitInput(feature) : null;
      })}
    </Box>
  );
}
