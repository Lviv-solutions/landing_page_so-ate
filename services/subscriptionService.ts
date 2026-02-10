const { SubscriptionManagementClient } = require("../grpc/plans_features/v1/subscription_grpc_web_pb.js");
const pb = require("../grpc/plans_features/v1/subscription_pb.js");

export enum SubscriptionStatus {
  SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
  SUBSCRIPTION_STATUS_ACTIVE = 1,
  SUBSCRIPTION_STATUS_PAST_DUE = 2,
  SUBSCRIPTION_STATUS_CANCELED = 3,
  SUBSCRIPTION_STATUS_EXPIRED = 4,
}

export interface Subscription {
  id: string;
  userId: string;
  businessId: string;
  planCode: string;
  startAt: Date;
  endAt: Date;
  status: SubscriptionStatus;
  entitlementsEffective: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface ListByBusinessParams {
  businessId: string;
  statuses?: SubscriptionStatus[];
  pageSize?: number;
  pageToken?: string;
}

export interface ListSubscriptionsResponse {
  subscriptions: Subscription[];
  nextPageToken: string;
}

class SubscriptionService {
  private client: any;

  constructor() {
    const envoyUrl =
      process.env.NEXT_PUBLIC_GRPC_WEB_URL || "http://localhost:8085";
    this.client = new SubscriptionManagementClient(envoyUrl, null, null);
  }

  async findActiveByBusiness(businessId: string): Promise<Subscription | null> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).FindActiveByBusinessRequest();
        request.setBusinessId(businessId);

        (this.client as any).findActiveByBusiness(
          request,
          {},
          (err: any, response: any) => {
            if (err) {
              // If no active subscription found, return null instead of error
              if (err.code === 5) { // NOT_FOUND
                resolve(null);
              } else {
                reject(err);
              }
            } else {
              const subscription = response.getSubscription();
              if (subscription) {
                resolve(this.parseSubscription(subscription));
              } else {
                resolve(null);
              }
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async listByBusiness(
    params: ListByBusinessParams
  ): Promise<ListSubscriptionsResponse> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).ListByBusinessRequest();
        request.setBusinessId(params.businessId);

        if (params.statuses && params.statuses.length > 0) {
          request.setStatusesList(params.statuses);
        }
        if (params.pageSize) request.setPageSize(params.pageSize);
        if (params.pageToken) request.setPageToken(params.pageToken);

        (this.client as any).listByBusiness(
          request,
          {},
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const subscriptions = response
                .getSubscriptionsList()
                .map((sub: any) => this.parseSubscription(sub));

              resolve({
                subscriptions,
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

  private parseSubscription(subscription: any): Subscription {
    const obj = subscription.toObject();
    return {
      id: obj.id,
      userId: obj.userId,
      businessId: obj.businessId,
      planCode: obj.planCode,
      startAt: obj.startAt
        ? new Date(obj.startAt.seconds * 1000)
        : new Date(),
      endAt: obj.endAt ? new Date(obj.endAt.seconds * 1000) : new Date(),
      status: obj.status,
      entitlementsEffective: obj.entitlementsEffective,
      createdAt: obj.createdAt
        ? new Date(obj.createdAt.seconds * 1000)
        : new Date(),
      updatedAt: obj.updatedAt
        ? new Date(obj.updatedAt.seconds * 1000)
        : new Date(),
    };
  }
}

export const subscriptionService = new SubscriptionService();
export default subscriptionService;
