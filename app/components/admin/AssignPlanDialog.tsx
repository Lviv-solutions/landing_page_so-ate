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
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

import { Iconify } from "../../../packages/my-saas-components/src/iconify";
import { Plan } from "../../../services/planManagementService";
import { User } from "../../../services/userService";
import { Business } from "../../../services/businessService";

interface AssignPlanFormData {
  planCode: string;
  userId: string;
  businessId: string;
  startAt: dayjs.Dayjs;
  endAt: dayjs.Dayjs;
  expiresAt: dayjs.Dayjs;
  notes: string;
}

interface AssignPlanDialogProps {
  open: boolean;
  error: string | null;
  plans: Plan[];
  users: User[];
  businesses: Business[];
  selectedUser: User | null;
  selectedBusiness: Business | null;
  formData: AssignPlanFormData;
  actionLoading: boolean;
  searchingUsers: boolean;
  loadingBusinesses: boolean;
  userSearchQuery: string;
  onClose: () => void;
  onAssign: () => void;
  onSearchUsers: () => void;
  onSelectUser: (user: User) => void;
  onSelectBusiness: (business: Business) => void;
  onUserSearchQueryChange: (query: string) => void;
  onFormDataChange: (data: AssignPlanFormData) => void;
}

export default function AssignPlanDialog({
  open,
  error,
  plans,
  users,
  businesses,
  selectedUser,
  selectedBusiness,
  formData,
  actionLoading,
  searchingUsers,
  loadingBusinesses,
  userSearchQuery,
  onClose,
  onAssign,
  onSearchUsers,
  onSelectUser,
  onSelectBusiness,
  onUserSearchQueryChange,
  onFormDataChange,
}: AssignPlanDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Assign Plan to User</DialogTitle>
      <DialogContent>
        <Stack spacing={2} pt={1}>
          {error && (
            <Alert severity="error" icon={<Iconify icon="solar:danger-circle-bold" />}>
              {error}
            </Alert>
          )}
          <Box>
            <Typography variant="subtitle2" gutterBottom fontWeight="bold">
              Step 1: Search User by Email
            </Typography>
            <Stack direction="row" spacing={1}>
              <TextField
                label="Search by email"
                value={userSearchQuery}
                onChange={(e) => onUserSearchQueryChange(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && onSearchUsers()}
                fullWidth
                size="small"
                placeholder="john@example.com"
              />
              <Button
                variant="contained"
                onClick={onSearchUsers}
                disabled={searchingUsers || !userSearchQuery.trim()}
                startIcon={
                  searchingUsers ? (
                    <CircularProgress size={16} />
                  ) : (
                    <Iconify icon="solar:magnifer-bold" />
                  )
                }
              >
                Search
              </Button>
            </Stack>
            {users.length > 0 && (
              <Box sx={{ mt: 1, maxHeight: 200, overflow: "auto", border: "1px solid #e0e0e0", borderRadius: 1 }}>
                {users.map((user) => (
                  <Box
                    key={user.id}
                    onClick={() => onSelectUser(user)}
                    sx={{
                      p: 1.5,
                      cursor: "pointer",
                      bgcolor: selectedUser?.id === user.id ? "primary.light" : "transparent",
                      "&:hover": { bgcolor: "action.hover" },
                      borderBottom: "1px solid #f0f0f0",
                    }}
                  >
                    <Typography variant="body2" fontWeight="medium">
                      {user.email}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ID: {user.id}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {selectedUser && (
            <Alert severity="success" icon={<Iconify icon="solar:user-check-bold" />}>
              Selected User: <strong>{selectedUser.email}</strong>
            </Alert>
          )}

          {selectedUser && (
            <Box>
              <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                Step 2: Select Business
              </Typography>
              {loadingBusinesses ? (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 2 }}>
                  <CircularProgress size={20} />
                  <Typography variant="body2" color="text.secondary">
                    Loading businesses...
                  </Typography>
                </Box>
              ) : businesses.length === 0 ? (
                <Alert severity="warning">
                  No businesses found for this user. The user must create a business first.
                </Alert>
              ) : (
                <Box sx={{ maxHeight: 200, overflow: "auto", border: "1px solid #e0e0e0", borderRadius: 1 }}>
                  {businesses.map((business) => (
                    <Box
                      key={business.id}
                      onClick={() => onSelectBusiness(business)}
                      sx={{
                        p: 1.5,
                        cursor: "pointer",
                        bgcolor: selectedBusiness?.id === business.id ? "primary.light" : "transparent",
                        "&:hover": { bgcolor: "action.hover" },
                        borderBottom: "1px solid #f0f0f0",
                      }}
                    >
                      <Typography variant="body2" fontWeight="medium">
                        {business.enName || business.arName}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        ID: {business.id}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          )}

          {selectedBusiness && (
            <Alert severity="success" icon={<Iconify icon="solar:buildings-bold" />}>
              Selected Business: <strong>{selectedBusiness.enName || selectedBusiness.arName}</strong>
            </Alert>
          )}

          {selectedUser && selectedBusiness && (
            <>
              <Typography variant="subtitle2" gutterBottom fontWeight="bold" sx={{ mt: 2 }}>
                Step 3: Select Plan & Set Dates
              </Typography>
              <FormControl fullWidth required>
                <InputLabel>Plan</InputLabel>
                <Select
                  value={formData.planCode}
                  onChange={(e) => onFormDataChange({ ...formData, planCode: e.target.value })}
                  label="Plan"
                  disabled={plans.length === 0}
                >
                  {plans.length === 0 ? (
                    <MenuItem value="" disabled>
                      No plans available - Please create plans first
                    </MenuItem>
                  ) : (
                    plans.map((plan) => (
                      <MenuItem key={plan.code} value={plan.code}>
                        {plan.name} ({plan.code})
                      </MenuItem>
                    ))
                  )}
                </Select>
                {plans.length === 0 && (
                  <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                    No plans found. Create plans in the Plans page first.
                  </Typography>
                )}
              </FormControl>
              <DateTimePicker
                label="Start Date"
                value={formData.startAt}
                onChange={(newValue) =>
                  onFormDataChange({ ...formData, startAt: newValue || dayjs() })
                }
                slotProps={{ textField: { fullWidth: true } }}
              />
              <DateTimePicker
                label="End Date"
                value={formData.endAt}
                onChange={(newValue) =>
                  onFormDataChange({ ...formData, endAt: newValue || dayjs() })
                }
                slotProps={{ textField: { fullWidth: true } }}
              />
              <DateTimePicker
                label="Offer Expires At"
                value={formData.expiresAt}
                onChange={(newValue) =>
                  onFormDataChange({ ...formData, expiresAt: newValue || dayjs() })
                }
                slotProps={{
                  textField: {
                    fullWidth: true,
                    helperText: "User must accept before this date",
                  },
                }}
              />
              <TextField
                label="Notes"
                value={formData.notes}
                onChange={(e) => onFormDataChange({ ...formData, notes: e.target.value })}
                fullWidth
                multiline
                rows={3}
                helperText="Optional message for the user"
              />
              <Alert severity="info" icon={<Iconify icon="solar:info-circle-bold" />}>
                An email will be sent to the user with plan details and accept/reject options.
              </Alert>
            </>
          )}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={actionLoading}>
          Cancel
        </Button>
        <Button
          onClick={onAssign}
          variant="contained"
          disabled={actionLoading || !selectedUser || !selectedBusiness || !formData.planCode}
          startIcon={
            actionLoading ? (
              <CircularProgress size={16} />
            ) : (
              <Iconify icon="solar:user-check-bold" />
            )
          }
        >
          Assign Plan
        </Button>
      </DialogActions>
    </Dialog>
  );
}
