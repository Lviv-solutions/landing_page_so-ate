import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

import { Iconify } from "../../../packages/my-saas-components/src/iconify";
import { ClaimRequest } from "../../../services/claimRequestService";

interface ClaimActionDialogProps {
  open: boolean;
  type: "approve" | "reject" | null;
  selectedClaim: ClaimRequest | null;
  error: string | null;
  rejectionReason: string;
  actionLoading: boolean;
  onClose: () => void;
  onApprove: () => void;
  onReject: () => void;
  onRejectionReasonChange: (value: string) => void;
}

export default function ClaimActionDialog({
  open,
  type,
  selectedClaim,
  error,
  rejectionReason,
  actionLoading,
  onClose,
  onApprove,
  onReject,
  onRejectionReasonChange,
}: ClaimActionDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        {type === "approve"
          ? "Approve Claim Request"
          : "Reject Claim Request"}
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} pt={1}>
          {error && (
            <Alert
              severity="error"
              icon={<Iconify icon="solar:danger-circle-bold" />}
            >
              {error}
            </Alert>
          )}

          {selectedClaim && (
            <Box>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Claim ID
              </Typography>
              <Typography variant="body2" fontFamily="monospace" gutterBottom>
                {selectedClaim.id}
              </Typography>

              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
                mt={2}
              >
                Requester ID
              </Typography>
              <Typography variant="body2" fontFamily="monospace" gutterBottom>
                {selectedClaim.requesterId}
              </Typography>

              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
                mt={2}
              >
                Evidence
              </Typography>
              <Box
                sx={{
                  bgcolor: "grey.50",
                  p: 2,
                  borderRadius: 1,
                  fontFamily: "monospace",
                  fontSize: "0.75rem",
                  overflow: "auto",
                  maxHeight: 200,
                }}
              >
                <pre>
                  {JSON.stringify(selectedClaim.evidenceJson, null, 2)}
                </pre>
              </Box>
            </Box>
          )}

          {type === "reject" && (
            <TextField
              label="Rejection Reason"
              multiline
              rows={4}
              fullWidth
              value={rejectionReason}
              onChange={(e) => onRejectionReasonChange(e.target.value)}
              placeholder="Please provide a reason for rejecting this claim..."
              required
            />
          )}

          {type === "approve" && (
            <Alert
              severity="info"
              icon={<Iconify icon="solar:info-circle-bold" />}
            >
              Approving this claim will automatically create a business and
              assign it to the requester.
            </Alert>
          )}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={actionLoading}>
          Cancel
        </Button>
        <Button
          onClick={
            type === "approve"
              ? onApprove
              : onReject
          }
          variant="contained"
          color={type === "approve" ? "success" : "error"}
          disabled={actionLoading}
          startIcon={
            actionLoading ? (
              <CircularProgress size={16} />
            ) : (
              <Iconify
                icon={
                  type === "approve"
                    ? "solar:check-circle-bold"
                    : "solar:close-circle-bold"
                }
              />
            )
          }
        >
          {type === "approve" ? "Approve" : "Reject"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
