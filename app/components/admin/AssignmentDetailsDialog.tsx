import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import { Iconify } from "../../../packages/my-saas-components/src/iconify";
import { PlanAssignment } from "../../../services/planAssignmentService";
import {
  getAssignmentStatusColor,
  getAssignmentStatusText,
  getAssignmentStatusIcon,
} from "./assignmentHelpers";

interface AssignmentDetailsDialogProps {
  open: boolean;
  assignment: PlanAssignment | null;
  onClose: () => void;
}

export default function AssignmentDetailsDialog({
  open,
  assignment,
  onClose,
}: AssignmentDetailsDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
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
        {assignment && (
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
                    {assignment.id}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Plan Code:
                  </Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {assignment.planCode}
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
                    {assignment.userId}
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
                    {assignment.businessId}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Status:
                  </Typography>
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
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Start Date:
                  </Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {assignment.startAt.toLocaleString()}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    End Date:
                  </Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {assignment.endAt.toLocaleString()}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Expires At:
                  </Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {assignment.expiresAt.toLocaleString()}
                  </Typography>
                </Box>
                {assignment.notes && (
                  <Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Notes:
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                      {assignment.notes}
                    </Typography>
                  </Box>
                )}
                {assignment.subscriptionId && (
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
                      {assignment.subscriptionId}
                    </Typography>
                  </Box>
                )}
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Created At:
                  </Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {assignment.createdAt.toLocaleString()}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
