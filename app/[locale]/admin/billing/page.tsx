"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import AdminRoute from "../../../components/AdminRoute";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import { Iconify } from "../../../../packages/my-saas-components/src/iconify";
import { useTranslation } from "../../../hooks/useTranslation";
import { getAdminId, getAdminInfo } from "../../../../lib/auth";
import { webClientAuthService } from "../../../../lib/auth-service";
import invoiceService, {
  Invoice,
  InvoiceStatus,
} from "../../../../services/invoiceService";

import {
  AdminPageLayout,
  AdminLoadingScreen,
} from "../../../components/admin";
import { AdminInfo } from "../../../types/admin";

const formatPrice = (priceMinor: number, currency: string) => {
  const amount = priceMinor / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "USD",
    minimumFractionDigits: 2,
  }).format(amount);
};


const getInvoiceStatusText = (status: InvoiceStatus) => {
  switch (status) {
    case InvoiceStatus.INVOICE_STATUS_DRAFT:
      return "Draft";
    case InvoiceStatus.INVOICE_STATUS_ISSUED:
      return "Issued";
    case InvoiceStatus.INVOICE_STATUS_PAID:
      return "Paid";
    case InvoiceStatus.INVOICE_STATUS_VOID:
      return "Void";
    case InvoiceStatus.INVOICE_STATUS_CANCELED:
      return "Canceled";
    default:
      return "Unknown";
  }
};

const getInvoiceStatusColor = (status: InvoiceStatus) => {
  switch (status) {
    case InvoiceStatus.INVOICE_STATUS_DRAFT:
      return "default";
    case InvoiceStatus.INVOICE_STATUS_ISSUED:
      return "info";
    case InvoiceStatus.INVOICE_STATUS_PAID:
      return "success";
    case InvoiceStatus.INVOICE_STATUS_VOID:
    case InvoiceStatus.INVOICE_STATUS_CANCELED:
      return "error";
    default:
      return "default";
  }
};

function AdminBillingContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [invoiceDialogOpen, setInvoiceDialogOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [adminInfo, setAdminInfo] = useState<AdminInfo | null>(null);

  const router = useRouter();
  const { locale } = useTranslation();

  useEffect(() => {
    const loadData = async () => {
      try {
        const loggedInAdminId = getAdminId();
        if (!loggedInAdminId) {
          setError("Admin not logged in");
          setIsLoading(false);
          router.push(`/${locale}/admin`);
          return;
        }
        setAdminInfo(getAdminInfo());

        const token = webClientAuthService.getToken();

        try {
          const invoicesResponse = await invoiceService.listInvoices(
            { limit: 100, offset: 0 },
            { accessToken: token ?? undefined }
          );
          setInvoices(invoicesResponse.invoices);
        } catch (invoiceError) {
          console.error("Failed to load invoices:", invoiceError);
          setError("Failed to load invoices.");
        }
      } catch (err) {
        console.error("Failed to load data:", err);
        setError("Failed to load billing data");
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [router, locale]);

  const mainCurrency = useMemo(() => {
    const invoice = invoices.find((inv) => inv.currency);
    return invoice?.currency || "USD";
  }, [invoices]);

  const totalInvoiceRevenue = useMemo(() => {
    return invoices
      .filter((inv) => inv.status === InvoiceStatus.INVOICE_STATUS_PAID)
      .reduce((sum, inv) => sum + inv.totalMinor, 0);
  }, [invoices]);

  const paidInvoicesCount = useMemo(
    () => invoices.filter((inv) => inv.status === InvoiceStatus.INVOICE_STATUS_PAID).length,
    [invoices]
  );

  const pendingInvoicesCount = useMemo(
    () => invoices.filter((inv) => inv.status === InvoiceStatus.INVOICE_STATUS_ISSUED).length,
    [invoices]
  );

  const draftInvoicesCount = useMemo(
    () => invoices.filter((inv) => inv.status === InvoiceStatus.INVOICE_STATUS_DRAFT).length,
    [invoices]
  );

  const handleViewInvoice = async (invoiceId: string) => {
    try {
      const token = webClientAuthService.getToken();
      const invoice = await invoiceService.getInvoice(
        { invoiceId },
        { accessToken: token ?? undefined }
      );
      setSelectedInvoice(invoice);
      setInvoiceDialogOpen(true);
    } catch (err) {
      console.error("Failed to load invoice:", err);
      setError("Failed to load invoice details");
    }
  };

  const handleCloseInvoiceDialog = () => {
    setInvoiceDialogOpen(false);
    setSelectedInvoice(null);
  };

  if (isLoading) {
    return <AdminLoadingScreen />;
  }

  const navButtons = [
    { label: "Claims", icon: "solar:list-bold", path: "claims" },
    { label: "Plans", icon: "solar:bill-list-bold", path: "plans" },
    { label: "Assignments", icon: "solar:user-check-bold", path: "assignments" },
  ];

  const statCards = [
    {
      title: "Total Revenue",
      value: formatPrice(totalInvoiceRevenue, mainCurrency),
      icon: "solar:wallet-money-bold",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Total Invoices",
      value: invoices.length.toString(),
      icon: "solar:bill-list-bold",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    },
    {
      title: "Paid Invoices",
      value: paidInvoicesCount.toString(),
      icon: "solar:check-circle-bold",
      gradient: "linear-gradient(135deg, #F2994A 0%, #F2C94C 100%)",
    },
    {
      title: "Pending Invoices",
      value: pendingInvoicesCount.toString(),
      icon: "solar:clock-circle-bold",
      gradient: "linear-gradient(135deg, #ED614A 0%, #E6446F 100%)",
    },
  ];

  return (
    <AdminPageLayout
      adminInfo={adminInfo}
      navButtons={navButtons}
      successMessage={null}
    >
      <Box>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Invoices
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage and track all invoices
        </Typography>
      </Box>

      {error && (
        <Card sx={{ bgcolor: "#FFF3F0", border: "1px solid #FFCCC7" }}>
          <CardContent>
            <Stack direction="row" spacing={1} alignItems="center">
              <Iconify icon="solar:danger-circle-bold" color="#FF4D4F" />
              <Typography color="error">{error}</Typography>
            </Stack>
          </CardContent>
        </Card>
      )}

      {/* Summary Stat Cards */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
        {statCards.map((card) => (
          <Card
            key={card.title}
            sx={{
              flex: 1,
              background: card.gradient,
              color: "white",
              borderRadius: 3,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                <Box>
                  <Typography variant="body2" sx={{ opacity: 0.85, mb: 0.5 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="h4" fontWeight="bold">
                    {card.value}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Iconify icon={card.icon} width={28} />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>

      {/* All Invoices */}
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            All Invoices
          </Typography>
          {invoices.length === 0 ? (
            <Typography variant="body2" color="text.secondary" sx={{ py: 4, textAlign: "center" }}>
              No invoices found
            </Typography>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Invoice #</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell>Issue Date</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id} sx={{ "&:hover": { bgcolor: "action.hover" } }}>
                      <TableCell>
                        <Typography variant="body2" fontWeight="medium">
                          {invoice.invoiceNumber}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" fontFamily="monospace">
                          {invoice.id.substring(0, 12)}...
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {invoice.customerInfo?.name || "N/A"}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {invoice.customerInfo?.email || ""}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={getInvoiceStatusText(invoice.status)}
                          color={getInvoiceStatusColor(invoice.status)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body2" fontWeight="bold">
                          {formatPrice(invoice.totalMinor, invoice.currency)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" color="text.secondary">
                          {invoice.issueDate?.toLocaleDateString() || "N/A"}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          size="small"
                          onClick={() => handleViewInvoice(invoice.id)}
                          color="primary"
                        >
                          <Iconify icon="solar:eye-bold" width={20} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>

      {/* Invoice Detail Dialog */}
      <Dialog
        open={invoiceDialogOpen}
        onClose={handleCloseInvoiceDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight="bold">
              Invoice Details
            </Typography>
            <IconButton onClick={handleCloseInvoiceDialog} size="small">
              <Iconify icon="solar:close-circle-bold" width={24} />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent dividers>
          {selectedInvoice && (
            <Stack spacing={3}>
              <Stack direction="row" justifyContent="space-between">
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Invoice Number
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {selectedInvoice.invoiceNumber}
                  </Typography>
                </Box>
                <Box>
                  <Chip
                    label={getInvoiceStatusText(selectedInvoice.status)}
                    color={getInvoiceStatusColor(selectedInvoice.status)}
                  />
                </Box>
              </Stack>

              <Divider />

              <Stack direction="row" spacing={4}>
                <Box flex={1}>
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    Customer Information
                  </Typography>
                  <Typography variant="body2">{selectedInvoice.customerInfo?.name || "N/A"}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedInvoice.customerInfo?.email || ""}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedInvoice.customerInfo?.phone || ""}
                  </Typography>
                </Box>
                <Box flex={1}>
                  <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                    Business Information
                  </Typography>
                  <Typography variant="body2">{selectedInvoice.businessInfo?.name || "N/A"}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedInvoice.businessInfo?.email || ""}
                  </Typography>
                </Box>
              </Stack>

              <Divider />

              <Box>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                  Invoice Items
                </Typography>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell align="center">Qty</TableCell>
                        <TableCell align="right">Unit Price</TableCell>
                        <TableCell align="right">Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedInvoice.items.map((item, idx) => (
                        <TableRow key={idx}>
                          <TableCell>{item.description}</TableCell>
                          <TableCell align="center">{item.quantity}</TableCell>
                          <TableCell align="right">
                            {formatPrice(item.unitPriceMinor, selectedInvoice.currency)}
                          </TableCell>
                          <TableCell align="right">
                            {formatPrice(item.totalMinor, selectedInvoice.currency)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              <Divider />

              <Stack spacing={1}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">Subtotal:</Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {formatPrice(selectedInvoice.subtotalMinor, selectedInvoice.currency)}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">Tax:</Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {formatPrice(selectedInvoice.taxMinor, selectedInvoice.currency)}
                  </Typography>
                </Stack>
                <Divider />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h6" fontWeight="bold">
                    Total:
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" color="primary">
                    {formatPrice(selectedInvoice.totalMinor, selectedInvoice.currency)}
                  </Typography>
                </Stack>
              </Stack>

              <Divider />

              <Stack direction="row" spacing={4}>
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Issue Date
                  </Typography>
                  <Typography variant="body2">
                    {selectedInvoice.issueDate?.toLocaleDateString() || "N/A"}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Due Date
                  </Typography>
                  <Typography variant="body2">
                    {selectedInvoice.dueDate?.toLocaleDateString() || "N/A"}
                  </Typography>
                </Box>
                {selectedInvoice.paidAt && (
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Paid At
                    </Typography>
                    <Typography variant="body2">
                      {selectedInvoice.paidAt.toLocaleDateString()}
                    </Typography>
                  </Box>
                )}
              </Stack>
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseInvoiceDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </AdminPageLayout>
  );
}

export default function AdminBillingPage() {
  return (
    <AdminRoute>
      <AdminBillingContent />
    </AdminRoute>
  );
}
