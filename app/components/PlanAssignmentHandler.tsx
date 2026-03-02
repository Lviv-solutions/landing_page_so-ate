"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
  Alert,
  Typography,
  Box,
} from "@mui/material";
import planAssignmentService from "../../services/planAssignmentService";
import { webClientAuthService } from "../../lib/auth-service";

function PlanAssignmentHandlerContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [assignmentDetails, setAssignmentDetails] = useState<any>(null);

  useEffect(() => {
    const assignmentId = searchParams.get("accept_assignment");
    console.log("PlanAssignmentHandler: Checking for accept_assignment parameter:", assignmentId);
    
    if (assignmentId) {
      console.log("PlanAssignmentHandler: Found assignment ID, opening modal and accepting...");
      setOpen(true);
      handleAcceptAssignment(assignmentId);
    }
  }, [searchParams]);

  const handleAcceptAssignment = async (assignmentId: string) => {
    console.log("PlanAssignmentHandler: Starting acceptance for assignment:", assignmentId);
    setLoading(true);
    setError(null);

    try {
      const token = webClientAuthService.getToken();
      console.log("PlanAssignmentHandler: Got auth token:", token ? "YES" : "NO");
      
      if (!token) {
        console.warn("PlanAssignmentHandler: No auth token found");
        setError("You must be logged in to accept a plan assignment. Please log in and try again.");
        setLoading(false);
        return;
      }

      console.log("PlanAssignmentHandler: Calling acceptPlanAssignment service...");
      const response = await planAssignmentService.acceptPlanAssignment(
        assignmentId,
        { accessToken: token }
      );

      console.log("PlanAssignmentHandler: Assignment accepted successfully:", response);
      setAssignmentDetails(response);
      setSuccess(true);
      setLoading(false);

      setTimeout(() => {
        console.log("PlanAssignmentHandler: Redirecting to dashboard...");
        router.push("/en/client");
      }, 3000);
    } catch (err: any) {
      console.error("PlanAssignmentHandler: Failed to accept plan assignment:", err);
      setError(err.message || "Failed to accept plan assignment. Please try again or contact support.");
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    const url = new URL(window.location.href);
    url.searchParams.delete("accept_assignment");
    router.replace(url.pathname + url.search);
  };

  return (
    <Dialog open={open} onClose={loading ? undefined : handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {loading ? "Processing Plan Assignment..." : success ? "Plan Accepted!" : "Plan Assignment"}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ py: 2 }}>
          {loading && (
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
              <CircularProgress size={48} />
              <Typography variant="body1" color="text.secondary">
                Accepting your plan assignment...
              </Typography>
            </Box>
          )}

          {success && assignmentDetails && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Alert severity="success">
                <Typography variant="body1" fontWeight="bold">
                  Plan assignment accepted successfully!
                </Typography>
              </Alert>
              
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Your subscription has been activated:
                </Typography>
                <Typography variant="body2">
                  <strong>Subscription ID:</strong> {assignmentDetails.subscriptionId}
                </Typography>
                {assignmentDetails.invoiceId && (
                  <Typography variant="body2">
                    <strong>Invoice ID:</strong> {assignmentDetails.invoiceId}
                  </Typography>
                )}
              </Box>

              <Alert severity="info">
                You will be redirected to your dashboard in 3 seconds...
              </Alert>
            </Box>
          )}

          {error && (
            <Alert severity="error">
              <Typography variant="body2">{error}</Typography>
            </Alert>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        {!loading && (
          <>
            <Button onClick={handleClose} color="inherit">
              Close
            </Button>
            {success && (
              <Button
                onClick={() => router.push("/en/client")}
                variant="contained"
                color="primary"
              >
                Go to Dashboard
              </Button>
            )}
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default function PlanAssignmentHandler() {
  return (
    <Suspense fallback={null}>
      <PlanAssignmentHandlerContent />
    </Suspense>
  );
}
