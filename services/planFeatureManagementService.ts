const { PlanFeatureManagementClient } = require("../grpc/plans_features/v1/plan_feature_grpc_web_pb.js");
const pb = require("../grpc/plans_features/v1/plan_feature_pb.js");

export enum LimitType {
  LIMIT_TYPE_UNSPECIFIED = 0,
  LIMIT_TYPE_UNLIMITED = 1,
  LIMIT_TYPE_LIMITED = 2,
  LIMIT_TYPE_DISABLED = 3,
  LIMIT_TYPE_HARD = 4,
  LIMIT_TYPE_SOFT = 5,
}

export interface PlanFeature {
  planCode: string;
  featureCode: string;
  limitType: LimitType;
  limitValue: string;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreatePlanFeatureParams {
  planCode: string;
  featureCode: string;
  limitType: LimitType;
  limitValue: string;
  notes?: string;
}

export interface UpdatePlanFeatureParams {
  planCode: string;
  featureCode: string;
  limitType: LimitType;
  limitValue: string;
  notes?: string;
}

export interface ListPlanFeaturesParams {
  planCode: string;
  pageSize?: number;
  pageToken?: string;
}

export interface ListPlanFeaturesResponse {
  planFeatures: PlanFeature[];
  nextPageToken: string;
}

export interface AuthOptions {
  accessToken?: string;
}

class PlanFeatureManagementService {
  private client: any;

  constructor() {
    const envoyUrl =
      process.env.NEXT_PUBLIC_GRPC_WEB_URL || "http://localhost:8085";
    this.client = new PlanFeatureManagementClient(envoyUrl, null, null);
  }

  async createPlanFeature(
    params: CreatePlanFeatureParams,
    options?: AuthOptions
  ): Promise<PlanFeature> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).CreatePlanFeatureRequest();
        request.setPlanCode(params.planCode);
        request.setFeatureCode(params.featureCode);
        request.setLimitType(params.limitType);
        request.setLimitValue(params.limitValue);
        if (params.notes) {
          request.setNotes(params.notes);
        }

        const metadata = this.buildMetadata(options);

        (this.client as any).createPlanFeature(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const planFeature = response.getPlanFeature();
              resolve(this.parsePlanFeature(planFeature));
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async getPlanFeature(
    planCode: string,
    featureCode: string,
    options?: AuthOptions
  ): Promise<PlanFeature> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).GetPlanFeatureRequest();
        request.setPlanCode(planCode);
        request.setFeatureCode(featureCode);

        const metadata = this.buildMetadata(options);

        (this.client as any).getPlanFeature(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const planFeature = response.getPlanFeature();
              resolve(this.parsePlanFeature(planFeature));
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async listPlanFeatures(
    params: ListPlanFeaturesParams,
    options?: AuthOptions
  ): Promise<ListPlanFeaturesResponse> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).ListPlanFeaturesRequest();
        request.setPlanCode(params.planCode);
        if (params.pageSize) {
          request.setPageSize(params.pageSize);
        }
        if (params.pageToken) {
          request.setPageToken(params.pageToken);
        }

        const metadata = this.buildMetadata(options);

        (this.client as any).listPlanFeatures(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const planFeatures = response
                .getPlanFeaturesList()
                .map((pf: any) => this.parsePlanFeature(pf));

              resolve({
                planFeatures,
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

  async updatePlanFeature(
    params: UpdatePlanFeatureParams,
    options?: AuthOptions
  ): Promise<PlanFeature> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).UpdatePlanFeatureRequest();
        request.setPlanCode(params.planCode);
        request.setFeatureCode(params.featureCode);
        request.setLimitType(params.limitType);
        request.setLimitValue(params.limitValue);
        if (params.notes) {
          request.setNotes(params.notes);
        }

        const metadata = this.buildMetadata(options);

        (this.client as any).updatePlanFeature(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const planFeature = response.getPlanFeature();
              resolve(this.parsePlanFeature(planFeature));
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async deletePlanFeature(
    planCode: string,
    featureCode: string,
    options?: AuthOptions
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).DeletePlanFeatureRequest();
        request.setPlanCode(planCode);
        request.setFeatureCode(featureCode);

        const metadata = this.buildMetadata(options);

        (this.client as any).deletePlanFeature(
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

  private parsePlanFeature(planFeature: any): PlanFeature {
    const obj = planFeature.toObject();

    return {
      planCode: obj.planCode,
      featureCode: obj.featureCode,
      limitType: obj.limitType,
      limitValue: obj.limitValue,
      notes: obj.notes,
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

export const planFeatureManagementService = new PlanFeatureManagementService();
export default planFeatureManagementService;
