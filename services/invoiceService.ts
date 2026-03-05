const { InvoiceServiceClient } = require("../grpc/payments/v1/invoice_grpc_web_pb.js");
const pb = require("../grpc/payments/v1/invoice_pb.js");

export enum InvoiceStatus {
  INVOICE_STATUS_UNSPECIFIED = 0,
  INVOICE_STATUS_DRAFT = 1,
  INVOICE_STATUS_ISSUED = 2,
  INVOICE_STATUS_PAID = 3,
  INVOICE_STATUS_VOID = 4,
  INVOICE_STATUS_CANCELED = 5,
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address?: Address;
  taxId: string;
}

export interface BusinessInfo {
  name: string;
  email: string;
  phone: string;
  address?: Address;
  taxId: string;
  registrationNumber: string;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPriceMinor: number;
  totalMinor: number;
  taxRate: string;
}

export interface TaxBreakdown {
  taxName: string;
  taxRate: string;
  taxAmountMinor: number;
  taxableAmountMinor: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  chargeId: string;
  businessId: string;
  customerId: string;
  status: InvoiceStatus;
  currency: string;
  subtotalMinor: number;
  taxMinor: number;
  totalMinor: number;
  items: InvoiceItem[];
  taxBreakdown: TaxBreakdown[];
  customerInfo?: CustomerInfo;
  businessInfo?: BusinessInfo;
  metadata: { [key: string]: string };
  issueDate?: Date;
  dueDate?: Date;
  paidAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ListInvoicesParams {
  businessId?: string;
  customerId?: string;
  status?: InvoiceStatus;
  limit?: number;
  offset?: number;
}

export interface ListInvoicesResponse {
  invoices: Invoice[];
  total: number;
}

export interface GetInvoiceParams {
  invoiceId: string;
}

export interface GenerateInvoiceParams {
  chargeId: string;
  customerName?: string;
  customerEmail?: string;
  customerAddress?: Address;
  metadata?: { [key: string]: string };
}

export interface GenerateInvoiceResponse {
  invoice: Invoice;
  pdfUrl: string;
}

export interface AuthOptions {
  accessToken?: string;
}

class InvoiceService {
  private client: any;

  constructor() {
    const envoyUrl =
      process.env.NEXT_PUBLIC_GRPC_WEB_URL || "http://localhost:8085";
    this.client = new InvoiceServiceClient(envoyUrl, null, null);
  }

  async listInvoices(
    params?: ListInvoicesParams,
    options?: AuthOptions
  ): Promise<ListInvoicesResponse> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).ListInvoicesRequest();
        
        if (params?.businessId) {
          request.setBusinessId(params.businessId);
        }
        if (params?.customerId) {
          request.setCustomerId(params.customerId);
        }
        if (params?.status !== undefined) {
          request.setStatus(params.status);
        }
        if (params?.limit) {
          request.setLimit(params.limit);
        }
        if (params?.offset) {
          request.setOffset(params.offset);
        }

        const metadata = this.buildMetadata(options);

        (this.client as any).listInvoices(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const invoices = response
                .getInvoicesList()
                .map((invoice: any) => this.parseInvoice(invoice));

              resolve({
                invoices,
                total: response.getTotal(),
              });
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async getInvoice(
    params: GetInvoiceParams,
    options?: AuthOptions
  ): Promise<Invoice> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).GetInvoiceRequest();
        request.setInvoiceId(params.invoiceId);

        const metadata = this.buildMetadata(options);

        (this.client as any).getInvoice(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const invoice = response.getInvoice();
              resolve(this.parseInvoice(invoice));
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async getInvoiceByCharge(
    chargeId: string,
    options?: AuthOptions
  ): Promise<Invoice> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).GetInvoiceByChargeRequest();
        request.setChargeId(chargeId);

        const metadata = this.buildMetadata(options);

        (this.client as any).getInvoiceByCharge(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const invoice = response.getInvoice();
              resolve(this.parseInvoice(invoice));
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async generateInvoice(
    params: GenerateInvoiceParams,
    options?: AuthOptions
  ): Promise<GenerateInvoiceResponse> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).GenerateInvoiceRequest();
        request.setChargeId(params.chargeId);
        
        if (params.customerName) {
          request.setCustomerName(params.customerName);
        }
        if (params.customerEmail) {
          request.setCustomerEmail(params.customerEmail);
        }
        if (params.customerAddress) {
          const address = new (pb as any).Address();
          address.setStreet(params.customerAddress.street);
          address.setCity(params.customerAddress.city);
          address.setState(params.customerAddress.state);
          address.setPostalCode(params.customerAddress.postalCode);
          address.setCountry(params.customerAddress.country);
          request.setCustomerAddress(address);
        }
        if (params.metadata) {
          const metadataMap = request.getMetadataMap();
          Object.entries(params.metadata).forEach(([key, value]) => {
            metadataMap.set(key, value);
          });
        }

        const metadata = this.buildMetadata(options);

        (this.client as any).generateInvoice(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const invoice = response.getInvoice();
              resolve({
                invoice: this.parseInvoice(invoice),
                pdfUrl: response.getPdfUrl(),
              });
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  private parseInvoice(invoice: any): Invoice {
    const obj = invoice.toObject();
    const metadataMap: { [key: string]: string } = {};
    
    if (invoice.getMetadataMap) {
      const map = invoice.getMetadataMap();
      map.forEach((value: string, key: string) => {
        metadataMap[key] = value;
      });
    }

    return {
      id: obj.id,
      invoiceNumber: obj.invoiceNumber,
      chargeId: obj.chargeId,
      businessId: obj.businessId,
      customerId: obj.customerId,
      status: obj.status,
      currency: obj.currency,
      subtotalMinor: obj.subtotalMinor,
      taxMinor: obj.taxMinor,
      totalMinor: obj.totalMinor,
      items: obj.itemsList?.map((item: any) => ({
        description: item.description,
        quantity: item.quantity,
        unitPriceMinor: item.unitPriceMinor,
        totalMinor: item.totalMinor,
        taxRate: item.taxRate,
      })) || [],
      taxBreakdown: obj.taxBreakdownList?.map((tax: any) => ({
        taxName: tax.taxName,
        taxRate: tax.taxRate,
        taxAmountMinor: tax.taxAmountMinor,
        taxableAmountMinor: tax.taxableAmountMinor,
      })) || [],
      customerInfo: obj.customerInfo ? {
        name: obj.customerInfo.name,
        email: obj.customerInfo.email,
        phone: obj.customerInfo.phone,
        address: obj.customerInfo.address ? {
          street: obj.customerInfo.address.street,
          city: obj.customerInfo.address.city,
          state: obj.customerInfo.address.state,
          postalCode: obj.customerInfo.address.postalCode,
          country: obj.customerInfo.address.country,
        } : undefined,
        taxId: obj.customerInfo.taxId,
      } : undefined,
      businessInfo: obj.businessInfo ? {
        name: obj.businessInfo.name,
        email: obj.businessInfo.email,
        phone: obj.businessInfo.phone,
        address: obj.businessInfo.address ? {
          street: obj.businessInfo.address.street,
          city: obj.businessInfo.address.city,
          state: obj.businessInfo.address.state,
          postalCode: obj.businessInfo.address.postalCode,
          country: obj.businessInfo.address.country,
        } : undefined,
        taxId: obj.businessInfo.taxId,
        registrationNumber: obj.businessInfo.registrationNumber,
      } : undefined,
      metadata: metadataMap,
      issueDate: obj.issueDate
        ? new Date(obj.issueDate.seconds * 1000)
        : undefined,
      dueDate: obj.dueDate
        ? new Date(obj.dueDate.seconds * 1000)
        : undefined,
      paidAt: obj.paidAt
        ? new Date(obj.paidAt.seconds * 1000)
        : undefined,
      createdAt: obj.createdAt
        ? new Date(obj.createdAt.seconds * 1000)
        : new Date(),
      updatedAt: obj.updatedAt
        ? new Date(obj.updatedAt.seconds * 1000)
        : new Date(),
    };
  }

  private buildMetadata(options?: AuthOptions): any {
    const metadata: any = {};
    if (options?.accessToken) {
      metadata.authorization = `Bearer ${options.accessToken}`;
    }
    return metadata;
  }
}

export const invoiceService = new InvoiceService();
export default invoiceService;
