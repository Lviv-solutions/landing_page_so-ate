import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { Iconify } from "../../../../../packages/my-saas-components/src/iconify";
import { Plan } from "../types";

interface DeletePlanDialogProps {
  open: boolean;
  plan: Plan | null;
  loading: boolean;
  error: string | null;
  onClose: () => void;
  onConfirm: () => void;
}

export function DeletePlanDialog({
  open,
  plan,
  loading,
  error,
  onClose,
  onConfirm,
}: DeletePlanDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Archive Plan</DialogTitle>
      <DialogContent>
        {error && (
          <Alert severity="error" icon={<Iconify icon="solar:danger-circle-bold" />} sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <Typography>
          Are you sure you want to archive the plan <strong>{plan?.name}</strong>? This action will
          change its status to archived.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          color="error"
          disabled={loading}
          startIcon={
            loading ? <CircularProgress size={16} /> : <Iconify icon="solar:archive-bold" />
          }
        >
          Archive Plan
        </Button>
      </DialogActions>
    </Dialog>
  );
}
