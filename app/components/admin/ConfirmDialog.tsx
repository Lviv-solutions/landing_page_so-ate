"use client";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

import { Iconify } from "../../../packages/my-saas-components/src/iconify";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  message: string;
  severity?: "warning" | "error" | "info";
  confirmLabel?: string;
  confirmColor?: "error" | "primary" | "warning";
  confirmIcon?: string;
  loading?: boolean;
  error?: string | null;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  message,
  severity = "warning",
  confirmLabel = "Confirm",
  confirmColor = "error",
  confirmIcon = "solar:check-circle-bold",
  loading = false,
  error,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <Dialog open={open} onClose={onCancel} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} pt={1}>
          {error && (
            <Alert severity="error" icon={<Iconify icon="solar:danger-circle-bold" />}>
              {error}
            </Alert>
          )}
          <Alert severity={severity} icon={<Iconify icon="solar:info-circle-bold" />}>
            {message}
          </Alert>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} disabled={loading}>
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          color={confirmColor}
          disabled={loading}
          startIcon={
            loading ? <CircularProgress size={16} /> : <Iconify icon={confirmIcon} />
          }
        >
          {confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
