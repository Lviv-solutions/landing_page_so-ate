const { PlanAssignmentServiceClient } = require("../grpc/plans_features/v1/plan_assignment_grpc_web_pb.js");
const pb = require("../grpc/plans_features/v1/plan_assignment_pb.js");
const { Timestamp } = require("google-protobuf/google/protobuf/timestamp_pb.js");

export enum AssignmentStatus {
  ASSIGNMENT_STATUS_UNSPECIFIED = 0,
  ASSIGNMENT_STATUS_PENDING = 1,
  ASSIGNMENT_STATUS_ACCEPTED = 2,
  ASSIGNMENT_STATUS_REJECTED = 3,
  ASSIGNMENT_STATUS_CANCELED = 4,
  ASSIGNMENT_STATUS_EXPIRED = 5,
}

export interface PlanAssignment {
  id: string;
  planCode: string;
  userId: string;
  businessId: string;
  assignedBy: string;
  status: AssignmentStatus;
  startAt: Date;
  endAt: Date;
  expiresAt: Date;
  subscriptionId: string;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AssignPlanToUserParams {
  planCode: string;
  userId: string;
  businessId: string;
  startAt: Date;
  endAt?: Date;
  expiresAt?: Date;
  notes?: string;
}

export interface AssignPlanToUserResponse {
  assignment: PlanAssignment;
  emailSent: boolean;
}

export interface ListPlanAssignmentsParams {
  userId?: string;
  businessId?: string;
  status?: AssignmentStatus;
  pageSize?: number;
  pageToken?: string;
}

export interface ListPlanAssignmentsResponse {
  assignments: PlanAssignment[];
  nextPageToken: string;
}

export interface AcceptPlanAssignmentResponse {
  assignment: PlanAssignment;
  subscriptionId: string;
  invoiceId: string;
}

export interface AuthOptions {
  accessToken?: string;
}

class PlanAssignmentService {
  private client: any;

  constructor() {
    const envoyUrl =
      process.env.NEXT_PUBLIC_GRPC_WEB_URL || "http://localhost:8085";
    this.client = new PlanAssignmentServiceClient(envoyUrl, null, null);
  }

  async assignPlanToUser(
    params: AssignPlanToUserParams,
    options?: AuthOptions
  ): Promise<AssignPlanToUserResponse> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).AssignPlanToUserRequest();
        request.setPlanCode(params.planCode);
        request.setUserId(params.userId);
        request.setBusinessId(params.businessId);

        const startAtTimestamp = new Timestamp();
        startAtTimestamp.setSeconds(Math.floor(params.startAt.getTime() / 1000));
        request.setStartAt(startAtTimestamp);

        if (params.endAt) {
          const endAtTimestamp = new Timestamp();
          endAtTimestamp.setSeconds(Math.floor(params.endAt.getTime() / 1000));
          request.setEndAt(endAtTimestamp);
        }

        if (params.expiresAt) {
          const expiresAtTimestamp = new Timestamp();
          expiresAtTimestamp.setSeconds(
            Math.floor(params.expiresAt.getTime() / 1000)
          );
          request.setExpiresAt(expiresAtTimestamp);
        }

        if (params.notes) {
          request.setNotes(params.notes);
        }

        const metadata = this.buildMetadata(options);

        (this.client as any).assignPlanToUser(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const assignment = response.getAssignment();
              resolve({
                assignment: this.parseAssignment(assignment),
                emailSent: response.getEmailSent(),
              });
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async getPlanAssignment(
    id: string,
    options?: AuthOptions
  ): Promise<PlanAssignment> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).GetPlanAssignmentRequest();
        request.setId(id);

        const metadata = this.buildMetadata(options);

        (this.client as any).getPlanAssignment(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const assignment = response.getAssignment();
              resolve(this.parseAssignment(assignment));
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async listPlanAssignments(
    params?: ListPlanAssignmentsParams,
    options?: AuthOptions
  ): Promise<ListPlanAssignmentsResponse> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).ListPlanAssignmentsRequest();
        if (params?.userId) request.setUserId(params.userId);
        if (params?.businessId) request.setBusinessId(params.businessId);
        if (params?.status !== undefined) request.setStatus(params.status);
        if (params?.pageSize) request.setPageSize(params.pageSize);
        if (params?.pageToken) request.setPageToken(params.pageToken);

        const metadata = this.buildMetadata(options);

        (this.client as any).listPlanAssignments(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const assignments = response
                .getAssignmentsList()
                .map((assignment: any) => this.parseAssignment(assignment));

              resolve({
                assignments,
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

  async acceptPlanAssignment(
    id: string,
    options?: AuthOptions
  ): Promise<AcceptPlanAssignmentResponse> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).AcceptPlanAssignmentRequest();
        request.setId(id);

        const metadata = this.buildMetadata(options);

        (this.client as any).acceptPlanAssignment(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const assignment = response.getAssignment();
              resolve({
                assignment: this.parseAssignment(assignment),
                subscriptionId: response.getSubscriptionId(),
                invoiceId: response.getInvoiceId(),
              });
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async rejectPlanAssignment(
    id: string,
    reason: string,
    options?: AuthOptions
  ): Promise<PlanAssignment> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).RejectPlanAssignmentRequest();
        request.setId(id);
        request.setReason(reason);

        const metadata = this.buildMetadata(options);

        (this.client as any).rejectPlanAssignment(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const assignment = response.getAssignment();
              resolve(this.parseAssignment(assignment));
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async cancelPlanAssignment(
    id: string,
    reason: string,
    options?: AuthOptions
  ): Promise<PlanAssignment> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).CancelPlanAssignmentRequest();
        request.setId(id);
        request.setReason(reason);

        const metadata = this.buildMetadata(options);

        (this.client as any).cancelPlanAssignment(
          request,
          metadata,
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const assignment = response.getAssignment();
              resolve(this.parseAssignment(assignment));
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  private parseAssignment(assignment: any): PlanAssignment {
    const obj = assignment.toObject();
    return {
      id: obj.id,
      planCode: obj.planCode,
      userId: obj.userId,
      businessId: obj.businessId,
      assignedBy: obj.assignedBy,
      status: obj.status,
      startAt: obj.startAt
        ? new Date(obj.startAt.seconds * 1000)
        : new Date(),
      endAt: obj.endAt ? new Date(obj.endAt.seconds * 1000) : new Date(),
      expiresAt: obj.expiresAt
        ? new Date(obj.expiresAt.seconds * 1000)
        : new Date(),
      subscriptionId: obj.subscriptionId,
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

export const planAssignmentService = new PlanAssignmentService();
export default planAssignmentService;
