const { FeatureManagementClient } = require("../grpc/plans_features/v1/feature_grpc_web_pb.js");
const pb = require("../grpc/plans_features/v1/feature_pb.js");

export enum ValueType {
  VALUE_TYPE_UNSPECIFIED = 0,
  VALUE_TYPE_INT = 1,
  VALUE_TYPE_BOOL = 2,
  VALUE_TYPE_TEXT = 3,
  VALUE_TYPE_JSON = 4,
}

export interface Feature {
  code: string;
  name: string;
  valueType: ValueType;
  unit: string;
  serviceCode: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ListFeaturesParams {
  serviceCode?: string;
  pageSize?: number;
  pageToken?: string;
}

export interface ListFeaturesResponse {
  features: Feature[];
  nextPageToken: string;
}

export interface AuthOptions {
  accessToken?: string;
}

class FeatureManagementService {
  private client: any;

  constructor() {
    const envoyUrl =
      process.env.NEXT_PUBLIC_GRPC_WEB_URL || "http://localhost:8085";
    this.client = new FeatureManagementClient(envoyUrl, null, null);
  }

  async listFeatures(
    params?: ListFeaturesParams,
    options?: AuthOptions
  ): Promise<ListFeaturesResponse> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).ListFeaturesRequest();
        if (params?.serviceCode) {
          request.setServiceCode(params.serviceCode);
        }
        if (params?.pageSize) {
          request.setPageSize(params.pageSize);
        }
        if (params?.pageToken) {
          request.setPageToken(params.pageToken);
        }

        const metadata = this.buildMetadata(options);

        (this.client as any).listFeatures(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const features = response
                .getFeaturesList()
                .map((feature: any) => this.parseFeature(feature));

              resolve({
                features,
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

  async getFeature(code: string, options?: AuthOptions): Promise<Feature> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).GetFeatureRequest();
        request.setCode(code);

        const metadata = this.buildMetadata(options);

        (this.client as any).getFeature(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const feature = response.getFeature();
              resolve(this.parseFeature(feature));
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  private parseFeature(feature: any): Feature {
    const obj = feature.toObject();

    return {
      code: obj.code,
      name: obj.name,
      valueType: obj.valueType,
      unit: obj.unit,
      serviceCode: obj.serviceCode,
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

export const featureManagementService = new FeatureManagementService();
export default featureManagementService;
