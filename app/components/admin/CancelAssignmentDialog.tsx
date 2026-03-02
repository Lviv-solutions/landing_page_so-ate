import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

import { Iconify } from "../../../packages/my-saas-components/src/iconify";

interface CancelAssignmentDialogProps {
  open: boolean;
  error: string | null;
  cancelReason: string;
  actionLoading: boolean;
  onClose: () => void;
  onCancel: () => void;
  onReasonChange: (reason: string) => void;
}

export default function CancelAssignmentDialog({
  open,
  error,
  cancelReason,
  actionLoading,
  onClose,
  onCancel,
  onReasonChange,
}: CancelAssignmentDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
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
            onChange={(e) => onReasonChange(e.target.value)}
            placeholder="Please provide a reason for canceling this assignment..."
            required
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={actionLoading}>
          Cancel
        </Button>
        <Button
          onClick={onCancel}
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
  );
}
