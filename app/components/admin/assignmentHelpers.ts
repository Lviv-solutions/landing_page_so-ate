import { AssignmentStatus } from "../../../services/planAssignmentService";

export const getAssignmentStatusColor = (status: AssignmentStatus) => {
  switch (status) {
    case AssignmentStatus.ASSIGNMENT_STATUS_PENDING:
      return "warning";
    case AssignmentStatus.ASSIGNMENT_STATUS_ACCEPTED:
      return "success";
    case AssignmentStatus.ASSIGNMENT_STATUS_REJECTED:
    case AssignmentStatus.ASSIGNMENT_STATUS_CANCELED:
      return "error";
    case AssignmentStatus.ASSIGNMENT_STATUS_EXPIRED:
      return "default";
    default:
      return "default";
  }
};

export const getAssignmentStatusText = (status: AssignmentStatus) => {
  switch (status) {
    case AssignmentStatus.ASSIGNMENT_STATUS_PENDING:
      return "Pending";
    case AssignmentStatus.ASSIGNMENT_STATUS_ACCEPTED:
      return "Accepted";
    case AssignmentStatus.ASSIGNMENT_STATUS_REJECTED:
      return "Rejected";
    case AssignmentStatus.ASSIGNMENT_STATUS_CANCELED:
      return "Canceled";
    case AssignmentStatus.ASSIGNMENT_STATUS_EXPIRED:
      return "Expired";
    default:
      return "Unknown";
  }
};

export const getAssignmentStatusIcon = (status: AssignmentStatus) => {
  switch (status) {
    case AssignmentStatus.ASSIGNMENT_STATUS_PENDING:
      return "solar:clock-circle-bold";
    case AssignmentStatus.ASSIGNMENT_STATUS_ACCEPTED:
      return "solar:check-circle-bold";
    case AssignmentStatus.ASSIGNMENT_STATUS_REJECTED:
    case AssignmentStatus.ASSIGNMENT_STATUS_CANCELED:
      return "solar:close-circle-bold";
    case AssignmentStatus.ASSIGNMENT_STATUS_EXPIRED:
      return "solar:calendar-remove-bold";
    default:
      return "solar:question-circle-bold";
  }
};
