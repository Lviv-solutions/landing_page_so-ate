import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Iconify } from "../../../packages/my-saas-components/src/iconify";
import {
  PlanAssignment,
  AssignmentStatus,
} from "../../../services/planAssignmentService";
import {
  getAssignmentStatusColor,
  getAssignmentStatusText,
  getAssignmentStatusIcon,
} from "./assignmentHelpers";

interface AssignmentsTableProps {
  assignments: PlanAssignment[];
  isArabic: boolean;
  onViewDetails: (assignment: PlanAssignment) => void;
  onCancel: (assignment: PlanAssignment) => void;
}

export default function AssignmentsTable({
  assignments,
  isArabic,
  onViewDetails,
  onCancel,
}: AssignmentsTableProps) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Assignment ID</TableCell>
            <TableCell>Plan</TableCell>
            <TableCell>User ID</TableCell>
            <TableCell>Business ID</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Expires At</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align={isArabic ? "left" : "right"}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assignments.map((assignment) => (
            <TableRow
              key={assignment.id}
              sx={{ "&:hover": { bgcolor: "action.hover" } }}
            >
              <TableCell>
                <Typography
                  variant="body2"
                  fontFamily="monospace"
                  sx={{
                    maxWidth: 150,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {assignment.id}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" fontWeight="medium">
                  {assignment.planCode}
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
                <Typography variant="body2" color="text.secondary">
                  {assignment.startAt.toLocaleDateString()}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" color="text.secondary">
                  {assignment.expiresAt.toLocaleDateString()}
                </Typography>
              </TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell align={isArabic ? "left" : "right"}>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent={isArabic ? "flex-start" : "flex-end"}
                >
                  <Button
                    size="small"
                    variant="outlined"
                    color="info"
                    startIcon={<Iconify icon="solar:eye-bold" />}
                    onClick={() => onViewDetails(assignment)}
                  >
                    Details
                  </Button>
                  {assignment.status === AssignmentStatus.ASSIGNMENT_STATUS_PENDING && (
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      startIcon={<Iconify icon="solar:close-circle-bold" />}
                      onClick={() => onCancel(assignment)}
                    >
                      Cancel
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
