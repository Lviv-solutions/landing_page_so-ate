const { ServiceManagementClient } = require("../grpc/plans_features/v1/service_grpc_web_pb.js");
const pb = require("../grpc/plans_features/v1/service_pb.js");

export interface Service {
  code: string;
  name: string;
  enabledByDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ListServicesParams {
  pageSize?: number;
  pageToken?: string;
}

export interface ListServicesResponse {
  services: Service[];
  nextPageToken: string;
}

export interface AuthOptions {
  accessToken?: string;
}

class ServiceManagementService {
  private client: any;

  constructor() {
    const envoyUrl =
      process.env.NEXT_PUBLIC_GRPC_WEB_URL || "http://localhost:8085";
    this.client = new ServiceManagementClient(envoyUrl, null, null);
  }

  async listServices(
    params?: ListServicesParams,
    options?: AuthOptions
  ): Promise<ListServicesResponse> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).ListServicesRequest();
        if (params?.pageSize) {
          request.setPageSize(params.pageSize);
        }
        if (params?.pageToken) {
          request.setPageToken(params.pageToken);
        }

        const metadata = this.buildMetadata(options);

        (this.client as any).listServices(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const services = response
                .getServicesList()
                .map((service: any) => this.parseService(service));

              resolve({
                services,
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

  async getService(code: string, options?: AuthOptions): Promise<Service> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).GetServiceRequest();
        request.setCode(code);

        const metadata = this.buildMetadata(options);

        (this.client as any).getService(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const service = response.getService();
              resolve(this.parseService(service));
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  private parseService(service: any): Service {
    const obj = service.toObject();

    return {
      code: obj.code,
      name: obj.name,
      enabledByDefault: obj.enabledByDefault,
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

export const serviceManagementService = new ServiceManagementService();
export default serviceManagementService;
