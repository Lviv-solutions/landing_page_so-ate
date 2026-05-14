import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Iconify } from "../../../packages/my-saas-components/src/iconify";
import { ClaimRequest, ClaimStatus } from "../../../services/claimRequestService";
import { getStatusColor, getStatusText, getStatusIcon } from "./claimHelpers";

interface ClaimsTableProps {
  claims: ClaimRequest[];
  isArabic: boolean;
  t: (key: string) => string;
  onViewEvidence: (claim: ClaimRequest) => void;
  onApprove: (claim: ClaimRequest) => void;
  onReject: (claim: ClaimRequest) => void;
}

export default function ClaimsTable({
  claims,
  isArabic,
  t,
  onViewEvidence,
  onApprove,
  onReject,
}: ClaimsTableProps) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t("admin.claimId") || "Claim ID"}</TableCell>
            <TableCell>{t("admin.businessName") || "Business Name"}</TableCell>
            <TableCell>{t("admin.contactInfo") || "Contact Info"}</TableCell>
            <TableCell>{t("admin.requesterId") || "Requester ID"}</TableCell>
            <TableCell>{t("admin.status") || "Status"}</TableCell>
            <TableCell>{t("admin.submitted") || "Submitted"}</TableCell>
            <TableCell align={isArabic ? "left" : "right"}>{t("admin.actions") || "Actions"}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {claims.map((claim) => (
            <TableRow
              key={claim.id}
              sx={{ "&:hover": { bgcolor: "action.hover" } }}
            >
              <TableCell>
                <Typography
                  variant="body2"
                  fontFamily="monospace"
                  sx={{
                    maxWidth: 200,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {claim.id}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" fontWeight="medium">
                  {claim.enName || claim.arName || "N/A"}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" color="text.secondary">
                  {claim.evidenceJson?.email ||
                   claim.evidenceJson?.phoneNumber || 
                   claim.evidenceJson?.ownershipProof || 
                   "N/A"}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" fontFamily="monospace">
                  {claim.requesterId.substring(0, 8)}...
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  icon={
                    <Iconify
                      icon={getStatusIcon(claim.status)}
                      width={18}
                    />
                  }
                  label={getStatusText(claim.status, t)}
                  color={getStatusColor(claim.status)}
                  size="small"
                />
              </TableCell>
              <TableCell>
                <Typography variant="body2" color="text.secondary">
                  {claim.createdAt.toLocaleDateString()}
                </Typography>
              </TableCell>
              <TableCell align={isArabic ? "left" : "right"}>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent={isArabic ? "flex-start" : "flex-end"}
                  sx={{ 
                    flexDirection: isArabic ? "row-reverse" : "row" 
                  }}
                >
                  <Button
                    size="small"
                    variant="outlined"
                    color="info"
                    startIcon={
                      <Iconify icon="solar:document-text-bold" />
                    }
                    onClick={() => onViewEvidence(claim)}
                    sx={{ minWidth: 100 }}
                  >
                    {t("admin.viewEvidence") || "Evidence"}
                  </Button>
                  {claim.status ===
                    ClaimStatus.CLAIM_STATUS_PENDING && (
                    <>
                      <Button
                        size="small"
                        variant="contained"
                        color="success"
                        startIcon={
                          <Iconify icon="solar:check-circle-bold" />
                        }
                        onClick={() => onApprove(claim)}
                        sx={{ minWidth: 100 }}
                      >
                        {t("admin.approve") || "Approve"}
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        startIcon={
                          <Iconify icon="solar:close-circle-bold" />
                        }
                        onClick={() => onReject(claim)}
                        sx={{ minWidth: 100 }}
                      >
                        {t("admin.reject") || "Reject"}
                      </Button>
                    </>
                  )}
                  {claim.status !==
                    ClaimStatus.CLAIM_STATUS_PENDING && (
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {t("admin.reviewed") || "Reviewed"}
                    </Typography>
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
