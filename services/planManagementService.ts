const { PlanManagementClient } = require("../grpc/plans_features/v1/plan_management_grpc_web_pb.js");
const pb = require("../grpc/plans_features/v1/plan_management_pb.js");

export enum PlanStatus {
  PLAN_STATUS_UNSPECIFIED = 0,
  PLAN_STATUS_ACTIVE = 1,
  PLAN_STATUS_INACTIVE = 2,
  PLAN_STATUS_ARCHIVED = 3,
}

export enum BillingPeriod {
  BILLING_PERIOD_UNSPECIFIED = 0,
  BILLING_PERIOD_MONTHLY = 1,
  BILLING_PERIOD_QUARTERLY = 2,
  BILLING_PERIOD_YEARLY = 3,
  BILLING_PERIOD_LIFETIME = 4,
}

export interface Plan {
  code: string;
  name: string;
  description: string;
  serviceCodes: string[];
  featureCodes: string[];
  status: PlanStatus;
  billingPeriod: BillingPeriod;
  priceMinor: number;
  currency: string;
  trialDays: number;
  metadata: { [key: string]: string };
  createdAt: Date;
  updatedAt: Date;
}

export interface CreatePlanParams {
  code: string;
  name: string;
  description: string;
  serviceCodes?: string[];
  featureCodes?: string[];
  billingPeriod: BillingPeriod;
  priceMinor: number;
  currency: string;
  trialDays?: number;
  metadata?: { [key: string]: string };
}

export interface UpdatePlanParams {
  code: string;
  name?: string;
  description?: string;
  serviceCodes?: string[];
  featureCodes?: string[];
  status?: PlanStatus;
  billingPeriod?: BillingPeriod;
  priceMinor?: number;
  currency?: string;
  trialDays?: number;
  metadata?: { [key: string]: string };
}

export interface ListPlansParams {
  status?: PlanStatus;
  pageSize?: number;
  pageToken?: string;
}

export interface ListPlansResponse {
  plans: Plan[];
  nextPageToken: string;
}

export interface AuthOptions {
  accessToken?: string;
}

class PlanManagementService {
  private client: any;

  constructor() {
    const envoyUrl =
      process.env.NEXT_PUBLIC_GRPC_WEB_URL || "http://localhost:8085";
    this.client = new PlanManagementClient(envoyUrl, null, null);
  }

  async createPlan(
    params: CreatePlanParams,
    options?: AuthOptions
  ): Promise<Plan> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).CreatePlanRequest();
        request.setCode(params.code);
        request.setName(params.name);
        request.setDescription(params.description);
        if (params.serviceCodes) {
          request.setServiceCodesList(params.serviceCodes);
        }
        if (params.featureCodes) {
          request.setFeatureCodesList(params.featureCodes);
        }
        request.setBillingPeriod(params.billingPeriod);
        request.setPriceMinor(params.priceMinor);
        request.setCurrency(params.currency);
        if (params.trialDays !== undefined) {
          request.setTrialDays(params.trialDays);
        }
        if (params.metadata) {
          const metadataMap = request.getMetadataMap();
          Object.entries(params.metadata).forEach(([key, value]) => {
            metadataMap.set(key, value);
          });
        }

        const metadata = this.buildMetadata(options);

        (this.client as any).createPlan(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const plan = response.getPlan();
              resolve(this.parsePlan(plan));
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async getPlan(code: string, options?: AuthOptions): Promise<Plan> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).GetPlanRequest();
        request.setCode(code);

        const metadata = this.buildMetadata(options);

        (this.client as any).getPlan(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const plan = response.getPlan();
              resolve(this.parsePlan(plan));
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async listPlans(
    params?: ListPlansParams,
    options?: AuthOptions
  ): Promise<ListPlansResponse> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).ListPlansRequest();
        if (params?.status !== undefined) {
          request.setStatus(params.status);
        }
        if (params?.pageSize) {
          request.setPageSize(params.pageSize);
        }
        if (params?.pageToken) {
          request.setPageToken(params.pageToken);
        }

        const metadata = this.buildMetadata(options);

        (this.client as any).listPlans(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const plans = response
                .getPlansList()
                .map((plan: any) => this.parsePlan(plan));

              resolve({
                plans,
                nextPageToken: response.getNextPageToken(),
              });
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async updatePlan(
    params: UpdatePlanParams,
    options?: AuthOptions
  ): Promise<Plan> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).UpdatePlanRequest();
        request.setCode(params.code);
        if (params.name) request.setName(params.name);
        if (params.description) request.setDescription(params.description);
        if (params.serviceCodes) request.setServiceCodesList(params.serviceCodes);
        if (params.featureCodes) request.setFeatureCodesList(params.featureCodes);
        if (params.status !== undefined) request.setStatus(params.status);
        if (params.billingPeriod !== undefined)
          request.setBillingPeriod(params.billingPeriod);
        if (params.priceMinor !== undefined)
          request.setPriceMinor(params.priceMinor);
        if (params.currency) request.setCurrency(params.currency);
        if (params.trialDays !== undefined)
          request.setTrialDays(params.trialDays);
        if (params.metadata) {
          const metadataMap = request.getMetadataMap();
          Object.entries(params.metadata).forEach(([key, value]) => {
            metadataMap.set(key, value);
          });
        }

        const metadata = this.buildMetadata(options);

        (this.client as any).updatePlan(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const plan = response.getPlan();
              resolve(this.parsePlan(plan));
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async deletePlan(code: string, options?: AuthOptions): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).DeletePlanRequest();
        request.setCode(code);

        const metadata = this.buildMetadata(options);

        (this.client as any).deletePlan(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              resolve(response.getSuccess());
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  private parsePlan(plan: any): Plan {
    const obj = plan.toObject();
    const metadataMap: { [key: string]: string } = {};
    
    if (plan.getMetadataMap) {
      const map = plan.getMetadataMap();
      map.forEach((value: string, key: string) => {
        metadataMap[key] = value;
      });
    }

    return {
      code: obj.code,
      name: obj.name,
      description: obj.description,
      serviceCodes: obj.serviceCodesList || [],
      featureCodes: obj.featureCodesList || [],
      status: obj.status,
      billingPeriod: obj.billingPeriod,
      priceMinor: obj.priceMinor,
      currency: obj.currency,
      trialDays: obj.trialDays,
      metadata: metadataMap,
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

export const planManagementService = new PlanManagementService();
export default planManagementService;
